/* Kompas matematika - spust cele v SQL Editoru. Premium je v Table Editor -> profiles. */

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  nickname TEXT,
  email TEXT,
  notifications_enabled BOOLEAN NOT NULL DEFAULT false,
  is_premium BOOLEAN NOT NULL DEFAULT false,
  practice_tests_today INTEGER NOT NULL DEFAULT 0,
  last_practice_test_date DATE,
  last_big_test_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS nickname TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS email TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS notifications_enabled BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_premium BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS practice_tests_today INTEGER NOT NULL DEFAULT 0;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS last_practice_test_date DATE;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS last_big_test_at TIMESTAMPTZ;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ NOT NULL DEFAULT now();
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT now();

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
CREATE POLICY "Users can read own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, nickname)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(split_part(NEW.email, '@', 1), 'Žák')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

INSERT INTO public.profiles (id, email, nickname)
SELECT
  u.id,
  u.email,
  COALESCE(split_part(u.email, '@', 1), 'Žák')
FROM auth.users u
ON CONFLICT (id) DO NOTHING;

CREATE OR REPLACE FUNCTION public.delete_user()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;
  DELETE FROM auth.users WHERE id = auth.uid();
END;
$$;

REVOKE ALL ON FUNCTION public.delete_user() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.delete_user() TO authenticated;

CREATE TABLE IF NOT EXISTS public.attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  mode TEXT NOT NULL CHECK (mode IN ('practice', 'full', 'mistakes')),
  category TEXT,
  score INTEGER NOT NULL DEFAULT 0,
  max_score INTEGER NOT NULL,
  question_count INTEGER NOT NULL,
  answered_count INTEGER NOT NULL DEFAULT 0,
  percentage NUMERIC(5, 2) NOT NULL DEFAULT 0,
  time_expired BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS attempts_user_created_idx
  ON public.attempts (user_id, created_at DESC);

ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own attempts" ON public.attempts;
CREATE POLICY "Users can read own attempts"
  ON public.attempts FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own attempts" ON public.attempts;
CREATE POLICY "Users can insert own attempts"
  ON public.attempts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.attempt_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  attempt_id UUID NOT NULL REFERENCES public.attempts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  category TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  selected_index INTEGER,
  hint_used BOOLEAN NOT NULL DEFAULT false,
  points_earned INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS attempt_answers_user_question_idx
  ON public.attempt_answers (user_id, question_id, created_at DESC);

CREATE INDEX IF NOT EXISTS attempt_answers_user_category_idx
  ON public.attempt_answers (user_id, category);

ALTER TABLE public.attempt_answers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own answers" ON public.attempt_answers;
CREATE POLICY "Users can read own answers"
  ON public.attempt_answers FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own answers" ON public.attempt_answers;
CREATE POLICY "Users can insert own answers"
  ON public.attempt_answers FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Freemium limity (stejné RPC jako čeština)
CREATE OR REPLACE FUNCTION public.start_practice_test()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  uid uuid := auth.uid();
  is_prem boolean;
  today date := (timezone('utc', now()))::date;
  last_date date;
  used integer;
  big_at timestamptz;
  lim integer := 2;
BEGIN
  IF uid IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  SELECT p.is_premium, p.last_practice_test_date, coalesce(p.practice_tests_today, 0), p.last_big_test_at
    INTO is_prem, last_date, used, big_at
  FROM public.profiles p
  WHERE p.id = uid
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Profile not found';
  END IF;

  IF is_prem THEN
    RETURN jsonb_build_object(
      'allowed', true,
      'is_premium', true,
      'practice_tests_today', used,
      'last_practice_test_date', last_date,
      'last_big_test_at', big_at
    );
  END IF;

  IF last_date IS DISTINCT FROM today THEN
    used := 0;
  END IF;

  IF used >= lim THEN
    RETURN jsonb_build_object(
      'allowed', false,
      'reason', 'daily_limit',
      'used', used,
      'limit', lim,
      'is_premium', false,
      'message', 'Dnes jsi využil/a oba testy zdarma (2/2). Nové testy budou zase zítra, nebo přejdi na PREMIUM.',
      'practice_tests_today', used,
      'last_practice_test_date', today,
      'last_big_test_at', big_at
    );
  END IF;

  PERFORM set_config('app.allow_limit_update', 'true', true);

  UPDATE public.profiles
  SET
    practice_tests_today = used + 1,
    last_practice_test_date = today
  WHERE id = uid;

  RETURN jsonb_build_object(
    'allowed', true,
    'is_premium', false,
    'used', used + 1,
    'limit', lim,
    'practice_tests_today', used + 1,
    'last_practice_test_date', today,
    'last_big_test_at', big_at
  );
