import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { getLocalizedPath } from '@/lib/i18n';

interface RelatedArticle {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  image: string;
}

interface RelatedArticlesSectionProps {
  currentSlug: string;
  articles: RelatedArticle[];
  maxArticles?: number;
}

export const RelatedArticlesSection: React.FC<RelatedArticlesSectionProps> = ({
  currentSlug,
  articles,
  maxArticles = 3
}) => {
  const { t, language } = useLanguage();
  
  // Filter out current article and limit to maxArticles
  const relatedArticles = articles
    .filter(article => article.slug !== currentSlug)
    .slice(0, maxArticles);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            {language === 'fr' ? 'Articles Connexes' : 
             language === 'es' ? 'Artículos Relacionados' : 
             language === 'ar' ? 'مقالات ذات صلة' : 
             'Related Articles'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'fr' ? 'Continuez votre lecture avec ces articles recommandés' : 
             language === 'es' ? 'Continúe su lectura con estos artículos recomendados' : 
             language === 'ar' ? 'تابع القراءة مع هذه المقالات الموصى بها' : 
             'Continue reading with these recommended articles'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedArticles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elegant transition-smooth">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 left-4 bg-white/90 text-foreground"
                >
                  {article.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                  
                  <Link 
                    to={getLocalizedPath(`/blog/${article.slug}`)}
                    className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 transition-colors"
                  >
                    {language === 'fr' ? 'Lire' : 
                     language === 'es' ? 'Leer' : 
                     language === 'ar' ? 'اقرأ' : 
                     'Read'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
