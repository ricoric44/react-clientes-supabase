# CRM de clientes · React + Supabase

Práctica de Desarrollo de Interfaces (DAM2): aplicación React (Vite) conectada a Supabase y desplegada en Vercel.

## Páginas

| Ruta | Página | Qué hace |
|---|---|---|
| `/clientes` | Ver clientes | Tabla con los registros de la tabla `clients` |
| `/anadir` | Añadir clientes | Formulario controlado que inserta un cliente |
| `/about` | About | Descripción del proyecto, imagen `.webp` y vídeo de YouTube |

Al cargar la app, la consola del navegador muestra **"Conexión correcta"** y los datos de la conexión.

## Puesta en marcha

1. Crea un proyecto en Supabase y ejecuta `supabase.sql` en el SQL Editor.
2. Copia `.env.example` a `.env` y pon tu URL y tu clave publishable (anon).
3. `npm install` y `npm run dev`.

## Despliegue en Vercel

Añade en *Settings → Environment Variables* `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
`vercel.json` reescribe todas las rutas a `index.html` para que React Router funcione al recargar.
