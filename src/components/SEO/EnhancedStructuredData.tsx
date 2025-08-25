import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../LanguageProvider';

interface EnhancedStructuredDataProps {
  type: 'organization' | 'article' | 'event' | 'faq' | 'breadcrumb' | 'service' | 'localbusiness';
  data: any;
}

export const EnhancedStructuredData: React.FC<EnhancedStructuredDataProps> = ({ type, data }) => {
  const { language } = useLanguage();
  
  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EventMorocco",
    "alternateName": ["Event Morocco", "EventMorocco DMC", "Morocco DMC"],
    "url": "https://eventmorocco.com",
    "logo": "https://eventmorocco.com/logo.png",
    "description": language === 'fr' 
      ? "DMC Maroc leader - Destination Management Company pour événements d'entreprise, MICE, incentives, conférences et team building au Maroc. 15 ans d'expertise DMC."
      : language === 'es'
      ? "DMC Marruecos líder - Destination Management Company para eventos corporativos, MICE, incentivos, conferencias y team building en Marruecos. 15 años de experiencia DMC."
      : language === 'ar'
      ? "شركة إدارة الوجهات المغرب الرائدة - Destination Management Company للفعاليات الشركاتية، MICE، الحوافز، المؤتمرات وبناء الفريق في المغرب. 15 سنة من خبرة DMC."
      : "Leading Morocco DMC - Destination Management Company for corporate events, MICE, incentives, conferences and team building in Morocco. 15 years of DMC expertise.",
    "foundingDate": "2009",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gueliz, Marrakech",
      "addressLocality": "Marrakech",
      "addressRegion": "Marrakech-Safi",
      "postalCode": "40000",
      "addressCountry": "MA"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+212-XXX-XXXX",
        "contactType": "customer service",
        "availableLanguage": ["French", "English", "Spanish", "Arabic"],
        "areaServed": "Morocco"
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "contact@eventmorocco.com",
        "availableLanguage": ["French", "English", "Spanish", "Arabic"]
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/eventmorocco",
      "https://facebook.com/eventmoroccoMICE",
      "https://instagram.com/eventmorocco_dmc"
    ],
    "serviceType": [
      "Destination Management Company",
      "MICE Services",
      "Corporate Event Planning",
      "Incentive Travel",
      "Conference Organization",
      "Team Building Activities",
      "Event Management",
      "DMC Services Morocco"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Morocco"
      },
      {
        "@type": "City",
        "name": "Marrakech"
      },
      {
        "@type": "City", 
        "name": "Casablanca"
      },
      {
        "@type": "City",
        "name": "Agadir"
      },
      {
        "@type": "City",
        "name": "Fes"
      },
      {
        "@type": "Place",
        "name": "Sahara Desert"
      }
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "DMC Certification",
      "recognizedBy": {
        "@type": "Organization", 
        "name": "Morocco Tourism Board"
      }
    }
  });

  const getLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://eventmorocco.com",
    "name": "EventMorocco DMC",
    "image": "https://eventmorocco.com/logo.png",
    "telephone": "+212-XXX-XXXX",
    "email": "contact@eventmorocco.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gueliz, Marrakech",
      "addressLocality": "Marrakech",
      "addressRegion": "Marrakech-Safi", 
      "postalCode": "40000",
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.6295",
      "longitude": "-7.9811"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "€€-€€€",
    "servesCuisine": "Event Services",
    "serviceArea": {
      "@type": "Country",
      "name": "Morocco"
    }
  });
  
  const getServiceSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.name,
    "description": data.description,
    "provider": {
      "@type": "Organization",
      "name": "EventMorocco DMC"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Morocco"
    },
    "serviceType": data.serviceType || "DMC Services",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": data.priceRange || "Contact for pricing",
      "priceCurrency": "EUR"
    }
  });
  
  const getArticleSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.description,
    "image": data.image,
    "author": {
      "@type": "Organization",
      "name": "EventMorocco DMC"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EventMorocco",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eventmorocco.com/logo.png"
      }
    },
    "datePublished": data.publishedDate,
    "dateModified": data.modifiedDate || data.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": data.url
    },
    "keywords": data.keywords || "Morocco DMC, MICE Morocco, corporate events Morocco"
  });
  
  const getEventSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": data.name,
    "description": data.description,
    "startDate": data.startDate,
    "endDate": data.endDate,
    "location": {
      "@type": "Place",
      "name": data.location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": data.city,
        "addressCountry": "MA"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "EventMorocco DMC"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": data.price || "Contact for pricing",
      "priceCurrency": "MAD"
    },
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled"
  });
  
  const getFAQSchema = () => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  });
  
  const getBreadcrumbSchema = () => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": data.items.map((item: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  });
  
  const getSchemaData = () => {
    switch (type) {
      case 'organization':
        return getOrganizationSchema();
      case 'localbusiness':
        return getLocalBusinessSchema();
      case 'service':
        return getServiceSchema();
      case 'article':
        return getArticleSchema();
      case 'event':
        return getEventSchema();
      case 'faq':
        return getFAQSchema();
      case 'breadcrumb':
        return getBreadcrumbSchema();
      default:
        return getOrganizationSchema();
    }
  };
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getSchemaData())}
      </script>
    </Helmet>
  );
};