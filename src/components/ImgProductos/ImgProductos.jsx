import { Lightbox } from "../Lightbox/Lightbox";
import styles from "./ImgProductos.module.css";

export function ImgProductos(props) {

  const lightbox = (e)=>{
    props.handleLightBox(true, e, props.requireIMG);
  }

  return (
    <div className={styles.img__wrapper} onClick={lightbox}>
      <img src={props.img.default} className={styles.img__wrapper__img} />
      <div className={styles.img__description}>
        <h3>{props.title}</h3>
        {props.description && <h4>{props.description}</h4>}
      </div>
    </div>
  );
} 
