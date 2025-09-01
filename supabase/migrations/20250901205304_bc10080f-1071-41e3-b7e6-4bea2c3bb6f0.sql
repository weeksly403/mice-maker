-- Assign all existing leads to Deligh Morocco and set up auto-assignment for future leads
-- Get the Deligh Morocco partner ID
DO $$
DECLARE
    deligh_partner_id UUID;
BEGIN
    -- Get Deligh Morocco partner ID
    SELECT id INTO deligh_partner_id 
    FROM partners 
    WHERE name ILIKE '%deligh%' 
    LIMIT 1;
    
    -- Update all existing leads without a partner to Deligh Morocco
    UPDATE leads 
    SET partner_id = deligh_partner_id, 
        updated_at = now()
    WHERE partner_id IS NULL;
    
    -- Also update any leads that might have a different partner (assign ALL to Deligh Morocco)
    UPDATE leads 
    SET partner_id = deligh_partner_id, 
        updated_at = now()
    WHERE partner_id != deligh_partner_id OR partner_id IS NULL;
END $$;

-- Create function to auto-assign leads to Deligh Morocco
CREATE OR REPLACE FUNCTION public.auto_assign_lead_to_deligh()
RETURNS TRIGGER AS $$
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
$$ LANGUAGE plpgsql;

-- Create trigger to auto-assign new leads to Deligh Morocco
DROP TRIGGER IF EXISTS auto_assign_lead_trigger ON public.leads;
CREATE TRIGGER auto_assign_lead_trigger
    BEFORE INSERT ON public.leads
    FOR EACH ROW
    EXECUTE FUNCTION public.auto_assign_lead_to_deligh();