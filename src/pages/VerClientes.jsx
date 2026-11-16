import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient.js'

export default function VerClientes() {
  const [clientes, setClientes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function cargar() {
      const { data, error } = await supabase
        .from('clients')
        .select('id, nombre, empresa, email, created_at')
        .order('created_at', { ascending: false })
      if (error) setError(error.message)
      else setClientes(data)
      setCargando(false)
    }
    cargar()
  }, [])

  if (cargando) return <p>Cargando clientes…</p>
  if (error) return <p className="error">Error: {error}</p>

  return (
    <section>
      <h1>Clientes</h1>
      <p className="sub">{clientes.length} clientes en la tabla <code>clients</code> de Supabase</p>
      <div className="tabla-scroll">
        <table>
          <thead>
            <tr><th>Nombre</th><th>Empresa</th><th>Email</th><th>Alta</th></tr>
          </thead>
          <tbody>
            {clientes.map((c) => (
              <tr key={c.id}>
                <td>{c.nombre}</td>
                <td>{c.empresa}</td>
                <td>{c.email}</td>
                <td>{new Date(c.created_at).toLocaleDateString('es-ES')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
