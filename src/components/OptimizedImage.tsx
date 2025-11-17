import React from 'react';
import { getOptimizedImageUrl, OptimizedImageOptions } from '@/utils/imageOptimization';

interface OptimizedImageProps extends OptimizedImageOptions {
  src: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onClick?: () => void;
}

/**
 * Optimized Image Component with WebP support and lazy loading
 * Automatically handles responsive images and fallbacks
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  quality,
  loading = 'lazy',
  onError,
  onClick
}) => {
  const optimized = getOptimizedImageUrl(src, { width, height, quality, loading });

  return (
    <picture className={className}>
      {/* WebP source for modern browsers */}
      {optimized.webp && (
        <source 
          srcSet={optimized.srcSet || optimized.webp} 
          type="image/webp"
          sizes={optimized.sizes}
        />
      )}
      
      {/* Fallback to original format */}
      <img
        src={optimized.src}
        alt={alt}
        loading={optimized.loading}
        decoding={optimized.decoding}
        width={optimized.width}
        height={optimized.height}
        className={className}
        onError={onError}
        onClick={onClick}
      />
    </picture>
  );
};
