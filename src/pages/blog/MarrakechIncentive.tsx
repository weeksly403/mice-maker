import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, Trophy, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getLocalizedPath } from '@/lib/i18n';
import incentiveImage from '@/assets/blog-marrakech-incentive.jpg';
import heroImage from '@/assets/hero-morocco-mice.jpg';

const MarrakechIncentive: React.FC = () => {
  const { t } = useLanguage();

  const incentivePrograms = [
    {
      title: "Atlas Mountains Adventure",
      duration: "3 days",
      highlights: ["Helicopter tours", "Luxury mountain lodge", "Berber village visits", "Premium dining"]
    },
    {
      title: "Imperial City Discovery", 
      duration: "2 days",
      highlights: ["Private palace tours", "Artisan workshops", "Gourmet experiences", "Cultural immersion"]
    },
    {
      title: "Desert Expedition",
      duration: "4 days", 
      highlights: ["Luxury desert camps", "Camel trekking", "Stargazing experiences", "Traditional entertainment"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${incentiveImage})` }}
        >
          <div className="absolute inset-0 gradient-hero opacity-90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6 text-primary-foreground hover:bg-white/20">
            <Link to={getLocalizedPath('/blog')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToBlog')}
            </Link>
          </Button>
          
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary-foreground mb-4">
            {t('blogPost2Title')}
          </h1>
          
          <div className="flex items-center justify-center text-primary-foreground/90 space-x-6 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              March 10, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              6 min read
            </div>
          </div>
          
          <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white">
            {t('incentives')}
          </Badge>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Marrakech has established itself as the undisputed capital of incentive travel in North Africa. This imperial city offers a perfect blend of luxury, adventure, and cultural immersion that creates unforgettable experiences for high-performing teams and valued clients.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 mt-12">
              Why Marrakech Leads in Incentive Travel
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Incentive trips to Marrakech deliver exceptional ROI by combining business objectives with extraordinary experiences. The city's unique positioning as a luxury destination with authentic cultural appeal makes it ideal for rewarding top performers and strengthening business relationships.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <Trophy className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Luxury Accommodations</h3>
                  <p className="text-muted-foreground text-sm">
                    World-class riads and palaces offering authentic Moroccan hospitality with modern amenities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Unique Experiences</h3>
                  <p className="text-muted-foreground text-sm">
                    Exclusive access to private venues, artisan workshops, and cultural performances.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-8 mt-12">
              Premier Incentive Programs in Marrakech
            </h2>

            <div className="space-y-8 mb-12">
              {incentivePrograms.map((program, index) => (
                <Card key={index} className="overflow-hidden shadow-card border-0">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img 
                          src={heroImage} 
                          alt={program.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                          {program.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-4">
                          <Clock className="w-4 h-4 mr-2" />
                          {program.duration}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {program.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 mt-12">
              The Business Impact of Marrakech Incentives
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Companies that choose Marrakech for their incentive programs report higher employee satisfaction, improved retention rates, and stronger team cohesion. The exotic nature of the destination creates lasting memories that reinforce corporate values and appreciation.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Measurable Benefits:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>25% increase in participant motivation and engagement</li>
                <li>Enhanced brand perception and employee loyalty</li>
                <li>Strengthened business relationships and networking</li>
                <li>Unique content for internal communications and social media</li>
                <li>Competitive advantage in talent retention</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 mt-12">
              Planning Your Marrakech Incentive Program
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Successful incentive programs in Marrakech require careful planning and local expertise. From venue selection to cultural activities, every detail must align with your corporate objectives while delivering the wow factor that makes incentive travel effective.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Planning Elements:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Define clear objectives and success metrics</li>  
                <li>Select participants based on performance criteria</li>
                <li>Balance structured activities with free time</li>
                <li>Include spouse/partner programs when appropriate</li>
                <li>Ensure cultural sensitivity and dietary accommodations</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 mt-12">
              Conclusion
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Marrakech's position as the incentive travel capital is well-deserved. The city offers unparalleled opportunities to reward excellence, strengthen relationships, and create experiences that drive business results. For companies looking to make a lasting impact with their incentive programs, Marrakech delivers both the exotic appeal and professional execution needed for success.
            </p>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            Design Your Perfect Incentive Program
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create a customized incentive experience in Marrakech that exceeds expectations and delivers measurable business results.
          </p>
          <Button variant="cta" size="lg" className="text-lg px-12 py-6">
            {t('getProposal')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MarrakechIncentive;