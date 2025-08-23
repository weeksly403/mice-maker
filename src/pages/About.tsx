import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/components/LanguageProvider';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedCard } from '@/components/AnimatedCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Award, Shield, MapPin, Clock, Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const icons = {
    match: Target,
    plan: MapPin,
    deliver: CheckCircle,
    celebrate: Award
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
          </div>
        </AnimatedSection>

        {/* How We Work Section */}
        <AnimatedSection className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('aboutHowWeWorkTitle')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('aboutHowWeWorkDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['match', 'plan', 'deliver', 'celebrate'].map((step, index) => {
                const IconComponent = icons[step as keyof typeof icons];
                return (
                  <AnimatedCard key={step} delay={index * 0.1}>
                    <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="mb-4">
                          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                          {t(`aboutStep${step.charAt(0).toUpperCase() + step.slice(1)}Title`)}
                        </h3>
                        <p className="text-muted-foreground">
                          {t(`aboutStep${step.charAt(0).toUpperCase() + step.slice(1)}Description`)}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                );
              })}
            </div>
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