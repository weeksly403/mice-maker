import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  children: React.ReactNode;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className, 
  delay = 0,
  ...props 
}) => {
  const ref = useScrollReveal(0.1);
  
  return (
    <Card
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'hover-lift transition-corporate scroll-reveal',
        delay > 0 && `animate-stagger-fade-in`,
        delay > 0 && `stagger-${Math.min(delay, 5)}`,
        className
      )}
      style={{ 
        animationDelay: delay > 0 ? `${delay * 0.1}s` : '0s' 
      }}
      {...props}
    >
      {children}
    </Card>
  );
};