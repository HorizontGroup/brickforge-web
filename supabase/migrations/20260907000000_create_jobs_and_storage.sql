-- 1. Create Jobs Table
create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  status text not null check (status in ('awaiting_payment', 'pending', 'running', 'done', 'failed')),
  created_at timestamptz not null default now(),
  completed_at timestamptz,
  email text,
  stripe_payment_intent_id text,
  input_image_path text,
  output_ldr_path text,
  output_bom_path text,
  output_pdf_path text,
  cost_actual numeric,
  error text
);

-- Enable RLS on jobs
alter table public.jobs enable row level security;

-- 2. Create Storage Buckets (inputs & outputs - both private)
insert into storage.buckets (id, name, public)
values 
  ('inputs', 'inputs', false),
  ('outputs', 'outputs', false)
on conflict (id) do update set public = false;

-- 3. Enable Realtime for jobs
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    alter publication supabase_realtime add table public.jobs;
  end if;
exception
  when others then null;
end $$;
