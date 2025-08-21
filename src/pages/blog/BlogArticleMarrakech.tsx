import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, MapPin, Users, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getLocalizedPath } from '@/lib/i18n';
import conferenceImage from '@/assets/marrakech-conference.jpg';
import heroImage from '@/assets/hero-morocco-mice.jpg';

// New images for enhanced article content
const marrakechCityscape = '/lovable-uploads/3b2a6045-af07-4373-a07b-1fa6675d0ddd.png';
const luxuryConferenceRoom = '/lovable-uploads/767d3d8c-7737-420f-aa82-f484184fb442.png';
const desertTeamBuilding = '/lovable-uploads/c79d5150-8963-4107-a44b-feb29d1c7eaa.png';
const modernSeminar = '/lovable-uploads/b1bff448-1601-47da-9214-c832a3a4062e.png';
const moroccanStreet = '/lovable-uploads/6058eec1-8147-43f5-b0af-48dbf2dbd672.png';
const spiceMarket = '/lovable-uploads/3bd7366c-505d-4820-a1cf-beb0014e0ecc.png';

const BlogArticleMarrakech: React.FC = () => {
  const { t } = useLanguage();

  const venues = [
    {
      name: "La Mamounia Palace",
      type: "Luxury Hotel",
      capacity: "500 guests",
      highlights: ["Historic palace", "Modern conference facilities", "Michelin dining"]
    },
    {
      name: "Royal Mansour",
      type: "Royal Riad",
      capacity: "200 guests",
      highlights: ["Exclusive access", "Traditional architecture", "Royal service"]
    },
    {
      name: "Four Seasons Resort",
      type: "Resort",
      capacity: "300 guests",
      highlights: ["Atlas Mountains views", "Spa facilities", "Golf course"]
    }
  ];

  const planningSteps = [
    {
      step: "1",
      title: "Define Objectives & Audience",
      description: "Establish clear goals and identify your target participants for optimal planning."
    },
    {
      step: "2", 
      title: "Set Budget & Timeline",
      description: "Create realistic budgets and timelines to ensure smooth execution."
    },
    {
      step: "3",
      title: "Research & Book Venues",
      description: "Select and secure the perfect venue that aligns with your event objectives."
    },
    {
      step: "4",
      title: "Arrange Logistics",
      description: "Organize transportation, accommodation, and all necessary permits."
    }
  ];

  const activities = [
    "Atlas Mountains Adventures - Hiking and mountain excursions",
    "Desert Experiences - Camel treks and traditional camps", 
    "Cooking Classes - Learn authentic Moroccan cuisine",
    "Artisan Workshops - Traditional crafts and pottery",
    "Cultural Tours - Explore medina and historic sites",
    "Garden Visits - Majorelle and Menara gardens"
  ];

  const faqs = [
    {
      question: "What's the best time to host a seminar in Marrakech?",
      answer: "The fall and spring months offer mild weather, ideal for seminars and outdoor activities."
    },
    {
      question: "How should we handle cultural differences?",
      answer: "Work with local experts who understand Moroccan customs and can guide you through cultural nuances."
    },
    {
      question: "What about language barriers?",
      answer: "Many venues and service providers speak multiple languages, but having local support ensures smooth communication."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${marrakechCityscape})` }}
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
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
            {t('blogPost7Title')}
          </h1>
          
          <div className="flex items-center justify-center text-primary-foreground/90 space-x-6 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              March 20, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              12 min read
            </div>
          </div>
          
          <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white">
            {t('venues')}
          </Badge>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to={getLocalizedPath('/')} className="hover:text-primary transition-colors">
              {t('home')}
            </Link>
            <span>/</span>
            <Link to={getLocalizedPath('/blog')} className="hover:text-primary transition-colors">
              {t('blog')}
            </Link>
            <span>/</span>
            <span className="text-foreground">Top Tips for a Successful Séminaire à Marrakech</span>
          </nav>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="text-xl text-muted-foreground mb-12 leading-relaxed bg-primary/5 p-6 rounded-lg">
              <p className="mb-4">
                Marrakech is a vibrant city that blends tradition with modernity. It's an ideal location for hosting seminars. The city's unique charm and rich culture make it a standout choice.
              </p>
              <p>
                Organizing a seminar in Marrakech offers many benefits. From luxury venues to traditional settings, the options are diverse. The city's infrastructure supports seamless event planning.
              </p>
            </div>

            {/* Why Choose Marrakech */}
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 mt-16">
              Why Choose Marrakech for Your Seminar
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Marrakech captivates with its blend of ancient history and modern amenities. This unique mix makes it a top destination for seminars. The city's dynamic environment fosters creativity and innovation.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              One of Marrakech's key advantages is accessibility. Its international airport connects easily to major cities, simplifying travel for global attendees. Reliable local transport further aids in smooth logistics.
            </p>

            <div className="bg-muted/30 p-8 rounded-lg mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Key advantages of choosing Marrakech:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Strategic location with excellent international connectivity</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Rich cultural heritage providing unique experiences</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">World-class hospitality and accommodation options</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Diverse venue options from traditional to ultra-modern</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Year-round favorable climate</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Competitive pricing compared to European destinations</span>
                </div>
              </div>
            </div>

            {/* Top Venues */}
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 mt-16">
              Top Venues in Marrakech
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Marrakech boasts a variety of venues perfect for seminars. Each offers a unique ambiance, helping create a memorable event. Whether you prefer traditional Moroccan style or sleek modern décor, options abound.
            </p>

            {/* Luxury Conference Venue Image */}
            <div className="my-12 flex justify-center">
              <img 
                src={luxuryConferenceRoom}
                alt="Luxury conference room in Marrakech featuring traditional Moroccan architecture and modern amenities"
                className="rounded-lg shadow-lg max-w-full h-auto lg:max-w-4xl"
                loading="lazy"
              />
            </div>

            <div className="space-y-6 mb-12">
              {venues.map((venue, index) => (
                <Card key={index} className="overflow-hidden shadow-card border-0">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img 
                          src={heroImage} 
                          alt={venue.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                          {venue.name}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          {venue.type}
                        </div>
                        <div className="flex items-center text-muted-foreground mb-4">
                          <Users className="w-4 h-4 mr-2" />
                          {venue.capacity}
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {venue.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-sm text-muted-foreground">
                              <Star className="w-4 h-4 text-primary mr-2" />
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

            <div className="bg-primary/5 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">Top venue categories:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Luxury Hotels:</strong> Five-star properties with modern conference facilities</li>
                <li><strong>Traditional Riads:</strong> Intimate, culturally-rich settings with authentic Moroccan charm</li>
                <li><strong>Convention Centers:</strong> Large-scale facilities for major corporate events</li>
                <li><strong>Boutique Venues:</strong> Unique spaces combining luxury with local character</li>
              </ul>
            </div>

            {/* Planning Guide */}
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 mt-16">
              Planning Your Seminar: Step-by-Step Guide
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              To organize a successful seminar in Marrakech, detailed planning is crucial. Start by defining your objectives and target audience. This clarity helps in selecting venues, activities, and speakers aligned with your goals.
            </p>

            {/* Modern Seminar Image */}
            <div className="my-12 flex justify-center">
              <img 
                src={modernSeminar}
                alt="Modern seminar presentation in progress with attendees and professional setup"
                className="rounded-lg shadow-lg max-w-full h-auto lg:max-w-4xl"
                loading="lazy"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {planningSteps.map((step, index) => (
                <Card key={index} className="shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted/30 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">Essential planning steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Define seminar objectives and target audience</li>
                <li>Set budget and timeline</li>
                <li>Research and book venues</li>
                <li>Secure necessary permits and legal requirements</li>
                <li>Arrange accommodation for attendees</li>
                <li>Plan transportation and logistics</li>
                <li>Organize catering and cultural activities</li>
                <li>Prepare marketing and communication materials</li>
                <li>Set up technology and AV requirements</li>
                <li>Create contingency plans</li>
              </ol>
            </div>

            {/* Team Building Activities */}
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 mt-16">
              Unique Team-Building Activities
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Marrakech offers countless opportunities for unique team-building activities. The city's vibrant culture provides a rich backdrop for creative activities. Incorporating local experiences can foster team cohesion and camaraderie.
            </p>

            {/* Desert Team Building Image */}
            <div className="my-12 flex justify-center">
              <img 
                src={desertTeamBuilding}
                alt="Corporate team building experience in Moroccan desert with traditional cultural activities"
                className="rounded-lg shadow-lg max-w-full h-auto lg:max-w-4xl"
                loading="lazy"
              />
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Engaging team-building options:</h3>
              <ul className="space-y-3">
                {activities.map((activity, index) => (
                  <li key={index} className="flex items-start text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cultural Integration */}
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 mt-16">
              Cultural Integration
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Infuse your seminar with the vibrant culture and flavors of Marrakech. This city is known for its rich traditions and diverse cuisine. Including local elements can deeply enhance the seminar experience.
            </p>

            {/* Moroccan Street Scene Image */}
            <div className="my-12 flex justify-center">
              <img 
                src={moroccanStreet}
                alt="Traditional Moroccan medina street scene showcasing local culture and architecture"
                className="rounded-lg shadow-lg max-w-full h-auto lg:max-w-4xl"
                loading="lazy"
              />
            </div>

            <div className="bg-primary/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Ways to incorporate Marrakech's culture:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Traditional music and dance performances</li>
                <li>Local chef-led cooking demonstrations</li>
                <li>Moroccan tea ceremonies</li>
                <li>Henna art sessions</li>
                <li>Traditional storytelling experiences</li>
                <li>Local artisan presentations</li>
              </ul>
            </div>

            {/* Moroccan Spice Market Image */}
            <div className="my-12 flex justify-center">
              <img 
                src={spiceMarket}
                alt="Colorful Moroccan spice market displaying traditional products and local culture"
                className="rounded-lg shadow-lg max-w-full h-auto lg:max-w-4xl"
                loading="lazy"
              />
            </div>

            {/* Practical Tips */}
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 mt-16">
              Practical Tips for Success
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Organizing a successful seminar in Marrakech requires careful planning and attention to detail. Work closely with local event planners; they bring invaluable insights. Their expertise can help navigate language barriers and cultural nuances.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">Essential practical tips:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Book venues well in advance, especially during peak seasons</li>
                <li>Consider cultural sensitivities in planning activities and meals</li>
                <li>Ensure reliable Wi-Fi and technical support</li>
                <li>Provide clear travel and cultural guidance to attendees</li>
                <li>Have local emergency contacts and support staff</li>
                <li>Plan for weather variations and seasonal considerations</li>
                <li>Include buffer time in schedules for cultural experiences</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 mt-16">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-12">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-card border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Q: {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      A: {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Conclusion */}
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 mt-16">
              Conclusion
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Choosing Marrakech as your seminar location offers a unique blend of tradition and modernity. The city's vibrant atmosphere and welcoming environment ensure a memorable experience for all attendees. With its diverse venues and rich cultural backdrop, Marrakech provides a dynamic setting for business events.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              By carefully integrating local customs and exceptional logistics, you can create an impactful seminar. Partner with local experts to navigate cultural nuances and tap into the city's resources. Let Marrakech's charm captivate your participants, leaving a lasting impression and fostering meaningful connections.
            </p>

          </div>
          
          {/* Social Sharing */}
          <div className="border-t pt-8 mt-12">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Share this article:
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">LinkedIn</Button>
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">Facebook</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('blogPost1Title')}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t('blogPost1Excerpt')}
                </p>
                <Button variant="ghost" asChild className="p-0 h-auto">
                  <Link to={getLocalizedPath('/blog/top-venues-morocco-conferences')}>
                    {t('readMore')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('blogPost2Title')}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t('blogPost2Excerpt')}
                </p>
                <Button variant="ghost" asChild className="p-0 h-auto">
                  <Link to={getLocalizedPath('/blog/marrakech-incentive-capital')}>
                    {t('readMore')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('blogPost3Title')}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t('blogPost3Excerpt')}
                </p>
                <Button variant="ghost" asChild className="p-0 h-auto">
                  <Link to={getLocalizedPath('/blog/team-building-agadir-activities')}>
                    {t('readMore')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
            {t('readyToStart')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('readyToStartDesc')}
          </p>
          <Button variant="cta" size="lg" className="text-lg px-12 py-6">
            {t('getProposal')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogArticleMarrakech;