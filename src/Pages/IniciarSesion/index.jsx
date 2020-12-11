import "./iniciarsesion.css";
import Menu from "../../components/Menu";
import Logofor from "../../recursos/img/Logoformulario.png"

function IniciarSesion() {
    return (
        <>
            <Menu />
            <section className="container1">
                <div className="modal-dialog text-center">
                    <div className="col-sm-8 main-section">
                        <div className="modal-content">
                            <div className="col-12 user-img">
                                <img src={Logofor} th-src= {Logofor}/>
                              </div>
                             <form className="col-12" method="get">
                                < a > Nombre de Usuario </a>
                                <div className="form-group" id="user-group">
                                    <input type="text" className="form-control" name="username" />
                                </div>
                                <a>Contraseña</a>
                                <div className="form-group" id="contrasena-group">
                                    <input type="password" className="form-control" name="password" />
                                </div>
                                <button className="a" type="submit btn btn-transparent" style={{ color: '#ff0080' }}>
                                    <i className="fas fa-sign-in-alt"></i>  Ingresar </button>
                             </form>
                             <div className="col-12 forgot" >
                                <a className="p-t-4" href="#" style={{ color: '#ff0080' }}>¿Recordar contraseña?</a>
                             </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default IniciarSesion;