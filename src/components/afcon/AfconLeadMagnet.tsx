import { useState } from 'react';
import { Download, FileText, Calculator, Map } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AfconLeadForm } from './AfconLeadForm';

interface LeadMagnet {
  id: string;
  icon: any;
  title: string;
  description: string;
  downloadLabel: string;
  color: string;
}

export const AfconLeadMagnet = () => {
  const { t } = useLanguage();
  const [selectedMagnet, setSelectedMagnet] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const leadMagnets: LeadMagnet[] = [
    {
      id: 'planning-guide',
      icon: FileText,
      title: t('afcon.leadMagnets.planningGuide.title'),
      description: t('afcon.leadMagnets.planningGuide.description'),
      downloadLabel: t('afcon.leadMagnets.download'),
      color: 'text-primary',
    },
    {
      id: 'venue-guide',
      icon: Map,
      title: t('afcon.leadMagnets.venueGuide.title'),
      description: t('afcon.leadMagnets.venueGuide.description'),
      downloadLabel: t('afcon.leadMagnets.download'),
      color: 'text-gold',
    },
    {
      id: 'roi-calculator',
      icon: Calculator,
      title: t('afcon.leadMagnets.roiCalculator.title'),
      description: t('afcon.leadMagnets.roiCalculator.description'),
      downloadLabel: t('afcon.leadMagnets.download'),
      color: 'text-accent',
    },
  ];

  const handleDownloadClick = (magnetId: string) => {
    setSelectedMagnet(magnetId);
    setDialogOpen(true);
  };

  const handleSuccess = () => {
    setDialogOpen(false);
    // In a real implementation, this would trigger the actual PDF download
    // For now, we'll just show a success message (already handled in form)
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leadMagnets.map((magnet) => {
          const Icon = magnet.icon;
          return (
            <Card
              key={magnet.id}
              className="p-6 hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="text-center space-y-4">
                <div className={`inline-flex p-4 rounded-full bg-muted ${magnet.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="font-serif font-bold text-xl">
                  {magnet.title}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {magnet.description}
                </p>

                <Button
                  onClick={() => handleDownloadClick(magnet.id)}
                  variant="outline"
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {magnet.downloadLabel}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t('afcon.leadMagnets.formTitle')}</DialogTitle>
            <DialogDescription>
              {t('afcon.leadMagnets.formDescription')}
            </DialogDescription>
          </DialogHeader>
          
          <AfconLeadForm
            source="LeadMagnet"
            leadMagnet={selectedMagnet || undefined}
            onSuccess={handleSuccess}
            simplified
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
