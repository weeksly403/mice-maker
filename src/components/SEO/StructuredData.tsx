import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../LanguageProvider';

interface StructuredDataProps {
  type: 'organization' | 'article' | 'event' | 'faq' | 'breadcrumb';
  data: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const { language } = useLanguage();
  
  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Event Morocco",
    "alternateName": ["EventMorocco", "Event Morocco MICE"],
    "url": "https://eventmorocco.com",
    "logo": "https://eventmorocco.com/logo.png",
    "description": "Leading MICE & Corporate Event Planning company in Morocco. Specializing in conferences, incentive travel, team building, and corporate events in Marrakech, Casablanca, and across Morocco.",
    "foundingDate": "2010",
    "founders": [
      {
        "@type": "Person",
        "name": "Event Morocco Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Marrakech, Morocco",
      "addressLocality": "Marrakech",
      "addressCountry": "MA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+212-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "French", "Spanish", "Arabic"]
    },
    "sameAs": [
      "https://linkedin.com/company/eventmorocco",
      "https://facebook.com/eventmorocco",
      "https://instagram.com/eventmorocco"
    ],
    "services": [
      "Corporate Event Planning",
      "MICE Services",
      "Incentive Travel",
      "Conference Organization",
      "Team Building Activities",
      "Event Management"
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
      }
    ]
  });
  
  const getArticleSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.description,
    "image": data.image,
    "author": {
      "@type": "Organization",
      "name": "Event Morocco"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Event Morocco",
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
    }
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
      "name": "Event Morocco"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": data.price || "Contact for pricing",
      "priceCurrency": "MAD"
    }
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