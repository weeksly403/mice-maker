interface WhatsAppConfig {
  phoneNumber: string;
  defaultMessage: string;
}

const whatsappConfig: WhatsAppConfig = {
  phoneNumber: '+212600000000', // Replace with actual WhatsApp number
  defaultMessage: 'Hello! I\'m interested in organizing a corporate event in Morocco. Could you please provide more information?'
};

export const openWhatsApp = (customMessage?: string, language?: string) => {
  const messages = {
    en: customMessage || 'Hello! I\'m interested in organizing a corporate event in Morocco. Could you please provide more information?',
    fr: customMessage || 'Bonjour ! Je suis intéressé par l\'organisation d\'un événement d\'entreprise au Maroc. Pourriez-vous me fournir plus d\'informations ?',
    es: customMessage || '¡Hola! Estoy interesado en organizar un evento corporativo en Marruecos. ¿Podrían proporcionarme más información?',
    ar: customMessage || 'مرحباً! أنا مهتم بتنظيم حدث شركات في المغرب. هل يمكنكم تقديم المزيد من المعلومات؟'
  };

  const message = messages[language as keyof typeof messages] || messages.en;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappConfig.phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
  
  // Open WhatsApp in a new tab/window
  window.open(whatsappUrl, '_blank');
};

export const openWhatsAppWithEventDetails = (eventDetails: {
  eventType?: string;
  city?: string;
  participants?: string;
  dates?: string;
}, language = 'en') => {
  const baseMessages = {
    en: 'Hello! I would like to request a quote for:',
    fr: 'Bonjour ! J\'aimerais demander un devis pour :',
    es: '¡Hola! Me gustaría solicitar una cotización para:',
    ar: 'مرحباً! أود طلب عرض سعر لـ:'
  };

  const detailLabels = {
    en: { eventType: 'Event Type', city: 'Preferred City', participants: 'Participants', dates: 'Dates' },
    fr: { eventType: 'Type d\'événement', city: 'Ville préférée', participants: 'Participants', dates: 'Dates' },
    es: { eventType: 'Tipo de evento', city: 'Ciudad preferida', participants: 'Participantes', dates: 'Fechas' },
    ar: { eventType: 'نوع الحدث', city: 'المدينة المفضلة', participants: 'المشاركون', dates: 'التواريخ' }
  };

  let message = baseMessages[language as keyof typeof baseMessages] || baseMessages.en;
  const labels = detailLabels[language as keyof typeof detailLabels] || detailLabels.en;
  
  if (eventDetails.eventType) {
    message += `\n• ${labels.eventType}: ${eventDetails.eventType}`;
  }
  if (eventDetails.city) {
    message += `\n• ${labels.city}: ${eventDetails.city}`;
  }
  if (eventDetails.participants) {
    message += `\n• ${labels.participants}: ${eventDetails.participants}`;
  }
  if (eventDetails.dates) {
    message += `\n• ${labels.dates}: ${eventDetails.dates}`;
  }

  openWhatsApp(message, language);
};