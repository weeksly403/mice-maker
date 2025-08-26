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

  // SEO-optimized titles and descriptions based on keywords from Google Ads research
  const seoContent = {
    home: {
      title: {
        fr: 'DMC Maroc | MICE Services | Incentives Conférences Maroc',
        en: 'Morocco DMC | MICE Services | Incentives Conferences Morocco',
        es: 'DMC Marruecos | Servicios MICE | Incentivos Conferencias',
        ar: 'شركة إدارة الوجهة المغرب | خدمات MICE | حوافز مؤتمرات'
      },
      description: {
        fr: 'DMC Maroc expert : MICE, conférences, incentives, team building. Événements d\'entreprise Marrakech, Casablanca, Agadir. Devis gratuit 24h.',
        en: 'Expert Morocco DMC: MICE, conferences, incentives, team building. Corporate events Marrakech, Casablanca, Agadir. Free quote 24h.',
        es: 'DMC Marruecos experto: MICE, conferencias, incentivos, team building. Eventos corporativos Marrakech, Casablanca, Agadir. Presupuesto gratis 24h.',
        ar: 'خبير شركة إدارة الوجهة المغرب: MICE، مؤتمرات، حوافز، بناء الفريق. فعاليات الشركات مراكش، الدار البيضاء، أكادير. عرض مجاني 24 ساعة.'
      },
      keywords: {
        fr: 'DMC Maroc, MICE Maroc, destination management company Maroc, conférence Marrakech, incentive Maroc, team building Maroc, événement entreprise Maroc, séminaire Casablanca, corporate retreat Maroc',
        en: 'Morocco DMC, MICE Morocco, destination management company Morocco, conference venues Morocco, incentive travel Morocco, team building Morocco, corporate events Morocco, corporate retreats Morocco',
        es: 'DMC Marruecos, MICE Marruecos, destination management company Marruecos, conferencia Marrakech, incentivo Marruecos, team building Marruecos, eventos corporativos Marruecos',
        ar: 'شركة إدارة الوجهة المغرب، MICE المغرب، مؤتمر مراكش، حافز المغرب، بناء الفريق المغرب، فعاليات الشركات المغرب'
      }
    },
    services: {
      title: {
        fr: 'Services MICE Maroc | Conférences Incentives Team Building',
        en: 'MICE Services Morocco | Conferences Incentives Team Building',
        es: 'Servicios MICE Marruecos | Conferencias Incentivos Team Building',
        ar: 'خدمات MICE المغرب | مؤتمرات حوافز بناء الفريق'
      },
      description: {
        fr: 'Services MICE complets Maroc: conférences, séminaires, incentives, team building, galas. Organisation événements entreprise avec expertise locale 15 ans.',
        en: 'Complete MICE services Morocco: conferences, seminars, incentives, team building, galas. Corporate event organization with 15 years local expertise.',
        es: 'Servicios MICE completos Marruecos: conferencias, seminarios, incentivos, team building, galas. Organización eventos corporativos con 15 años experiencia.',
        ar: 'خدمات MICE شاملة المغرب: مؤتمرات، ندوات، حوافز، بناء الفريق، حفلات. تنظيم فعاليات الشركات مع خبرة محلية 15 سنة.'
      },
      keywords: {
        fr: 'services MICE Maroc, conférence Marrakech, incentive Maroc, team building Agadir, séminaire entreprise Casablanca, organisation événement Maroc',
        en: 'MICE services Morocco, conference Marrakech, incentive Morocco, team building Agadir, corporate seminar Casablanca, event organization Morocco',
        es: 'servicios MICE Marruecos, conferencia Marrakech, incentivo Marruecos, team building Agadir, seminario empresa Casablanca',
        ar: 'خدمات MICE المغرب، مؤتمر مراكش، حافز المغرب، بناء الفريق أكادير، ندوة شركة الدار البيضاء'
      }
    },
    faq: {
      title: {
        fr: 'FAQ DMC Maroc | Questions MICE Événements Entreprise',
        en: 'FAQ Morocco DMC | MICE Corporate Events Questions Answers', 
        es: 'FAQ DMC Marruecos | Preguntas MICE Eventos Corporativos',
        ar: 'الأسئلة الشائعة شركة إدارة الوجهة المغرب | MICE فعاليات الشركات'
      },
      description: {
        fr: 'FAQ DMC Maroc : réponses sur organisation MICE, conférences Marrakech, incentives, team building. Expert événements entreprise Maroc.',
        en: 'Morocco DMC FAQ: answers on MICE organization, Marrakech conferences, incentives, team building. Corporate events expert Morocco.',
        es: 'FAQ DMC Marruecos: respuestas sobre organización MICE, conferencias Marrakech, incentivos, team building. Experto eventos corporativos.',
        ar: 'الأسئلة الشائعة شركة إدارة الوجهة المغرب: إجابات على تنظيم MICE، مؤتمرات مراكش، حوافز، بناء الفريق.'
      },
      keywords: {
        fr: 'FAQ DMC Maroc, questions MICE Maroc, aide organisation événement, DMC Marrakech questions, planification événement Maroc',
        en: 'FAQ Morocco DMC, MICE Morocco questions, event organization help, DMC Marrakech questions, event planning Morocco',
        es: 'FAQ DMC Marruecos, preguntas MICE Marruecos, ayuda organización evento, DMC Marrakech preguntas',
        ar: 'الأسئلة الشائعة شركة إدارة الوجهة المغرب، أسئلة MICE المغرب، مساعدة تنظيم الفعاليات'
      }
    }
  };

  const currentContent = seoContent[pageType] || seoContent.home;
  const finalTitle = customTitle || currentContent.title[language];
  const finalDescription = customDescription || currentContent.description[language];
  const finalKeywords = customKeywords || currentContent.keywords[language];

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