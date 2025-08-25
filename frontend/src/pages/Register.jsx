import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.webp";
import House from "../assets/House.webp";
import registerUser from "../services/authRegisterService";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await registerUser(email, password);
            localStorage.setItem("token", res.token);

            toast.success("✅ Registration successful!");
            setTimeout(() => {
                navigate("/dashboard");
            }, 1500);
        } catch (err) {
            const msg = err.response?.data?.message || "Registration failed";
            setError(msg);
            toast.error(`❌ ${msg}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
            <div className="w-full max-w-6xl bg-white rounded-[24px] shadow-xl overflow-hidden flex flex-col lg:flex-row">
                {/* Left Panel */}
                <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                    {/* Logo */}
                    <div className="flex items-start gap-2 mb-6">
                        <img src={Logo} alt="Regions Mortgage" className="w-10" />
                        <div className="leading-tight">
                            <p className="font-bold text-black text-sm">REGIONS</p>
                            <p className="font-medium text-black text-sm">Mortgage</p>
                        </div>
                    </div>

                    {/* Title */}
                    <div>
                        <h2 className="text-3xl font-bold mb-2 text-center">
                            Create Account
                        </h2>
                        <p className="text-sm text-gray-600 mb-6 text-center">
                            Enroll now and manage your Regions MyMortgage account.
                        </p>

                        {error && <div className="text-red-600 mb-4 text-sm">{error}</div>}

                        <form onSubmit={handleRegister}>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="email"
                                    className="absolute left-4 top-1 text-xs text-gray-500 pointer-events-none"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pt-5 pb-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                                    required
                                />
                            </div>

                            <div className="relative mb-6">
                                <label
                                    htmlFor="password"
                                    className="absolute left-4 top-1 text-xs text-emerald-700 pointer-events-none"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pt-5 pb-2 px-4 border border-emerald-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-emerald-600 text-white py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition duration-200 text-sm sm:text-base"
                            >
                                Enroll
                            </button>

                            <p className="mt-4 text-sm text-center">
                                Already have an account?{" "}
                                <button
                                    type="button"
                                    onClick={() => navigate("/login")}
                                    className="text-emerald-600 hover:underline font-medium"
                                >
                                    Login
                                </button>
                            </p>
                        </form>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="w-full lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-auto">
                    <img
                        src={House}
                        alt="House"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Register;
