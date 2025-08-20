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
    followUs: 'Suivez-nous',

    // Page Titles & Descriptions
    destinationsPageTitle: 'Destinations MICE au Maroc',
    destinationsPageDesc: 'Découvrez les meilleures destinations pour vos événements d\'entreprise au Maroc',
    servicesPageTitle: 'Services MICE Professionnels',
    servicesPageDesc: 'Solutions complètes pour vos événements d\'entreprise au Maroc',
    faqPageTitle: 'Questions Fréquentes',
    faqPageDesc: 'Toutes les réponses à vos questions sur l\'organisation d\'événements au Maroc',
    contactPageTitle: 'Contactez-Nous',
    contactPageDesc: 'Obtenez votre devis personnalisé en 24h pour votre événement au Maroc',
    blogPageTitle: 'Blog MICE Maroc',
    blogPageDesc: 'Conseils et tendances pour vos événements d\'entreprise au Maroc',

    // Destinations
    marrakechDesc: 'La capitale des incentives avec ses palais, jardins et atlas',
    casablancaDesc: 'Centre économique moderne avec des infrastructures de classe mondiale',
    agadirDesc: 'Station balnéaire parfaite pour team building et séminaires detente',
    fesDesc: 'Ville impériale authentique pour des expériences culturelles uniques',
    saharaDesc: 'Expérience désertique inoubliable pour incentives exceptionnels',
    
    marrakechHighlight1: 'Plus de 50 hôtels 4-5 étoiles',
    marrakechHighlight2: 'Palais et riads pour événements exclusifs',
    marrakechHighlight3: 'Activités team building dans l\'Atlas',
    
    casablancaHighlight1: 'Centre de congrès international',
    casablancaHighlight2: 'Facilité d\'accès avec l\'aéroport Mohammed V',
    casablancaHighlight3: 'Hôtels business de luxe',
    
    agadirHighlight1: 'Plages et complexes resort',
    agadirHighlight2: 'Activités nautiques et golf',
    agadirHighlight3: 'Climat idéal toute l\'année',
    
    fesHighlight1: 'Médina UNESCO patrimoine mondial',
    fesHighlight2: 'Artisanat traditionnel marocain',
    fesHighlight3: 'Expériences culturelles authentiques',
    
    saharaHighlight1: 'Camps de luxe dans les dunes',
    saharaHighlight2: 'Expéditions 4x4 et méharées',
    saharaHighlight3: 'Couchers de soleil spectaculaires',

    venues: 'lieux',
    upTo: 'Jusqu\'à',
    guests: 'invités',
    highlights: 'Points forts',
    exploreDestination: 'Explorer',
    getQuote: 'Devis',
    planYourEvent: 'Planifiez Votre Événement',
    planYourEventDesc: 'Notre équipe d\'experts vous accompagne dans la réalisation de votre projet',

    // Services
    incentiveTravelDesc: 'Voyages de motivation pour récompenser vos équipes avec des expériences uniques au Maroc',
    teamBuildingDesc: 'Activités de cohésion d\'équipe dans des cadres exceptionnels, du désert aux montagnes',
    corporateRetreatsDesc: 'Séminaires d\'entreprise dans des lieux inspirants pour stimuler la créativité',
    conferencesDesc: 'Organisation complète de conférences dans des centres modernes et équipés',
    galaDinnersDesc: 'Soirées de gala mémorables dans des palais et lieux d\'exception',

    incentiveFeature1: 'Destinations exclusives et authentiques',
    incentiveFeature2: 'Activités sur mesure et expériences VIP',
    incentiveFeature3: 'Logistique complète et transport premium',
    incentiveFeature4: 'Animation culturelle marocaine',

    teamBuildingFeature1: 'Activités outdoor dans l\'Atlas et le désert',
    teamBuildingFeature2: 'Challenges et jeux de coopération',
    teamBuildingFeature3: 'Ateliers artisanat et cuisine marocaine',
    teamBuildingFeature4: 'Encadrement par des professionnels',

    corporateRetreatsFeature1: 'Lieux isolés et inspirants',
    corporateRetreatsFeature2: 'Salles de réunion équipées',
    corporateRetreatsFeature3: 'Activités détente et bien-être',
    corporateRetreatsFeature4: 'Restauration gastronomique',

    conferencesFeature1: 'Centres de congrès modernes',
    conferencesFeature2: 'Équipement audiovisuel de pointe',
    conferencesFeature3: 'Services de traduction simultanée',
    conferencesFeature4: 'Support technique dédié',

    galaDinnersFeature1: 'Palais et riads d\'exception',
    galaDinnersFeature2: 'Menus gastronomiques personnalisés',
    galaDinnersFeature3: 'Spectacles et animations marocaines',
    galaDinnersFeature4: 'Décoration florale et lumineuse',

    learnMore: 'En Savoir Plus',
    ourProcess: 'Notre Processus',
    ourProcessDesc: 'Une approche structurée pour garantir le succès de votre événement',
    
    processStep1Title: 'Consultation',
    processStep1Desc: 'Analyse de vos besoins et objectifs',
    processStep2Title: 'Proposition',
    processStep2Desc: 'Devis détaillé sous 24h',
    processStep3Title: 'Organisation',
    processStep3Desc: 'Planification et coordination',
    processStep4Title: 'Réalisation',
    processStep4Desc: 'Exécution parfaite sur le terrain',

    readyToStartDesc: 'Contactez nos experts pour un devis personnalisé gratuit',

    // FAQ
    generalQuestions: 'Questions Générales',
    planningQuestions: 'Planification d\'Événements',
    logisticsQuestions: 'Logistique et Transport',

    faq1Q: 'Pourquoi choisir le Maroc pour un séminaire d\'entreprise ?',
    faq1A: 'Le Maroc offre un cadre exceptionnel alliant professionnalisme et dépaysement, avec des infrastructures modernes, une hospitalité légendaire et une richesse culturelle unique.',

    faq2Q: 'Combien coûte un événement d\'entreprise à Marrakech ?',
    faq2A: 'Les coûts varient selon la taille du groupe, la durée et les prestations. Comptez entre 200-800€ par personne/jour pour un événement complet avec hébergement 4-5 étoiles.',

    faq3Q: 'Quelles sont les meilleures périodes pour organiser un événement au Maroc ?',
    faq3A: 'Les périodes idéales sont octobre-décembre et mars-mai, avec des températures agréables. L\'hiver (janvier-février) convient aussi, particulièrement dans le Sud.',

    faq4Q: 'Le Maroc est-il accessible pour les groupes européens ?',
    faq4A: 'Très accessible avec des vols directs depuis toute l\'Europe (2-4h de vol), pas de décalage horaire significatif et des formalités simples (passeport suffisant).',

    faq5Q: 'Combien de temps faut-il pour organiser un séminaire au Maroc ?',
    faq5A: 'Idéalement 2-3 mois pour un événement standard, 6 mois pour un grand congrès. Nous pouvons aussi organiser des événements en urgence sous 3 semaines.',

    faq6Q: 'Proposez-vous des activités team building authentiques ?',
    faq6A: 'Oui, nous organisons des activités uniques : cuisine marocaine, artisanat traditionnel, rallyes 4x4 dans le désert, randonnées Atlas, soirées berbères.',

    faq7Q: 'Comment gérez-vous les contraintes alimentaires et religieuses ?',
    faq7A: 'Nous nous adaptons à tous les régimes : halal, casher, végétarien, allergies. Le Maroc respecte naturellement les contraintes halal.',

    faq8Q: 'Quels sont vos tarifs et conditions de paiement ?',
    faq8A: 'Devis gratuit sous 24h. Acompte de 30% à la réservation, solde 30 jours avant l\'événement. Nous acceptons virements et cartes professionnelles.',

    faq9Q: 'Prenez-vous en charge les transferts et transports ?',
    faq9A: 'Oui, transport complet : accueil aéroport, transferts hôtels, véhicules pour activités, autocar de luxe pour groupes importants.',

    faq10Q: 'Proposez-vous une assistance 24h/24 pendant l\'événement ?',
    faq10A: 'Absolument. Un coordinateur dédié est présent pendant tout l\'événement avec assistance 24h/24 et numéro d\'urgence.',

    faq11Q: 'Comment garantissez-vous la qualité des prestataires ?',
    faq11A: 'Tous nos partenaires sont certifiés et audités régulièrement. Nous travaillons uniquement avec des hôtels 4-5 étoiles et DMC agréés.',

    faq12Q: 'Que se passe-t-il en cas d\'annulation ?',
    faq12A: 'Conditions d\'annulation flexibles selon les délais. Nous recommandons une assurance annulation pour les gros événements.',

    stillHaveQuestions: 'Encore des Questions ?',
    stillHaveQuestionsDesc: 'Notre équipe est là pour vous aider',

    whatsappSupport: 'Support WhatsApp',
    whatsappSupportDesc: 'Réponse immédiate à vos questions',
    phoneSupport: 'Support Téléphonique',
    phoneSupportDesc: 'Appelez-nous aux heures ouvrables',
    emailSupport: 'Support Email',
    emailSupportDesc: 'Réponse sous 2h en moyenne',

    chatNow: 'Chatter',
    callNow: 'Appeler',
    sendEmail: 'Email',

    // Contact
    getInTouch: 'Contactez-Nous',
    getInTouchDesc: 'Notre équipe d\'experts MICE vous accompagne dans la réalisation de votre projet',
    ourOffice: 'Notre Bureau',
    officeAddress: 'Gueliz, Marrakech 40000',
    phoneNumber: 'Téléphone',
    emailAddress: 'Email',
    businessHours: 'Heures d\'Ouverture',
    responseTime24h: 'Réponse sous 24h garantie',
    mondayToFriday: 'Lundi au Vendredi',
    whatsappContactDesc: 'Réponse immédiate pour vos questions urgentes',
    chatOnWhatsapp: 'Chatter sur WhatsApp',

    requestProposal: 'Demande de Devis',
    companyName: 'Nom de l\'Entreprise',
    companyNamePlaceholder: 'Votre société',
    contactName: 'Nom du Contact',
    contactNamePlaceholder: 'Votre nom',
    emailPlaceholder: 'votre@email.com',
    phonePlaceholder: '+33 X XX XX XX XX',
    eventType: 'Type d\'Événement',
    selectEventType: 'Sélectionnez un type',
    groupSize: 'Taille du Groupe',
    selectGroupSize: 'Nombre de participants',
    preferredCity: 'Ville Préférée',
    selectCity: 'Choisissez une destination',
    people: 'personnes',
    preferredDates: 'Dates Souhaitées',
    datesPlaceholder: 'Ex: 15-18 juin 2024',
    estimatedBudget: 'Budget Estimé',
    selectBudget: 'Fourchette budgétaire',
    under: 'Moins de',
    over: 'Plus de',
    additionalRequirements: 'Exigences Particulières',
    messagePlaceholder: 'Décrivez vos besoins spécifiques...',
    sendProposalRequest: 'Envoyer la Demande',
    formDisclaimer: 'Vos données sont protégées. Réponse garantie sous 24h.',

    // Blog
    venuesCategory: 'Lieux',
    incentives: 'Incentives',
    corporate: 'Corporate',
    retreats: 'Séminaires',
    allCategories: 'Toutes les Catégories',
    featuredPosts: 'Articles à la Une',
    latestArticles: 'Derniers Articles',
    featured: 'À la Une',
    readMore: 'Lire la Suite',
    stayUpdated: 'Restez Informé',
    stayUpdatedDesc: 'Recevez nos derniers conseils et tendances MICE',
    subscribe: 'S\'abonner',

    blogPost1Title: 'Top 10 des salles de conférence au Maroc',
    blogPost1Excerpt: 'Découvrez les meilleures salles de conférence du Maroc, des centres de congrès modernes aux palais historiques.',
    blogPost2Title: 'Pourquoi Marrakech est la capitale des incentives',
    blogPost2Excerpt: 'Analyse complète des atouts de Marrakech pour l\'organisation d\'incentives mémorables.',
    blogPost3Title: 'Meilleures activités team building à Agadir',
    blogPost3Excerpt: 'Guide complet des activités de cohésion d\'équipe sur la côte atlantique marocaine.',
    blogPost4Title: 'Voyage corporatif : Marruecos como destino para empresas españolas',
    blogPost4Excerpt: 'Pourquoi le Maroc attire de plus en plus les entreprises espagnoles pour leurs événements.',
    blogPost5Title: 'أفضل أنشطة بناء الفرق في المغرب للشركات الخليجية',
    blogPost5Excerpt: 'Guide spécialisé pour les entreprises du Golfe souhaitant organiser des activités au Maroc.',
    blogPost6Title: 'Retraites corporatives dans le désert du Sahara',
    blogPost6Excerpt: 'Comment organiser des séminaires d\'exception dans l\'environnement unique du désert marocain.'
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
    followUs: 'Follow Us',

    // Page Titles & Descriptions
    destinationsPageTitle: 'MICE Destinations in Morocco',
    destinationsPageDesc: 'Discover the best destinations for your corporate events in Morocco',
    servicesPageTitle: 'Professional MICE Services',
    servicesPageDesc: 'Complete solutions for your corporate events in Morocco',
    faqPageTitle: 'Frequently Asked Questions',
    faqPageDesc: 'All answers to your questions about organizing events in Morocco',
    contactPageTitle: 'Contact Us',
    contactPageDesc: 'Get your personalized quote in 24h for your event in Morocco',
    blogPageTitle: 'Morocco MICE Blog',
    blogPageDesc: 'Tips and trends for your corporate events in Morocco',

    // Destinations
    marrakechDesc: 'The incentive capital with its palaces, gardens and Atlas mountains',
    casablancaDesc: 'Modern economic center with world-class infrastructure',
    agadirDesc: 'Perfect seaside resort for team building and relaxing seminars',
    fesDesc: 'Authentic imperial city for unique cultural experiences',
    saharaDesc: 'Unforgettable desert experience for exceptional incentives',
    
    marrakechHighlight1: 'Over 50 luxury 4-5 star hotels',
    marrakechHighlight2: 'Palaces and riads for exclusive events',
    marrakechHighlight3: 'Atlas team building activities',
    
    casablancaHighlight1: 'International congress center',
    casablancaHighlight2: 'Easy access via Mohammed V airport',
    casablancaHighlight3: 'Luxury business hotels',
    
    agadirHighlight1: 'Beaches and resort complexes',
    agadirHighlight2: 'Water sports and golf activities',
    agadirHighlight3: 'Ideal climate year-round',
    
    fesHighlight1: 'UNESCO World Heritage medina',
    fesHighlight2: 'Traditional Moroccan craftsmanship',
    fesHighlight3: 'Authentic cultural experiences',
    
    saharaHighlight1: 'Luxury camps in the dunes',
    saharaHighlight2: '4x4 expeditions and camel treks',
    saharaHighlight3: 'Spectacular sunsets',

    venues: 'venues',
    upTo: 'Up to',
    guests: 'guests',
    highlights: 'Highlights',
    exploreDestination: 'Explore',
    getQuote: 'Get Quote',
    planYourEvent: 'Plan Your Event',
    planYourEventDesc: 'Our team of experts accompanies you in realizing your project',

    // Services
    incentiveTravelDesc: 'Motivation trips to reward your teams with unique experiences in Morocco',
    teamBuildingDesc: 'Team building activities in exceptional settings, from desert to mountains',
    corporateRetreatsDesc: 'Corporate seminars in inspiring locations to stimulate creativity',
    conferencesDesc: 'Complete conference organization in modern and equipped centers',
    galaDinnersDesc: 'Memorable gala evenings in palaces and exceptional venues',

    incentiveFeature1: 'Exclusive and authentic destinations',
    incentiveFeature2: 'Tailor-made activities and VIP experiences',
    incentiveFeature3: 'Complete logistics and premium transport',
    incentiveFeature4: 'Moroccan cultural entertainment',

    teamBuildingFeature1: 'Outdoor activities in Atlas and desert',
    teamBuildingFeature2: 'Challenges and cooperation games',
    teamBuildingFeature3: 'Moroccan crafts and cooking workshops',
    teamBuildingFeature4: 'Professional supervision',

    corporateRetreatsFeature1: 'Isolated and inspiring locations',
    corporateRetreatsFeature2: 'Equipped meeting rooms',
    corporateRetreatsFeature3: 'Relaxation and wellness activities',
    corporateRetreatsFeature4: 'Gourmet dining',

    conferencesFeature1: 'Modern congress centers',
    conferencesFeature2: 'State-of-the-art audiovisual equipment',
    conferencesFeature3: 'Simultaneous translation services',
    conferencesFeature4: 'Dedicated technical support',

    galaDinnersFeature1: 'Exceptional palaces and riads',
    galaDinnersFeature2: 'Personalized gourmet menus',
    galaDinnersFeature3: 'Moroccan shows and entertainment',
    galaDinnersFeature4: 'Floral and lighting decoration',

    learnMore: 'Learn More',
    ourProcess: 'Our Process',
    ourProcessDesc: 'A structured approach to guarantee the success of your event',
    
    processStep1Title: 'Consultation',
    processStep1Desc: 'Analysis of your needs and objectives',
    processStep2Title: 'Proposal',
    processStep2Desc: 'Detailed quote within 24h',
    processStep3Title: 'Organization',
    processStep3Desc: 'Planning and coordination',
    processStep4Title: 'Execution',
    processStep4Desc: 'Perfect execution on the ground',

    readyToStartDesc: 'Contact our experts for a free personalized quote',

    // FAQ
    generalQuestions: 'General Questions',
    planningQuestions: 'Event Planning',
    logisticsQuestions: 'Logistics and Transport',

    faq1Q: 'Why choose Morocco for corporate retreats?',
    faq1A: 'Morocco offers an exceptional setting combining professionalism and change of scenery, with modern infrastructure, legendary hospitality and unique cultural richness.',

    faq2Q: 'How much does a corporate event in Marrakech cost?',
    faq2A: 'Costs vary according to group size, duration and services. Count between €200-800 per person/day for a complete event with 4-5 star accommodation.',

    faq3Q: 'What are the best times to organize an event in Morocco?',
    faq3A: 'Ideal periods are October-December and March-May, with pleasant temperatures. Winter (January-February) is also suitable, particularly in the South.',

    faq4Q: 'Is Morocco accessible for European groups?',
    faq4A: 'Very accessible with direct flights from all over Europe (2-4h flight), no significant time difference and simple formalities (passport sufficient).',

    faq5Q: 'How long does it take to organize a seminar in Morocco?',
    faq5A: 'Ideally 2-3 months for a standard event, 6 months for a large congress. We can also organize urgent events within 3 weeks.',

    faq6Q: 'Do you offer authentic team building activities?',
    faq6A: 'Yes, we organize unique activities: Moroccan cooking, traditional crafts, 4x4 desert rallies, Atlas hiking, Berber evenings.',

    faq7Q: 'How do you handle dietary and religious constraints?',
    faq7A: 'We adapt to all diets: halal, kosher, vegetarian, allergies. Morocco naturally respects halal constraints.',

    faq8Q: 'What are your rates and payment terms?',
    faq8A: 'Free quote within 24h. 30% deposit upon booking, balance 30 days before the event. We accept transfers and business cards.',

    faq9Q: 'Do you handle transfers and transport?',
    faq9A: 'Yes, complete transport: airport welcome, hotel transfers, vehicles for activities, luxury coach for large groups.',

    faq10Q: 'Do you offer 24/7 assistance during the event?',
    faq10A: 'Absolutely. A dedicated coordinator is present throughout the event with 24/7 assistance and emergency number.',

    faq11Q: 'How do you guarantee the quality of service providers?',
    faq11A: 'All our partners are certified and regularly audited. We work only with 4-5 star hotels and approved DMCs.',

    faq12Q: 'What happens in case of cancellation?',
    faq12A: 'Flexible cancellation conditions according to deadlines. We recommend cancellation insurance for large events.',

    stillHaveQuestions: 'Still Have Questions?',
    stillHaveQuestionsDesc: 'Our team is here to help you',

    whatsappSupport: 'WhatsApp Support',
    whatsappSupportDesc: 'Immediate response to your questions',
    phoneSupport: 'Phone Support',
    phoneSupportDesc: 'Call us during business hours',
    emailSupport: 'Email Support',
    emailSupportDesc: 'Response within 2h on average',

    chatNow: 'Chat Now',
    callNow: 'Call Now',
    sendEmail: 'Send Email',

    // Contact
    getInTouch: 'Get In Touch',
    getInTouchDesc: 'Our team of MICE experts accompanies you in realizing your project',
    ourOffice: 'Our Office',
    officeAddress: 'Gueliz, Marrakech 40000',
    phoneNumber: 'Phone Number',
    emailAddress: 'Email Address',
    businessHours: 'Business Hours',
    responseTime24h: 'Response within 24h guaranteed',
    mondayToFriday: 'Monday to Friday',
    whatsappContactDesc: 'Immediate response for your urgent questions',
    chatOnWhatsapp: 'Chat on WhatsApp',

    requestProposal: 'Request Proposal',
    companyName: 'Company Name',
    companyNamePlaceholder: 'Your company',
    contactName: 'Contact Name',
    contactNamePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    phonePlaceholder: '+44 XXX XXX XXXX',
    eventType: 'Event Type',
    selectEventType: 'Select a type',
    groupSize: 'Group Size',
    selectGroupSize: 'Number of participants',
    preferredCity: 'Preferred City',
    selectCity: 'Choose a destination',
    people: 'people',
    preferredDates: 'Preferred Dates',
    datesPlaceholder: 'e.g. June 15-18, 2024',
    estimatedBudget: 'Estimated Budget',
    selectBudget: 'Budget range',
    under: 'Under',
    over: 'Over',
    additionalRequirements: 'Additional Requirements',
    messagePlaceholder: 'Describe your specific needs...',
    sendProposalRequest: 'Send Request',
    formDisclaimer: 'Your data is protected. Response guaranteed within 24h.',

    // Blog
    venuesCategory: 'Venues',
    incentives: 'Incentives',
    corporate: 'Corporate',
    retreats: 'Retreats',
    allCategories: 'All Categories',
    featuredPosts: 'Featured Posts',
    latestArticles: 'Latest Articles',
    featured: 'Featured',
    readMore: 'Read More',
    stayUpdated: 'Stay Updated',
    stayUpdatedDesc: 'Receive our latest MICE tips and trends',
    subscribe: 'Subscribe',

    blogPost1Title: 'Top 10 Conference Venues in Morocco',
    blogPost1Excerpt: 'Discover the best conference venues in Morocco, from modern congress centers to historic palaces.',
    blogPost2Title: 'Why Marrakech is the Incentive Capital',
    blogPost2Excerpt: 'Complete analysis of Marrakech\'s assets for organizing memorable incentives.',
    blogPost3Title: 'Best Team Building Activities in Agadir',
    blogPost3Excerpt: 'Complete guide to team building activities on the Moroccan Atlantic coast.',
    blogPost4Title: 'Corporate Travel: Morocco as Destination for Spanish Companies',
    blogPost4Excerpt: 'Why Morocco attracts more and more Spanish companies for their events.',
    blogPost5Title: 'Best Team Building Activities in Morocco for Gulf Companies',
    blogPost5Excerpt: 'Specialized guide for Gulf companies wishing to organize activities in Morocco.',
    blogPost6Title: 'Corporate Retreats in the Sahara Desert',
    blogPost6Excerpt: 'How to organize exceptional seminars in the unique environment of the Moroccan desert.'
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