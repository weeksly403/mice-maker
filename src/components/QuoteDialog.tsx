import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QuoteDialogProps {
  children: React.ReactNode;
  title?: string;
}

export const QuoteDialog: React.FC<QuoteDialogProps> = ({ children, title }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    eventType: '',
    groupSize: '',
    city: '',
    dates: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: t('quoteSent'),
      description: t('quoteSentDesc'),
    });
    
    // Reset form and close dialog
    setFormData({
      company: '',
      name: '',
      email: '',
      phone: '',
      eventType: '',
      groupSize: '',
      city: '',
      dates: '',
      budget: '',
      message: ''
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif font-bold text-foreground">
            {title || t('getProposal24h')}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            
            <div className="space-y-2">
              <Label htmlFor="dates">{t('preferredDates')}</Label>
              <Input
                id="dates"
                value={formData.dates}
                onChange={(e) => handleInputChange('dates', e.target.value)}
                placeholder={t('datesPlaceholder')}
              />
            </div>
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

          <div className="space-y-2">
            <Label htmlFor="message">{t('additionalRequirements')}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={t('messagePlaceholder')}
              rows={3}
            />
          </div>

          <Button type="submit" variant="cta" size="lg" className="w-full">
            {t('sendProposalRequest')}
          </Button>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {t('responseTime24h')}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              {t('freeConsultation')}
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};