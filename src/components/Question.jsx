import React from "react";

const Question = ({ questionData, selectedAnswer, onAnswerSelect }) => {
    const handleChange = (event) => {
        onAnswerSelect(event.target.value);
    };

    return (
        <>
            <div className="flex flex-col gap-2 px-3 text-black">
                <div className="text-start font-bold">{questionData.question}</div>

                <div className="flex flex-col gap-2">
                    {questionData.options.map((option, index) => (
                        <div className="flex items-center" key={index}>
                            <label
                                className="grow text-start cursor-pointer font-semibold"
                                htmlFor={`question-${index}-option-${index}`}
                            >
                                {index + 1}. {option}
                            </label>
                            <input
                                id={`question-${index}-option-${index}`}
                                type="radio"
                                name="answer"
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Question;
