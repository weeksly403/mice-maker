import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { analytics } from '@/utils/analytics';

const formSchema = z.object({
  company: z.string().min(2, 'Company name is required'),
  contactName: z.string().min(2, 'Contact name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  country: z.string().optional(),
  packageInterest: z.string().optional(),
  preferredCities: z.array(z.string()).optional(),
  eventType: z.string().optional(),
  groupSize: z.string().optional(),
  preferredDates: z.string().optional(),
  budgetRange: z.string().optional(),
  specialRequirements: z.string().optional(),
  consentGiven: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms',
  }),
});

type FormData = z.infer<typeof formSchema>;

interface AfconLeadFormProps {
  packageType?: string;
  source?: string;
  leadMagnet?: string;
  onSuccess?: () => void;
  simplified?: boolean;
}

export const AfconLeadForm = ({
  packageType,
  source = 'Website',
  leadMagnet,
  onSuccess,
  simplified = false,
}: AfconLeadFormProps) => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: '',
      contactName: '',
      email: '',
      phone: '',
      country: '',
      packageInterest: packageType || '',
      preferredCities: [],
      eventType: '',
      groupSize: '',
      preferredDates: '',
      budgetRange: '',
      specialRequirements: '',
      consentGiven: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('afcon_leads').insert([
        {
          company: data.company,
          contact_name: data.contactName,
          email: data.email,
          phone: data.phone || null,
          country: data.country || null,
          package_interest: data.packageInterest || null,
          preferred_cities: data.preferredCities || [],
          event_type: data.eventType || null,
          group_size: data.groupSize || null,
          preferred_dates: data.preferredDates || null,
          budget_range: data.budgetRange || null,
          special_requirements: data.specialRequirements || null,
          source,
          lead_magnet_downloaded: leadMagnet || null,
          consent_given: data.consentGiven,
          consent_source: 'AfconLandingPage',
        },
      ]);

      if (error) throw error;

      // Track analytics
      analytics.trackFormSubmit('quote');

      toast.success(t('afcon.form.successMessage'));
      form.reset();
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast.error(t('afcon.form.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (simplified) {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('afcon.form.company')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('afcon.form.companyPlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('afcon.form.name')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('afcon.form.namePlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('afcon.form.email')}</FormLabel>
                <FormControl>
                  <Input type="email" placeholder={t('afcon.form.emailPlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consentGiven"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-sm font-normal cursor-pointer">
                  {t('afcon.form.consent')}
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {t('afcon.form.submit')}
          </Button>
        </form>
      </Form>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('afcon.form.company')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('afcon.form.companyPlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('afcon.form.name')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('afcon.form.namePlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('afcon.form.email')}</FormLabel>
                <FormControl>
                  <Input type="email" placeholder={t('afcon.form.emailPlaceholder')} {...field} />
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
                <FormLabel>{t('afcon.form.phone')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('afcon.form.phonePlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('afcon.form.country')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('afcon.form.countryPlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="packageInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('afcon.form.packageInterest')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('afcon.form.selectPackage')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="vip">{t('afcon.packages.vip.name')}</SelectItem>
                    <SelectItem value="premium">{t('afcon.packages.premium.name')}</SelectItem>
                    <SelectItem value="essential">{t('afcon.packages.essential.name')}</SelectItem>
                    <SelectItem value="custom">{t('afcon.form.customPackage')}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('afcon.form.eventType')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('afcon.form.selectEventType')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Hospitality">{t('afcon.form.hospitality')}</SelectItem>
                    <SelectItem value="Conference">{t('afcon.form.conference')}</SelectItem>
                    <SelectItem value="Gala">{t('afcon.form.gala')}</SelectItem>
                    <SelectItem value="TeamBuilding">{t('afcon.form.teamBuilding')}</SelectItem>
                    <SelectItem value="Other">{t('afcon.form.other')}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="groupSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('afcon.form.groupSize')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('afcon.form.selectGroupSize')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="<30">{t('afcon.form.groupSize1')}</SelectItem>
                    <SelectItem value="30-80">{t('afcon.form.groupSize2')}</SelectItem>
                    <SelectItem value="80-150">{t('afcon.form.groupSize3')}</SelectItem>
                    <SelectItem value="150+">{t('afcon.form.groupSize4')}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="preferredDates"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('afcon.form.preferredDates')}</FormLabel>
              <FormControl>
                <Input placeholder={t('afcon.form.datesPlaceholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="specialRequirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('afcon.form.specialRequirements')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('afcon.form.requirementsPlaceholder')}
                  {...field}
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consentGiven"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-sm font-normal cursor-pointer">
                {t('afcon.form.consent')}
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {t('afcon.form.submit')}
        </Button>
      </form>
    </Form>
  );
};
