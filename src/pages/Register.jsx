import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Registration successful");
            navigate("/");
        } catch (error) {
            alert("Error registering: " + error.message);
        }
    };

    return (
        <div className="bg-gray-100 flex md:items-center md:justify-center min-h-dvh">
            <div className="w-full md:max-w-md">
                <div className="bg-white h-full flex flex-col justify-center md:shadow-lg md:rounded-lg px-8 py-6">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                        Register
                    </h2>

                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label
                                className="block text-start text-gray-700 text-sm font-bold mb-2"
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
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-start text-gray-700 text-sm font-bold mb-2"
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
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-start text-gray-700 text-sm font-bold mb-2"
                                for="confirm-password"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                placeholder="Confirm your password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full mx-0 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-center text-gray-600 text-sm">
                        Already have an account? {" "}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
