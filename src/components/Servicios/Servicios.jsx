import styles from "./Servicios.module.css";
import imgTorno from "../../images/icons/torno.png";
import imgFresa from "../../images/icons/fresa.png";
import imgMantenimiento from "../../images/icons/mantenimiento.png";
import imgSoldadura from "../../images/icons/soldadura.png";
import imgSoporte from "../../images/icons/soporte.png";

export function Servicios() {
  return (
    <div className={styles.servicios} id='servicios'>
      <div className={styles.introduccion__container}>
        <h2>NUESTROS SERVICIOS</h2>
        <h1>
          Contamos con conocimiento y máquinas que nos permiten realizar las
          siguientes actividades.
        </h1>
      </div>
      <div className={styles.introduccion__grid__container}>
        <div className={`${styles.grid__section} ${styles.torno}`}>
          <div className={styles.grid__section__header}>
            <img src={imgTorno} />
            <h1>Torneado CNC</h1>
          </div>
          <p>
            Realizamos el torneado de piezas según plano, muestra o indicación
            del cliente, asegurando los estándares de calidad, además contamos
            con equipamiento para realizar piezas en producción.
          </p>
        </div>
        <div className={`${styles.grid__section} ${styles.fresado}`}>
          <div className={styles.grid__section__header}>
            <img src={imgFresa} />
            <h1>Fresado CNC - 4 EJES</h1>
          </div>
          <p>
            Contamos con centros de mecanizado con 4to eje de alta tecnología y
            calidad. Las cuales nos permiten mecanizar desde piezas simples
            hasta más complejas como moldes para inyección plástica, forja y
            electrodos para electro-erosión.
          </p>
        </div>
        <div className={`${styles.grid__section} ${styles.mantenimiento}`}>
          <div className={styles.grid__section__header}>
            <img src={imgMantenimiento} />
            <h1>Mantenimiento industrial</h1>
          </div>
          <p>
            Amplia experiencia adquirida en varios rubros de la industria.
            Brindamos servicio de mantenimiento de instalaciones y líneas de
            producción. Realizamos trabajos en planta cumpliendo los requisitos
            de seguridad laboral. Asistencia técnica para atender las
            solicitudes de los departamentos de mantenimiento y producción.
          </p>
        </div>
        <div className={`${styles.grid__section} ${styles.soldadura}`}>
          <div className={styles.grid__section__header}>
            <img src={imgSoldadura} />
            <h1>Soldadura</h1>
          </div>
          <p>
          Brindamos un servicio de alta calidad en soldadura con nuestros equipos semiautomáticos MIG-MAG y TIG para producción o reconstrucción de partes y piezas dañadas.          </p>
        </div>
        <div className={`${styles.grid__section} ${styles.soporte}`}>
        <div className={styles.grid__section__header}>
            <img src={imgSoporte} />
            <h1>Soporte y desarrollo</h1>
          </div>
          <p>
          Asistimos a nuestros clientes en el desarrollo de dispositivos y proyectos para mejora de la producción, utilizando sistemas de diseño 3D, simulación, CAD y CAM.
          </p>
        </div>
      </div>
    </div>
  );
}
