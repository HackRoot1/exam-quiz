// src/utils/shuffleQuestions.js
export const getRandomQuestions = (questions) => {
    const selectedQuestions = [];

    // Randomly select 3 questions from English
    selectedQuestions.push(
        ...questions.english.sort(() => 0.5 - Math.random()).slice(0, 3)
    );

    // Randomly select 3 questions from Hindi
    selectedQuestions.push(
        ...questions.hindi.sort(() => 0.5 - Math.random()).slice(0, 3)
    );

    // Randomly select 4 questions from Maths
    selectedQuestions.push(
        ...questions.maths.sort(() => 0.5 - Math.random()).slice(0, 4)
    );

    return selectedQuestions;
};