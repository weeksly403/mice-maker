import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface DecisionStep {
  condition: string;
  recommendation: string;
  reason: string;
}

interface DecisionFrameworkProps {
  title: string;
  description?: string;
  steps: DecisionStep[];
}

export const DecisionFramework: React.FC<DecisionFrameworkProps> = ({
  title,
  description,
  steps
}) => {
  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {step.condition}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.recommendation}
                    </h3>
                  </div>
                  
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p>{step.reason}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
