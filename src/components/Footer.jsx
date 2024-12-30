import { Link } from "react-router-dom";
import logo from "./../assets/Logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-[#D9EAFD] text-blue-950 py-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About Section */}
        <div className="flex flex-col items-start">
          <img
            src={logo}
            alt="BookHub Logo"
            className="h-[50px] mb-4 drop-shadow-sm"
          />
          <p className="text-gray-700 leading-relaxed">
            Welcome to Book Hub, your one-stop solution for managing books and
            borrowing with ease. Empowering knowledge and efficient management.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="text-gray-700 hover:text-blue-950 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/all_books"
                className="text-gray-700 hover:text-blue-950 hover:underline"
              >
                All Books
              </a>
            </li>
            <li>
              <a
                href="/add_book"
                className="text-gray-700 hover:text-blue-950 hover:underline"
              >
                Add Book
              </a>
            </li>
            <li>
              <a
                href="/borrowed_books"
                className="text-gray-700 hover:text-blue-950 hover:underline"
              >
                Borrowed Books
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-700 hover:text-blue-950 hover:underline"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p className="text-gray-700">
            Email:{"ripanulalam2000@gmail.com "}
            <a
              href="ripanulalam8@gmail.com"
              className="text-blue-950 hover:underline"
            >
              info@bookhub.com
            </a>
          </p>
          <p className="text-gray-700">Phone: +123 456 789</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-700 hover:text-blue-950">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-950">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-950">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-[#BCCCDC] pt-4 text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Book Hub. All Rights Reserved.
          Designed & Developed by{" "}
          <Link
            to="https://ripanulalam.netlify.app"
            className="font-semibold underline"
          >
            Ripanul Alam Ridoy
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};
