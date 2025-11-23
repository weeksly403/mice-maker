-- Fix profiles table PII exposure (profiles_pii_exposure)
-- Add explicit policy to block anonymous (anon role) access to profiles table
-- This prevents data harvesting of user emails and names

-- Drop the generic "Block anonymous access to profiles" policy if it exists
DROP POLICY IF EXISTS "Block anonymous access to profiles" ON public.profiles;

-- Create explicit policy blocking anon role from SELECT
CREATE POLICY "Block anon role from viewing profiles"
ON public.profiles
FOR SELECT
TO anon
USING (false);

-- Create explicit policy blocking anon role from INSERT
CREATE POLICY "Block anon role from creating profiles"
ON public.profiles
FOR INSERT
TO anon
WITH CHECK (false);

-- Create explicit policy blocking anon role from UPDATE
CREATE POLICY "Block anon role from updating profiles"
ON public.profiles
FOR UPDATE
TO anon
USING (false);

-- Create explicit policy blocking anon role from DELETE
CREATE POLICY "Block anon role from deleting profiles"
ON public.profiles
FOR DELETE
TO anon
USING (false);

-- Ensure only authenticated users can view their own profile
-- (This policy already exists but we'll recreate it for clarity)
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Authenticated users can view own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- Ensure only authenticated users can update their own profile
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Authenticated users can update own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- Keep admin policies intact
-- (No changes needed to "Admins can manage all profiles" policy)