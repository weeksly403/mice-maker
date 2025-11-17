-- Create afcon_leads table for lead capture
CREATE TABLE public.afcon_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ref_code TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Contact Information
  company TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  
  -- Lead Details
  package_interest TEXT, -- 'VIP', 'Premium', 'Essential', 'Custom'
  preferred_cities TEXT[], -- Array of cities
  event_type TEXT, -- 'Hospitality', 'Conference', 'Gala', 'TeamBuilding', 'Other'
  group_size TEXT, -- '<30', '30-80', '80-150', '150+'
  preferred_dates TEXT,
  budget_range TEXT, -- 'Under €10K', '€10K-€25K', '€25K-€50K', '€50K+'
  special_requirements TEXT,
  
  -- Lead Source & Quality
  source TEXT NOT NULL DEFAULT 'Website', -- 'Website', 'LeadMagnet', 'ExitIntent', 'Newsletter'
  lead_magnet_downloaded TEXT, -- 'Planning Guide', 'Venue Guide', 'ROI Calculator'
  lead_score INTEGER DEFAULT 0,
  status TEXT DEFAULT 'New', -- 'New', 'Contacted', 'Qualified', 'Proposal', 'Won', 'Lost'
  
  -- UTM Tracking
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  
  -- Partner Assignment
  partner_id UUID REFERENCES public.partners(id),
  
  -- Consent
  consent_given BOOLEAN DEFAULT false,
  consent_source TEXT,
  
  -- Notes
  notes TEXT
);

-- Create afcon_lead_activities table for tracking engagement
CREATE TABLE public.afcon_lead_activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES public.afcon_leads(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL, -- 'PageView', 'FormSubmit', 'Download', 'EmailOpen', 'LinkClick'
  activity_data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.afcon_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.afcon_lead_activities ENABLE ROW LEVEL SECURITY;

-- RLS Policies for afcon_leads
CREATE POLICY "Public can create leads"
  ON public.afcon_leads
  FOR INSERT
  TO PUBLIC
  WITH CHECK (true);

CREATE POLICY "Admins can view all leads"
  ON public.afcon_leads
  FOR SELECT
  TO PUBLIC
  USING (is_admin());

CREATE POLICY "Partners can view assigned leads"
  ON public.afcon_leads
  FOR SELECT
  TO PUBLIC
  USING (NOT is_admin() AND partner_id = get_user_partner_id());

CREATE POLICY "Admins can update all leads"
  ON public.afcon_leads
  FOR UPDATE
  TO PUBLIC
  USING (is_admin());

CREATE POLICY "Partners can update assigned leads"
  ON public.afcon_leads
  FOR UPDATE
  TO PUBLIC
  USING (NOT is_admin() AND partner_id = get_user_partner_id());

-- RLS Policies for afcon_lead_activities
CREATE POLICY "Public can create activities"
  ON public.afcon_lead_activities
  FOR INSERT
  TO PUBLIC
  WITH CHECK (true);

CREATE POLICY "Admins can view all activities"
  ON public.afcon_lead_activities
  FOR SELECT
  TO PUBLIC
  USING (is_admin());

CREATE POLICY "Partners can view activities for assigned leads"
  ON public.afcon_lead_activities
  FOR SELECT
  TO PUBLIC
  USING (
    NOT is_admin() AND 
    EXISTS (
      SELECT 1 FROM public.afcon_leads 
      WHERE afcon_leads.id = afcon_lead_activities.lead_id 
      AND afcon_leads.partner_id = get_user_partner_id()
    )
  );

-- Function to generate AFCON lead ref codes
CREATE OR REPLACE FUNCTION public.generate_afcon_lead_ref_code()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  year_part TEXT;
  sequence_num INTEGER;
  new_ref_code TEXT;
BEGIN
  year_part := '2025';
  
  SELECT COALESCE(MAX(CAST(SUBSTRING(ref_code FROM 'AFCON-2025-(\d+)') AS INTEGER)), 0) + 1
  INTO sequence_num
  FROM public.afcon_leads
  WHERE ref_code LIKE 'AFCON-2025-%';
  
  new_ref_code := 'AFCON-2025-' || LPAD(sequence_num::TEXT, 6, '0');
  
  RETURN new_ref_code;
END;
$$;

-- Trigger to set ref_code
CREATE OR REPLACE FUNCTION public.set_afcon_lead_ref_code()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.ref_code := generate_afcon_lead_ref_code();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_afcon_lead_ref_code_trigger
  BEFORE INSERT ON public.afcon_leads
  FOR EACH ROW
  EXECUTE FUNCTION set_afcon_lead_ref_code();

-- Trigger to update updated_at
CREATE TRIGGER update_afcon_leads_updated_at
  BEFORE UPDATE ON public.afcon_leads
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for performance
CREATE INDEX idx_afcon_leads_email ON public.afcon_leads(email);
CREATE INDEX idx_afcon_leads_status ON public.afcon_leads(status);
CREATE INDEX idx_afcon_leads_partner_id ON public.afcon_leads(partner_id);
CREATE INDEX idx_afcon_leads_created_at ON public.afcon_leads(created_at DESC);
CREATE INDEX idx_afcon_lead_activities_lead_id ON public.afcon_lead_activities(lead_id);
CREATE INDEX idx_afcon_lead_activities_created_at ON public.afcon_lead_activities(created_at DESC);