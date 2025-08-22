import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QuoteDialog } from '@/components/QuoteDialog';
import { ScheduleCallDialog } from '@/components/ScheduleCallDialog';
import { Waves, MapPin, Users, Calendar, Star, Plane, Palmtree, Phone, Mail, Clock, Wifi, Coffee, Utensils, Shield, Sun } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';
import heroImage from '@/assets/agadir-beach-teambuilding.jpg';
import conferenceImage from '@/assets/agadir-conference-room.jpg';
import dinnerImage from '@/assets/agadir-corporate-dinner.jpg';

const AgadirDestination: React.FC = () => {
  const { t, language } = useLanguage();

  const venues = [
    {
      name: "Sofitel Agadir Thalassa Sea & Spa",
      category: "Luxury Beach Resort",
      capacity: "800",
      rooms: "18",
      rating: "5.0",
      features: ["Ocean View", "Spa Facilities", "Golf Course", "Beach Access"]
    },
    {
      name: "Hyatt Place Taghazout Bay",
      category: "Modern Resort",
      capacity: "600",
      rooms: "12",
      rating: "4.9",
      features: ["Beachfront", "Water Sports", "Conference Center", "Restaurants"]
    },
    {
      name: "Royal Atlas Hotel & Spa",
      category: "Premium Resort",
      capacity: "500",
      rooms: "15",
      rating: "4.8",
      features: ["Traditional Design", "Multiple Pools", "Spa", "Gardens"]
    },
    {
      name: "Iberostar Founty Beach",
      category: "All-Inclusive Resort",
      capacity: "700",
      rooms: "10",
      rating: "4.7",
      features: ["All-Inclusive", "Beach Club", "Entertainment", "Kids Club"]
    }
  ];

  const activities = [
    {
      name: "Beach Team Building",
      duration: "Half/Full day",
      group: "20-100",
      description: "Sand activities, beach volleyball, water sports and coastal challenges"
    },
    {
      name: "Golf Tournament",
      duration: "Full day", 
      group: "16-80",
      description: "Professional golf courses with tournament organization and prizes"
    },
    {
      name: "Sunset Camel Ride",
      duration: "2-3 hours",
      group: "10-50",
      description: "Traditional camel experience along the beach with sunset views"
    },
    {
      name: "Argan Oil Cooperative Visit",
      duration: "3-4 hours",
      group: "15-60",
      description: "Cultural visit to women's cooperatives with authentic Moroccan experience"
    },
    {
      name: "Atlas Mountains Excursion",
      duration: "Full day",
      group: "20-80",
      description: "4x4 adventure to Berber villages with traditional lunch"
    },
    {
      name: "Souk El Had Shopping Tour",
      duration: "2-3 hours",
      group: "15-40",
      description: "Guided tour of Morocco's largest souk with cultural insights"
    }
  ];

  const packages = [
    {
      name: "Beach Retreat Package",
      duration: "3-4 days",
      participants: "30-100",
      price: "€520",
      includes: ["Beachfront Resort", "Team Building Activities", "Gala Beach Dinner", "Water Sports", "Airport Transfers"]
    },
    {
      name: "Golf & Business",
      duration: "2-3 days", 
      participants: "20-60",
      price: "€680",
      includes: ["Luxury Golf Resort", "Golf Tournament", "Business Meetings", "Premium Dining", "Spa Access"]
    },
    {
      name: "Wellness Seminar",
      duration: "4-5 days",
      participants: "25-80",
      price: "€450",
      includes: ["Spa Resort", "Wellness Activities", "Healthy Cuisine", "Beach Yoga", "Relaxation Programs"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'fr' ? 'Team Building & Séminaires Agadir - Plage & Golf MICE Maroc' : language === 'es' ? 'Team Building y Seminarios Agadir - Playa y Golf MICE Marruecos' : language === 'ar' ? 'بناء الفريق والندوات أكادير - الشاطئ والجولف السياحة التجارية المغرب' : 'Team Building & Seminars Agadir - Beach & Golf MICE Morocco'}</title>
        <meta name="description" content={language === 'fr' ? 'Organisez vos séminaires et team building à Agadir. Station balnéaire premium avec plages, golf, resorts de luxe et activités nautiques pour événements d\'entreprise.' : language === 'es' ? 'Organice sus seminarios y team building en Agadir. Estación balnearia premium con playas, golf, resorts de lujo y actividades náuticas para eventos corporativos.' : language === 'ar' ? 'نظم ندواتك وبناء الفريق في أكادير. منتجع ساحلي مميز مع الشواطئ والجولف والمنتجعات الفاخرة والأنشطة المائية للفعاليات الشركاتية.' : 'Organize your seminars and team building in Agadir. Premium beach resort with beaches, golf, luxury resorts and water activities for corporate events.'} />
        <meta name="keywords" content={language === 'fr' ? 'team building Agadir, séminaire Agadir, événement plage Maroc, golf Agadir, resort Agadir, MICE Agadir' : language === 'es' ? 'team building Agadir, seminario Agadir, evento playa Marruecos, golf Agadir, resort Agadir, MICE Agadir' : language === 'ar' ? 'بناء الفريق أكادير، ندوة أكادير، حدث الشاطئ المغرب، جولف أكادير، منتجع أكادير' : 'team building Agadir, seminar Agadir, beach event Morocco, golf Agadir, resort Agadir, MICE Agadir'} />
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
              {language === 'fr' ? 'Station Balnéaire Premium du Maroc' : language === 'es' ? 'Estación Balnearia Premium de Marruecos' : language === 'ar' ? 'المنتجع الساحلي المميز في المغرب' : 'Premium Beach Resort of Morocco'}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
              {language === 'fr' ? 'Team Building & Séminaires à Agadir' : language === 'es' ? 'Team Building y Seminarios en Agadir' : language === 'ar' ? 'بناء الفريق والندوات في أكادير' : 'Team Building & Seminars in Agadir'}
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {language === 'fr' ? 'Destination balnéaire idéale pour vos événements d\'entreprise avec plages de sable fin, golf de classe mondiale et resorts de luxe face à l\'océan.' : language === 'es' ? 'Destino costero ideal para sus eventos corporativos con playas de arena fina, golf de clase mundial y resorts de lujo frente al océano.' : language === 'ar' ? 'وجهة ساحلية مثالية لفعالياتك الشركاتية مع شواطئ رملية ناعمة وجولف عالمي المستوى ومنتجعات فاخرة أمام المحيط.' : 'Ideal coastal destination for your corporate events with fine sandy beaches, world-class golf and luxury oceanfront resorts.'}
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
                  {t('scheduleCall')}
                </Button>
              </ScheduleCallDialog>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Resorts & Hôtels' : language === 'es' ? 'Resorts y Hoteles' : language === 'ar' ? 'منتجعات وفنادق' : 'Resorts & Hotels'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">300+</div>
                <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Jours de Soleil/An' : language === 'es' ? 'Días de Sol/Año' : language === 'ar' ? 'يوم مشمس/سنة' : 'Sunny Days/Year'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10km</div>
                <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Plages de Sable' : language === 'es' ? 'Playas de Arena' : language === 'ar' ? 'شواطئ رملية' : 'Sandy Beaches'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Parcours de Golf' : language === 'es' ? 'Campos de Golf' : language === 'ar' ? 'ملاعب جولف' : 'Golf Courses'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Agadir */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  {language === 'fr' ? 'Pourquoi Choisir Agadir ?' : language === 'es' ? '¿Por Qué Elegir Agadir?' : language === 'ar' ? 'لماذا اختيار أكادير؟' : 'Why Choose Agadir?'}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Sun className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {language === 'fr' ? 'Climat Parfait Toute l\'Année' : language === 'es' ? 'Clima Perfecto Todo el Año' : language === 'ar' ? 'مناخ مثالي طوال السنة' : 'Perfect Climate Year-Round'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? '300 jours de soleil par an avec températures douces, idéal pour événements outdoor.' : language === 'es' ? '300 días de sol al año con temperaturas suaves, ideal para eventos al aire libre.' : language === 'ar' ? '300 يوم مشمس في السنة مع درجات حرارة معتدلة، مثالي للفعاليات الخارجية.' : '300 sunny days per year with mild temperatures, ideal for outdoor events.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Waves className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {language === 'fr' ? 'Plages & Activités Nautiques' : language === 'es' ? 'Playas y Actividades Náuticas' : language === 'ar' ? 'الشواطئ والأنشطة المائية' : 'Beaches & Water Activities'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? '10km de plages de sable fin avec sports nautiques, perfect pour team building original.' : language === 'es' ? '10km de playas de arena fina con deportes náuticos, perfecto para team building original.' : language === 'ar' ? '10 كم من الشواطئ الرملية الناعمة مع الرياضات المائية، مثالي لبناء الفريق الأصلي.' : '10km of fine sandy beaches with water sports, perfect for original team building.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Palmtree className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {language === 'fr' ? 'Resorts de Luxe All-Inclusive' : language === 'es' ? 'Resorts de Lujo Todo Incluido' : language === 'ar' ? 'منتجعات فاخرة شاملة كليًا' : 'Luxury All-Inclusive Resorts'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? 'Complexes hôteliers 5 étoiles avec tout inclus, spas, golf et centres de congrès.' : language === 'es' ? 'Complejos hoteleros 5 estrellas con todo incluido, spas, golf y centros de congresos.' : language === 'ar' ? 'مجمعات فندقية 5 نجوم مع شامل كليًا، منتجعات صحية، جولف ومراكز مؤتمرات.' : '5-star hotel complexes with all-inclusive, spas, golf and conference centers.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={conferenceImage} 
                  alt="Agadir beach conference room"
                  className="w-full h-96 object-cover rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Top Venues */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                {language === 'fr' ? 'Resorts & Hôtels Premium' : language === 'es' ? 'Resorts y Hoteles Premium' : language === 'ar' ? 'المنتجعات والفنادق المميزة' : 'Premium Resorts & Hotels'}
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
                        <MapPin className="w-4 h-4 mr-2" />
                        {venue.rooms} {language === 'fr' ? 'espaces' : language === 'es' ? 'espacios' : language === 'ar' ? 'مساحات' : 'spaces'}
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

        {/* Activities & Experiences */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                {language === 'fr' ? 'Activités Team Building' : language === 'es' ? 'Actividades Team Building' : language === 'ar' ? 'أنشطة بناء الفريق' : 'Team Building Activities'}
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
                {language === 'fr' ? 'Forfaits Séjours' : language === 'es' ? 'Paquetes de Estancia' : language === 'ar' ? 'باقات الإقامة' : 'Stay Packages'}
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
              {language === 'fr' ? 'Organisez Votre Séminaire à Agadir' : language === 'es' ? 'Organice Su Seminario en Agadir' : language === 'ar' ? 'نظم ندوتك في أكادير' : 'Organize Your Seminar in Agadir'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'fr' ? 'Combinez travail et détente dans la destination balnéaire la plus prisée du Maroc.' : language === 'es' ? 'Combine trabajo y relajación en el destino costero más valorado de Marruecos.' : language === 'ar' ? 'اجمع بين العمل والاسترخاء في الوجهة الساحلية الأكثر تقديرًا في المغرب.' : 'Combine work and relaxation in Morocco\'s most valued coastal destination.'}
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

export default AgadirDestination;