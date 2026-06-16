CREATE TABLE IF NOT EXISTS vacancies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  department text NOT NULL,
  location text NOT NULL,
  type text NOT NULL DEFAULT 'Full-time',
  status text NOT NULL DEFAULT 'open',
  description text,
  requirements text,
  salary_min integer,
  salary_max integer,
  deadline date,
  positions integer DEFAULT 1
);

ALTER TABLE vacancies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_vacancies" ON vacancies FOR SELECT TO authenticated USING (true);
CREATE POLICY "insert_vacancies" ON vacancies FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "update_vacancies" ON vacancies FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_vacancies" ON vacancies FOR DELETE TO authenticated USING (true);
