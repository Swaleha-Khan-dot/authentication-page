import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Logo from '../assets/Logo.webp';
import House from '../assets/House.webp';
import loginUser from '../services/authLoginService';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await loginUser(email, password);
            localStorage.setItem('token', res.token);

            toast.success("✅ Login successful!");

            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 1500);
        } catch (err) {
            const msg = err.response?.data?.message || "Login failed";
            setError(msg);
            toast.error(`❌ ${msg}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
            <div className="w-full max-w-6xl bg-white rounded-[24px] shadow-xl overflow-hidden flex flex-col lg:flex-row">
                {/* Left Panel */}
                <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                    {/* Top Section: Logo and Enroll */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        {/* Logo + Text */}
                        <div className="flex items-start gap-2">
                            <img src={Logo} alt="Regions Mortgage" className="w-10" />
                            <div className="leading-tight">
                                <p className="font-bold text-black text-sm">REGIONS</p>
                                <p className="font-medium text-black text-sm">Mortgage</p>
                            </div>
                        </div>
                        {/* Enroll Now */}
                        <div className="text-sm text-gray-700">
                            <span>Are you a new customer?</span>
                            <button onClick={() => navigate("/register")} className="ml-2 px-3 py-1 border border-green-700 rounded-full text-green-700 hover:bg-green-50 font-medium transition">
                                Enroll Now
                            </button>
                        </div>
                    </div>

                    {/* Welcome Message */}
                    <div>
                        <h2 className="text-3xl font-bold mb-2 text-center sm:text-center">Welcome Back</h2>
                        <p className="text-sm text-gray-600 mb-6 text-center sm:text-center">
                            Sign in to your Regions MyMortgage account.
                        </p>

                        {error && <div className="text-red-600 mb-4 text-sm">{error}</div>}

                        <form onSubmit={handleLogin}>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="email"
                                    className="absolute left-4 top-1 text-xs text-gray-500 pointer-events-none"
                                >
                                    Online ID
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

                            <div className="flex items-center mb-6">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                    className="accent-emerald-600 w-4 h-4 border border-gray-300 rounded focus:ring-emerald-500 bg-white"
                                />
                                <label htmlFor="remember" className="text-sm text-gray-700 ml-2">
                                    Remember me
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-emerald-600 text-white py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition duration-200 text-sm sm:text-base"
                            >
                                Login
                            </button>

                            <div className="flex flex-col sm:flex-row items-center justify-center mt-4 text-sm text-emerald-600 font-medium space-y-2 sm:space-y-0 sm:space-x-2">
                                <a href="#" className="hover:underline">Forgot Online ID?</a>
                                <span className="hidden sm:inline text-gray-400">•</span>
                                <a href="#" onClick={() => {
                                    if (!email) {
                                        toast.error("Enter your email first to reset password.");
                                        return;
                                    }
                                    localStorage.setItem("resetEmail", email);
                                    navigate("/reset-password");
                                }} className="hover:underline">Forgot Password?</a>
                            </div>
                        </form>
                    </div>

                    {/* Footer */}
                    <footer className="mt-8 text-xs text-gray-500 text-center sm:text-center">
                        <p>Equal Housing Lender · Member FDIC</p>
                        <p className="mb-1">
                            ©2023 Regions Financial Corporation. All Rights Reserved. ·{' '}
                            <span className="text-emerald-600">1 (800) REGIONS</span>
                        </p>
                    </footer>
                </div>

                {/* Right Panel: Image */}
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

export default Login;
