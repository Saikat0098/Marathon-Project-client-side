import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-[850px] shadow-lg rounded-lg overflow-hidden">
                {/* Left Panel */}
                <div className="flex-1 bg-gradient-to-b from-[#FF7E5F] to-[#FD267D] p-8 text-white flex flex-col justify-center items-center md:items-start">
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4">Welcome Back!</h1>
                        <p className="text-sm mb-6">
                            To stay connected with us, please login with your personal info.
                        </p>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="flex-1 bg-white p-8 md:p-10 flex flex-col justify-center">
                    <h2 className="text-xl md:text-2xl font-bold text-[#FF5E6C] text-center mb-4">
                        Welcome
                    </h2>
                    <p className="text-center text-sm mb-6">
                        Login in to your account to continue.
                    </p>
                    <form>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                            />
                            <div
                                className="absolute right-3 top-3 cursor-pointer"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        <div className="text-right text-sm mb-4">
                            <a href="#" className="text-[#FF5E6C] hover:underline">
                                Forgot your password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-full bg-[#FF5E6C] border-0 hover:bg-[#FD267D]"
                        >
                            LOG IN
                        </button>
                    </form>

                    {/* Google Login Button */}
                    <div className="mt-6 flex items-center justify-center">
                        <button
                            className="border border-[#e5eaf2] rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] text-[#424242] hover:bg-gray-50 transition-all duration-200"
                        >
                            <img
                                src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                                alt="google logo"
                                className="w-[23px]"
                            />
                            Sign in with Google
                        </button>
                    </div>

                    <div className="text-center mt-6 text-sm">
                        Don't have an account?{' '}
                        <Link to="/signUp" className="text-[#FF5E6C] hover:underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;