import "./home.css";
import foto1 from "../../recursos/img/foto1.png"
import foto2 from "../../recursos/img/foto2.png"
import foto3 from "../../recursos/img/foto3.png"
import ana from "../../recursos/img/Ana.png"
import marcela from "../../recursos/img/Marcelana.png"
import catalina from "../../recursos/img/Catalina.png"
import keila from "../../recursos/img/keila.png"

function Home() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-3">
              <div className="card text-center border-danger">
                <div className="card-body">
                  <h3>¿Quiénes Somos?</h3>
                  <p>
                    Somos un grupo de chicas que decidieron crear ciertos cursos sobre el maquillaje y cuidados de la piel
                    para ayudar a aquellas personas que quieren mejorar su aspecto.
              </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 pt-3">
              <div className="card text-center border-danger">
                <div className="card-body">
                  <h3>Nuestras Metas</h3>
                  <p>
                    Una de nuestras metas es lograr llegar a muchas partes del mundo para ayudar a aquellas personas que
                    desean mejorar y saber más sobre su belleza y cómo cuidar su piel.
              </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 pt-3">
              <div className="card text-center border-danger">
                <div className="card-body pt-5">
                  <h3>¿Qué Ofrecemos?</h3>
                  <p>
                    Ofrecemos cursos de maquillaje profesional, artístico y basico tambien te enseñamos.
              </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* <!-- SERVICES --> */}

      <section className="text-center services">
        <div className="container p-6">
          <h1 className="text-center " style={{ color: '#ff0080' }}>SERVICIOS</h1>

          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src={foto1} className="img-fluid rounded w-150" />
                  <h3>Cuidado del rostro</h3>
                  <p>
                    Preparación antes del maquillaje, mascarillas, exfoliaciones, baños de vapor, etc.
              </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 pt-3">
              <div className="card">
                <div className="card-body">
                  <img src={foto2} className="img-fluid rounded w-150" />
                  <h3>Cuidado del cabello</h3>
                  <p>
                    Mascarillas, trucos,hidratación de este, entre otros.
              </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 pt-3">
              <div className="card">
                <div className="card-body">
                  <img src={foto3} className="img-fluid rounded w-150" />
                  <h3>Maquillaje</h3>
                  <p>
                    Hermosos maquillajes, para ocasiones especiales, tanto de día como de noche.
              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center team">
        <div className="container p-5">
          <h1 className="text-center" style={{ color: '#ff0080' }}>NUESTRO EQUIPO DE TRABAJO</h1>
          <div className="row">

            {/* <!-- USER TEAM --> */}

            <div className="col-lg-3 pt-3">
              <div className="card">
                <div className="card-body">
                  <img src={ana} className="img-fluid circle w-100" />
                  <h3>Ana Acevedo</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 pt-3">
              <div className="card">
                <div className="card-body">
                  <img src={marcela} className="img-fluid circle w-100" />
                  <h3>Marcela Gallego</h3>
                </div>
              </div>
            </div>


            <div className="col-lg-3 pt-3">
              <div className="card">
                <div className="card-body">
                  <img src={catalina} className="img-fluid circle w-100" />
                  <h3>Catalina Ruiz</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 pt-3">
              <div className="card">
                <div className="card-body">
                  <img src={keila} className="img-fluid circle w-100" />
                  <h3>Keila Bernal</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <hr />
      <section className="pt-1">
        <p className="text-center">©2020 Todos los derechos reservados. Beauty Secrets</p>
      </section>
    </>

  );
}

export default Home;