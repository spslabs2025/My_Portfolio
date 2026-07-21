/*
# Create messages table for contact form

1. New Tables
- `messages`
  - `id` (uuid, primary key)
  - `name` (text, not null)
  - `email` (text, not null)
  - `subject` (text, not null)
  - `message` (text, not null)
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `messages`.
- Allow anon + authenticated INSERT only (public can submit messages).
- No SELECT/UPDATE/DELETE for anon (owner reads via dashboard, not this app).
*/

CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_messages" ON messages;
CREATE POLICY "anon_insert_messages" ON messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);
