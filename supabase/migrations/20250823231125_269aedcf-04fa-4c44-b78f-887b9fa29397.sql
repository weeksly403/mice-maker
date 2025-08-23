-- Create some sample partners for testing
INSERT INTO public.partners (name, email, phone, authorized_by_ministry, notes) VALUES
('Morocco Events Pro', 'contact@moroccoevents.ma', '+212661123456', true, 'Premium partner specializing in luxury events'),
('Atlas Experiences', 'info@atlasexp.com', '+212662789012', true, 'Adventure and team building specialist'),
('Marrakech Business Hub', 'hello@marrakechbiz.ma', '+212663345678', false, 'Local business event organizer');

-- Update some leads to be assigned to partners for testing
UPDATE public.leads 
SET partner_id = (SELECT id FROM public.partners WHERE name = 'Morocco Events Pro' LIMIT 1)
WHERE company = 'Desert Dreams Corp';

UPDATE public.leads 
SET partner_id = (SELECT id FROM public.partners WHERE name = 'Atlas Experiences' LIMIT 1)  
WHERE company = 'Nordic Business Group';