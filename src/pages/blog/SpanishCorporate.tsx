import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Clock, Camera, Plane, Building2, TrendingUp, Globe, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';
import { TLDRSummary } from '@/components/SEO/TLDRSummary';
import { RelatedArticlesSection } from '@/components/blog/RelatedArticlesSection';
import { VisualBreadcrumbs } from '@/components/SEO/VisualBreadcrumbs';
import { getRelatedArticles } from '@/utils/relatedArticles';
import spanishCorporateImage from '@/assets/blog-spanish-corporate.jpg';

const SpanishCorporate: React.FC = () => {
  const { t, language } = useLanguage();
  const relatedArticles = getRelatedArticles('spanish-corporate', 3);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Corporate Travel Morocco Spanish Companies | Business Events Spain-Morocco 2025</title>
      <meta name="description" content="Comprehensive guide for Spanish companies planning corporate travel to Morocco. MICE services, venues, and cross-cultural business event solutions." />
      <meta name="keywords" content="corporate travel Morocco Spanish companies, business events Spain Morocco, Spanish MICE Morocco, cross-cultural corporate events, Morocco business travel" />
      <meta property="og:title" content="Corporate Travel Morocco Guide for Spanish Companies" />
      <meta property="og:description" content="Expert MICE services for Spanish companies expanding business relationships in Morocco. Professional event management solutions." />
      <meta property="og:image" content={spanishCorporateImage} />
      <meta property="og:type" content="article" />
      <VisualBreadcrumbs />

      <article className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <header className="relative h-[70vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${spanishCorporateImage})` }}
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
                    Corporate Travel
                  </span>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Morocco-Spain
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      12 min read
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Corporate Travel Morocco: The Complete Guide for Spanish Companies
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                  Discover how Spanish companies are leveraging Morocco's proximity and business opportunities 
                  for successful corporate events, incentive travel, and cross-cultural business development.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* TL;DR Summary */}
            <TLDRSummary
              mainInsight="Morocco offers Spanish companies unbeatable proximity (1-2 hours flight), 30-40% cost savings, and growing business opportunities for corporate events leveraging shared Mediterranean culture and strengthening economic ties."
              keyTakeaways={[
                "Strategic proximity: Just 1-2 hours from Barcelona, Madrid, Valencia with excellent connectivity",
                "Popular events: Executive retreats, incentive programs, product launches, board meetings",
                "Cultural advantages: Similar emphasis on personal relationships, meal-based business, hospitality values",
                "150+ Spanish companies served with 95% satisfaction and 40% average cost savings",
                "Key considerations: Islamic cultural awareness, different time approaches, language preferences (Arabic/French/English)"
              ]}
              bestFor="Spanish companies expanding Morocco business relationships, rewarding Iberian teams, hosting cross-cultural client events, or seeking exotic yet accessible corporate travel destinations."
              actionRequired="Connect with bilingual (Spanish-Arabic) DMC specialist. Plan 4-6 months ahead for optimal pricing. Request customized proposal considering Spanish business culture preferences."
              readTime="12 min read"
            />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                The economic relationship between Spain and Morocco continues to strengthen, making <strong>corporate travel Morocco 
                Spanish companies</strong> an increasingly strategic investment. This comprehensive guide explores how to maximize 
                business opportunities through well-planned corporate events and MICE activities.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-primary" />
                Strategic Advantages for Spanish Companies
              </h2>
              
              <p className="mb-6">
                <strong>Spain Morocco business relations</strong> benefit from unique geographical, cultural, and economic advantages. 
                Spanish companies are discovering that Morocco offers exceptional value for corporate events, team building, 
                and client entertainment activities.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <Plane className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Proximity Advantage</h3>
                    <p className="text-muted-foreground">
                      Just 1-2 hours flight from major Spanish cities to Casablanca, Marrakech, or Agadir. 
                      Cost-effective travel for frequent business interactions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <TrendingUp className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Economic Benefits</h3>
                    <p className="text-muted-foreground">
                      Excellent value proposition with 30-40% cost savings compared to European destinations, 
                      without compromising on quality or service standards.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-primary" />
                Popular Corporate Event Types for Spanish Companies
              </h2>
              
              <p className="mb-6">
                <strong>Spanish corporate events Morocco</strong> span various formats, from intimate board meetings to 
                large-scale product launches. Our experience with Spanish companies has identified the most effective 
                event types for cross-cultural business development.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    Executive Retreats & Board Meetings
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    High-level strategic meetings in exclusive venues like Marrakech's luxury riads or 
                    Casablanca's premium hotels. Perfect for confidential discussions and decision-making sessions.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Private meeting rooms with state-of-the-art technology</li>
                    <li>• Discrete service and complete confidentiality</li>
                    <li>• Cultural activities for relationship building</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    Incentive Travel Programs
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Reward top performers with unforgettable experiences combining luxury accommodations, 
                    cultural immersion, and team bonding activities across Morocco's diverse landscapes.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Desert luxury camps and camel trekking expeditions</li>
                    <li>• Private cooking classes with renowned chefs</li>
                    <li>• Atlas Mountains adventure activities</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    Product Launches & Client Events
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Create memorable product launch events that leverage Morocco's exotic appeal to 
                    impress clients and generate media attention for Spanish companies entering new markets.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Stunning venues from palaces to modern conference centers</li>
                    <li>• Professional audiovisual and staging support</li>
                    <li>• Cultural entertainment and authentic Moroccan experiences</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Cultural Considerations for Spanish Companies</h2>
              
              <p className="mb-6">
                Successful <strong>cross-cultural corporate events Morocco</strong> require understanding of local customs 
                and business etiquette. Spanish companies benefit from Morocco's similar emphasis on personal relationships 
                and extended business discussions.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Business Etiquette Similarities</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Importance of personal relationships in business</li>
                    <li>• Extended meal-based business discussions</li>
                    <li>• Respect for hierarchy and formal protocols</li>
                    <li>• Value placed on hospitality and guest treatment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Key Differences to Navigate</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Islamic cultural considerations during events</li>
                    <li>• Different approach to time and scheduling</li>
                    <li>• Distinct negotiation styles and decision-making</li>
                    <li>• Language preferences (Arabic, French, English)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Success Stories: Spanish Companies in Morocco</h2>
              
              <p className="mb-6">
                Leading Spanish corporations have successfully leveraged <strong>Morocco MICE services</strong> to strengthen 
                business relationships, launch products, and reward teams. These case studies demonstrate proven strategies 
                for cross-cultural corporate event success.
              </p>

              <div className="bg-card border rounded-lg p-8 my-8">
                <h3 className="text-2xl font-semibold mb-4">Case Study Highlights</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Spanish companies served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">Client satisfaction rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">40%</div>
                    <div className="text-sm text-muted-foreground">Average cost savings</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para Expandir tu Negocio en Marruecos?
              </h2>
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                Nuestros expertos MICE bilingües te ayudarán a planificar eventos corporativos exitosos 
                que fortalezcan las relaciones España-Marruecos.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Solicita tu Propuesta Gratuita
              </Button>
            </div>
          </div>
        </main>
      </article>
      
      {/* Related Articles */}
      <RelatedArticlesSection 
        currentSlug="spanish-corporate" 
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

export default SpanishCorporate;