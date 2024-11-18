import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TopicListPage from "./pages/TopicListPage";
import Ntpc from "./pages/Ntpc";
import QuestionPage from "./pages/QuestionPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Home Route */}
                    <Route path="/" element={<Home />} />
                    
                    {/* Ntpc Paper Routes */}
                    <Route path="/ntpc" element={<Ntpc />} />
                    <Route path="/ntpc-question-paper-1" element={<QuestionPage />} />
                    
                    {/* PPSACI Paper Routes */}
                    <Route path="/ppsaci" element={<TopicListPage />} />
                    <Route path="/ppsaci-question-paper" element={<QuestionPage />} />
                    <Route path="/ppsaci-marathi" element={<QuestionPage />} />
                    
                    
                    {/* Authentication Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
