import axios from "axios";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../components/Loading";

export const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    handleAllBooks();
  }, []);

  const handleAllBooks = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/borrowedBooks/${user?.email}`
    );
    setBooks(data);
  };
  return (
    <>
      {books.length == 0 ? (
        <Loading></Loading>
      ) : (
        <div className="container w-11/12 mx-auto py-8">
          <h1 className="text-2xl md:text-3xl text-center font-bold text-[#334155] mb-6">
            My Borrowed Books
          </h1>

          {/* List of Borrowed Books */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example of a Borrowed Book Card */}
            {books.map((book) => (
              <div
                key={book._id}
                className="bg-[#D9EAFD] rounded-lg shadow-md p-5 hover:shadow-lg transition flex flex-col"
              >
                {/* Book Cover Image */}
                <img
                  src={book?.coverURL}
                  alt={book?.bookTitle}
                  className="w-fit shadow-2xl mx-auto h-52 object-contain rounded-md mb-2"
                />

                {/* Book Details */}
                <div className="flex-1">
                  <h2 className="text-lg md:text-xl text-center font-semibold text-[#334155] mb-2">
                    {book?.bookTitle}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Author:</strong> {book?.authorName}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Category:</strong> {book?.bookCategory}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Borrowed Date:</strong>{" "}
                    {format(new Date(book?.borrowedDate), "P")}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Return Date:</strong>{" "}
                    {format(new Date(book?.returnDate), "P")}
                  </p>
                </div>
                <div className="flex-grow"></div>
                {/* Return Button */}
                <button
                  className="w-full py-2 px-4 bg-[#334155] hover:bg-[#9AA6B2] text-white font-medium rounded-md transition"
                  // onClick={() => handleReturn(book.id)}
                >
                  Return Book
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
