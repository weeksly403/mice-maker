import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * TravelAgency Structured Data Schema for EventMorocco DMC
 * Helps Google understand we are a professional travel agency specializing in MICE
 */
export const TravelAgencySchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "EventMorocco DMC",
    "alternateName": "Event Morocco",
    "description": "Professional Destination Management Company specializing in MICE services, corporate events, incentive travel, conferences, and team building programs across Morocco",
    "url": "https://eventmorocco.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://eventmorocco.com/logo.png",
      "width": "250",
      "height": "60"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://eventmorocco.com/morocco-mice-og.jpg",
      "width": "1200",
      "height": "630"
    },
    "telephone": "+212-XXX-XXXX",
    "email": "contact@eventmorocco.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Quartier Hivernage",
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
        "@type": "City",
        "name": "Tangier"
      }
    ],
    "priceRange": "€€€",
    "currenciesAccepted": "EUR, USD, MAD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Event Planning Morocco",
          "description": "Full-service corporate event planning and destination management in Morocco including venue sourcing, logistics, and on-ground support"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MICE Services Morocco",
          "description": "Comprehensive MICE services including conferences, conventions, exhibitions, and business events across Morocco"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Incentive Travel Programs",
          "description": "Customized incentive travel and reward programs designed to motivate teams across unique Moroccan destinations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Conference Organization",
          "description": "Professional conference and congress organization services with state-of-the-art venues and technology"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Team Building Morocco",
          "description": "Innovative team building programs and corporate retreats in unique Moroccan settings from desert to mountains"
        }
      }
    ],
    "knowsAbout": [
      "Destination Management",
      "MICE Services",
      "Corporate Events",
      "Incentive Travel",
      "Team Building",
      "Conference Management",
      "Event Logistics",
      "Morocco Tourism"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/eventmorocco",
      "https://www.facebook.com/eventmorocco",
      "https://www.instagram.com/eventmorocco",
      "https://twitter.com/eventmorocco"
    ],
    "foundingDate": "2009",
    "slogan": "Your Gateway to Exceptional Corporate Events in Morocco"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
