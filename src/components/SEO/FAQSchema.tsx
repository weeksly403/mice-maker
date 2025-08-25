import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../LanguageProvider';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  title?: string;
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs, title }) => {
  const { language } = useLanguage();
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": title || (language === 'fr' ? "Questions Fréquentes - EventMorocco DMC" : 
                      language === 'es' ? "Preguntas Frecuentes - EventMorocco DMC" :
                      language === 'ar' ? "الأسئلة الشائعة - EventMorocco DMC" :
                      "Frequently Asked Questions - EventMorocco DMC"),
    "description": language === 'fr' ? "Réponses aux questions les plus courantes sur nos services DMC et l'organisation d'événements au Maroc" :
                   language === 'es' ? "Respuestas a las preguntas más comunes sobre nuestros servicios DMC y la organización de eventos en Marruecos" :
                   language === 'ar' ? "إجابات على الأسئلة الأكثر شيوعًا حول خدمات DMC وتنظيم الفعاليات في المغرب" :
                   "Answers to the most common questions about our DMC services and event organization in Morocco",
    "mainEntity": faqs.map((faq: FAQItem) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};