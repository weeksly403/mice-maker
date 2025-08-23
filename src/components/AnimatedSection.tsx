import React from 'react';
import { useScrollReveal, UseScrollRevealOptions } from '@/hooks/useScrollReveal';
import { useParallax, UseParallaxOptions } from '@/hooks/useParallax';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animationOptions?: UseScrollRevealOptions;
  parallaxOptions?: UseParallaxOptions;
  enableParallax?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animationOptions = {},
  parallaxOptions = {},
  enableParallax = false,
  ...props
}) => {
  const scrollRef = useScrollReveal(animationOptions);
  const parallaxRef = useParallax(parallaxOptions);

  // Use parallax ref if enabled, otherwise use scroll reveal ref
  const ref = enableParallax ? parallaxRef : scrollRef;

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'relative',
        enableParallax && 'parallax-element',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};