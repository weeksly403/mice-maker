import React from 'react';

interface ImageSource {
  srcSet: string;
  sizes?: string;
  type?: string;
}

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sources?: ImageSource[];
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onClick?: () => void;
}

/**
 * Advanced Responsive Image Component with WebP support and srcset
 * Provides optimal image delivery with multiple formats and sizes
 */
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  sources = [],
  loading = 'lazy',
  fetchpriority = 'auto',
  onError,
  onClick,
}) => {
  // If no sources provided, render simple img
  if (sources.length === 0) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className={className}
        onError={onError}
        onClick={onClick}
        fetchPriority={fetchpriority}
      />
    );
  }

  // Render picture element with multiple sources
  return (
    <picture>
      {sources.map((source, index) => (
        <source
          key={index}
          srcSet={source.srcSet}
          sizes={source.sizes}
          type={source.type}
        />
      ))}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className={className}
        onError={onError}
        onClick={onClick}
        fetchPriority={fetchpriority}
      />
    </picture>
  );
};
