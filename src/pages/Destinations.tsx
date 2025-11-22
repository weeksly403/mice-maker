import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users, Calendar } from 'lucide-react';
import { getLocalizedPath } from '@/lib/i18n';
import { QuoteDialog } from '@/components/QuoteDialog';
import { ComparisonTable } from '@/components/SEO/ComparisonTable';
import heroImage from '@/assets/hero-morocco-mice.jpg';
import desertImage from '@/assets/desert-team-building.jpg';
import marrakechDestImage from '@/assets/dest-marrakech.jpg';
import casablancaDestImage from '@/assets/dest-casablanca.jpg';
import agadirDestImage from '@/assets/dest-agadir.jpg';
import fesDestImage from '@/assets/dest-fes.jpg';

const Destinations: React.FC = () => {
  const { t } = useLanguage();

  const destinations = [
    {
      name: t('marrakech'),
      slug: 'marrakech',
      image: marrakechDestImage,
      description: t('marrakechDesc'),
      highlights: [t('marrakechHighlight1'), t('marrakechHighlight2'), t('marrakechHighlight3')],
      venues: '50+',
      capacity: '2000'
    },
    {
      name: t('casablanca'),
      slug: 'casablanca',
      image: casablancaDestImage,
      description: t('casablancaDesc'),
      highlights: [t('casablancaHighlight1'), t('casablancaHighlight2'), t('casablancaHighlight3')],
      venues: '30+',
      capacity: '1500'
    },
    {
      name: t('agadir'),
      slug: 'agadir',
      image: agadirDestImage,
      description: t('agadirDesc'),
      highlights: [t('agadirHighlight1'), t('agadirHighlight2'), t('agadirHighlight3')],
      venues: '25+',
      capacity: '1000'
    },
    {
      name: t('fes'),
      slug: 'fes',
      image: fesDestImage,
      description: t('fesDesc'),
      highlights: [t('fesHighlight1'), t('fesHighlight2'), t('fesHighlight3')],
      venues: '20+',
      capacity: '800'
    },
    {
      name: t('sahara'),
      slug: 'sahara',
      image: desertImage,
      description: t('saharaDesc'),
      highlights: [t('saharaHighlight1'), t('saharaHighlight2'), t('saharaHighlight3')],
      venues: '15+',
      capacity: '500'
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
            {t('destinationsPageTitle')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {t('destinationsPageDesc')}
          </p>
        </div>
      </section>

      {/* Destinations Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              {t('compareDestinations')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('compareDestinationsDesc')}
            </p>
          </div>
          
          <ComparisonTable
            title={t('destinationComparisonTitle')}
            description={t('destinationComparisonDesc')}
            rows={[
              t('businessInfrastructure'),
              t('internationalAirport'),
              t('5starHotels'),
              t('conferenceFacilities'),
              t('teamBuildingOptions'),
              t('culturalExperiences'),
              t('averageBudget'),
              t('bestSeason')
            ]}
            columns={[
              {
                header: t('marrakech'),
                values: [
                  t('excellent'),
                  true,
                  '40+',
                  t('excellent'),
                  t('excellent'),
                  t('excellent'),
                  '€120-180',
                  t('yearRound')
                ]
              },
              {
                header: t('casablanca'),
                values: [
                  t('excellent'),
                  true,
                  '30+',
                  t('excellent'),
                  t('good'),
                  t('good'),
                  '€130-200',
                  t('yearRound')
                ],
                highlighted: true
              },
              {
                header: t('agadir'),
                values: [
                  t('good'),
                  true,
                  '20+',
                  t('good'),
                  t('excellent'),
                  t('moderate'),
                  '€100-150',
                  t('marchNovember')
                ]
              },
              {
                header: t('fes'),
                values: [
                  t('moderate'),
                  false,
                  '10+',
                  t('moderate'),
                  t('good'),
                  t('excellent'),
                  '€90-130',
                  t('springFall')
                ]
              },
              {
                header: t('sahara'),
                values: [
                  t('limited'),
                  false,
                  '5+',
                  t('unique'),
                  t('excellent'),
                  t('exceptional'),
                  '€150-250',
                  t('octoberApril')
                ]
              }
            ]}
          />
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {destinations.map((destination, index) => (
              <Card key={index} className="group overflow-hidden shadow-card hover:shadow-elegant transition-smooth border-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-white text-sm font-medium">4.8</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                        {destination.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {destination.venues} {t('venues')}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {t('upTo')} {destination.capacity} {t('guests')}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">{t('highlights')}:</h4>
                    <ul className="space-y-2">
                      {destination.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button asChild variant="default" className="flex-1">
                      <Link to={getLocalizedPath(`/destinations/${destination.slug}`)}>
                        {t('exploreDestination')}
                      </Link>
                    </Button>
                    <QuoteDialog>
                      <Button variant="outline" size="default">
                        {t('getQuote')}
                      </Button>
                    </QuoteDialog>
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
            {t('planYourEvent')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('planYourEventDesc')}
          </p>
          <QuoteDialog>
            <Button variant="cta" size="lg" className="text-lg px-12 py-6">
              {t('getProposal')}
            </Button>
          </QuoteDialog>
        </div>
      </section>
    </div>
  );
};

export default Destinations;