import { useEffect, useRef } from 'react';

export type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'rotate' | 'slide-up' | 'slide-down';

export interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  animationType?: AnimationType;
  delay?: number;
  duration?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationType = 'fade-up',
    delay = 0,
    duration = 0.6,
    stagger = false,
    staggerDelay = 0.1
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            
            if (stagger) {
              // Animate children with stagger effect
              const children = target.children;
              Array.from(children).forEach((child, index) => {
                const childElement = child as HTMLElement;
                setTimeout(() => {
                  childElement.classList.add('revealed');
                }, index * staggerDelay * 1000);
              });
            } else {
              // Animate the element itself
              setTimeout(() => {
                target.classList.add('revealed');
              }, delay * 1000);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Add animation classes
    const animationClass = `scroll-reveal-${animationType}`;
    if (!element.classList.contains(animationClass)) {
      element.classList.add(animationClass);
    }

    // Set custom CSS properties for animation
    element.style.setProperty('--reveal-duration', `${duration}s`);
    element.style.setProperty('--reveal-delay', `${delay}s`);

    if (stagger) {
      const children = element.children;
      Array.from(children).forEach((child, index) => {
        const childElement = child as HTMLElement;
        childElement.classList.add(`scroll-reveal-${animationType}`);
        childElement.style.setProperty('--reveal-duration', `${duration}s`);
        childElement.style.setProperty('--reveal-delay', `${index * staggerDelay}s`);
      });
    }

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, animationType, delay, duration, stagger, staggerDelay]);

  return elementRef;
};