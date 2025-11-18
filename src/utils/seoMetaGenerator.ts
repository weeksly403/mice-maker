// Auto-generate SEO metadata based on page type and content
interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
}

interface PageContent {
  pageType: 'blog' | 'destination' | 'service' | 'pillar' | 'home' | 'about' | 'contact';
  title?: string;
  excerpt?: string;
  destination?: string;
  service?: string;
  language?: 'en' | 'fr' | 'es' | 'ar';
}

export const generateSEOMeta = (content: PageContent): SEOMetadata => {
  const { pageType, title, excerpt, destination, service, language = 'en' } = content;

  const brandSuffix = {
    en: 'EventMorocco | Expert MICE & DMC Services',
    fr: 'EventMorocco | Services MICE & DMC Experts',
    es: 'EventMorocco | Servicios MICE & DMC Expertos',
    ar: 'EventMorocco | خدمات MICE و DMC متخصصة',
  };

  const defaultDescriptions = {
    blog: {
      en: 'Expert insights on corporate events, MICE services, and destination management in Morocco. Professional event planning tips and industry best practices.',
      fr: 'Conseils d\'experts sur les événements d\'entreprise, les services MICE et la gestion de destination au Maroc.',
      es: 'Consejos expertos sobre eventos corporativos, servicios MICE y gestión de destinos en Marruecos.',
      ar: 'رؤى الخبراء حول الفعاليات الشركات وخدمات MICE وإدارة الوجهات في المغرب.',
    },
    destination: {
      en: 'Discover premier MICE venues, team building activities, and corporate event facilities in {destination}. Expert DMC services and event planning.',
      fr: 'Découvrez les meilleurs lieux MICE, activités de team building et installations d\'événements d\'entreprise à {destination}.',
      es: 'Descubra los mejores lugares MICE, actividades de team building e instalaciones para eventos corporativos en {destination}.',
      ar: 'اكتشف أفضل أماكن MICE وأنشطة بناء الفريق ومرافق الفعاليات الشركات في {destination}.',
    },
    service: {
      en: 'Professional {service} services in Morocco. Expert planning, execution, and management for unforgettable corporate events.',
      fr: 'Services professionnels de {service} au Maroc. Planification, exécution et gestion expertes.',
      es: 'Servicios profesionales de {service} en Marruecos. Planificación, ejecución y gestión expertas.',
      ar: 'خدمات {service} احترافية في المغرب. تخطيط وتنفيذ وإدارة متخصصة.',
    },
  };

  switch (pageType) {
    case 'blog':
      return {
        title: `${title} | ${brandSuffix[language]}`,
        description: excerpt || defaultDescriptions.blog[language],
        keywords: `Morocco DMC, MICE Morocco, corporate events, ${title?.toLowerCase()}`,
        ogImage: '/hero-morocco-mice.jpg',
      };

    case 'destination':
      return {
        title: `${destination} MICE & Corporate Events | ${brandSuffix[language]}`,
        description: defaultDescriptions.destination[language].replace('{destination}', destination || ''),
        keywords: `${destination} DMC, ${destination} MICE, ${destination} corporate events, ${destination} team building, ${destination} conference venues`,
        ogImage: `/dest-${destination?.toLowerCase()}.jpg`,
      };

    case 'service':
      return {
        title: `${service} Morocco | ${brandSuffix[language]}`,
        description: defaultDescriptions.service[language].replace('{service}', service || ''),
        keywords: `${service} Morocco, Morocco ${service}, MICE Morocco, corporate ${service}`,
        ogImage: `/services-${service?.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      };

    case 'pillar':
      return {
        title: `${title} | ${brandSuffix[language]}`,
        description: excerpt || `Comprehensive guide to ${title?.toLowerCase()} in Morocco. Expert insights, planning tools, and industry best practices.`,
        keywords: `Morocco DMC, MICE Morocco, ${title?.toLowerCase()}, corporate events Morocco, event planning Morocco`,
        ogImage: '/morocco-mice-map.jpg',
      };

    case 'home':
      return {
        title: 'Morocco DMC | Expert MICE Services & Corporate Event Planning | EventMorocco',
        description: 'Premier destination management company specializing in MICE, corporate events, incentive travel, and team building across Morocco. 15+ years experience, 500+ events delivered.',
        keywords: 'Morocco DMC, MICE Morocco, corporate events Morocco, incentive travel Morocco, team building Morocco, conference venues Morocco, Marrakech DMC, Casablanca events',
        ogImage: '/hero-morocco-mice.jpg',
      };

    case 'about':
      return {
        title: `About Us | ${brandSuffix[language]}`,
        description: '15+ years of excellence in destination management and MICE services. 500+ successful events, 98% client satisfaction, award-winning team.',
        keywords: 'Morocco DMC, about EventMorocco, MICE Morocco company, corporate event planners Morocco',
        ogImage: '/morocco-business-fusion.jpg',
      };

    case 'contact':
      return {
        title: `Contact Us | ${brandSuffix[language]}`,
        description: 'Get in touch with Morocco\'s leading DMC for your next corporate event, conference, or incentive program. Free consultation and custom quotes.',
        keywords: 'contact Morocco DMC, MICE Morocco contact, event planning Morocco contact',
        ogImage: '/hero-morocco-mice.jpg',
      };

    default:
      return {
        title: brandSuffix[language],
        description: 'Premier destination management company in Morocco specializing in MICE and corporate events.',
        keywords: 'Morocco DMC, MICE Morocco',
        ogImage: '/hero-morocco-mice.jpg',
      };
  }
};

// Generate JSON-LD for aggregate ratings
export const generateAggregateRatingSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  ratingValue: '4.9',
  reviewCount: '127',
  bestRating: '5',
  worstRating: '1',
});

// Generate JSON-LD for reviews
export const generateReviewSchema = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: 'Sarah Johnson',
    },
    datePublished: '2024-11-15',
    reviewBody: 'Outstanding service for our company retreat in Marrakech. Every detail was perfectly executed.',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: 'Michael Chen',
    },
    datePublished: '2024-10-22',
    reviewBody: 'Professional team building experience in the Sahara. Highly recommend EventMorocco for corporate events.',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
  },
];

// Generate offer schema for services
export const generateOfferSchema = (serviceName: string, price?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: serviceName,
  description: `Professional ${serviceName} services in Morocco`,
  price: price || 'Contact for quote',
  priceCurrency: 'EUR',
  availability: 'https://schema.org/InStock',
  seller: {
    '@type': 'Organization',
    name: 'EventMorocco',
  },
});
