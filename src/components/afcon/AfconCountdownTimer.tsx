import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const AfconCountdownTimer = () => {
  const { t } = useLanguage();
  const targetDate = new Date('2025-12-21T00:00:00').getTime();
  
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const getUrgencyLevel = () => {
    if (timeRemaining.days < 30) return 'critical';
    if (timeRemaining.days < 100) return 'high';
    return 'normal';
  };

  const urgencyLevel = getUrgencyLevel();

  return (
    <div className="relative">
      <div className="text-center mb-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
          {t('afcon.countdown.title')}
        </h2>
        <p className={`text-sm md:text-base font-medium ${
          urgencyLevel === 'critical' ? 'text-destructive animate-pulse' :
          urgencyLevel === 'high' ? 'text-gold' :
          'text-muted-foreground'
        }`}>
          {urgencyLevel === 'critical' && t('afcon.countdown.urgentMessage')}
          {urgencyLevel === 'high' && t('afcon.countdown.limitedTime')}
          {urgencyLevel === 'normal' && t('afcon.countdown.subtitle')}
        </p>
      </div>
      
      <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto">
        {[
          { value: timeRemaining.days, label: t('afcon.countdown.days') },
          { value: timeRemaining.hours, label: t('afcon.countdown.hours') },
          { value: timeRemaining.minutes, label: t('afcon.countdown.minutes') },
          { value: timeRemaining.seconds, label: t('afcon.countdown.seconds') },
        ].map((unit, index) => (
          <div
            key={index}
            className="relative group"
          >
            <div className={`
              bg-gradient-to-br from-primary/90 to-primary 
              rounded-xl p-4 md:p-6 
              shadow-elegant hover:shadow-glow 
              transition-all duration-300
              transform hover:scale-105
              border border-primary/20
              ${urgencyLevel === 'critical' ? 'animate-pulse' : ''}
            `}>
              <div className="text-3xl md:text-5xl font-bold text-primary-foreground font-serif">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/80 mt-1 md:mt-2 uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {urgencyLevel === 'critical' && (
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-destructive/10 px-4 py-2 rounded-full border border-destructive/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
            </span>
            <span className="text-sm font-medium text-destructive">
              {t('afcon.countdown.lastCall')}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
