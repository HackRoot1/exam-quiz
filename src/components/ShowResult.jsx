import React from "react";

const ShowResult = ({ answers, questions }) => {
    console.log(questions);

    return (
        <>
            <div className="flex flex-col gap-2 px-3 text-black">
                <div className="text-start font-bold">
                    {questions.question.includes("\n") // Check if the questions.question has new lines
                        ? questions.question.split("\n").map((line, index) => (
                              <span key={index}>
                                  {line}
                                  <br />
                              </span>
                          ))
                        : questions.question}
                </div>

                {questions.image && (
                    <img
                        className="h-[100px] md:h-[150px] md:w-1/2"
                        src={`./images/${questions.image}`}
                        alt="not found"
                    />
                )}

                <div className="flex flex-col gap-2">
                    {questions.options.map((option, index) => (
                        <div className="flex items-center" key={index}>
                            <label
                                className="grow text-start cursor-pointer font-semibold"
                                htmlFor={`question-${index}-option-${index}`}
                            >
                                {option.includes(".png") ? (
                                    <img
                                        className="h-[100px] w-[100px] md:h-[150px] md:w-200px"
                                        src={`./images/${option}`}
                                        alt="not found"
                                    />
                                ) : (
                                    `${index + 1}) ${option}`
                                )}
                            </label>

                            <input
                                id={`question-${index}-option-${index}`}
                                type="radio"
                                name="answer"
                                value={option}
                                checked={answers[index] === option}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ShowResult;
