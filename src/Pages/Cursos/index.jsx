import "./cursos.css";
import Menu from "../../components/Menu";
import banner from "../../recursos/img/baner2.png"
import foto1 from "../../recursos/img/foto1.png"
import foto2 from "../../recursos/img/foto2.png"
import foto3 from "../../recursos/img/foto3.png"
import videoc from "../../recursos/img/video cursos.mp4"

function Cursos() {
    return (
        <>
            <Menu />
            <video autoPlay muted loop>
                <source className="video-container" src={videoc} type="video/mp4" />
            </video>
            <header className="main-header">
                <div className="background-overlay text-white py-5">
                    <div className="container">
                        <div className="row d-flex h-100">
                            <div className="col-sm-7 text-center justify-content-center align-self-center">
                                <h1 style={{ color: '#ff0080' }} className="font-weight-bold">
                                    MAQUILLATE TU MISMA
                        </h1>
                                <p className="text-dark font-weight-bold">Donde estes.</p>
                                <p className="text-dark font-weight-bold"> Sin salir de casa</p>

                                <a href="#" className="btn btn-outline-secondary btn-lg" style={{ color: '#ff0080' }}>
                                    Quiero ver los cursos
                        </a>
                            </div>
                            <div className="col-sm-5 ">
                                <img src={banner} className="img-fluid d-none d-sm-block" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="text-center cursos">
                <div className="container p-6">
                    <h1 className="text-center " style={{ color: '#ff0080' }}>Cursos</h1>
                    <h3>Aprende todo lo necesario para sentirte bella y segura,recuerda que
                los limites los pones tu, ¡Animate!</h3>

                    <div className="row">
                        {/* <!-- SERVICES --> */}
                        <div className="col-lg-4 pt-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src={foto1} className="img-fluid rounded w-150" />
                                    <h3 href="cuidadofacial.html" className="btn btn-default" >Ver curso de Cuidado facial</h3>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 pt-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src={foto2} className="img-fluid rounded w-150" />
                                    <h3 href="cuidadocapilar.html" className="btn btn-default">Ver curso de Cuidado capilar</h3>


                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 pt-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src={foto3} className="img-fluid rounded w-150" />
                                    <h3 href="maquillaje.html" className="btn btn-default">Ver curso de Maquillaje</h3>
                                </div>
                            </div>
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

export default Cursos;
