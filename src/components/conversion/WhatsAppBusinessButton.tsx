import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../LanguageProvider';

export const WhatsAppBusinessButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t, language } = useLanguage();
  
  const whatsappNumber = "+212600000000"; // Replace with actual WhatsApp Business number
  
  const getWhatsAppMessage = () => {
    const messages = {
      en: "Hello! I'm interested in your corporate event services in Morocco. Could you please provide more information?",
      fr: "Bonjour ! Je suis intéressé par vos services d'événements d'entreprise au Maroc. Pourriez-vous me fournir plus d'informations ?",
      es: "¡Hola! Estoy interesado en sus servicios de eventos corporativos en Marruecos. ¿Podrían proporcionarme más información?",
      ar: "مرحبا! أنا مهتم بخدماتكم للفعاليات الشركات في المغرب. هل يمكنكم تزويدي بمزيد من المعلومات؟"
    };
    
    return messages[language as keyof typeof messages] || messages.en;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(getWhatsAppMessage());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-20 left-4 z-50">
      {showTooltip && (
        <div className="mb-2 bg-green-500 text-white text-xs rounded-lg p-2 max-w-48 relative animate-in slide-in-from-bottom-2">
          <Button
            variant="ghost"
            size="icon" 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1 -right-1 h-4 w-4 text-white hover:bg-green-600"
          >
            <X className="h-3 w-3" />
          </Button>
          <p className="pr-4">
            {t('Need help with your corporate event? Chat with our MICE specialists now!')}
          </p>
        </div>
      )}
      
      <div className="relative">
        <Button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        
        {/* WhatsApp Business badge */}
        <div className="absolute -top-1 -right-1 bg-green-600 text-white text-xs px-1 rounded-full">
          B
        </div>
      </div>
    </div>
  );
};