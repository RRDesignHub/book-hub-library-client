import { Link, NavLink } from "react-router-dom";
import logo from "./../assets/Logo.png";
import { useContext, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
export const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isOpen, setIsOpne] = useState(false);
  const [openCloseMenu, setOpenCloseMenu] = useState(true);

  const handleOpenCloseMenu = (status) => {
    setOpenCloseMenu(!status);
  };
  const handleProfileToagle = () => {
    setIsOpne(!isOpen);
  };

  const handleUserLogout = () => {
    logoutUser();
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-transparent text-[#4A5568] font-semibold underline focus:bg-transparent"
              : "text-[#718096] hover:text-[#4A5568] hover:underline focus:text-[#4A5568]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-transparent text-[#4A5568] font-semibold underline focus:bg-transparent"
              : "text-[#718096] hover:text-[#4A5568] hover:underline focus:text-[#4A5568]"
          }
          to="/allBooks"
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-transparent text-[#4A5568] font-semibold underline focus:bg-transparent"
              : "text-[#718096] hover:text-[#4A5568] hover:underline focus:text-[#4A5568]"
          }
          to="/addBook"
        >
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-transparent text-[#4A5568] font-semibold underline focus:bg-transparent"
              : "text-[#718096] hover:text-[#4A5568] hover:underline focus:text-[#4A5568]"
          }
          to="/borrowedBooks"
        >
          Borrowed Books
        </NavLink>
      </li>

      {user ? (
        <>
          <div className="relative">
            <img
              onClick={handleProfileToagle}
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full border-2 border-[#D9EAFD]"
              src={user?.photoURL}
              alt=""
            />
            <div
              className={`absolute z-30 top-14 w-fit lg:w-[300px] rounded-lg flex-col items-center justify-center gap-2 bg-[#F8FAFC] lg:bg-[#D9EAFD] p-5 shadow-xl ${
                isOpen ? "flex max-sm:-left-10 lg:-right-2" : "hidden"
              }`}
            >
              <h3 className="text-lg font-medium text-center text-[#4A5568]">
                {user?.displayName || "Guest"}
              </h3>
              <button
                onClick={handleUserLogout}
                className="btn py-0 text-sm bg-[#D9EAFD] lg:bg-[#F8FAFC] text-[#4A5568] w-fit h-fit hover:border-[#BCCCDC] hover:bg-[#BCCCDC] hover:text-[#1A202C]"
              >
                Logout
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent text-[#4A5568] font-semibold underline focus:bg-transparent"
                  : "text-[#718096] hover:text-[#4A5568] hover:underline focus:text-[#4A5568]"
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent text-[#4A5568] font-semibold underline focus:bg-transparent"
                  : "text-[#718096] hover:text-[#4A5568] hover:underline focus:text-[#4A5568]"
              }
              to="register"
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar w-11/12 mx-auto relative ">
        <div className="flex-1">
          <Link to="/" className="flex items-center gap-1 md:gap-2">
            <img
              className="h-[30px] md:h-[50px] rounded-xl drop-shadow-lg"
              src={logo}
              alt="Book Hub logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <div className="py-2 px-3 rounded-lg bg-[#D9EAFD] text-blue-950">
            {openCloseMenu ? (
              <TiThMenu
                onClick={() => handleOpenCloseMenu(true)}
                className="text-2xl"
              />
            ) : (
              <FaWindowClose
                onClick={() => handleOpenCloseMenu(false)}
                className="text-2xl"
              />
            )}
          </div>
          <ul
            className={`absolute w-full z-50 gap-5 justify-center duration-500 rounded-lg bg-[#BCCCDC] shadow-lg px-14 py-10 left-0 text-lg ${
              openCloseMenu ? "-top-[1000px]" : "top-20"
            }`}
          >
            {links}
          </ul>
        </div>
      </div>
    </>
  );
};
