import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/components/auth/AuthProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Phone, Clock, Calendar, MessageSquare, Edit, Trash2, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface Call {
  id: string;
  ref_code: string;
  company: string;
  contact_name: string;
  email: string;
  phone?: string;
  timezone: string;
  preferred_date: string;
  preferred_time: string;
  call_reason: string;
  message?: string;
  status: string;
  call_notes?: string;
  next_action?: string;
  called_at?: string;
  created_at: string;
}

const callUpdateSchema = z.object({
  status: z.string().min(1, 'Status is required'),
  call_notes: z.string().optional(),
  next_action: z.string().optional(),
});

type CallUpdateData = z.infer<typeof callUpdateSchema>;

const Calls: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [calls, setCalls] = useState<Call[]>([]);
  const [filteredCalls, setFilteredCalls] = useState<Call[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedCall, setSelectedCall] = useState<Call | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const form = useForm<CallUpdateData>({
    resolver: zodResolver(callUpdateSchema),
    defaultValues: {
      status: '',
      call_notes: '',
      next_action: '',
    },
  });

  useEffect(() => {
    loadCalls();
    checkAdminStatus();
  }, []);

  useEffect(() => {
    filterCalls();
  }, [calls, searchTerm, statusFilter]);

  const checkAdminStatus = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', user.id)
        .single();
      
      if (!error && data) {
        setIsAdmin(data.role === 'Admin');
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
    }
  };

  const loadCalls = async () => {
    try {
      const { data, error } = await supabase
        .from('calls')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCalls(data || []);
    } catch (error) {
      console.error('Error loading calls:', error);
      toast({
        title: 'Error',
        description: 'Failed to load calls.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const filterCalls = () => {
    let filtered = calls;

    if (searchTerm) {
      filtered = filtered.filter(call =>
        call.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        call.contact_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        call.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        call.ref_code.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(call => call.status.toLowerCase() === statusFilter);
    }

    setFilteredCalls(filtered);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'requested':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'called':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'no-answer':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const handleEditCall = (call: Call) => {
    setSelectedCall(call);
    form.reset({
      status: call.status,
      call_notes: call.call_notes || '',
      next_action: call.next_action || '',
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdateCall = async (data: CallUpdateData) => {
    if (!selectedCall) return;

    try {
      const updateData: any = {
        status: data.status,
        call_notes: data.call_notes || null,
        next_action: data.next_action || null,
      };

      // If status is being changed to 'called', set called_at timestamp
      if (data.status === 'called' && selectedCall.status !== 'called') {
        updateData.called_at = new Date().toISOString();
      }

      const { error } = await supabase
        .from('calls')
        .update(updateData)
        .eq('id', selectedCall.id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Call updated successfully.',
      });

      setIsEditDialogOpen(false);
      loadCalls();
    } catch (error) {
      console.error('Error updating call:', error);
      toast({
        title: 'Error',
        description: 'Failed to update call.',
        variant: 'destructive',
      });
    }
  };

  const handleDeleteCall = async (callId: string) => {
    if (!isAdmin) {
      toast({
        title: 'Access Denied',
        description: 'Only administrators can delete calls.',
        variant: 'destructive',
      });
      return;
    }

    if (!confirm('Are you sure you want to delete this call?')) return;

    try {
      const { error } = await supabase
        .from('calls')
        .delete()
        .eq('id', callId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Call deleted successfully.',
      });

      loadCalls();
    } catch (error) {
      console.error('Error deleting call:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete call.',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Scheduled Calls</h1>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="text-sm">
            {filteredCalls.length} call{filteredCalls.length !== 1 ? 's' : ''}
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search by company, name, email, or reference..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="requested">Requested</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="called">Called</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="no-answer">No Answer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Calls Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reference</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Scheduled Date/Time</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCalls.map((call) => (
                <TableRow key={call.id}>
                  <TableCell className="font-medium">{call.ref_code}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{call.company}</div>
                      <div className="text-sm text-muted-foreground">{call.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{call.contact_name}</div>
                      {call.phone && (
                        <div className="text-sm text-muted-foreground">{call.phone}</div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div>{format(new Date(call.preferred_date), 'MMM dd, yyyy')}</div>
                        <div className="text-sm text-muted-foreground">{call.preferred_time} ({call.timezone})</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-xs truncate" title={call.call_reason}>
                      {call.call_reason}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(call.status)} border`}>
                      {call.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditCall(call)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      {isAdmin && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteCall(call.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {filteredCalls.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No calls found matching your criteria.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Call Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Update Call</DialogTitle>
          </DialogHeader>
          
          {selectedCall && (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleUpdateCall)} className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Call Details</h4>
                  <div className="text-sm text-muted-foreground">
                    <div><strong>Company:</strong> {selectedCall.company}</div>
                    <div><strong>Contact:</strong> {selectedCall.contact_name}</div>
                    <div><strong>Email:</strong> {selectedCall.email}</div>
                    <div><strong>Date:</strong> {format(new Date(selectedCall.preferred_date), 'MMM dd, yyyy')} at {selectedCall.preferred_time}</div>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Requested">Requested</SelectItem>
                          <SelectItem value="Scheduled">Scheduled</SelectItem>
                          <SelectItem value="Called">Called</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                          <SelectItem value="Cancelled">Cancelled</SelectItem>
                          <SelectItem value="No Answer">No Answer</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="call_notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Call Notes</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Add notes about the call..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="next_action"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Next Action</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What should be done next?"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsEditDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Update Call</Button>
                </div>
              </form>
            </Form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Calls;