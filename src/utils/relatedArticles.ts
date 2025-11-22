// Related articles data for blog posts
// This provides structured related article recommendations for AI platforms and users

import afconBusinessImage from '@/assets/blog-afcon-business-travel.jpg';
import afconHospitalityImage from '@/assets/blog-afcon-corporate-hospitality.jpg';
import marrakechIncentiveImage from '@/assets/blog-marrakech-incentive.jpg';
import agadirTeamImage from '@/assets/blog-agadir-team.jpg';
import saharaRetreatImage from '@/assets/blog-sahara-retreat.jpg';
import dmcSelectionImage from '@/assets/blog-dmc-selection-checklist.jpg';
import roiAnalysisImage from '@/assets/blog-roi-analysis.jpg';
import hybridEventsImage from '@/assets/blog-hybrid-event-setup.jpg';
import venuesMapImage from '@/assets/blog-morocco-venues.jpg';
import gulfTeamImage from '@/assets/blog-gulf-team.jpg';
import spanishCorporateImage from '@/assets/blog-spanish-corporate.jpg';

export interface RelatedArticle {
  slug: string;
  title: string;
  titleFr: string;
  titleEs: string;
  titleAr: string;
  excerpt: string;
  excerptFr: string;
  excerptEs: string;
  excerptAr: string;
  readTime: string;
  category: string;
  categoryFr: string;
  categoryEs: string;
  categoryAr: string;
  image: string;
}

