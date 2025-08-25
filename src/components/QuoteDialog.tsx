import React, { useState } from 'react';
import { format } from 'date-fns';
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
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar as CalendarIcon, Clock, Users, MapPin, Star, Shield, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface QuoteDialogProps {
  children: React.ReactNode;
  title?: string;
}

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

export const QuoteDialog: React.FC<QuoteDialogProps> = ({ children, title }) => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
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
      // Track quote request conversion
      analytics.trackQuoteRequest();
      analytics.trackFormSubmit('quote');
      
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
        'board-meeting': 'Conference', // Map to Conference as closest match
        'training': 'Seminar', // Map to Seminar as closest match
        'wedding': 'Other', // Map to Other since Wedding is not in enum
        'family-trip': 'Incentive', // Map to Incentive as closest match
        'networking': 'Other',
        'exhibition': 'Other',
        'medical': 'Conference', // Map to Conference as closest match
        'awards': 'Gala', // Map to Gala as closest match
        'press-trip': 'Other',
        'other': 'Other'
      };

      const groupSizeMap: Record<string, string> = {
        '10-25': '10-25',
        '25-50': '25-50', 
        '50-100': '50-100',
        '100-200': '100-200',
        '200+': '200+'
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
        title: language === 'fr' ? 'Demande envoyée !' : language === 'es' ? '¡Solicitud enviada!' : language === 'ar' ? 'تم إرسال الطلب!' : 'Request sent!',
        description: language === 'fr' ? 'Nous vous répondrons dans les 24h avec une proposition personnalisée.' : language === 'es' ? 'Le responderemos en 24h con una propuesta personalizada.' : language === 'ar' ? 'سنرد عليك خلال 24 ساعة مع اقتراح مخصص.' : 'We will respond within 24h with a personalized proposal.',
      });
      
      form.reset();
      setOpen(false);
    } catch (error) {
      console.error('Error submitting quote request:', error);
      toast({
        title: language === 'fr' ? 'Erreur' : language === 'es' ? 'Error' : language === 'ar' ? 'خطأ' : 'Error',
        description: language === 'fr' ? 'Une erreur est survenue. Veuillez réessayer.' : language === 'es' ? 'Ocurrió un error. Por favor intente de nuevo.' : language === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Clock,
      text: language === 'fr' ? 'Réponse sous 24h' : language === 'es' ? 'Respuesta en 24h' : language === 'ar' ? 'الرد خلال 24 ساعة' : 'Response within 24h'
    },
    {
      icon: Shield,
      text: language === 'fr' ? 'Devis 100% gratuit' : language === 'es' ? 'Cotización 100% gratuita' : language === 'ar' ? 'عرض سعر مجاني 100%' : '100% free quote'
    },
    {
      icon: Star,
      text: language === 'fr' ? 'Expert MICE local' : language === 'es' ? 'Experto MICE local' : language === 'ar' ? 'خبير السياحة التجارية المحلي' : 'Local MICE expert'
    },
    {
      icon: Users,
      text: language === 'fr' ? 'Consultation personnalisée' : language === 'es' ? 'Consulta personalizada' : language === 'ar' ? 'استشارة مخصصة' : 'Personalized consultation'
    }
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto">
        <DialogHeader className="space-y-4 pb-6">
          <DialogTitle className="text-3xl font-serif font-bold text-foreground text-center">
            {title || (language === 'fr' ? 'Demandez votre Devis Gratuit' : language === 'es' ? 'Solicite su Cotización Gratuita' : language === 'ar' ? 'اطلب عرض السعر المجاني' : 'Request Your Free Quote')}
          </DialogTitle>
          
          {/* Benefits bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-muted-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                {language === 'fr' ? 'Informations de Contact' : language === 'es' ? 'Información de Contacto' : language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{language === 'fr' ? 'Nom de l\'entreprise' : language === 'es' ? 'Nombre de la empresa' : language === 'ar' ? 'اسم الشركة' : 'Company name'} *</FormLabel>
                      <FormControl>
                        <Input placeholder={language === 'fr' ? 'Votre entreprise' : language === 'es' ? 'Su empresa' : language === 'ar' ? 'شركتك' : 'Your company'} {...field} />
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
                      <FormLabel>{language === 'fr' ? 'Nom du contact' : language === 'es' ? 'Nombre del contacto' : language === 'ar' ? 'اسم جهة الاتصال' : 'Contact name'} *</FormLabel>
                      <FormControl>
                        <Input placeholder={language === 'fr' ? 'Votre nom' : language === 'es' ? 'Su nombre' : language === 'ar' ? 'اسمك' : 'Your name'} {...field} />
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
                      <FormLabel>{language === 'fr' ? 'Adresse email' : language === 'es' ? 'Dirección de correo' : language === 'ar' ? 'عنوان البريد الإلكتروني' : 'Email address'} *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={language === 'fr' ? 'votre@email.com' : language === 'es' ? 'su@email.com' : language === 'ar' ? 'بريدك@الإلكتروني.com' : 'your@email.com'} {...field} />
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
                      <FormLabel>{language === 'fr' ? 'Numéro de téléphone' : language === 'es' ? 'Número de teléfono' : language === 'ar' ? 'رقم الهاتف' : 'Phone number'}</FormLabel>
                      <FormControl>
                        <Input placeholder={language === 'fr' ? '+33 6 12 34 56 78' : language === 'es' ? '+34 612 345 678' : language === 'ar' ? '+212 6 12 34 56 78' : '+1 234 567 8900'} {...field} />
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
                {language === 'fr' ? 'Détails de l\'Événement' : language === 'es' ? 'Detalles del Evento' : language === 'ar' ? 'تفاصيل الفعالية' : 'Event Details'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{language === 'fr' ? 'Type d\'événement' : language === 'es' ? 'Tipo de evento' : language === 'ar' ? 'نوع الفعالية' : 'Event type'} *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={language === 'fr' ? 'Sélectionnez le type' : language === 'es' ? 'Seleccione el tipo' : language === 'ar' ? 'اختر النوع' : 'Select type'} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="conference">{language === 'fr' ? 'Conférence' : language === 'es' ? 'Conferencia' : language === 'ar' ? 'مؤتمر' : 'Conference'}</SelectItem>
                          <SelectItem value="incentive">{language === 'fr' ? 'Voyage Incentive' : language === 'es' ? 'Viaje de Incentivo' : language === 'ar' ? 'رحلة تحفيزية' : 'Incentive Trip'}</SelectItem>
                          <SelectItem value="teambuilding">{language === 'fr' ? 'Team Building' : language === 'es' ? 'Team Building' : language === 'ar' ? 'بناء الفريق' : 'Team Building'}</SelectItem>
                          <SelectItem value="retreat">{language === 'fr' ? 'Séminaire' : language === 'es' ? 'Seminario' : language === 'ar' ? 'ندوة' : 'Corporate Retreat'}</SelectItem>
                          <SelectItem value="gala">{language === 'fr' ? 'Dîner de Gala' : language === 'es' ? 'Cena de Gala' : language === 'ar' ? 'عشاء احتفالي' : 'Gala Dinner'}</SelectItem>
                          <SelectItem value="convention">{language === 'fr' ? 'Convention d\'Entreprise' : language === 'es' ? 'Convención Corporativa' : language === 'ar' ? 'مؤتمر شركات' : 'Corporate Convention'}</SelectItem>
                          <SelectItem value="product-launch">{language === 'fr' ? 'Lancement de Produit' : language === 'es' ? 'Lanzamiento de Producto' : language === 'ar' ? 'إطلاق منتج' : 'Product Launch'}</SelectItem>
                          <SelectItem value="board-meeting">{language === 'fr' ? 'Réunion Conseil d\'Administration' : language === 'es' ? 'Reunión Junta Directiva' : language === 'ar' ? 'اجتماع مجلس إدارة' : 'Board Meeting'}</SelectItem>
                          <SelectItem value="training">{language === 'fr' ? 'Formation/Workshop' : language === 'es' ? 'Capacitación/Taller' : language === 'ar' ? 'تدريب/ورشة عمل' : 'Training/Workshop'}</SelectItem>
                          <SelectItem value="wedding">{language === 'fr' ? 'Mariage d\'Entreprise' : language === 'es' ? 'Boda Corporativa' : language === 'ar' ? 'زفاف شركات' : 'Corporate Wedding'}</SelectItem>
                          <SelectItem value="family-trip">{language === 'fr' ? 'Voyage de Famille/Familial' : language === 'es' ? 'Viaje Familiar/Fam Trip' : language === 'ar' ? 'رحلة عائلية' : 'Family Trip/Fam Trip'}</SelectItem>
                          <SelectItem value="networking">{language === 'fr' ? 'Événement de Networking' : language === 'es' ? 'Evento de Networking' : language === 'ar' ? 'فعالية تواصل' : 'Networking Event'}</SelectItem>
                          <SelectItem value="exhibition">{language === 'fr' ? 'Salon/Exposition' : language === 'es' ? 'Feria/Exposición' : language === 'ar' ? 'معرض/عرض تجاري' : 'Trade Show/Exhibition'}</SelectItem>
                          <SelectItem value="medical">{language === 'fr' ? 'Congrès Médical' : language === 'es' ? 'Congreso Médico' : language === 'ar' ? 'مؤتمر طبي' : 'Medical Congress'}</SelectItem>
                          <SelectItem value="awards">{language === 'fr' ? 'Récompenses/Awards' : language === 'es' ? 'Ceremonia de Premios' : language === 'ar' ? 'حفل جوائز' : 'Awards Ceremony'}</SelectItem>
                          <SelectItem value="press-trip">{language === 'fr' ? 'Voyage de Presse' : language === 'es' ? 'Viaje de Prensa' : language === 'ar' ? 'رحلة صحفية' : 'Press Trip'}</SelectItem>
                          <SelectItem value="other">{language === 'fr' ? 'Autre' : language === 'es' ? 'Otro' : language === 'ar' ? 'أخرى' : 'Other'}</SelectItem>
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
                      <FormLabel>{language === 'fr' ? 'Taille du groupe' : language === 'es' ? 'Tamaño del grupo' : language === 'ar' ? 'حجم المجموعة' : 'Group size'} *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={language === 'fr' ? 'Nombre de participants' : language === 'es' ? 'Número de participantes' : language === 'ar' ? 'عدد المشاركين' : 'Number of participants'} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="10-25">10-25 {language === 'fr' ? 'personnes' : language === 'es' ? 'personas' : language === 'ar' ? 'شخص' : 'people'}</SelectItem>
                          <SelectItem value="25-50">25-50 {language === 'fr' ? 'personnes' : language === 'es' ? 'personas' : language === 'ar' ? 'شخص' : 'people'}</SelectItem>
                          <SelectItem value="50-100">50-100 {language === 'fr' ? 'personnes' : language === 'es' ? 'personas' : language === 'ar' ? 'شخص' : 'people'}</SelectItem>
                          <SelectItem value="100-200">100-200 {language === 'fr' ? 'personnes' : language === 'es' ? 'personas' : language === 'ar' ? 'شخص' : 'people'}</SelectItem>
                          <SelectItem value="200+">200+ {language === 'fr' ? 'personnes' : language === 'es' ? 'personas' : language === 'ar' ? 'شخص' : 'people'}</SelectItem>
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
                      <FormLabel>{language === 'fr' ? 'Ville préférée' : language === 'es' ? 'Ciudad preferida' : language === 'ar' ? 'المدينة المفضلة' : 'Preferred city'}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={language === 'fr' ? 'Choisir la ville' : language === 'es' ? 'Elegir ciudad' : language === 'ar' ? 'اختر المدينة' : 'Choose city'} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="marrakech">{language === 'fr' ? 'Marrakech' : language === 'es' ? 'Marrakech' : language === 'ar' ? 'مراكش' : 'Marrakech'}</SelectItem>
                          <SelectItem value="casablanca">{language === 'fr' ? 'Casablanca' : language === 'es' ? 'Casablanca' : language === 'ar' ? 'الدار البيضاء' : 'Casablanca'}</SelectItem>
                          <SelectItem value="agadir">{language === 'fr' ? 'Agadir' : language === 'es' ? 'Agadir' : language === 'ar' ? 'أكادير' : 'Agadir'}</SelectItem>
                          <SelectItem value="fes">{language === 'fr' ? 'Fès' : language === 'es' ? 'Fez' : language === 'ar' ? 'فاس' : 'Fez'}</SelectItem>
                          <SelectItem value="sahara">{language === 'fr' ? 'Sahara' : language === 'es' ? 'Sahara' : language === 'ar' ? 'الصحراء' : 'Sahara'}</SelectItem>
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
                      <FormLabel>{language === 'fr' ? 'Date de début' : language === 'es' ? 'Fecha de inicio' : language === 'ar' ? 'تاريخ البداية' : 'Start date'}</FormLabel>
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
                                <span>{language === 'fr' ? 'Choisir la date' : language === 'es' ? 'Elegir fecha' : language === 'ar' ? 'اختر التاريخ' : 'Pick date'}</span>
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
                            disabled={(date) => date < new Date()}
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
                      <FormLabel>{language === 'fr' ? 'Date de fin' : language === 'es' ? 'Fecha de fin' : language === 'ar' ? 'تاريخ النهاية' : 'End date'}</FormLabel>
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
                                <span>{language === 'fr' ? 'Choisir la date' : language === 'es' ? 'Elegir fecha' : language === 'ar' ? 'اختر التاريخ' : 'Pick date'}</span>
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
                            disabled={(date) => date < (form.watch('startDate') || new Date())}
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
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                {language === 'fr' ? 'Budget et Exigences' : language === 'es' ? 'Presupuesto y Requisitos' : language === 'ar' ? 'الميزانية والمتطلبات' : 'Budget & Requirements'}
              </h3>
              
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{language === 'fr' ? 'Budget estimé' : language === 'es' ? 'Presupuesto estimado' : language === 'ar' ? 'الميزانية المقدرة' : 'Estimated budget'}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={language === 'fr' ? 'Sélectionnez votre budget' : language === 'es' ? 'Seleccione su presupuesto' : language === 'ar' ? 'اختر ميزانيتك' : 'Select your budget'} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="under-50k">{language === 'fr' ? 'Moins de' : language === 'es' ? 'Menos de' : language === 'ar' ? 'أقل من' : 'Under'} €50,000</SelectItem>
                        <SelectItem value="50k-100k">€50,000 - €100,000</SelectItem>
                        <SelectItem value="100k-200k">€100,000 - €200,000</SelectItem>
                        <SelectItem value="200k-500k">€200,000 - €500,000</SelectItem>
                        <SelectItem value="over-500k">{language === 'fr' ? 'Plus de' : language === 'es' ? 'Más de' : language === 'ar' ? 'أكثر من' : 'Over'} €500,000</SelectItem>
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
                    <FormLabel>{language === 'fr' ? 'Exigences spéciales ou détails' : language === 'es' ? 'Requisitos especiales o detalles' : language === 'ar' ? 'متطلبات خاصة أو تفاصيل' : 'Special requirements or details'}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={language === 'fr' ? 'Décrivez vos besoins spécifiques, objectifs de l\'événement, préférences...' : language === 'es' ? 'Describa sus necesidades específicas, objetivos del evento, preferencias...' : language === 'ar' ? 'صف احتياجاتك المحددة وأهداف الفعالية والتفضيلات...' : 'Describe your specific needs, event objectives, preferences...'}
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center justify-center space-x-4 pt-6">
              <Button type="submit" variant="cta" size="lg" className="px-12 py-6 text-lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    {language === 'fr' ? 'Envoi en cours...' : language === 'es' ? 'Enviando...' : language === 'ar' ? 'جارٍ الإرسال...' : 'Sending...'}
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {language === 'fr' ? 'Envoyer la Demande' : language === 'es' ? 'Enviar Solicitud' : language === 'ar' ? 'إرسال الطلب' : 'Send Request'}
                  </>
                )}
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground pt-4 border-t">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {language === 'fr' ? 'Réponse sous 24h' : language === 'es' ? 'Respuesta en 24h' : language === 'ar' ? 'الرد خلال 24 ساعة' : 'Response within 24h'}
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                {language === 'fr' ? '100% gratuit' : language === 'es' ? '100% gratuito' : language === 'ar' ? '100% مجاني' : '100% free'}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {language === 'fr' ? 'Consultation incluse' : language === 'es' ? 'Consulta incluida' : language === 'ar' ? 'استشارة مشمولة' : 'Consultation included'}
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};