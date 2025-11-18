import { Helmet } from 'react-helmet-async';
import { generateAggregateRatingSchema, generateReviewSchema } from '@/utils/seoMetaGenerator';

export const EnhancedLocalBusinessSchema = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://eventmorocco.com/#business',
    name: 'EventMorocco',
    alternateName: 'EventMorocco DMC',
    description: 'Premier destination management company specializing in MICE, corporate events, incentive travel, and team building across Morocco. 15+ years experience.',
    url: 'https://eventmorocco.com',
    telephone: '+212-XXX-XXXXXX',
    email: 'contact@eventmorocco.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenue Mohammed VI',
      addressLocality: 'Marrakech',
      addressRegion: 'Marrakech-Safi',
      postalCode: '40000',
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.6295,
      longitude: -7.9811,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '€€€',
    aggregateRating: generateAggregateRatingSchema(),
    review: generateReviewSchema(),
    areaServed: [
      {
        '@type': 'City',
        name: 'Marrakech',
      },
      {
        '@type': 'City',
        name: 'Casablanca',
      },
      {
        '@type': 'City',
        name: 'Agadir',
      },
      {
        '@type': 'City',
        name: 'Fes',
      },
      {
        '@type': 'Country',
        name: 'Morocco',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'MICE & Corporate Event Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate Event Planning',
            description: 'Full-service corporate event planning and management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Incentive Travel Programs',
            description: 'Custom incentive travel experiences across Morocco',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Team Building Activities',
            description: 'Professional team building and group activities',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Conference Management',
            description: 'Complete conference and congress organization',
          },
        },
      ],
    },
    sameAs: [
      'https://www.linkedin.com/company/eventmorocco',
      'https://www.facebook.com/eventmorocco',
      'https://www.instagram.com/eventmorocco',
    ],
    founder: {
      '@type': 'Person',
      name: 'EventMorocco Founder',
    },
    foundingDate: '2009',
    knowsAbout: [
      'Destination Management',
      'MICE Services',
      'Corporate Events',
      'Incentive Travel',
      'Team Building',
      'Conference Management',
      'Morocco Tourism',
    ],
    award: [
      'Best DMC Morocco 2023',
      'Top MICE Provider Africa 2022',
      'Excellence in Corporate Events 2024',
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};
