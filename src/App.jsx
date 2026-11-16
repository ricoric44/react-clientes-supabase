import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import VerClientes from './pages/VerClientes.jsx'
import AnadirCliente from './pages/AnadirCliente.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="contenedor">
        <Routes>
          <Route path="/" element={<Navigate to="/clientes" replace />} />
          <Route path="/clientes" element={<VerClientes />} />
          <Route path="/anadir" element={<AnadirCliente />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<p>Página no encontrada.</p>} />
        </Routes>
      </main>
    </>
  )
}