END;
$$;

CREATE OR REPLACE FUNCTION public.start_big_test()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  uid uuid := auth.uid();
  is_prem boolean;
  practice_used integer;
  last_date date;
  big_at timestamptz;
  now_ts timestamptz := timezone('utc', now());
  remaining_days integer;
BEGIN
  IF uid IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  SELECT p.is_premium, coalesce(p.practice_tests_today, 0), p.last_practice_test_date, p.last_big_test_at
    INTO is_prem, practice_used, last_date, big_at
  FROM public.profiles p
  WHERE p.id = uid
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Profile not found';
  END IF;

  IF is_prem THEN
    RETURN jsonb_build_object(
      'allowed', true,
      'is_premium', true,
      'practice_tests_today', practice_used,
      'last_practice_test_date', last_date,
      'last_big_test_at', big_at
    );
  END IF;

  IF big_at IS NOT NULL AND (now_ts - big_at) < interval '7 days' THEN
    remaining_days := greatest(1, ceil(extract(epoch FROM (big_at + interval '7 days' - now_ts)) / 86400.0)::integer);
    RETURN jsonb_build_object(
      'allowed', false,
      'reason', 'weekly_limit',
      'remaining_days', remaining_days,
      'is_premium', false,
      'message', 'Další test nanečisto zdarma ještě není dostupný. S PREMIUM ho můžeš zkusit hned.',
      'practice_tests_today', practice_used,
      'last_practice_test_date', last_date,
      'last_big_test_at', big_at
    );
  END IF;

  PERFORM set_config('app.allow_limit_update', 'true', true);

  UPDATE public.profiles
  SET last_big_test_at = now_ts
  WHERE id = uid;

  RETURN jsonb_build_object(
    'allowed', true,
    'is_premium', false,
    'practice_tests_today', practice_used,
    'last_practice_test_date', last_date,
    'last_big_test_at', now_ts
  );
END;
$$;

CREATE OR REPLACE FUNCTION public.guard_profile_columns()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  jwt_role text := coalesce(auth.jwt() ->> 'role', '');
  allow_limits boolean := coalesce(current_setting('app.allow_limit_update', true), '') = 'true';
BEGIN
  IF jwt_role = 'service_role'
     OR current_user IN ('postgres', 'supabase_admin')
     OR session_user IN ('postgres', 'supabase_admin') THEN
    RETURN NEW;
  END IF;

  IF NEW.is_premium IS DISTINCT FROM OLD.is_premium THEN
    RAISE EXCEPTION 'is_premium cannot be changed from the client';
  END IF;

  IF NOT allow_limits THEN
    IF NEW.practice_tests_today IS DISTINCT FROM OLD.practice_tests_today
       OR NEW.last_practice_test_date IS DISTINCT FROM OLD.last_practice_test_date
       OR NEW.last_big_test_at IS DISTINCT FROM OLD.last_big_test_at THEN
      RAISE EXCEPTION 'usage counters can only change via RPC';
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_guard_profile_columns ON public.profiles;
CREATE TRIGGER trg_guard_profile_columns
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.guard_profile_columns();

GRANT EXECUTE ON FUNCTION public.start_practice_test() TO authenticated, anon, service_role;
GRANT EXECUTE ON FUNCTION public.start_big_test() TO authenticated, anon, service_role;

CREATE OR REPLACE FUNCTION public.activate_promo_code(p_code text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  uid uuid := auth.uid();
  normalized text;
BEGIN
  IF uid IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  normalized := upper(regexp_replace(coalesce(p_code, ''), '[^a-zA-Z0-9]', '', 'g'));

  IF normalized IS DISTINCT FROM 'R2D2C3PO' THEN
    RETURN jsonb_build_object(
      'ok', false,
      'reason', 'invalid_code',
      'message', 'Neplatný kód. Napiš si o něj na info@kompasnaskolu.cz'
    );
  END IF;

  UPDATE public.profiles
  SET is_premium = true
  WHERE id = uid;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Profile not found';
  END IF;

  RETURN jsonb_build_object(
    'ok', true,
    'is_premium', true,
    'message', 'Vesmírný Premium přístup aktivován! 🚀'
  );
END;
$$;

REVOKE ALL ON FUNCTION public.activate_promo_code(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.activate_promo_code(text) TO authenticated;

NOTIFY pgrst, 'reload schema';
