
CREATE TABLE marketing_campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  subject text NOT NULL,
  body text NOT NULL,
  recipient_count integer NOT NULL DEFAULT 0,
  sent_by text NOT NULL,
  status text NOT NULL DEFAULT 'sent'
);

ALTER TABLE marketing_campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "authenticated_select_campaigns" ON marketing_campaigns
  FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated_insert_campaigns" ON marketing_campaigns
  FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "authenticated_update_campaigns" ON marketing_campaigns
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "authenticated_delete_campaigns" ON marketing_campaigns
  FOR DELETE TO authenticated USING (true);
