CREATE TABLE public.partner_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 120),
  whatsapp text NOT NULL CHECK (char_length(whatsapp) BETWEEN 5 AND 40),
  email text CHECK (email IS NULL OR char_length(email) <= 255),
  company_name text CHECK (company_name IS NULL OR char_length(company_name) <= 160),
  partner_type text NOT NULL CHECK (partner_type IN ('nanny','villa_manager','villa_staff','concierge','hotel','relocation','school','family_service','freelance','other')),
  area text NOT NULL CHECK (area IN ('bukit','canggu','sanur','ubud','other')),
  instagram_website text CHECK (instagram_website IS NULL OR char_length(instagram_website) <= 255),
  network_description text CHECK (network_description IS NULL OR char_length(network_description) <= 2000),
  language text NOT NULL DEFAULT 'en' CHECK (language IN ('en','ru','id')),
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.partner_applications TO anon, authenticated;
GRANT ALL ON public.partner_applications TO service_role;
ALTER TABLE public.partner_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a pending application" ON public.partner_applications
  FOR INSERT TO anon, authenticated WITH CHECK (status = 'pending');