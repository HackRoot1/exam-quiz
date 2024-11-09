import React from "react";

const Result = ({ answers, questions }) => {
    let score = 0;
    questions.forEach((question, index) => {
        if (question.answer === answers[index]) score += 1;
    });

    return (
        <div>
            <h2>Quiz Completed!</h2>
            <p>
                Your Score: {score}/{questions.length}
            </p>
        </div>
    );
};

export default Result;
