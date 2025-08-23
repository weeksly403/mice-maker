import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { HreflangTags } from './HreflangTags';
import { StructuredData } from './StructuredData';
import { useLanguage } from '../LanguageProvider';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'service' | 'destination';
  structuredData?: any;
  structuredDataType?: 'organization' | 'article' | 'event' | 'faq' | 'breadcrumb';
  children?: React.ReactNode;
}

export const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title,
  description,
  keywords,
  image = '/logo.png',
  type = 'website',
  structuredData,
  structuredDataType = 'organization',
  children
}) => {
  const location = useLocation();
  const { language, t } = useLanguage();
  
  const baseUrl = 'https://eventmorocco.com';
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  // Default SEO values
  const defaultTitle = t('Corporate Event Planning Morocco | MICE Services | Event Morocco');
  const defaultDescription = t('Leading MICE & Corporate Event Planning company in Morocco. Expert conference organization, incentive travel, team building & corporate events in Marrakech, Casablanca & across Morocco.');
  const defaultKeywords = 'corporate events Morocco, MICE Morocco, conference venues Morocco, incentive travel Morocco, team building Morocco, event planning Marrakech, corporate retreat Casablanca, business events Agadir';
  
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  
  // Generate breadcrumb schema for current page
  const breadcrumbItems = location.pathname
    .split('/')
    .filter(Boolean)
    .reduce((acc: any[], segment, index, array) => {
      if (segment === language) return acc; // Skip language segment
      
      const path = '/' + array.slice(0, index + 1).join('/');
      const name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      acc.push({
        name: index === 0 ? t('Home') : name,
        url: `${baseUrl}${path}`
      });
      
      return acc;
    }, []);
  
  if (breadcrumbItems.length === 0) {
    breadcrumbItems.push({ name: t('Home'), url: baseUrl });
  }

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{finalTitle}</title>
        <meta name="description" content={finalDescription} />
        <meta name="keywords" content={finalKeywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Event Morocco" />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={finalTitle} />
        <meta property="og:description" content={finalDescription} />
        <meta property="og:image" content={`${baseUrl}${image}`} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Event Morocco" />
        <meta property="og:locale" content={language === 'en' ? 'en_US' : language === 'fr' ? 'fr_FR' : language === 'es' ? 'es_ES' : 'ar_MA'} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={finalTitle} />
        <meta name="twitter:description" content={finalDescription} />
        <meta name="twitter:image" content={`${baseUrl}${image}`} />
        
        {/* Additional SEO Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#D97706" />
        <meta name="msapplication-TileColor" content="#D97706" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Language-specific meta tags */}
        <meta httpEquiv="content-language" content={language} />
        <meta name="language" content={language} />
      </Helmet>
      
      {/* Hreflang Tags */}
      <HreflangTags currentLanguage={language} pagePath={location.pathname} />
      
      {/* Structured Data */}
      <StructuredData 
        type={structuredDataType}
        data={structuredData || { items: breadcrumbItems }}
      />
      
      {/* Breadcrumb Schema */}
      {breadcrumbItems.length > 1 && (
        <StructuredData 
          type="breadcrumb"
          data={{ items: breadcrumbItems }}
        />
      )}
      
      {children}
    </>
  );
};