import { useContext } from 'react';

import ExamContext from '../../components/ExamContext';
import Navegation from '../../components/Navegation';

import styles from "../../styles/CienciasNaturales.module.scss";
import queImg from "../../assets/ciencias-naturales/QUE.png";
import tiendaImg from "../../assets/ciencias-naturales/TIENDA.png";
import abrioImg from "../../assets/ciencias-naturales/ABRIO.png";
import enImg from "../../assets/ciencias-naturales/EN.png";
import dosmilcatorceImg from "../../assets/ciencias-naturales/DOSMILCATORCE.png";


const CienciasNaturales = () => {
  const { cienciasNaturalesAnswers } = useContext(ExamContext)
  const [ cienciasNaturales, setCienciasNaturales ] = cienciasNaturalesAnswers;

  const QUESTION_1 = [queImg, tiendaImg, abrioImg, enImg, dosmilcatorceImg];
  const setQuestion1Answer = e => {
    setCienciasNaturales({
      ...cienciasNaturales,
      question1: {
        ...cienciasNaturales.question1,
        userAnswer: e.target.value
      }
    })
  };

  return (
    <div className={styles.cienciasNnaturalesContainer}>
      <Navegation />
      
      <h1>CienciasNaturales</h1>

      <div className={styles.question}>
        <h2>
          Ejercicio 1.1: A través de la primera letra de cada foto, se
          construira una frase. Revela dicha frase para poder contestar de forma
          correcta a la pregunta que nos hace
        </h2>

        <div className={styles.questionImages}>
          {QUESTION_1.map((image, index) => {
            return <img key={index} src={image} alt="Primera pregunta" />;
          })}
        </div>

        <input type="text" value={cienciasNaturales.question1.userAnswer} onChange={(e) => setQuestion1Answer(e)} />
      </div>
    </div>
  );
};

export default CienciasNaturales;
