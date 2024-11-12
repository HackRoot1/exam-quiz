import React, { useState, useEffect } from "react";
import Question from "./Question";
import Timer from "./Timer";
import Result from "./Result";
import QuestionList from "./QuestionList";
import questionsData from "../data/questions";
import { getRandomQuestions } from "../utils/shuffleQuestions";

const QuizContainer = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [markedQuestions, setMarkedQuestions] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showSubmitPrompt, setShowSubmitPrompt] = useState(false);
    const [showMarkedPrompt, setShowMarkedPrompt] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        setQuestions(getRandomQuestions(questionsData));
    }, []);

    const handleAnswerSelect = (answer) => {
        setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
        setHasStarted(true);
    };

    const handleMarkQuestion = () => {
        setMarkedQuestions((prev) => [
            ...new Set([...prev, currentQuestionIndex]),
        ]);
        setCurrentQuestionIndex(
            (prev) => prev + 1
        );
    };

    const handleNavigateToQuestion = (index) => {
        setCurrentQuestionIndex(index);
    };

    const handleSubmit = () => {
        const unansweredMarkedQuestions = markedQuestions.filter(
            (index) => !(index in answers)
        );

        // Show prompt if there are any unanswered marked questions
        if (unansweredMarkedQuestions.length > 0) {
            setShowMarkedPrompt(true);
        } else {
            setIsSubmitted(true);
        }
    };

    useEffect(() => {
        if (hasStarted && Object.keys(answers).length === questions.length) {
            setShowSubmitPrompt(true);
        }
    }, [answers, questions.length, hasStarted]);

    const handleConfirmSubmit = () => {
        setShowMarkedPrompt(false);
        setIsSubmitted(true);
    };

    useEffect(() => {
        // Trigger confirm dialog for marked questions prompt
        if (showMarkedPrompt) {
            const reviewMarkedQuestions = window.confirm(
                "You have marked questions that are not yet answered. Would you like to review them before submitting?"
            );

            if (reviewMarkedQuestions) {
                setShowMarkedPrompt(false); // User chooses to review
            } else {
                handleConfirmSubmit(); // User chooses to submit anyway
            }
        }
    }, [showMarkedPrompt]);

    useEffect(() => {
        // Trigger confirm dialog for submit prompt when all questions are answered
        if (showSubmitPrompt && !showMarkedPrompt) {
            const confirmSubmit = window.confirm(
                "All questions are answered. Do you want to submit the quiz?"
            );

            if (confirmSubmit) {
                handleConfirmSubmit();
            } else {
                setShowSubmitPrompt(false);
            }
        }
    }, [showSubmitPrompt, showMarkedPrompt]);

    return (
        <>
            {!isSubmitted ? (
                <>
                    <div className="h-[50px] flex justify-center items-center">
                        <Timer onTimeUp={handleSubmit} duration={5400} />
                    </div>
                    <div className="flex h-full px-10 pt-10">
                        <section className="w-4/5 p-5 pb-10">
                            <>
                                {questions.length > 0 && (
                                    <Question
                                        questionData={
                                            questions[currentQuestionIndex]
                                        }
                                        selectedAnswer={
                                            answers[currentQuestionIndex]
                                        }
                                        onAnswerSelect={handleAnswerSelect}
                                    />
                                )}

                                <div className="flex justify-between mt-10">
                                    <button
                                        className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2"
                                        onClick={handleMarkQuestion}
                                    >
                                        Mark for Review
                                    </button>
                                    <div>
                                        <button
                                            className="bg-red-400 hover:bg-red-500 text-white px-5 py-2"
                                            onClick={() => {
                                                if (currentQuestionIndex > 0) {
                                                    setCurrentQuestionIndex(
                                                        (prev) => prev - 1
                                                    );
                                                }
                                            }}
                                            disabled={
                                                currentQuestionIndex === 0
                                            }
                                        >
                                            Previous
                                        </button>
                                        <button
                                            className="bg-green-400 hover:bg-green-500 text-white px-5 py-2"
                                            onClick={() => {
                                                if (
                                                    currentQuestionIndex <
                                                    questions.length - 1
                                                ) {
                                                    setCurrentQuestionIndex(
                                                        (prev) => prev + 1
                                                    );
                                                }
                                            }}
                                            disabled={
                                                currentQuestionIndex ===
                                                questions.length - 1
                                            }
                                        >
                                            Next
                                        </button>
                                        <button
                                            className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </>
                        </section>

                        <section className="w-1/5 p-5 flex flex-col gap-2">
                            <QuestionList
                                questions={questions}
                                onNavigateToQuestion={handleNavigateToQuestion}
                                currentQuestionIndex={currentQuestionIndex}
                                answers={answers}
                                markedQuestions={markedQuestions} // Pass markedQuestions here
                            />
                        </section>
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center h-full">
                    <Result answers={answers} questions={questions} />
                </div>
            )}
        </>
    );
};

export default QuizContainer;
