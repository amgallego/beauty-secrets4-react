import "./maquillaje.css";
import Menu from "../../components/Menu";
import Imagen6 from "../../recursos/img/ImagenP6.png"
import Video6 from "../../recursos/img/VideoP6.png"

function Maquillaje() {
    return(
        <>
        <Menu />
        <section>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 style={{ color: '#ff0080' }}>Maquillaje</h2>
                    <p className="lead text-muted">En esta sesión podrás encontrar diferentes
                        de tu interés, según lo que más te guste.
                    </p>
                    <div className="portfolio-item mt-6">
                        <img src={Imagen6} className="img-fluid" />
                        <div className="portfolio-details bg-light p-4">

                            <h3 style={{ color: '#ff0080' }}>¡Hazlo tú misma y ahorra dinero!</h3>
                        </div>
                    </div>
                    <div className="portfolio-item mt-6 mb-6">
                        <img src={Video6} className="img-fluid" />
                        <div className="portfolio-details bg-light p-4">
                            <h4 className="text-dark">Tonos de piel</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="portfolio-item">
                        <img src={Video6} className="img-fluid" />
                        <div className="portfolio-details bg-light p-4">
                            <h4 className="text-dark">Maquillaje natural o recificado</h4>

                        </div> 
                    </div> 
                    <div className="portfolio-item mt-6">
                        <img src={Video6} className="img-fluid" />
                        <div className="portfolio-details bg-light p-4">
                            <h4 className="text-dark">Maquillaje día
                            </h4>
                        </div>
                    </div>
                    <div className="portfolio-item mt-6">
                        <img src={Video6} className="img-fluid" />
                        <div className="portfolio-details bg-light p-4">
                            <h4 className="text-dark">Maquillaje noche</h4>
                        </div>
                    </div>
                    <div className="portfolio-item mt-6 mb-6">
                        <img src={Video6} className="img-fluid" />
                        <div className="portfolio-details bg-light p-4">
                            <h4 className="text-dark">Maquillaje correctivo</h4>
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

export default Maquillaje;