-- Tabla de clientes para la app React (DAM2)
create table public.clients (
  id         uuid primary key default gen_random_uuid(),
  nombre     text not null,
  empresa    text not null,
  email      text not null unique,
  created_at timestamptz not null default now()
);

-- Seguridad a nivel de fila: sin política, nadie puede leer ni escribir
alter table public.clients enable row level security;

-- Cualquiera (clave anon) puede leer el listado
create policy "Lectura publica" on public.clients
  for select to anon, authenticated using (true);

-- Cualquiera puede insertar clientes desde el formulario (no se pide login en esta práctica)
create policy "Insertar desde el formulario" on public.clients
  for insert to anon, authenticated with check (true);

-- Datos de ejemplo
insert into public.clients (nombre, empresa, email) values
  ('Lucía Martín',  'Ferretería Martín', 'lucia@ferreteriamartin.es'),
  ('Javier Ortega', 'Ortega Logística',  'javier@ortegalogistica.es'),
  ('Marta Gil',     'Estudio Gil',       'marta@estudiogil.es');
