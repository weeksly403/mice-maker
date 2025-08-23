import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedCard } from '@/components/AnimatedCard';
import { PageTransition } from '@/components/PageTransition';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CheckCircle, Clock, Users, Star, MapPin, MessageCircle, Trophy, Briefcase, Presentation, Utensils, Plane, Building, Palette, TrendingUp, DollarSign, Timer, Target, Quote, Eye, BookOpen, HelpCircle, Phone, Mail } from 'lucide-react';
import { QuoteDialog } from './QuoteDialog';
import { CaseStudyDialog } from './CaseStudyDialog';
import { ScheduleCallDialog } from './ScheduleCallDialog';
import { openWhatsApp } from '@/utils/whatsapp';
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

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const heroRef = useScrollReveal(0.1);

  // Initialize scroll reveal animations on mount
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
      icon: Clock,
      title: t('fastProposal'),
      description: t('fastProposalDesc')
    },
    {
      icon: CheckCircle,
      title: t('trustedPartners'),
      description: t('trustedPartnersDesc')
    },
    {
      icon: Star,
      title: t('uniqueExperiences'),
      description: t('uniqueExperiencesDesc')
    },
    {
      icon: Users,
      title: t('bestPrice'),
      description: t('bestPriceDesc')
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
      image: desertImage,
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
      image: desertImage
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

  return (
    <PageTransition className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/p6dAOmN0zdg?autoplay=1&mute=1&loop=1&playlist=p6dAOmN0zdg&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&enablejsapi=0"
            title="Morocco MICE Destination Video"
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
            loading="lazy"
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
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight animate-on-load">
            {t('heroTitle')}
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 font-medium animate-on-load-delay-1">
            {t('heroSubtitle')}
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

      {/* Morocco as MICE Destination - Storytelling Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                {t('moroccoMiceTitle')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('moroccoMiceStory')}
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Plane, text: t('moroccoMiceHighlight1') },
                  { icon: Building, text: t('moroccoMiceHighlight2') },
                  { icon: Palette, text: t('moroccoMiceHighlight3') },
                  { icon: TrendingUp, text: t('moroccoMiceHighlight4') }
                ].map((highlight, index) => (
                  <div key={index} className={`flex items-center animate-fade-in-up stagger-${index + 1}`}>
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
            
            <div className="relative scroll-reveal">
              <img 
                src={moroccoMapImage} 
                alt="Morocco MICE destinations map"
                className="w-full h-auto rounded-lg shadow-elegant hover-scale transition-corporate"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Keeping existing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('benefitsTitle')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedCard key={index} delay={index + 1} className="shadow-card hover:shadow-elegant transition-corporate border-0 bg-background/80 backdrop-blur-sm">
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
      </section>

      {/* Enhanced Destinations Section */}
      <section id="destinations-section" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('destinationsTitle')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <AnimatedCard key={index} delay={index + 1} className="group cursor-pointer overflow-hidden shadow-card hover:shadow-glow border-0 hover-lift" 
                onClick={() => navigate(`/destinations/${destination.name.toLowerCase()}`)}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-corporate"
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
      </section>

      {/* Services Deep Dive Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('servicesDeepDiveTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('servicesDeepDiveDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesDeepDive.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-0 bg-background/80 backdrop-blur-sm">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

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
              <img 
                src={roiBenefitsImage} 
                alt="ROI Benefits Infographic"
                className="w-full h-auto rounded-lg shadow-elegant"
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
              <img 
                src={corporateTestimonialsImage} 
                alt="Corporate testimonials"
                className="w-full h-auto rounded-lg shadow-elegant"
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
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
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
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
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
          <img 
            src={moroccoBusinessFusionImage} 
            alt="Morocco business fusion"
            className="w-full h-full object-cover opacity-20"
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