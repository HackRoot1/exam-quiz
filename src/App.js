import React from "react";
import "./App.css";
import QuizContainer from "./components/QuizContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <main class="flex-1 bg-blue-200">
                    <QuizContainer />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
