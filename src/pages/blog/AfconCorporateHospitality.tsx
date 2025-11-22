import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { OptimizedSEO } from '@/components/SEO/OptimizedSEO';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { RelatedArticlesSection } from '@/components/blog/RelatedArticlesSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Trophy, Star, CheckCircle } from 'lucide-react';
import { QuoteDialog } from '@/components/QuoteDialog';
import { ScheduleCallDialog } from '@/components/ScheduleCallDialog';
import { TLDRSummary } from '@/components/SEO/TLDRSummary';
import { Link } from 'react-router-dom';
import { getLocalizedPath } from '@/lib/i18n';
import { getRelatedArticles } from '@/utils/relatedArticles';

import heroImage from '@/assets/blog-afcon-corporate-hospitality.jpg';
import venuesMapImage from '@/assets/blog-afcon-venues-map.jpg';
import vipBoxImage from '@/assets/blog-afcon-vip-box.jpg';
import networkingImage from '@/assets/blog-afcon-networking-event.jpg';

export const AfconCorporateHospitality: React.FC = () => {
  const { t, language } = useLanguage();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);
  const relatedArticles = getRelatedArticles('afcon-corporate-hospitality', 3);

  const getTranslation = (key: string) => {
    const val = t(key);
    return typeof val === 'string' ? val : '';
  };

  const text = {
    title: getTranslation('afconHospitalityTitle'),
    metaDesc: getTranslation('afconHospitalityMetaDesc'),
    readTime: getTranslation('afconHospitalityReadTime'),
    intro: getTranslation('afconHospitalityIntro'),
    section1Title: getTranslation('afconHospitalitySection1Title'),
    section1: getTranslation('afconHospitalitySection1'),
    section2Title: getTranslation('afconHospitalitySection2Title'),
    section2: getTranslation('afconHospitalitySection2'),
    section3Title: getTranslation('afconHospitalitySection3Title'),
    section3: getTranslation('afconHospitalitySection3'),
    section4Title: getTranslation('afconHospitalitySection4Title'),
    section4: getTranslation('afconHospitalitySection4'),
    section5Title: getTranslation('afconHospitalitySection5Title'),
    section5: getTranslation('afconHospitalitySection5'),
    ctaTitle: getTranslation('afconHospitalityCtaTitle'),
    ctaText: getTranslation('afconHospitalityCtaText'),
    getProposal: getTranslation('getProposal'),
    scheduleCall: getTranslation('scheduleCall'),
    faqTitle: getTranslation('afconHospitalityFaqTitle')
  };

  const faqs = [
    {
      question: getTranslation('afconHospitalityFaq1Q'),
      answer: getTranslation('afconHospitalityFaq1A')
    },
    {
      question: getTranslation('afconHospitalityFaq2Q'),
      answer: getTranslation('afconHospitalityFaq2A')
    },
    {
      question: getTranslation('afconHospitalityFaq3Q'),
      answer: getTranslation('afconHospitalityFaq3A')
    },
    {
      question: getTranslation('afconHospitalityFaq4Q'),
      answer: getTranslation('afconHospitalityFaq4A')
    }
  ];

  const hostCities = [
    { name: 'Rabat', feature: t('afconCityRabat'), icon: Trophy },
    { name: 'Casablanca', feature: t('afconCityCasa'), icon: Users },
    { name: 'Marrakech', feature: t('afconCityMarrakech'), icon: Star },
    { name: 'Agadir', feature: t('afconCityAgadir'), icon: MapPin },
    { name: 'Fes', feature: t('afconCityFes'), icon: Calendar },
    { name: 'Tangier', feature: t('afconCityTangier'), icon: CheckCircle }
  ];

  return (
    <>
      <OptimizedSEO
        pageType="blog"
        customTitle={text.title}
        customDescription={text.metaDesc}
        customKeywords="AFCON 2025 corporate hospitality Morocco, Africa Cup Nations VIP packages Morocco, AFCON business events Morocco, AFCON 2025 DMC services, corporate packages AFCON Morocco, VIP hospitality Africa Cup Nations"
      />

      <FAQSchema faqs={faqs} />

      <article className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 text-lg px-6 py-2">
              <Trophy className="w-5 h-5 mr-2 inline" />
              AFCON 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {text.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('afconHospitalitySubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {t('afconDates')}
              </span>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {t('afconCities')}
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {text.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* TL;DR Summary */}
            <TLDRSummary
              mainInsight="AFCON 2025 in Morocco (Dec 21 - Jan 18) is a major business opportunity for corporate hospitality, offering VIP packages across 6 cities with 9 world-class stadiums."
              keyTakeaways={[
                "Peak booking window: August-October 2025, 6 months before event",
                "6 host cities (Rabat, Casablanca, Marrakech, Agadir, Fes, Tangier) with diverse venue options",
                "VIP packages range from premium seating to exclusive luxury boxes with catering",
                "Combine football with cultural experiences, team building, and networking events",
                "Morocco proving capabilities as host for FIFA World Cup 2030"
              ]}
              bestFor="Corporations seeking high-value client entertainment, employee rewards, or business networking opportunities during Africa's premier sporting event."
              actionRequired="Contact EventMorocco DMC before June 2025 to secure premium packages and availability. Early booking essential for best venues and pricing."
              readTime={text.readTime}
            />

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-16">
              <p className="lead text-xl text-muted-foreground mb-8">
                {text.intro}
              </p>
            </div>

            {/* Section 1: Understanding AFCON 2025 Corporate Hospitality */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">{text.section1Title}</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p>{text.section1}</p>
              </div>
              
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">{t('afconPackageTypes')}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg flex items-center">
                        <Star className="w-5 h-5 mr-2 text-primary" />
                        {t('afconVIPBoxes')}
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          {t('afconVIPFeature1')}
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          {t('afconVIPFeature2')}
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          {t('afconVIPFeature3')}
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg flex items-center">
                        <Users className="w-5 h-5 mr-2 text-primary" />
                        {t('afconPremiumSeating')}
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          {t('afconPremiumFeature1')}
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          {t('afconPremiumFeature2')}
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          {t('afconPremiumFeature3')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <img 
                src={vipBoxImage} 
                alt="AFCON 2025 VIP Box Experience Morocco" 
                className="w-full rounded-lg shadow-elegant mb-4"
              />
            </div>

            {/* Section 2: The 6 Host Cities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">{text.section2Title}</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p>{text.section2}</p>
              </div>

              <img 
                src={venuesMapImage} 
                alt="AFCON 2025 Morocco 6 Cities 9 Stadiums Map" 
                className="w-full rounded-lg shadow-elegant mb-8"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hostCities.map((city, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <city.icon className="w-8 h-8 text-primary mr-3" />
                        <h3 className="font-semibold text-xl">{city.name}</h3>
                      </div>
                      <p className="text-muted-foreground">{city.feature}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Section 3: Beyond the Stadium */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">{text.section3Title}</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p>{text.section3}</p>
              </div>

              <img 
                src={networkingImage} 
                alt="AFCON 2025 Corporate Networking Event Morocco" 
                className="w-full rounded-lg shadow-elegant mb-8"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{t('afconNetworkingEvents')}</h3>
                    <p className="text-muted-foreground mb-4">{t('afconNetworkingDesc')}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {t('afconNetworking1')}</li>
                      <li>• {t('afconNetworking2')}</li>
                      <li>• {t('afconNetworking3')}</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{t('afconCulturalExperiences')}</h3>
                    <p className="text-muted-foreground mb-4">{t('afconCulturalDesc')}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {t('afconCultural1')}</li>
                      <li>• {t('afconCultural2')}</li>
                      <li>• {t('afconCultural3')}</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Section 4: EventMorocco's Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">{text.section4Title}</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p>{text.section4}</p>
              </div>

              <Card className="bg-accent/20 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">{t('afconOurServices')}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span>{t(`afconService${i}` as any)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 5: Booking Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">{text.section5Title}</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p>{text.section5}</p>
              </div>

              <Card className="bg-primary/5 border-primary">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <Calendar className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">{t('afconBookNow')}</h3>
                  <p className="text-center text-muted-foreground mb-6">
                    {t('afconBookingUrgency')}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" onClick={() => setQuoteOpen(true)}>
                      {text.getProposal}
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => setCallOpen(true)}>
                      {text.scheduleCall}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Internal Links */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6">{t('relatedResources')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to={getLocalizedPath('/services')} className="group">
                  <Card className="hover-lift h-full">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {t('ourMICEServices')}
                      </h4>
                      <p className="text-sm text-muted-foreground">{t('exploreFullServices')}</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to={getLocalizedPath('/destinations')} className="group">
                  <Card className="hover-lift h-full">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {t('moroccoDestinations')}
                      </h4>
                      <p className="text-sm text-muted-foreground">{t('discoverVenues')}</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground">{text.faqTitle}</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">{text.ctaTitle}</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {text.ctaText}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" onClick={() => setQuoteOpen(true)}>
                    {text.getProposal}
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => setCallOpen(true)}>
                    {text.scheduleCall}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </article>

      <QuoteDialog>
        <Button className="hidden">Get Quote</Button>
      </QuoteDialog>
      <ScheduleCallDialog>
        <Button className="hidden">Schedule Call</Button>
      </ScheduleCallDialog>
      
      {/* Related Articles */}
      <RelatedArticlesSection 
        currentSlug="afcon-corporate-hospitality" 
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

export default AfconCorporateHospitality;
