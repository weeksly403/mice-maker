import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType: string;
  price?: string;
  additionalDetails?: {
    duration?: string;
    category?: string;
    provider?: string;
  };
}

/**
 * Service Structured Data Schema Component
 * Generates schema.org Service markup for each MICE offering
 */
export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  description,
  serviceType,
  price,
  additionalDetails = {}
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": additionalDetails.provider || "EventMorocco DMC",
      "url": "https://eventmorocco.com",
      "logo": "https://eventmorocco.com/logo.png"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Morocco"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://eventmorocco.com/services",
      "servicePhone": "+212-XXX-XXXX",
      "serviceLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Marrakech",
          "addressCountry": "MA"
        }
      }
    },
    "offers": {
      "@type": "Offer",
      "price": price || "Contact for pricing",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": "https://eventmorocco.com/contact",
      "priceValidUntil": new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split('T')[0]
    },
    "category": additionalDetails.category || "Corporate Events & MICE Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    }
  };

  // Add duration if provided
  if (additionalDetails.duration) {
    schema["duration"] = additionalDetails.duration;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

/**
 * Multiple Services Schema Component
 * Generates an array of Service schemas for the main services page
 */
interface MultipleServicesSchemaProps {
  services: Array<{
    serviceName: string;
    description: string;
    serviceType: string;
    price?: string;
    category?: string;
  }>;
}

export const MultipleServicesSchema: React.FC<MultipleServicesSchemaProps> = ({ services }) => {
  const schemas = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.serviceType,
    "name": service.serviceName,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "EventMorocco DMC",
      "url": "https://eventmorocco.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Morocco"
    },
    "offers": {
      "@type": "Offer",
      "price": service.price || "Contact for pricing",
      "priceCurrency": "EUR"
    },
    "category": service.category || "Corporate Events & MICE Services"
  }));

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
