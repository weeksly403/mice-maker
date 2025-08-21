import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Clock, Camera, Waves, Building2, Trophy, Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';
import agadirTeamImage from '@/assets/blog-agadir-team.jpg';

const AgadirTeamBuilding: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Team Building Activities Agadir Morocco | Corporate Beach Events 2025</title>
      <meta name="description" content="Discover the best team building activities in Agadir Morocco. Beach sports, cultural workshops, and corporate retreats with Atlantic Ocean views. Expert MICE services." />
      <meta name="keywords" content="team building Agadir, corporate activities Morocco, beach team building, Agadir corporate events, Morocco MICE services, company retreat Agadir" />
      <meta property="og:title" content="Ultimate Team Building Activities in Agadir Morocco" />
      <meta property="og:description" content="Transform your team with unique beach-based team building activities in Agadir. Professional event management for corporate groups." />
      <meta property="og:image" content={agadirTeamImage} />
      <meta property="og:type" content="article" />

      <article className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <header className="relative h-[70vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${agadirTeamImage})` }}
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
                      8 min read
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Top Team Building Activities in Agadir: Atlantic Coast Corporate Experiences
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                  Discover why Agadir's stunning Atlantic coastline and year-round sunshine make it Morocco's premier destination 
                  for team building activities and corporate retreats.
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
                corporate activities that will strengthen your team while showcasing Morocco's Atlantic charm.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Waves className="w-8 h-8 text-primary" />
                Beach-Based Team Building Excellence
              </h2>
              
              <p className="mb-6">
                Agadir's 10-kilometer golden beach provides the perfect backdrop for innovative team building experiences. 
                <strong> Corporate beach activities in Agadir</strong> combine the motivational power of ocean views with 
                structured professional development programs.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <Trophy className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Beach Olympics Challenge</h3>
                    <p className="text-muted-foreground">
                      Multi-sport competitions featuring volleyball, football, and traditional Moroccan games. 
                      Perfect for groups of 20-100 participants.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Surfing Team Challenges</h3>
                    <p className="text-muted-foreground">
                      Professional surf instruction combined with team coordination exercises. 
                      Builds trust and communication in a unique environment.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-primary" />
                Cultural Team Building Experiences
              </h2>
              
              <p className="mb-6">
                <strong>Agadir corporate cultural activities</strong> immerse teams in authentic Moroccan traditions while 
                fostering collaboration and cultural awareness. These experiences create lasting memories and stronger 
                professional relationships.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Moroccan Cooking Team Challenge:</strong> Groups compete to prepare traditional tagines 
                    and couscous under expert chef guidance, promoting teamwork and cultural exchange.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Argan Oil Cooperative Visit:</strong> Educational team activities at women's cooperatives, 
                    combining social responsibility with collaborative problem-solving exercises.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Traditional Craft Workshops:</strong> Team pottery, carpet weaving, and metalwork sessions 
                    that require coordination and creativity from all participants.
                  </div>
                </li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                Adventure Team Building in the Atlas Mountains
              </h2>
              
              <p className="mb-6">
                Just 60 minutes from Agadir, the <strong>High Atlas Mountains team building</strong> opportunities provide 
                challenging outdoor activities that build resilience, leadership, and trust among team members.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 my-8">
                <h3 className="text-2xl font-semibold mb-4">Recommended Mountain Activities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Paradise Valley Trekking</h4>
                    <p className="text-sm text-muted-foreground">
                      Guided hikes through stunning gorges with natural pools, requiring team navigation and mutual support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Berber Village Challenges</h4>
                    <p className="text-sm text-muted-foreground">
                      Cultural immersion activities that require teams to complete traditional tasks together.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Why Choose Agadir for Team Building?</h2>
              
              <p className="mb-6">
                <strong>Corporate events in Agadir Morocco</strong> benefit from world-class infrastructure, 
                300+ days of sunshine annually, and easy international accessibility. The city's modern hotels, 
                conference facilities, and professional service providers ensure seamless event execution.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">300+</div>
                  <div className="text-sm text-muted-foreground">Sunny days per year</div>
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