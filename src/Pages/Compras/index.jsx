import Menu from "../../components/Menu";
import Ultima from "../../recursos/img/ultima imagen.png"
import Video6 from "../../recursos/img/VideoP6.png"

function Compras() {
    return (
        <>
            <Menu />
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2 style={{ color: '#ff0080' }}>Accede a nuestros videos Premium</h2>
                            <p class="lead text-muted">¡Vamos! disfruta de una mejor experiencia donde podrás encontrar
                            maquillajes más sofisticados y profesionales, anímate a aprender a
                            maquillarte a ti misma y los que quieres, así ahorras dinero, adquieres
                            nuevos conocimientos y habilidades artísticas.

                            ¡Comencemos juntas
                            una nueva experiencia</p>
                            <div class="portfolio-item mt-6">
                                <img src={Ultima} class="img-fluid" />
                                <div class="portfolio-details bg-light p-4">

                                    <h3 style={{ color: '#ff0080' }}>¡Comencemos juntas
                                una nueva experiencia!</h3>
                                </div>
                            </div>
                            <div class="portfolio-item mt-6 mb-6">
                                <img src={Video6} class="img-fluid" />
                                <div class="portfolio-details bg-light p-4">
                                    <h4 class="text-dark">Maquillaje profesional para eventos</h4>
                                    <button className="al" type="submit btn btn-transparent" style={{ color: '#ff0080' }}>
                                    <i className="fas fa-sign-in-alt"></i>Comprar por $14.999</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="portfolio-item">
                                <img src={Video6} class="img-fluid" />
                                <div class="portfolio-details bg-light p-4">
                                    <h4 class="text-dark">Maquillaje artístico</h4>
                                    <button className="al" type="submit btn btn-transparent" style={{ color: '#ff0080' }}>
                                    <i className="fas fa-sign-in-alt"></i>Comprar por $14.999</button>
                                </div>
                            </div>
                            <div class="portfolio-item mt-6">
                                <img src={Video6} class="img-fluid" />
                                <div class="portfolio-details bg-light p-4">
                                    <h4 class="text-dark">Maquillaje halloween </h4>
                                    <button className="al" type="submit btn btn-transparent" style={{ color: '#ff0080' }}>
                                    <i className="fas fa-sign-in-alt"></i>Comprar por $14.999</button>
                                </div>
                            </div>
                            <div class="portfolio-item mt-6">
                                <img src={Video6} class="img-fluid" />
                                <div class="portfolio-details bg-light p-4">
                                    <h4 class="text-dark">Maquillaje quinceañera </h4>
                                    <button className="al" type="submit btn btn-transparent" style={{ color: '#ff0080' }}>
                                    <i className="fas fa-sign-in-alt"></i>Comprar por $14.999</button>
                                </div>
                            </div>
                            <div class="portfolio-item mt-6 mb-6">
                                <img src={Video6} class="img-fluid" />
                                <div class="portfolio-details bg-light p-4">
                                    <h4 class="text-dark">Maquillaje Novia</h4>
                                    <button className="al" type="submit btn btn-transparent" style={{ color: '#ff0080' }}>
                                    <i className="fas fa-sign-in-alt"></i>Comprar por $14.999</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <hr />
            <div class="pt-1">
                <p class="text-center">©2020 Todos los derechos reservados. Beauty Secrets</p>
            </div>
        </>
    );
}

export default Compras;