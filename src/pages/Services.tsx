import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Users, Briefcase, Presentation, Utensils, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-morocco-mice.jpg';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('incentiveTravel'),
      icon: Trophy,
      description: t('incentiveTravelDesc'),
      features: [t('incentiveFeature1'), t('incentiveFeature2'), t('incentiveFeature3'), t('incentiveFeature4')],
      image: heroImage
    },
    {
      title: t('teamBuilding'),
      icon: Users,
      description: t('teamBuildingDesc'),
      features: [t('teamBuildingFeature1'), t('teamBuildingFeature2'), t('teamBuildingFeature3'), t('teamBuildingFeature4')],
      image: heroImage
    },
    {
      title: t('corporateRetreats'),
      icon: Briefcase,
      description: t('corporateRetreatsDesc'),
      features: [t('corporateRetreatsFeature1'), t('corporateRetreatsFeature2'), t('corporateRetreatsFeature3'), t('corporateRetreatsFeature4')],
      image: heroImage
    },
    {
      title: t('conferences'),
      icon: Presentation,
      description: t('conferencesDesc'),
      features: [t('conferencesFeature1'), t('conferencesFeature2'), t('conferencesFeature3'), t('conferencesFeature4')],
      image: heroImage
    },
    {
      title: t('galaDinners'),
      icon: Utensils,
      description: t('galaDinnersDesc'),
      features: [t('galaDinnersFeature1'), t('galaDinnersFeature2'), t('galaDinnersFeature3'), t('galaDinnersFeature4')],
      image: heroImage
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
            {t('servicesPageTitle')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {t('servicesPageDesc')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <Card className="h-96 overflow-hidden shadow-card border-0">
                    <div className="relative h-full">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  </Card>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="cta" size="lg" className="mt-6">
                    {t('learnMore')}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
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

      {/* CTA Section */}
      <section className="py-20 gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
            {t('readyToStart')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('readyToStartDesc')}
          </p>
          <Button variant="cta" size="lg" className="text-lg px-12 py-6">
            {t('getProposal')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;