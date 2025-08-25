import React from 'react';
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Sparkles, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.webp";

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 flex flex-col">

            {/* Navbar */}
            <nav className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Regions Mortgage" className="w-10" />
                    <span className="font-bold text-emerald-700 text-lg">REGIONS Mortgage</span>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="flex items-center gap-2 rounded-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                >
                    <LogOut className="w-4 h-4" />
                    Logout
                </Button>
            </nav>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl w-full"
                >
                    <Card className="rounded-2xl shadow-lg border border-emerald-200 bg-white">
                        <CardContent className="p-10 text-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="flex items-center justify-center mb-6"
                            >
                                <Sparkles className="w-10 h-10 text-emerald-600" />
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-4xl md:text-5xl font-bold text-emerald-700 mb-3"
                            >
                                Welcome to REGIONS
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-2xl md:text-3xl font-semibold text-gray-800"
                            >
                                Mortgage
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-gray-600 mt-4 mb-8"
                            >
                                Your trusted partner for smarter mortgage solutions.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                <Button size="lg" className="rounded-xl bg-emerald-600 hover:bg-emerald-700">
                                    Explore Dashboard
                                </Button>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}

export default Dashboard;
