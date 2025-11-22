import React from 'react';
import { getOptimizedImageUrl, OptimizedImageOptions } from '@/utils/imageOptimization';

interface OptimizedImageProps extends OptimizedImageOptions {
  src: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onClick?: () => void;
  fetchpriority?: 'high' | 'low' | 'auto';
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
  onClick,
  fetchpriority = 'auto'
}) => {
  // For Vite-imported assets (absolute URLs), use them directly without optimization
  // They're already processed by Vite's build pipeline
  const isViteAsset = src.startsWith('/') || src.startsWith('http');
  
  if (isViteAsset) {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        className={className}
        onError={onError}
        onClick={onClick}
        fetchPriority={fetchpriority}
      />
    );
  }

  // For other images, use the optimization utility
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
        fetchPriority={fetchpriority}
      />
    </picture>
  );
};
