import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target } from 'lucide-react';

interface BestForBlockProps {
  title?: string;
  items: string[];
  variant?: 'default' | 'compact';
}

export const BestForBlock: React.FC<BestForBlockProps> = ({
  title = 'Best For',
  items,
  variant = 'default'
}) => {
  if (variant === 'compact') {
    return (
      <div className="my-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-start gap-3">
          <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-foreground mb-2">{title}:</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card className="my-8 border-primary/20">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
