import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-morocco-mice.jpg';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    groupSize: '',
    dates: '',
    budget: '',
    city: '',
    eventType: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('ourOffice'),
      content: 'Marrakech, Morocco',
      subContent: t('officeAddress')
    },
    {
      icon: Phone,
      title: t('phoneNumber'),
      content: '+212 5XX XX XX XX',
      subContent: t('businessHours')
    },
    {
      icon: Mail,
      title: t('emailAddress'),
      content: 'info@moroccomice.com',
      subContent: t('responseTime24h')
    },
    {
      icon: Clock,
      title: t('businessHours'),
      content: '9:00 - 18:00',
      subContent: t('mondayToFriday')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero opacity-90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
            {t('contactPageTitle')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {t('contactPageDesc')}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  {t('getInTouch')}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t('getInTouchDesc')}
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-foreground font-medium">
                        {info.content}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.subContent}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="gradient-primary text-primary-foreground border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <MessageCircle className="w-6 h-6" />
                    <h3 className="font-semibold text-lg">
                      {t('whatsappContact')}
                    </h3>
                  </div>
                  <p className="text-primary-foreground/90 mb-4">
                    {t('whatsappContactDesc')}
                  </p>
                  <Button variant="secondary" size="sm" className="w-full">
                    {t('chatOnWhatsapp')}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    {t('requestProposal')}
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">{t('companyName')} *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder={t('companyNamePlaceholder')}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('contactName')} *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder={t('contactNamePlaceholder')}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('emailAddress')} *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder={t('emailPlaceholder')}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t('phoneNumber')}</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder={t('phonePlaceholder')}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="eventType">{t('eventType')} *</Label>
                        <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('selectEventType')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="conference">{t('conferences')}</SelectItem>
                            <SelectItem value="incentive">{t('incentiveTravel')}</SelectItem>
                            <SelectItem value="teambuilding">{t('teamBuilding')}</SelectItem>
                            <SelectItem value="retreat">{t('corporateRetreats')}</SelectItem>
                            <SelectItem value="gala">{t('galaDinners')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="groupSize">{t('groupSize')} *</Label>
                        <Select value={formData.groupSize} onValueChange={(value) => handleInputChange('groupSize', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('selectGroupSize')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10-25">10-25 {t('people')}</SelectItem>
                            <SelectItem value="25-50">25-50 {t('people')}</SelectItem>
                            <SelectItem value="50-100">50-100 {t('people')}</SelectItem>
                            <SelectItem value="100-200">100-200 {t('people')}</SelectItem>
                            <SelectItem value="200+">200+ {t('people')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="city">{t('preferredCity')}</Label>
                        <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('selectCity')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="marrakech">{t('marrakech')}</SelectItem>
                            <SelectItem value="casablanca">{t('casablanca')}</SelectItem>
                            <SelectItem value="agadir">{t('agadir')}</SelectItem>
                            <SelectItem value="fes">{t('fes')}</SelectItem>
                            <SelectItem value="sahara">{t('sahara')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="dates">{t('preferredDates')}</Label>
                        <Input
                          id="dates"
                          value={formData.dates}
                          onChange={(e) => handleInputChange('dates', e.target.value)}
                          placeholder={t('datesPlaceholder')}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="budget">{t('estimatedBudget')}</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('selectBudget')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-50k">{t('under')} €50,000</SelectItem>
                            <SelectItem value="50k-100k">€50,000 - €100,000</SelectItem>
                            <SelectItem value="100k-200k">€100,000 - €200,000</SelectItem>
                            <SelectItem value="200k-500k">€200,000 - €500,000</SelectItem>
                            <SelectItem value="over-500k">{t('over')} €500,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('additionalRequirements')}</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder={t('messagePlaceholder')}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="cta" size="lg" className="w-full text-lg py-6">
                      {t('sendProposalRequest')}
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      {t('formDisclaimer')}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;