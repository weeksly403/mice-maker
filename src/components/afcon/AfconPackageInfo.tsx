import { Check, Star, Users } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import vipIcon from '@/assets/afcon-package-vip.png';
import premiumIcon from '@/assets/afcon-package-premium.png';
import essentialIcon from '@/assets/afcon-package-essential.png';

interface Package {
  id: string;
  name: string;
  icon: string;
  badge?: string;
  badgeColor?: 'default' | 'secondary' | 'destructive' | 'outline';
  features: string[];
  ideal: string;
}

interface AfconPackageInfoProps {
  onLeadCapture: (packageType: string) => void;
}

export const AfconPackageInfo = ({ onLeadCapture }: AfconPackageInfoProps) => {
  const { t } = useLanguage();

  const packages: Package[] = [
    {
      id: 'vip',
      name: t('afcon.packages.vip.name'),
      icon: vipIcon,
      badge: t('afcon.packages.vip.badge'),
      badgeColor: 'default',
      features: [
        t('afcon.packages.vip.feature1'),
        t('afcon.packages.vip.feature2'),
        t('afcon.packages.vip.feature3'),
        t('afcon.packages.vip.feature4'),
        t('afcon.packages.vip.feature5'),
        t('afcon.packages.vip.feature6'),
        t('afcon.packages.vip.feature7'),
        t('afcon.packages.vip.feature8'),
      ],
      ideal: t('afcon.packages.vip.ideal'),
    },
    {
      id: 'premium',
      name: t('afcon.packages.premium.name'),
      icon: premiumIcon,
      badge: t('afcon.packages.premium.badge'),
      badgeColor: 'default',
      features: [
        t('afcon.packages.premium.feature1'),
        t('afcon.packages.premium.feature2'),
        t('afcon.packages.premium.feature3'),
        t('afcon.packages.premium.feature4'),
        t('afcon.packages.premium.feature5'),
        t('afcon.packages.premium.feature6'),
        t('afcon.packages.premium.feature7'),
      ],
      ideal: t('afcon.packages.premium.ideal'),
    },
    {
      id: 'essential',
      name: t('afcon.packages.essential.name'),
      icon: essentialIcon,
      badge: t('afcon.packages.essential.badge'),
      badgeColor: 'secondary',
      features: [
        t('afcon.packages.essential.feature1'),
        t('afcon.packages.essential.feature2'),
        t('afcon.packages.essential.feature3'),
        t('afcon.packages.essential.feature4'),
        t('afcon.packages.essential.feature5'),
        t('afcon.packages.essential.feature6'),
      ],
      ideal: t('afcon.packages.essential.ideal'),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {packages.map((pkg, index) => (
        <Card
          key={pkg.id}
          className={`
            relative overflow-hidden 
            transition-all duration-300 
            hover:scale-105 hover:shadow-glow
            ${index === 1 ? 'md:scale-105 border-primary' : ''}
          `}
        >
          {pkg.badge && (
            <div className="absolute top-4 right-4 z-10">
              <Badge variant={pkg.badgeColor} className="shadow-lg">
                {pkg.badge}
              </Badge>
            </div>
          )}

          <div className="p-6 md:p-8">
            <div className="flex justify-center mb-6">
              <img 
                src={pkg.icon} 
                alt={pkg.name}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-4">
              {pkg.name}
            </h3>

            <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-sm">{t('afcon.packages.groupSize')}</span>
            </div>

            <div className="space-y-3 mb-6">
              {pkg.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-gold mb-1">
                    {t('afcon.packages.idealFor')}
                  </p>
                  <p className="text-sm text-muted-foreground">{pkg.ideal}</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => onLeadCapture(pkg.id)}
              variant={index === 1 ? 'default' : 'outline'}
              className="w-full"
              size="lg"
            >
              {t('afcon.packages.requestInfo')}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
