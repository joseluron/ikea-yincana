import {useContext, useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';

import ExamContext from '../components/ExamContext';
import { calculateScore } from '../utils/calculateScore';

import styles from '../styles/Home.module.scss';
import ikeaLogo from '../assets/ikea-logo.png';

export default function Home() {
  const [score, setScore] = useState(0);

  const { cienciasNaturalesAnswers } = useContext(ExamContext);
  const [ cienciasNaturales ] = cienciasNaturalesAnswers;

  const pages = [
    {
      page: 'Ciencias Naturales',
      path: 'cienciasNaturales'
    }
  ];

  const calculateUserScore = () => {
    setScore(calculateScore([cienciasNaturales]));
  }

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

        <div className={styles.pagesWrapper}>
          {pages.map(page => {
            return (
              <Link key={page} href={`/${page.path}`}>
                <a>{page.page}</a>
              </Link>
            )
          })}
        </div>

        <button type="button" onClick={calculateUserScore}>Calcular Puntuacion</button>
        {score > 0 && <h1>{`Puntuacion del usuario: ${score}`}</h1>}

      </div>
    </div>
  )
}
