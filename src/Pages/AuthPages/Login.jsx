import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
export const Login = () => {
  const { user, setUser, loginWithEmail, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmail(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success(`User successfully log in!!!`)
        navigate(location.state ? `${location.state}` : "/");
        form.reset();
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          toast.error("The email address you entered is not valid.");
        } else if (err.code === "auth/wrong-password") {
          toast.error("The password you entered is incorrect.")
        } else if (err.code === "auth/user-not-found") {
          toast.error('No account exists with the provided email.')
        } else {
          toast.error("An unexpected error occurred.");
        }
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`User successfully log in!!!`)
        navigate(location.state ? `${location.state}` : "/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div className="hero  py-6">
      <div className="hero-content flex-col lg:flex-row-reverse md:w-11/12 mx-auto">
        {/* Login Info Section */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-5xl font-bold text-[#2E384D]">Login now!</h1>
          <p className="py-6 text-[#6C7983]">
            Access your library account easily. Manage borrowed books, track
            returns, and stay updated with all the latest additions to our
            collection.
          </p>
        </div>

        {/* Login Form Section */}
        <div className="card bg-[#D9EAFD] w-full shadow-2xl lg:w-1/2">
          <form className="card-body pb-0" onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-[#34495E]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered  text-[#2E384D] placeholder-[#6C7983] focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-[#34495E]">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered  text-[#2E384D] placeholder-[#6C7983] focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <label className="label">
                <Link
                  to='/reset-password'
                  className="label-text-alt link link-hover text-[#4A90E2]"
                >
                  Forgot password?
                </Link>
              </label>
            </div>

            {/* Login Button */}
            <div className="form-control mt-6">
              <button className="btn bg-[#34495E] hover:bg-[#9AA6B2] text-[#FFFFFF] border-0 w-full">
                Login
              </button>
            </div>
          </form>
          <div className="p-8">
            <div className="divider mt-0 mb-5">OR</div>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-2xl" /> Continue with Google
            </button>
            <p className="text-center text-[#34495E] mt-4">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#2C3E50] font-semibold hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
