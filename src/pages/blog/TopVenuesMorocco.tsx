import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getLocalizedPath } from '@/lib/i18n';
import venuesImage from '@/assets/blog-morocco-venues.jpg';
import conferenceImage from '@/assets/marrakech-conference.jpg';

const TopVenuesMorocco: React.FC = () => {
  const { t } = useLanguage();

  const venues = [
    {
      name: "Palmeraie Palace Marrakech",
      location: "Marrakech",
      capacity: "500 guests",
      features: ["Modern AV equipment", "Traditional Moroccan design", "Golf course access", "Multiple meeting rooms"]
    },
    {
      name: "Four Seasons Casablanca",
      location: "Casablanca", 
      capacity: "300 guests",
      features: ["Ocean view", "State-of-the-art technology", "Executive floors", "Business center"]
    },
    {
      name: "Royal Mirage Agadir",
      location: "Agadir",
      capacity: "400 guests", 
      features: ["Beachfront location", "Spa facilities", "Outdoor venues", "Team building spaces"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${venuesImage})` }}
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
            {t('blogPost1Title')}
          </h1>
          
          <div className="flex items-center justify-center text-primary-foreground/90 space-x-6 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              March 15, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              8 min read
            </div>
          </div>
          
          <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white">
            {t('venues')}
          </Badge>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Morocco has emerged as a premier destination for corporate events and conferences, offering world-class venues that combine modern amenities with authentic Moroccan hospitality. From the bustling economic hub of Casablanca to the cultural richness of Marrakech, conference venues in Morocco provide the perfect backdrop for successful business gatherings.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 mt-12">
              Why Choose Morocco for Your Next Conference?
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Morocco's strategic location between Europe and Africa, combined with excellent infrastructure and competitive pricing, makes it an ideal choice for international conferences. The country offers a unique blend of business-friendly environments and exotic cultural experiences that leave lasting impressions on attendees.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Advantages:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Strategic location with easy access from Europe, Africa, and Middle East</li>
                <li>Modern conference facilities with latest technology</li>
                <li>Competitive pricing compared to European venues</li>
                <li>Rich cultural experiences for memorable corporate events</li>
                <li>Excellent weather year-round</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-8 mt-12">
              Top Conference Venues in Morocco
            </h2>

            <div className="grid gap-8 mb-12">
              {venues.map((venue, index) => (
                <Card key={index} className="overflow-hidden shadow-card border-0">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img 
                          src={conferenceImage} 
                          alt={venue.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                          {venue.name}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-4">
                          <MapPin className="w-4 h-4 mr-2" />
                          {venue.location}
                          <Star className="w-4 h-4 ml-4 mr-1" />
                          Capacity: {venue.capacity}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {venue.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 mt-12">
              Planning Your Corporate Event in Morocco
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              When organizing a conference in Morocco, working with experienced local partners is essential. Professional event management companies in Morocco understand the nuances of international business culture while leveraging local expertise to create seamless corporate experiences.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Best Practices for Success:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Book venues 3-6 months in advance for optimal availability</li>
                <li>Consider cultural sensitivity for international attendees</li>
                <li>Plan transportation and accommodation early</li>
                <li>Include authentic Moroccan experiences in your program</li>
                <li>Work with certified local DMC partners</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 mt-12">
              Conclusion
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Morocco's conference venues offer the perfect combination of professional facilities, cultural richness, and exceptional value. Whether you're planning a corporate retreat in Marrakech, a conference in Casablanca, or an incentive program in Agadir, Morocco provides world-class venues that will exceed your expectations and create unforgettable experiences for your attendees.
            </p>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            Ready to Plan Your Conference in Morocco?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a personalized proposal for your corporate event with detailed venue options and competitive pricing.
          </p>
          <Button variant="cta" size="lg" className="text-lg px-12 py-6">
            {t('getProposal')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TopVenuesMorocco;