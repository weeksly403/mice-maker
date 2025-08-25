import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLanguage } from './LanguageProvider';
import { analytics } from '@/utils/analytics';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar, Phone, Clock, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ScheduleCallDialogProps {
  children: React.ReactNode;
}

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(1, 'Phone number is required'),
  company: z.string().min(2, 'Company name is required'),
  timezone: z.string().min(1, 'Timezone is required'),
  preferredDate: z.string().min(1, 'Preferred date is required'),
  preferredTime: z.string().min(1, 'Preferred time is required'),
  callReason: z.string().min(1, 'Call reason is required'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export const ScheduleCallDialog: React.FC<ScheduleCallDialogProps> = ({ children }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      timezone: '',
      preferredDate: '',
      preferredTime: '',
      callReason: '',
      message: '',
    },
  });

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Track call scheduling conversion
      analytics.trackCallScheduled();
      analytics.trackFormSubmit('schedule_call');
      
      // Create call in database
      const { error } = await supabase
        .from('calls')
        .insert({
          company: data.company,
          contact_name: data.name,
          email: data.email,
          phone: data.phone,
          timezone: data.timezone,
          preferred_date: data.preferredDate,
          preferred_time: data.preferredTime,
          call_reason: data.callReason,
          message: data.message || null,
          status: 'Requested'
        } as any);

      if (error) {
        throw error;
      }
    
      toast({
        title: t('callScheduled'),
        description: t('callScheduledDesc'),
      });
      
      form.reset();
      setOpen(false);
    } catch (error) {
      console.error('Error scheduling call:', error);
      toast({
        title: 'Error',
        description: 'Failed to schedule call. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
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
        
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('fullName')} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t('fullNamePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('companyName')} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t('companyNamePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('emailAddress')} *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder={t('emailPlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('phoneNumber')} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t('phonePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="timezone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('timezone')} *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('selectTimezone')} />
                    </SelectTrigger>
                  </FormControl>
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
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('preferredDate')} *</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="preferredTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('preferredTime')} *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t('selectTime')} />
                      </SelectTrigger>
                    </FormControl>
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="callReason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('callReason')} *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('selectCallReason')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="quote">{t('getQuote')}</SelectItem>
                    <SelectItem value="consultation">{t('freeConsultation')}</SelectItem>
                    <SelectItem value="venues">{t('venueSelection')}</SelectItem>
                    <SelectItem value="planning">{t('eventPlanning')}</SelectItem>
                    <SelectItem value="partnership">{t('partnership')}</SelectItem>
                    <SelectItem value="other">{t('other')}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('additionalNotes')}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t('callNotesPlaceholder')}
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Scheduling...' : t('scheduleMyCall')}
          </Button>
          
          <p className="text-sm text-muted-foreground text-center">
            {t('callDisclaimer')}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};