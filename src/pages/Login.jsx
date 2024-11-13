import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful");
            navigate("/");
        } catch (error) {
            alert("Error logging in: " + error.message);
        }
    };

    return (
        <div className="bg-gray-100 flex md:items-center md:justify-center min-h-dvh">
            <div className="w-full md:max-w-md">
                <div className="bg-white h-full flex flex-col justify-center md:shadow-lg md:rounded-lg px-8 py-6">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                        Login
                    </h2>

                        
                    <form onSubmit={handleLogin}>
                        <div class="mb-4">
                            <label
                                class="block text-start text-gray-700 text-sm font-bold mb-2"
                                for="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div class="mb-4">
                            <label
                                class="block text-start text-gray-700 text-sm font-bold mb-2"
                                for="password"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>


                        <button
                            type="submit"
                            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-4 text-center text-gray-600 text-sm">
                        Don't have an account? { " " }
                        <a href="/register" className="text-blue-500 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
