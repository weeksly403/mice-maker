-- Fix search_path for the auto_assign_lead_to_deligh function
CREATE OR REPLACE FUNCTION public.auto_assign_lead_to_deligh()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    deligh_partner_id UUID;
BEGIN
    -- Only assign if no partner is specified
    IF NEW.partner_id IS NULL THEN
        SELECT id INTO deligh_partner_id 
        FROM partners 
        WHERE name ILIKE '%deligh%' 
        LIMIT 1;
        
        NEW.partner_id := deligh_partner_id;
    END IF;
    
    RETURN NEW;
END;
$$;