import { ImgProductos } from "../ImgProductos/ImgProductos";
import styles from "./Trabajos.module.css";

export function Trabajos({handleLightBox}) {
  return (
    <div className={styles.trabajos} id='trabajos'>

      <h1 className={styles.trabajos__heading}>TRABAJOS REALIZADOS</h1>
      
      
        <div className={styles.parent}>
          <div className={styles.div1}>
            <ImgProductos
              handleLightBox={handleLightBox}
              title="CARRUSEL"
              img={require("../../images/products/carrusel.jpg")}
              requireIMG={require("../../images/products/carrusel.jpg")}
            />
          </div>
           <div className={styles.div2}>
            <ImgProductos
              handleLightBox={handleLightBox}
              title="ESTRELLA"
              description="Material: Poliuretano"
              img={require("../../images/products/estrella.png")}
              requireIMG={require("../../images/products/estrella.png")}
            />
          </div>
          <div className={styles.div3}>
            <ImgProductos
              handleLightBox={handleLightBox}
              title="REPARACIÓN INTEGRAL DE MÁQUINA ORUGA"
              description="Industria: Fabricante de cable"
              img={require("../../images/products/oruga.jpg")}
              requireIMG={require("../../images/products/oruga.jpg")}
            />
          </div>
          <div className={styles.div4}>
            <ImgProductos
              handleLightBox={handleLightBox}
              title="RODILLO"
              img={require("../../images/products/rodillo.jpg")}
              requireIMG={require("../../images/products/rodillo.jpg")}
            />
          </div>
          <div className={styles.div5}>
            <ImgProductos
              handleLightBox={handleLightBox}
              title="REPARACIÓN INTEGRAL DE MÁQUINA ORUGA"
              description="Industria: Fabricante de cable"
              img={require("../../images/products/oruga.jpg")}
              requireIMG={require("../../images/products/oruga.jpg")}
            /> 
          </div>
          <div className={styles.div6}>
            <ImgProductos
              handleLightBox={handleLightBox}
              title='TERMINALES PARA MANGERA 3"'
              img={require("../../images/products/manguera.jpg")}
              requireIMG={require("../../images/products/manguera.jpg")}
            />
          </div>
          <div className={styles.div7}>
            <ImgProductos
              handleLightBox={handleLightBox}
              title="EJE BALANCIN"
              description="Material: SAE 4140 Templado y Revenido"
              img={require("../../images/products/balancin.png")}
              requireIMG={require("../../images/products/balancin.png")}
            />
          </div>
          <div className={styles.div8}>
            <ImgProductos
              handleLightBox={handleLightBox}
              title="FABRICACIÓN Y MONTAJE"
              img={require("../../images/products/fabricacion.jpg")}
              requireIMG={require("../../images/products/fabricacion.jpg")}
            />
          </div>
          <div className={styles.div9}>
            <ImgProductos
              handleLightBox={handleLightBox}
              title="DEDO CADENA"
              description="Centro de Mecanizado"
              img={require("../../images/products/dedo.jpg")}
              requireIMG={require("../../images/products/dedo.jpg")}
            />
          </div>
          <div className={styles.div10}>
            <ImgProductos
              handleLightBox={handleLightBox}
              title="HAAS VF-2"
              description="Material: SAE 1045"
              img={require("../../images/products/hass.jpg")}
              requireIMG={require("../../images/products/hass.jpg")}
            />
          </div>
          <div className={styles.div11}>
            <ImgProductos
              handleLightBox={handleLightBox}
              title="SALIDA DE GASES EXTRUSORA"
              img={require("../../images/products/gases.jpg")}
              requireIMG={require("../../images/products/gases.jpg")}
            />
          </div>
          <div className={styles.div12}>
            <ImgProductos
              handleLightBox={handleLightBox}
              title="PLACA ROBOT"
              description="Material: Aluminio"
              img={require("../../images/products/robot.jpg")}
              requireIMG={require("../../images/products/robot.jpg")}
            />
          </div>
          <div className={styles.div13}>
            <ImgProductos
              handleLightBox={handleLightBox}
              title="TORNILLOS ROSCADOS"
              description="Material: SAE 4140"
              img={require("../../images/products/tornillos.jpg")}
              requireIMG={require("../../images/products/tornillos.jpg")}
            />
          </div> 
        </div>
      </div>
    
  );
}
