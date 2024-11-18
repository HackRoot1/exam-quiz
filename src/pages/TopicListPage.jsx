import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";


const TopicListPage = () => {
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

            <main className="grow bg-slate-100">
                <div className="flex flex-wrap justify-center items-center gap-6 p-6">
                    <a
                        href="/ppsaci-marathi"
                        className="w-48 h-48 bg-blue-200 shadow-lg flex justify-center items-center rounded-xl font-bold text-center"
                    >
                        Marathi
                    </a>
                    <a
                        href="/ppsaci-question-paper"
                        className="w-48 h-48 bg-blue-200 shadow-lg flex justify-center items-center rounded-xl font-bold text-center"
                    >
                        English
                    </a>
                    <a
                        href="/ppsaci-question-paper"
                        className="w-48 h-48 bg-blue-200 shadow-lg flex justify-center items-center rounded-xl font-bold text-center"
                    >
                        Maths (Reasoning)
                    </a>
                    <a
                        href="/ppsaci-question-paper"
                        className="w-48 h-48 bg-blue-200 shadow-lg flex justify-center items-center rounded-xl font-bold text-center"
                    >
                        Maths (Algebra)
                    </a>
                    <a
                        href="/ppsaci-question-paper"
                        className="w-48 h-48 bg-blue-200 shadow-lg flex justify-center items-center rounded-xl font-bold text-center"
                    >
                        General Knowledge
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TopicListPage;
