import React from 'react';
import { useScrollReveal, UseScrollRevealOptions, AnimationType } from '@/hooks/useScrollReveal';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  children: React.ReactNode;
  animationType?: AnimationType;
  enableHover?: boolean;
  stagger?: boolean;
  staggerDelay?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className, 
  delay = 0,
  animationType = 'fade-up',
  enableHover = true,
  stagger = false,
  staggerDelay = 0.1,
  ...props 
}) => {
  const scrollOptions: UseScrollRevealOptions = {
    threshold: 0.1,
    animationType,
    delay,
    stagger,
    staggerDelay,
    duration: 0.6
  };

  const ref = useScrollReveal(scrollOptions);
  
  return (
    <Card
      ref={ref}
      className={cn(
        'transition-all duration-300',
        enableHover && 'hover-lift hover:shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
};