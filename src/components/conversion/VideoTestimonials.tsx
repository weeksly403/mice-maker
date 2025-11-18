import { useState } from 'react';
import { Play, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { trackVideoEngagement } from '@/utils/enhancedAnalytics';

interface VideoTestimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
  quote: string;
  eventType: string;
}

const testimonials: VideoTestimonial[] = [
  {
    id: 'testimonial-1',
    clientName: 'Sarah Johnson',
    company: 'Global Tech Corp',
    role: 'VP of Corporate Events',
    thumbnail: '🎥',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: 'EventMorocco transformed our annual conference into an unforgettable experience. Their attention to detail and local expertise is unmatched.',
    eventType: 'Annual Conference - 300 attendees',
  },
  {
    id: 'testimonial-2',
    clientName: 'Michael Chen',
    company: 'European Pharma',
    role: 'Director of Incentive Programs',
    thumbnail: '🎬',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: 'The incentive trip they organized in Marrakech exceeded all expectations. Our team is still talking about it months later.',
    eventType: 'Incentive Trip - 150 attendees',
  },
  {
    id: 'testimonial-3',
    clientName: 'Emma Rodriguez',
    company: 'Finance International',
    role: 'Head of HR',
    thumbnail: '📹',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: 'Professional, creative, and incredibly responsive. EventMorocco made planning our team building retreat stress-free and successful.',
    eventType: 'Team Building - 80 attendees',
  },
];

export const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);

  const handlePlayClick = (testimonial: VideoTestimonial) => {
    setSelectedVideo(testimonial);
    trackVideoEngagement(testimonial.id, 'play');
  };

  return (
    <>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Quote className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Client Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Hear From Our Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from event planners who chose EventMorocco for their corporate events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div
                    className="relative aspect-video bg-muted flex items-center justify-center cursor-pointer group overflow-hidden"
                    onClick={() => handlePlayClick(testimonial)}
                  >
                    <div className="text-6xl">{testimonial.thumbnail}</div>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-3 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold">{testimonial.clientName}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      <p className="text-xs text-primary mt-2">{testimonial.eventType}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedVideo && (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo.videoUrl}
                title={`${selectedVideo.clientName} testimonial`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
