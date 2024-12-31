import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Loading from "../components/Loading";
export const CategorizedBooks = () => {
  const [books, setBooks] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    handleCategorizedBooks();
  }, []);

  const handleCategorizedBooks = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/category/${category}`
    );
    setBooks(data);
  };

  return (
    <div className="bg-[#F8FAFC] py-10 w-11/12 mx-auto">
      {
        books.length == 0 ? 
        <Loading></Loading> :
        <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#43556ee5] mb-6 text-center">
          Total {books.length} Books in{" "}
          <span className="text-[#334155]">{category}</span> Category.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Book Cards */}
          {books &&
            books.map((book) => (
              <div
                key={book?._id}
                className="bg-[#D9EAFD] p-5 flex flex-col rounded-lg shadow-lg transition-all duration-500 hover:scale-95 hover:shadow-xl"
              >
                <img
                  src={book?.coverURL}
                  alt={book?.bookTitle}
                  className="w-fit shadow-2xl mx-auto h-52 object-contain rounded-md mb-2 "
                />
                <div className=" ">
                  <h3 className="text-xl font-semibold text-[#334155] ">
                    {book?.bookTitle}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    By: {book?.authorName}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Category: {book?.bookCategory}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Quantity: {book?.bookQuantity}
                  </p>

                  {/* Rating Component */}
                  <div className="text-sm mb-2">
                    <ReactStars
                      count={5}
                      value={book?.rating}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                </div>
                <div className="flex-grow"></div>
                {/* Details Button */}
                <Link to={`/book/${book?._id}`}>
                  <button className="bg-[#43556ee5] hover:bg-[#3a495ee5] text-white py-2 px-4 rounded-md w-full">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
        </div>
      </div>
      }
    </div>
  );
};
