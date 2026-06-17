ALTER TABLE vacancies
  ADD COLUMN IF NOT EXISTS soc_code TEXT,
  ADD COLUMN IF NOT EXISTS soc_title TEXT;

ALTER TABLE training_applications
  ADD COLUMN IF NOT EXISTS desired_soc_code TEXT,
  ADD COLUMN IF NOT EXISTS desired_soc_title TEXT;
