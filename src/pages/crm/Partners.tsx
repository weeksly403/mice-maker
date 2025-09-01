import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Search, Plus, Edit, Trash2, Users, CheckCircle, XCircle, Loader2, Key } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/components/auth/AuthProvider';
import { toast } from '@/hooks/use-toast';

interface Partner {
  id: string;
  name: string;
  email: string;
  phone?: string;
  authorized_by_ministry: boolean;
  notes?: string;
  user_id?: string;
  created_at: string;
  updated_at: string;
}

interface PartnerFormData {
  name: string;
  email: string;
  phone: string;
  authorized_by_ministry: boolean;
  notes: string;
  password?: string;
}

const Partners = () => {
  const { user } = useAuth();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [filteredPartners, setFilteredPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [formData, setFormData] = useState<PartnerFormData>({
    name: '',
    email: '',
    phone: '',
    authorized_by_ministry: false,
    notes: '',
    password: ''
  });
  const [isSaving, setIsSaving] = useState(false);
  const [deletingPartnerId, setDeletingPartnerId] = useState<string | null>(null);
  const [isCreateLoginDialogOpen, setIsCreateLoginDialogOpen] = useState(false);
  const [selectedPartnerForLogin, setSelectedPartnerForLogin] = useState<Partner | null>(null);
  const [isCreatingLogin, setIsCreatingLogin] = useState(false);

  useEffect(() => {
    loadPartners();
    checkAdminRole();
  }, []);

  const checkAdminRole = async () => {
    try {
      const { data, error } = await supabase.rpc('is_admin');
      if (error) throw error;
      setIsAdmin(data === true);
    } catch (error) {
      console.error('Error checking admin role:', error);
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    filterPartners();
  }, [partners, searchTerm]);

  const loadPartners = async () => {
    try {
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPartners(data || []);
    } catch (error) {
      console.error('Error loading partners:', error);
      toast({
        title: "Error",
        description: "Failed to load partners.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filterPartners = () => {
    let filtered = partners;

    if (searchTerm) {
      filtered = filtered.filter(partner =>
        partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPartners(filtered);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      authorized_by_ministry: false,
      notes: '',
      password: ''
    });
  };

  const handleCreatePartner = () => {
    resetForm();
    setIsCreateDialogOpen(true);
  };

  const handleEditPartner = (partner: Partner) => {
    setFormData({
      name: partner.name,
      email: partner.email,
      phone: partner.phone || '',
      authorized_by_ministry: partner.authorized_by_ministry,
      notes: partner.notes || ''
    });
    setSelectedPartner(partner);
    setIsEditDialogOpen(true);
  };

  const handleSavePartner = async () => {
    if (!formData.name || !formData.email) {
      toast({
        title: "Validation Error",
        description: "Name and email are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    try {
      if (selectedPartner) {
        // Update existing partner
        const { error } = await supabase
          .from('partners')
          .update({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            authorized_by_ministry: formData.authorized_by_ministry,
            notes: formData.notes || null
          })
          .eq('id', selectedPartner.id);

        if (error) throw error;
        toast({ title: "Success", description: "Partner updated successfully" });
      } else {
        // Create new partner
        const { data, error } = await supabase
          .from('partners')
          .insert({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            authorized_by_ministry: formData.authorized_by_ministry,
            notes: formData.notes || null
          })
          .select();

        if (error) throw error;
        toast({ title: "Success", description: "Partner created successfully" });
        
        // Auto-assign all unassigned leads and calls to the new partner if it's the first one
        await handleAssignLeadsToPartner(data[0].id);
        await handleAssignCallsToPartner(data[0].id);
      }

      loadPartners();
      setIsCreateDialogOpen(false);
      setIsEditDialogOpen(false);
      setSelectedPartner(null);
      resetForm();
    } catch (error: any) {
      console.error('Error saving partner:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save partner",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeletePartner = async (partnerId: string) => {
    if (!isAdmin) {
      toast({
        title: "Access Denied",
        description: "Only admins can delete partners.",
        variant: "destructive",
      });
      return;
    }

    setDeletingPartnerId(partnerId);
    try {
      const { error } = await supabase
        .from('partners')
        .delete()
        .eq('id', partnerId);

      if (error) throw error;

      toast({
        title: "Partner Deleted",
        description: "The partner has been successfully deleted.",
      });
      
      loadPartners();
    } catch (error: any) {
      console.error('Error deleting partner:', error);
      toast({
        title: "Error",
        description: "Failed to delete the partner. Please try again.",
        variant: "destructive",
      });
    } finally {
      setDeletingPartnerId(null);
    }
  };

  const handleAssignLeadsToPartner = async (partnerId: string) => {
    try {
      const { error } = await supabase
        .from('leads')
        .update({ partner_id: partnerId })
        .is('partner_id', null);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Unassigned leads have been assigned to this partner.",
      });
    } catch (error: any) {
      console.error('Error assigning leads:', error);
      toast({
        title: "Error",
        description: "Failed to assign leads to partner.",
        variant: "destructive",
      });
    }
  };

  const handleAssignCallsToPartner = async (partnerId: string) => {
    try {
      const { error } = await supabase
        .from('calls')
        .update({ partner_id: partnerId })
        .is('partner_id', null);

      if (error) throw error;
    } catch (error: any) {
      console.error('Error assigning calls:', error);
    }
  };

  const handleCreateLogin = (partner: Partner) => {
    setSelectedPartnerForLogin(partner);
    setFormData({
      name: partner.name,
      email: partner.email,
      phone: partner.phone || '',
      authorized_by_ministry: partner.authorized_by_ministry,
      notes: partner.notes || '',
      password: ''
    });
    setIsCreateLoginDialogOpen(true);
  };

  const handleSaveLogin = async () => {
    if (!formData.password || formData.password.length < 6) {
      toast({
        title: "Validation Error",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    if (!selectedPartnerForLogin) return;

    setIsCreatingLogin(true);
    try {
      // Create user account
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/crm/dashboard`,
          data: {
            full_name: formData.name,
            role: 'Partner'
          }
        }
      });

      if (authError) throw authError;

      if (authData.user) {
        // Update partner with user_id
        const { error: updateError } = await supabase
          .from('partners')
          .update({ user_id: authData.user.id })
          .eq('id', selectedPartnerForLogin.id);

        if (updateError) throw updateError;

        // Create/update profile with partner_id
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            user_id: authData.user.id,
            full_name: formData.name,
            email: formData.email,
            role: 'Partner',
            partner_id: selectedPartnerForLogin.id
          });

        if (profileError) throw profileError;

        toast({
          title: "Login Created",
          description: `Login credentials created for ${formData.name}. They can now access their assigned leads and calls.`,
        });

        loadPartners();
        setIsCreateLoginDialogOpen(false);
        setSelectedPartnerForLogin(null);
        resetForm();
      }
    } catch (error: any) {
      console.error('Error creating login:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to create login credentials.",
        variant: "destructive",
      });
    } finally {
      setIsCreatingLogin(false);
    }
  };

  if (isLoading) {
    return <div>Loading partners...</div>;
  }

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <XCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-muted-foreground">Access Denied</h2>
          <p className="text-muted-foreground">Only administrators can access partner management.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Partners</h1>
          <p className="text-muted-foreground">Manage your business partners and lead assignments</p>
        </div>
        <Button onClick={handleCreatePartner}>
          <Plus className="h-4 w-4 mr-2" />
          Add Partner
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search partners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Partners Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Partners ({filteredPartners.length})</CardTitle>
          <CardDescription>
            {partners.length > 0 ? `Showing ${filteredPartners.length} of ${partners.length} partners` : 'No partners found'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ministry Auth</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPartners.map((partner) => (
                  <TableRow key={partner.id}>
                    <TableCell className="font-medium">{partner.name}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{partner.email}</p>
                        {partner.phone && <p className="text-xs text-muted-foreground">{partner.phone}</p>}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={partner.user_id ? "default" : "secondary"}>
                        {partner.user_id ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {partner.authorized_by_ministry ? (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Authorized
                        </Badge>
                      ) : (
                        <Badge variant="outline">
                          <XCircle className="h-3 w-3 mr-1" />
                          Not Authorized
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>{new Date(partner.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" onClick={() => handleEditPartner(partner)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleAssignLeadsToPartner(partner.id)}
                          title="Assign leads"
                        >
                          <Users className="h-4 w-4" />
                        </Button>
                        {!partner.user_id && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleCreateLogin(partner)}
                            title="Create login credentials"
                          >
                            <Key className="h-4 w-4" />
                          </Button>
                        )}
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Partner</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete "{partner.name}"? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDeletePartner(partner.id)}
                                disabled={deletingPartnerId === partner.id}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                {deletingPartnerId === partner.id ? 'Deleting...' : 'Delete'}
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredPartners.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                      No partners found matching your criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Create/Edit Partner Dialog */}
      <Dialog open={isCreateDialogOpen || isEditDialogOpen} onOpenChange={(open) => {
        if (!open) {
          setIsCreateDialogOpen(false);
          setIsEditDialogOpen(false);
          setSelectedPartner(null);
          resetForm();
        }
      }}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {selectedPartner ? 'Edit Partner' : 'Add New Partner'}
            </DialogTitle>
            <DialogDescription>
              {selectedPartner ? 'Update partner information' : 'Create a new business partner'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Company Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter company name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter email address"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter phone number"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="authorized"
                checked={formData.authorized_by_ministry}
                onCheckedChange={(checked) => setFormData({ ...formData, authorized_by_ministry: checked })}
              />
              <Label htmlFor="authorized">Authorized by Ministry</Label>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Additional notes about this partner"
                rows={3}
              />
            </div>
          </div>

          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                setIsCreateDialogOpen(false);
                setIsEditDialogOpen(false);
                setSelectedPartner(null);
                resetForm();
              }}
            >
              Cancel
            </Button>
            <Button onClick={handleSavePartner} disabled={isSaving}>
              {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {selectedPartner ? 'Update' : 'Create'} Partner
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create Login Dialog */}
      <Dialog open={isCreateLoginDialogOpen} onOpenChange={(open) => {
        if (!open) {
          setIsCreateLoginDialogOpen(false);
          setSelectedPartnerForLogin(null);
          resetForm();
        }
      }}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Create Login Credentials</DialogTitle>
            <DialogDescription>
              Create login credentials for {selectedPartnerForLogin?.name} to access their assigned leads and calls.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <Input
                id="login-email"
                type="email"
                value={formData.email}
                disabled
                className="bg-muted"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="login-password">Password *</Label>
              <Input
                id="login-password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter password (min 6 characters)"
              />
            </div>
          </div>

          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                setIsCreateLoginDialogOpen(false);
                setSelectedPartnerForLogin(null);
                resetForm();
              }}
            >
              Cancel
            </Button>
            <Button onClick={handleSaveLogin} disabled={isCreatingLogin}>
              {isCreatingLogin && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Login
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Partners;