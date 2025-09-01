-- Link the Deligh Morocco user profile with the Deligh Morocco partner
UPDATE partners 
SET user_id = (
  SELECT user_id 
  FROM profiles 
  WHERE email = 'a.chaaibi@delightmorocco.com'
)
WHERE name ILIKE '%deligh%';

-- Update the user profile to reference the partner
UPDATE profiles 
SET partner_id = (
  SELECT id 
  FROM partners 
  WHERE name ILIKE '%deligh%'
)
WHERE email = 'a.chaaibi@delightmorocco.com';