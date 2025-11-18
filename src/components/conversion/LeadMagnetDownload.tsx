import { useState } from 'react';
import { Download, FileText, Calculator, CheckSquare, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { trackEvent } from '@/utils/analytics';
import { toast } from 'sonner';

interface LeadMagnet {
  id: string;
  title: string;
  description: string;
  icon: any;
  fileSize: string;
  pages: string;
}

const leadMagnets: LeadMagnet[] = [
  {
    id: 'mice-planning-guide',
    title: 'Complete MICE Planning Guide',
    description: 'Step-by-step guide to planning successful corporate events in Morocco',
    icon: FileText,
    fileSize: '2.4 MB',
    pages: '52 pages',
  },
  {
    id: 'roi-calculator',
    title: 'Event ROI Calculator',
    description: 'Calculate and justify your event budget with our proven ROI framework',
    icon: Calculator,
    fileSize: '1.1 MB',
    pages: 'Excel Template',
  },
  {
    id: 'budget-template',
    title: 'Budget Planning Template',
    description: 'Comprehensive budget breakdown template for MICE events',
    icon: CheckSquare,
    fileSize: '890 KB',
    pages: 'Excel Template',
  },
  {
    id: 'team-building-activities',
    title: '50 Team Building Activities',
    description: 'Curated collection of proven team building activities for Morocco',
    icon: Users,
    fileSize: '3.2 MB',
    pages: '38 pages',
  },
  {
    id: 'venue-comparison',
    title: 'Venue Comparison Guide',
    description: '30+ top Morocco venues with detailed comparison matrix',
    icon: Building,
    fileSize: '4.1 MB',
    pages: '45 pages',
  },
];

export const LeadMagnetDownload = () => {
  const [selectedMagnet, setSelectedMagnet] = useState<LeadMagnet | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  const handleDownloadClick = (magnet: LeadMagnet) => {
    setSelectedMagnet(magnet);
    setIsDialogOpen(true);
    trackEvent('lead_magnet_click', { magnet_id: magnet.id, magnet_title: magnet.title });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    trackEvent('lead_magnet_download', {
      magnet_id: selectedMagnet?.id,
      magnet_title: selectedMagnet?.title,
      email_domain: formData.email.split('@')[1],
    });

    // In production, this would trigger email automation and actual PDF download
    toast.success(`Success! Check your email for "${selectedMagnet?.title}"`);
    setIsDialogOpen(false);
    setFormData({ name: '', email: '', company: '' });
  };

  return (
    <>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Free Resources & Planning Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download our expert guides, templates, and tools to plan your perfect Morocco event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {leadMagnets.map((magnet) => {
              const Icon = magnet.icon;
              return (
                <Card key={magnet.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {magnet.fileSize} • {magnet.pages}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{magnet.title}</CardTitle>
                    <CardDescription>{magnet.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={() => handleDownloadClick(magnet)}
                      variant="outline"
                      className="w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Free
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Download {selectedMagnet?.title}</DialogTitle>
            <DialogDescription>
              Enter your details to receive this resource instantly via email
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Send Me This Resource
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              We respect your privacy. No spam, unsubscribe anytime.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
