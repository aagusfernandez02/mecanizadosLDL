import styles from "./Lightbox.module.css";

export function Lightbox(props) {
  return (
    <div
      className={
        props.LightBox ? `${styles.lightbox} ${styles.active}` : styles.lightbox
      }
      onClick={(e) => {
        if (e.target == e.currentTarget) { /*CHEQUEO QUE EL CLICK SE HAGA FUERA DE LA IMAGEN PARA CERRARLA*/
          props.setLightBox(false);
        }
      }}
    >
      <img src={props.IMG_LightBox} alt="Lightbox Image" />
    </div>
  );
}
