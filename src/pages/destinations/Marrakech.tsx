import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { AnimatedCard } from '@/components/AnimatedCard';
import { PageTransition } from '@/components/PageTransition';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Star, Calendar, Camera, Utensils, Briefcase, Car } from 'lucide-react';
import { QuoteDialog } from '@/components/QuoteDialog';
import marrakechConference from '@/assets/marrakech-conference.jpg';
import heroMoroccoMice from '@/assets/hero-morocco-mice.jpg';

const MarrakechDestination: React.FC = () => {
  const { t, language } = useLanguage();

  const venues = [
    {
      name: 'La Mamounia',
      category: 'Palace Hotel',
      capacity: '800',
      features: ['Spa', 'Golf', 'Galas'],
      rating: 5
    },
    {
      name: 'Four Seasons Resort',
      category: 'Luxury Resort', 
      capacity: '600',
      features: ['Atlas Views', 'Conference Rooms', 'Team Building'],
      rating: 5
    },
    {
      name: 'Royal Mansour',
      category: 'Luxury Palace',
      capacity: '400',
      features: ['Exclusive', 'Royal Treatment', 'Incentives'],
      rating: 5
    },
    {
      name: 'Palais des Congrès',
      category: 'Convention Center',
      capacity: '2000',
      features: ['Modern Tech', 'Large Events', 'Exhibitions'],
      rating: 4
    }
  ];

  const experiences = [
    {
      title: 'Atlas Mountains Excursion',
      description: 'Team building adventures in the stunning Atlas Mountains with traditional Berber villages',
      icon: Camera,
      duration: 'Full Day'
    },
    {
      title: 'Cooking Class & Souk Tour',
      description: 'Interactive cooking workshops followed by guided tours of traditional markets',
      icon: Utensils,
      duration: 'Half Day'
    },
    {
      title: 'Desert Incentive Experience',
      description: 'Luxury desert camps with camel trekking and traditional entertainment',
      icon: Star,
      duration: '2-3 Days'
    },
    {
      title: 'Private Riad Events',
      description: 'Exclusive corporate dinners in authentic Moroccan palaces and riads',
      icon: Briefcase,
      duration: 'Evening'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Marrakech Corporate Events | MICE Destination Morocco | Seminars & Incentives</title>
        <meta name="description" content="Plan your corporate event in Marrakech with expert MICE services. Luxury venues, incentives, conferences & team building in Morocco's imperial city. Get free quote!" />
        <meta name="keywords" content="Marrakech corporate events, MICE Marrakech, séminaire Marrakech, incentive Marrakech, conference venues Marrakech, team building Morocco" />
        <link rel="canonical" href={`${window.location.origin}/destinations/marrakech`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={marrakechConference}
              alt="Marrakech conference venue with Atlas Mountains backdrop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Premium MICE Destination
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Corporate Events in Marrakech
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the perfect blend of luxury and tradition for your corporate events in Morocco's imperial city. From palace hotels to desert incentives.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <QuoteDialog>
                <Button variant="cta" size="lg">
                  Get Free Proposal
                </Button>
              </QuoteDialog>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                View Venues
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  Why Choose Marrakech for Corporate Events?
                </h2>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="leading-relaxed">
                    Marrakech stands as Morocco's premier MICE destination, combining world-class infrastructure with authentic cultural experiences. The Red City offers over 50 luxury venues, from palatial hotels to modern convention centers.
                  </p>
                  
                  <p className="leading-relaxed">
                    With direct flights from major European cities (just 3 hours from Paris, London, Madrid), Marrakech provides easy accessibility for international corporate groups. The city's year-round favorable climate makes it ideal for outdoor team-building activities and incentive programs.
                  </p>
                  
                  <p className="leading-relaxed">
                    From Atlas Mountain adventures to exclusive riad dinners, Marrakech delivers unforgettable experiences that boost team morale and create lasting business relationships.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, label: 'Up to 2,000 delegates', value: '50+ Venues' },
                    { icon: Calendar, label: '300+ sunny days/year', value: 'Perfect Climate' },
                    { icon: Car, label: '3 hours from Europe', value: 'Easy Access' },
                    { icon: Star, label: '5-star luxury hotels', value: 'Premium Service' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="font-semibold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img 
                  src={heroMoroccoMice}
                  alt="Marrakech corporate event venue with traditional Moroccan architecture"
                  className="w-full h-auto rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Venues Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                Premium Venues in Marrakech
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From intimate boardroom meetings to large-scale conferences, discover Marrakech's finest corporate venues.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {venues.map((venue, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">{venue.category}</Badge>
                      <div className="flex items-center">
                        {[...Array(venue.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {venue.name}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Up to {venue.capacity} guests</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {venue.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                Unique Corporate Experiences
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Enhance your corporate events with authentic Moroccan experiences that create lasting memories and strengthen team bonds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((experience, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <experience.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {experience.title}
                          </h3>
                          <Badge variant="outline">{experience.duration}</Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
              Ready to Plan Your Marrakech Corporate Event?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a personalized proposal for your corporate event in Marrakech. Our local experts will handle every detail.
            </p>
            
            <QuoteDialog>
              <Button variant="cta" size="lg" className="px-12">
                Get Free Proposal for Marrakech
              </Button>
            </QuoteDialog>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarrakechDestination;