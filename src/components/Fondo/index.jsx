import "./fondo.css";
import video from "../../recursos/img/fondo.mp4"

function Fondo() {
    return (

      
            <video autoPlay muted loop>
                <source className="video-container" src={video} type="video/mp4" />
            </video>
      

    );
}

export default Fondo;