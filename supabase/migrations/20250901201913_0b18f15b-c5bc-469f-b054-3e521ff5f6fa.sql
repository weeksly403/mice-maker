-- Fix RLS policies to allow admin to create partner profiles
-- Drop existing problematic policies and recreate them properly

-- Drop existing policies on profiles table
DROP POLICY IF EXISTS "Admins can manage all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;  
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

-- Recreate policies with proper permissions for admin partner creation
CREATE POLICY "Admins can manage all profiles" 
ON public.profiles 
FOR ALL 
USING (is_admin())
WITH CHECK (is_admin());

CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (user_id = auth.uid());

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- Also ensure partners table policies allow admin creation
DROP POLICY IF EXISTS "Admins can manage all partners" ON public.partners;

CREATE POLICY "Admins can manage all partners" 
ON public.partners 
FOR ALL 
USING (is_admin())
WITH CHECK (is_admin());