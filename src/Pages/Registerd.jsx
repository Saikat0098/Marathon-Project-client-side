import React, { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
 
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Registerd = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const {
    createNewUser,
    setUser,
    updateUserProfile,
    googleLogin,
    setLoading,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const signUpData = Object.fromEntries(formData.entries());
    const { name, email, password, photo } = signUpData;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "At least one uppercase, one lowercase, and length must be at least 6 characters."
      );
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        toast.success("Successfully registered!");

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {})
          .catch(() => {
            setLoading(false);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        toast.success("Successfully logged in with Google!");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-[850px] shadow-lg rounded-lg overflow-hidden">
        {/* Gradient Welcome Section */}
        <div className="flex-1 bg-gradient-to-b from-[#FF5E6C] to-[#FD267D] p-8 text-white flex flex-col justify-center items-center md:items-start">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Welcome!</h1>
            <p className="text-sm mb-6">
              Create your account to join us and start your journey today.
            </p>
          </div>
        </div>

        {/* Signup Form Section */}
        <div className="flex-1 bg-white p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#FF5E6C] text-center mb-4">
            Sign Up
          </h2>
          <p className="text-center text-sm mb-6">
            Please fill in the details to create your account.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
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
              <label className="text-xs text-red-400">{error}</label>
              <div
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full bg-[#FF5E6C] border-0 hover:bg-[#FD267D]"
            >
              SIGN UP
            </button>
          </form>
          <div className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#FF5E6C] hover:underline">
              Log in
            </Link>
          </div>

          {/* Google Login Button */}
          <div className="mt-6 flex items-center justify-center">
            <button
              onClick={handleGoogleLogin}
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
        </div>
      </div>
    </div>
  );
};

export default Registerd;
