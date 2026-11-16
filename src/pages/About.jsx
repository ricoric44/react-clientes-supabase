import imagen from '../assets/react-supabase.webp'

export default function About() {
  return (
    <section>
      <h1>About</h1>
      <p>
        Aplicación de gestión de clientes hecha con <strong>React</strong> (Vite) y{' '}
        <strong>Supabase</strong> como base de datos. Tiene tres páginas enlazadas con{' '}
        <strong>React Router</strong>: un listado que lee la tabla <code>clients</code>, un
        formulario que inserta clientes nuevos y esta página de presentación. Las claves de
        Supabase se guardan en variables de entorno (<code>.env</code> en local y en el panel de
        Vercel en producción), y el proyecto está publicado en GitHub y desplegado en Vercel.
      </p>
      <img src={imagen} alt="Esquema React + Supabase + Vercel" width="800" height="400" className="imagen" />
      <h2>Vídeo</h2>
      <div className="video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/Tn6-PIqc4UM"
          title="React in 100 Seconds"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  )
}
