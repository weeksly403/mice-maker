-- Fix security definer functions to have fixed search_path
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS user_role
LANGUAGE sql
STABLE 
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    (SELECT role FROM public.profiles WHERE user_id = auth.uid()),
    'Partner'::user_role
  );
$$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE 
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT get_current_user_role() = 'Admin';
$$;

CREATE OR REPLACE FUNCTION public.get_user_partner_id()
RETURNS uuid
LANGUAGE sql
STABLE 
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT partner_id FROM public.profiles WHERE user_id = auth.uid();
$$;

-- Block anonymous access to profiles table
CREATE POLICY "Block anonymous access to profiles"
ON public.profiles
FOR SELECT
TO anon
USING (false);

-- Block anonymous access to leads table (except for INSERT which is intentionally public)
CREATE POLICY "Block anonymous read access to leads"
ON public.leads
FOR SELECT
TO anon
USING (false);

-- Block anonymous access to afcon_leads table
CREATE POLICY "Block anonymous read access to afcon_leads"
ON public.afcon_leads
FOR SELECT
TO anon
USING (false);

-- Block anonymous access to calls table
CREATE POLICY "Block anonymous read access to calls"
ON public.calls
FOR SELECT
TO anon
USING (false);

-- Block anonymous access to partners table
CREATE POLICY "Block anonymous read access to partners"
ON public.partners
FOR SELECT
TO anon
USING (false);

-- Block anonymous access to lead_notes table
CREATE POLICY "Block anonymous read access to lead_notes"
ON public.lead_notes
FOR SELECT
TO anon
USING (false);