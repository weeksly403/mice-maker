import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Loader2, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface Lead {
  id: string;
  ref_code: string;
  company: string;
  contact_name: string;
  email: string;
  phone?: string;
  status: string;
  total_offer_budget?: number;
  budget_per_person?: number;
  commission_percent?: number;
  commission_value?: number;
  expected_payment_date?: string;
  event_types: string[];
  preferred_cities: string[];
  group_size?: string;
  dates_text?: string;
  language?: string;
  source?: string;
  is_flexible?: boolean;
  consent_given?: boolean;
  consent_source?: string;
  follow_up_remark?: string;
  partner_agency?: string;
  partner_id?: string;
  currency?: string;
  attachments?: string[];
  created_at: string;
  updated_at: string;
}

interface LeadEditDialogProps {
  lead: Lead | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const LeadEditDialog = ({ lead, isOpen, onClose, onSave }: LeadEditDialogProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<Lead>>({});

  useEffect(() => {
    if (lead) {
      setFormData({ ...lead });
    }
  }, [lead]);

  const handleSave = async () => {
    if (!lead || !formData) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('leads')
        .update({
          company: formData.company,
          contact_name: formData.contact_name,
          email: formData.email,
          phone: formData.phone,
          status: formData.status as any,
          total_offer_budget: formData.total_offer_budget,
          budget_per_person: formData.budget_per_person,
          commission_percent: formData.commission_percent,
          expected_payment_date: formData.expected_payment_date,
          group_size: formData.group_size as any,
          dates_text: formData.dates_text,
          language: formData.language as any,
          source: formData.source as any,
          is_flexible: formData.is_flexible,
          follow_up_remark: formData.follow_up_remark,
          partner_agency: formData.partner_agency,
          currency: formData.currency as any
        })
        .eq('id', lead.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Lead updated successfully"
      });
      
      onSave();
      onClose();
    } catch (error: any) {
      console.error('Error updating lead:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to update lead"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const statusOptions = ['New', 'Qualified', 'Quoted', 'Negotiation', 'Won', 'Lost', 'OnHold'];
  const currencyOptions = ['MAD', 'EUR', 'USD'];
  const groupSizeOptions = ['<30', '30-80', '80-150', '150-300', '300+'];
  const languageOptions = ['FR', 'EN', 'ES', 'AR'];
  const sourceOptions = ['Manual', 'Website', 'Email', 'Phone', 'Referral'];

  if (!lead) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Edit Lead: {lead.ref_code}</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
          <DialogDescription>
            Update lead information and track progress through your sales pipeline.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Company Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  value={formData.company || ''}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="partner_agency">Partner Agency</Label>
                <Input
                  id="partner_agency"
                  value={formData.partner_agency || ''}
                  onChange={(e) => setFormData({ ...formData, partner_agency: e.target.value })}
                  placeholder="Optional"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contact_name">Contact Name</Label>
                <Input
                  id="contact_name"
                  value={formData.contact_name || ''}
                  onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone || ''}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Lead Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Lead Details</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select 
                  value={formData.status || ''} 
                  onValueChange={(value) => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((status) => (
                      <SelectItem key={status} value={status}>{status}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="group_size">Group Size</Label>
                <Select 
                  value={formData.group_size || ''} 
                  onValueChange={(value) => setFormData({ ...formData, group_size: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select group size" />
                  </SelectTrigger>
                  <SelectContent>
                    {groupSizeOptions.map((size) => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select 
                  value={formData.currency || 'EUR'} 
                  onValueChange={(value) => setFormData({ ...formData, currency: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {currencyOptions.map((currency) => (
                      <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Event Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Event Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dates_text">Event Dates</Label>
                <Input
                  id="dates_text"
                  value={formData.dates_text || ''}
                  onChange={(e) => setFormData({ ...formData, dates_text: e.target.value })}
                  placeholder="e.g., March 15-17, 2024"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select 
                  value={formData.language || ''} 
                  onValueChange={(value) => setFormData({ ...formData, language: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languageOptions.map((lang) => (
                      <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="source">Lead Source</Label>
                <Select 
                  value={formData.source || ''} 
                  onValueChange={(value) => setFormData({ ...formData, source: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    {sourceOptions.map((source) => (
                      <SelectItem key={source} value={source}>{source}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 flex items-center space-x-2 pt-8">
                <Switch
                  id="is_flexible"
                  checked={formData.is_flexible || false}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_flexible: checked })}
                />
                <Label htmlFor="is_flexible">Flexible Dates</Label>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Financial Information</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget_per_person">Budget Per Person ({formData.currency || 'EUR'})</Label>
                <Input
                  id="budget_per_person"
                  type="number"
                  step="1"
                  value={formData.budget_per_person || ''}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    budget_per_person: e.target.value ? parseFloat(e.target.value) : undefined 
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="total_offer_budget">Total Budget ({formData.currency || 'EUR'})</Label>
                <Input
                  id="total_offer_budget"
                  type="number"
                  step="0.01"
                  value={formData.total_offer_budget || ''}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    total_offer_budget: e.target.value ? parseFloat(e.target.value) : undefined 
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="commission_percent">Commission (%)</Label>
                <Input
                  id="commission_percent"
                  type="number"
                  step="0.1"
                  value={formData.commission_percent || ''}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    commission_percent: e.target.value ? parseFloat(e.target.value) : undefined 
                  })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="expected_payment_date">Expected Payment Date</Label>
              <Input
                id="expected_payment_date"
                type="date"
                value={formData.expected_payment_date || ''}
                onChange={(e) => setFormData({ ...formData, expected_payment_date: e.target.value })}
              />
            </div>
            {formData.commission_value && (
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Commission Value: <span className="font-semibold">{formData.currency || 'EUR'} {formData.commission_value.toFixed(2)}</span>
                </p>
              </div>
            )}
          </div>

          {/* Event Types & Cities */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Event Types</h3>
                <div className="flex flex-wrap gap-2">
                  {formData.event_types?.map((type, idx) => (
                    <Badge key={idx} variant="secondary">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Preferred Cities</h3>
                <div className="flex flex-wrap gap-2">
                  {formData.preferred_cities?.map((city, idx) => (
                    <Badge key={idx} variant="outline">
                      {city}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Follow-up Notes */}
          <div className="space-y-2">
            <Label htmlFor="follow_up_remark">Follow-up Notes</Label>
            <Textarea
              id="follow_up_remark"
              value={formData.follow_up_remark || ''}
              onChange={(e) => setFormData({ ...formData, follow_up_remark: e.target.value })}
              placeholder="Add follow-up notes..."
              rows={3}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadEditDialog;