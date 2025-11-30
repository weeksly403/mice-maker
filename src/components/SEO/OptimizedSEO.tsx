import React from 'react';
import { SEOEnhancer } from './SEOEnhancer';
import { useLanguage } from '../LanguageProvider';
import { useLocation } from 'react-router-dom';

interface OptimizedSEOProps {
  pageType?: 'home' | 'services' | 'destinations' | 'faq' | 'blog' | 'contact';
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string;
}

export const OptimizedSEO: React.FC<OptimizedSEOProps> = ({
  pageType = 'home',
  customTitle,
  customDescription,
  customKeywords
}) => {
  const { t, language } = useLanguage();
  const location = useLocation();

  interface SEOContent {
    title: string;
    description: string;
    keywords: string;
  }

  // SEO-optimized content based on focus keywords and character limits
  const seoContent: Record<string, Record<string, SEOContent>> = {
    home: {
      en: {
        title: 'Morocco DMC | Corporate Event Planning & MICE Services',
        description: 'Leading Morocco DMC for corporate events, incentive travel, conferences & team building. Expert MICE services in Marrakech, Casablanca & Morocco.',
        keywords: 'Morocco DMC, DMC Marrakech, incentive travel Morocco, team building Morocco, conference venues Morocco, corporate event Morocco, Morocco corporate retreat, MICE Morocco'
      },
      fr: {
        title: 'DMC Maroc | Événements Corporatifs & Services MICE',
        description: 'DMC leader au Maroc pour événements corporatifs, incentives, conférences & team building. Services MICE experts à Marrakech, Casablanca.',
        keywords: 'DMC Maroc, DMC Marrakech, voyage incentive Maroc, team building Maroc, lieux conférence Maroc, événement corporatif Maroc, retraite corporative Maroc, MICE Maroc'
      },
      es: {
        title: 'DMC Marruecos | Eventos Corporativos & Servicios MICE',
        description: 'DMC líder en Marruecos para eventos corporativos, incentivos, conferencias y team building. Servicios MICE expertos en Marrakech.',
        keywords: 'DMC Marruecos, DMC Marrakech, viaje incentivo Marruecos, team building Marruecos, lugares conferencia Marruecos, evento corporativo Marruecos, MICE Marruecos'
      },
      ar: {
        title: 'DMC المغرب | الفعاليات الشركات وخدمات MICE',
        description: 'DMC رائد في المغرب للفعاليات الشركات والحوافز والمؤتمرات وبناء الفرق. خدمات MICE متخصصة في مراكش والدار البيضاء.',
        keywords: 'DMC المغرب، DMC مراكش، السفر التحفيزي المغرب، بناء الفرق المغرب، أماكن المؤتمرات المغرب، الفعاليات الشركات المغرب، MICE المغرب'
      }
    },
    services: {
      en: {
        title: 'DMC Morocco Services | MICE & Corporate Event Planning',
        description: 'Expert DMC Morocco services: corporate events, incentive travel, conferences & team building. Professional MICE solutions in Marrakech & Morocco.',
        keywords: 'DMC Morocco, MICE Morocco, conference venues Morocco, incentive travel Morocco, team building Morocco, corporate event Morocco, DMC Marrakech services'
      },
      fr: {
        title: 'Services DMC Maroc | MICE & Événements Corporatifs',
        description: 'Services DMC Maroc experts : événements corporatifs, voyages incentive, conférences & team building. Solutions MICE professionnelles.',
        keywords: 'services DMC Maroc, MICE Maroc, lieux conférence Maroc, voyage incentive Maroc, team building Maroc, événement corporatif Maroc'
      },
      es: {
        title: 'Servicios DMC Marruecos | MICE & Eventos Corporativos',
        description: 'Servicios DMC Marruecos expertos: eventos corporativos, viajes incentivo, conferencias y team building. Soluciones MICE profesionales.',
        keywords: 'servicios DMC Marruecos, MICE Marruecos, lugares conferencia Marruecos, viaje incentivo Marruecos, team building Marruecos'
      },
      ar: {
        title: 'خدمات DMC المغرب | MICE والفعاليات الشركات',
        description: 'خدمات DMC المغرب متخصصة: فعاليات شركات، سفر حوافز، مؤتمرات وبناء فرق. حلول MICE احترافية في مراكش والمغرب.',
        keywords: 'خدمات DMC المغرب، MICE المغرب، أماكن المؤتمرات المغرب، سفر الحوافز المغرب، بناء الفرق المغرب'
      }
    },
    blog: {
      en: {
        title: 'Morocco MICE Blog | DMC Insights & Corporate Event Tips',
        description: 'Expert insights on Morocco MICE, corporate events, incentive travel & team building from leading DMC. Latest trends and tips.',
        keywords: 'Morocco MICE blog, DMC Morocco insights, corporate events Morocco, incentive travel tips, team building Morocco, conference planning'
      },
      fr: {
        title: 'Blog MICE Maroc | Conseils DMC & Événements Corporatifs',
        description: 'Conseils experts sur MICE Maroc, événements corporatifs, voyages incentive & team building par DMC leader. Tendances et astuces.',
        keywords: 'blog MICE Maroc, conseils DMC Maroc, événements corporatifs Maroc, conseils voyage incentive, team building Maroc'
      },
      es: {
        title: 'Blog MICE Marruecos | Consejos DMC & Eventos Corporativos',
        description: 'Consejos expertos sobre MICE Marruecos, eventos corporativos, viajes incentivo y team building por DMC líder. Tendencias y tips.',
        keywords: 'blog MICE Marruecos, consejos DMC Marruecos, eventos corporativos Marruecos, consejos viaje incentivo, team building'
      },
      ar: {
        title: 'مدونة MICE المغرب | نصائح DMC والفعاليات الشركات',
        description: 'نصائح خبراء حول MICE المغرب والفعاليات الشركات وسفر الحوافز وبناء الفرق من DMC رائد. اتجاهات ونصائح حديثة.',
        keywords: 'مدونة MICE المغرب، نصائح DMC المغرب، فعاليات شركات المغرب، نصائح سفر الحوافز، بناء الفرق'
      }
    },
    faq: {
      en: {
        title: 'Morocco DMC FAQ | MICE & Corporate Events Questions',
        description: 'Answers to common questions about Morocco DMC, MICE services, corporate events, incentive travel & team building. Expert guidance.',
        keywords: 'Morocco DMC FAQ, MICE questions Morocco, corporate events help, DMC services info, incentive travel questions, conference planning'
      },
      fr: {
        title: 'FAQ DMC Maroc | Questions MICE & Événements Corporatifs',
        description: 'Réponses aux questions fréquentes sur DMC Maroc, services MICE, événements corporatifs, voyages incentive & team building.',
        keywords: 'FAQ DMC Maroc, questions MICE Maroc, aide événements corporatifs, infos services DMC, questions voyage incentive'
      },
      es: {
        title: 'FAQ DMC Marruecos | Preguntas MICE & Eventos Corporativos',
        description: 'Respuestas a preguntas frecuentes sobre DMC Marruecos, servicios MICE, eventos corporativos, viajes incentivo y team building.',
        keywords: 'FAQ DMC Marruecos, preguntas MICE Marruecos, ayuda eventos corporativos, info servicios DMC, preguntas viaje incentivo'
      },
      ar: {
        title: 'الأسئلة الشائعة DMC المغرب | أسئلة MICE والفعاليات',
        description: 'إجابات على الأسئلة الشائعة حول DMC المغرب وخدمات MICE والفعاليات الشركات وسفر الحوافز وبناء الفرق.',
        keywords: 'أسئلة شائعة DMC المغرب، أسئلة MICE المغرب، مساعدة فعاليات شركات، معلومات خدمات DMC'
      }
    },
    destinations: {
      en: {
        title: 'MICE Destinations Morocco | Marrakech, Casablanca, Agadir, Fes',
        description: 'Explore top corporate event destinations in Morocco: Marrakech, Casablanca, Agadir, Fes & Sahara. Expert DMC venue recommendations.',
        keywords: 'Morocco destinations, MICE venues Morocco, Marrakech events, Casablanca conferences, Agadir team building, Fes corporate, Sahara retreats'
      },
      fr: {
        title: 'Destinations MICE Maroc | Marrakech, Casablanca, Agadir, Fès',
        description: 'Découvrez les meilleures destinations pour événements corporatifs au Maroc : Marrakech, Casablanca, Agadir, Fès et Sahara. Recommandations DMC.',
        keywords: 'destinations Maroc, lieux MICE Maroc, événements Marrakech, conférences Casablanca, team building Agadir, corporatif Fès, retraites Sahara'
      },
      es: {
        title: 'Destinos MICE Marruecos | Marrakech, Casablanca, Agadir, Fez',
        description: 'Explora los mejores destinos para eventos corporativos en Marruecos: Marrakech, Casablanca, Agadir, Fez y Sahara. Recomendaciones DMC.',
        keywords: 'destinos Marruecos, lugares MICE Marruecos, eventos Marrakech, conferencias Casablanca, team building Agadir, corporativo Fez, retiros Sahara'
      },
      ar: {
        title: 'وجهات MICE المغرب | مراكش، الدار البيضاء، أكادير، فاس',
        description: 'اكتشف أفضل وجهات الفعاليات الشركات في المغرب: مراكش، الدار البيضاء، أكادير، فاس والصحراء. توصيات DMC متخصصة.',
        keywords: 'وجهات المغرب، أماكن MICE المغرب، فعاليات مراكش، مؤتمرات الدار البيضاء، بناء فرق أكادير، شركات فاس، خلوات الصحراء'
      }
    }
  };

  const currentContent = seoContent[pageType]?.[language] || seoContent.home[language];
  const finalTitle = customTitle || currentContent.title;
  const finalDescription = customDescription || currentContent.description;
  const finalKeywords = customKeywords || currentContent.keywords;

  return (
    <SEOEnhancer
      title={finalTitle}
      description={finalDescription}
      keywords={finalKeywords}
      type="website"
      structuredDataType="organization"
    />
  );
};