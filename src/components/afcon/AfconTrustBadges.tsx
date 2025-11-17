import { Shield, Award, Users, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { Card } from '@/components/ui/card';

export const AfconTrustBadges = () => {
  const { t } = useLanguage();

  const badges = [
    {
      icon: Shield,
      title: t('afcon.trust.officialDMC'),
      description: t('afcon.trust.officialDMCDesc'),
      color: 'text-primary',
    },
    {
      icon: Award,
      title: t('afcon.trust.ministryAuthorized'),
      description: t('afcon.trust.ministryAuthorizedDesc'),
      color: 'text-gold',
    },
    {
      icon: Users,
      title: t('afcon.trust.eventsDelivered'),
      description: t('afcon.trust.eventsDeliveredDesc'),
      color: 'text-accent',
    },
    {
      icon: CheckCircle,
      title: t('afcon.trust.guarantee'),
      description: t('afcon.trust.guaranteeDesc'),
      color: 'text-primary',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <Card key={index} className="p-6 text-center hover:shadow-elegant transition-shadow">
            <div className={`inline-flex p-3 rounded-full bg-muted mb-4 ${badge.color}`}>
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">{badge.title}</h3>
            <p className="text-sm text-muted-foreground">{badge.description}</p>
          </Card>
        );
      })}
    </div>
  );
};