export const allArticles: RelatedArticle[] = [
  {
    slug: 'afcon-corporate-hospitality',
    title: 'AFCON 2025 Corporate Hospitality & VIP Experience Guide',
    titleFr: 'Guide Hospitalité d\'Entreprise & Expérience VIP AFCON 2025',
    titleEs: 'Guía de Hospitalidad Corporativa y Experiencia VIP AFCON 2025',
    titleAr: 'دليل الضيافة الشركاتية وتجربة VIP لكأس أفريقيا 2025',
    excerpt: 'Premium corporate hospitality packages for AFCON 2025 Morocco with VIP access, networking opportunities, and luxury experiences.',
    excerptFr: 'Packages hospitalité d\'entreprise premium pour AFCON 2025 Maroc avec accès VIP, opportunités de networking et expériences de luxe.',
    excerptEs: 'Paquetes premium de hospitalidad corporativa para AFCON 2025 Marruecos con acceso VIP, oportunidades de networking y experiencias de lujo.',
    excerptAr: 'باقات ضيافة شركاتية متميزة لكأس أفريقيا 2025 المغرب مع وصول VIP وفرص التواصل وتجارب فاخرة.',
    readTime: '12 min',
    category: 'AFCON 2025',
    categoryFr: 'AFCON 2025',
    categoryEs: 'AFCON 2025',
    categoryAr: 'كأس أفريقيا 2025',
    image: afconHospitalityImage
  },
  {
    slug: 'choosing-dmc-morocco',
    title: 'How to Choose the Right DMC in Morocco: Complete Buyer\'s Guide 2025',
    titleFr: 'Comment Choisir le Bon DMC au Maroc: Guide Complet 2025',
    titleEs: 'Cómo Elegir el DMC Correcto en Marruecos: Guía Completa 2025',
    titleAr: 'كيفية اختيار شركة DMC المناسبة في المغرب: دليل شامل 2025',
    excerpt: 'Expert guide to selecting the perfect DMC partner in Morocco for your corporate events, with evaluation criteria and red flags to avoid.',
    excerptFr: 'Guide expert pour sélectionner le partenaire DMC parfait au Maroc pour vos événements d\'entreprise, avec critères d\'évaluation et pièges à éviter.',
    excerptEs: 'Guía experta para seleccionar el socio DMC perfecto en Marruecos para sus eventos corporativos, con criterios de evaluación y señales de alerta.',
    excerptAr: 'دليل خبير لاختيار شريك DMC المثالي في المغرب لفعالياتك الشركاتية، مع معايير التقييم والعلامات التحذيرية.',
    readTime: '15 min',
    category: 'DMC Guide',
    categoryFr: 'Guide DMC',
    categoryEs: 'Guía DMC',
    categoryAr: 'دليل DMC',
    image: dmcSelectionImage
  },
  {
    slug: 'corporate-event-roi',
    title: 'ROI of Corporate Events in Morocco: Data-Driven Analysis',
    titleFr: 'ROI des Événements d\'Entreprise au Maroc: Analyse Basée sur les Données',
    titleEs: 'ROI de Eventos Corporativos en Marruecos: Análisis Basado en Datos',
    titleAr: 'عائد الاستثمار للفعاليات الشركاتية في المغرب: تحليل قائم على البيانات',
    excerpt: 'Comprehensive ROI analysis of corporate events in Morocco with real metrics, case studies, and budget justification frameworks.',
    excerptFr: 'Analyse ROI complète des événements d\'entreprise au Maroc avec métriques réelles, études de cas et cadres de justification budgétaire.',
    excerptEs: 'Análisis ROI completo de eventos corporativos en Marruecos con métricas reales, casos de estudio y marcos de justificación presupuestaria.',
    excerptAr: 'تحليل شامل لعائد الاستثمار للفعاليات الشركاتية في المغرب مع مقاييس حقيقية ودراسات حالة وأطر تبرير الميزانية.',
    readTime: '18 min',
    category: 'ROI & Budget',
    categoryFr: 'ROI & Budget',
    categoryEs: 'ROI y Presupuesto',
    categoryAr: 'عائد الاستثمار والميزانية',
    image: roiAnalysisImage
  },
  {
    slug: 'hybrid-events-morocco',
    title: 'Hybrid Events in Morocco: The Future of MICE',
    titleFr: 'Événements Hybrides au Maroc: L\'Avenir du MICE',
    titleEs: 'Eventos Híbridos en Marruecos: El Futuro del MICE',
    titleAr: 'الفعاليات الهجينة في المغرب: مستقبل MICE',
    excerpt: 'Complete guide to hybrid events in Morocco combining in-person and virtual experiences with cutting-edge technology.',
    excerptFr: 'Guide complet des événements hybrides au Maroc combinant expériences en personne et virtuelles avec technologie de pointe.',
    excerptEs: 'Guía completa de eventos híbridos en Marruecos que combinan experiencias presenciales y virtuales con tecnología de vanguardia.',
    excerptAr: 'دليل شامل للفعاليات الهجينة في المغرب التي تجمع بين التجارب الشخصية والافتراضية مع تكنولوجيا متطورة.',
    readTime: '14 min',
    category: 'Innovation',
    categoryFr: 'Innovation',
    categoryEs: 'Innovación',
    categoryAr: 'الابتكار',
    image: hybridEventsImage
  },
  {
    slug: 'marrakech-incentive',
    title: 'Ultimate Marrakech Incentive Travel Guide 2025',
    titleFr: 'Guide Ultime Voyage Incentive Marrakech 2025',
    titleEs: 'Guía Definitiva Viaje Incentivo Marrakech 2025',
    titleAr: 'الدليل النهائي لرحلات الحوافز مراكش 2025',
    excerpt: 'Luxury incentive programs in Marrakech combining riads, Atlas adventures, and authentic Moroccan experiences.',
    excerptFr: 'Programmes incentive de luxe à Marrakech combinant riads, aventures Atlas et expériences marocaines authentiques.',
    excerptEs: 'Programas de incentivos de lujo en Marrakech que combinan riads, aventuras en el Atlas y experiencias marroquíes auténticas.',
    excerptAr: 'برامج حوافز فاخرة في مراكش تجمع بين الرياضات ومغامرات الأطلس والتجارب المغربية الأصيلة.',
    readTime: '16 min',
    category: 'Destinations',
    categoryFr: 'Destinations',
    categoryEs: 'Destinos',
    categoryAr: 'الوجهات',
    image: marrakechIncentiveImage
  },
  {
    slug: 'agadir-team-building',
    title: 'Agadir Team Building: Beach Activities & Corporate Retreats',
    titleFr: 'Team Building Agadir: Activités Plage & Séminaires d\'Entreprise',
    titleEs: 'Team Building Agadir: Actividades de Playa y Retiros Corporativos',
    titleAr: 'بناء الفريق في أكادير: أنشطة الشاطئ والخلوات الشركاتية',
    excerpt: 'Comprehensive guide to beach team building in Agadir with water sports, outdoor activities, and wellness programs.',
    excerptFr: 'Guide complet du team building plage à Agadir avec sports nautiques, activités outdoor et programmes bien-être.',
    excerptEs: 'Guía completa de team building de playa en Agadir con deportes acuáticos, actividades al aire libre y programas de bienestar.',
    excerptAr: 'دليل شامل لبناء الفريق على الشاطئ في أكادير مع الرياضات المائية والأنشطة الخارجية وبرامج العافية.',
    readTime: '13 min',
    category: 'Team Building',
    categoryFr: 'Team Building',
    categoryEs: 'Team Building',
    categoryAr: 'بناء الفريق',
    image: agadirTeamImage
  },
  {
    slug: 'sahara-retreats',
    title: 'Sahara Desert Corporate Retreats: Luxury Camps & Leadership Programs',
    titleFr: 'Retraites d\'Entreprise Désert du Sahara: Camps de Luxe & Programmes Leadership',
    titleEs: 'Retiros Corporativos Desierto del Sahara: Campamentos de Lujo y Programas de Liderazgo',
    titleAr: 'خلوات شركاتية في صحراء الصحراء: مخيمات فاخرة وبرامج قيادة',
    excerpt: 'Unique desert retreat experiences in Moroccan Sahara with luxury camps, adventure activities, and transformative leadership programs.',
    excerptFr: 'Expériences de retraite désertiques uniques au Sahara marocain avec camps de luxe, activités d\'aventure et programmes leadership transformateurs.',
    excerptEs: 'Experiencias únicas de retiro en el desierto del Sahara marroquí con campamentos de lujo, actividades de aventura y programas de liderazgo transformadores.',
    excerptAr: 'تجارب خلوات صحراوية فريدة في الصحراء المغربية مع مخيمات فاخرة وأنشطة مغامرة وبرامج قيادة تحويلية.',
    readTime: '15 min',
    category: 'Destinations',
    categoryFr: 'Destinations',
    categoryEs: 'Destinos',
    categoryAr: 'الوجهات',
    image: saharaRetreatImage
  },
  {
    slug: 'top-venues-morocco',
    title: 'Top 50 Conference Venues in Morocco: Complete Venue Directory 2025',
    titleFr: 'Top 50 Lieux de Conférence au Maroc: Annuaire Complet 2025',
    titleEs: 'Top 50 Lugares de Conferencias en Marruecos: Directorio Completo 2025',
    titleAr: 'أفضل 50 مكانًا للمؤتمرات في المغرب: دليل شامل 2025',
    excerpt: 'Comprehensive directory of Morocco\'s best conference venues with capacity, facilities, and booking information.',
    excerptFr: 'Annuaire complet des meilleurs lieux de conférence du Maroc avec capacité, installations et informations de réservation.',
    excerptEs: 'Directorio completo de los mejores lugares de conferencias de Marruecos con capacidad, instalaciones e información de reserva.',
    excerptAr: 'دليل شامل لأفضل أماكن المؤتمرات في المغرب مع السعة والمرافق ومعلومات الحجز.',
    readTime: '20 min',
    category: 'Venues',
    categoryFr: 'Lieux',
    categoryEs: 'Lugares',
    categoryAr: 'الأماكن',
    image: venuesMapImage
  },
  {
    slug: 'gulf-team-building',
    title: 'Morocco Team Building for Gulf Companies: Cultural Bridge Programs',
    titleFr: 'Team Building Maroc pour Entreprises du Golfe: Programmes Pont Culturel',
    titleEs: 'Team Building Marruecos para Empresas del Golfo: Programas Puente Cultural',
    titleAr: 'بناء الفريق في المغرب للشركات الخليجية: برامج الجسر الثقافي',
    excerpt: 'Specialized team building programs for Gulf companies in Morocco combining cultural affinity with professional development.',
    excerptFr: 'Programmes team building spécialisés pour entreprises du Golfe au Maroc combinant affinité culturelle et développement professionnel.',
    excerptEs: 'Programas especializados de team building para empresas del Golfo en Marruecos que combinan afinidad cultural con desarrollo profesional.',
    excerptAr: 'برامج بناء فريق متخصصة للشركات الخليجية في المغرب تجمع بين التقارب الثقافي والتطوير المهني.',
    readTime: '14 min',
    category: 'Regional Focus',
    categoryFr: 'Focus Régional',
    categoryEs: 'Enfoque Regional',
    categoryAr: 'التركيز الإقليمي',
    image: gulfTeamImage
  },
  {
    slug: 'spanish-corporate',
    title: 'Morocco Corporate Events for Spanish Companies: Proximity Advantage',
    titleFr: 'Événements d\'Entreprise Maroc pour Sociétés Espagnoles: Avantage Proximité',
    titleEs: 'Eventos Corporativos Marruecos para Empresas Españolas: Ventaja de Proximidad',
    titleAr: 'فعاليات شركاتية في المغرب للشركات الإسبانية: ميزة القرب',
    excerpt: 'Why Spanish companies choose Morocco for corporate events: 3-hour flight, cultural connections, and cost-effective solutions.',
    excerptFr: 'Pourquoi les entreprises espagnoles choisissent le Maroc pour événements d\'entreprise: 3h de vol, connexions culturelles et solutions rentables.',
    excerptEs: 'Por qué las empresas españolas eligen Marruecos para eventos corporativos: vuelo de 3 horas, conexiones culturales y soluciones rentables.',
    excerptAr: 'لماذا تختار الشركات الإسبانية المغرب للفعاليات الشركاتية: رحلة 3 ساعات وروابط ثقافية وحلول فعالة من حيث التكلفة.',
    readTime: '12 min',
    category: 'Regional Focus',
    categoryFr: 'Focus Régional',
    categoryEs: 'Enfoque Regional',
    categoryAr: 'التركيز الإقليمي',
    image: spanishCorporateImage
  }
];

// Get related articles based on tags/category similarity
export const getRelatedArticles = (currentSlug: string, count: number = 3): RelatedArticle[] => {
  const currentArticle = allArticles.find(a => a.slug === currentSlug);
  if (!currentArticle) return allArticles.slice(0, count);
  
  // Prioritize same category
  const sameCategory = allArticles.filter(
    a => a.slug !== currentSlug && a.category === currentArticle.category
  );
  
  // Get other articles
  const otherArticles = allArticles.filter(
    a => a.slug !== currentSlug && a.category !== currentArticle.category
  );
  
  // Combine and limit
  return [...sameCategory, ...otherArticles].slice(0, count);
};
