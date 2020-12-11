import "./cuidadoc.css";
import Menu from "../../components/Menu";
import Imagen5 from "../../recursos/img/ImagenP5.png"
import Video5 from "../../recursos/img/VideoP5.png"

function Cuidadoc() {
    return (
        <>
            <Menu />
            <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 style={{ color: '#ff0080' }}>Cuidado Capilar</h2>
                        <p className="lead text-muted">Este espacio fue creado para que aprendas a
                        consentir tu cabello de una forma económica y nutritiva.
                    </p>
                        <div className="portfolio-item mt-6">
                            <img src={Imagen5} className="img-fluid" />
                            <div className="portfolio-details bg-light p-4">

                                <h3 style={{ color: '#ff0080' }}> ¿Qué esperas para lucir un cabello radiante con productos naturales?</h3>
                            </div>
                        </div>
                        <div className="portfolio-item mt-6 mb-6">
                            <img src={Video5} className="img-fluid" />
                            <div className="portfolio-details bg-light p-4">
                                <h4 className="text-dark">Mascarilla para cabello grasoso</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="portfolio-item">
                            <img src={Video5} className="img-fluid" />
                            <div className="portfolio-details bg-light p-4">
                                <h4 className="text-dark">Mascarilla para cabello seco</h4>
                            </div>
                        </div>
                        <div className="portfolio-item mt-6">
                            <img src={Video5} className="img-fluid" />
                            <div className="portfolio-details bg-light p-4">
                                <h4 className="text-dark">Mascarilla para el crecimiento </h4>
                            </div>
                        </div>
                        <div className="portfolio-item mt-6">
                            <img src={Video5} className="img-fluid" />
                            <div className="portfolio-details bg-light p-4">
                                <h4 className="text-dark">Mascarilla para cabello maltratado </h4>
                            </div>
                        </div>
                        <div className="portfolio-item mt-6 mb-6">
                            <img src={Video5} className="img-fluid" />
                            <div className="portfolio-details bg-light p-4">
                                <h4 className="text-dark">Mascarilla para la caspa</h4>
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

export default Cuidadoc;