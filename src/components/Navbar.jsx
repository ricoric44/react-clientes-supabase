import { NavLink } from 'react-router-dom'

// NavLink añade la clase "active" al enlace de la página actual
export default function Navbar() {
  return (
    <header className="navbar">
      <span className="marca">CRM Clientes</span>
      <nav>
        <NavLink to="/clientes">Ver clientes</NavLink>
        <NavLink to="/anadir">Añadir clientes</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}
