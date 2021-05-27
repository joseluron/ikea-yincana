import queImg from "../../assets/ciencias-naturales/QUE.png";
import tiendaImg from "../../assets/ciencias-naturales/TIENDA.png";
import abrioImg from "../../assets/ciencias-naturales/ABRIO.png";
import enImg from "../../assets/ciencias-naturales/EN.png";
import dosmilcatorceImg from "../../assets/ciencias-naturales/DOSMILCATORCE.png";

import styles from "../../styles/CienciasNaturales.module.scss";

const CienciasNaturales = () => {
  const QUESTION_1 = [queImg, tiendaImg, abrioImg, enImg, dosmilcatorceImg];

  return (
    <div className={styles.cienciasNnaturalesContainer}>
      <h1>CienciasNaturales</h1>

      <div className={styles.question}>
        <h2>
          Ejercicio 1.1: A través de la primera letra de cada foto, se
          construira una frase. Revela dicha frase para poder contestar de forma
          correcta a la pregunta que nos hace
        </h2>

        <div className={styles.questionImages}>
          {QUESTION_1.map((image) => {
            return <img src={image} alt="Primera pregunta" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CienciasNaturales;
