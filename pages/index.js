import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

import ikeaLogo from '../assets/ikea-logo.png';

export default function Home() {
  
  const pages = [
    {
      page: 'Ciencias Naturales',
      path: 'cienciasNaturales'
    }
  ];

  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>IKEA Matriz P&C</title>
        <meta name="description" content="IKEA Matriz P&C" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.homeWrapper}>
        
        <div className={styles.header}>
          <img src={ikeaLogo} alt="IKEA Logo" />
          
          <span>IKEA</span>
          <span>Matriz P&C</span>
        </div>

        <div>
          {pages.map(page => {
            return (
              <Link href={`/${page.path}`}>
                <a>{page.page}</a>
              </Link>
            )
          })}
        </div>

      </div>
    </div>
  )
}
