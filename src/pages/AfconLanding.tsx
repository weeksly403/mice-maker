import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AfconCountdownTimer } from '@/components/afcon/AfconCountdownTimer';
import { AfconPackageInfo } from '@/components/afcon/AfconPackageInfo';
import { AfconVenueExplorer } from '@/components/afcon/AfconVenueExplorer';
import { AfconLeadForm } from '@/components/afcon/AfconLeadForm';
import { AfconLeadMagnet } from '@/components/afcon/AfconLeadMagnet';
import { AfconTrustBadges } from '@/components/afcon/AfconTrustBadges';
import { ScrollToTop } from '@/components/ScrollToTop';
import { StickyCTA } from '@/components/conversion/StickyCTA';
import { WhatsAppBusinessButton } from '@/components/conversion/WhatsAppBusinessButton';
import { 
  Trophy, 
  Users, 
  MapPin, 
  TrendingUp, 
  Award,
  Calendar,
  Building,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Globe,
  Target,
} from 'lucide-react';
import heroImage from '@/assets/afcon-landing-hero.jpg';

export default function AfconLanding() {
  const { t, language } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const handleLeadCapture = (packageType: string) => {
    setSelectedPackage(packageType);
    setDialogOpen(true);
  };

  const stats = [
    {
      icon: Users,
      value: '500K+',
      label: t('afcon.stats.visitors'),
    },
    {
      icon: Globe,
      value: '24',
      label: t('afcon.stats.nations'),
    },
    {
      icon: Trophy,
      value: '52',
      label: t('afcon.stats.matches'),
    },
    {
      icon: TrendingUp,
      value: '$200M+',
      label: t('afcon.stats.economicImpact'),
    },
  ];

  const opportunities = [
    {
      icon: Target,
      title: t('afcon.opportunities.networking.title'),
      description: t('afcon.opportunities.networking.description'),
    },
    {
      icon: Award,
      title: t('afcon.opportunities.brandVisibility.title'),
      description: t('afcon.opportunities.brandVisibility.description'),
    },
    {
      icon: Users,
      title: t('afcon.opportunities.teamBuilding.title'),
      description: t('afcon.opportunities.teamBuilding.description'),
    },
    {
      icon: TrendingUp,
      title: t('afcon.opportunities.roi.title'),
      description: t('afcon.opportunities.roi.description'),
    },
  ];

  const sideEventServices = [
    {
      icon: Building,
      title: t('afcon.sideEvents.conferences.title'),
      description: t('afcon.sideEvents.conferences.description'),
      features: [
        t('afcon.sideEvents.conferences.feature1'),
        t('afcon.sideEvents.conferences.feature2'),
        t('afcon.sideEvents.conferences.feature3'),
      ],
    },
    {
      icon: Sparkles,
      title: t('afcon.sideEvents.galas.title'),
      description: t('afcon.sideEvents.galas.description'),
      features: [
        t('afcon.sideEvents.galas.feature1'),
        t('afcon.sideEvents.galas.feature2'),
        t('afcon.sideEvents.galas.feature3'),
      ],
    },
    {
      icon: Users,
      title: t('afcon.sideEvents.teamBuilding.title'),
      description: t('afcon.sideEvents.teamBuilding.description'),
      features: [
        t('afcon.sideEvents.teamBuilding.feature1'),
        t('afcon.sideEvents.teamBuilding.feature2'),
        t('afcon.sideEvents.teamBuilding.feature3'),
      ],
    },
    {
      icon: Trophy,
      title: t('afcon.sideEvents.vipHospitality.title'),
      description: t('afcon.sideEvents.vipHospitality.description'),
      features: [
        t('afcon.sideEvents.vipHospitality.feature1'),
        t('afcon.sideEvents.vipHospitality.feature2'),
        t('afcon.sideEvents.vipHospitality.feature3'),
      ],
    },
  ];

  const faqs = [
    {
      question: t('afcon.faq.q1'),
      answer: t('afcon.faq.a1'),
    },
    {
      question: t('afcon.faq.q2'),
      answer: t('afcon.faq.a2'),
    },
    {
      question: t('afcon.faq.q3'),
      answer: t('afcon.faq.a3'),
    },
    {
      question: t('afcon.faq.q4'),
      answer: t('afcon.faq.a4'),
    },
    {
      question: t('afcon.faq.q5'),
      answer: t('afcon.faq.a5'),
    },
    {
      question: t('afcon.faq.q6'),
      answer: t('afcon.faq.a6'),
    },
    {
      question: t('afcon.faq.q7'),
      answer: t('afcon.faq.a7'),
    },
    {
      question: t('afcon.faq.q8'),
      answer: t('afcon.faq.a8'),
    },
  ];

  return (
    <>
      <ScrollToTop />
      
      <Helmet>
        <title>{t('afcon.meta.title')}</title>
        <meta name="description" content={t('afcon.meta.description')} />
        <meta name="keywords" content={t('afcon.meta.keywords')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('afcon.meta.title')} />
        <meta property="og:description" content={t('afcon.meta.description')} />
        <meta property="og:image" content={heroImage} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('afcon.meta.title')} />
        <meta name="twitter:description" content={t('afcon.meta.description')} />
        <meta name="twitter:image" content={heroImage} />
        
        {/* Structured Data - Event Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'AFCON 2025 Morocco - Corporate Hospitality',
            description: t('afcon.meta.description'),
            startDate: '2025-12-21',
            endDate: '2026-01-18',
            location: {
              '@type': 'Place',
              name: 'Morocco',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'MA',
              },
            },
            organizer: {
              '@type': 'Organization',
              name: 'Event Morocco DMC',
              url: 'https://eventmorocco.com',
            },
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          })}
        </script>
        
        {/* Structured Data - Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Event Morocco DMC',
            description: 'Official DMC Partner for AFCON 2025 Morocco',
            url: 'https://eventmorocco.com',
          })}
        </script>
        
        {/* Structured Data - FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
            }}
          />
          
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <Badge className="mb-6 text-base px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              {t('afcon.hero.date')}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
              {t('afcon.hero.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              {t('afcon.hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => handleLeadCapture('')} className="text-lg">
                {t('afcon.hero.cta')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                {t('afcon.hero.secondaryCta')}
              </Button>
            </div>
            
            <div className="mt-16">
              <AfconCountdownTimer />
            </div>
          </div>
        </section>

        {/* Statistics Banner */}
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary-foreground" />
                    <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why AFCON 2025 Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                {t('afcon.whyAfcon.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('afcon.whyAfcon.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {opportunities.map((opportunity, index) => {
                const Icon = opportunity.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-glow transition-shadow">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">{opportunity.title}</h3>
                    <p className="text-muted-foreground">{opportunity.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                {t('afcon.packagesSection.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('afcon.packagesSection.subtitle')}
              </p>
            </div>

            <AfconPackageInfo onLeadCapture={handleLeadCapture} />
          </div>
        </section>

        {/* Venue Explorer Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                {t('afcon.venuesSection.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('afcon.venuesSection.subtitle')}
              </p>
            </div>

            <AfconVenueExplorer />
          </div>
        </section>

        {/* Side Event Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                {t('afcon.sideEventsSection.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('afcon.sideEventsSection.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sideEventServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-glow transition-shadow">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Lead Magnets Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                {t('afcon.leadMagnetsSection.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('afcon.leadMagnetsSection.subtitle')}
              </p>
            </div>

            <AfconLeadMagnet />
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                {t('afcon.trustSection.title')}
              </h2>
            </div>

            <AfconTrustBadges />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                {t('afcon.faqSection.title')}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              {t('afcon.finalCta.title')}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t('afcon.finalCta.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => handleLeadCapture('')} className="text-lg">
                {t('afcon.finalCta.primaryCta')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                {t('afcon.finalCta.secondaryCta')}
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Lead Capture Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t('afcon.form.dialogTitle')}</DialogTitle>
            <DialogDescription>
              {t('afcon.form.dialogDescription')}
            </DialogDescription>
          </DialogHeader>
          
          <AfconLeadForm
            packageType={selectedPackage}
            onSuccess={() => setDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Sticky CTA and WhatsApp */}
      <StickyCTA />
      <WhatsAppBusinessButton />
    </>
  );
}
