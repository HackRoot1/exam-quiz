import React from "react";
import "./App.css";
import QuizContainer from "./components/QuizContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <main class="grow bg-blue-200">
                    <QuizContainer />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
