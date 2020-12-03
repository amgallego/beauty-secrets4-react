import "./fondo.css";
import video from "../../recursos/img/fondo.mp4"

function Fondo(){
 return (

     <section>
         <video autoPlay muted loop>
      <source className="video-container" src={video} type="video/mp4"/>
    </video>
     </section>

 );
}

export default Fondo;