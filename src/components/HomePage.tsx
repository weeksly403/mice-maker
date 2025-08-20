import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Users, Star, MapPin, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-morocco-mice.jpg';
import desertImage from '@/assets/desert-team-building.jpg';
import conferenceImage from '@/assets/marrakech-conference.jpg';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();

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
    { name: t('marrakech'), image: conferenceImage },
    { name: t('casablanca'), image: heroImage },
    { name: t('agadir'), image: desertImage },
    { name: t('fes'), image: heroImage },
    { name: t('sahara'), image: desertImage }
  ];

  const services = [
    { title: t('incentiveTravel'), icon: '🏆' },
    { title: t('teamBuilding'), icon: '🤝' },
    { title: t('corporateRetreats'), icon: '💼' },
    { title: t('conferences'), icon: '🎤' },
    { title: t('galaDinners'), icon: '🍽️' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero opacity-90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            {t('heroTitle')}
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 font-medium">
            {t('heroSubtitle')}
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="cta" size="lg" className="text-lg px-12 py-6">
              {t('getProposal')}
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('benefitsTitle')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-0 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('destinationsTitle')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {destinations.map((destination, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden shadow-card hover:shadow-elegant transition-smooth border-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center text-white">
                      <MapPin className="w-4 h-4 mr-2" />
                      <h3 className="text-lg font-semibold">{destination.name}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {t('servicesTitle')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group cursor-pointer shadow-card hover:shadow-elegant transition-bounce border-0 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            {t('readyToStart')}
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('contactUs')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="hero" size="lg" className="text-lg px-12 py-6">
              {t('getProposal')}
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('whatsappContact')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};