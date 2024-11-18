import React from "react";

const Question = ({ questionData, selectedAnswer, onAnswerSelect, questionNo }) => {
    const handleChange = (event) => {
        onAnswerSelect(event.target.value);
    };

    return (
        <>
            <div className="flex flex-col gap-2 px-3 text-black">
                <div className="text-start font-bold">
                {(questionNo +1) + ") " }
                    {questionData.question.includes("\n") // Check if the questionData.question has new lines
                        ? questionData.question.split("\n").map((line, index) => (
                            <span key={index}>
                            {line}
                            <br />
                            </span>
                        ))
                        : questionData.question // If no \n, just render the text directly
                    }
                </div>

                {questionData.image &&
                    <img className="h-[100px] md:h-[150px] md:w-1/2" src={`./images/${questionData.image}`} alt="not found" />
                }

                <div className="flex flex-col gap-2">
                    {questionData.options.map((option, index) => (
                        <div className="flex items-center" key={index}>
                            <label
                                className="grow text-start cursor-pointer font-semibold"
                                htmlFor={`question-${index}-option-${index}`}
                            >
                                {option.includes(".png")
                                ? 
                                    <img className="h-[100px] w-[100px] md:h-[150px] md:w-200px" src={`./images/${option}`} alt="not found" />
                                : 
                                    `${index + 1}) ${option}`
                                }
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
