import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const {passwordReset} = useContext(AuthContext);
  const handlePasswordReset = e => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) {
      toast.error("Please enter a valid email address!");
      return;
    }

    passwordReset(email)
      .then(() => {
        toast.success("Check your mail...")
        navigate('/login')
      })
      .catch(err => toast.error(err.message))
  };
  
  return (
    <div className="flex items-center justify-center py-8 bg-[#F8FAFC]">
      <div className="w-full max-w-md bg-[#D9EAFD] shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-[#2E384D] mb-4">
          Reset Your Password
        </h1>
        <p className="text-sm text-center text-[#7d8894] mb-6">
          Enter your email address below, and we'll send you instructions to
          reset your password.
        </p>
        <form onSubmit={handlePasswordReset}>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-semibold text-[#2E384D]">
                Email Address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-white border-[#BCCCDC] focus:outline-none focus:border-[#9AA6B2]"
              required
            />
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="btn bg-[#2E384D] text-white w-full hover:bg-[#9AA6B2] hover:shadow-lg"
            >
              Send Reset Email
            </button>
          </div>
        </form>
        <div className="divider my-6"></div>
        <div className="flex justify-between">
          <Link to="/login" className="text-sm text-[#2E384D] hover:underline">
            Back to Login
          </Link>
          <Link to="/" className="text-sm text-[#2E384D] hover:underline">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
