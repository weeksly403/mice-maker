import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/components/LanguageProvider';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedCard } from '@/components/AnimatedCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Award, Shield, MapPin, Clock, Target, Globe, MessageSquare, Users2, FileText, Settings, PartyPopper, Building2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuickFacts } from '@/components/SEO/QuickFacts';
import { ComparisonTable } from '@/components/SEO/ComparisonTable';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const icons = {
    step1: MessageSquare,
    step2: Users2,
    step3: FileText,
    step4: Settings,
    step5: PartyPopper
  };

  const trustPoints = [
    {
      icon: Shield,
      key: 'trustMinistry'
    },
    {
      icon: CheckCircle,
      key: 'trustReferences'
    },
    {
      icon: Users,
      key: 'trustNetwork'
    },
    {
      icon: Globe,
      key: 'trustSupport'
    }
  ];

  const stats = [
    { number: '500+', key: 'statsEvents' },
    { number: '20+', key: 'statsExperience' },
    { number: '95%', key: 'statsSatisfaction' },
    { number: '24h', key: 'statsResponse' }
  ];

  return (
    <>
      <Helmet>
        <title>{t('aboutMetaTitle')}</title>
        <meta name="description" content={t('aboutMetaDescription')} />
        <meta name="keywords" content={t('aboutKeywords')} />
        <link rel="canonical" href={`https://eventmorocco.com${language === 'en' ? '' : `/${language}`}/about`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('aboutMetaTitle')} />
        <meta property="og:description" content={t('aboutMetaDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://eventmorocco.com${language === 'en' ? '' : `/${language}`}/about`} />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Event Morocco",
              "url": "https://eventmorocco.com",
              "description": t('aboutIntroDescription'),
              "foundingDate": "2000",
              "knowsAbout": [
                t('aboutSchemaKeyword1'),
                t('aboutSchemaKeyword2'),
                t('aboutSchemaKeyword3')
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Morocco"
              },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "professional license",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Ministry of Tourism, Morocco"
                }
              }
            }
          })}
        </script>
        
        {/* HowTo Schema for How It Works */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t('howItWorksTitle'),
            "description": t('howItWorksDescription'),
            "step": [
              {
                "@type": "HowToStep",
                "name": t('howItWorksStep1Title'),
                "text": t('howItWorksStep1Description')
              },
              {
                "@type": "HowToStep", 
                "name": t('howItWorksStep2Title'),
                "text": t('howItWorksStep2Description')
              },
              {
                "@type": "HowToStep",
                "name": t('howItWorksStep3Title'),
                "text": t('howItWorksStep3Description')
              },
              {
                "@type": "HowToStep",
                "name": t('howItWorksStep4Title'),
                "text": t('howItWorksStep4Description')
              },
              {
                "@type": "HowToStep",
                "name": t('howItWorksStep5Title'),
                "text": t('howItWorksStep5Description')
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
                {t('aboutHeroBadge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t('aboutHeroTitle')}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                {t('aboutHeroSubtitle')}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Introduction Section */}
        <AnimatedSection className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                {t('aboutIntroTitle')}
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  {t('aboutIntroDescription')}
                </p>
              </div>
            </div>
            
            {/* Company Quick Facts */}
            <div className="mt-12">
              <QuickFacts
                title={t('companyOverview')}
                variant="default"
                facts={[
                  {
                    icon: Calendar,
                    label: t('established'),
                    value: '2000'
                  },
                  {
                    icon: Users,
                    label: t('eventsDelivered'),
                    value: '500+'
                  },
                  {
                    icon: Building2,
                    label: t('partnerVenues'),
                    value: '150+'
                  },
                  {
                    icon: Globe,
                    label: t('countriesServed'),
                    value: '40+'
                  },
                  {
                    icon: Shield,
                    label: t('certification'),
                    value: t('ministryAuthorized')
                  },
                  {
                    icon: Award,
                    label: t('satisfaction'),
                    value: '98%'
                  }
                ]}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* How We Work Section */}
        <AnimatedSection className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('howItWorksTitle')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('howItWorksDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
              {['step1', 'step2', 'step3', 'step4', 'step5'].map((step, index) => {
                const IconComponent = icons[step as keyof typeof icons];
                return (
                  <AnimatedCard key={step} delay={index * 0.1}>
                    <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300 relative">
                      <CardContent className="p-0">
                        <div className="mb-4">
                          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                          {t(`howItWorks${step.charAt(0).toUpperCase() + step.slice(1)}Title`)}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {t(`howItWorks${step.charAt(0).toUpperCase() + step.slice(1)}Description`)}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                );
              })}
            </div>

            {/* CTA for How It Works */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {t('howItWorksCtaTitle')}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {t('howItWorksCtaDescription')}
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  {t('howItWorksCtaButton')}
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* DMC Selection Criteria */}
        <AnimatedSection className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('whyChooseEventMorocco')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('dmcComparisonDesc')}
              </p>
            </div>
            
            <ComparisonTable
              title={t('dmcSelectionCriteria')}
              rows={[
                t('ministryAuthorization'),
                t('yearsOfExperience'),
                t('inHouseTeam'),
                t('multilingualSupport'),
                t('emergencySupport'),
                t('transparentPricing'),
                t('clientReferences'),
                t('venueNetwork')
              ]}
              columns={[
                {
                  header: t('eventMorocco'),
                  values: [
                    true,
                    '20+ ' + t('years'),
                    true,
                    t('fourLanguages'),
                    '24/7',
                    true,
                    '500+',
                    '150+'
                  ],
                  highlighted: true
                },
                {
                  header: t('typicalDMC'),
                  values: [
                    t('sometimes'),
                    '5-10 ' + t('years'),
                    t('mixed'),
                    t('twoThreeLanguages'),
                    t('businessHours'),
                    t('varies'),
                    '50-100',
                    '30-50'
                  ]
                },
                {
                  header: t('freelanceOrganizer'),
                  values: [
                    false,
                    t('varies'),
                    false,
                    t('limited'),
                    t('limited'),
                    t('negotiable'),
                    t('limited'),
                    t('limited')
                  ]
                }
              ]}
            />
          </div>
        </AnimatedSection>

        {/* Why Trust Us Section */}
        <AnimatedSection className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('aboutTrustTitle')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {trustPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <AnimatedCard key={point.key} delay={index * 0.1}>
                    <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0 flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-foreground">
                            {t(`${point.key}Title`)}
                          </h3>
                          <p className="text-muted-foreground">
                            {t(`${point.key}Description`)}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Track Record Section */}
        <AnimatedSection className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('aboutTrackRecordTitle')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('aboutTrackRecordDescription')}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <AnimatedCard key={stat.key} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">
                      {t(stat.key)}
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  {t('aboutRequestReferences')}
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Commitment Section */}
        <AnimatedSection className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                {t('aboutCommitmentTitle')}
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  {t('aboutCommitmentDescription')}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Final CTA Section */}
        <AnimatedSection className="py-16 lg:py-24 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('aboutCtaTitle')}
              </h2>
              <p className="text-xl opacity-90 mb-8">
                {t('aboutCtaSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">
                    {t('aboutCtaButton')}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/services">
                    {t('exploreServices')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default About;