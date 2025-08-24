import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { analytics } from '@/utils/analytics';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Phone, Clock, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ScheduleCallDialogProps {
  children: React.ReactNode;
}

export const ScheduleCallDialog: React.FC<ScheduleCallDialogProps> = ({ children }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    timezone: '',
    preferredDate: '',
    preferredTime: '',
    callReason: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track call scheduling conversion
    analytics.trackCallScheduled();
    analytics.trackFormSubmit('schedule_call');
    
    toast({
      title: t('callScheduled'),
      description: t('callScheduledDesc'),
    });
    
    // Reset form and close dialog
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      timezone: '',
      preferredDate: '',
      preferredTime: '',
      callReason: '',
      message: ''
    });
    setOpen(false);
  };

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const timezones = [
    { value: 'GMT+1', label: 'Morocco (GMT+1)' },
    { value: 'GMT+0', label: 'London (GMT+0)' },
    { value: 'GMT+1-europe', label: 'Paris/Madrid (GMT+1)' },
    { value: 'GMT+2', label: 'Berlin (GMT+2)' },
    { value: 'GMT+3', label: 'Dubai (GMT+3)' },
    { value: 'GMT+4', label: 'Abu Dhabi (GMT+4)' }
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif font-bold text-foreground flex items-center">
            <Phone className="w-6 h-6 mr-3 text-primary" />
            {t('bookCall')}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('fullName')} *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder={t('fullNamePlaceholder')}
                required
              />
            </div>
            
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
              <Label htmlFor="phone">{t('phoneNumber')} *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder={t('phonePlaceholder')}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">{t('timezone')} *</Label>
            <Select value={formData.timezone} onValueChange={(value) => handleInputChange('timezone', value)}>
              <SelectTrigger>
                <SelectValue placeholder={t('selectTimezone')} />
              </SelectTrigger>
              <SelectContent>
                {timezones.map((tz) => (
                  <SelectItem key={tz.value} value={tz.value}>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      {tz.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredDate">{t('preferredDate')} *</Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="preferredTime">{t('preferredTime')} *</Label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                <SelectTrigger>
                  <SelectValue placeholder={t('selectTime')} />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {time}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="callReason">{t('callReason')} *</Label>
            <Select value={formData.callReason} onValueChange={(value) => handleInputChange('callReason', value)}>
              <SelectTrigger>
                <SelectValue placeholder={t('selectCallReason')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="quote">{t('getQuote')}</SelectItem>
                <SelectItem value="consultation">{t('freeConsultation')}</SelectItem>
                <SelectItem value="venues">{t('venueSelection')}</SelectItem>
                <SelectItem value="planning">{t('eventPlanning')}</SelectItem>
                <SelectItem value="partnership">{t('partnership')}</SelectItem>
                <SelectItem value="other">{t('other')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('additionalNotes')}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={t('callNotesPlaceholder')}
              rows={3}
            />
          </div>

          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              {t('whatToExpect')}
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {t('callExpectation1')}</li>
              <li>• {t('callExpectation2')}</li>
              <li>• {t('callExpectation3')}</li>
              <li>• {t('callExpectation4')}</li>
            </ul>
          </div>

          <Button type="submit" variant="cta" size="lg" className="w-full">
            {t('scheduleMyCall')}
          </Button>
          
          <p className="text-sm text-muted-foreground text-center">
            {t('callDisclaimer')}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};