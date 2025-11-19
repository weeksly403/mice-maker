import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Clock, Users as UsersIcon, ArrowRight } from 'lucide-react';

interface TLDRSummaryProps {
  mainInsight: string;
  keyTakeaways: string[];
  bestFor: string;
  actionRequired: string;
  readTime?: string;
}

export const TLDRSummary: React.FC<TLDRSummaryProps> = ({
  mainInsight,
  keyTakeaways,
  bestFor,
  actionRequired,
  readTime
}) => {
  return (
    <Card className="my-8 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold">TL;DR - Article Summary</h3>
          </div>
          {readTime && (
            <Badge variant="secondary" className="gap-1">
              <Clock className="w-3 h-3" />
              {readTime}
            </Badge>
          )}
        </div>

        <div className="space-y-4">
          {/* Main Insight */}
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2">Main Insight:</p>
            <p className="text-base font-medium">{mainInsight}</p>
          </div>

          {/* Key Takeaways */}
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2">Key Takeaways:</p>
            <ul className="space-y-2">
              {keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Best For */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-background">
            <UsersIcon className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm font-semibold mb-1">Best For:</p>
              <p className="text-sm text-muted-foreground">{bestFor}</p>
            </div>
          </div>

          {/* Action Required */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
            <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm font-semibold mb-1">Action Required:</p>
              <p className="text-sm">{actionRequired}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
