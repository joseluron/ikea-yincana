import Link from 'next/link';

import styles from '../styles/Navegation.module.scss';

const Navegation = () => {
    return (
        <div className={styles.navegationContainer}>
            <Link href="/">
                <a>Volver</a>
            </Link>
        </div>
    )
}

export default Navegation;
