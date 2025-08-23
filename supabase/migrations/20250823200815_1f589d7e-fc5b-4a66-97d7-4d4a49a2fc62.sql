-- Create enums for structured data
CREATE TYPE lead_source AS ENUM ('WebsiteForm', 'Chatbot', 'WhatsApp', 'Manual', 'Other');
CREATE TYPE lead_language AS ENUM ('FR', 'EN', 'ES', 'AR');
CREATE TYPE event_type AS ENUM ('Conference', 'Seminar', 'Incentive', 'TeamBuilding', 'Retreat', 'Gala', 'Other');
CREATE TYPE preferred_city AS ENUM ('Marrakech', 'Casablanca', 'Agadir', 'Fes', 'Sahara', 'NotSure');
CREATE TYPE group_size_range AS ENUM ('<30', '30-80', '80-150', '150-300', '300+');
CREATE TYPE currency_type AS ENUM ('MAD', 'EUR', 'USD');
CREATE TYPE lead_status AS ENUM ('New', 'Qualified', 'Quoted', 'Negotiation', 'Won', 'Lost', 'OnHold');
CREATE TYPE user_role AS ENUM ('Admin', 'Partner');

-- Create partners table
CREATE TABLE public.partners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  authorized_by_ministry BOOLEAN DEFAULT false,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create leads table
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ref_code TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Source and basic info
  source lead_source NOT NULL DEFAULT 'Manual',
  language lead_language NOT NULL DEFAULT 'FR',
  
  -- Contact information
  company TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  
  -- Event details
  event_types event_type[] NOT NULL DEFAULT ARRAY['Conference'],
  preferred_cities preferred_city[] NOT NULL DEFAULT ARRAY['NotSure'],
  group_size group_size_range,
  dates_text TEXT,
  is_flexible BOOLEAN DEFAULT false,
  
  -- Budget information
  budget_per_person DECIMAL(10,2),
  currency currency_type DEFAULT 'EUR',
  total_offer_budget DECIMAL(12,2),
  commission_percent DECIMAL(5,2) DEFAULT 30.00,
  commission_value DECIMAL(12,2),
  expected_payment_date DATE,
  
  -- Pipeline management
  status lead_status NOT NULL DEFAULT 'New',
  follow_up_remark TEXT,
  partner_agency TEXT,
  partner_id UUID REFERENCES public.partners(id),
  
  -- Additional fields
  attachments TEXT[],
  consent_given BOOLEAN DEFAULT false,
  consent_source TEXT,
  
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create notes table for lead activity
CREATE TABLE public.lead_notes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE NOT NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT,
  body TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user roles table
CREATE TABLE public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role user_role NOT NULL DEFAULT 'Partner',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Create profiles table for user management
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT,
  email TEXT,
  role user_role DEFAULT 'Partner',
  partner_id UUID REFERENCES public.partners(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Function to generate reference codes
CREATE OR REPLACE FUNCTION generate_ref_code()
RETURNS TEXT AS $$
DECLARE
  year_part TEXT;
  sequence_num INTEGER;
  ref_code TEXT;
BEGIN
  year_part := EXTRACT(YEAR FROM now())::TEXT;
  
  SELECT COALESCE(MAX(CAST(SUBSTRING(ref_code FROM 'EM-' || year_part || '-(\d+)') AS INTEGER)), 0) + 1
  INTO sequence_num
  FROM public.leads
  WHERE ref_code LIKE 'EM-' || year_part || '-%';
  
  ref_code := 'EM-' || year_part || '-' || LPAD(sequence_num::TEXT, 6, '0');
  
  RETURN ref_code;
END;
$$ LANGUAGE plpgsql;

-- Function to set reference code on insert
CREATE OR REPLACE FUNCTION set_ref_code()
RETURNS TRIGGER AS $$
BEGIN
  NEW.ref_code := generate_ref_code();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to calculate commission value
CREATE OR REPLACE FUNCTION calculate_commission_value()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.total_offer_budget IS NOT NULL AND NEW.commission_percent IS NOT NULL THEN
    NEW.commission_value := (NEW.total_offer_budget * NEW.commission_percent / 100);
  ELSE
    NEW.commission_value := NULL;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers
CREATE TRIGGER set_ref_code_trigger
  BEFORE INSERT ON public.leads
  FOR EACH ROW
  WHEN (NEW.ref_code IS NULL)
  EXECUTE FUNCTION set_ref_code();

CREATE TRIGGER calculate_commission_trigger
  BEFORE INSERT OR UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION calculate_commission_value();

CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_partners_updated_at
  BEFORE UPDATE ON public.partners
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Security definer functions for role checks
CREATE OR REPLACE FUNCTION get_current_user_role()
RETURNS user_role AS $$
  SELECT COALESCE(
    (SELECT role FROM public.profiles WHERE user_id = auth.uid()),
    'Partner'::user_role
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
  SELECT get_current_user_role() = 'Admin';
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

CREATE OR REPLACE FUNCTION get_user_partner_id()
RETURNS UUID AS $$
  SELECT partner_id FROM public.profiles WHERE user_id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- RLS Policies for leads
CREATE POLICY "Admins can manage all leads" ON public.leads
  FOR ALL USING (is_admin());

CREATE POLICY "Partners can view assigned leads" ON public.leads
  FOR SELECT USING (
    NOT is_admin() AND partner_id = get_user_partner_id()
  );

CREATE POLICY "Partners can update assigned leads" ON public.leads
  FOR UPDATE USING (
    NOT is_admin() AND partner_id = get_user_partner_id()
  );

-- Public access for webhook endpoint
CREATE POLICY "Allow public lead creation" ON public.leads
  FOR INSERT WITH CHECK (true);

-- RLS Policies for partners
CREATE POLICY "Admins can manage all partners" ON public.partners
  FOR ALL USING (is_admin());

CREATE POLICY "Partners can view their own profile" ON public.partners
  FOR SELECT USING (id = get_user_partner_id());

-- RLS Policies for lead notes
CREATE POLICY "Users can view notes for accessible leads" ON public.lead_notes
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.leads 
      WHERE id = lead_id AND (
        is_admin() OR partner_id = get_user_partner_id()
      )
    )
  );

CREATE POLICY "Users can create notes for accessible leads" ON public.lead_notes
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.leads 
      WHERE id = lead_id AND (
        is_admin() OR partner_id = get_user_partner_id()
      )
    )
  );

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Admins can manage all profiles" ON public.profiles
  FOR ALL USING (is_admin());

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (user_id = auth.uid());

-- RLS Policies for user roles
CREATE POLICY "Users can view their own roles" ON public.user_roles
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Admins can manage all roles" ON public.user_roles
  FOR ALL USING (is_admin());

-- Create indexes for better performance
CREATE INDEX idx_leads_status ON public.leads(status);
CREATE INDEX idx_leads_created_at ON public.leads(created_at);
CREATE INDEX idx_leads_expected_payment_date ON public.leads(expected_payment_date);
CREATE INDEX idx_leads_partner_id ON public.leads(partner_id);
CREATE INDEX idx_leads_ref_code ON public.leads(ref_code);
CREATE INDEX idx_lead_notes_lead_id ON public.lead_notes(lead_id);
CREATE INDEX idx_profiles_user_id ON public.profiles(user_id);