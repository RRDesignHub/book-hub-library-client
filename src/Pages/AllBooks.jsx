import axios from "axios";
import React, { useEffect, useState } from "react";

export const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() =>{
    handleAllBooks();
  },[])

  const handleAllBooks = async() =>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/allBooks`)
    setBooks(data);
  }
  return (
    <div className="bg-[#F8FAFC] pb-10 pt-3 max-sm:w-11/12 md:w-11/12 mx-auto min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#334155] mb-8 text-center">
          All Books
        </h2>
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
              <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                Rating: <span className="font-semibold">{book?.rating}/5</span>
              </div>
              <div className="flex-grow"></div>
              <button
                // onClick={() => navigate(`/update-book/${book.id}`)}
                className="w-full py-2 px-4 bg-[#334155] hover:bg-[#9AA6B2] text-white font-medium rounded-md transition"
              >
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
