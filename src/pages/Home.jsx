import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import QuizContainer from "../components/QuizContainer";
import Footer from "../components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseConfig';


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
        <div className="flex flex-col h-dvh">
            <Header handleLogout = {handleLogout} />
            {/* <button onClick={handleLogout}>Logout</button> */}
            <main className="grow bg-white">
                <QuizContainer />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
