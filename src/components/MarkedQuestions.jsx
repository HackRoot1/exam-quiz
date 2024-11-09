import React from "react";

const MarkedQuestions = ({ markedQuestions, onNavigateToQuestion }) => {
    return (
        <div>
            <h3>Marked Questions for Review</h3>
            {markedQuestions.length > 0 ? (
                <ul>
                    {markedQuestions.map((questionIndex, idx) => (
                        <li key={idx}>
                            <button
                                onClick={() =>
                                    onNavigateToQuestion(questionIndex)
                                }
                            >
                                Go to Question {questionIndex + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No questions marked for review.</p>
            )}
        </div>
    );
};

export default MarkedQuestions;
