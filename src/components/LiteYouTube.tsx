import { useState } from 'react';

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * Lightweight YouTube embed component that defers loading the full iframe
 * until user interaction, significantly reducing initial page weight and
 * main thread work.
 */
export const LiteYouTube = ({ videoId, title, className = '' }: LiteYouTubeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <iframe
        className={className}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&enablejsapi=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`relative cursor-pointer bg-black ${className}`}
      aria-label={`Play video: ${title}`}
      style={{ aspectRatio: '16/9' }}
    >
      {/* YouTube thumbnail */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
        <svg
          className="w-20 h-20 text-white opacity-80 hover:opacity-100 transition-opacity"
          viewBox="0 0 68 48"
          fill="currentColor"
        >
          <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" />
          <path d="M 45,24 27,14 27,34" fill="#000" />
        </svg>
      </div>
    </button>
  );
};
