import "./contactanos.css";
import Menu from "../../components/Menu";
import Videobg from "../../recursos/img/videocont.mp4"
import Telefono from "../../recursos/img/telefono.png"
import Email from "../../recursos/img/email.png"
import Ubicanos from "../../recursos/img/Ubicanos.png"

function Contactanos() {
    return (
        <>
            <Menu />
            <video autoPlay muted loop>
                <source class="video-container" src={Videobg} type="video/mp4" />
            </video>
            <section className="bg-light-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">

                            <h2 style={{ color: '#ff0080' }} className="font-weight-bold pt-3" >Contáctanos</h2>
                            <img className="img2" src={Telefono} width="70" />
                            <p className="row justify-content-left">Whatsapp: +57 3013977857</p>
                            <p className="row justify-content-left">   Celular: +57 3044257738</p>
                            <p className="row justify-content-left">   Fijo: +57 4 2522482</p>

                            <img className="img2 pt-3" src={Email} width="80" />
                            <p className="row justify-content-left pt-1">Informacionbs@gmail.com</p>
                            <div className="blog-info">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 pt-3">
                                            <img className="img2" src={Ubicanos} width="70" className="justify-content-left" />
                                            <p className="row justify-content-left">Calle 51 # 57-70 </p>
                                            <p className="row justify-content-right">Medellín, Antioquia  </p>
                                        </div>

                                    </div>
                                </div>


                            </div>

                        </div>

                        <div className="col-md-7 offset-md-1">
                            <h2 style={{ color: '#ff0080' }} className="font-weight-bold" >Déjanos tu información</h2>
                            <p className="lead text-muted font-weight-bold"> Y te contactaremos.
                      </p>
                            <form className="mt-6" />
                            <div className="form-group">
                                <input type="text" className="forma-control" id="" placeholder="Nombre" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="forma-control" id="" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="number" className="forma-control" id="" placeholder="Teléfono celular" />
                            </div>
                            <div className="form-group">
                                <textarea className="forma-control" id="" placeholder="Mensaje" rows="5"></textarea>
                            </div>
                            <button className="al" type="submit btn btn-transparent" style={{ color: '#ff0080' }}>
                                    <i className="fas fa-sign-in-alt"></i>  Enviar Mensaje </button>
                        </div>
                    </div>
                </div>
            </section>

            <hr />
            <div className="pt-1">
                <p className="text-center">©2020 Todos los derechos reservados. Beauty Secrets</p>
            </div>
        </>
    );
}

export default Contactanos;