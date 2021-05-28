export const calculateScore = (subjects) => {
  let finalScore = 0;

  subjects.map(subject => {
    Object.keys(subject).map((question) => {
      if (subject[question].correctAnswer.includes(subject[question].userAnswer.toLowerCase())) {
        finalScore += subject[question].value;
      }
    });
  });

  return finalScore;
};
