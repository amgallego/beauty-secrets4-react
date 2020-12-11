import "./cuidadof.css";
import Menu from "../../components/Menu";
import Imagen4 from "../../recursos/img/ImagenP4.png"
import Video4 from "../../recursos/img/VideoP4.png"

function Cuidadof() {
    return (
        <>
            <Menu />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 style={{ color: '#ff0080' }}>Cuidado Facial</h2>
                            <p className="lead text-muted">En estos cursos vas a adquirir conocimientos
                            sobre mascarillas para todo tipo de piel.</p>
                            <div className="portfolio-item mt-6">
                                <img src={Imagen4} className="img-fluid" />
                                <div className="portfolio-details bg-light p-4">

                                    <h3 style={{ color: '#ff0080' }}>¡Comencemos juntas una nueva experiencia!</h3>
                                </div>
                            </div>
                            <div className="portfolio-item mt-6 mb-6">
                                <img src={Video4} className="img-fluid" />
                                <div className="portfolio-details bg-light p-4">
                                    <h4 className="text-dark">Mascarilla para piel grasosa</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="portfolio-item">
                                <img src={Video4} className="img-fluid" />
                                <div className="portfolio-details bg-light p-4">
                                    <h4 className="text-dark">Mascarilla para piel seca</h4>

                                </div>
                            </div>
                            <div className="portfolio-item mt-6">
                                <img src={Video4} className="img-fluid" />
                                <div className="portfolio-details bg-light p-4">
                                    <h4 className="text-dark">Mascarilla para piel sensible </h4>
                                </div>
                            </div>
                            <div className="portfolio-item mt-6">
                                <img src={Video4} className="img-fluid" />
                                <div className="portfolio-details bg-light p-4">
                                    <h4 className="text-dark">Mascarilla exfoliante </h4>
                                </div>
                            </div>
                            <div className="portfolio-item mt-6 mb-6">
                                <img src={Video4} className="img-fluid" />
                                <div className="portfolio-details bg-light p-4">
                                    <h4 className="text-dark">Mascarilla limpieza profunda</h4>
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

export default Cuidadof;