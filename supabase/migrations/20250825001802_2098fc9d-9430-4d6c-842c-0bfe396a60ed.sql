-- Create calls table for scheduled calls
CREATE TABLE public.calls (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ref_code TEXT,
  company TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  timezone TEXT NOT NULL DEFAULT 'UTC',
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  call_reason TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'Requested',
  call_notes TEXT,
  next_action TEXT,
  called_at TIMESTAMP WITH TIME ZONE,
  lead_id UUID REFERENCES public.leads(id),
  partner_id UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.calls ENABLE ROW LEVEL SECURITY;

-- Create policies for call access
CREATE POLICY "Admins can manage all calls" 
ON public.calls 
FOR ALL 
USING (is_admin());

CREATE POLICY "Partners can view assigned calls" 
ON public.calls 
FOR SELECT 
USING ((NOT is_admin()) AND (partner_id = get_user_partner_id()));

CREATE POLICY "Partners can update assigned calls" 
ON public.calls 
FOR UPDATE 
USING ((NOT is_admin()) AND (partner_id = get_user_partner_id()));

CREATE POLICY "Allow public call creation" 
ON public.calls 
FOR INSERT 
WITH CHECK (true);

-- Create function to generate call reference codes
CREATE OR REPLACE FUNCTION public.generate_call_ref_code()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  year_part TEXT;
  sequence_num INTEGER;
  new_ref_code TEXT;
BEGIN
  year_part := EXTRACT(YEAR FROM now())::TEXT;
  
  SELECT COALESCE(MAX(CAST(SUBSTRING(c.ref_code FROM 'CALL-' || year_part || '-(\d+)') AS INTEGER)), 0) + 1
  INTO sequence_num
  FROM public.calls c
  WHERE c.ref_code LIKE 'CALL-' || year_part || '-%';
  
  new_ref_code := 'CALL-' || year_part || '-' || LPAD(sequence_num::TEXT, 6, '0');
  
  RETURN new_ref_code;
END;
$$;

-- Create trigger to set call reference code
CREATE OR REPLACE FUNCTION public.set_call_ref_code()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.ref_code := generate_call_ref_code();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trigger_set_call_ref_code
BEFORE INSERT ON public.calls
FOR EACH ROW
EXECUTE FUNCTION public.set_call_ref_code();

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_calls_updated_at
BEFORE UPDATE ON public.calls
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();