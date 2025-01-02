import axios from "axios";
import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
export const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAvailable, setShowAvailable] = useState(false);
  const [view, setView] = useState("Card");
  useEffect(() => {
    setLoading(true);
    handleAllBooks();
    setLoading(false);
  }, [showAvailable]);

  const handleAllBooks = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/allBooks?showAvailable=${showAvailable}`
    );
    setBooks(data);
  };

  const handleDefault = () => {
    setShowAvailable(false);
  };
  return (
    <>
      <Helmet>
        <title>BH - All Books</title>
      </Helmet>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="bg-[#F8FAFC] pb-10 pt-3 max-sm:w-11/12 md:w-11/12 mx-auto min-h-screen">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h2 className="text-2xl md:text-4xl font-bold text-[#334155] mb-4 md:mb-8 text-center">
                All Books
              </h2>
              <div className="flex items-center max-sm:flex-wrap max-sm:justify-center max-sm:gap-2">
                <select
                  value={view}
                  onChange={(e) => setView(e.target.value)}
                  className="px-3 me-1 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Card">Card View</option>
                  <option value="Table">Table View</option>
                </select>
                <button
                  onClick={() => setShowAvailable(true)}
                  className="btn me-1 bg-[#334155] hover:bg-[#9AA6B2] text-white"
                >
                  Show Available Books
                </button>
                <button
                  onClick={handleDefault}
                  className="btn bg-[#334155] hover:bg-[#9AA6B2] text-white"
                >
                  Default
                </button>
              </div>
            </div>
            {view === "Card" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {books.map((book) => (
                  <div
                    key={book._id}
                    className="bg-[#D9EAFD] rounded-lg shadow-md p-5 hover:shadow-lg transition flex flex-col"
                  >
                    <img
                      src={book?.coverURL}
                      alt={book?.bookTitle}
                      className="w-fit shadow-2xl mx-auto h-52 object-contain rounded-md mb-2 "
                    />
                    <h3 className="text-lg md:text-xl font-semibold text-[#334155] mb-2">
                      {book?.bookTitle}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Author: {book?.authorName}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      Category: {book?.bookCategory}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      Quantity: {book?.bookQuantity}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                      Rating:
                      <ReactStars
                        count={5}
                        value={book?.rating || 0}
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div className="flex-grow"></div>
                    <Link to={`/update/${book?._id}`}>
                      <button className="w-full py-2 px-4 bg-[#334155] hover:bg-[#9AA6B2] text-white font-medium rounded-md transition">
                        Update
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full bg-[#F8FAFC] border border-[#BCCCDC] rounded-md">
                  <thead className="bg-[#D9EAFD]">
                    <tr>
                      <th className="px-4 py-2 border-b border-[#BCCCDC] text-[#334155]">
                        Cover
                      </th>
                      <th className="px-4 py-2 border-b border-[#BCCCDC] text-[#334155]">
                        Title
                      </th>
                      <th className="px-4 py-2 border-b border-[#BCCCDC] text-[#334155]">
                        Author
                      </th>
                      <th className="px-4 py-2 border-b border-[#BCCCDC] text-[#334155]">
                        Category
                      </th>
                      <th className="px-4 py-2 border-b border-[#BCCCDC] text-[#334155]">
                        Quantity
                      </th>
                      <th className="px-4 py-2 border-b border-[#BCCCDC] text-[#334155]">
                        Rating
                      </th>
                      <th className="px-4 py-2 border-b border-[#BCCCDC] text-[#334155]">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book) => (
                      <tr
                        key={book._id}
                        className="hover:bg-[#D9EAFD] transition-colors"
                      >
                        <td className="px-4 py-2 border-b border-[#BCCCDC]">
                          <img
                            src={book?.coverURL}
                            alt={book?.bookTitle}
                            className="h-16 object-contain rounded-md"
                          />
                        </td>
                        <td className="px-4 py-2 border-b border-[#BCCCDC] text-[#334155]">
                          {book?.bookTitle}
                        </td>
                        <td className="px-4 py-2 border-b border-[#BCCCDC] text-[#334155]">
                          {book?.authorName}
                        </td>
                        <td className="px-4 py-2 border-b border-[#BCCCDC] text-[#334155]">
                          {book?.bookCategory}
                        </td>
                        <td className="px-4 py-2 border-b border-[#BCCCDC] text-[#334155]">
                          {book?.bookQuantity}
                        </td>
                        <td className="px-4 py-2 border-b border-[#BCCCDC] text-[#334155]">
                          <ReactStars
                            count={5}
                            value={book?.rating || 0}
                            size={18}
                            edit={false}
                            activeColor="#ffd700"
                          />
                        </td>
                        <td className="px-4 py-2 border-b border-[#BCCCDC]">
                          <Link to={`/update/${book?._id}`}>
                            <button className="py-1 px-3 bg-[#9AA6B2] hover:bg-[#BCCCDC] text-white font-medium rounded-md transition">
                              Update
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
