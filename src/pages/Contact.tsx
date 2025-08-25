import React, { useState } from 'react';
import { format } from 'date-fns';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLanguage } from '@/components/LanguageProvider';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar as CalendarIcon, Users, Star, Shield, CheckCircle, Building } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import heroImage from '@/assets/hero-morocco-mice.jpg';

const formSchema = z.object({
  company: z.string().min(2, 'Company name is required'),
  name: z.string().min(2, 'Contact name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  eventType: z.string().min(1, 'Please select an event type'),
  groupSize: z.string().min(1, 'Please select group size'),
  city: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: '',
      name: '',
      email: '',
      phone: '',
      eventType: '',
      groupSize: '',
      city: '',
      budget: '',
      message: '',
    },
  });

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Map form data to database schema - only using valid enum values
      const eventTypeMap: Record<string, string> = {
        'conference': 'Conference',
        'seminar': 'Seminar',
        'incentive': 'Incentive',
        'teambuilding': 'TeamBuilding',
        'retreat': 'Retreat',
        'gala': 'Gala',
        'convention': 'Conference', // Map to Conference as closest match
        'product-launch': 'Other',
        'training': 'Seminar', // Map to Seminar as closest match
        'networking': 'Other',
        'other': 'Other'
      };

      const groupSizeMap: Record<string, string> = {
        '10-25': '<30',
        '25-50': '30-80',
        '50-100': '80-150', 
        '100-200': '150-300',
        '200+': '300+'
      };

      const cityMap: Record<string, string> = {
        'marrakech': 'Marrakech',
        'casablanca': 'Casablanca',
        'agadir': 'Agadir',
        'fes': 'Fes',
        'sahara': 'Sahara'
      };

      // Format dates for dates_text
      let datesText = '';
      if (data.startDate || data.endDate) {
        const startDateStr = data.startDate ? format(data.startDate, 'yyyy-MM-dd') : '';
        const endDateStr = data.endDate ? format(data.endDate, 'yyyy-MM-dd') : '';
        if (startDateStr && endDateStr) {
          datesText = `${startDateStr} to ${endDateStr}`;
        } else if (startDateStr) {
          datesText = `From ${startDateStr}`;
        } else if (endDateStr) {
          datesText = `Until ${endDateStr}`;
        }
      }

      // Create lead in database
      const { error } = await supabase
        .from('leads')
        .insert({
          company: data.company,
          contact_name: data.name,
          email: data.email,
          phone: data.phone || null,
          event_types: data.eventType ? [eventTypeMap[data.eventType] || 'Other'] : ['Conference'],
          group_size: data.groupSize ? groupSizeMap[data.groupSize] || null : null,
          preferred_cities: data.city ? [cityMap[data.city] || 'NotSure'] : ['NotSure'],
          dates_text: datesText || null,
          budget_per_person: data.budget ? parseFloat(data.budget) || null : null,
          follow_up_remark: data.message || null,
          source: 'Website',
          language: language === 'fr' ? 'FR' : language === 'es' ? 'ES' : language === 'ar' ? 'AR' : 'EN',
          status: 'New'
        } as any);

      if (error) {
        throw error;
      }
      
      toast({
        title: t('quoteSent'),
        description: t('quoteSentDesc'),
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: t('error') || 'Error',
        description: t('errorDesc') || 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Clock,
      text: t('responseWithin24h')
    },
    {
      icon: Shield,
      text: t('freeQuote100')
    },
    {
      icon: Star,
      text: t('localMiceExpert')
    },
    {
      icon: Users,
      text: t('personalizedConsultation')
    }
  ];

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
      content: 'info@eventsmorocco.com',
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
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="w-full"
                    onClick={() => openWhatsApp(undefined, language)}
                  >
                    {t('chatOnWhatsapp')}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card border-0">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                        {t('requestProposal')}
                      </h2>
                      
                      {/* Benefits bar */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg mb-8">
                        {benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                              <benefit.icon className="w-4 h-4 text-primary-foreground" />
                            </div>
                            <span className="text-muted-foreground">{benefit.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                        {/* Contact Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-foreground flex items-center">
                            <Building className="w-5 h-5 mr-2 text-primary" />
                            {t('contactInformation')}
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t('contactName')} *</FormLabel>
                                  <FormControl>
                                    <Input placeholder={t('contactNamePlaceholder')} {...field} />
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
                                  <FormLabel>{t('phoneNumber')}</FormLabel>
                                  <FormControl>
                                    <Input placeholder={t('phonePlaceholder')} {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-foreground flex items-center">
                            <CalendarIcon className="w-5 h-5 mr-2 text-primary" />
                            {t('eventDetails')}
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="eventType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t('eventType')} *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder={t('selectEventType')} />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="conference">{t('conferences')}</SelectItem>
                                      <SelectItem value="incentive">{t('incentiveTravel')}</SelectItem>
                                      <SelectItem value="teambuilding">{t('teamBuilding')}</SelectItem>
                                      <SelectItem value="retreat">{t('corporateRetreats')}</SelectItem>
                                      <SelectItem value="gala">{t('galaDinners')}</SelectItem>
                                      <SelectItem value="convention">{t('corporateConvention')}</SelectItem>
                                      <SelectItem value="product-launch">{t('productLaunch')}</SelectItem>
                                      <SelectItem value="training">{t('trainingWorkshop')}</SelectItem>
                                      <SelectItem value="networking">{t('networkingEvent')}</SelectItem>
                                      <SelectItem value="other">{t('other')}</SelectItem>
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
                                  <FormLabel>{t('groupSize')} *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder={t('selectGroupSize')} />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="10-25">10-25 {t('people')}</SelectItem>
                                      <SelectItem value="25-50">25-50 {t('people')}</SelectItem>
                                      <SelectItem value="50-100">50-100 {t('people')}</SelectItem>
                                      <SelectItem value="100-200">100-200 {t('people')}</SelectItem>
                                      <SelectItem value="200+">200+ {t('people')}</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FormField
                              control={form.control}
                              name="city"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t('preferredCity')}</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder={t('selectCity')} />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="marrakech">{t('marrakech')}</SelectItem>
                                      <SelectItem value="casablanca">{t('casablanca')}</SelectItem>
                                      <SelectItem value="agadir">{t('agadir')}</SelectItem>
                                      <SelectItem value="fes">{t('fes')}</SelectItem>
                                      <SelectItem value="sahara">{t('sahara')}</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="startDate"
                              render={({ field }) => (
                                <FormItem className="flex flex-col">
                                  <FormLabel>{t('startDate')}</FormLabel>
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <FormControl>
                                        <Button
                                          variant="outline"
                                          className={cn(
                                            "pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                          )}
                                        >
                                          {field.value ? (
                                            format(field.value, "PPP")
                                          ) : (
                                            <span>{t('pickStartDate')}</span>
                                          )}
                                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                      <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                          date < new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                      />
                                    </PopoverContent>
                                  </Popover>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="endDate"
                              render={({ field }) => (
                                <FormItem className="flex flex-col">
                                  <FormLabel>{t('endDate')}</FormLabel>
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <FormControl>
                                        <Button
                                          variant="outline"
                                          className={cn(
                                            "pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                          )}
                                        >
                                          {field.value ? (
                                            format(field.value, "PPP")
                                          ) : (
                                            <span>{t('pickEndDate')}</span>
                                          )}
                                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                      <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                          date < new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                      />
                                    </PopoverContent>
                                  </Popover>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        {/* Budget & Additional Info */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-foreground flex items-center">
                            <Star className="w-5 h-5 mr-2 text-primary" />
                            {t('budgetAndRequirements')}
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="budget"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t('estimatedBudget')}</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder={t('selectBudget')} />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="under-50k">{t('under')} €50,000</SelectItem>
                                      <SelectItem value="50k-100k">€50,000 - €100,000</SelectItem>
                                      <SelectItem value="100k-200k">€100,000 - €200,000</SelectItem>
                                      <SelectItem value="200k-500k">€200,000 - €500,000</SelectItem>
                                      <SelectItem value="over-500k">{t('over')} €500,000</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('additionalRequirements')}</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder={t('messagePlaceholder')}
                                    rows={4}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button type="submit" variant="cta" size="lg" className="w-full text-lg py-6" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                              {t('sending')}
                            </div>
                          ) : (
                            t('sendProposalRequest')
                          )}
                        </Button>
                        
                        <p className="text-sm text-muted-foreground text-center">
                          {t('formDisclaimer')}
                        </p>
                      </form>
                    </Form>
                  </div>
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