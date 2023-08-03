import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="container-NavBar">
      <nav className="navbar">
        <div>
          {/* Use NavLink para estilizar o link ativo */}
          <NavLink to="/HomePage">
            <img src="/src/img/logoMedic.png" alt="Logo" className="navbar-logo" />
          </NavLink>
        </div>
        <ul className="navbar-buttons">
          <li>
            {/* Adicione activeClassName para definir a classe quando o link estiver ativo */}
            <NavLink exact to="/" activeClassName="active-link">
              Sobre nós
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link">
              Contato
            </NavLink>
          </li>
          <li>
            <NavLink to="/medicamentos" activeClassName="active-link">
              Medicamentos
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active-link">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="bar"></div>
    </div>
  );
};

export default NavBar;
