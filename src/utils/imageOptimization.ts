/**
 * Image Optimization Utilities for EventMorocco.com
 * Provides WebP conversion support, lazy loading, and responsive images
 */

export interface OptimizedImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  loading?: 'lazy' | 'eager';
}

export interface OptimizedImageResult {
  src: string;
  webp?: string;
  srcSet?: string;
  sizes?: string;
  loading: 'lazy' | 'eager';
  decoding: 'async' | 'sync';
  width?: number;
  height?: number;
}

/**
 * Generates optimized image URLs with WebP support and responsive srcsets
 * @param imagePath - Original image path
 * @param options - Optimization options
 * @returns Optimized image properties
 */
export const getOptimizedImageUrl = (
  imagePath: string,
  options: OptimizedImageOptions = {}
): OptimizedImageResult => {
  const {
    width,
    height,
    quality = 85,
    loading = 'lazy'
  } = options;

  // Extract image name and extension
  const pathParts = imagePath.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const fileNameWithoutExt = fileName.split('.')[0];
  const extension = fileName.split('.').pop();
  const basePath = pathParts.slice(0, -1).join('/');

  // Generate WebP path
  const webpPath = `${basePath}/${fileNameWithoutExt}.webp`;

  // Generate responsive srcset if width is provided
  let srcSet: string | undefined;
  if (width) {
    const srcSetEntries = [
      `${webpPath} 1x`,
      `${basePath}/${fileNameWithoutExt}@2x.webp 2x`
    ];
    srcSet = srcSetEntries.join(', ');
  }

  // Generate sizes attribute for responsive images
  let sizes: string | undefined;
  if (width) {
    sizes = `(max-width: 640px) 100vw, (max-width: 1024px) 90vw, ${width}px`;
  }

  return {
    src: imagePath,
    webp: webpPath,
    srcSet,
    sizes,
    loading,
    decoding: 'async',
    width,
    height
  };
};

/**
 * Component helper for generating <picture> element with WebP fallback
 * @param imagePath - Original image path
 * @param alt - Alt text for accessibility
 * @param options - Optimization options
 * @returns Picture element props
 */
export const getPictureProps = (
  imagePath: string,
  alt: string,
  options: OptimizedImageOptions = {}
) => {
  const optimized = getOptimizedImageUrl(imagePath, options);

  return {
    sources: [
      {
        srcSet: optimized.webp,
        type: 'image/webp'
      }
    ],
    img: {
      src: optimized.src,
      alt,
      loading: optimized.loading,
      decoding: optimized.decoding,
      width: optimized.width,
      height: optimized.height
    }
  };
};

/**
 * Preload critical images for better performance
 * @param imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls: string[]) => {
  if (typeof window === 'undefined') return;

  imageUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    
    // Add WebP support check
    if (url.endsWith('.webp')) {
      link.type = 'image/webp';
    }
    
    document.head.appendChild(link);
  });
};

/**
 * Check if browser supports WebP format
 * @returns Promise that resolves to boolean
 */
export const supportsWebP = (): Promise<boolean> => {
  if (typeof window === 'undefined') return Promise.resolve(false);

  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};
