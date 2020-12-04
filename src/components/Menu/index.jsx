import {Link, Router } from "react-router-dom";
import "./menu.css";
import logo from "../../recursos/img/logo.png"
import carrito from "../../recursos/img/carrito.png"
import lupa from "../../recursos/img/lupa.png"

function Menu() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top opacity-2">

        <a className="navbar-brand" href="index.html"><img className="log" src={logo}/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Inicio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown bg-dark">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nuestros Cursos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Router><Link to="Cursos" className="dropdown-item" >Cursos</Link></Router>
                <a className="dropdown-item" href="cuidadocapilar.html">Cuidado Capilar</a>
                <a className="dropdown-item" href="cuidadofacial.html">Cuidado Facial</a>
                <a className="dropdown-item" href="maquillaje.html">Maquillaje</a>
              </div>
            </li>
            <li className="nav-item dropdown bg-dark">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ingresa
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="iniciarsesion.html">Iniciar Sesion</a>
                <a className="dropdown-item" href="registrate.html">Registrate</a>
              </div>
            </li>
            <li className="nav-item bg-dark">
              <a className="nav-link" href="contactenos.html">Contactenos</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="compras.html"><img src={carrito} height="20px" /></a>
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
