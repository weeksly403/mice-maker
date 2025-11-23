import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, MessageCircle, Phone, FileText } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';
import { analytics } from '@/utils/analytics';
import { QuoteDialog } from '../QuoteDialog';
import { ScheduleCallDialog } from '../ScheduleCallDialog';

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling 50% of viewport height
      setIsVisible(scrollY > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-2">
        <Button
          onClick={() => setIsMinimized(false)}
          className="bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
          aria-label="Expand quote request form"
        >
          <FileText className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-2">
        <div className="bg-white dark:bg-background border border-border rounded-lg shadow-xl p-4 max-w-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm text-foreground">
              {t('Get Free Proposal in 24h')}
            </h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(true)}
              className="h-6 w-6"
              aria-label="Minimize quote request form"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mb-4">
            {t('Expert MICE planning • Competitive rates • Local expertise')}
          </p>
          
          <div className="flex gap-2">
            <QuoteDialog>
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90 text-white text-xs h-8"
                onClick={() => analytics.trackCTA('quote_button', 'sticky_cta')}
                aria-label="Request a quote"
              >
                <FileText className="h-3 w-3 mr-1" aria-hidden="true" />
                {t('Get Quote')}
              </Button>
            </QuoteDialog>
            
            <ScheduleCallDialog>
              <Button
                variant="outline"
                className="flex-1 text-xs h-8"
                onClick={() => analytics.trackCTA('call_button', 'sticky_cta')}
                aria-label="Schedule a call"
              >
                <Phone className="h-3 w-3 mr-1" aria-hidden="true" />
                {t('Book Call')}
              </Button>
            </ScheduleCallDialog>
          </div>
          
          <div className="mt-3 pt-2 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              {t('Trusted by 500+ companies across Morocco')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};