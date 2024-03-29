import "./NavBar.css";
import LoginButton from "../../UI/LoginButton";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav-config">
      <div className="container">
        <a class="navbar-brand" href="#">
          Coloquio CVP
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link">
                <Link to="/">Inicio</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <Link to="/objetivos">Objetivos</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <Link to="/empresas">Empresas</Link>
              </a>
            </li>

            <li class="nav-item ">
              <a class="nav-link">
                <Link to="/eventos">Eventos</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <Link to="/entrevistas_y_reclutamientos">
                  Entrevistas y reclutamientos
                </Link>
              </a>
            </li>
          </ul>
        </div>
        <Link to="/login">
          <LoginButton name="Iniciar Sesion" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
