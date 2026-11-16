import { createClient } from '@supabase/supabase-js'

// Las claves se leen de las variables de entorno (.env en local, panel de Vercel en producción).
// Vite solo expone al navegador las variables que empiezan por VITE_.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Faltan VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY en las variables de entorno')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Reto 1: comprobar la conexión y mostrar sus datos en la consola del navegador
export async function comprobarConexion() {
  const { data, error, count } = await supabase
    .from('clients')
    .select('*', { count: 'exact' })

  if (error) {
    console.error('Error de conexión con Supabase:', error.message)
    return
  }

  console.log('%cConexión correcta', 'color: #16a34a; font-weight: bold; font-size: 14px')
  // Datos de la conexión en forma de tabla para que se lean sin desplegar nada
  console.log('Datos de la conexión:')
  console.table({
    url: supabaseUrl,
    clave: supabaseKey.slice(0, 16) + '…',
    tabla: 'clients',
    registros: count,
  })
  console.log('Registros de la tabla clients:')
  console.table(data, ['nombre', 'empresa', 'email'])
}
