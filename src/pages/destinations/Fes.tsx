import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QuoteDialog } from '@/components/QuoteDialog';
import { ScheduleCallDialog } from '@/components/ScheduleCallDialog';
import { Crown, MapPin, Users, Calendar, Star, Plane, Palette, Phone, Mail, Clock, Wifi, Coffee, Utensils, Shield, Book } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';
import heroImage from '@/assets/agadir-cultural-experience.jpg';
import conferenceImage from '@/assets/marrakech-conference.jpg';

const FesDestination: React.FC = () => {
  const { t, language } = useLanguage();

  const venues = [
    {
      name: "Palais Medina & Spa Fes",
      category: "Heritage Palace Hotel",
      capacity: "400",
      rooms: "12",
      rating: "5.0",
      features: ["Historic Architecture", "Traditional Design", "Spa", "Gardens"]
    },
    {
      name: "Marriott Jnan Palace Fes",
      category: "Luxury Resort",
      capacity: "600",
      rooms: "15",
      rating: "4.9",
      features: ["Conference Center", "Multiple Restaurants", "Pool", "Business Center"]
    },
    {
      name: "Riad Fes Maya Suite & Spa",
      category: "Boutique Hotel",
      capacity: "200",
      rooms: "8",
      rating: "4.8",
      features: ["Authentic Riad", "Panoramic Views", "Spa", "Cultural Immersion"]
    },
    {
      name: "Hotel Sahrai Fes",
      category: "Modern Luxury",
      capacity: "300",
      rooms: "10",
      rating: "4.7",
      features: ["Contemporary Design", "City Views", "Rooftop", "Fine Dining"]
    }
  ];

  const activities = [
    {
      name: "Medina UNESCO Heritage Tour",
      duration: "Half day",
      group: "15-50",
      description: "Guided exploration of the world's largest medieval medina with expert historians"
    },
    {
      name: "Traditional Crafts Workshop",
      duration: "3-4 hours", 
      group: "10-40",
      description: "Hands-on pottery, weaving and leather crafting with master artisans"
    },
    {
      name: "Royal Palace & Gardens Visit",
      duration: "2-3 hours",
      group: "20-80",
      description: "Exclusive access to magnificent royal architecture and Andalusian gardens"
    },
    {
      name: "Cooking Class Experience",
      duration: "4-5 hours",
      group: "12-30",
      description: "Learn authentic Moroccan cuisine in traditional family homes"
    },
    {
      name: "Sufi Music & Cultural Evening",
      duration: "3-4 hours",
      group: "25-100",
      description: "Spiritual music performance with traditional Moroccan dinner"
    },
    {
      name: "Atlas Mountains Day Trip",
      duration: "Full day",
      group: "15-60",
      description: "Scenic drive to Berber villages with traditional lunch and local encounters"
    }
  ];

  const packages = [
    {
      name: "Cultural Heritage Retreat",
      duration: "3-4 days",
      participants: "25-80",
      price: "€480",
      includes: ["Heritage Hotel", "Medina Tours", "Cultural Activities", "Traditional Meals", "Local Guide"]
    },
    {
      name: "Executive Cultural Immersion",
      duration: "2-3 days", 
      participants: "15-50",
      price: "€650",
      includes: ["Luxury Riad", "Private Tours", "VIP Experiences", "Gourmet Dining", "Cultural Workshops"]
    },
    {
      name: "Team Building & Culture",
      duration: "4-5 days",
      participants: "30-100",
      price: "€420",
      includes: ["Group Accommodation", "Team Activities", "Cultural Immersion", "Craft Workshops", "Group Dining"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'fr' ? 'Séminaires Culturels Fès - Expériences Patrimoine MICE Maroc' : language === 'es' ? 'Seminarios Culturales Fez - Experiencias Patrimonio MICE Marruecos' : language === 'ar' ? 'الندوات الثقافية فاس - تجارب التراث السياحة التجارية المغرب' : 'Cultural Seminars Fez - Heritage Experiences MICE Morocco'}</title>
        <meta name="description" content={language === 'fr' ? 'Organisez vos séminaires culturels à Fès. Ville impériale UNESCO avec médina authentique, artisanat traditionnel et expériences patrimoniales uniques.' : language === 'es' ? 'Organice sus seminarios culturales en Fez. Ciudad imperial UNESCO con medina auténtica, artesanía tradicional y experiencias patrimoniales únicas.' : language === 'ar' ? 'نظم ندواتك الثقافية في فاس. مدينة إمبراطورية يونسكو مع مدينة أصيلة وحرف تقليدية وتجارب تراثية فريدة.' : 'Organize your cultural seminars in Fez. UNESCO imperial city with authentic medina, traditional crafts and unique heritage experiences.'} />
        <meta name="keywords" content={language === 'fr' ? 'séminaire Fès, événement culturel Maroc, médina Fès, patrimoine UNESCO, artisanat Maroc, MICE Fès' : language === 'es' ? 'seminario Fez, evento cultural Marruecos, medina Fez, patrimonio UNESCO, artesanía Marruecos, MICE Fez' : language === 'ar' ? 'ندوة فاس، حدث ثقافي المغرب، مدينة فاس، تراث يونسكو، حرف المغرب' : 'seminar Fez, cultural event Morocco, Fez medina, UNESCO heritage, Morocco crafts, MICE Fez'} />
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
              {language === 'fr' ? 'Ville Impériale UNESCO du Maroc' : language === 'es' ? 'Ciudad Imperial UNESCO de Marruecos' : language === 'ar' ? 'المدينة الإمبراطورية التراثية للمغرب' : 'UNESCO Imperial City of Morocco'}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
              {language === 'fr' ? 'Séminaires Culturels à Fès' : language === 'es' ? 'Seminarios Culturales en Fez' : language === 'ar' ? 'الندوات الثقافية في فاس' : 'Cultural Seminars in Fez'}
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {language === 'fr' ? 'Plongez dans l\'authenticité marocaine avec la ville impériale la mieux préservée, sa médina UNESCO et ses traditions millénaires vivantes.' : language === 'es' ? 'Sumérgete en la autenticidad marroquí con la ciudad imperial mejor conservada, su medina UNESCO y sus tradiciones milenarias vivas.' : language === 'ar' ? 'انغمس في الأصالة المغربية مع المدينة الإمبراطورية الأفضل حفظًا ومدينتها التراثية وتقاليدها الألفية الحية.' : 'Immerse yourself in Moroccan authenticity with the best-preserved imperial city, its UNESCO medina and living millennial traditions.'}
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
                <div className="text-3xl font-bold text-primary mb-2">1200+</div>
                <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Ans d\'Histoire' : language === 'es' ? 'Años de Historia' : language === 'ar' ? 'سنة من التاريخ' : 'Years of History'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">UNESCO</div>
                <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Patrimoine Mondial' : language === 'es' ? 'Patrimonio Mundial' : language === 'ar' ? 'تراث عالمي' : 'World Heritage'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">9000+</div>
                <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Artisans Active' : language === 'es' ? 'Artesanos Activos' : language === 'ar' ? 'حرفي نشط' : 'Active Artisans'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">{language === 'fr' ? 'Lieux Événements' : language === 'es' ? 'Lugares Eventos' : language === 'ar' ? 'أماكن الفعاليات' : 'Event Venues'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Fez */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  {language === 'fr' ? 'Pourquoi Choisir Fès ?' : language === 'es' ? '¿Por Qué Elegir Fez?' : language === 'ar' ? 'لماذا اختيار فاس؟' : 'Why Choose Fez?'}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Crown className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {language === 'fr' ? 'Capitale Spirituelle du Maroc' : language === 'es' ? 'Capital Espiritual de Marruecos' : language === 'ar' ? 'العاصمة الروحية للمغرب' : 'Spiritual Capital of Morocco'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? 'Ville sainte avec la plus ancienne université du monde et centre intellectuel historique.' : language === 'es' ? 'Ciudad santa con la universidad más antigua del mundo y centro intelectual histórico.' : language === 'ar' ? 'مدينة مقدسة مع أقدم جامعة في العالم ومركز فكري تاريخي.' : 'Holy city with the world\'s oldest university and historic intellectual center.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Book className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {language === 'fr' ? 'Médina UNESCO Authentique' : language === 'es' ? 'Medina UNESCO Auténtica' : language === 'ar' ? 'المدينة التراثية الأصيلة' : 'Authentic UNESCO Medina'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? 'Plus grande médina médiévale du monde, parfaitement préservée avec ses traditions vivantes.' : language === 'es' ? 'Medina medieval más grande del mundo, perfectamente conservada con sus tradiciones vivas.' : language === 'ar' ? 'أكبر مدينة قديمة في العالم، محفوظة بشكل مثالي مع تقاليدها الحية.' : 'World\'s largest medieval medina, perfectly preserved with its living traditions.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Palette className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {language === 'fr' ? 'Artisanat d\'Excellence' : language === 'es' ? 'Artesanía de Excelencia' : language === 'ar' ? 'حرف ممتازة' : 'Excellence Craftsmanship'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? 'Cuir, céramique, textile et bijoux avec des techniques transmises depuis des siècles.' : language === 'es' ? 'Cuero, cerámica, textil y joyería con técnicas transmitidas durante siglos.' : language === 'ar' ? 'الجلد والسيراميك والمنسوجات والمجوهرات بتقنيات منقولة عبر القرون.' : 'Leather, ceramics, textiles and jewelry with techniques passed down through centuries.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={conferenceImage} 
                  alt="Fez cultural heritage venue"
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
                {language === 'fr' ? 'Hôtels & Riads de Prestige' : language === 'es' ? 'Hoteles y Riads de Prestigio' : language === 'ar' ? 'الفنادق والرياضات المرموقة' : 'Prestigious Hotels & Riads'}
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
                {language === 'fr' ? 'Expériences Culturelles' : language === 'es' ? 'Experiencias Culturales' : language === 'ar' ? 'التجارب الثقافية' : 'Cultural Experiences'}
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
                {language === 'fr' ? 'Forfaits Culturels' : language === 'es' ? 'Paquetes Culturales' : language === 'ar' ? 'الباقات الثقافية' : 'Cultural Packages'}
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
              {language === 'fr' ? 'Découvrez l\'Authenticité de Fès' : language === 'es' ? 'Descubra la Autenticidad de Fez' : language === 'ar' ? 'اكتشف أصالة فاس' : 'Discover the Authenticity of Fez'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'fr' ? 'Plongez dans 1200 ans d\'histoire et de traditions dans la ville impériale la plus authentique du Maroc.' : language === 'es' ? 'Sumérgete en 1200 años de historia y tradiciones en la ciudad imperial más auténtica de Marruecos.' : language === 'ar' ? 'انغمس في 1200 سنة من التاريخ والتقاليد في المدينة الإمبراطورية الأكثر أصالة في المغرب.' : 'Immerse yourself in 1200 years of history and traditions in Morocco\'s most authentic imperial city.'}
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

export default FesDestination;