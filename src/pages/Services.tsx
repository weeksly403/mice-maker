import React from 'react';
import { Helmet } from 'react-helmet-async';
import { OptimizedSEO } from '@/components/SEO/OptimizedSEO';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QuoteDialog } from '@/components/QuoteDialog';
import { ScheduleCallDialog } from '@/components/ScheduleCallDialog';
import { Trophy, Users, Briefcase, Presentation, Utensils, CheckCircle, Star, MapPin, Calendar, Phone, Clock, Euro, Award, Target, TrendingUp, Shield, Headphones, Globe, Heart, Camera, Music, Palette } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';
import heroImage from '@/assets/hero-morocco-mice.jpg';
import conferenceImage from '@/assets/marrakech-conference.jpg';
import teamBuildingImage from '@/assets/agadir-beach-teambuilding.jpg';
import desertImage from '@/assets/desert-team-building.jpg';
import dinnerImage from '@/assets/agadir-corporate-dinner.jpg';
import culturalImage from '@/assets/agadir-cultural-experience.jpg';

const Services: React.FC = () => {
  const { t, language } = useLanguage();

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
      image: desertImage,
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
      image: teamBuildingImage,
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
      image: culturalImage,
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