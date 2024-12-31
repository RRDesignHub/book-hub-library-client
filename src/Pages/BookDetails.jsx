import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Modal from 'react-modal';
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

export const BookDetails = () => {
  const {user} = useContext(AuthContext);
  const [bookDetails, setBookDetails] = useState(null);
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  useEffect(() => {
    handleBookDetails();
  }, []);

  const handleBookDetails = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/book/${id}`
    );
    setBookDetails(data);
  };

  const handleBorrow = () => {
    setIsModalOpen(true);
  };

  const handleBorrowSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;

    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const borrowedDate = new Date();
    const bookId = bookDetails._id;
    const coverURL = bookDetails.coverURL;
    const bookTitle = bookDetails.bookTitle;
    const bookCategory = bookDetails.bookCategory;
    const authorName = bookDetails.authorName;
    const borredBook = {userName, userEmail, borrowedDate, returnDate, bookId, coverURL, bookTitle, bookCategory, authorName};

    try{
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/borrowedBook/${bookDetails._id}`, borredBook)
      if(data.insertedId){
        toast.success(`${bookDetails.bookTitle} borrowed successfully!!!`);
        handleBookDetails();
      }
    }catch(err){
      toast.error(err.message)
      console.log(err.message)
    }

   

    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#F8FAFC] w-11/12 mx-auto min-h-screen py-10">
      {!bookDetails ? 
      <Loading></Loading> :
      (
        <div className="container mx-auto">
          <div className="bg-[#D9EAFD] rounded-lg shadow-lg p-6 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Book Image */}
            <div className="flex justify-center">
              <img
                src={bookDetails?.coverURL}
                alt={bookDetails?.bookTitle}
                className="w-64 h-auto rounded-md shadow-2xl"
              />
            </div>

            {/* Book Details */}
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-[#334155] mb-4">
                {bookDetails?.bookTitle}
              </h1>
              <p className="text-[#374151] mb-2">
                <strong>Author:</strong> {bookDetails?.authorName}
              </p>
              <p className="text-[#374151] mb-2">
                <strong>Category:</strong> {bookDetails?.bookCategory}
              </p>
              <p className="text-[#374151] mb-4">
                <strong>Quantity:</strong> {bookDetails?.bookQuantity}
              </p>

              <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                Rating:
                {bookDetails && (
                  <ReactStars
                    count={5}
                    value={bookDetails?.rating || 0}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                  />
                )}
              </div>

              <p className="text-[#6B7280] text-justify mb-6">{bookDetails?.description}</p>

              <button
                onClick={handleBorrow}
                disabled={bookDetails?.bookQuantity === 0}
                className={`py-2 px-4 rounded-md text-white font-medium ${
                  bookDetails?.bookQuantity > 0
                    ? "bg-[#334155] hover:bg-[#4d617c]"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {bookDetails?.bookQuantity > 0 ? "Borrow Book" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Borrow Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-[#D9EAFD] w-11/12   rounded-lg shadow-lg md:w-96 mx-auto p-6"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        ariaHideApp={false}
      >
        <h2 className="text-xl text-center font-bold text-[#334155] mb-4">Borrow Book</h2>
        <form onSubmit={handleBorrowSubmit}>
          <div className="mb-4">
            <label className="block text-[#334155] mb-2">Name</label>
            <input
              type="text"
              name="userName"
              value={user?.displayName}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#334155] mb-2">Email</label>
            <input
              type="email"
              name="userEmail"
              value={user?.email}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#334155] mb-2">Return Date</label>
            <DatePicker
                className='border p-2 rounded-md'
                selected={returnDate}
                onChange={date => setReturnDate(date)}
              />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="py-2 px-4 bg-red-400 hover:bg-red-500 text-white rounded-md mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-[#334155] hover:bg-[#1f2835] text-white rounded-md"
            >
              Borrow
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
