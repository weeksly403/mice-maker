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
    blogPageTitle: 'Blog MICE Maroc - Séminaire Entreprise Maroc',
    blogPageDesc: 'Conseils d\'experts sur organisation conférence Maroc, incentive Marrakech et événements d\'entreprise Maroc',
    featuredPosts: 'Articles Vedettes',
    latestArticles: 'Derniers Articles', 
    readMore: 'Lire Plus',
    backToBlog: 'Retour au Blog',
    stayUpdated: 'Restez Informé',
    stayUpdatedDesc: 'Recevez les dernières actualités sur les voyages d\'affaires et événements au Maroc',
    emailPlaceholder: 'Votre email',
    subscribe: 'S\'abonner',
    
    // Blog posts with SEO keywords
    blogPost1Title: 'Top 10 des Lieux de Conférence au Maroc pour Séminaires Entreprise',
    blogPost1Excerpt: 'Découvrez les meilleurs lieux pour organisation conférence Maroc alliant installations modernes et hospitalité marocaine authentique.',
    blogPost2Title: 'Pourquoi Marrakech est la Capitale des Voyages Incentive en Afrique du Nord', 
    blogPost2Excerpt: 'Explorez comment Marrakech est devenue la destination de choix pour les programmes incentive Marrakech et voyage entreprise Marrakech.',
    blogPost3Title: 'Meilleures Activités Team Building Maroc à Agadir pour Groupes d\'Entreprise',
    blogPost3Excerpt: 'Des activités de plage aux aventures du désert, découvrez des expériences team building Maroc uniques à Agadir.',
    blogPost4Title: 'Guide Voyage d\'Affaires: Le Maroc comme Destination pour Entreprises Espagnoles',
    blogPost4Excerpt: 'Pourquoi les entreprises espagnoles choisissent le Maroc pour leurs événements d\'entreprise Maroc et séminaires.',
    blogPost5Title: 'Team Building au Maroc: Destination Parfaite pour Entreprises du Golfe',
    blogPost5Excerpt: 'Comment la proximité culturelle du Maroc avec le Golfe en fait un lieu idéal pour événements d\'entreprise Maroc.',
    blogPost6Title: 'Retraites d\'Entreprise dans le Sahara: Expériences Uniques pour Équipes de Direction',
    blogPost6Excerpt: 'Transformez votre retraite de leadership avec des expériences inoubliables dans le désert du Sahara marocain.',
    blogPost7Title: 'Guide Complet pour Organiser un Séminaire à Marrakech Réussi',
    blogPost7Excerpt: 'Planifiez votre prochain séminaire à Marrakech facilement ! Découvrez les lieux de prestige, expériences culturelles riches et conseils de planification essentiels.',
    
    // New Dialog & Form translations
    quoteSent: 'Demande Envoyée',
    quoteSentDesc: 'Votre demande de devis a été envoyée avec succès. Nous vous répondrons dans les 24h.',
    fullName: 'Nom Complet',
    fullNamePlaceholder: 'Votre nom complet',
    contactNamePlaceholder: 'Nom du contact principal',
    phonePlaceholder: '+33 1 23 45 67 89',
    selectEventType: 'Sélectionner le type d\'événement',
    selectGroupSize: 'Sélectionner la taille du groupe',
    people: 'personnes',
    preferredCity: 'Ville Préférée',
    selectCity: 'Sélectionner une ville',
    datesPlaceholder: 'Ex: 15-18 Mars 2024',
    estimatedBudget: 'Budget Estimé',
    selectBudget: 'Sélectionner un budget',
    under: 'Moins de',
    over: 'Plus de',
    additionalRequirements: 'Exigences Supplémentaires',
    sendProposalRequest: 'Envoyer la Demande de Devis',
    freeConsultation: 'Consultation Gratuite',
    scheduleCall: 'Planifier un Appel',
    callScheduled: 'Appel Planifié',
    callScheduledDesc: 'Votre appel a été planifié avec succès. Nous vous contacterons bientôt.',
    timezone: 'Fuseau Horaire',
    selectTimezone: 'Sélectionner votre fuseau horaire',
    preferredTime: 'Heure Préférée',
    selectTime: 'Sélectionner une heure',
    callReason: 'Raison de l\'Appel',
    selectCallReason: 'Sélectionner la raison',
    getQuote: 'Obtenir un Devis',
    venueSelection: 'Sélection de Lieu',
    eventPlanning: 'Planification d\'Événement',
    partnership: 'Partenariat',
    other: 'Autre',
    additionalNotes: 'Notes Supplémentaires',
    callNotesPlaceholder: 'Partagez des détails supplémentaires...',
    whatToExpect: 'À Quoi S\'Attendre',
    callExpectation1: 'Consultation gratuite de 30 minutes',
    callExpectation2: 'Analyse de vos besoins spécifiques',
    callExpectation3: 'Recommandations personnalisées',
    callExpectation4: 'Devis détaillé dans les 24h',
    scheduleMyCall: 'Planifier Mon Appel',
    callDisclaimer: 'Nous vous contacterons à l\'heure convenue. Aucun frais ne sera facturé pour cette consultation.',
    caseStudy: 'Étude de Cas',
    duration: 'Durée',
    participants: 'Participants',
    location: 'Lieu',
    projectOverview: 'Aperçu du Projet',
    keyHighlights: 'Points Forts Clés',
    resultsMetrics: 'Résultats et Métriques',
    clientSatisfaction: 'Satisfaction Client',
    attendanceRate: 'Taux de Participation',
    venueRating: 'Note du Lieu',
    costSavings: 'Économies Réalisées',
    delegates: 'Délégués',
    countries: 'Pays',
    satisfaction: 'Satisfaction',
    setupTime: 'Temps d\'Installation',
    teamEngagement: 'Engagement de l\'Équipe',
    goalAchievement: 'Atteinte des Objectifs',
    activitiesCompleted: 'Activités Complétées',
    overallRating: 'Note Globale',
    inspiredByThisCase: 'Inspiré par cette Étude de Cas ?',
    inspiredByThisCaseDesc: 'Discutons de votre projet et voyons comment nous pouvons créer une expérience similaire.',
    discussYourProject: 'Discuter de Votre Projet',
    chatNow: 'Chatter Maintenant',
    callNow: 'Appeler Maintenant',
    sendEmail: 'Envoyer un Email',
    chatOnWhatsapp: 'Chatter sur WhatsApp',

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

    destinationVenues: 'lieux',
    upTo: 'Jusqu\'à',
    guests: 'invités',
    highlights: 'Points forts',
    exploreDestination: 'Explorer',
    getQuoteShort: 'Devis',
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

    chatNowShort: 'Chatter',
    callNowShort: 'Appeler',
    sendEmailShort: 'Email',

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
    chatOnWhatsappContact: 'Chatter sur WhatsApp',

    requestProposal: 'Demande de Devis',
    companyName: 'Nom de l\'Entreprise',
    companyNamePlaceholder: 'Votre société',
    contactName: 'Nom du Contact',
    contactNameFormPlaceholder: 'Votre nom',
    contactFormEmailPlaceholder: 'votre@email.com',
    phoneContact: '+33 X XX XX XX XX',
    eventType: 'Type d\'Événement',
    selectEventTypeForm: 'Sélectionnez un type',
    groupSize: 'Taille du Groupe',
    selectGroupSizeForm: 'Nombre de participants',
    preferredCityForm: 'Ville Préférée',
    selectCityForm: 'Choisissez une destination',
    peopleCount: 'personnes',
    preferredDates: 'Dates Souhaitées',
    datesPlaceholderForm: 'Ex: 15-18 juin 2024',
    estimatedBudgetForm: 'Budget Estimé',
    selectBudgetForm: 'Fourchette budgétaire',
    underBudget: 'Moins de',
    overBudget: 'Plus de',
    additionalRequirementsForm: 'Exigences Particulières',
    messagePlaceholderForm: 'Décrivez vos besoins spécifiques...',
    sendProposalRequestForm: 'Envoyer la Demande',
    formDisclaimer: 'Vos données sont protégées. Réponse garantie sous 24h.',

    // Blog categories
    venues: 'Lieux',
    incentives: 'Incentives', 
    corporate: 'Corporate',
    retreats: 'Séminaires',
    allCategories: 'Toutes les Catégories',
    featured: 'À la Une'
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
    blogPageTitle: 'Morocco MICE Blog - Corporate Retreat Morocco',
    blogPageDesc: 'Expert insights on conference venues Morocco, team building Marrakech, and MICE Morocco 2025 solutions',
    featuredPosts: 'Featured Articles',
    latestArticles: 'Latest Articles',
    readMore: 'Read More', 
    backToBlog: 'Back to Blog',
    stayUpdated: 'Stay Updated',
    stayUpdatedDesc: 'Get the latest insights on corporate travel and events in Morocco',
    emailPlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
    
    // Blog posts with SEO keywords
    blogPost1Title: 'Top 10 Conference Venues Morocco for Corporate Events 2025',
    blogPost1Excerpt: 'Discover the best conference venues Morocco that combine modern facilities with authentic Moroccan hospitality for successful business gatherings.',
    blogPost2Title: 'Why Marrakech is the Incentive Travel Capital of North Africa',
    blogPost2Excerpt: 'Explore how team building Marrakech has become the premier destination for incentive trip Morocco and corporate rewards programs.',
    blogPost3Title: 'Best Team Building Activities in Agadir for Corporate Groups',
    blogPost3Excerpt: 'From beach activities to desert adventures, discover unique team building Marrakech experiences that strengthen corporate teams.',
    blogPost4Title: 'Corporate Travel Guide: Morocco as Destination for Spanish Companies',
    blogPost4Excerpt: 'Why Spanish companies choose Morocco for their business events Morocco and corporate retreat Morocco programs.',
    blogPost5Title: 'Team Building Morocco: Perfect Destination for Gulf Companies',
    blogPost5Excerpt: 'How Morocco\'s cultural proximity to the Gulf makes it ideal for MICE Morocco regional corporate programs.',
    blogPost6Title: 'Sahara Desert Corporate Retreats: Unique Experiences for Leadership Teams',
    blogPost6Excerpt: 'Transform your corporate retreat Morocco with unforgettable experiences in Morocco\'s Sahara Desert combining luxury and team building.',
    blogPost7Title: 'Top Tips for a Successful Séminaire à Marrakech',
    blogPost7Excerpt: 'Plan your next séminaire à Marrakech with ease! Discover luxury venues, rich cultural experiences, and essential planning tips for an unforgettable event.',

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

    destinationVenues: 'venues',
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
    contactFormEmailPlaceholder: 'your@email.com',
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

    // Blog categories
    venues: 'Venues',
    incentives: 'Incentives',
    corporate: 'Corporate', 
    retreats: 'Retreats',
    allCategories: 'All Categories',
    featured: 'Featured',

    // New Homepage Sections
    // Morocco as MICE Destination
    moroccoMiceTitle: 'Morocco: Your Premium MICE Destination',
    moroccoMiceStory: 'Discover why international corporations choose Morocco for their most important events. Just 3 hours from Europe, Morocco combines world-class infrastructure with exotic authenticity, offering your teams an inspiring backdrop for conferences, incentives and retreats.',
    moroccoMiceHighlight1: '300+ direct flights weekly from Europe & Gulf',
    moroccoMiceHighlight2: 'Modern 5-star hotels with conference facilities',
    moroccoMiceHighlight3: 'Rich culture and authentic experiences',
    moroccoMiceHighlight4: 'Cost-effective compared to European destinations',
    discoverMorocco: 'Discover Morocco',

    // Featured Destinations Enhanced
    destinationMarrakechDesc: 'Imperial city, luxury resorts, Atlas backdrop',
    destinationCasablancaDesc: 'Business hub, modern venues, exhibitions',
    destinationAgadirDesc: 'Coastal retreats, golf, beach activities',
    destinationFesDesc: 'Cultural heritage, authentic experiences',
    destinationSaharaDesc: 'Desert camps, adventure team building',

    // Services Deep Dive
    servicesDeepDiveTitle: 'What We Organize for You',
    servicesDeepDiveDesc: 'From intimate board meetings to large-scale conferences, we handle every detail of your corporate event in Morocco.',

    // ROI Value Section
    roiTitle: 'Why Choose Our MICE Services?',
    roiSubtitle: 'Maximize impact while optimizing your budget',
    roiSaveTime: 'Save Time',
    roiSaveTimeDesc: 'Single point of contact for all suppliers and logistics',
    roiSaveMoney: 'Save Money', 
    roiSaveMoneyDesc: 'Bulk rates and direct partnerships reduce costs by 20-30%',
    roiMaximizeImpact: 'Maximize Impact',
    roiMaximizeImpactDesc: 'Unique experiences that motivate and inspire your teams',
    roiOptimization: 'Event budget optimization specialist',

    // Testimonials & Social Proof
    testimonialsTitle: 'Trusted by Leading Companies',
    testimonialsSubtitle: 'Over 500 successful corporate events organized',
    testimonial1: '"Outstanding organization for our 200-person conference in Marrakech. Every detail was perfect."',
    testimonial1Author: 'Sarah Johnson, Event Director',
    testimonial1Company: 'Fortune 500 Company',
    clientLogos: 'Trusted by European & Gulf companies',

    // Case Studies
    caseStudiesTitle: 'Success Stories',
    caseStudiesSubtitle: 'Recent corporate events we\'ve organized',
    
    caseStudy1Title: 'Marrakech Incentive - 80 Participants',
    caseStudy1Desc: 'Luxury desert gala dinner, Atlas excursions, traditional spa experiences',
    caseStudy1Metrics: '95% satisfaction rate, 30% cost savings vs Europe',
    
    caseStudy2Title: 'Casablanca Conference - 300 Attendees', 
    caseStudy2Desc: 'International exhibition, simultaneous translation, networking events',
    caseStudy2Metrics: '100% technical success, 25 countries represented',
    
    caseStudy3Title: 'Agadir Team Building - 50 Participants',
    caseStudy3Desc: 'Surf lessons, wellness retreat, beachfront gala dinner',
    caseStudy3Metrics: 'Team cohesion improved by 40%, memorable experiences',
    
    viewCaseStudy: 'View Details',

    // Blog Insights Teaser
    insightsTitle: 'MICE Insights & Tips',
    insightsSubtitle: 'Expert guidance for planning events in Morocco',
    insight1Title: 'Top 10 Conference Venues in Morocco',
    insight1Desc: 'Complete guide to the best business venues',
    insight2Title: 'Why Marrakech is #1 for Corporate Incentives',
    insight2Desc: 'Discover what makes this imperial city special',
    insight3Title: 'Team Building in the Sahara Desert',
    insight3Desc: 'Unique activities to strengthen your team',
    readMoreInsights: 'Explore Our Blog',

    // FAQ Preview
    faqPreviewTitle: 'Frequently Asked Questions',
    faqPreviewSubtitle: 'Quick answers to help you plan',
    
    faqPreview1Q: 'How much does a corporate retreat in Morocco cost?',
    faqPreview1A: 'Most retreats range from €500-1,200 per person for 4-5 days, depending on city, accommodation level and included services.',
    
    faqPreview2Q: 'What is the best time for corporate events in Morocco?',
    faqPreview2A: 'October-December and March-May offer ideal temperatures. Winter months are perfect for southern destinations like Marrakech and Agadir.',
    
    faqPreview3Q: 'How far in advance should we book?',
    faqPreview3A: 'We recommend 2-3 months for standard events, 6 months for large conferences. However, we can accommodate urgent requests within 3 weeks.',
    
    faqPreview4Q: 'Do you handle all logistics and transfers?',
    faqPreview4A: 'Yes, we provide complete ground handling: airport transfers, accommodation, transport for activities, and 24/7 on-site coordination.',
    
    viewAllFAQ: 'View All FAQ',

    // Final Strong CTA
    finalCtaTitle: 'Ready to Plan Your Corporate Event in Morocco?',
    finalCtaSubtitle: 'Get your free personalized proposal in 24 hours',
    finalCtaDescription: 'Join hundreds of companies who have chosen Morocco for unforgettable corporate experiences. Our MICE experts are ready to create your perfect event.',
    getProposal24h: 'Get Free Proposal in 24h',
    scheduleCall: 'Schedule a Call'
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
    followUs: 'Síguenos',

    // New Homepage Sections - Spanish
    moroccoMiceTitle: 'Marruecos: Tu Destino MICE Premium',
    moroccoMiceStory: 'Descubre por qué las corporaciones internacionales eligen Marruecos para sus eventos más importantes. A solo 3 horas de Europa, Marruecos combina infraestructura de clase mundial con autenticidad exótica.',
    moroccoMiceHighlight1: '300+ vuelos directos semanales desde Europa y Golfo',
    moroccoMiceHighlight2: 'Hoteles modernos 5 estrellas con instalaciones para conferencias',
    moroccoMiceHighlight3: 'Rica cultura y experiencias auténticas',
    moroccoMiceHighlight4: 'Costo-efectivo comparado con destinos europeos',
    discoverMorocco: 'Descubrir Marruecos',

    destinationMarrakechDesc: 'Ciudad imperial, resorts de lujo, Atlas de fondo',
    destinationCasablancaDesc: 'Centro de negocios, venues modernos, exposiciones',
    destinationAgadirDesc: 'Retiros costeros, golf, actividades de playa',
    destinationFesDesc: 'Patrimonio cultural, experiencias auténticas',
    destinationSaharaDesc: 'Campamentos del desierto, team building aventurero',

    servicesDeepDiveTitle: 'Lo Que Organizamos Para Ti',
    servicesDeepDiveDesc: 'Desde reuniones íntimas de directorio hasta conferencias a gran escala, manejamos cada detalle de tu evento corporativo en Marruecos.',

    roiTitle: '¿Por Qué Elegir Nuestros Servicios MICE?',
    roiSubtitle: 'Maximiza el impacto mientras optimizas tu presupuesto',
    roiSaveTime: 'Ahorra Tiempo',
    roiSaveTimeDesc: 'Un solo punto de contacto para todos los proveedores y logística',
    roiSaveMoney: 'Ahorra Dinero',
    roiSaveMoneyDesc: 'Tarifas por volumen y alianzas directas reducen costos en 20-30%',
    roiMaximizeImpact: 'Maximiza Impacto',
    roiMaximizeImpactDesc: 'Experiencias únicas que motivan e inspiran a tus equipos',
    roiOptimization: 'Especialista en optimización de presupuesto de eventos',

    testimonialsTitle: 'Confiado por Empresas Líderes',
    testimonialsSubtitle: 'Más de 500 eventos corporativos exitosos organizados',
    testimonial1: '"Organización sobresaliente para nuestra conferencia de 200 personas en Marrakech. Cada detalle fue perfecto."',
    testimonial1Author: 'Sarah Johnson, Directora de Eventos',
    testimonial1Company: 'Empresa Fortune 500',
    clientLogos: 'Confiado por empresas europeas y del Golfo',

    caseStudiesTitle: 'Historias de Éxito',
    caseStudiesSubtitle: 'Eventos corporativos recientes que hemos organizado',
    caseStudy1Title: 'Incentivo Marrakech - 80 Participantes',
    caseStudy1Desc: 'Cena de gala en el desierto de lujo, excursiones al Atlas, experiencias de spa tradicional',
    caseStudy1Metrics: '95% tasa de satisfacción, 30% ahorro vs Europa',
    caseStudy2Title: 'Conferencia Casablanca - 300 Asistentes',
    caseStudy2Desc: 'Exhibición internacional, traducción simultánea, eventos de networking',
    caseStudy2Metrics: '100% éxito técnico, 25 países representados',
    caseStudy3Title: 'Team Building Agadir - 50 Participantes',
    caseStudy3Desc: 'Lecciones de surf, retiro de bienestar, cena de gala frente al mar',
    caseStudy3Metrics: 'Cohesión del equipo mejorada en 40%, experiencias memorables',
    viewCaseStudy: 'Ver Detalles',

    insightsTitle: 'Insights y Tips MICE',
    insightsSubtitle: 'Guía experta para planificar eventos en Marruecos',
    insight1Title: 'Top 10 Venues para Conferencias en Marruecos',
    insight1Desc: 'Guía completa de los mejores venues de negocios',
    insight2Title: 'Por Qué Marrakech es #1 para Incentivos Corporativos',
    insight2Desc: 'Descubre qué hace especial a esta ciudad imperial',
    insight3Title: 'Team Building en el Desierto del Sahara',
    insight3Desc: 'Actividades únicas para fortalecer tu equipo',
    readMoreInsights: 'Explorar Nuestro Blog',

    faqPreviewTitle: 'Preguntas Frecuentes',
    faqPreviewSubtitle: 'Respuestas rápidas para ayudarte a planificar',
    faqPreview1Q: '¿Cuánto cuesta un retiro corporativo en Marruecos?',
    faqPreview1A: 'La mayoría de retiros oscilan entre €500-1,200 por persona para 4-5 días, dependiendo de la ciudad, nivel de alojamiento y servicios incluidos.',
    faqPreview2Q: '¿Cuál es el mejor momento para eventos corporativos en Marruecos?',
    faqPreview2A: 'Octubre-Diciembre y Marzo-Mayo ofrecen temperaturas ideales. Los meses de invierno son perfectos para destinos del sur como Marrakech y Agadir.',
    faqPreview3Q: '¿Con cuánta anticipación debemos reservar?',
    faqPreview3A: 'Recomendamos 2-3 meses para eventos estándar, 6 meses para conferencias grandes. Sin embargo, podemos acomodar solicitudes urgentes en 3 semanas.',
    faqPreview4Q: '¿Manejan toda la logística y traslados?',
    faqPreview4A: 'Sí, proporcionamos manejo completo en tierra: traslados al aeropuerto, alojamiento, transporte para actividades y coordinación en sitio 24/7.',
    viewAllFAQ: 'Ver Todas las FAQ',

    finalCtaTitle: '¿Listo para Planificar tu Evento Corporativo en Marruecos?',
    finalCtaSubtitle: 'Obtén tu propuesta personalizada gratuita en 24 horas',
    finalCtaDescription: 'Únete a cientos de empresas que han elegido Marruecos para experiencias corporativas inolvidables. Nuestros expertos MICE están listos para crear tu evento perfecto.',
    getProposal24h: 'Propuesta Gratis en 24h',
    scheduleCall: 'Programar Llamada'
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
    followUs: 'تابعنا',

    // New Homepage Sections - Arabic
    moroccoMiceTitle: 'المغرب: وجهتك المتميزة للفعاليات التجارية',
    moroccoMiceStory: 'اكتشف لماذا تختار الشركات العالمية المغرب لأهم فعالياتها. على بعد 3 ساعات فقط من أوروبا، يجمع المغرب بين البنية التحتية عالمية المستوى والأصالة الغريبة.',
    moroccoMiceHighlight1: '+300 رحلة مباشرة أسبوعياً من أوروبا والخليج',
    moroccoMiceHighlight2: 'فنادق حديثة 5 نجوم مع مرافق المؤتمرات',
    moroccoMiceHighlight3: 'ثقافة غنية وتجارب أصيلة',
    moroccoMiceHighlight4: 'فعال من حيث التكلفة مقارنة بالوجهات الأوروبية',
    discoverMorocco: 'اكتشف المغرب',

    destinationMarrakechDesc: 'المدينة الإمبراطورية، منتجعات فاخرة، خلفية الأطلس',
    destinationCasablancaDesc: 'مركز الأعمال، أماكن حديثة، معارض',
    destinationAgadirDesc: 'خلوات ساحلية، جولف، أنشطة الشاطئ',
    destinationFesDesc: 'التراث الثقافي، تجارب أصيلة',
    destinationSaharaDesc: 'مخيمات الصحراء، بناء فرق المغامرة',

    servicesDeepDiveTitle: 'ما ننظمه لك',
    servicesDeepDiveDesc: 'من اجتماعات مجالس الإدارة الحميمة إلى المؤتمرات واسعة النطاق، نتعامل مع كل تفاصيل فعاليتك الشركاتية في المغرب.',

    roiTitle: 'لماذا تختار خدماتنا للفعاليات التجارية؟',
    roiSubtitle: 'اعظم الأثر مع تحسين ميزانيتك',
    roiSaveTime: 'وفر الوقت',
    roiSaveTimeDesc: 'نقطة اتصال واحدة لجميع الموردين واللوجستيات',
    roiSaveMoney: 'وفر المال',
    roiSaveMoneyDesc: 'أسعار الجملة والشراكات المباشرة تقلل التكاليف بنسبة 20-30%',
    roiMaximizeImpact: 'اعظم الأثر',
    roiMaximizeImpactDesc: 'تجارب فريدة تحفز وتلهم فرقك',
    roiOptimization: 'متخصص في تحسين ميزانية الفعاليات',

    testimonialsTitle: 'موثوق من قبل الشركات الرائدة',
    testimonialsSubtitle: 'أكثر من 500 فعالية شركاتية ناجحة منظمة',
    testimonial1: '"تنظيم رائع لمؤتمرنا الذي ضم 200 شخص في مراكش. كل التفاصيل كانت مثالية."',
    testimonial1Author: 'سارة جونسون، مديرة الفعاليات',
    testimonial1Company: 'شركة فورتشن 500',
    clientLogos: 'موثوق من قبل الشركات الأوروبية والخليجية',

    caseStudiesTitle: 'قصص النجاح',
    caseStudiesSubtitle: 'الفعاليات الشركاتية الأخيرة التي نظمناها',
    caseStudy1Title: 'رحلة حوافز مراكش - 80 مشارك',
    caseStudy1Desc: 'عشاء فاخر في الصحراء، رحلات استكشافية للأطلس، تجارب سبا تقليدية',
    caseStudy1Metrics: '95% معدل رضا، 30% توفير مقابل أوروبا',
    caseStudy2Title: 'مؤتمر الدار البيضاء - 300 حاضر',
    caseStudy2Desc: 'معرض دولي، ترجمة فورية، فعاليات التواصل',
    caseStudy2Metrics: '100% نجاح تقني، 25 دولة ممثلة',
    caseStudy3Title: 'بناء فريق أكادير - 50 مشارك',
    caseStudy3Desc: 'دروس تصفح، خلوة عافية، عشاء فاخر على الشاطئ',
    caseStudy3Metrics: 'تماسك الفريق تحسن بنسبة 40%، تجارب لا تُنسى',
    viewCaseStudy: 'عرض التفاصيل',

    insightsTitle: 'رؤى ونصائح الفعاليات التجارية',
    insightsSubtitle: 'إرشادات الخبراء لتخطيط الفعاليات في المغرب',
    insight1Title: 'أفضل 10 أماكن للمؤتمرات في المغرب',
    insight1Desc: 'دليل شامل لأفضل أماكن الأعمال',
    insight2Title: 'لماذا مراكش رقم 1 للحوافز الشركاتية',
    insight2Desc: 'اكتشف ما يجعل هذه المدينة الإمبراطورية مميزة',
    insight3Title: 'بناء الفريق في صحراء الساهرة',
    insight3Desc: 'أنشطة فريدة لتقوية فريقك',
    readMoreInsights: 'استكشف مدونتنا',

    faqPreviewTitle: 'الأسئلة الشائعة',
    faqPreviewSubtitle: 'إجابات سريعة لمساعدتك في التخطيط',
    faqPreview1Q: 'كم تكلف الخلوة الشركاتية في المغرب؟',
    faqPreview1A: 'معظم الخلوات تتراوح من €500-1,200 للشخص لمدة 4-5 أيام، حسب المدينة ومستوى الإقامة والخدمات المشمولة.',
    faqPreview2Q: 'ما هو أفضل وقت للفعاليات الشركاتية في المغرب؟',
    faqPreview2A: 'أكتوبر-ديسمبر ومارس-مايو تقدم درجات حرارة مثالية. أشهر الشتاء مثالية للوجهات الجنوبية مثل مراكش وأكادير.',
    faqPreview3Q: 'كم من الوقت مسبقاً يجب أن نحجز؟',
    faqPreview3A: 'نوصي بـ 2-3 أشهر للفعاليات العادية، 6 أشهر للمؤتمرات الكبيرة. ومع ذلك، يمكننا استيعاب الطلبات العاجلة خلال 3 أسابيع.',
    faqPreview4Q: 'هل تتعاملون مع جميع اللوجستيات والنقل؟',
    faqPreview4A: 'نعم، نوفر المعالجة الكاملة على الأرض: نقل المطار، الإقامة، النقل للأنشطة، والتنسيق في الموقع 24/7.',
    viewAllFAQ: 'عرض جميع الأسئلة الشائعة',

    finalCtaTitle: 'مستعد لتخطيط فعاليتك الشركاتية في المغرب؟',
    finalCtaSubtitle: 'احصل على عرضك الشخصي المجاني خلال 24 ساعة',
    finalCtaDescription: 'انضم إلى مئات الشركات التي اختارت المغرب لتجارب شركاتية لا تُنسى. خبراء الفعاليات التجارية لدينا مستعدون لإنشاء فعاليتك المثالية.',
    getProposal24h: 'عرض مجاني في 24 ساعة',
    scheduleCall: 'جدولة مكالمة'
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