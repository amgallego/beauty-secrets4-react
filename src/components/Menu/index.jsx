import "./menu.css";
import logo from "../../recursos/img/logo.png"
import carrito from "../../recursos/img/carrito.png"
import lupa from "../../recursos/img/lupa.png"

function Menu(){
return (
  <section>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top " class="opacity-2">
  
  <a class="navbar-brand" href="index.html"><img src={logo} height="60px"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="index.html">inicio <span class="sr-only">(current)</span></a>
      </li>
       <li class="nav-item dropdown bg-dark">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         nuestros cursos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="cursos.html">Cursos</a>
          <a class="dropdown-item" href="cuidadocapilar.html">Cuidado Capilar</a>
          <a class="dropdown-item" href="cuidadofacial.html">Cuidado Facial</a>
          <a class="dropdown-item" href="maquillaje.html">Maquillaje</a>
        </div>
      </li>
        <li class="nav-item dropdown bg-dark">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         ingresa
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="iniciarsesion.html">Iniciar Sesion</a>
          <a class="dropdown-item" href="registrate.html">Registrate</a>
        </div>
        </li>
       <li class="nav-item bg-dark">
         <a class="nav-link" href="contactenos.html">CONTACTENOS</a>
        </li>
          <li class="nav-item ">
        <a class="nav-link" href="compras.html"><img src={carrito} height="20px"/></a>
       </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"></input>
      <button class="btn btn-outline-ligth my-2 my-sm-0" type="submit"><img src={lupa} height="20px"/></button>
    </form>
  </div>
</nav>
  </section>


 );
 
}

export default Menu;