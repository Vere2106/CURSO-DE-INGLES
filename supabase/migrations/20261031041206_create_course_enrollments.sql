/*
# Create course enrollments table

1. New Tables
- `course_enrollments`
  - `id` (uuid, primary key)
  - `full_name` (text, required, 2-120 chars)
  - `email` (text, required, 5-254 chars)
  - `phone` (text, required, 6-30 chars)
  - `modality` (text, required: 'presencial' or 'online')
  - `preferred_schedule` (text, required: 'manana', 'tarde', 'noche' or 'fin_de_semana')
  - `created_at` (timestamptz, defaults to now)

2. Security
- Enable RLS on `course_enrollments`.
- Grant INSERT only to `anon` and `authenticated`, so the public landing page can submit enrollments but cannot read anyone else's data.
- A single INSERT policy allows public submissions; there is no SELECT, UPDATE or DELETE policy, so submitted personal data is not exposed through the public key.

3. Important notes
- Field length and value checks are enforced in the database as well as in the form.
*/

CREATE TABLE IF NOT EXISTS course_enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 5 AND 254),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 6 AND 30),
  modality text NOT NULL CHECK (modality IN ('presencial', 'online')),
  preferred_schedule text NOT NULL CHECK (preferred_schedule IN ('manana', 'tarde', 'noche', 'fin_de_semana')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE course_enrollments ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON course_enrollments TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_course_enrollments" ON course_enrollments;
CREATE POLICY "anon_insert_course_enrollments" ON course_enrollments FOR INSERT
  TO anon, authenticated WITH CHECK (true);
