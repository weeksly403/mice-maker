import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { PageTransition } from '@/components/PageTransition';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useStaggerAnimation } from '@/hooks/useStaggerAnimation';
import { CheckCircle, Clock, Users, Star, MapPin, MessageCircle, Trophy, Briefcase, Presentation, Utensils, Plane, Building, Palette, TrendingUp, DollarSign, Timer, Target, Quote, Eye, BookOpen, HelpCircle, Phone, Mail, Calendar, Award } from 'lucide-react';
import { QuickFacts, createVenuesFact, createGroupSizeFact } from '@/components/SEO/QuickFacts';
import { ComparisonTable } from '@/components/SEO/ComparisonTable';
import { QuoteDialog } from './QuoteDialog';
import { CaseStudyDialog } from './CaseStudyDialog';
import { ScheduleCallDialog } from './ScheduleCallDialog';
import { openWhatsApp } from '@/utils/whatsapp';
import { EnhancedStructuredData } from '@/components/SEO/EnhancedStructuredData';
import { OptimizedSEO } from '@/components/SEO/OptimizedSEO';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { TravelAgencySchema } from '@/components/SEO/TravelAgencySchema';
import { MultipleServicesSchema } from '@/components/SEO/ServiceSchema';
import { VideoObjectSchema } from '@/components/SEO/VideoObjectSchema';
import { OptimizedImage } from '@/components/OptimizedImage';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { PressSection } from '@/components/conversion/PressSection';
import { ClientLogos } from '@/components/conversion/ClientLogos';
import { VideoTestimonials } from '@/components/conversion/VideoTestimonials';
import { LeadMagnetDownload } from '@/components/conversion/LeadMagnetDownload';
import { useEnhancedAnalytics } from '@/hooks/useEnhancedAnalytics';
import heroImage from '@/assets/hero-morocco-mice.jpg';
import desertImage from '@/assets/desert-team-building.jpg';
import conferenceImage from '@/assets/marrakech-conference.jpg';
import moroccoMapImage from '@/assets/morocco-mice-map.jpg';
import corporateTestimonialsImage from '@/assets/corporate-testimonials.jpg';
import moroccoBusinessFusionImage from '@/assets/morocco-business-fusion.jpg';
import roiBenefitsImage from '@/assets/roi-benefits-infographic.jpg';
import blogMarrakechImage from '@/assets/blog-marrakech-incentive.jpg';
import blogVenuesImage from '@/assets/blog-morocco-venues.jpg';
import blogSaharaImage from '@/assets/blog-sahara-retreat.jpg';
import agadirBeachImage from '@/assets/agadir-beach-teambuilding.jpg';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  
  // Defer background video loading to reduce main thread blocking
  const [loadBackgroundVideo, setLoadBackgroundVideo] = useState(false);
  
  useEffect(() => {
    // Load background video after page is interactive
    const deferVideoLoad = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          setLoadBackgroundVideo(true);
        }, { timeout: 2000 });
      } else {
        setTimeout(() => {
          setLoadBackgroundVideo(true);
        }, 1500);
      }
    };
    
    deferVideoLoad();
  }, []);
  
  const homepageFAQs = [
    {
      question: t('faq.whatIsDMC'),
      answer: t('faq.whatIsDMCAnswer'),
    },
    {
      question: t('faq.whyMorocco'),
      answer: t('faq.whyMoroccoAnswer'),
    },
    {
      question: t('faq.howFarAdvance'),
      answer: t('faq.howFarAdvanceAnswer'),
    },
  ];

  const heroRef = useScrollReveal({
    threshold: 0.1, 
    animationType: 'fade-up', 
    duration: 0.8 
  });
  const benefitsRef = useStaggerAnimation({ 
    staggerDelay: 0.15, 
    animationType: 'scale' 
  });
  const destinationsRef = useStaggerAnimation({ 
    staggerDelay: 0.2, 
    animationType: 'fade-left' 
  });
  const dmcExpertiseRef = useStaggerAnimation({ 
    staggerDelay: 0.1, 
    animationType: 'fade-up' 
  });
  const moroccoHighlightsRef = useStaggerAnimation({ 
    staggerDelay: 0.1, 
    animationType: 'fade-left' 
  });
  const servicesRef = useStaggerAnimation({ 
    staggerDelay: 0.2, 
    animationType: 'slide-up' 
  });

  // Initialize enhanced analytics tracking
  useEnhancedAnalytics();

  // Initialize scroll reveal animations on mount - keeping for compatibility
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const benefits = [
    {
      icon: Building,
      title: t('historicalAdvantage'),
      description: t('historicalAdvantageDesc')
    },
    {
      icon: MapPin,
      title: t('geographicalAdvantage'),
      description: t('geographicalAdvantageDesc')
    },
    {
      icon: TrendingUp,
      title: t('economicAdvantage'),
      description: t('economicAdvantageDesc')
    },
    {
      icon: Plane,
      title: t('infrastructureAdvantage'),
      description: t('infrastructureAdvantageDesc')
    },
    {
      icon: Palette,
      title: t('culturalAdvantage'),
      description: t('culturalAdvantageDesc')
    },
    {
      icon: DollarSign,
      title: t('costAdvantage'),
      description: t('costAdvantageDesc')
    }
  ];

  const destinations = [
    { 
      name: t('marrakech'), 
      image: conferenceImage,
      description: t('destinationMarrakechDesc'),
      venues: '50+',
      capacity: '2000'
    },
    { 
      name: t('casablanca'), 
      image: heroImage,
      description: t('destinationCasablancaDesc'),
      venues: '30+',
      capacity: '3000'
    },
    { 
      name: t('agadir'), 
      image: agadirBeachImage,
      description: t('destinationAgadirDesc'),
      venues: '25+',
      capacity: '1500'
    },
    { 
      name: t('fes'), 
      image: heroImage,
      description: t('destinationFesDesc'),
      venues: '15+',
      capacity: '800'
    },
    { 
      name: t('sahara'), 
      image: desertImage,
      description: t('destinationSaharaDesc'),
      venues: '10+',
      capacity: '500'
    }
  ];

  const servicesDeepDive = [
    { 
      title: t('incentiveTravel'), 
      icon: Trophy,
      description: t('incentiveTravelDesc'),
      features: [
        t('incentiveFeature1'),
        t('incentiveFeature2'),
        t('incentiveFeature3'),
        t('incentiveFeature4')
      ]
    },
    { 
      title: t('teamBuilding'), 
      icon: Users,
      description: t('teamBuildingDesc'),
      features: [
        t('teamBuildingFeature1'),
        t('teamBuildingFeature2'),
        t('teamBuildingFeature3'),
        t('teamBuildingFeature4')
      ]
    },
    { 
      title: t('corporateRetreats'), 
      icon: Briefcase,
      description: t('corporateRetreatsDesc'),
      features: [
        t('corporateRetreatsFeature1'),
        t('corporateRetreatsFeature2'),
        t('corporateRetreatsFeature3'),
        t('corporateRetreatsFeature4')
      ]
    },
    { 
      title: t('conferences'), 
      icon: Presentation,
      description: t('conferencesDesc'),
      features: [
        t('conferencesFeature1'),
        t('conferencesFeature2'),
        t('conferencesFeature3'),
        t('conferencesFeature4')
      ]
    },
    { 
      title: t('galaDinners'), 
      icon: Utensils,
      description: t('galaDinnersDesc'),
      features: [
        t('galaDinnersFeature1'),
        t('galaDinnersFeature2'),
        t('galaDinnersFeature3'),
        t('galaDinnersFeature4')
      ]
    }
  ];

  const roiFeatures = [
    {
      icon: Timer,
      title: t('roiSaveTime'),
      description: t('roiSaveTimeDesc')
    },
    {
      icon: DollarSign,
      title: t('roiSaveMoney'),
      description: t('roiSaveMoneyDesc')
    },
    {
      icon: Target,
      title: t('roiMaximizeImpact'),
      description: t('roiMaximizeImpactDesc')
    }
  ];

  const caseStudies = [
    {
      title: t('caseStudy1Title'),
      description: t('caseStudy1Desc'),
      metrics: t('caseStudy1Metrics'),
      image: conferenceImage
    },
    {
      title: t('caseStudy2Title'),
      description: t('caseStudy2Desc'),
      metrics: t('caseStudy2Metrics'),
      image: heroImage
    },
    {
      title: t('caseStudy3Title'),
      description: t('caseStudy3Desc'),
      metrics: t('caseStudy3Metrics'),
      image: agadirBeachImage
    }
  ];

  const insights = [
    {
      title: t('insight1Title'),
      description: t('insight1Desc'),
      image: blogVenuesImage
    },
    {
      title: t('insight2Title'),
      description: t('insight2Desc'),
      image: blogMarrakechImage
    },
    {
      title: t('insight3Title'),
      description: t('insight3Desc'),
      image: blogSaharaImage
    }
  ];

  const faqPreview = [
    {
      question: t('faqPreview1Q'),
      answer: t('faqPreview1A')
    },
    {
      question: t('faqPreview2Q'),
      answer: t('faqPreview2A')
    },
    {
      question: t('faqPreview3Q'),
      answer: t('faqPreview3A')
    },
    {
      question: t('faqPreview4Q'),
      answer: t('faqPreview4A')
    }
  ];

  // Enhanced FAQ data for structured data
  const homeFAQs = [
    {
      question: language === 'fr' ? 'Qu\'est-ce qu\'un DMC au Maroc ?' : language === 'es' ? '¿Qué es un DMC en Marruecos?' : language === 'ar' ? 'ما هي شركة إدارة الوجهة في المغرب؟' : 'What is a DMC in Morocco?',
      answer: language === 'fr' ? 'Un DMC (Destination Management Company) au Maroc est votre partenaire local expert pour organiser tous vos événements d\'entreprise. EventMorocco DMC gère l\'intégralité de vos MICE : conférences, incentives, team building, séminaires avec une expertise locale de 15 ans.' : language === 'es' ? 'Un DMC (Destination Management Company) en Marruecos es su socio local experto para organizar todos sus eventos corporativos. EventMorocco DMC gestiona la totalidad de sus MICE: conferencias, incentivos, team building, seminarios con experiencia local de 15 años.' : language === 'ar' ? 'شركة إدارة الوجهة (DMC) في المغرب هي شريكك المحلي الخبير لتنظيم جميع فعاليات شركتك. EventMorocco DMC تدير كامل أنشطة MICE: مؤتمرات، حوافز، بناء الفريق، ندوات مع خبرة محلية 15 سنة.' : 'A DMC (Destination Management Company) in Morocco is your expert local partner for organizing all your corporate events. EventMorocco DMC manages your complete MICE: conferences, incentives, team building, seminars with 15 years of local expertise.'
    },
    {
      question: language === 'fr' ? 'Pourquoi choisir le Maroc pour vos incentives ?' : language === 'es' ? '¿Por qué elegir Marruecos para sus incentivos?' : language === 'ar' ? 'لماذا اختيار المغرب لحوافزك؟' : 'Why choose Morocco for your incentives?',
      answer: language === 'fr' ? 'Le Maroc offre un cadre unique pour vos voyages incentive : proximité Europe (3h de vol), climat exceptionnel, diversité des expériences (désert, montagnes, océan), hôtels de luxe, coût attractif. EventMorocco DMC organise des incentives mémorables de Marrakech au Sahara.' : language === 'es' ? 'Marruecos ofrece un marco único para sus viajes de incentivo: proximidad a Europa (3h de vuelo), clima excepcional, diversidad de experiencias (desierto, montañas, océano), hoteles de lujo, costo atractivo. EventMorocco DMC organiza incentivos memorables de Marrakech al Sahara.' : language === 'ar' ? 'المغرب يقدم إطاراً فريداً لرحلات الحوافز: قرب من أوروبا (3 ساعات طيران)، مناخ استثنائي، تنوع التجارب (صحراء، جبال، محيط)، فنادق فاخرة، تكلفة جذابة. EventMorocco DMC تنظم حوافز لا تُنسى من مراكش إلى الصحراء.' : 'Morocco offers a unique setting for your incentive trips: proximity to Europe (3h flight), exceptional climate, diversity of experiences (desert, mountains, ocean), luxury hotels, attractive cost. EventMorocco DMC organizes memorable incentives from Marrakech to Sahara.'
    },
    {
      question: language === 'fr' ? 'Quelles sont les meilleures villes pour les conférences au Maroc ?' : language === 'es' ? '¿Cuáles son las mejores ciudades para conferencias en Marruecos?' : language === 'ar' ? 'ما هي أفضل المدن للمؤتمرات في المغرب؟' : 'What are the best cities for conferences in Morocco?',
      answer: language === 'fr' ? 'Les meilleures villes pour vos conférences au Maroc : Marrakech (50+ venues, 2000 capacité), Casablanca (centre économique, infrastructures modernes), Agadir (cadre balnéaire, climat parfait), Fès (authenticité culturelle). EventMorocco DMC vous conseille selon vos besoins spécifiques.' : language === 'es' ? 'Las mejores ciudades para sus conferencias en Marruecos: Marrakech (50+ venues, capacidad 2000), Casablanca (centro económico, infraestructuras modernas), Agadir (entorno costero, clima perfecto), Fez (autenticidad cultural). EventMorocco DMC le asesora según sus necesidades específicas.' : language === 'ar' ? 'أفضل المدن لمؤتمراتك في المغرب: مراكش (50+ مكان، سعة 2000)، الدار البيضاء (مركز اقتصادي، بنية تحتية حديثة)، أكادير (بيئة ساحلية، مناخ مثالي)، فاس (أصالة ثقافية). EventMorocco DMC تنصحك حسب احتياجاتك المحددة.' : 'Best cities for your conferences in Morocco: Marrakech (50+ venues, 2000 capacity), Casablanca (economic center, modern infrastructure), Agadir (coastal setting, perfect climate), Fez (cultural authenticity). EventMorocco DMC advises you according to your specific needs.'
    }
  ];

  return (
    <PageTransition className="min-h-screen bg-background">
      {/* Optimized SEO */}
      <OptimizedSEO pageType="home" />
      
      {/* Enhanced SEO Structured Data */}
      <EnhancedStructuredData type="organization" data={{}} />
      <EnhancedStructuredData type="localbusiness" data={{}} />
      <TravelAgencySchema />
      <MultipleServicesSchema 
        services={[
          {
            serviceName: language === 'fr' ? 'Événements Corporatifs Maroc' : language === 'es' ? 'Eventos Corporativos Marruecos' : language === 'ar' ? 'فعاليات الشركات المغرب' : 'Corporate Events Morocco',
            description: language === 'fr' ? 'Organisation complète d\'événements corporatifs au Maroc incluant conférences, séminaires, lancements de produits et réunions d\'entreprise' : language === 'es' ? 'Organización completa de eventos corporativos en Marruecos incluyendo conferencias, seminarios, lanzamientos de productos y reuniones empresariales' : language === 'ar' ? 'تنظيم كامل لفعاليات الشركات في المغرب بما في ذلك المؤتمرات والندوات وإطلاق المنتجات واجتماعات الأعمال' : 'Complete corporate event organization in Morocco including conferences, seminars, product launches and business meetings',
            serviceType: 'Event Planning',
            category: 'Corporate Events & MICE'
          },
          {
            serviceName: language === 'fr' ? 'Programmes Incentive Maroc' : language === 'es' ? 'Programas de Incentivos Marruecos' : language === 'ar' ? 'برامج الحوافز المغرب' : 'Incentive Programs Morocco',
            description: language === 'fr' ? 'Programmes de voyage incentive personnalisés pour motiver et récompenser vos équipes à travers les destinations uniques du Maroc' : language === 'es' ? 'Programas de viaje de incentivo personalizados para motivar y recompensar a sus equipos a través de destinos únicos en Marruecos' : language === 'ar' ? 'برامج سفر الحوافز المخصصة لتحفيز ومكافأة فرقك عبر وجهات المغرب الفريدة' : 'Customized incentive travel programs to motivate and reward your teams across Morocco\'s unique destinations',
            serviceType: 'Incentive Travel',
            category: 'Corporate Events & MICE'
          },
          {
            serviceName: language === 'fr' ? 'Organisation de Conférences' : language === 'es' ? 'Organización de Conferencias' : language === 'ar' ? 'تنظيم المؤتمرات' : 'Conference Organization',
            description: language === 'fr' ? 'Services professionnels d\'organisation de conférences avec sélection de lieux, technologie AV et gestion logistique complète au Maroc' : language === 'es' ? 'Servicios profesionales de organización de conferencias con selección de lugares, tecnología audiovisual y gestión logística completa en Marruecos' : language === 'ar' ? 'خدمات تنظيم المؤتمرات المهنية مع اختيار الأماكن والتكنولوجيا السمعية البصرية والإدارة اللوجستية الكاملة في المغرب' : 'Professional conference organization services with venue selection, AV technology and complete logistics management in Morocco',
            serviceType: 'Conference Management',
            category: 'Corporate Events & MICE'
          },
          {
            serviceName: language === 'fr' ? 'Team Building Maroc' : language === 'es' ? 'Team Building Marruecos' : language === 'ar' ? 'بناء الفريق المغرب' : 'Team Building Morocco',
            description: language === 'fr' ? 'Activités innovantes de team building et retraites d\'entreprise dans des environnements uniques du désert aux montagnes' : language === 'es' ? 'Actividades innovadoras de team building y retiros corporativos en entornos únicos del desierto a las montañas' : language === 'ar' ? 'أنشطة بناء الفريق المبتكرة والخلوات الشركات في بيئات فريدة من الصحراء إلى الجبال' : 'Innovative team building activities and corporate retreats in unique settings from desert to mountains',
            serviceType: 'Team Building',
            category: 'Corporate Events & MICE'
          }
        ]}
      />
      
      <FAQSchema faqs={homepageFAQs} />
      
      <VideoObjectSchema
        name={language === 'fr' ? 'Destination MICE Maroc - EventMorocco' :
              language === 'es' ? 'Destino MICE Marruecos - EventMorocco' :
              language === 'ar' ? 'وجهة MICE المغرب - EventMorocco' :
              'Morocco MICE Destination - EventMorocco'}
        description={language === 'fr' ? 'Découvrez le Maroc comme destination MICE premium avec EventMorocco, votre partenaire DMC expert pour événements d\'entreprise, conférences, et voyages incentive.' :
                    language === 'es' ? 'Descubra Marruecos como destino MICE premium con EventMorocco, su socio DMC experto en eventos corporativos, conferencias y viajes de incentivo.' :
                    language === 'ar' ? 'اكتشف المغرب كوجهة MICE متميزة مع EventMorocco، شريك DMC الخبير في الفعاليات الشركات والمؤتمرات ورحلات الحوافز.' :
                    'Discover Morocco as a premium MICE destination with EventMorocco, your expert DMC partner for corporate events, conferences, and incentive travel.'}
        thumbnailUrl="https://eventmorocco.com/hero-morocco-mice.jpg"
        uploadDate="2024-01-15"
        duration="PT3M15S"
        embedUrl="https://www.youtube.com/embed/p6dAOmN0zdg"
      />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {loadBackgroundVideo ? (
            <iframe
              src="https://www.youtube-nocookie.com/embed/p6dAOmN0zdg?autoplay=1&mute=1&loop=1&playlist=p6dAOmN0zdg&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&enablejsapi=0"
              title="Morocco MICE Destination Video"
              loading="lazy"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none
                         w-[300%] h-[300%] 
                         sm:w-[250%] sm:h-[250%] 
                         md:w-[180%] md:h-[180%] 
                         lg:w-[130%] lg:h-[130%] 
                         xl:w-[110%] xl:h-[110%]
                         2xl:w-[105%] 2xl:h-[105%]
                         min-w-full min-h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen={false}
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent'
              }}
              onError={() => {
                // Fallback to image if video fails to load
                const iframe = event.target as HTMLIFrameElement;
                const fallbackImg = document.createElement('img');
                fallbackImg.src = heroImage;
                fallbackImg.alt = 'Morocco MICE destination';
                fallbackImg.className = 'w-full h-full object-cover';
                iframe.parentNode?.replaceChild(fallbackImg, iframe);
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
          )}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 leading-tight animate-on-load">
            {language === 'fr' ? 'Expert DMC Maroc pour Événements d\'Entreprise' : 
             language === 'es' ? 'Experto DMC Marruecos para Eventos Corporativos' :
             language === 'ar' ? 'خبير DMC المغرب للفعاليات الشركات' :
             'Expert Morocco DMC for Corporate Events'}
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 font-medium animate-on-load-delay-1">
            {language === 'fr' ? 'Services MICE & Gestion de Destination Premium' :
             language === 'es' ? 'Servicios MICE & Gestión de Destino Premium' :
             language === 'ar' ? 'خدمات MICE وإدارة الوجهات المتميزة' :
             'Premium MICE Services & Destination Management'}
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-on-load-delay-2">
            {t('heroDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-on-load-delay-3">
            <QuoteDialog>
              <Button variant="cta" size="lg" className="text-lg px-12 py-6 hover-lift hover-glow transition-corporate">
                {t('getProposal')}
              </Button>
            </QuoteDialog>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover-lift"
              onClick={() => openWhatsApp(undefined, language)}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('whatsappContact')}
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trust Bar with Stats & Certifications */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'fr' ? 'Années d\'Expérience' : language === 'es' ? 'Años de Experiencia' : language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-gold" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">
                {language === 'fr' ? 'Satisfaction Client' : language === 'es' ? 'Satisfacción Cliente' : language === 'ar' ? 'رضا العملاء' : 'Client Rating'}
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'fr' ? 'Événements Livrés' : language === 'es' ? 'Eventos Entregados' : language === 'ar' ? 'فعاليات منفذة' : 'Events Delivered'}
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'fr' ? 'Taux de Satisfaction' : language === 'es' ? 'Tasa de Satisfacción' : language === 'ar' ? 'معدل الرضا' : 'Satisfaction Rate'}
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground font-medium">
              {language === 'fr' ? 'Certifié & Reconnu:' : language === 'es' ? 'Certificado y Reconocido:' : language === 'ar' ? 'معتمد ومعترف به:' : 'Certified & Trusted:'}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="outline" className="text-xs">
                {language === 'fr' ? 'Spécialiste MICE Certifié' : language === 'es' ? 'Especialista MICE Certificado' : language === 'ar' ? 'متخصص MICE معتمد' : 'MICE Specialist Certified'}
              </Badge>
              <Badge variant="outline" className="text-xs">ISO 9001</Badge>
              <Badge variant="outline" className="text-xs">
                {language === 'fr' ? 'Ministère du Tourisme Maroc' : language === 'es' ? 'Ministerio de Turismo Marruecos' : language === 'ar' ? 'وزارة السياحة المغرب' : 'Morocco Tourism Ministry'}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {language === 'fr' ? 'Membre SITE Global' : language === 'es' ? 'Miembro SITE Global' : language === 'ar' ? 'عضو SITE العالمي' : 'SITE Global Member'}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts - AI Optimized for Extraction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <QuickFacts
            title={language === 'fr' ? 'Aperçu Rapide de Nos Services' : 
                   language === 'es' ? 'Resumen Rápido de Nuestros Servicios' :
                   language === 'ar' ? 'نظرة سريعة على خدماتنا' :
                   'Quick Service Overview'}
            facts={[
              createVenuesFact('200+'),
              createGroupSizeFact('10-3000'),
              {
                icon: DollarSign,
                label: language === 'fr' ? 'Gamme de Prix' : language === 'es' ? 'Rango de Precios' : language === 'ar' ? 'نطاق السعر' : 'Price Range',
                value: '€€€'
              },
              {
                icon: Calendar,
                label: language === 'fr' ? 'Meilleurs Mois' : language === 'es' ? 'Mejores Meses' : language === 'ar' ? 'أفضل الأشهر' : 'Best Months',
                value: language === 'fr' ? 'Mar-Jun, Sep-Nov' : 'Mar-Jun, Sep-Nov'
              },
              {
                icon: TrendingUp,
                label: language === 'fr' ? 'ROI Attendu' : language === 'es' ? 'ROI Esperado' : language === 'ar' ? 'العائد المتوقع' : 'Expected ROI',
                value: '300%+'
              },
              {
                icon: Clock,
                label: language === 'fr' ? 'Délai Requis' : language === 'es' ? 'Tiempo de Anticipación' : language === 'ar' ? 'الوقت المطلوب' : 'Lead Time',
                value: language === 'fr' ? '3-6 mois' : language === 'es' ? '3-6 meses' : language === 'ar' ? '3-6 أشهر' : '3-6 months'
              }
            ]}
          />
        </div>
      </section>

      {/* Why Choose Us as Morocco DMC Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
              {language === 'fr' ? 'Pourquoi Choisir Notre DMC Maroc' : 
               language === 'es' ? '¿Por Qué Elegir Nuestro DMC Marruecos?' : 
               language === 'ar' ? 'لماذا تختار شركة DMC المغرب لدينا' :
               'Why Choose Our Morocco DMC'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {language === 'fr' ? 'En tant que DMC leader au Maroc, nous transformons vos événements corporatifs en expériences extraordinaires grâce à notre expertise locale inégalée et nos services MICE de classe mondiale.' :
               language === 'es' ? 'Como DMC líder en Marruecos, transformamos sus eventos corporativos en experiencias extraordinarias gracias a nuestra experiencia local incomparable y servicios MICE de clase mundial.' :
               language === 'ar' ? 'كشركة DMC رائدة في المغرب، نحول فعالياتكم الشركات إلى تجارب استثنائية بفضل خبرتنا المحلية الفريدة وخدمات MICE عالمية المستوى.' :
               'As Morocco\'s leading DMC, we transform your corporate events into extraordinary experiences through unmatched local expertise and world-class MICE services.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <Card className="shadow-elegant hover:shadow-glow transition-smooth border-0 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {language === 'fr' ? '15+ Années d\'Excellence DMC' :
                   language === 'es' ? '15+ Años de Excelencia DMC' :
                   language === 'ar' ? '15+ سنة من التميز DMC' :
                   '15+ Years DMC Excellence'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'fr' ? 'Expertise approfondie du marché marocain des événements corporatifs avec un historique prouvé de plus de 2000 événements MICE réussis pour les entreprises Fortune 500 et les agences internationales.' :
                   language === 'es' ? 'Experiencia profunda del mercado marroquí de eventos corporativos con un historial probado de más de 2000 eventos MICE exitosos para empresas Fortune 500 y agencias internacionales.' :
                   language === 'ar' ? 'خبرة عميقة في السوق المغربي للفعاليات الشركات مع سجل مثبت لأكثر من 2000 حدث MICE ناجح لشركات فورتشن 500 والوكالات الدولية.' :
                   'Deep expertise in Morocco\'s corporate events market with proven track record of 2000+ successful MICE events for Fortune 500 companies and international agencies.'}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-smooth border-0 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {language === 'fr' ? 'Réseau National Premium' :
                   language === 'es' ? 'Red Nacional Premium' :
                   language === 'ar' ? 'شبكة وطنية مميزة' :
                   'National Premium Network'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'fr' ? 'Accès exclusif à plus de 200 lieux de conférence premium au Maroc, des palais impériaux de Marrakech aux centres de congrès modernes de Casablanca, garantissant des options parfaites pour chaque événement corporatif.' :
                   language === 'es' ? 'Acceso exclusivo a más de 200 lugares de conferencia premium en Marruecos, desde palacios imperiales de Marrakech hasta centros de convenciones modernos de Casablanca, garantizando opciones perfectas para cada evento corporativo.' :
                   language === 'ar' ? 'وصول حصري لأكثر من 200 مكان مؤتمرات مميز في المغرب، من القصور الإمبراطورية في مراكش إلى مراكز المؤتمرات الحديثة في الدار البيضاء.' :
                   'Exclusive access to 200+ premium conference venues across Morocco, from Marrakech\'s imperial palaces to Casablanca\'s modern convention centers, ensuring perfect options for every corporate event.'}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-smooth border-0 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {language === 'fr' ? 'Équipe Multilingue Expert' :
                   language === 'es' ? 'Equipo Multilingüe Experto' :
                   language === 'ar' ? 'فريق متعدد اللغات خبير' :
                   'Expert Multilingual Team'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'fr' ? 'Équipe dédiée de 50+ spécialistes MICE certifiés parlant plus de 8 langues, offrant un support 24/7 et une expertise culturelle approfondie pour des événements d\'incentive et team building transformateurs.' :
                   language === 'es' ? 'Equipo dedicado de 50+ especialistas MICE certificados que hablan más de 8 idiomas, ofreciendo soporte 24/7 y experiencia cultural profunda para eventos de incentivo y team building transformadores.' :
                   language === 'ar' ? 'فريق مخصص من 50+ متخصص MICE معتمد يتحدث أكثر من 8 لغات، مع دعم 24/7 وخبرة ثقافية عميقة للحوافز وبناء الفرق التحويلية.' :
                   'Dedicated team of 50+ certified MICE specialists speaking 8+ languages, providing 24/7 support and deep cultural expertise for transformational incentive and team building events.'}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              {language === 'fr' ? 'Votre Partenaire DMC de Confiance au Maroc' :
               language === 'es' ? 'Su Socio DMC de Confianza en Marruecos' :
               language === 'ar' ? 'شريك DMC الموثوق في المغرب' :
               'Your Trusted DMC Partner in Morocco'}
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              {language === 'fr' ? 'De la planification stratégique à l\'exécution parfaite, notre DMC Maroc livre des résultats exceptionnels qui dépassent les attentes. Chaque événement corporatif devient une expérience transformatrice qui inspire, motive et génère un ROI mesurable pour votre organisation.' :
               language === 'es' ? 'Desde la planificación estratégica hasta la ejecución perfecta, nuestro DMC Marruecos entrega resultados excepcionales que superan las expectativas. Cada evento corporativo se convierte en una experiencia transformadora que inspira, motiva y genera ROI medible para su organización.' :
               language === 'ar' ? 'من التخطيط الاستراتيجي إلى التنفيذ المثالي، يقدم DMC المغرب لدينا نتائج استثنائية تفوق التوقعات. كل حدث شركات يصبح تجربة تحويلية تلهم وتحفز.' :
               'From strategic planning to flawless execution, our Morocco DMC delivers exceptional results that exceed expectations. Every corporate event becomes a transformative experience that inspires, motivates, and generates measurable ROI for your organization.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <QuoteDialog>
                <Button variant="cta" size="lg" className="text-lg px-10 py-4">
                  {language === 'fr' ? 'Demandez Votre Proposition DMC' :
                   language === 'es' ? 'Solicite Su Propuesta DMC' :
                   language === 'ar' ? 'اطلب اقتراحك DMC' :
                   'Request Your DMC Proposal'}
                </Button>
              </QuoteDialog>
              <ScheduleCallDialog>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  {language === 'fr' ? 'Consultation DMC Expert' :
                   language === 'es' ? 'Consulta DMC Experta' :
                   language === 'ar' ? 'استشارة DMC خبيرة' :
                   'Expert DMC Consultation'}
                </Button>
              </ScheduleCallDialog>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison Table - AI Optimized */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonTable
            title={language === 'fr' ? 'Comparaison de Nos Services MICE' : 
                   language === 'es' ? 'Comparación de Nuestros Servicios MICE' :
                   language === 'ar' ? 'مقارنة خدمات MICE' :
                   'MICE Services Comparison'}
            description={language === 'fr' ? 'Choisissez le bon service pour votre événement corporatif au Maroc' : 
                        language === 'es' ? 'Elija el servicio adecuado para su evento corporativo en Marruecos' :
                        language === 'ar' ? 'اختر الخدمة المناسبة لحدثك الشركاتي في المغرب' :
                        'Choose the right service for your corporate event in Morocco'}
            rows={
              language === 'fr' ? [
                'Durée Typique',
                'Taille de Groupe',
                'Gamme de Prix',
                'Objectif Principal',
                'Meilleur Pour',
                'ROI Attendu'
              ] : language === 'es' ? [
                'Duración Típica',
                'Tamaño de Grupo',
                'Rango de Precios',
                'Objetivo Principal',
                'Mejor Para',
                'ROI Esperado'
              ] : language === 'ar' ? [
                'المدة النموذجية',
                'حجم المجموعة',
                'نطاق السعر',
                'الهدف الرئيسي',
                'الأفضل لـ',
                'العائد المتوقع'
              ] : [
                'Typical Duration',
                'Group Size',
                'Price Range',
                'Primary Goal',
                'Best For',
                'Expected ROI'
              ]
            }
            columns={[
              {
                header: language === 'fr' ? 'Incentive Travel' : language === 'es' ? 'Viajes de Incentivo' : language === 'ar' ? 'رحلات التحفيز' : 'Incentive Travel',
                values: [
                  '3-7 days',
                  '20-300',
                  '€800-1500',
                  language === 'fr' ? 'Récompense & Motivation' : language === 'es' ? 'Recompensa y Motivación' : language === 'ar' ? 'المكافأة والتحفيز' : 'Reward & Motivation',
                  language === 'fr' ? 'Top performers' : language === 'es' ? 'Mejores artistas' : language === 'ar' ? 'أفضل أداء' : 'Top performers',
                  '250-300%'
                ],
                highlighted: true
              },
              {
                header: language === 'fr' ? 'Team Building' : language === 'es' ? 'Team Building' : language === 'ar' ? 'بناء الفريق' : 'Team Building',
                values: [
                  '1-3 days',
                  '10-150',
                  '€350-800',
                  language === 'fr' ? 'Cohésion d\'Équipe' : language === 'es' ? 'Cohesión de Equipo' : language === 'ar' ? 'تماسك الفريق' : 'Team Cohesion',
                  language === 'fr' ? 'Départements entiers' : language === 'es' ? 'Departamentos enteros' : language === 'ar' ? 'أقسام كاملة' : 'Entire departments',
                  '150-200%'
                ]
              },
              {
                header: language === 'fr' ? 'Retraites d\'Entreprise' : language === 'es' ? 'Retiros Corporativos' : language === 'ar' ? 'خلوات الشركات' : 'Corporate Retreats',
                values: [
                  '2-5 days',
                  '15-80',
                  '€450-900',
                  language === 'fr' ? 'Planification Stratégique' : language === 'es' ? 'Planificación Estratégica' : language === 'ar' ? 'التخطيط الاستراتيجي' : 'Strategic Planning',
                  language === 'fr' ? 'Leadership teams' : language === 'es' ? 'Equipos de liderazgo' : language === 'ar' ? 'فرق القيادة' : 'Leadership teams',
                  '200-250%'
                ]
              },
              {
                header: language === 'fr' ? 'Conférences' : language === 'es' ? 'Conferencias' : language === 'ar' ? 'المؤتمرات' : 'Conferences',
                values: [
                  '1-4 days',
                  '50-3000',
                  '€200-600',
                  language === 'fr' ? 'Partage de Connaissances' : language === 'es' ? 'Compartir Conocimientos' : language === 'ar' ? 'مشاركة المعرفة' : 'Knowledge Sharing',
                  language === 'fr' ? 'Grands rassemblements' : language === 'es' ? 'Grandes reuniones' : language === 'ar' ? 'تجمعات كبيرة' : 'Large gatherings',
                  '180-220%'
                ]
              }
            ]}
          />
        </div>
      </section>

      {/* DMC Section - New Strategic Section */}
      <AnimatedSection className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard 
            animationType="fade-up" 
            className="text-center mb-16 shadow-none border-0 bg-transparent p-0"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('dmcSectionTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('dmcSectionDesc')}
            </p>
          </AnimatedCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={dmcExpertiseRef}>
            {[
              { text: t('dmcExpertise1'), icon: CheckCircle },
              { text: t('dmcExpertise2'), icon: Users },
              { text: t('dmcExpertise3'), icon: Star },
              { text: t('dmcExpertise4'), icon: MapPin },
              { text: t('dmcExpertise5'), icon: Clock },
              { text: t('dmcExpertise6'), icon: Trophy }
            ].map((expertise, index) => (
              <AnimatedCard
                key={index}
                animationType="scale"
                delay={index * 0.1}
                className="shadow-card hover:shadow-elegant transition-corporate border-0 bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center hover-scale transition-corporate">
                    <expertise.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-foreground leading-relaxed font-medium">
                    {expertise.text}
                  </p>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Morocco as MICE Destination - Storytelling Section */}
      <AnimatedSection 
        className="py-20 bg-background"
        animationOptions={{ animationType: 'fade-right', threshold: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                {t('moroccoMiceTitle')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('moroccoMiceStory')}
              </p>
              
              <div className="space-y-4" ref={moroccoHighlightsRef}>
                {[
                  { icon: Plane, text: t('moroccoMiceHighlight1') },
                  { icon: Building, text: t('moroccoMiceHighlight2') },
                  { icon: Palette, text: t('moroccoMiceHighlight3') },
                  { icon: TrendingUp, text: t('moroccoMiceHighlight4') }
                ].map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center mr-4 hover-scale transition-corporate">
                      <highlight.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{highlight.text}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="hero" 
                size="lg" 
                className="mt-8 hover-lift hover-glow transition-corporate"
                onClick={() => {
                  const destinationsSection = document.getElementById('destinations-section');
                  destinationsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('discoverMorocco')}
              </Button>
            </div>
            
            <AnimatedCard 
              animationType="scale" 
              delay={0.3}
              className="relative overflow-hidden shadow-none border-0 bg-transparent p-0"
            >
              <img 
                src="/lovable-uploads/9972a502-cb1d-485b-bd47-ed78652f5705.png" 
                alt="DMC Maroc EventMorocco - Expert organisation événements entreprise, conférences MICE et incentives au Maroc"
                className="w-full h-auto rounded-lg shadow-elegant hover-scale transition-corporate"
                loading="lazy"
              />
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section - Enhanced with stagger animation */}
      <AnimatedSection className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard 
            animationType="fade-up" 
            className="text-center mb-16 shadow-none border-0 bg-transparent p-0"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('moroccoAdvantagesTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('moroccoAdvantagesDesc')}
            </p>
          </AnimatedCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={benefitsRef}>
            {benefits.map((benefit, index) => (
              <AnimatedCard 
                key={index} 
                animationType="scale" 
                delay={index * 0.1}
                className="shadow-card hover:shadow-elegant transition-corporate border-0 bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center hover-scale transition-corporate">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Enhanced Destinations Section */}
      <AnimatedSection id="destinations-section" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard 
            animationType="fade-up" 
            className="text-center mb-16 shadow-none border-0 bg-transparent p-0"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('destinationsTitle')}
            </h2>
          </AnimatedCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={destinationsRef}>
            {destinations.map((destination, index) => (
              <AnimatedCard 
                key={index} 
                animationType="fade-right" 
                delay={index * 0.15}
                className="group cursor-pointer overflow-hidden shadow-card hover:shadow-glow border-0" 
                onClick={() => navigate(`/destinations/${destination.name.toLowerCase()}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <ResponsiveImage 
                    src={destination.image} 
                    alt={language === 'fr' ? `${destination.name} - Destination MICE Maroc pour événements entreprise, conférences et incentives` : language === 'es' ? `${destination.name} - Destino MICE Marruecos para eventos corporativos, conferencias e incentivos` : language === 'ar' ? `${destination.name} - وجهة MICE المغرب لفعاليات الشركات والمؤتمرات والحوافز` : `${destination.name} - MICE Destination Morocco for corporate events, conferences and incentives`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    loading="lazy"
                    width={1600}
                    height={764}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white mb-2">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <h3 className="text-xl font-semibold">{destination.name}</h3>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">{destination.venues}</span> {t('destinationVenues')}
                      </div>
                    </div>
                    <p className="text-white/90 text-sm">{destination.description}</p>
                    <div className="mt-2 text-xs text-white/70">
                      {t('upTo')} {destination.capacity} {t('guests')}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Deep Dive Section */}
      <AnimatedSection 
        className="py-20 bg-muted/30"
        animationOptions={{ animationType: 'fade-up', threshold: 0.15 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard 
            animationType="fade-up" 
            className="text-center mb-16 shadow-none border-0 bg-transparent p-0"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('servicesDeepDiveTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('servicesDeepDiveDesc')}
            </p>
          </AnimatedCard>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" ref={servicesRef}>
            {servicesDeepDive.map((service, index) => (
              <AnimatedCard 
                key={index} 
                animationType="rotate" 
                delay={index * 0.2}
                className="shadow-card hover:shadow-elegant transition-smooth border-0 bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => navigate('/services')}
                  >
                    {t('learnMore')}
                  </Button>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ROI / Value Section */}
      <section className="py-20 gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                {t('roiTitle')}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t('roiSubtitle')}
              </p>
              
              <div className="space-y-6">
                {roiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-primary font-medium">
                  {t('roiOptimization')}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <ResponsiveImage 
                src={roiBenefitsImage} 
                alt={language === 'fr' ? 'Infographie ROI événements entreprise Maroc - Bénéfices mesurés des services MICE DMC EventMorocco' : language === 'es' ? 'Infografía ROI eventos corporativos Marruecos - Beneficios medidos servicios MICE DMC EventMorocco' : language === 'ar' ? 'إنفوجرافيك عائد الاستثمار للفعاليات الشركاتية المغرب - الفوائد المقاسة لخدمات MICE DMC EventMorocco' : 'ROI Benefits Infographic - Measured benefits of EventMorocco DMC MICE services in Morocco'}
                className="w-full h-auto rounded-lg shadow-elegant"
                loading="lazy"
                width={1600}
                height={1067}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('testimonialsTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('testimonialsSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="shadow-card border-0 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Quote className="w-12 h-12 text-primary mb-6" />
                  <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                    {t('testimonial1')}
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">
                      {t('testimonial1Author')}
                    </p>
                    <p className="text-muted-foreground">
                      {t('testimonial1Company')}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  {t('clientLogos')}
                </p>
                <div className="flex justify-center items-center space-x-8 opacity-60">
                  <div className="h-12 w-24 bg-muted rounded flex items-center justify-center">
                    <Building className="w-8 h-8" />
                  </div>
                  <div className="h-12 w-24 bg-muted rounded flex items-center justify-center">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div className="h-12 w-24 bg-muted rounded flex items-center justify-center">
                    <Star className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <ResponsiveImage 
                src={corporateTestimonialsImage} 
                alt={language === 'fr' ? 'Témoignages clients DMC Maroc EventMorocco - Entreprises satisfaites événements MICE au Maroc' : language === 'es' ? 'Testimonios clientes DMC Marruecos EventMorocco - Empresas satisfechas eventos MICE en Marruecos' : language === 'ar' ? 'شهادات عملاء DMC المغرب EventMorocco - شركات راضية عن فعاليات MICE في المغرب' : 'EventMorocco DMC Morocco client testimonials - Satisfied companies MICE events Morocco'}
                className="w-full h-auto rounded-lg shadow-elegant"
                loading="lazy"
                width={1600}
                height={1065}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('caseStudiesTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('caseStudiesSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden shadow-card hover:shadow-elegant transition-smooth border-0">
                <div className="relative h-48 overflow-hidden">
                  <ResponsiveImage 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    loading="lazy"
                    width={1600}
                    height={764}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {caseStudy.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {caseStudy.description}
                  </p>
                  <div className="p-3 bg-primary/10 rounded-lg mb-4">
                    <p className="text-primary font-medium text-sm">
                      {caseStudy.metrics}
                    </p>
                  </div>
                  <CaseStudyDialog caseStudy={caseStudy} index={index}>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      {t('viewCaseStudy')}
                    </Button>
                  </CaseStudyDialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Insights Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('insightsTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('insightsSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden shadow-card hover:shadow-elegant transition-smooth border-0">
                <div className="relative h-48 overflow-hidden">
                  <ResponsiveImage 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    loading="lazy"
                    width={1600}
                    height={764}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {insight.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigate('/blog')}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    {t('learnMore')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate('/blog')}
            >
              {t('readMoreInsights')}
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Video Testimonials Section */}
      <VideoTestimonials />

      {/* Press Section */}
      <PressSection />

      {/* Lead Magnet Section */}
      <LeadMagnetDownload />

      {/* FAQ Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('faqPreviewTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('faqPreviewSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqPreview.map((faq, index) => (
              <Card key={index} className="shadow-card border-0 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <HelpCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed ml-9">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/faq')}
            >
              {t('viewAllFAQ')}
            </Button>
          </div>
        </div>
      </section>

      {/* Strong Final CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <ResponsiveImage 
            src={moroccoBusinessFusionImage} 
            alt={language === 'fr' ? 'Fusion business Maroc - Rencontres d\'affaires et networking événements entreprise au Maroc' : language === 'es' ? 'Fusión business Marruecos - Encuentros de negocios y networking eventos corporativos en Marruecos' : language === 'ar' ? 'اندماج الأعمال المغرب - لقاءات الأعمال والتواصل فعاليات الشركات في المغرب' : 'Morocco business fusion - Business meetings and networking corporate events in Morocco'}
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
            width={1600}
            height={764}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
            {t('finalCtaTitle')}
          </h2>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 font-medium">
            {t('finalCtaSubtitle')}
          </p>
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('finalCtaDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <QuoteDialog title={t('getProposal24h')}>
              <Button variant="cta" size="lg" className="text-lg px-12 py-6 bg-white text-primary hover:bg-white/90">
                {t('getProposal24h')}
              </Button>
            </QuoteDialog>
            
            <ScheduleCallDialog>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                <Phone className="w-5 h-5 mr-2" />
                {t('bookCall')}
              </Button>
            </ScheduleCallDialog>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              onClick={() => openWhatsApp(undefined, language)}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('whatsappContact')}
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/70">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>{t('responseTime24h')}</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>500+ {t('testimonialsSubtitle').split(' ').slice(-2).join(' ')}</span>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};