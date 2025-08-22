import { useEffect, useRef } from 'react';

export const useScrollReveal = (threshold: number = 0.1) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Add scroll-reveal class if not already present
    if (!element.classList.contains('scroll-reveal')) {
      element.classList.add('scroll-reveal');
    }

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return elementRef;
};