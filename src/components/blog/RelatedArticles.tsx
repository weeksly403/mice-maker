import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { OptimizedImage } from '@/components/OptimizedImage';

interface RelatedArticle {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  category: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  currentSlug: string;
}

export const RelatedArticles = ({ articles, currentSlug }: RelatedArticlesProps) => {
  // Filter out current article
  const filteredArticles = articles.filter(article => article.slug !== currentSlug).slice(0, 3);

  if (filteredArticles.length === 0) {
    return null;
  }

  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-8">Related Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.slug} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <OptimizedImage
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                  {article.category}
                </div>
                <CardTitle className="text-lg line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                
                <Link
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export default related articles data
export const defaultRelatedArticles: RelatedArticle[] = [
  {
    title: 'How to Choose the Right DMC in Morocco',
    excerpt: 'Complete buyer\'s guide for selecting the perfect destination management company for your corporate event.',
    slug: 'choosing-dmc-morocco',
    image: '/blog-dmc-selection-checklist.jpg',
    category: 'DMC Selection',
  },
  {
    title: 'ROI of Corporate Events in Morocco',
    excerpt: 'Measuring success and maximizing return on investment for MICE events in Morocco.',
    slug: 'corporate-event-roi',
    image: '/blog-roi-infographic.jpg',
    category: 'Event ROI',
  },
  {
    title: 'Marrakech Incentive Travel Guide',
    excerpt: 'Ultimate guide to planning memorable incentive trips in Morocco\'s most magical city.',
    slug: 'marrakech-incentive',
    image: '/blog-marrakech-incentive.jpg',
    category: 'Incentive Travel',
  },
  {
    title: 'AFCON 2025 Corporate Hospitality Guide',
    excerpt: 'Premium VIP experiences and corporate packages for Africa Cup of Nations 2025.',
    slug: 'afcon-corporate-hospitality',
    image: '/blog-afcon-vip-box.jpg',
    category: 'AFCON 2025',
  },
  {
    title: 'Agadir Team Building Excellence',
    excerpt: 'Best practices and activity recommendations for team building events in Agadir.',
    slug: 'agadir-team-building',
    image: '/blog-agadir-team.jpg',
    category: 'Team Building',
  },
  {
    title: 'Hybrid Events in Morocco',
    excerpt: 'Future-proof your MICE events with hybrid technology and in-person engagement.',
    slug: 'hybrid-events-morocco',
    image: '/blog-hybrid-event-setup.jpg',
    category: 'Hybrid Events',
  },
];
