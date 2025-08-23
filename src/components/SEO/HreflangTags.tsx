import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface HreflangTagsProps {
  currentLanguage: string;
  pagePath: string;
}

export const HreflangTags: React.FC<HreflangTagsProps> = ({ currentLanguage, pagePath }) => {
  const location = useLocation();
  const baseUrl = 'https://eventmorocco.com';
  
  // Remove language prefix to get the base path
  const getBasePath = (path: string) => {
    return path.replace(/^\/(fr|es|ar)/, '') || '/';
  };
  
  const basePath = getBasePath(pagePath);
  
  // Generate hreflang URLs for all languages
  const hreflangUrls = {
    'x-default': `${baseUrl}${basePath}`,
    'en': `${baseUrl}${basePath}`,
    'fr': `${baseUrl}/fr${basePath}`,
    'es': `${baseUrl}/es${basePath}`,
    'ar': `${baseUrl}/ar${basePath}`
  };
  
  return (
    <Helmet>
      {Object.entries(hreflangUrls).map(([lang, url]) => (
        <link 
          key={lang}
          rel="alternate" 
          hrefLang={lang} 
          href={url}
        />
      ))}
    </Helmet>
  );
};