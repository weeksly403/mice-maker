import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ArticleSchemaProps {
  title: string;
  description: string;
  publishDate: string;
  modifiedDate?: string;
  authorName: string;
  authorTitle?: string;
  authorImage?: string;
  wordCount: number;
  articleSection: string;
  keywords?: string[];
  imageUrl?: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  title,
  description,
  publishDate,
  modifiedDate,
  authorName,
  authorTitle = "Senior MICE Consultant",
  authorImage = "https://eventmorocco.com/team/default-author.jpg",
  wordCount,
  articleSection,
  keywords = [],
  imageUrl = "https://eventmorocco.com/hero-morocco-mice.jpg",
}) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "wordCount": wordCount,
    "articleSection": articleSection,
    "keywords": keywords.join(", "),
    "author": {
      "@type": "Person",
      "name": authorName,
      "jobTitle": authorTitle,
      "image": authorImage,
      "url": `https://eventmorocco.com/about#team`,
      "worksFor": {
        "@type": "Organization",
        "name": "EventMorocco",
        "url": "https://eventmorocco.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "EventMorocco",
      "url": "https://eventmorocco.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eventmorocco.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": typeof window !== 'undefined' ? window.location.href : "https://eventmorocco.com"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
    </Helmet>
  );
};
