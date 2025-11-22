import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Clock, Camera, Plane, Building2, TrendingUp, Globe, Star, Crown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';
import { TLDRSummary } from '@/components/SEO/TLDRSummary';
import { RelatedArticlesSection } from '@/components/blog/RelatedArticlesSection';
import { VisualBreadcrumbs } from '@/components/SEO/VisualBreadcrumbs';
import { getRelatedArticles } from '@/utils/relatedArticles';
import gulfTeamImage from '@/assets/blog-gulf-team.jpg';

const GulfTeamBuilding: React.FC = () => {
  const { t, language } = useLanguage();
  const relatedArticles = getRelatedArticles('gulf-team-building', 3);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Team Building Morocco for Gulf Companies | Corporate Events GCC-Morocco 2025</title>
      <meta name="description" content="Exclusive team building programs in Morocco for Gulf companies. Luxury corporate retreats, cultural experiences, and MICE services for GCC businesses." />
      <meta name="keywords" content="team building Morocco Gulf companies, GCC corporate events Morocco, UAE team building Morocco, Saudi corporate retreats, Gulf MICE Morocco" />
      <meta property="og:title" content="Luxury Team Building Morocco for Gulf Companies" />
      <meta property="og:description" content="Premium corporate team building experiences in Morocco tailored for Gulf companies. Professional MICE services with cultural authenticity." />
      <meta property="og:image" content={gulfTeamImage} />
      <meta property="og:type" content="article" />
      <VisualBreadcrumbs />

      <article className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <header className="relative h-[70vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${gulfTeamImage})` }}
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
                    Gulf Corporate
                  </span>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Morocco-GCC
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      10 min read
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Elite Team Building Morocco: Exclusive Programs for Gulf Companies
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                  Discover why leading Gulf companies choose Morocco for premium team building experiences 
                  that combine luxury, culture, and professional development in an authentic Islamic setting.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* TL;DR Summary */}
            <TLDRSummary
              mainInsight="Morocco offers Gulf companies perfect blend of Islamic values, luxury standards matching GCC expectations, and exotic appeal - ideal for corporate team building with shared cultural context and 30-40% cost savings."
              keyTakeaways={[
                "Shared Islamic principles: Halal cuisine, prayer facilities, cultural harmony",
                "Luxury standards: 5-star palaces, premium desert camps, world-class service",
                "3 signature programs: Royal Desert Leadership, Imperial Cities Challenge, Atlas Executive Retreat",
                "98% satisfaction rate with 85% repeat business from Gulf companies",
                "Just 4-6 hours flight from GCC capitals with excellent connectivity"
              ]}
              bestFor="GCC corporations (UAE, Saudi, Kuwait, Qatar, Bahrain, Oman) seeking luxury team building, leadership retreats, or cultural intelligence programs with Islamic comfort and authentic Moroccan experiences."
              actionRequired="Schedule consultation with bilingual (Arabic-English) MICE specialist. Book 4-6 months ahead for customized Gulf corporate programs. Request halal-certified venue options."
              readTime="10 min read"
            />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                The growing business relationship between the Gulf states and Morocco has created unique opportunities for 
                <strong> team building Morocco Gulf companies</strong>. This exclusive guide reveals how GCC corporations 
                leverage Morocco's Islamic heritage and luxury infrastructure for world-class corporate team development.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Crown className="w-8 h-8 text-primary" />
                Why Gulf Companies Choose Morocco
              </h2>
              
              <p className="mb-6">
                <strong>GCC corporate events Morocco</strong> benefit from shared Islamic values, luxury hospitality standards, 
                and Morocco's position as a gateway between Arabia and Africa. Gulf companies find Morocco offers the perfect 
                blend of familiar cultural context and exotic appeal for memorable team experiences.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <Globe className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Cultural Harmony</h3>
                    <p className="text-muted-foreground">
                      Shared Islamic principles, Halal cuisine, and prayer facilities ensure comfort for Gulf corporate teams 
                      while providing enriching cultural exchange opportunities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <Star className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Luxury Standards</h3>
                    <p className="text-muted-foreground">
                      World-class palaces, 5-star desert camps, and premium service levels that match Gulf hospitality 
                      expectations while offering authentic Moroccan charm.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-primary" />
                Signature Team Building Programs for Gulf Teams
              </h2>
              
              <p className="mb-6">
                Our <strong>luxury team building Morocco</strong> programs are specifically designed for Gulf corporate culture, 
                emphasizing relationship building, strategic thinking, and leadership development in Morocco's most spectacular settings.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border-l-4 border-primary">
                  <h3 className="text-2xl font-semibold mb-4">Royal Desert Leadership Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    Exclusive 3-day program in luxury Sahara camps combining traditional Bedouin leadership principles 
                    with modern management techniques. Perfect for C-suite executives and senior management teams.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Private luxury tented accommodations</li>
                      <li>• Executive coaching sessions under the stars</li>
                      <li>• Traditional horseback leadership challenges</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• Strategic planning workshops in desert setting</li>
                      <li>• Cultural exchange with Berber tribal leaders</li>
                      <li>• Gourmet Halal cuisine and Arabic hospitality</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-8 border-l-4 border-accent">
                  <h3 className="text-2xl font-semibold mb-4">Imperial Cities Corporate Challenge</h3>
                  <p className="text-muted-foreground mb-4">
                    Multi-city team building journey through Marrakech, Fes, and Rabat, featuring palace venues, 
                    strategic challenges based on Moroccan history, and luxury cultural immersion experiences.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Private palace and riad venues</li>
                      <li>• Historical strategy games and simulations</li>
                      <li>• Artisanal craft team workshops</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• Exclusive access to royal gardens</li>
                      <li>• Master chef-guided culinary competitions</li>
                      <li>• Premium spa and wellness experiences</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border-l-4 border-primary">
                  <h3 className="text-2xl font-semibold mb-4">Atlas Mountains Executive Retreat</h3>
                  <p className="text-muted-foreground mb-4">
                    High-altitude leadership development in luxury mountain lodges, combining adventure activities 
                    with strategic planning sessions and cultural exploration of Berber communities.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Helicopter transfers and mountain adventures</li>
                      <li>• Executive strategy sessions with panoramic views</li>
                      <li>• Traditional mountain hospitality experiences</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• Professional mountain guide team challenges</li>
                      <li>• Sustainable business development workshops</li>
                      <li>• Exclusive access to remote luxury properties</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Cultural Intelligence for Gulf-Morocco Business</h2>
              
              <p className="mb-6">
                Successful <strong>UAE team building Morocco</strong> and other Gulf corporate programs require deep understanding 
                of both cultures. Our programs enhance cultural intelligence while building stronger professional relationships 
                across the Gulf-Morocco business corridor.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Shared Values Foundation</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Islamic principles in business ethics</li>
                    <li>• Emphasis on hospitality and relationship building</li>
                    <li>• Respect for tradition and cultural heritage</li>
                    <li>• Family-oriented business approaches</li>
                  </ul>
                </div>
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Cultural Nuances</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Different Arabic dialects and expressions</li>
                    <li>• Varying business hierarchy structures</li>
                    <li>• Distinct regional hospitality customs</li>
                    <li>• Unique negotiation and decision-making styles</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Investment in Gulf-Morocco Business Relations</h2>
              
              <p className="mb-6">
                The <strong>Saudi corporate retreats Morocco</strong> and other Gulf investment in Moroccan corporate programs 
                reflect the growing economic partnership between regions. Our team building experiences contribute to 
                stronger bilateral business relationships and cultural understanding.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 my-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Program Success Metrics</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Gulf executives served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Client satisfaction rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">85%</div>
                    <div className="text-sm text-muted-foreground">Repeat business rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">GCC countries served</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                هل أنت مستعد لتجربة تيم بيلدنغ استثنائية في المغرب؟
              </h2>
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                خبراؤنا المتخصصون في فعاليات الشركات الخليجية سيصممون لك برنامجاً مخصصاً 
                يجمع بين الفخامة والثقافة الأصيلة والتطوير المهني.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                احصل على عرضك المجاني
              </Button>
            </div>
          </div>
        </main>
      </article>
      
      {/* Related Articles */}
      <RelatedArticlesSection 
        currentSlug="gulf-team-building" 
        articles={relatedArticles.map(article => ({
          ...article,
          title: language === 'fr' ? article.titleFr : language === 'es' ? article.titleEs : language === 'ar' ? article.titleAr : article.title,
          excerpt: language === 'fr' ? article.excerptFr : language === 'es' ? article.excerptEs : language === 'ar' ? article.excerptAr : article.excerpt,
          category: language === 'fr' ? article.categoryFr : language === 'es' ? article.categoryEs : language === 'ar' ? article.categoryAr : article.category
        }))}
      />
    </>
  );
};

export default GulfTeamBuilding;