-- Create the first admin user profile
-- This will be used after the admin signs up with admin@eventmorocco.com

-- Function to create admin profile for the admin email
CREATE OR REPLACE FUNCTION public.handle_admin_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  -- Only handle admin email
  IF NEW.email = 'admin@eventmorocco.com' THEN
    -- Insert admin profile
    INSERT INTO public.profiles (user_id, full_name, email, role)
    VALUES (NEW.id, 'Event Morocco Admin', NEW.email, 'Admin'::user_role)
    ON CONFLICT (user_id) DO UPDATE SET
      role = 'Admin'::user_role,
      email = NEW.email,
      full_name = COALESCE(profiles.full_name, 'Event Morocco Admin');
  ELSE
    -- Handle regular user signup
    INSERT INTO public.profiles (user_id, full_name, email, role)
    VALUES (
      NEW.id, 
      NEW.raw_user_meta_data ->> 'full_name',
      NEW.email,
      COALESCE((NEW.raw_user_meta_data ->> 'role')::user_role, 'Partner'::user_role)
    )
    ON CONFLICT (user_id) DO NOTHING;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger to handle user signups
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_admin_signup();