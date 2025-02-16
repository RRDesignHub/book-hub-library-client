import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
export const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { authRegister, setUser, loginWithGoogle, updateUser } =
    useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const validatePassword = (pass) => {
    const uppercase = /[A-Z]/.test(pass);
    const lowercase = /[a-z]/.test(pass);
    const minLength = pass.length >= 6;

    let err = "";
    if (!uppercase) {
      err = "Password must contain an uppercase letter.";
    }
    if (!lowercase) {
      err = "Password must contain a lowercase letter.";
    }
    if (!minLength) {
      err = "Password must be at least 6 characters long.";
    }

    setPasswordError(err);
    err = "";
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    const registeredUser = {
      name,
      email,
      photoUrl,
      password,
    };

    authRegister(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success(`${name} successfully registered!`);

        updateUser(name, photoUrl);
        navigate(location.state ? `${location.state}` : "/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          toast.error("The email address is not valid.");
        } else if (error.code === "auth/weak-password") {
          toast.error("The password is too weak.");
        } else if (error.code === "auth/email-already-in-use") {
          toast.error("The email is already registered.");
        } else if (error.code === "auth/operation-not-allowed") {
          toast.error("Email/password accounts are not enabled.");
        } else {
          toast.error("An unexpected error occurred.");
        }
      });
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`User successfully login!`);
        navigate(location.state ? `${location.state}` : "/");
      })
      .catch((err) => {
        console.log(err.code);
        toast.error(err.code);
      });
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse md:w-11/12 mx-auto my-5">
      <div className="text-center lg:text-left w-full lg:w-1/2">
        <h1 className="text-5xl font-bold text-[#2E384D]">
          Join Book Hub Today!
        </h1>
        <p className="py-6 text-[#6C7983]">
          Create an account to explore a world of books. Save your favorites,
          track your reading progress, and connect with fellow book lovers.
        </p>
      </div>
      <div className="card bg-[#D9EAFD] rounded-lg w-full shadow-2xl lg:w-1/2 ">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold text-[#34495E]">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-white border-[#BCCCDC] focus:ring focus:ring-[#BCCCDC]"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold text-[#34495E]">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-white border-[#BCCCDC] focus:ring focus:ring-[#BCCCDC]"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold text-[#34495E]">
                Photo URL
              </span>
            </label>
            <input
              type="url"
              name="photoUrl"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full bg-white border-[#BCCCDC] focus:ring focus:ring-[#BCCCDC]"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold text-[#34495E]">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="input input-bordered w-full bg-white border-[#BCCCDC] focus:ring focus:ring-[#BCCCDC]"
              required
              onChange={(e) => validatePassword(e.target.value)}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-2 whitespace-pre-line">
                {passwordError}
              </p>
            )}
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="btn bg-[#34495E] hover:bg-[#9AA6B2] text-[#FFFFFF] border-0 w-full"
            >
              Register
            </button>
          </div>
        </form>
        <div className="p-8">
          <div className="divider mt-0 mb-5">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center justify-center gap-2 border-[#BCCCDC] text-[#34495E] hover:border-[#9AA6B2] hover:text-white"
          >
            <FcGoogle className="text-2xl" /> Continue with Google
          </button>
          <p className="text-center mt-4 text-[#34495E]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#2C3E50] font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
