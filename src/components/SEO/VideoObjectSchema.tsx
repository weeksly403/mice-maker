import React from 'react';
import { Helmet } from 'react-helmet-async';

interface VideoObjectSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string; // ISO 8601 duration format (e.g., "PT2M30S" for 2 minutes 30 seconds)
  embedUrl?: string;
  contentUrl?: string;
}

export const VideoObjectSchema: React.FC<VideoObjectSchemaProps> = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration = "PT3M",
  embedUrl,
  contentUrl
}) => {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "duration": duration,
    ...(embedUrl && { "embedUrl": embedUrl }),
    ...(contentUrl && { "contentUrl": contentUrl })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(videoSchema)}
      </script>
    </Helmet>
  );
};
