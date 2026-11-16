import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient.js'

const vacio = { nombre: '', empresa: '', email: '' }

export default function AnadirCliente() {
  const [form, setForm] = useState(vacio)
  const [mensaje, setMensaje] = useState(null)
  const [enviando, setEnviando] = useState(false)
  const navigate = useNavigate()

  // Formulario controlado: el estado de React es la única fuente de verdad
  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function enviar(e) {
    e.preventDefault()
    setEnviando(true)
    const { error } = await supabase.from('clients').insert([form])
    setEnviando(false)
    if (error) {
      setMensaje({ tipo: 'error', texto: 'No se pudo guardar: ' + error.message })
      return
    }
    setForm(vacio)
    setMensaje({ tipo: 'ok', texto: 'Cliente añadido correctamente' })
    setTimeout(() => navigate('/clientes'), 1500)
  }

  return (
    <section>
      <h1>Añadir cliente</h1>
      <form onSubmit={enviar} className="formulario">
        <label>Nombre
          <input name="nombre" value={form.nombre} onChange={cambiar} required minLength={2} />
        </label>
        <label>Empresa
          <input name="empresa" value={form.empresa} onChange={cambiar} required />
        </label>
        <label>Email
          <input type="email" name="email" value={form.email} onChange={cambiar} required />
        </label>
        <button type="submit" disabled={enviando}>{enviando ? 'Guardando…' : 'Guardar cliente'}</button>
      </form>
      {mensaje && <p className={mensaje.tipo}>{mensaje.texto}</p>}
    </section>
  )
}
