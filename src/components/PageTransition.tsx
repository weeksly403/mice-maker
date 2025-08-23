import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'slide-up';
  duration?: number;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  className = "",
  animationType = 'fade-up',
  duration = 0.6
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const getAnimationClasses = () => {
    switch (animationType) {
      case 'fade-left':
        return 'animate-fade-in-left';
      case 'fade-right':
        return 'animate-fade-in-right';
      case 'scale':
        return 'animate-scale-in';
      case 'slide-up':
        return 'animate-slide-up';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div 
      className={cn(
        'page-transition',
        isVisible && getAnimationClasses(),
        className
      )}
      style={{
        animationDuration: `${duration}s`,
        animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
};