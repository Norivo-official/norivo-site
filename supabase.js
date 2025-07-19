const { createClient } = supabase;
const supabaseUrl = 'https://xqlxotxeuadglvgdqral.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
const db = createClient(supabaseUrl, supabaseKey);
