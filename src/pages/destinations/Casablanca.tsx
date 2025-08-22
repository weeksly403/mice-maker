import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QuoteDialog } from '@/components/QuoteDialog';
import { ScheduleCallDialog } from '@/components/ScheduleCallDialog';
import { Building, MapPin, Users, Calendar, Star, Plane, Car, Phone, Mail, Clock, Wifi, Coffee, Car as ParkingIcon, Utensils, Shield } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';
import heroImage from '@/assets/hero-morocco-mice.jpg';
import conferenceImage from '@/assets/marrakech-conference.jpg';

const CasablancaDestination: React.FC = () => {
  const { t, language } = useLanguage();

  const venues = [
    {
      name: "Four Seasons Hotel Casablanca",
      category: "Luxury Hotel",
      capacity: "500",
      rooms: "28",
      rating: "5.0",
      features: ["Ocean View", "Modern AV", "Gala Venue", "Business Center"]
    },
    {
      name: "Hyatt Regency Casablanca",
      category: "Business Hotel",
      capacity: "800",
      rooms: "15",
      rating: "4.8",
      features: ["Convention Center", "Multiple Rooms", "Parking", "Restaurants"]
    },
    {
      name: "The Westin Casablanca",
      category: "Conference Hotel",
      capacity: "600",
      rooms: "12",
      rating: "4.9",
      features: ["Executive Floors", "Spa", "Fine Dining", "Airport Transfer"]
    },
    {
      name: "Sofitel Casablanca Tour Blanche",
      category: "Premium Venue",
      capacity: "400",
      rooms: "8",
      rating: "4.7",
      features: ["City Center", "Rooftop Terrace", "French Cuisine", "Concierge"]
    }
  ];

  const activities = [
    {
      name: "Hassan II Mosque Tour",
      duration: "2-3 hours",
      group: "10-50",
      description: "Guided tour of the world's 3rd largest mosque with stunning architecture"
    },
    {
      name: "Old Medina Walking Tour",
      duration: "3-4 hours", 
      group: "15-40",
      description: "Explore traditional souks and authentic Moroccan culture"
    },
    {
      name: "Casablanca City Business Tour",
      duration: "4-5 hours",
      group: "20-100",
      description: "Modern financial district, Marina, and economic landmarks"
    },
    {
      name: "Ain Diab Corniche Dinner",
      duration: "3-4 hours",
      group: "30-200",
      description: "Seaside dining experience with ocean views and fresh seafood"
    }
  ];

  const packages = [
    {
      name: "Business Summit Package",
      duration: "2-3 days",
      participants: "50-200",
      price: "€450",
      includes: ["5* Hotel", "Conference Facilities", "Business Meals", "Airport Transfers", "Local Support"]
    },
    {
      name: "Executive Retreat",
      duration: "3-4 days", 
      participants: "20-80",
      price: "€650",
      includes: ["Luxury Accommodation", "Private Meeting Rooms", "Gala Dinner", "Cultural Activities", "Premium Service"]
    },
    {
      name: "International Conference",
      duration: "4-5 days",
      participants: "100-500",
      price: "€380",
      includes: ["Convention Center", "Exhibition Space", "Catering", "Translation Services", "Technical Support"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'fr' ? 'Conférences & Séminaires à Casablanca - MICE Maroc' : language === 'es' ? 'Conferencias y Seminarios en Casablanca - MICE Marruecos' : language === 'ar' ? 'المؤتمرات والندوات في الدار البيضاء - السياحة التجارية المغرب' : 'Conferences & Seminars in Casablanca - Morocco MICE'}</title>
        <meta name="description" content={language === 'fr' ? 'Organisez vos conférences d\'entreprise à Casablanca. Capital économique du Maroc avec infrastructures modernes, hôtels 5 étoiles et centres de congrès professionnels.' : language === 'es' ? 'Organice sus conferencias corporativas en Casablanca. Capital económica de Marruecos con infraestructuras modernas, hoteles 5 estrellas y centros de congresos profesionales.' : language === 'ar' ? 'نظم مؤتمراتك الشركاتية في الدار البيضاء. العاصمة الاقتصادية للمغرب مع البنية التحتية الحديثة وفنادق 5 نجوم ومراكز المؤتمرات المهنية.' : 'Organize your corporate conferences in Casablanca. Economic capital of Morocco with modern infrastructure, 5-star hotels and professional conference centers.'} />
        <meta name="keywords" content={language === 'fr' ? 'conférence Casablanca, séminaire Casablanca, événement entreprise Casablanca, MICE Casablanca, centre congrès Casablanca' : language === 'es' ? 'conferencia Casablanca, seminario Casablanca, evento empresa Casablanca, MICE Casablanca, centro congresos Casablanca' : language === 'ar' ? 'مؤتمر الدار البيضاء، ندوة الدار البيضاء، حدث شركة الدار البيضاء، السياحة التجارية الدار البيضاء' : 'conference Casablanca, seminar Casablanca, corporate event Casablanca, MICE Casablanca, congress center Casablanca'} />
      </Helmet>

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
              {language === 'fr' ? 'Capital Économique du Maroc' : language === 'es' ? 'Capital Económica de Marruecos' : language === 'ar' ? 'العاصمة الاقتصادية للمغرب' : 'Economic Capital of Morocco'}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
              {language === 'fr' ? 'Conférences & Séminaires à Casablanca' : language === 'es' ? 'Conferencias y Seminarios en Casablanca' : language === 'ar' ? 'المؤتمرات والندوات في الدار البيضاء' : 'Conferences & Seminars in Casablanca'}
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {language === 'fr' ? 'Centre d\'affaires moderne du Maroc avec infrastructures de pointe, hôtels internationaux et connectivité mondiale pour vos événements professionnels.' : language === 'es' ? 'Centro de negocios moderno de Marruecos con infraestructuras de vanguardia, hoteles internacionales y conectividad global para sus eventos profesionales.' : language === 'ar' ? 'مركز الأعمال الحديث في المغرب مع البنية التحتية المتطورة والفنادق الدولية والاتصال العالمي لفعالياتك المهنية.' : 'Modern business hub of Morocco with cutting-edge infrastructure, international hotels and global connectivity for your professional events.'}
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
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Lieux de Conférence' : language === 'es' ? 'Lugares de Conferencia' : language === 'ar' ? 'أماكن المؤتمرات' : 'Conference Venues'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3000</div>
                <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Capacité Max' : language === 'es' ? 'Capacidad Máx' : language === 'ar' ? 'السعة القصوى' : 'Max Capacity'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1h</div>
                <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Aéroport Mohammed V' : language === 'es' ? 'Aeropuerto Mohammed V' : language === 'ar' ? 'مطار محمد الخامس' : 'Mohammed V Airport'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Hôtels de Luxe' : language === 'es' ? 'Hoteles de Lujo' : language === 'ar' ? 'فنادق فاخرة' : 'Luxury Hotels'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Casablanca */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  {language === 'fr' ? 'Pourquoi Choisir Casablanca ?' : language === 'es' ? '¿Por Qué Elegir Casablanca?' : language === 'ar' ? 'لماذا اختيار الدار البيضاء؟' : 'Why Choose Casablanca?'}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Building className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {language === 'fr' ? 'Centre Économique du Maroc' : language === 'es' ? 'Centro Económico de Marruecos' : language === 'ar' ? 'المركز الاقتصادي للمغرب' : 'Economic Center of Morocco'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? 'Plus grande ville du Maroc avec 70% du secteur industriel et financier du pays.' : language === 'es' ? 'Ciudad más grande de Marruecos con el 70% del sector industrial y financiero del país.' : language === 'ar' ? 'أكبر مدينة في المغرب مع 70% من القطاع الصناعي والمالي في البلاد.' : 'Largest city in Morocco with 70% of the country\'s industrial and financial sector.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Plane className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {language === 'fr' ? 'Connectivité Internationale' : language === 'es' ? 'Conectividad Internacional' : language === 'ar' ? 'الاتصال الدولي' : 'International Connectivity'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? 'Aéroport Mohammed V avec vols directs vers l\'Europe, l\'Afrique et le Moyen-Orient.' : language === 'es' ? 'Aeropuerto Mohammed V con vuelos directos a Europa, África y Medio Oriente.' : language === 'ar' ? 'مطار محمد الخامس مع رحلات مباشرة إلى أوروبا وأفريقيا والشرق الأوسط.' : 'Mohammed V Airport with direct flights to Europe, Africa and Middle East.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Wifi className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {language === 'fr' ? 'Infrastructure Moderne' : language === 'es' ? 'Infraestructura Moderna' : language === 'ar' ? 'البنية التحتية الحديثة' : 'Modern Infrastructure'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? 'Centres de congrès équipés, technologies de pointe et services business de qualité.' : language === 'es' ? 'Centros de congresos equipados, tecnologías de vanguardia y servicios de negocio de calidad.' : language === 'ar' ? 'مراكز مؤتمرات مجهزة وتقنيات متطورة وخدمات أعمال عالية الجودة.' : 'Equipped conference centers, cutting-edge technologies and quality business services.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={conferenceImage} 
                  alt="Casablanca business district"
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
                {language === 'fr' ? 'Lieux de Conférence Premium' : language === 'es' ? 'Lugares de Conferencia Premium' : language === 'ar' ? 'أماكن المؤتمرات المميزة' : 'Premium Conference Venues'}
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
                        <Building className="w-4 h-4 mr-2" />
                        {venue.rooms} {language === 'fr' ? 'salles' : language === 'es' ? 'salas' : language === 'ar' ? 'قاعات' : 'rooms'}
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
                {language === 'fr' ? 'Activités & Expériences' : language === 'es' ? 'Actividades y Experiencias' : language === 'ar' ? 'الأنشطة والتجارب' : 'Activities & Experiences'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                {language === 'fr' ? 'Forfaits Événements' : language === 'es' ? 'Paquetes de Eventos' : language === 'ar' ? 'باقات الفعاليات' : 'Event Packages'}
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
              {language === 'fr' ? 'Planifiez Votre Événement à Casablanca' : language === 'es' ? 'Planifique Su Evento en Casablanca' : language === 'ar' ? 'خطط لفعاليتك في الدار البيضاء' : 'Plan Your Event in Casablanca'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'fr' ? 'Découvrez pourquoi Casablanca est le choix privilégié pour les événements d\'entreprise au Maroc.' : language === 'es' ? 'Descubra por qué Casablanca es la opción preferida para eventos corporativos en Marruecos.' : language === 'ar' ? 'اكتشف لماذا الدار البيضاء هي الخيار المفضل للفعاليات الشركاتية في المغرب.' : 'Discover why Casablanca is the preferred choice for corporate events in Morocco.'}
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

export default CasablancaDestination;