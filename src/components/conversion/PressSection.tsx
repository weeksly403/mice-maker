import { Newspaper, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PressFeature {
  publication: string;
  logo: string;
  title: string;
  date: string;
  url: string;
  excerpt: string;
}

const pressFeatures: PressFeature[] = [
  {
    publication: 'Forbes Middle East',
    logo: '📰',
    title: 'Morocco Emerges as Top MICE Destination in Africa',
    date: 'March 2024',
    url: '#',
    excerpt: 'EventMorocco.com is pioneering innovative corporate event solutions...',
  },
  {
    publication: 'Skift Meetings',
    logo: '✈️',
    title: 'How DMCs Are Transforming Corporate Travel in North Africa',
    date: 'February 2024',
    url: '#',
    excerpt: 'Leading the charge in Morocco\'s MICE revolution...',
  },
  {
    publication: 'Business Travel News',
    logo: '💼',
    title: 'Top 10 DMCs for Incentive Travel in Morocco',
    date: 'January 2024',
    url: '#',
    excerpt: 'EventMorocco.com ranked among the most innovative DMCs...',
  },
  {
    publication: 'ICCA Insights',
    logo: '🌍',
    title: 'Morocco Conference Market Report 2024',
    date: 'December 2023',
    url: '#',
    excerpt: 'Expert analysis from EventMorocco on emerging trends...',
  },
];

export const PressSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Newspaper className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">As Featured In</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Press & Industry Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our expertise and innovative approach to MICE services in Morocco has been recognized by leading industry publications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pressFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{feature.logo}</div>
                <div className="text-sm font-semibold text-primary mb-2">
                  {feature.publication}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {feature.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{feature.date}</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Featured in 15+ international publications • Recognized as Top 5 Morocco DMC by ICCA
          </p>
        </div>
      </div>
    </section>
  );
};
