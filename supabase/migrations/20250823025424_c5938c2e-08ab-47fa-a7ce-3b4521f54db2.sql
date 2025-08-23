-- Enable Row Level Security on contact_submissions table
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public to insert contact submissions (for contact form)
CREATE POLICY "Allow public to insert contact submissions" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Only allow authenticated users to view submissions (for admin access)
CREATE POLICY "Allow authenticated users to view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (auth.role() = 'authenticated');