import { useState, useEffect } from 'react';
import { X, Download, Gift } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { trackEvent } from '@/utils/analytics';
import { toast } from 'sonner';

export const ExitIntentPopup = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves through top of viewport
      if (e.clientY <= 0 && !hasShown && !sessionStorage.getItem('exitIntentShown')) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
        trackEvent('exit_intent_triggered', { timestamp: Date.now() });
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    trackEvent('exit_intent_form_submit', { email_domain: email.split('@')[1] });
    
    // In production, this would trigger email automation
    toast.success('Success! Check your email for the complete Morocco MICE Planning Guide.');
    setIsOpen(false);
    setEmail('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-lg">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>

        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <Gift className="w-8 h-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center">
            Wait! Before You Go...
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Get your <span className="font-semibold text-foreground">FREE Complete Morocco MICE Planning Guide</span> with insider tips, venue recommendations, and budget templates.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="exit-email">Email Address</Label>
            <Input
              id="exit-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            <Download className="w-4 h-4 mr-2" />
            Download Free Guide
          </Button>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              50+ page comprehensive planning guide
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              Venue comparison checklist with 30+ top venues
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              Budget calculator and cost breakdown templates
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              Exclusive insider tips from 15+ years experience
            </li>
          </ul>

          <p className="text-xs text-center text-muted-foreground">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
