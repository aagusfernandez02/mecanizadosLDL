import styles from "./Footer.module.css";

export function Footer() {

  return (
    <footer className={styles.footer} id="footer">
      <h1 className={styles.footer__heading}>INFORMACIÓN DE CONTACTO</h1>
      <div className={styles.footer__sections}>
        <div className={styles.footer__sections__section}>
          <h2>¿Dónde nos encontramos?</h2>
          <p>Rodó 413 - El Palomar</p>
          <p>Buenos Aires, Argentina</p>
        </div>
        <div className={styles.footer__sections__section}>
          <h2>Email</h2>
          <p>info@mecanizadosldl.com.ar</p>
        </div>
        <div className={styles.footer__sections__section}>
          <h2>Teléfonos</h2>
          <p>Teléfono:(+54) 011 4459-0240</p>
          <p>Celular:(+54) 9 11 6654-3417</p>
        </div>
      </div>

    </footer>
  );
}
