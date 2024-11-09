import React from "react";

const QuestionList = ({
    questions,
    onNavigateToQuestion,
    currentQuestionIndex,
    answers,
    markedQuestions,
}) => {
    return (
        <div className="flex flex-col gap-2 cursor-pointer">
            <div id="reasoning" className="flex justify-between items-center">
                <div>Reasoning</div>
                <div>
                    <span aria-label="Toggle Reasoning Section">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>
                </div>
            </div>

            <div
                id="open-reasoning"
                className="grid grid-cols-4 gap-4 overflow-auto"
            >
                {questions.map((_, index) => {
                    // Determine the question status
                    const isAnswered = answers.hasOwnProperty(index);
                    const isMarked = markedQuestions.includes(index);

                    // Set color based on status
                    let bgColor = "bg-slate-200"; // Default for unanswered
                    if (isAnswered) bgColor = "bg-green-500 text-white";
                    else if (isMarked) bgColor = "bg-yellow-400 text-black";

                    return (
                        <div key={index}>
                            <button
                                className={`h-[50px] w-[50px] flex justify-center items-center ${bgColor} ${
                                    index === currentQuestionIndex
                                        ? "border-2 border-blue-500"
                                        : ""
                                }`}
                                onClick={() => onNavigateToQuestion(index)}
                                aria-label={`Question ${index + 1}`}
                            >
                                {index + 1}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default QuestionList;
