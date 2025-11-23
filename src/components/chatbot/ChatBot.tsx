import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Send, Globe, ArrowLeft, CheckCircle, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/LanguageProvider';
import { cn } from '@/lib/utils';
import { openWhatsAppWithEventDetails } from '@/utils/whatsapp';
import { chatbotTranslations, type ChatBotLanguage } from './chatbotTranslations';
import { ChatBotFAQ } from './ChatBotFAQ';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LeadData {
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventTypes: string[];
  cities: string[];
  groupSize: string;
  dates: string;
  budget: string;
  specialNeeds: string;
  consent: boolean;
}

type FlowStep = 'greeting' | 'eventType' | 'city' | 'groupSize' | 'dates' | 'budget' | 'contact' | 'specialNeeds' | 'consent' | 'success' | 'faq';

export const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState<FlowStep>('greeting');
  const [leadData, setLeadData] = useState<LeadData>({
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventTypes: [],
    cities: [],
    groupSize: '',
    dates: '',
    budget: '',
    specialNeeds: '',
    consent: false
  });
  const [chatLanguage, setChatLanguage] = useState<ChatBotLanguage>(language as ChatBotLanguage);
  const [messages, setMessages] = useState<Array<{ type: 'bot' | 'user'; content: string; timestamp: Date }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const t = chatbotTranslations[chatLanguage];
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(t.greeting);
    }
  }, [isOpen, t.greeting]);

  const addBotMessage = (content: string) => {
    setMessages(prev => [...prev, { type: 'bot', content, timestamp: new Date() }]);
  };

  const addUserMessage = (content: string) => {
    setMessages(prev => [...prev, { type: 'user', content, timestamp: new Date() }]);
  };

  const handleLanguageChange = (lang: ChatBotLanguage) => {
    setChatLanguage(lang);
    setShowLanguageSelector(false);
    addBotMessage(chatbotTranslations[lang].greeting);
  };

  const handleStepProgress = (step: FlowStep, data?: Partial<LeadData>) => {
    if (data) {
      setLeadData(prev => ({ ...prev, ...data }));
    }
    setCurrentStep(step);
    
    // Add bot message for next step
    switch(step) {
      case 'eventType':
        addBotMessage(t.steps.eventType);
        break;
      case 'city':
        addBotMessage(t.steps.city);
        break;
      case 'groupSize':
        addBotMessage(t.steps.groupSize);
        break;
      case 'dates':
        addBotMessage(t.steps.dates);
        break;
      case 'budget':
        addBotMessage(t.steps.budget);
        break;
      case 'contact':
        addBotMessage(t.steps.contact);
        break;
      case 'specialNeeds':
        addBotMessage(t.steps.specialNeeds);
        break;
      case 'consent':
        addBotMessage(t.steps.consent);
        break;
    }
  };

  const handleEventTypeSelect = (eventType: string) => {
    const updatedTypes = leadData.eventTypes.includes(eventType)
      ? leadData.eventTypes.filter(type => type !== eventType)
      : [...leadData.eventTypes, eventType];
    
    addUserMessage(eventType);
    setLeadData(prev => ({ ...prev, eventTypes: updatedTypes }));
    
    if (updatedTypes.length > 0) {
      setTimeout(() => handleStepProgress('city'), 500);
    }
  };

  const handleCitySelect = (city: string) => {
    const updatedCities = leadData.cities.includes(city)
      ? leadData.cities.filter(c => c !== city)
      : [...leadData.cities, city];
    
    addUserMessage(city);
    setLeadData(prev => ({ ...prev, cities: updatedCities }));
    
    if (updatedCities.length > 0) {
      setTimeout(() => handleStepProgress('groupSize'), 500);
    }
  };

  const handleGroupSizeSelect = (size: string) => {
    addUserMessage(size);
    handleStepProgress('dates', { groupSize: size });
  };

  const handleBudgetSelect = (budget: string) => {
    addUserMessage(budget);
    handleStepProgress('contact', { budget });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const company = formData.get('company') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    if (!company || !firstName || !lastName || !email) {
      return;
    }

    if (!validateEmail(email)) {
      addBotMessage(t.validation.emailInvalid);
      return;
    }

    addUserMessage(`${company} - ${firstName} ${lastName}`);
    handleStepProgress('specialNeeds', { company, firstName, lastName, email, phone });
  };

  const handleSpecialNeedsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const specialNeeds = formData.get('specialNeeds') as string;

    addUserMessage(specialNeeds || t.validation.noSpecialNeeds);
    handleStepProgress('consent', { specialNeeds });
  };

  const handleFinalSubmit = async () => {
    if (!leadData.consent) return;

    setIsLoading(true);
    addUserMessage(t.validation.consentAccepted);

    try {
      // Generate reference ID
      const refId = `EM-${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
      
      // Prepare lead data for submission
      const leadPayload = {
        ...leadData,
        referenceId: refId,
        pageUrl: window.location.href,
        language: chatLanguage,
        timestamp: new Date().toISOString()
      };

      // Send to webhook if LEAD_WEBHOOK_URL is available
      if (process.env.LEAD_WEBHOOK_URL) {
        await fetch(process.env.LEAD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadPayload)
        });
      }

      // Send email notification (this would need backend implementation)
      console.log('Lead captured:', leadPayload);

      addBotMessage(`${t.success.message} ${refId}`);
      setCurrentStep('success');
      
    } catch (error) {
      console.error('Error submitting lead:', error);
      addBotMessage(t.validation.submitError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppHandoff = () => {
    const eventDetails = {
      eventType: leadData.eventTypes.join(', '),
      city: leadData.cities.join(', '),
      participants: leadData.groupSize,
      dates: leadData.dates
    };
    
    openWhatsAppWithEventDetails(eventDetails, chatLanguage);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'greeting':
        return (
          <div className="space-y-4">
            <Button 
              onClick={() => handleStepProgress('eventType')} 
              className="w-full"
            >
              {t.actions.startProposal}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep('faq')}
              className="w-full"
            >
              {t.actions.browseFAQ}
            </Button>
          </div>
        );

      case 'eventType':
        return (
          <div className="grid grid-cols-1 gap-2">
            {t.options.eventTypes.map((type) => (
              <Button
                key={type}
                variant={leadData.eventTypes.includes(type) ? "default" : "outline"}
                onClick={() => handleEventTypeSelect(type)}
                className="text-left justify-start"
              >
                {type}
                {leadData.eventTypes.includes(type) && <CheckCircle className="ml-auto h-4 w-4" />}
              </Button>
            ))}
            {leadData.eventTypes.length > 0 && (
              <Button onClick={() => handleStepProgress('city')} className="mt-2">
                {t.actions.continue}
              </Button>
            )}
          </div>
        );

      case 'city':
        return (
          <div className="grid grid-cols-1 gap-2">
            {t.options.cities.map((city) => (
              <Button
                key={city}
                variant={leadData.cities.includes(city) ? "default" : "outline"}
                onClick={() => handleCitySelect(city)}
                className="text-left justify-start"
              >
                {city}
                {leadData.cities.includes(city) && <CheckCircle className="ml-auto h-4 w-4" />}
              </Button>
            ))}
            {leadData.cities.length > 0 && (
              <Button onClick={() => handleStepProgress('groupSize')} className="mt-2">
                {t.actions.continue}
              </Button>
            )}
          </div>
        );

      case 'groupSize':
        return (
          <div className="grid grid-cols-1 gap-2">
            {t.options.groupSizes.map((size) => (
              <Button
                key={size}
                variant="outline"
                onClick={() => handleGroupSizeSelect(size)}
                className="text-left justify-start"
              >
                {size}
              </Button>
            ))}
          </div>
        );

      case 'dates':
        return (
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const dates = formData.get('dates') as string;
            addUserMessage(dates);
            handleStepProgress('budget', { dates });
          }} className="space-y-4">
            <Input
              name="dates"
              placeholder={t.placeholders.dates}
              required
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="flexible" />
              <label htmlFor="flexible" className="text-sm">{t.options.flexible}</label>
            </div>
            <Button type="submit" className="w-full">
              {t.actions.continue}
            </Button>
          </form>
        );

      case 'budget':
        return (
          <div className="grid grid-cols-1 gap-2">
            {t.options.budgets.map((budget) => (
              <Button
                key={budget}
                variant="outline"
                onClick={() => handleBudgetSelect(budget)}
                className="text-left justify-start"
              >
                {budget}
              </Button>
            ))}
          </div>
        );

      case 'contact':
        return (
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <Input
              name="company"
              placeholder={t.placeholders.company}
              required
            />
            <div className="grid grid-cols-2 gap-2">
              <Input
                name="firstName"
                placeholder={t.placeholders.firstName}
                required
              />
              <Input
                name="lastName"
                placeholder={t.placeholders.lastName}
                required
              />
            </div>
            <Input
              name="email"
              type="email"
              placeholder={t.placeholders.email}
              required
            />
            <Input
              name="phone"
              type="tel"
              placeholder={t.placeholders.phone}
            />
            <Button type="submit" className="w-full">
              {t.actions.continue}
            </Button>
          </form>
        );

      case 'specialNeeds':
        return (
          <form onSubmit={handleSpecialNeedsSubmit} className="space-y-4">
            <Textarea
              name="specialNeeds"
              placeholder={t.placeholders.specialNeeds}
              rows={4}
            />
            <div className="text-xs text-muted-foreground">
              {t.hints.specialNeeds}
            </div>
            <Button type="submit" className="w-full">
              {t.actions.continue}
            </Button>
          </form>
        );

      case 'consent':
        return (
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="consent"
                checked={leadData.consent}
                onChange={(e) => setLeadData(prev => ({ ...prev, consent: e.target.checked }))}
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm">
                {t.validation.consentText}
              </label>
            </div>
            <Button 
              onClick={handleFinalSubmit} 
              disabled={!leadData.consent || isLoading}
              className="w-full"
            >
              {isLoading ? t.actions.submitting : t.actions.submit}
            </Button>
          </div>
        );

      case 'success':
        return (
          <div className="space-y-4 text-center">
            <div className="text-green-600 font-medium">
              {t.success.description}
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Button onClick={handleWhatsAppHandoff} className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                {t.actions.whatsapp}
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {t.actions.email}
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {t.actions.call}
              </Button>
            </div>
          </div>
        );

      case 'faq':
        return (
          <ChatBotFAQ 
            language={chatLanguage}
            onBackToChat={() => setCurrentStep('greeting')}
            onStartProposal={() => handleStepProgress('eventType')}
          />
        );

      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed bottom-0 right-0 w-full h-full sm:w-96 sm:h-[600px] sm:bottom-4 sm:right-4 bg-background border rounded-t-lg sm:rounded-lg shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg sm:rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div>
              <div className="font-medium">Event Morocco</div>
              <div className="text-xs opacity-90">{t.subtitle}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowLanguageSelector(!showLanguageSelector)}
              className="text-white hover:bg-white/20"
              aria-label={`Change chatbot language - Current: ${chatLanguage.toUpperCase()}`}
              aria-expanded={showLanguageSelector}
              aria-haspopup="true"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
              aria-label="Close chatbot"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Language Selector */}
        {showLanguageSelector && (
          <div className="border-b bg-muted p-2">
            <div className="grid grid-cols-4 gap-1">
              {(['fr', 'en', 'es', 'ar'] as ChatBotLanguage[]).map((lang) => (
                <Button
                  key={lang}
                  variant={chatLanguage === lang ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleLanguageChange(lang)}
                  className="text-xs"
                >
                  {lang.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex",
                message.type === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] px-3 py-2 rounded-lg text-sm",
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                )}
              >
                {message.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Current Step */}
        <div className="p-4 border-t bg-muted/30">
          {renderCurrentStep()}
        </div>

        {/* Progress */}
        {currentStep !== 'greeting' && currentStep !== 'faq' && currentStep !== 'success' && (
          <div className="px-4 py-2 border-t">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{t.progress.step} {getStepNumber(currentStep)}/7</span>
              <span>{t.progress.almostDone}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const getStepNumber = (step: FlowStep): number => {
  const steps = ['eventType', 'city', 'groupSize', 'dates', 'budget', 'contact', 'specialNeeds'];
  return steps.indexOf(step) + 1;
};