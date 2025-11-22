import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Calendar, Euro, Target, TrendingUp, Building } from 'lucide-react';

interface QuickFact {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

interface QuickFactsProps {
  facts: QuickFact[];
  title?: string;
  variant?: 'default' | 'compact';
}

export const QuickFacts: React.FC<QuickFactsProps> = ({ 
  facts, 
  title = "Quick Facts",
  variant = 'default'
}) => {
  if (variant === 'compact') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
        {facts.map((fact, index) => {
          const IconComponent = fact.icon;
          return (
            <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
              <IconComponent className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">{fact.label}</p>
                <p className="text-sm font-semibold">{fact.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <Card className="my-8 border-l-4 border-l-primary">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">{title}</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {facts.map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <div key={index} className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{fact.label}</p>
                  <p className="font-semibold">{fact.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

// Pre-configured fact types for common use cases
export const createPricingFact = (value: string): QuickFact => ({
  icon: Euro,
  label: "Price Range",
  value
});

export const createDurationFact = (value: string): QuickFact => ({
  icon: Clock,
  label: "Duration",
  value
});

export const createGroupSizeFact = (value: string): QuickFact => ({
  icon: Users,
  label: "Group Size",
  value
});

export const createBestMonthsFact = (value: string): QuickFact => ({
  icon: Calendar,
  label: "Best Months",
  value
});

export const createROIFact = (value: string): QuickFact => ({
  icon: TrendingUp,
  label: "Average ROI",
  value
});

export const createLeadTimeFact = (value: string): QuickFact => ({
  icon: Target,
  label: "Lead Time",
  value
});

export const createVenuesFact = (value: string): QuickFact => ({
  icon: Building,
  label: "Available Venues",
  value
});
