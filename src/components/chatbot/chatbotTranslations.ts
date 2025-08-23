export type ChatBotLanguage = 'fr' | 'en' | 'es' | 'ar';

export const chatbotTranslations = {
  fr: {
    buttonLabel: 'Planifier votre événement',
    buttonLabelShort: 'Planifier',
    subtitle: 'Expert MICE Maroc',
    greeting: 'Bienvenue chez Event Morocco. Une proposition gratuite en 24h ? Je vais poser quelques questions pour la personnaliser.',
    
    steps: {
      eventType: 'Quel type d\'événement ?',
      city: 'Destination préférée ?',
      groupSize: 'Combien de participants ?',
      dates: 'Dates ou période ?',
      budget: 'Budget par personne (approx.) ?',
      contact: 'Votre société et vos coordonnées ?',
      specialNeeds: 'Besoins spécifiques (AV, traduction, halal, accessibilité) ?',
      consent: 'Consentement requis pour continuer.'
    },

    options: {
      eventTypes: [
        'Conférence/Séminaire',
        'Voyage Incentive', 
        'Team Building',
        'Séminaire Résidentiel',
        'Soirée de Gala',
        'Convention d\'Entreprise',
        'Lancement de Produit',
        'Réunion Conseil d\'Administration',
        'Formation/Workshop',
        'Assemblée Générale',
        'Kick-off Commercial',
        'Mariage d\'Entreprise',
        'Voyage de Famille/Familial',
        'Incentive Famille',
        'Célébration Anniversaire Société',
        'Événement de Networking',
        'Salon/Exposition',
        'Roadshow',
        'Congrès Médical',
        'Symposium Scientifique',
        'Récompenses/Awards',
        'Voyage de Presse',
        'Retraite Stratégique',
        'Événement CSR/RSE',
        'Activité de Cohésion',
        'Meeting International',
        'Summit Exécutif',
        'Autre'
      ],
      cities: [
        'Marrakech',
        'Casablanca', 
        'Agadir',
        'Fès',
        'Sahara/Agafay',
        'Pas sûr'
      ],
      groupSizes: [
        'Moins de 30',
        '30-80',
        '80-150', 
        '150-300',
        '300+'
      ],
      budgets: [
        'Moins de 500€',
        '500-800€',
        '800-1200€',
        'Plus de 1200€',
        'Budget en MAD'
      ],
      flexible: 'Dates flexibles'
    },

    placeholders: {
      dates: 'Ex: 15-18 Mars 2024',
      company: 'Nom de votre société',
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'votre@email.com',
      phone: '+33 1 23 45 67 89',
      specialNeeds: 'Décrivez vos besoins spécifiques (optionnel)...'
    },

    hints: {
      specialNeeds: 'Ex: équipements AV, traduction, régimes alimentaires, accessibilité, politique enfants, VIP, confidentialité'
    },

    actions: {
      startProposal: 'Obtenir une proposition gratuite',
      browseFAQ: 'Parcourir la FAQ',
      continue: 'Continuer',
      submit: 'Envoyer ma demande',
      submitting: 'Envoi en cours...',
      whatsapp: 'Continuer sur WhatsApp',
      email: 'Email uniquement',
      call: 'Parler à un humain'
    },

    validation: {
      emailInvalid: 'Veuillez saisir une adresse email valide.',
      noSpecialNeeds: 'Aucun besoin spécifique',
      consentText: 'J\'accepte d\'être contacté par Event Morocco pour ma demande.',
      consentAccepted: 'Consentement accepté',
      submitError: 'Erreur lors de l\'envoi. Veuillez réessayer.'
    },

    success: {
      message: 'Merci ! Nous enverrons une proposition gratuite sous 24h. Votre référence :',
      description: 'Voulez-vous continuer sur WhatsApp ou par email ?'
    },

    progress: {
      step: 'Étape',
      almostDone: 'Presque terminé !'
    }
  },

  en: {
    buttonLabel: 'Plan your event',
    buttonLabelShort: 'Plan',
    subtitle: 'Morocco MICE Expert',
    greeting: 'Welcome to Event Morocco. Want a free proposal in 24h? I\'ll ask a few questions to tailor it.',
    
    steps: {
      eventType: 'What type of event?',
      city: 'Preferred destination?',
      groupSize: 'How many attendees?',
      dates: 'Dates or timeframe?',
      budget: 'Approx. budget per person?',
      contact: 'Your company & contact details?',
      specialNeeds: 'Any special requirements (AV, translation, halal, accessibility)?',
      consent: 'Consent required to continue.'
    },

    options: {
      eventTypes: [
        'Conference/Seminar',
        'Incentive Trip',
        'Team Building',
        'Corporate Retreat',
        'Gala Dinner',
        'Corporate Convention',
        'Product Launch',
        'Board Meeting',
        'Training/Workshop',
        'General Assembly',
        'Sales Kick-off',
        'Corporate Wedding',
        'Family Trip/Fam Trip',
        'Family Incentive',
        'Company Anniversary',
        'Networking Event',
        'Trade Show/Exhibition',
        'Roadshow',
        'Medical Congress',
        'Scientific Symposium',
        'Awards Ceremony',
        'Press Trip',
        'Strategic Retreat',
        'CSR Event',
        'Team Bonding Activity',
        'International Meeting',
        'Executive Summit',
        'Other'
      ],
      cities: [
        'Marrakech',
        'Casablanca',
        'Agadir',
        'Fes',
        'Sahara/Agafay',
        'Not sure'
      ],
      groupSizes: [
        'Less than 30',
        '30-80',
        '80-150',
        '150-300',
        '300+'
      ],
      budgets: [
        'Under €500',
        '€500-800',
        '€800-1200',
        'Over €1200',
        'Budget in MAD'
      ],
      flexible: 'Flexible dates'
    },

    placeholders: {
      dates: 'e.g. March 15-18, 2024',
      company: 'Your company name',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'your@email.com',
      phone: '+1 234 567 8900',
      specialNeeds: 'Describe your specific needs (optional)...'
    },

    hints: {
      specialNeeds: 'e.g. AV equipment, translation, dietary requirements, accessibility, child policy, VIP, privacy'
    },

    actions: {
      startProposal: 'Get free proposal',
      browseFAQ: 'Browse FAQ',
      continue: 'Continue',
      submit: 'Send my request',
      submitting: 'Submitting...',
      whatsapp: 'Continue on WhatsApp',
      email: 'Email only',
      call: 'Talk to human now'
    },

    validation: {
      emailInvalid: 'Please enter a valid email address.',
      noSpecialNeeds: 'No special requirements',
      consentText: 'I agree to be contacted by Event Morocco regarding my inquiry.',
      consentAccepted: 'Consent accepted',
      submitError: 'Error submitting. Please try again.'
    },

    success: {
      message: 'Thanks! We\'ll send a free 24h proposal. Your reference:',
      description: 'Want to continue on WhatsApp or by email?'
    },

    progress: {
      step: 'Step',
      almostDone: 'Almost done!'
    }
  },

  es: {
    buttonLabel: 'Planifica tu evento',
    buttonLabelShort: 'Planifica',
    subtitle: 'Experto MICE Marruecos',
    greeting: 'Bienvenido a Event Morocco. ¿Propuesta gratuita en 24h? Haré algunas preguntas para personalizarla.',
    
    steps: {
      eventType: '¿Qué tipo de evento?',
      city: '¿Destino preferido?',
      groupSize: '¿Cuántos asistentes?',
      dates: '¿Fechas o período?',
      budget: '¿Presupuesto por persona (aprox.)?',
      contact: '¿Compañía y datos de contacto?',
      specialNeeds: '¿Requisitos especiales (AV, traducción, halal, accesibilidad)?',
      consent: 'Consentimiento requerido para continuar.'
    },

    options: {
      eventTypes: [
        'Conferencia/Seminario',
        'Viaje Incentivo',
        'Team Building',
        'Retiro Corporativo',
        'Cena de Gala',
        'Convención Corporativa',
        'Lanzamiento de Producto',
        'Reunión Junta Directiva',
        'Capacitación/Taller',
        'Asamblea General',
        'Kick-off de Ventas',
        'Boda Corporativa',
        'Viaje Familiar/Fam Trip',
        'Incentivo Familiar',
        'Aniversario de Empresa',
        'Evento de Networking',
        'Feria/Exposición',
        'Roadshow',
        'Congreso Médico',
        'Simposio Científico',
        'Ceremonia de Premios',
        'Viaje de Prensa',
        'Retiro Estratégico',
        'Evento RSC',
        'Actividad de Cohesión',
        'Reunión Internacional',
        'Cumbre Ejecutiva',
        'Otro'
      ],
      cities: [
        'Marrakech',
        'Casablanca',
        'Agadir',
        'Fez',
        'Sahara/Agafay',
        'No estoy seguro'
      ],
      groupSizes: [
        'Menos de 30',
        '30-80',
        '80-150',
        '150-300',
        '300+'
      ],
      budgets: [
        'Menos de €500',
        '€500-800',
        '€800-1200',
        'Más de €1200',
        'Presupuesto en MAD'
      ],
      flexible: 'Fechas flexibles'
    },

    placeholders: {
      dates: 'ej. 15-18 Marzo 2024',
      company: 'Nombre de su empresa',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'su@email.com',
      phone: '+34 123 456 789',
      specialNeeds: 'Describa sus necesidades específicas (opcional)...'
    },

    hints: {
      specialNeeds: 'ej. equipos AV, traducción, requisitos dietéticos, accesibilidad, política de niños, VIP, privacidad'
    },

    actions: {
      startProposal: 'Obtener propuesta gratuita',
      browseFAQ: 'Ver FAQ',
      continue: 'Continuar',
      submit: 'Enviar mi solicitud',
      submitting: 'Enviando...',
      whatsapp: 'Continuar en WhatsApp',
      email: 'Solo email',
      call: 'Hablar con humano ahora'
    },

    validation: {
      emailInvalid: 'Por favor ingrese un email válido.',
      noSpecialNeeds: 'Sin requisitos especiales',
      consentText: 'Acepto ser contactado por Event Morocco sobre mi consulta.',
      consentAccepted: 'Consentimiento aceptado',
      submitError: 'Error al enviar. Por favor intente de nuevo.'
    },

    success: {
      message: '¡Gracias! Enviaremos una propuesta gratuita en 24h. Su referencia:',
      description: '¿Quiere continuar en WhatsApp o por email?'
    },

    progress: {
      step: 'Paso',
      almostDone: '¡Casi terminado!'
    }
  },

  ar: {
    buttonLabel: 'خطط فعاليّتَك',
    buttonLabelShort: 'خطط',
    subtitle: 'خبير أحداث المغرب',
    greeting: 'مرحبًا بك في Event Morocco. هل تريد عرضًا مجانياً خلال 24 ساعة؟ سأطرح بعض الأسئلة لتخصيصه.',
    
    steps: {
      eventType: 'ما نوع الفعالية؟',
      city: 'المدينة المفضلة؟',
      groupSize: 'كم عدد الحضور؟',
      dates: 'التواريخ أو الفترة؟',
      budget: 'ميزانية لكل شخص (تقريبًا)؟',
      contact: 'بيانات شركتكم ومعلومات التواصل؟',
      specialNeeds: 'متطلبات خاصة (صوتيات/مرئيات، ترجمة، حلال، وصول ذوي الإعاقة)؟',
      consent: 'الموافقة مطلوبة للمتابعة.'
    },

    options: {
      eventTypes: [
        'مؤتمر/ندوة',
        'رحلة تحفيزية',
        'بناء فريق',
        'خلوة شركات',
        'عشاء احتفالي',
        'مؤتمر شركات',
        'إطلاق منتج',
        'اجتماع مجلس إدارة',
        'تدريب/ورشة عمل',
        'جمعية عامة',
        'انطلاقة مبيعات',
        'زفاف شركات',
        'رحلة عائلية',
        'حافز عائلي',
        'ذكرى تأسيس الشركة',
        'فعالية تواصل',
        'معرض/عرض تجاري',
        'جولة ترويجية',
        'مؤتمر طبي',
        'ندوة علمية',
        'حفل جوائز',
        'رحلة صحفية',
        'خلوة استراتيجية',
        'فعالية مسؤولية اجتماعية',
        'نشاط تماسك الفريق',
        'اجتماع دولي',
        'قمة تنفيذية',
        'أخرى'
      ],
      cities: [
        'مراكش',
        'الدار البيضاء',
        'أكادير',
        'فاس',
        'الصحراء/أكافاي',
        'غير متأكد'
      ],
      groupSizes: [
        'أقل من 30',
        '30-80',
        '80-150',
        '150-300',
        'أكثر من 300'
      ],
      budgets: [
        'أقل من 500€',
        '500-800€',
        '800-1200€',
        'أكثر من 1200€',
        'ميزانية بالدرهم'
      ],
      flexible: 'تواريخ مرنة'
    },

    placeholders: {
      dates: 'مثال: 15-18 مارس 2024',
      company: 'اسم شركتكم',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      email: 'بريدكم@الإلكتروني.com',
      phone: '+212 6 12 34 56 78',
      specialNeeds: 'اوصف احتياجاتك الخاصة (اختياري)...'
    },

    hints: {
      specialNeeds: 'مثال: معدات صوتية/مرئية، ترجمة، متطلبات غذائية، إمكانية الوصول، سياسة الأطفال، كبار الشخصيات، الخصوصية'
    },

    actions: {
      startProposal: 'احصل على عرض مجاني',
      browseFAQ: 'تصفح الأسئلة الشائعة',
      continue: 'متابعة',
      submit: 'إرسال طلبي',
      submitting: 'جاري الإرسال...',
      whatsapp: 'المتابعة على واتساب',
      email: 'البريد الإلكتروني فقط',
      call: 'التحدث مع شخص الآن'
    },

    validation: {
      emailInvalid: 'يرجى إدخال عنوان بريد إلكتروني صحيح.',
      noSpecialNeeds: 'لا توجد متطلبات خاصة',
      consentText: 'أوافق على أن تتصل بي Event Morocco بخصوص استفساري.',
      consentAccepted: 'تم قبول الموافقة',
      submitError: 'خطأ في الإرسال. يرجى المحاولة مرة أخرى.'
    },

    success: {
      message: 'شكراً! سنرسل عرضاً مجانياً خلال 24 ساعة. رقم المرجع:',
      description: 'هل تريد المتابعة على واتساب أم البريد الإلكتروني؟'
    },

    progress: {
      step: 'خطوة',
      almostDone: 'تقريباً انتهينا!'
    }
  }
};