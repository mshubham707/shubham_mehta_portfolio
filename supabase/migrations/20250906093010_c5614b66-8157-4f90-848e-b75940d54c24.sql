-- Check if the admin function exists, if not create it
CREATE OR REPLACE FUNCTION public.is_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = 'admin'
  )
$$;

-- Drop the existing insecure policy
DROP POLICY IF EXISTS "Allow authenticated users to view contact submissions" ON public.contact_submissions;

-- Create new secure policy - only admins can view contact submissions
CREATE POLICY "Only admins can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated
USING (public.is_admin(auth.uid()));