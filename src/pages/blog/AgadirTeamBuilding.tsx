import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Clock, Camera, Waves, Building2, Trophy, Heart, Star, CheckCircle, TrendingUp, Globe, Award, Compass, Mountain, Utensils, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';
import agadirHeroImage from '@/assets/agadir-hero-corporate.jpg';
import agadirConferenceRoom from '@/assets/agadir-conference-room.jpg';
import agadirBeachTeambuilding from '@/assets/agadir-beach-teambuilding.jpg';
import agadirAtlasAdventure from '@/assets/agadir-atlas-adventure.jpg';
import agadirCulturalExperience from '@/assets/agadir-cultural-experience.jpg';
import agadirCorporateDinner from '@/assets/agadir-corporate-dinner.jpg';

const AgadirTeamBuilding: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Ultimate Team Building Activities in Agadir Morocco | Corporate Beach Events & Atlas Adventures 2025</title>
      <meta name="description" content="Discover Agadir's premier team building activities: beach sports, Atlas Mountain adventures, cultural workshops & luxury corporate retreats. Expert MICE services with 300+ sunny days." />
      <meta name="keywords" content="team building Agadir Morocco, corporate beach activities, Atlas Mountains team building, Agadir MICE services, Morocco corporate events, beach team building activities, Agadir company retreats, Morocco incentive travel" />
      <meta property="og:title" content="Ultimate Team Building Activities in Agadir Morocco | Corporate Beach Events" />
      <meta property="og:description" content="Transform your team with unique beach-based activities in Agadir. From Atlantic Coast challenges to Atlas Mountain adventures - professional MICE services guaranteed." />
      <meta property="og:image" content={agadirHeroImage} />
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content="2024-03-05T10:00:00+00:00" />
      <meta property="article:author" content="Morocco MICE Experts" />
      <meta property="article:section" content="Team Building" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://eventsmorocco.com/blog/team-building-agadir-activities" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Ultimate Team Building Activities in Agadir Morocco",
          "description": "Comprehensive guide to team building activities in Agadir, Morocco. Beach sports, cultural experiences, and Atlas Mountain adventures for corporate groups.",
          "image": agadirHeroImage,
          "author": {
            "@type": "Organization",
            "name": "Morocco MICE Experts"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Morocco MICE Experts"
          },
          "datePublished": "2024-03-05T10:00:00+00:00",
          "dateModified": "2024-03-05T10:00:00+00:00",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://eventsmorocco.com/blog/team-building-agadir-activities"
          }
        })}
      </script>

      <article className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <header className="relative h-[70vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${agadirHeroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
          
          <div className="relative h-full flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                {t('backToBlog')}
              </Link>
              
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    Team Building
                  </span>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Agadir, Morocco
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      15 min read
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ultimate Team Building Activities in Agadir Morocco: Where Atlantic Meets Atlas
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                  Transform your team with Agadir's unique blend of beach adventures, mountain challenges, and authentic cultural experiences. 
                  With 300+ sunny days, world-class facilities, and expert MICE services, create unforgettable corporate memories on Morocco's Atlantic coast.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                With its pristine beaches, modern infrastructure, and perfect climate, <strong>Agadir team building activities</strong> offer 
                the ideal blend of professional development and memorable experiences. This comprehensive guide explores the best 
                corporate activities that will strengthen your team while showcasing Morocco's Atlantic charm and Atlas Mountain adventures.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-primary" />
                Why Agadir is Morocco's Premier Team Building Destination
              </h2>
              
              <p className="mb-6">
                <strong>Agadir Morocco corporate events</strong> offer unparalleled advantages for international teams. With direct flights from 
                major European cities, year-round perfect weather, and a unique blend of beach and mountain activities, Agadir provides 
                the ideal setting for transformative team experiences.
              </p>

              <div className="my-8 flex justify-center">
                <img 
                  src={agadirConferenceRoom}
                  alt="Luxury beachfront conference room in Agadir with floor-to-ceiling windows overlooking the Atlantic Ocean, modern business meeting setup with Moroccan architectural elements"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                  loading="lazy"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <TrendingUp className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Strategic Location Benefits</h3>
                    <p className="text-muted-foreground">
                      Only 2-3 hours from major European cities, with modern international airport and excellent ground transportation. 
                      Minimize travel fatigue while maximizing team engagement.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <Award className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">World-Class Infrastructure</h3>
                    <p className="text-muted-foreground">
                      5-star resort properties, modern conference facilities, professional AV equipment, and dedicated MICE services. 
                      Everything needed for successful corporate events.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Waves className="w-8 h-8 text-primary" />
                Beach-Based Team Building Excellence
              </h2>
              
              <p className="mb-6">
                Agadir's 10-kilometer golden beach provides the perfect backdrop for innovative team building experiences. 
                <strong> Corporate beach activities in Agadir</strong> combine the motivational power of ocean views with 
                structured professional development programs that deliver measurable results.
              </p>

              <div className="my-8 flex justify-center">
                <img 
                  src={agadirBeachTeambuilding}
                  alt="Corporate team building activity on Agadir beach with professional business people in casual attire doing beach volleyball and team exercises, Atlantic Ocean and modern cityscape background"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                  loading="lazy"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <Trophy className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Beach Olympics Challenge</h3>
                    <p className="text-muted-foreground mb-4">
                      Multi-sport competitions featuring volleyball, football, and traditional Moroccan games. 
                      Perfect for groups of 20-100 participants.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Professional equipment and referees provided</li>
                      <li>• Team rotation system ensures full participation</li>
                      <li>• Awards ceremony with Moroccan cultural elements</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Surfing Team Challenges</h3>
                    <p className="text-muted-foreground mb-4">
                      Professional surf instruction combined with team coordination exercises. 
                      Builds trust and communication in a unique environment.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• ISA certified instructors and safety equipment</li>
                      <li>• Progressive skill development for all levels</li>
                      <li>• Team relay competitions and challenges</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 my-8">
                <h3 className="text-2xl font-semibold mb-4">Additional Beach Activities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Sailing Regatta Competitions
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Team-based sailing competitions with professional instruction and safety support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Beach Treasure Hunts
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      GPS-based challenges requiring strategic thinking and collaboration.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Sandcastle Engineering
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Creative construction challenges that require planning, delegation, and execution.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Beach Yoga & Wellness
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Morning wellness sessions to enhance team mindfulness and stress reduction.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-primary" />
                Cultural Team Building Experiences
              </h2>
              
              <p className="mb-6">
                <strong>Agadir corporate cultural activities</strong> immerse teams in authentic Moroccan traditions while 
                fostering collaboration and cultural awareness. These experiences create lasting memories and stronger 
                professional relationships while developing cross-cultural competence.
              </p>

              <div className="my-8 flex justify-center">
                <img 
                  src={agadirCulturalExperience}
                  alt="Traditional Moroccan souk market in Agadir with corporate team doing cultural treasure hunt activity, colorful spices and traditional crafts, authentic local experience for business groups"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                  loading="lazy"
                />
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-primary" />
                    Moroccan Cooking Team Challenge
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Groups compete to prepare traditional tagines, couscous, and pastries under expert chef guidance, 
                    promoting teamwork, cultural exchange, and creative problem-solving.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Professional kitchen facilities with traditional equipment</li>
                    <li>• Master chefs provide instruction and judge competitions</li>
                    <li>• Market visit to select fresh ingredients as teams</li>
                    <li>• Recipe books and certificates for all participants</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    Argan Oil Cooperative Experience
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Educational team activities at women's cooperatives, combining social responsibility with 
                    collaborative problem-solving exercises and cultural sensitivity training.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Learn traditional argan oil production methods</li>
                    <li>• Team challenges in cooperative settings</li>
                    <li>• Social impact discussions and CSR opportunities</li>
                    <li>• Support local women's economic empowerment</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Traditional Craft Workshops
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Team pottery, carpet weaving, and metalwork sessions that require coordination, creativity, 
                    and patience from all participants while learning ancient Moroccan techniques.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Master artisans guide collaborative projects</li>
                    <li>• Teams create collective art pieces</li>
                    <li>• Cultural storytelling during workshops</li>
                    <li>• Take home custom team creations</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Mountain className="w-8 h-8 text-primary" />
                Atlas Mountains Adventure Team Building
              </h2>
              
              <p className="mb-6">
                Just 60 minutes from Agadir, the <strong>High Atlas Mountains team building</strong> opportunities provide 
                challenging outdoor activities that build resilience, leadership, trust, and strategic thinking among team members 
                in Morocco's most dramatic natural setting.
              </p>

              <div className="my-8 flex justify-center">
                <img 
                  src={agadirAtlasAdventure}
                  alt="Atlas Mountains adventure team building activity with corporate group hiking and outdoor leadership exercises, dramatic mountain landscape, professional outdoor team building setup"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                  loading="lazy"
                />
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 my-8">
                <h3 className="text-2xl font-semibold mb-6">Signature Mountain Programs</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Compass className="w-4 h-4 text-primary" />
                        Paradise Valley Expedition
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Guided hikes through stunning gorges with natural pools, requiring team navigation, 
                        mutual support, and collective decision-making.
                      </p>
                      <ul className="text-xs space-y-1">
                        <li>• GPS navigation challenges</li>
                        <li>• Natural obstacle courses</li>
                        <li>• Leadership rotation exercises</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        Berber Village Integration
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Cultural immersion activities that require teams to complete traditional tasks together 
                        while learning about sustainable mountain communities.
                      </p>
                      <ul className="text-xs space-y-1">
                        <li>• Traditional building techniques</li>
                        <li>• Collaborative farming activities</li>
                        <li>• Cultural exchange sessions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                Professional Event Management & Safety
              </h2>
              
              <p className="mb-6">
                <strong>Agadir MICE services</strong> include comprehensive event management, risk assessment, and safety protocols. 
                Our certified team ensures every team building activity meets international safety standards while delivering 
                maximum engagement and learning outcomes.
              </p>

              <div className="my-8 flex justify-center">
                <img 
                  src={agadirCorporateDinner}
                  alt="Elegant Moroccan-style corporate dinner setup on a terrace overlooking Agadir marina, traditional lanterns and modern table settings, business networking event atmosphere, evening ambiance"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                  loading="lazy"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-8 h-8 text-primary mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-3">Safety First</h3>
                    <p className="text-muted-foreground text-sm">
                      ISO-certified safety protocols, professional insurance coverage, and emergency response plans for all activities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Award className="w-8 h-8 text-primary mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-3">Expert Facilitation</h3>
                    <p className="text-muted-foreground text-sm">
                      Certified team building facilitators with psychology and business backgrounds ensure meaningful outcomes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-primary mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-3">Measurable Results</h3>
                    <p className="text-muted-foreground text-sm">
                      Pre and post-activity assessments track improvements in communication, trust, and collaboration.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Success Metrics & Client Testimonials</h2>
              
              <p className="mb-6">
                <strong>Corporate events in Agadir Morocco</strong> deliver proven results across various team performance metrics. 
                Our comprehensive approach ensures sustainable improvements in team dynamics, communication effectiveness, and overall productivity.
              </p>

              <div className="grid md:grid-cols-4 gap-6 my-8">
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">300+</div>
                  <div className="text-sm text-muted-foreground">Sunny days per year</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Client satisfaction rate</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">10km</div>
                  <div className="text-sm text-muted-foreground">Golden beach coastline</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">2h</div>
                  <div className="text-sm text-muted-foreground">Flight from Europe</div>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-8 my-8">
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  "Our 3-day team building program in Agadir exceeded all expectations. The combination of beach activities, 
                  cultural experiences, and Atlas Mountain adventures created bonds that transformed our team dynamics. 
                  Six months later, we're still seeing improved collaboration and communication."
                </blockquote>
                <footer className="text-sm">
                  <strong>Sarah Mitchell</strong> - HR Director, European Tech Company
                </footer>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mb-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">What is the best time of year for team building in Agadir?</h3>
                  <p className="text-muted-foreground">
                    Agadir enjoys excellent weather year-round with over 300 sunny days annually. The best periods are 
                    October-May for cooler temperatures, though summer offers great beach conditions with warm evenings perfect for outdoor dining.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">How many people can participate in team building activities?</h3>
                  <p className="text-muted-foreground">
                    Our programs accommodate groups from 8 to 200+ participants. We design activities that scale appropriately, 
                    with larger groups divided into teams while maintaining overall cohesion and competitive elements.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">What language support is available?</h3>
                  <p className="text-muted-foreground">
                    Our team building facilitators are multilingual, offering services in English, French, Spanish, Arabic, and German. 
                    All safety briefings and instructions are provided in your preferred language.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Are activities suitable for all fitness levels?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer activities for all fitness levels and abilities. Our programs include options from gentle cultural 
                    workshops to challenging mountain adventures, ensuring everyone can participate meaningfully.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">What safety measures are in place?</h3>
                  <p className="text-muted-foreground">
                    All activities follow ISO safety standards with certified equipment, professional instructors, comprehensive insurance, 
                    and emergency response protocols. Risk assessments are conducted for each activity and group.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Can programs be customized for specific business objectives?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. We work with your team to understand specific goals - whether improving communication, 
                    developing leadership, or enhancing creativity - and design activities that address these objectives directly.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Planning Your Agadir Team Building Experience</h2>
              
              <p className="mb-6">
                Creating the perfect <strong>team building program in Agadir</strong> requires careful consideration of your group's objectives, 
                preferences, and corporate culture. Our experienced MICE team provides end-to-end planning services to ensure 
                your Agadir experience delivers lasting value for your organization.
              </p>

              <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg p-8 my-8">
                <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-4">
                  Contact our MICE specialists for a personalized consultation and detailed proposal for your Agadir team building experience. 
                  Let us create an unforgettable program that strengthens your team while showcasing the beauty of Morocco's Atlantic coast.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Plan Your Agadir Team Building Experience?
              </h2>
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                Let our MICE experts design the perfect team building program for your group in Agadir's stunning setting.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Your Free Proposal
              </Button>
            </div>
          </div>
        </main>
      </article>
    </>
  );
};

export default AgadirTeamBuilding;