import "./registrate.css";
import Menu from "../../components/Menu";
import Lofor from "../../recursos/img/Logoformulario.png"
function Registrate() {
    return (

        <>
            <Menu />
            <section className="container1">
                <div className="modal-dialog text-center">
                    <div className="col-lg-24 main-section">
                        <div className="modal-content">
                            <div className="col-12 user-img">
                                <img className=" width: 100px; height: 100px;" src={Lofor} />
                                <p className="text-dark mb-5">¡Aprende a hacer lo que más te gusta! </p>

                            </div>
                            <form className="col-12" method="get"/>
                                <div className="row no-gutters bg-tranparent">
                                    <div className="col-lg-0 col-lg-36 d-flex align-items-center">
                                        <div className="container p-0">
                                            <form/>
                                                <div className="form-row mb-2 ">
                                                    <div className="form-group col-md-6">
                                                        <label className="font-weight-bold">Nombre <span className="text-danger">*</span></label>
                                                        <input type="text" className="forma-control my-2 my-lg-0" placeholder="Tu nombre" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label className="font-weight-bold">Apellido <span className="text-danger">*</span></label>
                                                        <input type="text" className="forma-control my-2 my-lg-0" placeholder="Tu apellido" />
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3 ">
                                                    <label className="font-weight-bold ">Correo electrónico <span className="text-danger">*</span></label>
                                                    <input type="email" className="forma-control my-2 my-lg-0" placeholder="Ingresa tu correo electrónico" />
                                                </div>
                                                <div className="form-row mb-2">
                                                    <div className="form-group col-md-6">
                                                        <label className="font-weight-bold">Contraseña<span className="text-danger">*</span></label>
                                                        <input type="password" className="forma-control my-2 my-lg-0" placeholder="Ingresa una contraseña" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label className="font-weight-bold">Confirma tu contraseña<span className="text-danger">*</span></label>
                                                        <input type="password" className="forma-control my-2 my-lg-0" placeholder="Confirma tu contraseña" />
                                                    </div>


                                                    <p className="text-dark font-weight-bold">Usa 8 o más carácteres con una combinación de letras, número y simbolos</p>
                                                </div>
                                                <div className="form-group mb-5">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" />
                                                        <label className="form-check-label text-dark font-weight-bold">Al seleccionar esta casilla aceptas nuestro aviso de privacidad y los términos y condiciones</label>

                                                    </div>
                                                </div>
                                                <button className="a" type="submit btn btn-transparent" style={{ color: '#ff0080' }}> <i className="fas fa-sign-in-alt"></i>Registrate</button>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Registrate;