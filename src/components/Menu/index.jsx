import {Link} from "react-router-dom";
import "./menu.css";
import logo from "../../recursos/img/logo.png"
import carrito from "../../recursos/img/carrito.png"
import lupa from "../../recursos/img/lupa.png"

function Menu() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top opacity-2">

        <Link to="index" className="navbar-brand" href="index.html"><img className="log" src={logo}/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="index" className="nav-link" href="index.html">Inicio <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown bg-dark">
              <Link to="nuestros cursos" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nuestros Cursos
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="cursos" className="dropdown-item" href="cursos.html">Cursos </Link>
                <Link to="cuidado capilar" className="dropdown-item" href="cuidadocapilar.html">Cuidado Capilar</Link>
                <Link to="cuidado facial" className="dropdown-item" href="cuidadofacial.html">Cuidado Facial</Link>
                <Link to="maquillaje" className="dropdown-item" href="maquillaje.html">Maquillaje</Link>
              </div>
            </li>
            <li className="nav-item dropdown bg-dark">
              <Link to="ingresa" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ingresa
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="iniciar sesion" className="dropdown-item" href="iniciarsesion.html">Iniciar Sesion</Link>
                <Link to="registrate" className="dropdown-item" href="registrate.html">Registrate</Link>
              </div>
            </li>
            <li className="nav-item bg-dark">
              <Link to="contactenos" className="nav-link" href="contactenos.html">Contactenos</Link>
            </li>
            <li className="nav-item ">
              <Link to="compras" className="nav-link" href="compras.html"><img src={carrito} height="20px" /></Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"></input>
            <button className="btn btn-outline-ligth my-2 my-sm-0" type="submit"><img src={lupa} height="20px" /></button>
          </form>
        </div>
      </nav>
    </>
  );

}

export default Menu;
