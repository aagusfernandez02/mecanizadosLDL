import styles from "./Inicio.module.css";
import videoBackground from '../../videos/video-1.mp4'

export function Inicio() {
  return (
    <div className={styles.inicio} id="inicio">
      <video className={styles.inicio__background__video} autoPlay muted loop>
        <source src={videoBackground} type="video/mp4"/>
      </video>
      <div className={styles.container}>
        <div>
          <p>BIENVENIDO A MECANIZADOS LDL</p>
        </div>
        <div>
          <h3>
            SOMOS UNA EMPRESA METALÚRGICA QUE TRABAJA PARA LOGRAR SUS PROYECTOS.
          </h3>
        </div>
      </div>
    </div>
  );
}
