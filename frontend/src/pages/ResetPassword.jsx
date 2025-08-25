import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../components/ui/button";
import axios from "../api/axios";

function ResetPassword() {
    const navigate = useNavigate();
    const [email] = useState(() => localStorage.getItem("resetEmail") || "");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleReset = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("❌ No email found. Please start from ‘Forgot Password’.");
            navigate("/login");
            return;
        }

        if (!password || !confirmPassword) {
            toast.error("❌ Please fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("❌ Passwords do not match");
            return;
        }

        try {
            await axios.post("http://localhost:5000/api/auth/reset-password", {
                email: localStorage.getItem("resetEmail"),
                newPassword: password,
            });

            toast.success("✅ Password reset successful!");
            // Clear the helper email so it doesn’t linger
            localStorage.removeItem("resetEmail");
            setTimeout(() => navigate("/login"), 1200);
        } catch (err) {
            const msg = err.response?.data?.message || "Reset failed";
            toast.error(`❌ ${msg}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-emerald-700 mb-2 text-center">
                    Reset Password
                </h2>

                {email ? (
                    <p className="text-sm text-gray-600 text-center mb-4">
                        Resetting password for <span className="font-semibold">{email}</span>
                    </p>
                ) : (
                    <p className="text-sm text-red-600 text-center mb-4">
                        No email found. Please go back and use “Forgot Password”.
                    </p>
                )}

                <form onSubmit={handleReset} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-emerald-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-emerald-500 focus:outline-none"
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        className="mt-4 bg-emerald-600 hover:bg-emerald-700"
                    >
                        Reset Password
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
