import React, { useState, useEffect } from "react";
import Question from "./Question";
import Timer from "./Timer";
import Result from "./Result";
import QuestionList from "./QuestionList";
import ppsaciQuestionData from "../data/questions";
import questionsData from "../data/questionPaperNtpc";
import { getRandomQuestions } from "../utils/shuffleQuestions";
import { useLocation } from "react-router-dom";

const QuizContainer = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [markedQuestions, setMarkedQuestions] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showSubmitPrompt, setShowSubmitPrompt] = useState(false);
    const [showMarkedPrompt, setShowMarkedPrompt] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const location = useLocation();

    console.log(answers);

    useEffect(() => {
        if (location.pathname === "/ntpc-question-paper-1") {
            setQuestions(getRandomQuestions(questionsData, location.pathname));
        } else if (location.pathname === "/ppsaci-marathi") {
            setQuestions(
                getRandomQuestions(ppsaciQuestionData, location.pathname)
            );
        } else if (location.pathname === "/ppsaci-english") {
            setQuestions(
                getRandomQuestions(ppsaciQuestionData, location.pathname)
            );
        } else if (location.pathname === "/ppsaci-maths-reasoning") {
            setQuestions(
                getRandomQuestions(ppsaciQuestionData, location.pathname)
            );
        } else if (location.pathname === "/ppsaci-maths-algebra") {
            setQuestions(
                getRandomQuestions(ppsaciQuestionData, location.pathname)
            );
        } else if (location.pathname === "/ppsaci-general-knowledge") {
            setQuestions(
                getRandomQuestions(ppsaciQuestionData, location.pathname)
            );
        }
    }, [location.pathname]);

    const handleAnswerSelect = (answer) => {
        setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
        setHasStarted(true);
    };

    const handleMarkQuestion = () => {
        setMarkedQuestions((prev) => [
            ...new Set([...prev, currentQuestionIndex]),
        ]);
        setCurrentQuestionIndex((prev) => prev + 1);
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
                    <div className="h-[30px] md:h-[50px] flex justify-center items-center">
                        <Timer onTimeUp={handleSubmit} duration={5400} />
                    </div>
                    <div className="flex flex-col md:flex-row h-full px-3 md:px-10 pt-10">
                        <section className="w-full md:w-4/5 p-5 pb-10 flex flex-col mb-2 justify-between">
                            <>
                                {questions.length > 0 && (
                                    <Question
                                        questionData={
                                            questions[currentQuestionIndex]
                                        }
                                        selectedAnswer={
                                            answers[currentQuestionIndex]
                                        }
                                        questionNo={currentQuestionIndex}
                                        onAnswerSelect={handleAnswerSelect}
                                        resultTrue={false}
                                    />
                                )}

                                <div className="flex justify-between mt-10">
                                    <button
                                        className="bg-blue-400 hover:bg-blue-500 rounded-lg md:rounded-none font-bold text-white px-2 py-1 md:px-5 md:py-2"
                                        onClick={handleMarkQuestion}
                                    >
                                        Mark for Review
                                    </button>

                                    <div className="flex">
                                        <button
                                            className="bg-red-500 hover:bg-red-600 rounded-lg md:rounded-none font-bold text-white px-2 py-1 md:px-5 md:py-2"
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
                                            className="bg-green-400 hover:bg-green-500 rounded-lg md:rounded-none font-bold text-white px-2 py-1 md:px-5 md:py-2"
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
                                            className="bg-blue-500 hover:bg-blue-600 rounded-lg md:rounded-none font-bold text-white px-2 py-1 md:px-5 md:py-2"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </>
                        </section>

                        <section className="w-full md:w-1/5 p-5 flex flex-col gap-2">
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
                <>
                    <div className="h-[30px] md:h-[50px] flex justify-center items-center">
                        <Result answers={answers} questions={questions} />
                    </div>
                    <div className="flex flex-col md:flex-row h-full px-3 md:px-10 pt-10">
                        <section className="w-full md:w-4/5 p-5 pb-10 flex flex-col mb-2 justify-between">
                            <>
                                {questions.length > 0 && (
                                    <Question
                                        questionData={
                                            questions[currentQuestionIndex]
                                        }
                                        selectedAnswer={
                                            answers[currentQuestionIndex]
                                        }
                                        questionNo={currentQuestionIndex}
                                        onAnswerSelect={handleAnswerSelect}
                                        resultTrue={true}
                                    />
                                )}

                                <div className="flex justify-between mt-10">
                                    <button
                                        className="bg-blue-400 hover:bg-blue-500 rounded-lg md:rounded-none font-bold text-white px-2 py-1 md:px-5 md:py-2"
                                        onClick={handleMarkQuestion}
                                    >
                                        Mark for Review
                                    </button>

                                    <div className="flex">
                                        <button
                                            className="bg-red-500 hover:bg-red-600 rounded-lg md:rounded-none font-bold text-white px-2 py-1 md:px-5 md:py-2"
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
                                            className="bg-green-400 hover:bg-green-500 rounded-lg md:rounded-none font-bold text-white px-2 py-1 md:px-5 md:py-2"
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
                                            className="bg-blue-500 hover:bg-blue-600 rounded-lg md:rounded-none font-bold text-white px-2 py-1 md:px-5 md:py-2"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </>
                        </section>

                        <section className="w-full md:w-1/5 p-5 flex flex-col gap-2">
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
            )}
        </>
    );
};

export default QuizContainer;
