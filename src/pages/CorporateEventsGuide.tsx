import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VisualBreadcrumbs } from '@/components/SEO/VisualBreadcrumbs';
import { EnhancedStructuredData } from '@/components/SEO/EnhancedStructuredData';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadMagnetDownload } from '@/components/conversion/LeadMagnetDownload';
import { RelatedArticles, defaultRelatedArticles } from '@/components/blog/RelatedArticles';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { CheckCircle, Calendar, MapPin, Users, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporateEventsGuide = () => {
  const faqs = [
    {
      question: 'What types of corporate events can be organized in Morocco?',
      answer: 'Morocco offers venues and experiences for conferences, seminars, incentive trips, team building retreats, product launches, gala dinners, board meetings, and hybrid events. Popular formats include multi-day conferences (50-500 attendees), luxury incentive programs, adventure team building, and cultural immersion experiences.',
    },
    {
      question: 'How far in advance should we book a corporate event in Morocco?',
      answer: 'For large conferences (200+ attendees), book 9-12 months in advance to secure premium venues during peak season (March-May, September-November). Mid-size events (50-200 people) need 6-9 months. Smaller team building or incentive trips can be organized with 3-6 months notice. Last-minute bookings possible but with limited venue options.',
    },
    {
      question: 'What is the typical budget for a corporate event in Morocco?',
      answer: 'Budget ranges vary by event type: Team Building (€150-300/person/day), Incentive Travel (€250-600/person/day), Conferences (€180-400/person/day), Gala Dinners (€120-350/person). Total costs depend on group size, accommodation level, activities, and season. Morocco offers 20-30% better value than comparable European destinations.',
    },
    {
      question: 'Why choose Morocco for corporate events over European destinations?',
      answer: 'Morocco offers unique advantages: 20-30% cost savings vs. Europe, 2-3 hour flights from major European cities, year-round sunshine, exotic yet accessible culture, diverse venues (riads, kasbahs, desert camps, beach resorts), and professional DMC infrastructure. It combines cultural immersion with world-class facilities.',
    },
    {
      question: 'Do we need a DMC for corporate events in Morocco?',
      answer: 'A professional DMC is highly recommended for: Language support (Arabic, French, English), local vendor negotiations (20-30% savings), cultural guidance, crisis management, quality control, and regulatory compliance. DMCs handle logistics, allowing you to focus on event content and attendee engagement.',
    },
  ];

  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Complete Morocco Corporate Events Guide 2025',
    description: 'Comprehensive guide to planning corporate events, conferences, and MICE programs in Morocco. Expert insights on venues, budgets, best practices.',
    image: '/morocco-business-fusion.jpg',
    datePublished: '2025-01-18',
    dateModified: '2025-01-18',
    author: {
      '@type': 'Organization',
      name: 'EventMorocco',
    },
  };

  return (
    <>
      <Helmet>
        <title>Complete Morocco Corporate Events Guide 2025 | MICE Planning | EventMorocco</title>
        <meta
          name="description"
          content="Ultimate guide to planning corporate events in Morocco: conferences, incentive travel, team building. Expert DMC insights, venue selection, budgets, timelines, and best practices."
        />
        <meta
          name="keywords"
          content="Morocco corporate events, MICE Morocco, Morocco DMC, conference venues Morocco, incentive travel Morocco, team building Morocco, corporate event planning, Morocco business events"
        />
      </Helmet>

      <EnhancedStructuredData type="article" data={articleData} />
      <FAQSchema faqs={faqs} />

      <Header />
      <VisualBreadcrumbs />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Ultimate Pillar Guide • Updated 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Complete Morocco Corporate Events Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The definitive resource for planning conferences, incentive travel, and MICE programs in Morocco. 
              Expert insights from 15+ years managing 500+ corporate events.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Get Expert Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#planning-guide">Start Planning</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Events Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-serif font-bold mb-8">Guide Contents</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-3">
                <li><a href="#why-morocco" className="text-primary hover:underline">1. Why Morocco for Corporate Events</a></li>
                <li><a href="#event-types" className="text-primary hover:underline">2. Types of Corporate Events</a></li>
                <li><a href="#destination-guide" className="text-primary hover:underline">3. Destination Selection Guide</a></li>
                <li><a href="#venue-selection" className="text-primary hover:underline">4. Venue Selection Criteria</a></li>
                <li><a href="#planning-timeline" className="text-primary hover:underline">5. Event Planning Timeline</a></li>
                <li><a href="#budget-guide" className="text-primary hover:underline">6. Budget Planning & Cost Breakdown</a></li>
                <li><a href="#dmc-selection" className="text-primary hover:underline">7. Choosing the Right DMC</a></li>
                <li><a href="#case-studies" className="text-primary hover:underline">8. Success Stories & Case Studies</a></li>
                <li><a href="#best-practices" className="text-primary hover:underline">9. Best Practices & Pro Tips</a></li>
                <li><a href="#faq" className="text-primary hover:underline">10. Frequently Asked Questions</a></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Morocco Section */}
      <section id="why-morocco" className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-8">Why Choose Morocco for Corporate Events</h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Morocco has emerged as one of Europe's premier corporate event destinations, combining exotic appeal with practical accessibility. 
              Just 2-3 hours from major European cities, Morocco offers year-round sunshine, 20-30% cost savings compared to European venues, 
              and world-class MICE infrastructure built for the World Cup 2030 and AFCON 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Strategic Location</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>2-3 hour flights from major European cities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Same/similar time zone as Europe (GMT+0/+1)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>5 international airports with daily connections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Bridge between Europe, Africa, and Middle East</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Cost Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>20-30% savings vs. comparable European destinations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Competitive venue and accommodation rates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Excellent value for luxury experiences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Transparent pricing with no hidden costs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-4" />
                <CardTitle>MICE Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>50+ world-class conference venues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Modern AV technology and hybrid event capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional DMC network with international standards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>5-star hotels with dedicated event spaces</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Unique Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cultural immersion without language barriers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Diverse landscapes: desert, mountains, coast, medinas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Authentic team building activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Year-round sunshine (300+ days annually)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-serif font-bold mb-4">Key Statistics</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">12.8M</div>
                <div className="text-sm text-muted-foreground">International tourists (2024)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">€4.2B</div>
                <div className="text-sm text-muted-foreground">MICE industry value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">300+</div>
                <div className="text-sm text-muted-foreground">Days of sunshine/year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section id="event-types" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-8">Types of Corporate Events in Morocco</h2>
          
          <div className="space-y-8">
            {/* Conferences */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Conferences & Congresses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Large-scale business gatherings (50-2,000+ attendees) featuring keynote speakers, breakout sessions, 
                  networking events, and exhibition spaces. Morocco offers state-of-the-art convention centers and hotels 
                  with modern AV technology.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Typical Duration</h4>
                    <p className="text-sm text-muted-foreground">2-4 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Budget Range</h4>
                    <p className="text-sm text-muted-foreground">€180-400 per person/day</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Best Destinations</h4>
                    <p className="text-sm text-muted-foreground">Marrakech, Casablanca, Agadir</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Peak Season</h4>
                    <p className="text-sm text-muted-foreground">March-May, September-November</p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <Link to="/services#conferences">Learn More About Conference Management</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Incentive Travel */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Incentive Travel Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Reward top performers with luxury experiences combining business objectives and leisure activities. 
                  Morocco excels at creating memorable incentive trips with cultural immersion, adventure, and high-end hospitality.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Typical Duration</h4>
                    <p className="text-sm text-muted-foreground">3-7 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Budget Range</h4>
                    <p className="text-sm text-muted-foreground">€250-600 per person/day</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Best Destinations</h4>
                    <p className="text-sm text-muted-foreground">Marrakech, Sahara Desert, Agadir Coast</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Peak Season</h4>
                    <p className="text-sm text-muted-foreground">April-June, September-November</p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <Link to="/services#incentive">Explore Incentive Travel Options</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Team Building */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Team Building Retreats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Strengthen team cohesion through collaborative activities, workshops, and shared experiences. Morocco's diverse 
                  landscapes offer unique team building opportunities from desert challenges to Atlas mountain adventures.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Typical Duration</h4>
                    <p className="text-sm text-muted-foreground">2-5 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Budget Range</h4>
                    <p className="text-sm text-muted-foreground">€150-300 per person/day</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Best Destinations</h4>
                    <p className="text-sm text-muted-foreground">Agadir, Atlas Mountains, Essaouira</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Peak Season</h4>
                    <p className="text-sm text-muted-foreground">Year-round (weather-dependent)</p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <Link to="/services#team-building">Discover Team Building Activities</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <LeadMagnetDownload />

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-serif font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles articles={defaultRelatedArticles} currentSlug="corporate-events-guide" />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Plan Your Morocco Corporate Event?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free consultation with our MICE experts. We'll help you design the perfect event.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/success-stories">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CorporateEventsGuide;
