import { NavLink } from 'react-router-dom';

function Navbar() {
  const getLinkClass = ({ isActive }) =>
    isActive ? 'nav-link nav-link-active' : 'nav-link';

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand" aria-label="Ir al inicio">
          <span className="brand-portal" aria-hidden="true"></span>
          <div>
            <p className="brand-overline">API REST</p>
            <h1 className="brand-title">Rick & Morty</h1>
          </div>
        </NavLink>

        <nav className="nav-menu" aria-label="Navegación principal">
          <NavLink to="/" end className={getLinkClass}>
            Inicio
          </NavLink>
          <NavLink to="/especies" className={getLinkClass}>
            Filtrar por especie
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
