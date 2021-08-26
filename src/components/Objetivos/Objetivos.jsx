import styles from './Objetivos.module.css'

export function Objetivos() {
    return (
        <div className={styles.objetivos} id='objetivos'>
            <div className={styles.objetivos__objetivos}>
                <h2 className={styles.objetivos__heading}>Objetivos</h2>
                <p className={styles.objetivos__paragraph}>Nuestro objetivo consiste en brindar servicios de mecanizados de excelente calidad, logrando que superen las expectativas de nuestros clientes, en cuanto a competitividad de costos, la rentabilidad y eficiencia de nuestros procesos, así logrando la mayor calidad posible.</p>
            </div>
            <div className={styles.objetivos__calidad}>
                <h2 className={styles.objetivos__heading}>Calidad</h2>
                <p className={styles.objetivos__paragraph}>El nivel de calidad depende tanto de la materia prima que utilizamos como de las transformaciones que le realizamos. Por lo tanto trabajamos con materias primas de perfecta calidad, ademas cuidamos cada detalle desde la recepción de la materia hasta el producto entregado al cliente, así lograr brindar productos de excelente calidad.</p>
            </div>
        </div>
    )
}
