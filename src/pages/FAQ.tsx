import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { QuoteDialog } from '@/components/QuoteDialog';
import { SEOEnhancer } from '@/components/SEO/SEOEnhancer';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { OptimizedSEO } from '@/components/SEO/OptimizedSEO';
import { openWhatsApp } from '@/utils/whatsapp';
import heroImage from '@/assets/hero-morocco-mice.jpg';

const FAQ: React.FC = () => {
  const { t, language } = useLanguage();

  const faqCategories = [
    {
      title: t('generalQuestions'),
      questions: [
        { q: t('faq1Q'), a: t('faq1A') },
        { q: t('faq2Q'), a: t('faq2A') },
        { q: t('faq3Q'), a: t('faq3A') },
        { q: t('faq4Q'), a: t('faq4A') }
      ]
    },
    {
      title: t('planningQuestions'),
      questions: [
        { q: t('faq5Q'), a: t('faq5A') },
        { q: t('faq6Q'), a: t('faq6A') },
        { q: t('faq7Q'), a: t('faq7A') },
        { q: t('faq8Q'), a: t('faq8A') }
      ]
    },
    {
      title: t('logisticsQuestions'),
      questions: [
        { q: t('faq9Q'), a: t('faq9A') },
        { q: t('faq10Q'), a: t('faq10A') },
        { q: t('faq11Q'), a: t('faq11A') },
        { q: t('faq12Q'), a: t('faq12A') }
      ]
    },
    {
      title: t('dmcQuestions'),
      questions: [
        { q: t('faq13Q'), a: t('faq13A') },
        { q: t('faq14Q'), a: t('faq14A') },
        { q: t('faq15Q'), a: t('faq15A') },
        { q: t('faq16Q'), a: t('faq16A') }
      ]
    },
    {
      title: t('comparisonQuestions'),
      questions: [
        { q: t('faq17Q'), a: t('faq17A') },
        { q: t('faq18Q'), a: t('faq18A') },
        { q: t('faq19Q'), a: t('faq19A') },
        { q: t('faq20Q'), a: t('faq20A') }
      ]
    },
    {
      title: t('specificServicesQuestions'),
      questions: [
        { q: t('faq21Q'), a: t('faq21A') },
        { q: t('faq22Q'), a: t('faq22A') },
        { q: t('faq23Q'), a: t('faq23A') },
        { q: t('faq24Q'), a: t('faq24A') }
      ]
    }
  ];

  // Create FAQ data for schema
  const allFAQs = faqCategories.flatMap(category => 
    category.questions.map(faq => ({
      question: faq.q,
      answer: faq.a
    }))
  );

  return (
    <>
      <OptimizedSEO pageType="faq" />
      
      <FAQSchema 
        faqs={allFAQs}
        title={t('faqMetaTitle')}
      />
      
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero opacity-90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
            {t('faqPageTitle')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {t('faqPageDesc')}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
                {category.title}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem 
                    key={`${categoryIndex}-${index}`} 
                    value={`item-${categoryIndex}-${index}`}
                    className="border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              {t('stillHaveQuestions')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('stillHaveQuestionsDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center shadow-card border-0 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t('whatsappSupport')}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {t('whatsappSupportDesc')}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => openWhatsApp(undefined, language)}
                >
                  {t('chatNow')}
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card border-0 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t('phoneSupport')}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {t('phoneSupportDesc')}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('tel:+212600000000', '_self')}
                >
                  {t('callNow')}
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card border-0 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t('emailSupport')}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {t('emailSupportDesc')}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('mailto:info@eventsmorocco.com', '_self')}
                >
                  {t('sendEmail')}
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
          <QuoteDialog>
            <Button variant="cta" size="lg" className="text-lg px-12 py-6">
              {t('getProposal')}
            </Button>
          </QuoteDialog>
        </div>
      </section>
    </div>
    </>
  );
};

export default FAQ;