import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth } from "../firebaseConfig";
import QuizContainer from "../components/QuizContainer";
import { onAuthStateChanged } from "firebase/auth";

const QuestionPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                alert("You must be logged in to access the quiz.");
                navigate("/login");
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = () => {
        auth.signOut();
        navigate("/login");
    };
    return (
        <div className="flex flex-col min-h-dvh">
            <Header handleLogout={handleLogout} />
            <main className="grow bg-white">
                <QuizContainer />
            </main>
            <Footer />
        </div>
    );
};

export default QuestionPage;
