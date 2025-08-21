import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getLocalizedPath } from '@/lib/i18n';
import heroImage from '@/assets/hero-morocco-mice.jpg';
import desertImage from '@/assets/desert-team-building.jpg';
import conferenceImage from '@/assets/marrakech-conference.jpg';
import venuesImage from '@/assets/blog-morocco-venues.jpg';
import incentiveImage from '@/assets/blog-marrakech-incentive.jpg';
import agadirImage from '@/assets/blog-agadir-team.jpg';
import spanishImage from '@/assets/blog-spanish-corporate.jpg';
import gulfImage from '@/assets/blog-gulf-team.jpg';
import saharaImage from '@/assets/blog-sahara-retreat.jpg';

const Blog: React.FC = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      slug: 'organizing-successful-seminars-marrakech',
      title: t('blogPost7Title'),
      excerpt: t('blogPost7Excerpt'),
      image: conferenceImage,
      category: t('venues'),
      readTime: '12 min',
      date: '2024-03-20',
      featured: true
    },
    {
      slug: 'top-venues-morocco-conferences',
      title: t('blogPost1Title'),
      excerpt: t('blogPost1Excerpt'),
      image: venuesImage,
      category: t('venues'),
      readTime: '8 min',
      date: '2024-03-15',
      featured: true
    },
    {
      slug: 'marrakech-incentive-capital',
      title: t('blogPost2Title'),
      excerpt: t('blogPost2Excerpt'),
      image: incentiveImage,
      category: t('incentives'),
      readTime: '6 min',
      date: '2024-03-10',
      featured: true
    },
    {
      slug: 'team-building-agadir-activities',
      title: t('blogPost3Title'),
      excerpt: t('blogPost3Excerpt'),
      image: agadirImage,
      category: t('teamBuilding'),
      readTime: '7 min',
      date: '2024-03-05',
      featured: false
    },
    {
      slug: 'corporate-travel-morocco-spanish-companies',
      title: t('blogPost4Title'),
      excerpt: t('blogPost4Excerpt'),
      image: spanishImage,
      category: t('corporate'),
      readTime: '9 min',
      date: '2024-02-28',
      featured: false
    },
    {
      slug: 'team-building-morocco-gulf-companies',
      title: t('blogPost5Title'),
      excerpt: t('blogPost5Excerpt'),
      image: gulfImage,
      category: t('teamBuilding'),
      readTime: '5 min',
      date: '2024-02-20',
      featured: false
    },
    {
      slug: 'sahara-desert-corporate-retreats',
      title: t('blogPost6Title'),
      excerpt: t('blogPost6Excerpt'),
      image: saharaImage,
      category: t('retreats'),
      readTime: '10 min',
      date: '2024-02-15',
      featured: false
    }
  ];

  const categories = [
    { name: t('allCategories'), slug: 'all', count: blogPosts.length },
    { name: t('venues'), slug: 'venues', count: blogPosts.filter(post => post.category === t('venues')).length },
    { name: t('incentives'), slug: 'incentives', count: blogPosts.filter(post => post.category === t('incentives')).length },
    { name: t('teamBuilding'), slug: 'team-building', count: blogPosts.filter(post => post.category === t('teamBuilding')).length },
    { name: t('corporate'), slug: 'corporate', count: blogPosts.filter(post => post.category === t('corporate')).length },
    { name: t('retreats'), slug: 'retreats', count: blogPosts.filter(post => post.category === t('retreats')).length }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero opacity-90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
            {t('blogPageTitle')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {t('blogPageDesc')}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Badge
                key={category.slug}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-20">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
                {t('featuredPosts')}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <Card key={post.slug} className="group overflow-hidden shadow-card hover:shadow-elegant transition-smooth border-0">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="default" className="bg-primary">
                          {t('featured')}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      
                      <Button asChild variant="ghost" className="p-0 h-auto font-semibold group/btn">
                        <Link to={getLocalizedPath(`/blog/${post.slug}`)}>
                          {t('readMore')}
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Regular Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              {t('latestArticles')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.slug} className="group overflow-hidden shadow-card hover:shadow-elegant transition-smooth border-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-smooth line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Button asChild variant="ghost" className="p-0 h-auto font-semibold group/btn">
                      <Link to={getLocalizedPath(`/blog/${post.slug}`)}>
                        {t('readMore')}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              {t('stayUpdated')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('stayUpdatedDesc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="cta" size="lg">
                {t('subscribe')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
            {t('readyToStart')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('readyToStartDesc')}
          </p>
          <Button variant="cta" size="lg" className="text-lg px-12 py-6">
            {t('getProposal')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;