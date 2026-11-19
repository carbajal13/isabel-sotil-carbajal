import { NavLink } from 'react-router-dom'


function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? 'Navbar-link active' : 'Navbar-link')

  return (
    <nav className="navbar">
      <span className="Navbar-brand">Practica3B</span>
      <div className="Navbar-links">
        <NavLink to="/" end className={linkClass}>
          Inicio
        </NavLink>
        <NavLink to="/acerca" className={linkClass}>
          Acerca de
        </NavLink>
        <NavLink to="/pokemons" className={linkClass}>
          Pokemons
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
