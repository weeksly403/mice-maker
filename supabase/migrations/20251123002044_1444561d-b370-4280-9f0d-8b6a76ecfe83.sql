-- Fix remaining security definer functions to prevent search path manipulation
-- Update generate_call_ref_code() function
CREATE OR REPLACE FUNCTION public.generate_call_ref_code()
RETURNS text
LANGUAGE plpgsql
SET search_path = public
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

-- Update set_call_ref_code() function
CREATE OR REPLACE FUNCTION public.set_call_ref_code()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.ref_code := generate_call_ref_code();
  RETURN NEW;
END;
$$;

-- Update generate_afcon_lead_ref_code() function
CREATE OR REPLACE FUNCTION public.generate_afcon_lead_ref_code()
RETURNS text
LANGUAGE plpgsql
SET search_path = public
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

-- Update set_afcon_lead_ref_code() function
CREATE OR REPLACE FUNCTION public.set_afcon_lead_ref_code()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.ref_code := generate_afcon_lead_ref_code();
  RETURN NEW;
END;
$$;

-- Update calculate_commission_value() function
CREATE OR REPLACE FUNCTION public.calculate_commission_value()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.total_offer_budget IS NOT NULL AND NEW.commission_percent IS NOT NULL THEN
    NEW.commission_value := (NEW.total_offer_budget * NEW.commission_percent / 100);
  ELSE
    NEW.commission_value := NULL;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Update update_updated_at_column() function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Update generate_ref_code() function
CREATE OR REPLACE FUNCTION public.generate_ref_code()
RETURNS text
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  year_part TEXT;
  sequence_num INTEGER;
  new_ref_code TEXT;
BEGIN
  year_part := EXTRACT(YEAR FROM now())::TEXT;
  
  SELECT COALESCE(MAX(CAST(SUBSTRING(l.ref_code FROM 'EM-' || year_part || '-(\d+)') AS INTEGER)), 0) + 1
  INTO sequence_num
  FROM public.leads l
  WHERE l.ref_code LIKE 'EM-' || year_part || '-%';
  
  new_ref_code := 'EM-' || year_part || '-' || LPAD(sequence_num::TEXT, 6, '0');
  
  RETURN new_ref_code;
END;
$$;

-- Update set_ref_code() function
CREATE OR REPLACE FUNCTION public.set_ref_code()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.ref_code := generate_ref_code();
  RETURN NEW;
END;
$$;