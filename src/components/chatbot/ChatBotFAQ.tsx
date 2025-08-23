import React, { useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { chatbotTranslations, type ChatBotLanguage } from './chatbotTranslations';

interface ChatBotFAQProps {
  language: ChatBotLanguage;
  onBackToChat: () => void;
  onStartProposal: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'planning' | 'logistics';
  links?: Array<{
    text: string;
    url: string;
  }>;
}

const faqData: Record<ChatBotLanguage, FAQItem[]> = {
  fr: [
    {
      question: 'Pourquoi choisir le Maroc pour un événement d\'entreprise ?',
      answer: 'Le Maroc offre un accès facile depuis l\'Europe (2-4h de vol), un excellent rapport qualité-prix, des infrastructures modernes et une expérience culturelle unique. Pas de décalage horaire significatif.',
      category: 'general',
      links: [
        { text: 'Nos destinations', url: '/fr/destinations' },
        { text: 'Services MICE', url: '/fr/services' }
      ]
    },
    {
      question: 'Quels sont les meilleurs lieux de conférence à Marrakech ?',
      answer: 'Marrakech propose plus de 15 centres de congrès modernes, des palais historiques transformés, et des hôtels 5 étoiles avec salles équipées pour 50 à 2000 personnes.',
      category: 'planning',
      links: [
        { text: 'Marrakech venues', url: '/fr/destinations/marrakech' }
      ]
    },
    {
      question: 'Coût moyen par personne pour 4-5 jours ?',
      answer: 'Marrakech/Casablanca : 400-800€. Agadir : 350-650€. Fès : 300-550€. Sahara : 500-1000€. Inclut hébergement 4-5*, repas, transferts et activités de base.',
      category: 'planning'
    },
    {
      question: 'Qu\'est-ce qui est inclus dans un voyage incentive ?',
      answer: 'Hébergement haut de gamme, tous les transferts, activités exclusives (désert, Atlas, médinas), soirée de gala, guide accompagnateur, assurance groupe.',
      category: 'planning'
    },
    {
      question: 'Idées de team building au Maroc ?',
      answer: 'Désert d\'Agafay (4x4, bivouac), randonnées Atlas, surf à Agadir, chasse au trésor dans les médinas, ateliers cuisine/artisanat, rallyes urbains.',
      category: 'planning'
    },
    {
      question: 'Délais de planification recommandés ?',
      answer: '2-6 semaines pour groupes standard. 2-4 mois pour congrès importants. Organisation express possible sous 10 jours selon disponibilités.',
      category: 'logistics'
    },
    {
      question: 'Considérations culturelles et alimentaires ?',
      answer: 'Halal disponible partout. Casher sur demande. Respect du Ramadan. Alcool dans hôtels et lieux privés. Code vestimentaire flexible.',
      category: 'logistics'
    },
    {
      question: 'Conditions de paiement ?',
      answer: 'Acompte 30% à la réservation, solde 30 jours avant. Virements bancaires, cartes entreprise acceptées. Conditions spéciales pour grands groupes.',
      category: 'logistics'
    },
    {
      question: 'Options durables disponibles ?',
      answer: 'Fournisseurs locaux, événements zéro déchet, projets communautaires, transports groupés, compensation carbone, partenariats avec coopératives.',
      category: 'logistics'
    }
  ],

  en: [
    {
      question: 'Why choose Morocco for corporate events?',
      answer: 'Morocco offers easy access from Europe/GCC (2-4h flights), exceptional value for money, modern infrastructure, and unique cultural experiences. No significant time zone difference.',
      category: 'general',
      links: [
        { text: 'Our destinations', url: '/destinations' },
        { text: 'MICE services', url: '/services' }
      ]
    },
    {
      question: 'Best conference venues in Marrakech/Casablanca/Agadir/Fes?',
      answer: 'Each city offers 5-15 modern conference centers, luxury hotels with equipped meeting rooms, and unique historical venues for 20-2000 attendees.',
      category: 'planning',
      links: [
        { text: 'Marrakech venues', url: '/destinations/marrakech' }
      ]
    },
    {
      question: 'Average cost per person for 4-5 days by city & season?',
      answer: 'Marrakech/Casablanca: €400-800. Agadir: €350-650. Fes: €300-550. Sahara: €500-1000. Includes 4-5* hotels, meals, transfers, basic activities.',
      category: 'planning'
    },
    {
      question: 'What\'s included in an incentive trip?',
      answer: 'Premium accommodation, all transfers, exclusive activities (desert, Atlas, medinas), gala dinner, dedicated guide, group insurance coverage.',
      category: 'planning'
    },
    {
      question: 'Team building ideas in Morocco?',
      answer: 'Agafay desert adventures (4x4, camping), Atlas hikes, Agadir surf lessons, medina treasure hunts, cooking/craft workshops, urban rallies.',
      category: 'planning'
    },
    {
      question: 'Recommended lead times?',
      answer: '2-6 weeks for standard groups. 2-4 months for large congresses. Rush organization possible within 10 days subject to availability.',
      category: 'logistics'
    },
    {
      question: 'Cultural & dietary considerations?',
      answer: 'Halal widely available. Kosher on request. Ramadan respected. Alcohol in hotels/private venues. Flexible dress code.',
      category: 'logistics'
    },
    {
      question: 'Payment terms?',
      answer: '30% deposit at booking, balance 30 days before event. Bank transfers, corporate cards accepted. Special terms for large groups.',
      category: 'logistics'
    },
    {
      question: 'Sustainability options?',
      answer: 'Local suppliers, zero-waste events, community projects, group transport, carbon offsetting, cooperative partnerships available.',
      category: 'logistics'
    }
  ],

  es: [
    {
      question: '¿Por qué elegir Marruecos para eventos corporativos?',
      answer: 'Marruecos ofrece fácil acceso desde Europa (2-4h vuelo), excelente relación calidad-precio, infraestructura moderna y experiencias culturales únicas. Sin diferencia horaria significativa.',
      category: 'general',
      links: [
        { text: 'Nuestros destinos', url: '/es/destinations' },
        { text: 'Servicios MICE', url: '/es/services' }
      ]
    },
    {
      question: 'Mejores sedes de conferencias en Marrakech/Casablanca/Agadir/Fez?',
      answer: 'Cada ciudad ofrece 5-15 centros de congresos modernos, hoteles de lujo con salas equipadas, y venues históricos únicos para 20-2000 asistentes.',
      category: 'planning',
      links: [
        { text: 'Venues Marrakech', url: '/es/destinations/marrakech' }
      ]
    },
    {
      question: 'Costo promedio por persona para 4-5 días por ciudad y temporada?',
      answer: 'Marrakech/Casablanca: €400-800. Agadir: €350-650. Fez: €300-550. Sahara: €500-1000. Incluye hoteles 4-5*, comidas, traslados, actividades básicas.',
      category: 'planning'
    },
    {
      question: '¿Qué está incluido en un viaje incentivo?',
      answer: 'Alojamiento premium, todos los traslados, actividades exclusivas (desierto, Atlas, medinas), cena de gala, guía dedicado, seguro de grupo.',
      category: 'planning'
    },
    {
      question: 'Ideas de team building en Marruecos?',
      answer: 'Aventuras desierto Agafay (4x4, campamento), senderismo Atlas, surf en Agadir, búsquedas del tesoro en medinas, talleres cocina/artesanía.',
      category: 'planning'
    },
    {
      question: 'Tiempos de planificación recomendados?',
      answer: '2-6 semanas para grupos estándar. 2-4 meses para congresos grandes. Organización urgente posible en 10 días según disponibilidad.',
      category: 'logistics'
    },
    {
      question: 'Consideraciones culturales y dietéticas?',
      answer: 'Halal ampliamente disponible. Kosher bajo pedido. Ramadán respetado. Alcohol en hoteles/venues privados. Código de vestimenta flexible.',
      category: 'logistics'
    },
    {
      question: 'Términos de pago?',
      answer: 'Depósito 30% al reservar, saldo 30 días antes. Transferencias bancarias, tarjetas corporativas aceptadas. Términos especiales para grupos grandes.',
      category: 'logistics'
    },
    {
      question: 'Opciones de sostenibilidad?',
      answer: 'Proveedores locales, eventos cero residuos, proyectos comunitarios, transporte grupal, compensación de carbono, alianzas cooperativas.',
      category: 'logistics'
    }
  ],

  ar: [
    {
      question: 'لماذا اختيار المغرب للأحداث المؤسسية؟',
      answer: 'المغرب يوفر وصولاً سهلاً من أوروبا/الخليج (2-4 ساعات طيران)، قيمة ممتازة مقابل المال، بنية تحتية حديثة، وتجارب ثقافية فريدة. لا يوجد فارق زمني كبير.',
      category: 'general',
      links: [
        { text: 'وجهاتنا', url: '/ar/destinations' },
        { text: 'خدمات MICE', url: '/ar/services' }
      ]
    },
    {
      question: 'أفضل أماكن المؤتمرات في مراكش/الدار البيضاء/أكادير/فاس؟',
      answer: 'كل مدينة توفر 5-15 مركز مؤتمرات حديث، فنادق فاخرة بقاعات مجهزة، وأماكن تاريخية فريدة لـ20-2000 مشارك.',
      category: 'planning',
      links: [
        { text: 'أماكن مراكش', url: '/ar/destinations/marrakech' }
      ]
    },
    {
      question: 'التكلفة المتوسطة للشخص لمدة 4-5 أيام حسب المدينة والموسم؟',
      answer: 'مراكش/الدار البيضاء: 400-800€. أكادير: 350-650€. فاس: 300-550€. الصحراء: 500-1000€. يشمل فنادق 4-5*، وجبات، نقل، أنشطة أساسية.',
      category: 'planning'
    },
    {
      question: 'ما المتضمن في الرحلة التحفيزية؟',
      answer: 'إقامة فاخرة، جميع النقل، أنشطة حصرية (صحراء، أطلس، مدن قديمة)، عشاء احتفالي، مرشد مخصص، تأمين المجموعة.',
      category: 'planning'
    },
    {
      question: 'أفكار بناء الفريق في المغرب؟',
      answer: 'مغامرات صحراء أكافاي (سيارات 4x4، تخييم)، رحلات جبال الأطلس، دروس ركوب الأمواج في أكادير، بحث عن الكنوز في المدن القديمة.',
      category: 'planning'
    },
    {
      question: 'أوقات التخطيط الموصى بها؟',
      answer: '2-6 أسابيع للمجموعات العادية. 2-4 أشهر للمؤتمرات الكبيرة. تنظيم سريع ممكن خلال 10 أيام حسب التوفر.',
      category: 'logistics'
    },
    {
      question: 'اعتبارات ثقافية وغذائية؟',
      answer: 'حلال متوفر على نطاق واسع. كوشير عند الطلب. احترام رمضان. كحول في الفنادق/الأماكن الخاصة. قواعد لباس مرنة.',
      category: 'logistics'
    },
    {
      question: 'شروط الدفع؟',
      answer: 'دفعة مقدمة 30% عند الحجز، الرصيد 30 يوماً قبل الحدث. تحويلات بنكية، بطاقات الشركات مقبولة. شروط خاصة للمجموعات الكبيرة.',
      category: 'logistics'
    },
    {
      question: 'خيارات الاستدامة؟',
      answer: 'موردون محليون، أحداث خالية من النفايات، مشاريع مجتمعية، نقل جماعي، تعويض الكربون، شراكات تعاونية متاحة.',
      category: 'logistics'
    }
  ]
};

export const ChatBotFAQ: React.FC<ChatBotFAQProps> = ({ 
  language, 
  onBackToChat, 
  onStartProposal 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'general' | 'planning' | 'logistics'>('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  const faqs = faqData[language];
  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const categoryLabels = {
    fr: {
      all: 'Toutes',
      general: 'Général',
      planning: 'Planification',
      logistics: 'Logistique'
    },
    en: {
      all: 'All',
      general: 'General',
      planning: 'Planning',
      logistics: 'Logistics'
    },
    es: {
      all: 'Todas',
      general: 'General',
      planning: 'Planificación',
      logistics: 'Logística'
    },
    ar: {
      all: 'الكل',
      general: 'عام',
      planning: 'تخطيط',
      logistics: 'لوجستيات'
    }
  };

  const labels = categoryLabels[language];
  const t = chatbotTranslations[language];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBackToChat}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {language === 'fr' ? 'Retour' : 
           language === 'es' ? 'Volver' :
           language === 'ar' ? 'العودة' : 'Back'}
        </Button>
        <h3 className="font-medium">FAQ</h3>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {(['all', 'general', 'planning', 'logistics'] as const).map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer text-xs"
            onClick={() => setSelectedCategory(category)}
          >
            {labels[category]}
          </Badge>
        ))}
      </div>

      {/* FAQ List */}
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {filteredFAQs.map((faq, index) => (
          <Card key={index} className="p-3">
            <button
              className="w-full text-left"
              onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
            >
              <div className="font-medium text-sm mb-1">{faq.question}</div>
            </button>
            
            {expandedFAQ === index && (
              <div className="mt-2 space-y-2">
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
                
                {faq.links && (
                  <div className="flex flex-wrap gap-2">
                    {faq.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="ghost"
                        size="sm"
                        className="h-auto p-1 text-xs flex items-center gap-1"
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        {link.text}
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="border-t pt-4">
        <div className="text-center space-y-2">
          <div className="text-sm text-muted-foreground">
            {language === 'fr' ? 'Besoin d\'aide personnalisée ?' :
             language === 'es' ? '¿Necesita ayuda personalizada?' :
             language === 'ar' ? 'هل تحتاج مساعدة شخصية؟' : 'Need personalized help?'}
          </div>
          <Button onClick={onStartProposal} className="w-full">
            {t.actions.startProposal}
          </Button>
        </div>
      </div>
    </div>
  );
};