import React, { useState } from 'react';

const ExamContext = React.createContext();

export const ExamProvider = ({ children }) => {
    const [cienciasNaturales, setCienciasNaturales] = useState({
        question1: {
            correctAnswer: ['valencia', 'ikea valencia'],
            userAnswer: '',
            value: 1
        }
    });

    return (
        <ExamContext.Provider value={{ cienciasNaturalesAnswers: [cienciasNaturales, setCienciasNaturales]}} >
            {children}
        </ExamContext.Provider>
    );
}

export default ExamContext;
