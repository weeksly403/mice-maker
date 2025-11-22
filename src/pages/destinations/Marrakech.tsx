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
import { SEOEnhancer } from '@/components/SEO/SEOEnhancer';
import { QuickFacts, createPricingFact, createDurationFact, createGroupSizeFact, createBestMonthsFact, createVenuesFact, createROIFact } from '@/components/SEO/QuickFacts';
import { BestForBlock } from '@/components/SEO/BestForBlock';
import marrakechConference from '@/assets/marrakech-conference.jpg';
import heroMoroccoMice from '@/assets/hero-morocco-mice.jpg';

const MarrakechDestination: React.FC = () => {
  const { t, language } = useLanguage();

  const venues = [
    {
      name: t('marrakechVenue1Name'),
      category: t('marrakechVenue1Category'),
      capacity: '800',
      features: t('marrakechVenue1Features'),
      rating: 5
    },
    {
      name: t('marrakechVenue2Name'),
      category: t('marrakechVenue2Category'), 
      capacity: '600',
      features: t('marrakechVenue2Features'),
      rating: 5
    },
    {
      name: t('marrakechVenue3Name'),
      category: t('marrakechVenue3Category'),
      capacity: '400',
      features: t('marrakechVenue3Features'),
      rating: 5
    },
    {
      name: t('marrakechVenue4Name'),
      category: t('marrakechVenue4Category'),
      capacity: '2000',
      features: t('marrakechVenue4Features'),
      rating: 4
    }
  ];

  const experiences = [
    {
      title: t('marrakechExp1Title'),
      description: t('marrakechExp1Desc'),
      icon: Camera,
      duration: t('marrakechExp1Duration')
    },
    {
      title: t('marrakechExp2Title'),
      description: t('marrakechExp2Desc'),
      icon: Utensils,
      duration: t('marrakechExp2Duration')
    },
    {
      title: t('marrakechExp3Title'),
      description: t('marrakechExp3Desc'),
      icon: Star,
      duration: t('marrakechExp3Duration')
    },
    {
      title: t('marrakechExp4Title'),
      description: t('marrakechExp4Desc'),
      icon: Briefcase,
      duration: t('marrakechExp4Duration')
    }
  ];

  return (
    <>
      <SEOEnhancer
        title={t('marrakechPageTitle')}
        description={t('marrakechPageDesc')}
        keywords={t('marrakechPageKeywords')}
        type="website"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={marrakechConference}
              alt={language === 'fr' ? 'Lieu de conférence Marrakech avec vue sur l\'Atlas' : 
                   language === 'es' ? 'Lugar de conferencias en Marrakech con vista del Atlas' :
                   language === 'ar' ? 'مكان المؤتمرات في مراكش مع إطلالة على الأطلس' :
                   'Marrakech conference venue with Atlas Mountains backdrop'}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              {t('marrakechHeroBadge')}
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              {t('marrakechHeroTitle')}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('marrakechHeroSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <QuoteDialog>
                <Button variant="cta" size="lg">
                  {t('marrakechGetProposal')}
                </Button>
              </QuoteDialog>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                {t('marrakechViewVenues')}
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
                  {t('marrakechWhyChooseTitle')}
                </h2>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="leading-relaxed">
                    {t('marrakechWhyChooseDesc')}
                  </p>
                  
                  <p className="leading-relaxed">
                    {language === 'fr' ? 'Notre DMC Maroc assure une logistique parfaite avec vols directs depuis les grandes villes européennes (3h depuis Paris, Londres, Madrid). En tant que DMC certifié, nous garantissons une accessibilité parfaite pour les groupes d\'entreprise internationaux.' :
                     language === 'es' ? 'Nuestro DMC Marruecos asegura logística perfecta con vuelos directos desde las principales ciudades europeas (3h desde París, Londres, Madrid). Como DMC certificado, garantizamos accesibilidad perfecta para grupos corporativos internacionales.' :
                     language === 'ar' ? 'شركة DMC المغرب تضمن لوجستيات مثالية مع رحلات مباشرة من المدن الأوروبية الرئيسية (3 ساعات من باريس ولندن ومدريد). كشركة DMC معتمدة، نضمن إمكانية وصول مثالية للمجموعات الشركاتية الدولية.' :
                     'Our Morocco DMC provides seamless logistics with direct flights from major European cities (3 hours from Paris, London, Madrid). As a certified DMC, we ensure perfect accessibility for international corporate groups with year-round favorable climate for outdoor team building Morocco and incentive programs.'}
                  </p>
                  
                  <p className="leading-relaxed">
                    {language === 'fr' ? 'Des retraites d\'entreprise dans l\'Atlas aux dîners exclusifs dans des riads, notre expertise DMC Marrakech offre des expériences inoubliables qui renforcent le moral des équipes et créent des relations d\'affaires durables grâce aux services authentiques du DMC Maroc.' :
                     language === 'es' ? 'Desde retiros corporativos en el Atlas hasta cenas exclusivas en riads, nuestra experiencia DMC Marrakech ofrece experiencias inolvidables que mejoran la moral del equipo y crean relaciones comerciales duraderas a través de servicios auténticos de DMC Marruecos.' :
                     language === 'ar' ? 'من خلوات الشركات في الأطلس إلى العشاء الحصري في الرياضات، تقدم خبرتنا DMC مراكش تجارب لا تُنسى تعزز معنويات الفريق وتخلق علاقات تجارية دائمة من خلال خدمات DMC المغرب الأصيلة.' :
                     'From Atlas Mountain corporate retreats to exclusive riad dinners, our DMC Marrakech expertise delivers unforgettable experiences that boost team morale and create lasting business relationships through authentic Morocco DMC services.'}
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, label: t('marrakechAdvantage1'), value: '50+' },
                    { icon: Calendar, label: t('marrakechAdvantage2'), value: '300+' },
                    { icon: Car, label: t('marrakechAdvantage3'), value: '3h' },
                    { icon: Star, label: t('marrakechAdvantage4'), value: '5★' }
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
                  alt={language === 'fr' ? 'Lieu d\'événement d\'entreprise Marrakech avec architecture marocaine traditionnelle' :
                       language === 'es' ? 'Lugar de evento corporativo en Marrakech con arquitectura marroquí tradicional' :
                       language === 'ar' ? 'مكان فعالية شركاتية في مراكش مع العمارة المغربية التقليدية' :
                       'Marrakech corporate event venue with traditional Moroccan architecture'}
                  className="w-full h-auto rounded-lg shadow-elegant"
                />
              </div>
            </div>
            
            {/* Best For Block */}
            <BestForBlock
              title={language === 'fr' ? 'Marrakech est Parfait Pour' : language === 'es' ? 'Marrakech es Perfecto Para' : language === 'ar' ? 'مراكش مثالية لـ' : 'Marrakech is Perfect For'}
              variant="compact"
              items={[
                language === 'fr' ? 'Voyages incentive luxe (20-80 personnes)' : language === 'es' ? 'Viajes incentivo de lujo (20-80 personas)' : language === 'ar' ? 'رحلات تحفيزية فاخرة (20-80 شخصًا)' : 'Luxury incentive trips (20-80 people)',
                language === 'fr' ? 'Retraites d\'entreprise dans les riads' : language === 'es' ? 'Retiros corporativos en riads' : language === 'ar' ? 'خلوات شركاتية في الرياضات' : 'Corporate retreats in riads',
                language === 'fr' ? 'Dîners de gala dans les palais' : language === 'es' ? 'Cenas de gala en palacios' : language === 'ar' ? 'عشاء احتفالي في القصور' : 'Gala dinners in palaces',
                language === 'fr' ? 'Team building Atlas Mountains' : language === 'es' ? 'Team building Montañas Atlas' : language === 'ar' ? 'بناء الفريق في جبال الأطلس' : 'Team building in Atlas Mountains',
                language === 'fr' ? 'Expériences culturelles immersives' : language === 'es' ? 'Experiencias culturales inmersivas' : language === 'ar' ? 'تجارب ثقافية غامرة' : 'Immersive cultural experiences'
              ]}
            />
          </div>
        </section>

        {/* Venues Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                {t('marrakechVenuesTitle')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('marrakechVenuesDesc')}
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
                      <span>{t('upTo')} {venue.capacity} {t('guests')}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(venue.features) ? venue.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      )) : null}
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
                {t('marrakechExperiencesTitle')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('marrakechExperiencesDesc')}
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
              {t('marrakechCtaTitle')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('marrakechCtaDesc')}
            </p>
            
            <QuoteDialog>
              <Button variant="cta" size="lg" className="px-12">
                {t('marrakechCtaButton')}
              </Button>
            </QuoteDialog>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarrakechDestination;