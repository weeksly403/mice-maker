import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { analytics } from '@/utils/analytics';

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (isOpen) {
      analytics.trackButtonClick('live_chat_opened', 'floating_button');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    analytics.trackFormSubmit('contact');
    analytics.trackButtonClick('live_chat_message_sent', 'chat_widget');
    
    // In production, this would integrate with a real chat service
    alert('Thank you! Our team will respond shortly. For immediate assistance, please call +212 5XX-XXXXXX');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
        size="icon"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] shadow-2xl">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold">Chat with EventMorocco</h3>
            <p className="text-sm opacity-90">We typically reply within minutes</p>
          </div>

          <div className="p-4 max-h-96 overflow-y-auto bg-muted/30">
            <div className="bg-background p-3 rounded-lg shadow-sm mb-4">
              <p className="text-sm">
                👋 Hi! How can we help you plan your perfect event in Morocco?
              </p>
              <p className="text-xs text-muted-foreground mt-2">EventMorocco Team • Just now</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={3}
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="p-3 bg-muted/50 rounded-b-lg text-center text-xs text-muted-foreground">
            Or call us directly: <a href="tel:+212500000000" className="text-primary font-semibold">+212 5XX-XXXXXX</a>
          </div>
        </Card>
      )}
    </>
  );
};
