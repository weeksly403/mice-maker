-- Fix security definer functions to prevent search path manipulation attacks
-- Update is_admin() function
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT get_current_user_role() = 'Admin';
$$;

-- Update get_user_partner_id() function
CREATE OR REPLACE FUNCTION public.get_user_partner_id()
RETURNS uuid
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT partner_id FROM public.profiles WHERE user_id = auth.uid();
$$;

-- Update get_current_user_role() function
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS user_role
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    (SELECT role FROM public.profiles WHERE user_id = auth.uid()),
    'Partner'::user_role
  );
$$;