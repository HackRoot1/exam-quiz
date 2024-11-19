import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
// import QuizContainer from "../components/QuizContainer";
import Footer from "../components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Home = () => {
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
                        href="/ntpc"
                        className="w-full md:w-48 h-20 md:h-48 bg-blue-200 shadow-lg flex justify-center items-center rounded-xl font-bold text-center"
                    >
                        RRB NTPC
                    </a>
                    <a
                        href="/ppsaci"
                        className="w-full md:w-48 h-20 md:h-48 bg-blue-200 shadow-lg flex justify-center items-center rounded-xl font-bold text-center"
                    >
                        PPSACI
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
