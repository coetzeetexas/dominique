
CREATE TABLE training_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),

  -- Personal Details
  full_name text NOT NULL,
  age integer NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  zip text NOT NULL,
  emergency_contact_name text NOT NULL,
  emergency_contact_phone text NOT NULL,
  emergency_contact_relation text NOT NULL,

  -- Work History
  employment_status text NOT NULL,
  last_employer text,
  last_job_title text,
  years_experience integer,
  industries text[],

  -- Education
  highest_education text NOT NULL,
  institution text,
  field_of_study text,
  certifications text,

  -- Skills
  technical_skills text[],
  soft_skills text[],
  languages text[],
  other_skills text,

  -- Career Goals
  desired_job_type text NOT NULL,
  desired_industry text NOT NULL,
  desired_location text NOT NULL,

  -- Availability
  available_start_date date NOT NULL,
  hours_per_week text NOT NULL,
  willing_to_travel boolean DEFAULT false,

  -- CV
  cv_file_url text,
  cv_file_name text,

  -- Consent
  consent_data_use boolean NOT NULL DEFAULT false,
  consent_communication boolean NOT NULL DEFAULT false,

  status text NOT NULL DEFAULT 'pending'
);

ALTER TABLE training_applications ENABLE ROW LEVEL SECURITY;

-- Public can submit applications (insert only)
CREATE POLICY "public_insert_applications" ON training_applications
  FOR INSERT TO anon WITH CHECK (true);

-- Only authenticated (admins) can read
CREATE POLICY "authenticated_select_applications" ON training_applications
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "authenticated_update_applications" ON training_applications
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_delete_applications" ON training_applications
  FOR DELETE TO authenticated USING (true);
