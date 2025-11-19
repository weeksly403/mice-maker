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
      en: 'Expert insights on corporate events, MICE, and DMC services in Morocco. Practical strategies, ROI analysis, and industry best practices for event planners.',
      fr: 'Conseils d\'experts sur événements d\'entreprise, MICE et services DMC au Maroc. Stratégies pratiques, analyse ROI et meilleures pratiques.',
      es: 'Perspectivas expertas sobre eventos corporativos, MICE y servicios DMC en Marruecos. Estrategias prácticas, análisis ROI y mejores prácticas.',
      ar: 'رؤى خبراء حول الفعاليات الشركات وخدمات MICE و DMC في المغرب. استراتيجيات عملية وتحليل العائد وأفضل الممارسات.',
    },
    destination: {
      en: 'Top MICE venues, corporate event spaces & team building activities in {destination}. 50+ verified locations, capacity details & expert DMC support.',
      fr: 'Meilleurs lieux MICE, espaces événementiels et activités team building à {destination}. 50+ sites vérifiés, capacités détaillées, support DMC expert.',
      es: 'Mejores lugares MICE, espacios para eventos corporativos y actividades de team building en {destination}. 50+ ubicaciones verificadas, detalles de capacidad.',
      ar: 'أفضل أماكن MICE ومساحات الفعاليات الشركات وأنشطة بناء الفريق في {destination}. أكثر من 50 موقع موثق وتفاصيل السعة.',
    },
    service: {
      en: 'Professional {service} in Morocco with proven ROI. Expert planning, seamless execution & 24/7 support. 500+ successful events delivered.',
      fr: 'Services {service} professionnels au Maroc avec ROI prouvé. Planification experte, exécution fluide, support 24/7. 500+ événements réussis.',
      es: 'Servicios profesionales de {service} en Marruecos con ROI comprobado. Planificación experta, ejecución perfecta, soporte 24/7. 500+ eventos exitosos.',
      ar: 'خدمات {service} احترافية في المغرب مع عائد استثمار مثبت. تخطيط متخصص وتنفيذ سلس ودعم على مدار الساعة. أكثر من 500 حدث ناجح.',
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
        title: 'Morocco DMC | Expert MICE & Corporate Event Planning | EventMorocco',
        description: 'Leading Morocco DMC with 15+ years expertise in MICE, incentive travel & corporate events. 500+ events, 98% satisfaction, 24/7 support. Get free quote today.',
        keywords: 'Morocco DMC, MICE Morocco, corporate events Morocco, incentive travel Morocco, team building Morocco, conference venues Morocco, Marrakech DMC, Casablanca events',
        ogImage: '/hero-morocco-mice.jpg',
      };

    case 'about':
      return {
        title: `About Us | ${brandSuffix[language]}`,
        description: 'Morocco\'s leading DMC since 2000. 500+ events delivered, 98% client satisfaction, ministry-authorized. Expert team, 24/7 support, proven track record.',
        keywords: 'Morocco DMC, about EventMorocco, MICE Morocco company, corporate event planners Morocco, authorized DMC Morocco',
        ogImage: '/morocco-business-fusion.jpg',
      };

    case 'contact':
      return {
        title: `Contact Us | ${brandSuffix[language]}`,
        description: 'Contact Morocco\'s premier DMC for corporate events & MICE services. Free consultation, 24-hour response, custom proposals. Call, email or WhatsApp today.',
        keywords: 'contact Morocco DMC, MICE Morocco contact, event planning Morocco contact, DMC quote Morocco',
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
