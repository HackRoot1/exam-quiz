// src/utils/shuffleQuestions.js
export const getRandomQuestions = (questions, pathname) => {
    const selectedQuestions = [];

    // Randomly select 3 questions from English
    if (pathname === "/ntpc-question-paper-1") {
        selectedQuestions.push(...questions.questionPaperNtpc);
    } else if (pathname === "/ppsaci-marathi") {
        selectedQuestions.push(
            ...questions.marathi.sort(() => 0.5 - Math.random()).slice(0, 25)
        );
    } else if (pathname === "/ppsaci-english") {
        selectedQuestions.push(
            ...questions.english.sort(() => 0.5 - Math.random()).slice(0, 25)
        );
    } else if (pathname === "/english-vocabulary") {
        selectedQuestions.push(
            ...questions.english.sort(() => 0.5 - Math.random()).slice(0, 25)
        );
    } else if (pathname === "/ppsaci-maths-reasoning") {
        selectedQuestions.push(
            ...questions.mathsReasoning
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
        );
    } else if (pathname === "/ppsaci-maths-algebra") {
        selectedQuestions.push(
            ...questions.mathsAlgebra
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
        );
    } else if (pathname === "/ppsaci-general-knowledge") {
        selectedQuestions.push(
            ...questions.generalknowledge
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
        );
    } else {
        selectedQuestions.push(
            ...questions.english.sort(() => 0.5 - Math.random()).slice(0, 25)
        );
        // Randomly select 4 questions from Maths
        selectedQuestions.push(
            ...questions.marathi.sort(() => 0.5 - Math.random()).slice(0, 25)
        );
        selectedQuestions.push(
            ...questions.mathsReasoning
                .sort(() => 0.5 - Math.random())
                .slice(0, 12)
        );
        // Randomly select 4 questions from Maths
        selectedQuestions.push(
            ...questions.mathsAlgebra
                .sort(() => 0.5 - Math.random())
                .slice(0, 13)
        );
        selectedQuestions.push(
            ...questions.generalknowledge
                .sort(() => 0.5 - Math.random())
                .slice(0, 25)
        );
    }

    return selectedQuestions;
};
