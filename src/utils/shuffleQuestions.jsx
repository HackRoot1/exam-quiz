// src/utils/shuffleQuestions.js
export const getRandomQuestions = (questions, pathname) => {
    const selectedQuestions = [];

    // Randomly select 3 questions from English
    if (pathname === "/ntpc-question-paper-1") {
        selectedQuestions.push(...questions.questionPaperNtpc);
    } else if (pathname === "/ppsaci-marathi") {
        selectedQuestions.push(
            ...questions.english.sort(() => 0.5 - Math.random()).slice(0, 8)
        );

        // Randomly select 3 questions from Hindi
        selectedQuestions.push( 
            ...questions.hindi.sort(() => 0.5 - Math.random()).slice(0, 8)
        );

        // Randomly select 4 questions from Maths
        selectedQuestions.push(
            ...questions.maths.sort(() => 0.5 - Math.random()).slice(0, 6)
        );
    }

    return selectedQuestions;
};
