"use client";

import axios from "axios";
import { useState } from "react";


export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFormData = async (e) => {
        e.preventDefault();
        if (name === "" || /\d/.test(name)) {
            setError("Please enter your name properly.");
            setSuccess("");
            return;
        }
        if (email === "" || !email.includes("@")) {
            setError("Please enter a valid email address.");
            setSuccess("");
            return;
        }
        if (password === "" || password.length < 6) {
            setError("Please enter a password with at least 6 characters.");
            setSuccess("");
            return;
        }
        console.log(name,email,password);
        
        try {
            setLoading(true);
            const response = await axios.post("/api/auth/signup", {
                name,
                email,
                password,
            });
            console.log(response);
            if(response.data.status===400){
                setError(response.data.message)
                setSuccess('')
                return
            }
            if(response.data.status===201){
                setSuccess(response.data.message)
                setError("")
                return
            }
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
       
            <div className="p-4 h-screen min-h-screen flex justify-center items-center bg-color1">
                <form
                    className="w-full max-w-md bg-color2 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg space-y-4"
                    onSubmit={handleFormData}
                >
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
                        Sign up and start learning
                    </h1>

                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm sm:text-base font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                            className="mt-1 block text-black font-semibold w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-base"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm sm:text-base font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            className="mt-1 block text-black font-semibold w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-base"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm sm:text-base font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            className="mt-1 block text-black font-semibold w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-base"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-color3 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-color1 focus:ring-offset-2 sm:text-sm md:text-base"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center m-2 space-x-2">
                                <div className="w-2 h-2 rounded-full animate-pulse bg-color2"></div>
                                <div className="w-2 h-2 rounded-full animate-pulse bg-color2"></div>
                                <div className="w-2 h-2 rounded-full animate-pulse bg-color2"></div>
                            </div>
                        ) : (
                            "Sign Up"
                        )}
                    </button>
                    {error && <p className="text-red-600 text-center text-sm">{error}</p>}
                    {success && <p className="text-green-600 text-sm text-center">{success}</p>}
                </form>
            </div>
        </>
    );
}
