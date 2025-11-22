import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { OptimizedSEO } from '@/components/SEO/OptimizedSEO';
import { ComparisonTable } from '@/components/SEO/ComparisonTable';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QuoteDialog } from '@/components/QuoteDialog';
import { ScheduleCallDialog } from '@/components/ScheduleCallDialog';
import { Trophy, Users, Briefcase, Presentation, Utensils, CheckCircle, Star, MapPin, Calendar, Phone, Clock, Euro, Award, Target, TrendingUp, Shield, Headphones, Globe, Heart, Camera, Music, Palette } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import heroImage from '@/assets/hero-morocco-mice.jpg';
import conferenceImage from '@/assets/marrakech-conference.jpg';
import teamBuildingImage from '@/assets/agadir-beach-teambuilding.jpg';
import desertImage from '@/assets/desert-team-building.jpg';
import dinnerImage from '@/assets/agadir-corporate-dinner.jpg';
import culturalImage from '@/assets/agadir-cultural-experience.jpg';
import servicesIncentive from '@/assets/services-incentive.jpg';
import servicesTeam from '@/assets/services-team.jpg';
import servicesRetreat from '@/assets/services-retreat.jpg';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const services = [
    {
      title: t('incentiveTravel'),
      icon: Trophy,
      description: t('incentiveTravelDesc'),
      detailedDesc: language === 'fr' ? 'EventMorocco, votre DMC Maroc, récompense l\'excellence de vos équipes avec des voyages incentive alliant luxe, aventure et découverte culturelle. Nos programmes DMC sur mesure transforment la motivation en résultats tangibles.' : language === 'es' ? 'EventMorocco, su DMC Marruecos, recompensa la excelencia de sus equipos con viajes de incentivo que combinan lujo, aventura y descubrimiento cultural. Nuestros programas DMC personalizados transforman la motivación en resultados tangibles.' : language === 'ar' ? 'EventMorocco، شركة DMC المغرب، تكافئ تميز فرقك برحلات تحفيزية تجمع بين الفخامة والمغامرة والاكتشاف الثقافي. برامج DMC المخصصة تحول الدافع إلى نتائج ملموسة.' : 'EventMorocco, your Morocco DMC, rewards your teams\' excellence with incentive trips combining luxury, adventure and cultural discovery. Our tailor-made DMC programs transform motivation into tangible results.',
      features: [t('incentiveFeature1'), t('incentiveFeature2'), t('incentiveFeature3'), t('incentiveFeature4')],
      benefits: [
        language === 'fr' ? 'Augmentation motivation équipe +40%' : language === 'es' ? 'Aumento motivación equipo +40%' : language === 'ar' ? 'زيادة دافعية الفريق +40%' : 'Team motivation increase +40%',
        language === 'fr' ? 'ROI sur performance 250%' : language === 'es' ? 'ROI en rendimiento 250%' : language === 'ar' ? 'عائد الاستثمار على الأداء 250%' : 'Performance ROI 250%',
        language === 'fr' ? 'Fidélisation employés +65%' : language === 'es' ? 'Fidelización empleados +65%' : language === 'ar' ? 'ولاء الموظفين +65%' : 'Employee retention +65%'
      ],
      image: servicesIncentive,
      priceRange: '€800-1500',
      duration: '3-7 days'
    },
    {
      title: t('teamBuilding'),
      icon: Users,
      description: t('teamBuildingDesc'),
      detailedDesc: language === 'fr' ? 'Votre DMC Maroc renforce la cohésion d\'équipe avec nos activités team building innovantes dans des cadres exceptionnels. Du désert aux montagnes de l\'Atlas, notre expertise DMC crée des liens durables.' : language === 'es' ? 'Su DMC Marruecos refuerza la cohesión del equipo con nuestras actividades de team building innovadoras en marcos excepcionales. Del desierto a las montañas del Atlas, nuestra experiencia DMC crea vínculos duraderos.' : language === 'ar' ? 'شركة DMC المغرب تعزز تماسك الفريق مع أنشطة بناء الفريق المبتكرة في أطر استثنائية. من الصحراء إلى جبال الأطلس، خبرة DMC تخلق روابط دائمة.' : 'Your Morocco DMC strengthens team cohesion with our innovative team building activities in exceptional settings. From desert to Atlas mountains, our DMC expertise creates lasting bonds.',
      features: [t('teamBuildingFeature1'), t('teamBuildingFeature2'), t('teamBuildingFeature3'), t('teamBuildingFeature4')],
      benefits: [
        language === 'fr' ? 'Amélioration collaboration +50%' : language === 'es' ? 'Mejora colaboración +50%' : language === 'ar' ? 'تحسين التعاون +50%' : 'Collaboration improvement +50%',
        language === 'fr' ? 'Productivité équipe +35%' : language === 'es' ? 'Productividad equipo +35%' : language === 'ar' ? 'إنتاجية الفريق +35%' : 'Team productivity +35%',
        language === 'fr' ? 'Communication interne +60%' : language === 'es' ? 'Comunicación interna +60%' : language === 'ar' ? 'التواصل الداخلي +60%' : 'Internal communication +60%'
      ],
      image: servicesTeam,
      priceRange: '€350-800',
      duration: '1-3 days'
    },
    {
      title: t('corporateRetreats'),
      icon: Briefcase,
      description: t('corporateRetreatsDesc'),
      detailedDesc: language === 'fr' ? 'Votre DMC Maroc organise vos séminaires d\'entreprise dans des lieux inspirants qui stimulent la créativité. Riads authentiques, resorts modernes ou camps désertiques, notre expertise DMC répond à vos objectifs.' : language === 'es' ? 'Su DMC Marruecos organiza sus seminarios corporativos en lugares inspiradores que estimulan la creatividad. Riads auténticos, resorts modernos o campamentos desérticos, nuestra experiencia DMC responde a sus objetivos.' : language === 'ar' ? 'شركة DMC المغرب تنظم ندواتك الشركاتية في أماكن ملهمة تحفز الإبداع. رياضات أصيلة أو منتجعات حديثة أو مخيمات صحراوية، خبرة DMC تلبي أهدافك.' : 'Your Morocco DMC organizes your corporate seminars in inspiring places that stimulate creativity. Authentic riads, modern resorts or desert camps, our DMC expertise meets your objectives.',
      features: [t('corporateRetreatsFeature1'), t('corporateRetreatsFeature2'), t('corporateRetreatsFeature3'), t('corporateRetreatsFeature4')],
      benefits: [
        language === 'fr' ? 'Créativité équipe +45%' : language === 'es' ? 'Creatividad equipo +45%' : language === 'ar' ? 'إبداع الفريق +45%' : 'Team creativity +45%',
        language === 'fr' ? 'Prise décision +30%' : language === 'es' ? 'Toma decisiones +30%' : language === 'ar' ? 'اتخاذ القرار +30%' : 'Decision making +30%',
        language === 'fr' ? 'Innovation projets +55%' : language === 'es' ? 'Innovación proyectos +55%' : language === 'ar' ? 'ابتكار المشاريع +55%' : 'Project innovation +55%'
      ],
      image: servicesRetreat,
      priceRange: '€450-900',
      duration: '2-5 days'
    },
    {
      title: t('conferences'),
      icon: Presentation,
      description: t('conferencesDesc'),
      detailedDesc: language === 'fr' ? 'EventMorocco DMC organise vos conférences dans les centres de congrès les plus modernes du Maroc. Équipements de pointe, services techniques experts et logistique DMC parfaite pour vos événements MICE.' : language === 'es' ? 'EventMorocco DMC organiza sus conferencias en los centros de congresos más modernos de Marruecos. Equipos de vanguardia, servicios técnicos expertos y logística DMC perfecta para sus eventos MICE.' : language === 'ar' ? 'EventMorocco DMC تنظم مؤتمراتك في أحدث مراكز المؤتمرات في المغرب. معدات متطورة وخدمات تقنية خبيرة ولوجستيات DMC مثالية لفعاليات MICE.' : 'EventMorocco DMC organizes your conferences in Morocco\'s most modern congress centers. Cutting-edge equipment, expert technical services and perfect DMC logistics for your MICE events.',
      features: [t('conferencesFeature1'), t('conferencesFeature2'), t('conferencesFeature3'), t('conferencesFeature4')],
      benefits: [
        language === 'fr' ? 'Participation active +70%' : language === 'es' ? 'Participación activa +70%' : language === 'ar' ? 'المشاركة النشطة +70%' : 'Active participation +70%',
        language === 'fr' ? 'Networking qualité +80%' : language === 'es' ? 'Networking calidad +80%' : language === 'ar' ? 'جودة التواصل +80%' : 'Quality networking +80%',
        language === 'fr' ? 'Satisfaction participants 95%' : language === 'es' ? 'Satisfacción participantes 95%' : language === 'ar' ? 'رضا المشاركين 95%' : 'Participant satisfaction 95%'
      ],
      image: conferenceImage,
      priceRange: '€200-600',
      duration: '1-4 days'
    },
    {
      title: t('galaDinners'),
      icon: Utensils,
      description: t('galaDinnersDesc'),
      detailedDesc: language === 'fr' ? 'Soirées de gala inoubliables dans les palais et riads les plus prestigieux du Maroc. Gastronomie raffinée, spectacles authentiques et décors somptueux pour célébrer vos succès.' : language === 'es' ? 'Cenas de gala inolvidables en los palacios y riads más prestigiosos de Marruecos. Gastronomía refinada, espectáculos auténticos y decorados suntuosos para celebrar sus éxitos.' : language === 'ar' ? 'أمسيات احتفالية لا تُنسى في أعرق القصور والرياضات في المغرب. فن طبخ راقٍ وعروض أصيلة وديكورات فاخرة للاحتفال بنجاحاتك.' : 'Unforgettable gala evenings in Morocco\'s most prestigious palaces and riads. Refined gastronomy, authentic shows and sumptuous decor to celebrate your successes.',
      features: [t('galaDinnersFeature1'), t('galaDinnersFeature2'), t('galaDinnersFeature3'), t('galaDinnersFeature4')],
      benefits: [
        language === 'fr' ? 'Image entreprise premium' : language === 'es' ? 'Imagen empresa premium' : language === 'ar' ? 'صورة الشركة المتميزة' : 'Premium company image',
        language === 'fr' ? 'Relations clients +40%' : language === 'es' ? 'Relaciones clientes +40%' : language === 'ar' ? 'علاقات العملاء +40%' : 'Client relations +40%',
        language === 'fr' ? 'Mémorabilité événement 100%' : language === 'es' ? 'Memorabilidad evento 100%' : language === 'ar' ? 'ذكرى الحدث 100%' : 'Event memorability 100%'
      ],
      image: dinnerImage,
      priceRange: '€150-400',
      duration: '1 evening'
    }
  ];

  const stats = [
    {
      number: '500+',
      label: language === 'fr' ? 'Événements Organisés' : language === 'es' ? 'Eventos Organizados' : language === 'ar' ? 'فعاليات منظمة' : 'Events Organized',
      icon: Calendar
    },
    {
      number: '50k+',
      label: language === 'fr' ? 'Participants Satisfaits' : language === 'es' ? 'Participantes Satisfechos' : language === 'ar' ? 'مشاركين راضين' : 'Satisfied Participants', 
      icon: Users
    },
    {
      number: '150+',
      label: language === 'fr' ? 'Entreprises Clientes' : language === 'es' ? 'Empresas Clientes' : language === 'ar' ? 'شركات عملاء' : 'Client Companies',
      icon: Award
    },
    {
      number: '98%',
      label: language === 'fr' ? 'Taux Satisfaction' : language === 'es' ? 'Tasa Satisfacción' : language === 'ar' ? 'معدل الرضا' : 'Satisfaction Rate',
      icon: Star
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: language === 'fr' ? 'Expertise Locale' : language === 'es' ? 'Experiencia Local' : language === 'ar' ? 'خبرة محلية' : 'Local Expertise',
      description: language === 'fr' ? '15 ans d\'expérience dans l\'organisation d\'événements au Maroc' : language === 'es' ? '15 años de experiencia en organización de eventos en Marruecos' : language === 'ar' ? '15 سنة من الخبرة في تنظيم الفعاليات في المغرب' : '15 years of experience organizing events in Morocco'
    },
    {
      icon: Globe,
      title: language === 'fr' ? 'Réseau International' : language === 'es' ? 'Red Internacional' : language === 'ar' ? 'شبكة دولية' : 'International Network',
      description: language === 'fr' ? 'Partenaires de confiance dans toutes les destinations marocaines' : language === 'es' ? 'Socios de confianza en todos los destinos marroquíes' : language === 'ar' ? 'شركاء موثوقون في جميع الوجهات المغربية' : 'Trusted partners in all Moroccan destinations'
    },
    {
      icon: Headphones,
      title: language === 'fr' ? 'Support 24/7' : language === 'es' ? 'Soporte 24/7' : language === 'ar' ? 'دعم 24/7' : '24/7 Support',
      description: language === 'fr' ? 'Assistance dédiée avant, pendant et après votre événement' : language === 'es' ? 'Asistencia dedicada antes, durante y después de su evento' : language === 'ar' ? 'مساعدة مخصصة قبل وأثناء وبعد فعاليتك' : 'Dedicated assistance before, during and after your event'
    },
    {
      icon: Euro,
      title: language === 'fr' ? 'Meilleur Rapport Qualité-Prix' : language === 'es' ? 'Mejor Relación Calidad-Precio' : language === 'ar' ? 'أفضل قيمة مقابل المال' : 'Best Value for Money',
      description: language === 'fr' ? 'Négociation directe avec nos partenaires pour des tarifs optimaux' : language === 'es' ? 'Negociación directa con nuestros socios para tarifas óptimas' : language === 'ar' ? 'تفاوض مباشر مع شركائنا للحصول على أسعار مثلى' : 'Direct negotiation with our partners for optimal rates'
    }
  ];

  const testimonials = [
    {
      company: "Total Energies",
      name: "Marie Dubois",
      position: language === 'fr' ? 'Directrice RH' : language === 'es' ? 'Directora RH' : language === 'ar' ? 'مديرة الموارد البشرية' : 'HR Director',
      text: language === 'fr' ? 'Organisation parfaite pour notre incentive à Marrakech. 150 collaborateurs conquis !' : language === 'es' ? 'Organización perfecta para nuestro incentivo en Marrakech. ¡150 colaboradores conquistados!' : language === 'ar' ? 'تنظيم مثالي لحافزنا في مراكش. 150 موظف مقتنع!' : 'Perfect organization for our Marrakech incentive. 150 employees convinced!',
      rating: 5
    },
    {
      company: "KPMG",
      name: "Ahmed Al-Rashid", 
      position: language === 'fr' ? 'Managing Partner' : language === 'es' ? 'Socio Director' : language === 'ar' ? 'الشريك الإداري' : 'Managing Partner',
      text: language === 'fr' ? 'Séminaire exceptionnel dans le désert. Équipe renforcée et objectifs atteints.' : language === 'es' ? 'Seminario excepcional en el desierto. Equipo reforzado y objetivos alcanzados.' : language === 'ar' ? 'ندوة استثنائية في الصحراء. فريق معزز وأهداف محققة.' : 'Exceptional desert seminar. Strengthened team and objectives achieved.',
      rating: 5
    },
    {
      company: "Santander Bank",
      name: "Carlos Rodriguez",
      position: language === 'fr' ? 'VP Operations' : language === 'es' ? 'VP Operaciones' : language === 'ar' ? 'نائب رئيس العمليات' : 'VP Operations',
      text: language === 'fr' ? 'Team building Agadir fantastique. Cohésion équipe transformée positivement.' : language === 'es' ? 'Team building en Agadir fantástico. Cohesión del equipo transformada positivamente.' : language === 'ar' ? 'بناء فريق رائع في أكادير. تماسك الفريق تحول بشكل إيجابي.' : 'Fantastic Agadir team building. Team cohesion positively transformed.',
      rating: 5
    }
  ];

  return (
    <>
      <OptimizedSEO pageType="services" />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 gradient-hero opacity-80"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              {language === 'fr' ? 'Services MICE Professionnels au Maroc' : language === 'es' ? 'Servicios MICE Profesionales en Marruecos' : language === 'ar' ? 'خدمات السياحة التجارية المهنية في المغرب' : 'Professional MICE Services in Morocco'}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
              {t('servicesPageTitle')}
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              {language === 'fr' ? 'Solutions complètes pour vos événements d\'entreprise au Maroc. De la planification à l\'exécution, nous créons des expériences inoubliables qui dépassent vos attentes.' : language === 'es' ? 'Soluciones completas para sus eventos corporativos en Marruecos. Desde la planificación hasta la ejecución, creamos experiencias inolvidables que superan sus expectativas.' : language === 'ar' ? 'حلول شاملة لفعالياتك الشركاتية في المغرب. من التخطيط إلى التنفيذ، نخلق تجارب لا تُنسى تتجاوز توقعاتك.' : 'Complete solutions for your corporate events in Morocco. From planning to execution, we create unforgettable experiences that exceed your expectations.'}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <QuoteDialog>
                <Button variant="cta" size="lg" className="text-lg px-12 py-6">
                  {t('getProposal')}
                </Button>
              </QuoteDialog>
              
              <ScheduleCallDialog>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('bookCall')}
                </Button>
              </ScheduleCallDialog>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                {t('servicesTitle')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {language === 'fr' ? 'Des solutions sur mesure pour chaque type d\'événement d\'entreprise' : language === 'es' ? 'Soluciones a medida para cada tipo de evento corporativo' : language === 'ar' ? 'حلول مخصصة لكل نوع من أنواع الفعاليات الشركاتية' : 'Tailor-made solutions for every type of corporate event'}
              </p>
            </div>
            
            <div className="space-y-20">
              {services.map((service, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                  <div className="flex-1">
                    <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth border-0">
                      <div className="relative h-96">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white">
                            {service.priceRange}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white">
                            <Clock className="w-4 h-4 mr-2" />
                            {service.duration}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.detailedDesc}
                    </p>
                    
                    {/* SEO-rich expanded content with internal links */}
                    {index === 0 && (
                      <div className="space-y-4 mt-4">
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {language === 'fr' 
                            ? 'Notre DMC Maroc conçoit des programmes incentive qui transforment la motivation en résultats. Que vous organisiez votre incentive à Marrakech dans les riads de luxe, à Casablanca pour un programme business chic, ou dans le Sahara pour une aventure inoubliable, nous créons des expériences qui marquent les esprits.' 
                            : language === 'es'
                            ? 'Nuestro DMC Marruecos diseña programas de incentivos que transforman la motivación en resultados. Ya sea que organice su incentivo en Marrakech en riads de lujo, en Casablanca para un programa empresarial elegante, o en el Sahara para una aventura inolvidable, creamos experiencias memorables.'
                            : language === 'ar'
                            ? 'تصمم شركة DMC المغرب برامج الحوافز التي تحول الدافع إلى نتائج. سواء كنت تنظم حافزك في مراكش في الرياضات الفاخرة، أو في الدار البيضاء لبرنامج أعمال أنيق، أو في الصحراء لمغامرة لا تُنسى، نخلق تجارب لا تُنسى.'
                            : 'Our Morocco DMC designs incentive programs that transform motivation into results. Whether organizing your incentive in Marrakech at luxury riads, in Casablanca for an elegant business program, or in the Sahara for an unforgettable adventure, we create memorable experiences.'}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Button 
                            variant="link" 
                            size="sm"
                            onClick={() => navigate(language === 'fr' ? '/fr/destinations/marrakech' : language === 'es' ? '/es/destinations/marrakech' : language === 'ar' ? '/ar/destinations/marrakech' : '/destinations/marrakech')}
                            className="text-primary hover:text-primary/80"
                          >
                            {language === 'fr' ? '→ Incentives à Marrakech' : language === 'es' ? '→ Incentivos en Marrakech' : language === 'ar' ? '→ حوافز في مراكش' : '→ Marrakech Incentives'}
                          </Button>
                          <Button 
                            variant="link" 
                            size="sm"
                            onClick={() => navigate(language === 'fr' ? '/fr/destinations/sahara' : language === 'es' ? '/es/destinations/sahara' : language === 'ar' ? '/ar/destinations/sahara' : '/destinations/sahara')}
                            className="text-primary hover:text-primary/80"
                          >
                            {language === 'fr' ? '→ Retraites au Sahara' : language === 'es' ? '→ Retiros en Sahara' : language === 'ar' ? '→ خلوات في الصحراء' : '→ Sahara Retreats'}
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="space-y-4 mt-4">
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {language === 'fr'
                            ? 'Des activités team building innovantes qui renforcent la cohésion d\'équipe dans les cadres exceptionnels du Maroc. Du surf et quad à Agadir, aux challenges dans l\'Atlas, en passant par les ateliers culturels à Fès, chaque programme est conçu pour créer des liens durables et améliorer la performance collective.'
                            : language === 'es'
                            ? 'Actividades innovadoras de team building que refuerzan la cohesión del equipo en los marcos excepcionales de Marruecos. Desde surf y quad en Agadir, hasta desafíos en el Atlas, pasando por talleres culturales en Fez, cada programa está diseñado para crear vínculos duraderos y mejorar el rendimiento colectivo.'
                            : language === 'ar'
                            ? 'أنشطة بناء الفريق المبتكرة التي تعزز تماسك الفريق في أطر المغرب الاستثنائية. من ركوب الأمواج والدراجات الرباعية في أكادير، إلى التحديات في الأطلس، مرورًا بالورش الثقافية في فاس، كل برنامج مصمم لخلق روابط دائمة وتحسين الأداء الجماعي.'
                            : 'Innovative team building activities that strengthen team cohesion in Morocco\'s exceptional settings. From surfing and quad biking in Agadir to Atlas Mountain challenges and cultural workshops in Fez, each program is designed to create lasting bonds and improve collective performance.'}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Button 
                            variant="link" 
                            size="sm"
                            onClick={() => navigate(language === 'fr' ? '/fr/destinations/agadir' : language === 'es' ? '/es/destinations/agadir' : language === 'ar' ? '/ar/destinations/agadir' : '/destinations/agadir')}
                            className="text-primary hover:text-primary/80"
                          >
                            {language === 'fr' ? '→ Team Building Agadir' : language === 'es' ? '→ Team Building Agadir' : language === 'ar' ? '→ بناء الفريق أكادير' : '→ Agadir Team Building'}
                          </Button>
                          <Button 
                            variant="link" 
                            size="sm"
                            onClick={() => navigate(language === 'fr' ? '/fr/destinations/fes' : language === 'es' ? '/es/destinations/fes' : language === 'ar' ? '/ar/destinations/fes' : '/destinations/fes')}
                            className="text-primary hover:text-primary/80"
                          >
                            {language === 'fr' ? '→ Activités Culturelles Fès' : language === 'es' ? '→ Actividades Culturales Fez' : language === 'ar' ? '→ أنشطة ثقافية فاس' : '→ Fez Cultural Activities'}
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="space-y-4 mt-4">
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {language === 'fr'
                            ? 'Organisation professionnelle de conférences et congrès au Maroc avec les meilleures infrastructures MICE. De Casablanca, hub business moderne, aux palais de congrès de Marrakech, nous gérons l\'intégralité de votre événement : sélection de lieux, technologie AV de pointe, logistique complète et services sur mesure pour des conférences réussies.'
                            : language === 'es'
                            ? 'Organización profesional de conferencias y congresos en Marruecos con las mejores infraestructuras MICE. Desde Casablanca, hub empresarial moderno, hasta los palacios de congresos de Marrakech, gestionamos la totalidad de su evento: selección de lugares, tecnología audiovisual de vanguardia, logística completa y servicios personalizados para conferencias exitosas.'
                            : language === 'ar'
                            ? 'تنظيم احترافي للمؤتمرات والمؤتمرات في المغرب مع أفضل البنى التحتية لـ MICE. من الدار البيضاء، مركز الأعمال الحديث، إلى قصور المؤتمرات في مراكش، ندير كامل حدثك: اختيار الأماكن، تقنية سمعية بصرية متقدمة، لوجستيات كاملة وخدمات مخصصة لمؤتمرات ناجحة.'
                            : 'Professional conference and congress organization in Morocco with the best MICE infrastructure. From Casablanca, the modern business hub, to Marrakech\'s convention palaces, we manage your entire event: venue selection, cutting-edge AV technology, complete logistics and customized services for successful conferences.'}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Button 
                            variant="link" 
                            size="sm"
                            onClick={() => navigate(language === 'fr' ? '/fr/destinations/casablanca' : language === 'es' ? '/es/destinations/casablanca' : language === 'ar' ? '/ar/destinations/casablanca' : '/destinations/casablanca')}
                            className="text-primary hover:text-primary/80"
                          >
                            {language === 'fr' ? '→ Conférences Casablanca' : language === 'es' ? '→ Conferencias Casablanca' : language === 'ar' ? '→ مؤتمرات الدار البيضاء' : '→ Casablanca Conferences'}
                          </Button>
                          <Button 
                            variant="link" 
                            size="sm"
                            onClick={() => navigate(language === 'fr' ? '/fr/destinations/marrakech' : language === 'es' ? '/es/destinations/marrakech' : language === 'ar' ? '/ar/destinations/marrakech' : '/destinations/marrakech')}
                            className="text-primary hover:text-primary/80"
                          >
                            {language === 'fr' ? '→ Palais Congrès Marrakech' : language === 'es' ? '→ Palacio Congresos Marrakech' : language === 'ar' ? '→ قصر المؤتمرات مراكش' : '→ Marrakech Congress Palace'}
                          </Button>
                        </div>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          {language === 'fr' ? 'Inclus dans le service :' : language === 'es' ? 'Incluido en el servicio:' : language === 'ar' ? 'متضمن في الخدمة:' : 'Included in service:'}
                        </h4>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          {language === 'fr' ? 'Bénéfices mesurés :' : language === 'es' ? 'Beneficios medidos:' : language === 'ar' ? 'الفوائد المقاسة:' : 'Measured benefits:'}
                        </h4>
                        <div className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <QuoteDialog>
                        <Button variant="default" size="lg">
                          {language === 'fr' ? 'Demander un Devis' : language === 'es' ? 'Solicitar Cotización' : language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                        </Button>
                      </QuoteDialog>
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={() => openWhatsApp(`${language === 'fr' ? 'Bonjour, je souhaite plus d\'informations sur le service' : language === 'es' ? 'Hola, me gustaría más información sobre el servicio' : language === 'ar' ? 'مرحبا، أود المزيد من المعلومات حول الخدمة' : 'Hello, I would like more information about the service'} ${service.title}`, language)}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        {language === 'fr' ? 'Discuter' : language === 'es' ? 'Discutir' : language === 'ar' ? 'مناقشة' : 'Discuss'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Comparison Table - AI Optimized */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ComparisonTable
              title={language === 'fr' ? 'Comparaison Détaillée de Nos Services' : 
                     language === 'es' ? 'Comparación Detallada de Nuestros Servicios' :
                     language === 'ar' ? 'مقارنة تفصيلية لخدماتنا' :
                     'Detailed Service Comparison'}
              description={language === 'fr' ? 'Trouvez le service parfait pour votre événement corporatif' : 
                          language === 'es' ? 'Encuentre el servicio perfecto para su evento corporativo' :
                          language === 'ar' ? 'ابحث عن الخدمة المثالية لحدثك الشركاتي' :
                          'Find the perfect service for your corporate event'}
              rows={
                language === 'fr' ? [
                  'Durée Typique',
                  'Taille de Groupe',
                  'Prix par Personne',
                  'Objectif Principal',
                  'Idéal Pour',
                  'ROI Moyen'
                ] : language === 'es' ? [
                  'Duración Típica',
                  'Tamaño de Grupo',
                  'Precio por Persona',
                  'Objetivo Principal',
                  'Ideal Para',
                  'ROI Promedio'
                ] : language === 'ar' ? [
                  'المدة النموذجية',
                  'حجم المجموعة',
                  'السعر للفرد',
                  'الهدف الرئيسي',
                  'مثالي لـ',
                  'متوسط العائد'
                ] : [
                  'Typical Duration',
                  'Group Size',
                  'Price per Person',
                  'Primary Goal',
                  'Ideal For',
                  'Average ROI'
                ]
              }
              columns={[
                {
                  header: t('incentiveTravel'),
                  values: [
                    '3-7 days',
                    '20-300',
                    '€800-1500',
                    language === 'fr' ? 'Récompense' : language === 'es' ? 'Recompensa' : language === 'ar' ? 'مكافأة' : 'Reward',
                    language === 'fr' ? 'Top performers' : language === 'es' ? 'Mejores empleados' : language === 'ar' ? 'أفضل الموظفين' : 'Top performers',
                    '250-300%'
                  ],
                  highlighted: true
                },
                {
                  header: t('teamBuilding'),
                  values: [
                    '1-3 days',
                    '10-150',
                    '€350-800',
                    language === 'fr' ? 'Cohésion' : language === 'es' ? 'Cohesión' : language === 'ar' ? 'تماسك' : 'Cohesion',
                    language === 'fr' ? 'Équipes entières' : language === 'es' ? 'Equipos completos' : language === 'ar' ? 'فرق كاملة' : 'Whole teams',
                    '150-200%'
                  ]
                },
                {
                  header: t('corporateRetreats'),
                  values: [
                    '2-5 days',
                    '15-80',
                    '€450-900',
                    language === 'fr' ? 'Stratégie' : language === 'es' ? 'Estrategia' : language === 'ar' ? 'استراتيجية' : 'Strategy',
                    language === 'fr' ? 'Dirigeants' : language === 'es' ? 'Líderes' : language === 'ar' ? 'القادة' : 'Leaders',
                    '200-250%'
                  ]
                },
                {
                  header: t('conferences'),
                  values: [
                    '1-4 days',
                    '50-3000',
                    '€200-600',
                    language === 'fr' ? 'Formation' : language === 'es' ? 'Formación' : language === 'ar' ? 'تدريب' : 'Training',
                    language === 'fr' ? 'Grands groupes' : language === 'es' ? 'Grandes grupos' : language === 'ar' ? 'مجموعات كبيرة' : 'Large groups',
                    '180-220%'
                  ]
                },
                {
                  header: t('galaDinners'),
                  values: [
                    '1 evening',
                    '30-500',
                    '€150-400',
                    language === 'fr' ? 'Célébration' : language === 'es' ? 'Celebración' : language === 'ar' ? 'احتفال' : 'Celebration',
                    language === 'fr' ? 'Événements spéciaux' : language === 'es' ? 'Eventos especiales' : language === 'ar' ? 'مناسبات خاصة' : 'Special occasions',
                    '150-180%'
                  ]
                }
              ]}
            />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                {language === 'fr' ? 'Pourquoi Nous Choisir ?' : language === 'es' ? '¿Por Qué Elegirnos?' : language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-smooth border-0 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                {t('ourProcess')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('ourProcessDesc')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((step) => (
                <Card key={step} className="text-center shadow-card border-0 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary-foreground font-bold text-lg">{step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {t(`processStep${step}Title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`processStep${step}Desc`)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                {language === 'fr' ? 'Ce Que Disent Nos Clients' : language === 'es' ? 'Lo Que Dicen Nuestros Clientes' : language === 'ar' ? 'ما يقوله عملاؤنا' : 'What Our Clients Say'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-0 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <Star key={idx} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-sm font-medium text-primary">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                {language === 'fr' ? 'Questions Fréquentes sur nos Services' :
                 language === 'es' ? 'Preguntas Frecuentes sobre Nuestros Servicios' :
                 language === 'ar' ? 'الأسئلة الشائعة حول خدماتنا' :
                 'Frequently Asked Questions'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'fr' ? 'Tout ce que vous devez savoir sur nos services MICE au Maroc' :
                 language === 'es' ? 'Todo lo que necesita saber sobre nuestros servicios MICE en Marruecos' :
                 language === 'ar' ? 'كل ما تحتاج معرفته عن خدمات MICE لدينا في المغرب' :
                 'Everything you need to know about our MICE services'}
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  {language === 'fr' ? 'Quels types d\'événements organisez-vous au Maroc?' :
                   language === 'es' ? '¿Qué tipos de eventos organizan en Marruecos?' :
                   language === 'ar' ? 'ما أنواع الفعاليات التي تنظمونها في المغرب؟' :
                   'What types of events do you organize in Morocco?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {language === 'fr' ? 'Nous organisons tous types d\'événements d\'entreprise: conférences internationales, séminaires, voyages incentive, team building, retraites d\'entreprise, lancements de produits, galas de soirée et conventions. Notre expertise couvre tous les aspects de l\'organisation MICE au Maroc.' :
                   language === 'es' ? 'Organizamos todo tipo de eventos corporativos: conferencias internacionales, seminarios, viajes de incentivo, team building, retiros corporativos, lanzamientos de productos, galas y convenciones. Nuestra experiencia cubre todos los aspectos de la organización MICE en Marruecos.' :
                   language === 'ar' ? 'ننظم جميع أنواع الفعاليات الشركات: المؤتمرات الدولية والندوات ورحلات الحوافز وبناء الفريق والخلوات الشركاتية وإطلاق المنتجات والحفلات والمؤتمرات. خبرتنا تغطي جميع جوانب تنظيم MICE في المغرب.' :
                   'We organize all types of corporate events: international conferences, seminars, incentive trips, team building, corporate retreats, product launches, gala dinners, and conventions. Our expertise covers all aspects of MICE organization in Morocco.'}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  {language === 'fr' ? 'Combien de temps à l\'avance dois-je réserver?' :
                   language === 'es' ? '¿Con cuánta antelación debo reservar?' :
                   language === 'ar' ? 'كم من الوقت مسبقاً يجب أن أحجز؟' :
                   'How far in advance should I book?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {language === 'fr' ? 'Pour les événements de grande envergure (200+ participants), nous recommandons 6-12 mois d\'avance. Pour les groupes moyens (50-200), 3-6 mois sont idéaux. Les petits groupes peuvent être organisés avec 4-8 semaines de préavis. Cependant, nous pouvons gérer des demandes urgentes avec un minimum de 2 semaines.' :
                   language === 'es' ? 'Para eventos de gran escala (200+ participantes), recomendamos 6-12 meses de antelación. Para grupos medianos (50-200), 3-6 meses son ideales. Los grupos pequeños pueden organizarse con 4-8 semanas de aviso. Sin embargo, podemos manejar solicitudes urgentes con un mínimo de 2 semanas.' :
                   language === 'ar' ? 'للفعاليات واسعة النطاق (أكثر من 200 مشارك)، نوصي بـ 6-12 شهراً مسبقاً. للمجموعات المتوسطة (50-200)، 3-6 أشهر مثالية. المجموعات الصغيرة يمكن تنظيمها مع 4-8 أسابيع. ومع ذلك، يمكننا التعامل مع الطلبات العاجلة بحد أدنى أسبوعين.' :
                   'For large-scale events (200+ participants), we recommend 6-12 months in advance. For medium groups (50-200), 3-6 months is ideal. Small groups can be organized with 4-8 weeks notice. However, we can handle urgent requests with a minimum of 2 weeks.'}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  {language === 'fr' ? 'Quels sont vos tarifs pour les services MICE?' :
                   language === 'es' ? '¿Cuáles son sus tarifas para los servicios MICE?' :
                   language === 'ar' ? 'ما هي أسعاركم لخدمات MICE؟' :
                   'What are your pricing for MICE services?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {language === 'fr' ? 'Nos tarifs varient selon le type d\'événement, la taille du groupe et les services requis. Voyages incentive: €800-1500/personne. Team building: €150-400/personne. Conférences: €200-600/personne/jour. Tous les devis sont personnalisés et incluent transport, hébergement, activités, restauration et support sur place.' :
                   language === 'es' ? 'Nuestras tarifas varían según el tipo de evento, tamaño del grupo y servicios requeridos. Viajes de incentivo: €800-1500/persona. Team building: €150-400/persona. Conferencias: €200-600/persona/día. Todas las cotizaciones son personalizadas e incluyen transporte, alojamiento, actividades, restauración y soporte en sitio.' :
                   language === 'ar' ? 'أسعارنا تختلف حسب نوع الفعالية وحجم المجموعة والخدمات المطلوبة. رحلات الحوافز: €800-1500/للشخص. بناء الفريق: €150-400/للشخص. المؤتمرات: €200-600/للشخص/اليوم. جميع العروض مخصصة وتشمل النقل والإقامة والأنشطة والمطاعم والدعم في الموقع.' :
                   'Our pricing varies by event type, group size, and services required. Incentive travel: €800-1500/person. Team building: €150-400/person. Conferences: €200-600/person/day. All quotes are customized and include transport, accommodation, activities, catering, and on-site support.'}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  {language === 'fr' ? 'Offrez-vous un support 24/7 pendant l\'événement?' :
                   language === 'es' ? '¿Ofrecen soporte 24/7 durante el evento?' :
                   language === 'ar' ? 'هل تقدمون دعماً على مدار الساعة طوال أيام الأسبوع أثناء الفعالية؟' :
                   'Do you provide 24/7 support during events?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {language === 'fr' ? 'Oui, absolument. Chaque événement est accompagné d\'une équipe dédiée sur place avec support 24/7. Vous aurez un coordinateur principal, des assistants logistiques, et une ligne d\'urgence active 24h/24. Nous gérons tous les imprévus en temps réel pour garantir le succès de votre événement.' :
                   language === 'es' ? 'Sí, absolutamente. Cada evento cuenta con un equipo dedicado en sitio con soporte 24/7. Tendrá un coordinador principal, asistentes logísticos y una línea de emergencia activa 24 horas. Gestionamos todos los imprevistos en tiempo real para garantizar el éxito de su evento.' :
                   language === 'ar' ? 'نعم، بالتأكيد. كل فعالية مصحوبة بفريق مخصص في الموقع مع دعم على مدار الساعة طوال أيام الأسبوع. ستحصل على منسق رئيسي ومساعدين لوجستيين وخط طوارئ نشط على مدار 24 ساعة. نتعامل مع جميع الطوارئ في الوقت الفعلي لضمان نجاح فعاليتك.' :
                   'Yes, absolutely. Every event is accompanied by a dedicated on-site team with 24/7 support. You\'ll have a main coordinator, logistics assistants, and a 24-hour emergency hotline. We handle all contingencies in real-time to ensure your event\'s success.'}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  {language === 'fr' ? 'Pouvez-vous gérer des événements multilingues?' :
                   language === 'es' ? '¿Pueden gestionar eventos multilingües?' :
                   language === 'ar' ? 'هل يمكنكم إدارة الفعاليات متعددة اللغات؟' :
                   'Can you handle multilingual events?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {language === 'fr' ? 'Oui, notre équipe parle couramment français, anglais, espagnol et arabe. Nous fournissons également des services de traduction simultanée, d\'interprétation, de documentation multilingue et de signalétique dans toutes les langues requises pour votre événement international.' :
                   language === 'es' ? 'Sí, nuestro equipo habla con fluidez francés, inglés, español y árabe. También proporcionamos servicios de traducción simultánea, interpretación, documentación multilingüe y señalización en todos los idiomas requeridos para su evento internacional.' :
                   language === 'ar' ? 'نعم، فريقنا يتحدث بطلاقة الفرنسية والإنجليزية والإسبانية والعربية. كما نوفر خدمات الترجمة الفورية والتفسير والوثائق متعددة اللغات واللافتات بجميع اللغات المطلوبة لفعاليتك الدولية.' :
                   'Yes, our team is fluent in French, English, Spanish, and Arabic. We also provide simultaneous translation services, interpretation, multilingual documentation, and signage in all languages required for your international event.'}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  {language === 'fr' ? 'Quelles garanties offrez-vous?' :
                   language === 'es' ? '¿Qué garantías ofrecen?' :
                   language === 'ar' ? 'ما الضمانات التي تقدمونها؟' :
                   'What guarantees do you offer?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {language === 'fr' ? 'Nous garantissons la conformité totale au budget convenu, le respect strict des délais, la qualité des prestations selon les standards internationaux, et une assurance tous risques pour votre événement. En cas d\'insatisfaction, nous nous engageons à trouver une solution immédiate ou un remboursement partiel.' :
                   language === 'es' ? 'Garantizamos el cumplimiento total del presupuesto acordado, el respeto estricto de los plazos, la calidad de las prestaciones según estándares internacionales, y un seguro a todo riesgo para su evento. En caso de insatisfacción, nos comprometemos a encontrar una solución inmediata o un reembolso parcial.' :
                   language === 'ar' ? 'نضمن الامتثال الكامل للميزانية المتفق عليها، الاحترام الصارم للمواعيد، جودة الخدمات وفقاً للمعايير الدولية، والتأمين الشامل لفعاليتك. في حالة عدم الرضا، نلتزم بإيجاد حل فوري أو استرداد جزئي.' :
                   'We guarantee full compliance with the agreed budget, strict adherence to deadlines, service quality according to international standards, and comprehensive insurance for your event. In case of dissatisfaction, we commit to finding an immediate solution or partial refund.'}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  {language === 'fr' ? 'Proposez-vous des options d\'événements hybrides?' :
                   language === 'es' ? '¿Ofrecen opciones de eventos híbridos?' :
                   language === 'ar' ? 'هل تقدمون خيارات للفعاليات الهجينة؟' :
                   'Do you offer hybrid event options?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {language === 'fr' ? 'Oui, nous organisons des événements hybrides avec diffusion en direct professionnelle, plateformes d\'engagement interactif, networking virtuel, et studios de broadcast sur place. Nous intégrons parfaitement les participants en personne et à distance pour une expérience unifiée.' :
                   language === 'es' ? 'Sí, organizamos eventos híbridos con transmisión en vivo profesional, plataformas de participación interactiva, networking virtual y estudios de broadcast en sitio. Integramos perfectamente a los participantes presenciales y remotos para una experiencia unificada.' :
                   language === 'ar' ? 'نعم، ننظم الفعاليات الهجينة مع البث المباشر الاحترافي ومنصات المشاركة التفاعلية والتواصل الافتراضي واستوديوهات البث في الموقع. ندمج بشكل مثالي المشاركين الحضوريين والبعيدين لتجربة موحدة.' :
                   'Yes, we organize hybrid events with professional live streaming, interactive engagement platforms, virtual networking, and on-site broadcast studios. We seamlessly integrate in-person and remote participants for a unified experience.'}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  {language === 'fr' ? 'Comment mesurez-vous le ROI de nos événements?' :
                   language === 'es' ? '¿Cómo miden el ROI de nuestros eventos?' :
                   language === 'ar' ? 'كيف تقيسون عائد الاستثمار لفعالياتنا؟' :
                   'How do you measure ROI for our events?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {language === 'fr' ? 'Nous fournissons un reporting détaillé incluant: taux de satisfaction participants (enquêtes post-événement), engagement et interactions mesurés, objectifs commerciaux atteints, analyse coût-bénéfice, et recommandations d\'amélioration. Nos clients constatent en moyenne un ROI de 250-400% sur leurs investissements MICE.' :
                   language === 'es' ? 'Proporcionamos informes detallados que incluyen: tasa de satisfacción de participantes (encuestas post-evento), compromiso e interacciones medidas, objetivos comerciales alcanzados, análisis costo-beneficio y recomendaciones de mejora. Nuestros clientes constatan en promedio un ROI de 250-400% en sus inversiones MICE.' :
                   language === 'ar' ? 'نقدم تقارير مفصلة تتضمن: معدل رضا المشاركين (استبيانات ما بعد الفعالية)، قياس المشاركة والتفاعلات، تحقيق الأهداف التجارية، تحليل التكلفة والفائدة، وتوصيات التحسين. عملاؤنا يحققون في المتوسط عائد استثمار بنسبة 250-400% على استثماراتهم في MICE.' :
                   'We provide detailed reporting including: participant satisfaction rates (post-event surveys), measured engagement and interactions, business objectives achieved, cost-benefit analysis, and improvement recommendations. Our clients average a 250-400% ROI on their MICE investments.'}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  {language === 'fr' ? 'Quels sont les meilleures périodes pour organiser un événement au Maroc?' :
                   language === 'es' ? '¿Cuáles son los mejores períodos para organizar un evento en Marruecos?' :
                   language === 'ar' ? 'ما أفضل الفترات لتنظيم فعالية في المغرب؟' :
                   'What are the best periods to organize an event in Morocco?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {language === 'fr' ? 'Les périodes optimales sont mars-mai (printemps) et septembre-novembre (automne) avec des températures agréables de 20-28°C. L\'hiver (décembre-février) est parfait pour les régions côtières et le désert. L\'été convient aux événements en montagne ou dans le nord. Nous vous conseillons selon votre destination et type d\'événement.' :
                   language === 'es' ? 'Los períodos óptimos son marzo-mayo (primavera) y septiembre-noviembre (otoño) con temperaturas agradables de 20-28°C. El invierno (diciembre-febrero) es perfecto para las regiones costeras y el desierto. El verano es adecuado para eventos en montaña o en el norte. Le asesoramos según su destino y tipo de evento.' :
                   language === 'ar' ? 'الفترات المثلى هي مارس-مايو (الربيع) وسبتمبر-نوفمبر (الخريف) مع درجات حرارة مريحة 20-28 درجة مئوية. الشتاء (ديسمبر-فبراير) مثالي للمناطق الساحلية والصحراء. الصيف مناسب للفعاليات في الجبال أو الشمال. ننصحك حسب وجهتك ونوع فعاليتك.' :
                   'The optimal periods are March-May (spring) and September-November (fall) with pleasant temperatures of 20-28°C. Winter (December-February) is perfect for coastal regions and the desert. Summer suits mountain or northern events. We advise based on your destination and event type.'}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  {language === 'fr' ? 'Êtes-vous autorisé par le Ministère du Tourisme marocain?' :
                   language === 'es' ? '¿Están autorizados por el Ministerio de Turismo marroquí?' :
                   language === 'ar' ? 'هل أنتم مرخصون من وزارة السياحة المغربية؟' :
                   'Are you authorized by the Moroccan Ministry of Tourism?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {language === 'fr' ? 'Oui, EventMorocco est pleinement licencié et autorisé par le Ministère du Tourisme marocain. Nous sommes également membres de la Fédération Nationale du Tourisme et possédons toutes les certifications requises pour opérer en tant que DMC professionnel au Maroc, garantissant légalité et conformité totales.' :
                   language === 'es' ? 'Sí, EventMorocco está completamente licenciado y autorizado por el Ministerio de Turismo marroquí. También somos miembros de la Federación Nacional de Turismo y poseemos todas las certificaciones requeridas para operar como DMC profesional en Marruecos, garantizando legalidad y cumplimiento totales.' :
                   language === 'ar' ? 'نعم، EventMorocco مرخص بالكامل ومصرح به من وزارة السياحة المغربية. نحن أيضاً أعضاء في الاتحاد الوطني للسياحة ونمتلك جميع الشهادات المطلوبة للعمل كشركة DMC محترفة في المغرب، مما يضمن الشرعية والامتثال الكاملين.' :
                   'Yes, EventMorocco is fully licensed and authorized by the Moroccan Ministry of Tourism. We are also members of the National Tourism Federation and hold all required certifications to operate as a professional DMC in Morocco, guaranteeing complete legality and compliance.'}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <FAQSchema faqs={[
          {
            question: language === 'fr' ? 'Quels types d\'événements organisez-vous au Maroc?' : 'What types of events do you organize in Morocco?',
            answer: language === 'fr' ? 'Nous organisons tous types d\'événements d\'entreprise: conférences internationales, séminaires, voyages incentive, team building, retraites d\'entreprise, lancements de produits, galas de soirée et conventions.' : 'We organize all types of corporate events: international conferences, seminars, incentive trips, team building, corporate retreats, product launches, gala dinners, and conventions.'
          },
          {
            question: language === 'fr' ? 'Combien de temps à l\'avance dois-je réserver?' : 'How far in advance should I book?',
            answer: language === 'fr' ? 'Pour les événements de grande envergure (200+ participants), nous recommandons 6-12 mois d\'avance. Pour les groupes moyens (50-200), 3-6 mois sont idéaux.' : 'For large-scale events (200+ participants), we recommend 6-12 months in advance. For medium groups (50-200), 3-6 months is ideal.'
          },
          {
            question: language === 'fr' ? 'Quels sont vos tarifs pour les services MICE?' : 'What are your pricing for MICE services?',
            answer: language === 'fr' ? 'Voyages incentive: €800-1500/personne. Team building: €150-400/personne. Conférences: €200-600/personne/jour. Tous les devis sont personnalisés.' : 'Incentive travel: €800-1500/person. Team building: €150-400/person. Conferences: €200-600/person/day. All quotes are customized.'
          }
        ]} />

        {/* CTA Section */}
        <section className="py-20 gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
              {language === 'fr' ? 'Prêt à Organiser Votre Événement ?' : language === 'es' ? '¿Listo para Organizar Su Evento?' : language === 'ar' ? 'مستعد لتنظيم فعاليتك؟' : 'Ready to Organize Your Event?'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'fr' ? 'Obtenez votre devis personnalisé gratuit en moins de 24h et commencez à planifier l\'événement de vos rêves au Maroc.' : language === 'es' ? 'Obtenga su cotización personalizada gratuita en menos de 24h y comience a planificar el evento de sus sueños en Marruecos.' : language === 'ar' ? 'احصل على عرض السعر المخصص المجاني في أقل من 24 ساعة وابدأ في التخطيط لفعالية أحلامك في المغرب.' : 'Get your free personalized quote in less than 24h and start planning your dream event in Morocco.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <QuoteDialog>
                <Button variant="cta" size="lg" className="text-lg px-12 py-6">
                  {t('getProposal')}
                </Button>
              </QuoteDialog>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => openWhatsApp(undefined, language)}
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('whatsappContact')}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;