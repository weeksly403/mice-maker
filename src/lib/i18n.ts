export type Language = 'fr' | 'en' | 'es' | 'ar';

export const languages: Language[] = ['fr', 'en', 'es', 'ar'];

export const languageNames = {
  fr: 'Français',
  en: 'English', 
  es: 'Español',
  ar: 'العربية'
};

export const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    destinations: 'Destinations',
    services: 'Services',
    faq: 'FAQ',
    contact: 'Contact',
    blog: 'Blog',
    
    // Hero Section
    heroTitle: 'Événements d\'Entreprise au Maroc',
    heroSubtitle: 'Séminaires • Incentives • Conférences • Team-Building',
    heroDescription: 'Organisez vos événements d\'entreprise au Maroc avec nos experts MICE. Des séminaires à Marrakech aux incentives dans le Sahara.',
    getProposal: 'Devis Gratuit en 24h',
    whatsappContact: 'WhatsApp',
    
    // Benefits
    benefitsTitle: 'Pourquoi Choisir le Maroc ?',
    fastProposal: 'Devis Rapide',
    fastProposalDesc: 'Réponse garantie en 24h',
    trustedPartners: 'Partenaires de Confiance',
    trustedPartnersDesc: 'Réseau d\'hôtels et DMC certifiés',
    uniqueExperiences: 'Expériences Uniques',
    uniqueExperiencesDesc: 'Activités authentiques marocaines',
    bestPrice: 'Meilleur Prix',
    bestPriceDesc: 'Garantie du meilleur tarif',
    
    // Destinations
    destinationsTitle: 'Destinations MICE au Maroc',
    marrakech: 'Marrakech',
    casablanca: 'Casablanca',
    agadir: 'Agadir',
    fes: 'Fès',
    sahara: 'Sahara',
    
    // Services
    servicesTitle: 'Nos Services MICE',
    incentiveTravel: 'Voyages Incentive',
    teamBuilding: 'Team Building',
    corporateRetreats: 'Séminaires d\'Entreprise',
    conferences: 'Conférences',
    galaDinners: 'Dîners de Gala',
    
    // CTA
    readyToStart: 'Prêt à Organiser ?',
    contactUs: 'Contactez-nous maintenant pour votre devis gratuit en 24h',
    
    // Footer
    quickLinks: 'Liens Rapides',
    legalNotice: 'Mentions Légales',
    privacy: 'Confidentialité',
    followUs: 'Suivez-nous'
  },
  
  en: {
    // Navigation
    home: 'Home',
    destinations: 'Destinations',
    services: 'Services',
    faq: 'FAQ',
    contact: 'Contact',
    blog: 'Blog',
    
    // Hero Section
    heroTitle: 'Corporate Events in Morocco',
    heroSubtitle: 'Meetings • Incentives • Conferences • Team-Building',
    heroDescription: 'Organize your corporate events in Morocco with our MICE experts. From seminars in Marrakech to incentives in the Sahara.',
    getProposal: 'Free Proposal in 24h',
    whatsappContact: 'WhatsApp',
    
    // Benefits
    benefitsTitle: 'Why Choose Morocco?',
    fastProposal: 'Fast Proposal',
    fastProposalDesc: 'Guaranteed response in 24h',
    trustedPartners: 'Trusted Partners',
    trustedPartnersDesc: 'Network of certified hotels & DMCs',
    uniqueExperiences: 'Unique Experiences',
    uniqueExperiencesDesc: 'Authentic Moroccan activities',
    bestPrice: 'Best Price',
    bestPriceDesc: 'Best rate guarantee',
    
    // Destinations
    destinationsTitle: 'MICE Destinations in Morocco',
    marrakech: 'Marrakech',
    casablanca: 'Casablanca',
    agadir: 'Agadir',
    fes: 'Fes',
    sahara: 'Sahara',
    
    // Services
    servicesTitle: 'Our MICE Services',
    incentiveTravel: 'Incentive Travel',
    teamBuilding: 'Team Building',
    corporateRetreats: 'Corporate Retreats',
    conferences: 'Conferences',
    galaDinners: 'Gala Dinners',
    
    // CTA
    readyToStart: 'Ready to Start?',
    contactUs: 'Contact us now for your free proposal in 24h',
    
    // Footer
    quickLinks: 'Quick Links',
    legalNotice: 'Legal Notice',
    privacy: 'Privacy',
    followUs: 'Follow Us'
  },
  
  es: {
    // Navigation
    home: 'Inicio',
    destinations: 'Destinos',
    services: 'Servicios',
    faq: 'FAQ',
    contact: 'Contacto',
    blog: 'Blog',
    
    // Hero Section
    heroTitle: 'Eventos Corporativos en Marruecos',
    heroSubtitle: 'Reuniones • Incentivos • Conferencias • Team-Building',
    heroDescription: 'Organiza tus eventos corporativos en Marruecos con nuestros expertos MICE. Desde seminarios en Marrakech hasta incentivos en el Sahara.',
    getProposal: 'Propuesta Gratis en 24h',
    whatsappContact: 'WhatsApp',
    
    // Benefits
    benefitsTitle: '¿Por Qué Elegir Marruecos?',
    fastProposal: 'Propuesta Rápida',
    fastProposalDesc: 'Respuesta garantizada en 24h',
    trustedPartners: 'Socios de Confianza',
    trustedPartnersDesc: 'Red de hoteles y DMCs certificados',
    uniqueExperiences: 'Experiencias Únicas',
    uniqueExperiencesDesc: 'Actividades auténticas marroquíes',
    bestPrice: 'Mejor Precio',
    bestPriceDesc: 'Garantía del mejor precio',
    
    // Destinations
    destinationsTitle: 'Destinos MICE en Marruecos',
    marrakech: 'Marrakech',
    casablanca: 'Casablanca',
    agadir: 'Agadir',
    fes: 'Fez',
    sahara: 'Sahara',
    
    // Services
    servicesTitle: 'Nuestros Servicios MICE',
    incentiveTravel: 'Viajes de Incentivo',
    teamBuilding: 'Team Building',
    corporateRetreats: 'Retiros Corporativos',
    conferences: 'Conferencias',
    galaDinners: 'Cenas de Gala',
    
    // CTA
    readyToStart: '¿Listo para Empezar?',
    contactUs: 'Contáctanos ahora para tu propuesta gratuita en 24h',
    
    // Footer
    quickLinks: 'Enlaces Rápidos',
    legalNotice: 'Aviso Legal',
    privacy: 'Privacidad',
    followUs: 'Síguenos'
  },
  
  ar: {
    // Navigation
    home: 'الرئيسية',
    destinations: 'الوجهات',
    services: 'الخدمات',
    faq: 'الأسئلة الشائعة',
    contact: 'اتصل بنا',
    blog: 'المدونة',
    
    // Hero Section
    heroTitle: 'فعاليات الشركات في المغرب',
    heroSubtitle: 'اجتماعات • حوافز • مؤتمرات • بناء الفرق',
    heroDescription: 'نظّم فعاليات شركتك في المغرب مع خبرائنا في قطاع الفعاليات التجارية. من الندوات في مراكش إلى رحلات الحوافز في الصحراء.',
    getProposal: 'عرض مجاني في 24 ساعة',
    whatsappContact: 'واتساب',
    
    // Benefits
    benefitsTitle: 'لماذا اختيار المغرب؟',
    fastProposal: 'عرض سريع',
    fastProposalDesc: 'رد مضمون في 24 ساعة',
    trustedPartners: 'شركاء موثوقون',
    trustedPartnersDesc: 'شبكة من الفنادق وشركات الإدارة المعتمدة',
    uniqueExperiences: 'تجارب فريدة',
    uniqueExperiencesDesc: 'أنشطة مغربية أصيلة',
    bestPrice: 'أفضل سعر',
    bestPriceDesc: 'ضمان أفضل سعر',
    
    // Destinations
    destinationsTitle: 'وجهات الفعاليات التجارية في المغرب',
    marrakech: 'مراكش',
    casablanca: 'الدار البيضاء',
    agadir: 'أكادير',
    fes: 'فاس',
    sahara: 'الصحراء',
    
    // Services
    servicesTitle: 'خدماتنا للفعاليات التجارية',
    incentiveTravel: 'رحلات الحوافز',
    teamBuilding: 'بناء الفرق',
    corporateRetreats: 'الخلوات الشركاتية',
    conferences: 'المؤتمرات',
    galaDinners: 'العشاء الفاخر',
    
    // CTA
    readyToStart: 'مستعد للبدء؟',
    contactUs: 'اتصل بنا الآن للحصول على عرضك المجاني في 24 ساعة',
    
    // Footer
    quickLinks: 'روابط سريعة',
    legalNotice: 'الإشعار القانوني',
    privacy: 'الخصوصية',
    followUs: 'تابعنا'
  }
};

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};

export const getCurrentLanguage = (): Language => {
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  return languages.includes(firstSegment as Language) ? firstSegment as Language : 'en';
};

export const getLocalizedPath = (path: string, lang?: Language): string => {
  const currentLang = lang || getCurrentLanguage();
  if (currentLang === 'en') return path;
  return `/${currentLang}${path}`;
};