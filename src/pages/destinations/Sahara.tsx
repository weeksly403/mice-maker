import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QuoteDialog } from '@/components/QuoteDialog';
import { ScheduleCallDialog } from '@/components/ScheduleCallDialog';
import { Mountain, MapPin, Users, Calendar, Star, Plane, Sunset, Phone, Mail, Clock, Wifi, Coffee, Utensils, Shield, Tent } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';
import { SEOEnhancer } from '@/components/SEO/SEOEnhancer';
import { QuickFacts } from '@/components/SEO/QuickFacts';
import { BestForBlock } from '@/components/SEO/BestForBlock';
import heroImage from '@/assets/desert-team-building.jpg';
import saharaImage from '@/assets/blog-sahara-retreat.jpg';

const SaharaDestination: React.FC = () => {
  const { t, language } = useLanguage();

  const venues = [
    {
      name: "Erg Chebbi Luxury Desert Camp",
      category: "Premium Desert Camp",
      capacity: "200",
      rooms: "50 Tents",
      rating: "5.0",
      features: ["Private Tents", "Berber Hospitality", "Desert Activities", "Stargazing"]
    },
    {
      name: "Merzouga Desert Retreat",
      category: "Eco-Luxury Camp",
      capacity: "150",
      rooms: "40 Tents",
      rating: "4.9",
      features: ["Sustainable Design", "Camel Trekking", "Traditional Music", "Wellness Spa"]
    },
    {
      name: "Sahara Dunes Executive Camp",
      category: "Business Desert Camp",
      capacity: "100",
      rooms: "25 Tents",
      rating: "4.8",
      features: ["Meeting Facilities", "Corporate Dining", "Team Challenges", "Desert Excursions"]
    },
    {
      name: "Nomad Luxury Experience",
      category: "Ultra-Premium Camp",
      capacity: "80",
      rooms: "20 Suites",
      rating: "5.0",
      features: ["Luxury Suites", "Private Guides", "VIP Service", "Helicopter Access"]
    }
  ];

  const activities = [
    {
      name: "Desert Team Building Challenges",
      duration: "Full day",
      group: "15-100",
      description: "Collaborative sand challenges, navigation games and survival team activities"
    },
    {
      name: "Camel Caravan Experience",
      duration: "Half/Full day", 
      group: "10-80",
      description: "Traditional camel trekking with Berber guides through golden dunes"
    },
    {
      name: "4x4 Desert Expedition",
      duration: "Half day",
      group: "20-150",
      description: "Adrenaline-packed dune bashing and desert exploration convoy"
    },
    {
      name: "Berber Cultural Immersion",
      duration: "Evening",
      group: "15-200",
      description: "Traditional music, storytelling and authentic nomadic lifestyle experience"
    },
    {
      name: "Sunrise/Sunset Photography",
      duration: "2-3 hours",
      group: "5-50",
      description: "Professional guided photography sessions during magical desert light"
    },
    {
      name: "Desert Leadership Retreat",
      duration: "Multi-day",
      group: "10-40",
      description: "Executive coaching and leadership development in unique desert setting"
    }
  ];

  const packages = [
    {
      name: "Desert Adventure Incentive",
      duration: "2-3 days",
      participants: "30-150",
      price: "€580",
      includes: ["Luxury Desert Camp", "All Desert Activities", "Berber Entertainment", "Traditional Meals", "Desert Transfers"]
    },
    {
      name: "Executive Desert Retreat",
      duration: "3-4 days", 
      participants: "15-60",
      price: "€750",
      includes: ["Premium Tented Suites", "Leadership Programs", "VIP Desert Experiences", "Gourmet Dining", "Private Guides"]
    },
    {
      name: "Team Building Expedition",
      duration: "2-4 days",
      participants: "25-100",
      price: "€520",
      includes: ["Group Desert Camp", "Team Challenges", "Cultural Activities", "Group Meals", "Desert Adventures"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'fr' ? 'Incentives & Retraites Sahara - Expériences Désert MICE Maroc' : language === 'es' ? 'Incentivos y Retiros Sahara - Experiencias Desierto MICE Marruecos' : language === 'ar' ? 'الحوافز والخلوات الصحراء - تجارب الصحراء السياحة التجارية المغرب' : 'Sahara Incentives & Retreats - Desert Experiences MICE Morocco'}</title>
        <meta name="description" content={language === 'fr' ? 'Organisez vos incentives et retraites dans le Sahara marocain. Camps de luxe, activités team building désert, expériences berbers authentiques et couchers de soleil spectaculaires.' : language === 'es' ? 'Organice sus incentivos y retiros en el Sahara marroquí. Campamentos de lujo, actividades team building desierto, experiencias bereber auténticas y puestas de sol espectaculares.' : language === 'ar' ? 'نظم حوافزك وخلواتك في الصحراء المغربية. مخيمات فاخرة وأنشطة بناء الفريق في الصحراء وتجارب بربرية أصيلة وغروب شمس مذهل.' : 'Organize your incentives and retreats in the Moroccan Sahara. Luxury camps, desert team building activities, authentic Berber experiences and spectacular sunsets.'} />
        <meta name="keywords" content={language === 'fr' ? 'incentive Sahara, retraite désert Maroc, team building Sahara, camp désert luxe, expérience Berber, MICE Sahara' : language === 'es' ? 'incentivo Sahara, retiro desierto Marruecos, team building Sahara, campamento desierto lujo, experiencia bereber, MICE Sahara' : language === 'ar' ? 'حافز الصحراء، خلوة الصحراء المغرب، بناء الفريق الصحراء، مخيم صحراء فاخر، تجربة بربرية' : 'Sahara incentive, desert retreat Morocco, Sahara team building, luxury desert camp, Berber experience, MICE Sahara'} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 gradient-hero opacity-70"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              {language === 'fr' ? 'Plus Grand Désert du Monde' : language === 'es' ? 'Desierto Más Grande del Mundo' : language === 'ar' ? 'أكبر صحراء في العالم' : 'World\'s Largest Desert'}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
              {language === 'fr' ? 'Incentives & Retraites au Sahara' : language === 'es' ? 'Incentivos y Retiros en el Sahara' : language === 'ar' ? 'الحوافز والخلوات في الصحراء' : 'Sahara Incentives & Retreats'}
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {language === 'fr' ? 'Expérience inoubliable dans les dunes dorées du Sahara avec camps de luxe, aventures berbers et couchers de soleil à couper le souffle pour vos événements exceptionnels.' : language === 'es' ? 'Experiencia inolvidable en las dunas doradas del Sahara con campamentos de lujo, aventuras bereber y puestas de sol impresionantes para sus eventos excepcionales.' : language === 'ar' ? 'تجربة لا تُنسى في الكثبان الذهبية للصحراء مع مخيمات فاخرة ومغامرات بربرية وغروب شمس خلاب لفعالياتك الاستثنائية.' : 'Unforgettable experience in the golden dunes of the Sahara with luxury camps, Berber adventures and breathtaking sunsets for your exceptional events.'}
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

        {/* Quick Facts */}
        <QuickFacts
          facts={[
            { icon: Mountain, label: 'Desert Area', value: '9M km²' },
            { icon: Mountain, label: 'Dunes Height', value: 'Up to 150m' },
            { icon: Sunset, label: 'Year-Round', value: '365 Days Adventure' },
            { icon: Star, label: 'Stargazing', value: 'Infinite Stars' }
          ]}
        />
        
        {/* Best For Block */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BestForBlock
            title={language === 'fr' ? 'Sahara est Parfait Pour' : language === 'es' ? 'Sahara es Perfecto Para' : language === 'ar' ? 'الصحراء مثالية لـ' : 'Sahara is Perfect For'}
            variant="compact"
            items={[
              language === 'fr' ? 'Incentive aventure exceptionnel (10-50 personnes)' : language === 'es' ? 'Incentivo aventura excepcional (10-50 personas)' : language === 'ar' ? 'حافز مغامرة استثنائي (10-50 شخصًا)' : 'Exceptional adventure incentive (10-50 people)',
              language === 'fr' ? 'Team building extrême et défis désert' : language === 'es' ? 'Team building extremo y desafíos en el desierto' : language === 'ar' ? 'بناء الفريق المتطرف وتحديات الصحراء' : 'Extreme team building and desert challenges',
              language === 'fr' ? 'Retraites leadership dans environnement unique' : language === 'es' ? 'Retiros de liderazgo en entorno único' : language === 'ar' ? 'خلوات القيادة في بيئة فريدة' : 'Leadership retreats in unique environment',
              language === 'fr' ? 'Expériences VIP avec camps de luxe' : language === 'es' ? 'Experiencias VIP con campamentos de lujo' : language === 'ar' ? 'تجارب VIP مع مخيمات فاخرة' : 'VIP experiences with luxury camps',
              language === 'fr' ? 'Événements exclusifs sous les étoiles' : language === 'es' ? 'Eventos exclusivos bajo las estrellas' : language === 'ar' ? 'فعاليات حصرية تحت النجوم' : 'Exclusive events under the stars'
            ]}
          />
        </div>

        {/* Why Choose Sahara */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  {language === 'fr' ? 'Pourquoi Choisir le Sahara ?' : language === 'es' ? '¿Por Qué Elegir el Sahara?' : language === 'ar' ? 'لماذا اختيار الصحراء؟' : 'Why Choose the Sahara?'}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mountain className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {language === 'fr' ? 'Paysages Spectaculaires Uniques' : language === 'es' ? 'Paisajes Espectaculares Únicos' : language === 'ar' ? 'مناظر طبيعية مذهلة فريدة' : 'Unique Spectacular Landscapes'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? 'Dunes de sable doré s\'étendant à l\'infini, créant un cadre extraordinaire pour vos événements.' : language === 'es' ? 'Dunas de arena dorada que se extienden hasta el infinito, creando un marco extraordinario para sus eventos.' : language === 'ar' ? 'كثبان رملية ذهبية تمتد إلى ما لا نهاية، مما يخلق إطارًا استثنائيًا لفعالياتك.' : 'Golden sand dunes stretching to infinity, creating an extraordinary setting for your events.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Tent className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {language === 'fr' ? 'Camps de Luxe Authentiques' : language === 'es' ? 'Campamentos de Lujo Auténticos' : language === 'ar' ? 'مخيمات فاخرة أصيلة' : 'Authentic Luxury Camps'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? 'Tentes berbères traditionnelles équipées de tout le confort moderne et services 5 étoiles.' : language === 'es' ? 'Tiendas bereber tradicionales equipadas con todas las comodidades modernas y servicios 5 estrellas.' : language === 'ar' ? 'خيام بربرية تقليدية مجهزة بجميع وسائل الراحة الحديثة وخدمات 5 نجوم.' : 'Traditional Berber tents equipped with all modern comforts and 5-star services.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Sunset className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {language === 'fr' ? 'Expériences Transformatrices' : language === 'es' ? 'Experiencias Transformadoras' : language === 'ar' ? 'تجارب تحويلية' : 'Transformative Experiences'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? 'Silence du désert, immensité et connexion avec la nature pour des moments de réflexion profonde.' : language === 'es' ? 'Silencio del desierto, inmensidad y conexión con la naturaleza para momentos de reflexión profunda.' : language === 'ar' ? 'صمت الصحراء والاتساع والاتصال بالطبيعة لحظات تأمل عميق.' : 'Desert silence, immensity and connection with nature for moments of deep reflection.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={saharaImage} 
                  alt="Sahara desert luxury camp"
                  className="w-full h-96 object-cover rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Desert Camps */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                {language === 'fr' ? 'Camps du Désert Premium' : language === 'es' ? 'Campamentos del Desierto Premium' : language === 'ar' ? 'مخيمات الصحراء المميزة' : 'Premium Desert Camps'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {venues.map((venue, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-0 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{venue.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{venue.category}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{venue.rating}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {language === 'fr' ? 'Jusqu\'à' : language === 'es' ? 'Hasta' : language === 'ar' ? 'حتى' : 'Up to'} {venue.capacity}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Tent className="w-4 h-4 mr-2" />
                        {venue.rooms}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {venue.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
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

        {/* Desert Activities */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                {language === 'fr' ? 'Aventures & Activités Désert' : language === 'es' ? 'Aventuras y Actividades Desierto' : language === 'ar' ? 'المغامرات والأنشطة الصحراوية' : 'Desert Adventures & Activities'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{activity.name}</h3>
                    <p className="text-muted-foreground mb-4">{activity.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {activity.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {activity.group} {language === 'fr' ? 'pax' : language === 'es' ? 'pax' : language === 'ar' ? 'شخص' : 'pax'}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Package Options */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                {language === 'fr' ? 'Expéditions Désert' : language === 'es' ? 'Expediciones Desierto' : language === 'ar' ? 'بعثات الصحراء' : 'Desert Expeditions'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-0 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{pkg.name}</h3>
                    
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground">
                        {language === 'fr' ? 'par personne' : language === 'es' ? 'por persona' : language === 'ar' ? 'للشخص الواحد' : 'per person'}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {pkg.participants} {language === 'fr' ? 'participants' : language === 'es' ? 'participantes' : language === 'ar' ? 'مشارك' : 'participants'}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-8">
                      {pkg.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                    
                    <QuoteDialog>
                      <Button variant="default" className="w-full">
                        {language === 'fr' ? 'Demander un Devis' : language === 'es' ? 'Solicitar Cotización' : language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                      </Button>
                    </QuoteDialog>
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
              {language === 'fr' ? 'Vivez l\'Aventure Sahara' : language === 'es' ? 'Viva la Aventura del Sahara' : language === 'ar' ? 'عش مغامرة الصحراء' : 'Live the Sahara Adventure'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'fr' ? 'Créez des souvenirs inoubliables dans l\'immensité dorée du plus grand désert du monde.' : language === 'es' ? 'Cree recuerdos inolvidables en la inmensidad dorada del desierto más grande del mundo.' : language === 'ar' ? 'اخلق ذكريات لا تُنسى في الاتساع الذهبي لأكبر صحراء في العالم.' : 'Create unforgettable memories in the golden immensity of the world\'s largest desert.'}
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

export default SaharaDestination;