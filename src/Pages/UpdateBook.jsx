import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

export const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  useEffect(() => {
    handleBookDetails();
  }, []);

  const handleBookDetails = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/book/${id}`
    );
    setBook(data);
  };

  const handleUpdateBook = async(e) =>{
    e.preventDefault();
    const form = e.target;

    const coverURL = form.photoURL.value;
    const bookTitle = form.bookTitle.value;
    const bookQuantity = parseInt(form.bookQuantity.value);
    const authorName = form.authorName.value;
    const bookCategory = form.bookCategory.value;
    const description = form.description.value;
    const rating = parseFloat(form.rating.value);
    if(0 > rating > 6){
      toast.error("Rating must be in 1 to 5.")
    }
    const bookData ={coverURL, bookTitle, bookQuantity, authorName, bookCategory, rating, description};
    try{
      const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/update/${id}`, bookData)
      if(data.modifiedCount){
        toast.success(`Successfully updated the book data.`);
        navigate(`/book/${id}`)
      }
    }catch(err){
      toast.error(err.message);
    }
  }
 
  return (
    <div className="w-11/12 mx-auto bg-[#F8FAFC] min-h-screen py-10">
      <div className="container mx-auto max-w-3xl">
        {
          book && <div className="bg-[#D9EAFD] rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#334155] mb-6 text-center">
            Update Book Details
          </h2>
          <form onSubmit={handleUpdateBook}>
            {/* Image Input */}
            <div className="mb-4">
            <label className="block text-sm font-medium text-[#1E293B] mb-2">
              Book Cover Image
            </label>
            <input
              type="url"
              name="photoURL"
              defaultValue={book?.coverURL}
              placeholder="Book cover image url"
              className="input input-bordered w-full"
              required
            />
          </div>

            {/* Title Input */}
            <div className="mb-6">
              <label
                htmlFor="bookTitle"
                className="block text-sm font-medium text-[#374151] mb-2"
              >
                Book Title
              </label>
              <input
                type="text"
                defaultValue={book?.bookTitle}
                id="bookTitle"
                name="bookTitle"
                className="w-full p-3 border border-[#D9EAFD] rounded-lg text-[#1E293B] focus:outline-none focus:ring focus:ring-[#BCCCDC]"
              />
            </div>

            {/* Author Input */}
            <div className="mb-6">
              <label
                htmlFor="authorName"
                className="block text-sm font-medium text-[#374151] mb-2"
              >
                Author Name
              </label>
              <input
                type="text"
                id="authorName"
                defaultValue={book?.authorName}
                name="authorName"
                className="w-full p-3 border border-[#D9EAFD] rounded-lg text-[#374151] focus:outline-none focus:ring focus:ring-[#BCCCDC]"
              />
            </div>

            {/* Category Dropdown */}
            <div className="mb-6">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-[#374151] mb-2"
              >
                Book Category
              </label>
              {
                book?.bookCategory && <select
                id="category"
                name="bookCategory"
                defaultValue={book?.bookCategory}
                className="w-full p-3 border border-[#D9EAFD] rounded-lg text-[#374151] focus:outline-none focus:ring focus:ring-[#BCCCDC]"
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Fiction">Fiction</option>
                <option value="Science">Science</option>
                <option value="Biography">Biography</option>
                <option value="Parenting">Parenting</option>
              </select>
              }
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#1E293B] mb-2">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                name="bookQuantity"
                defaultValue={book?.bookQuantity}
                placeholder="Enter the quantity"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Rating Input */}
            <div className="mb-6">
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-[#374151] mb-2"
              >
                Book Rating (1-5)
              </label>
              <input
                type="text"
                id="rating"
                name="rating"
                defaultValue={book?.rating}
                className="w-full p-3 border border-[#D9EAFD] rounded-lg text-[#374151] focus:outline-none focus:ring focus:ring-[#BCCCDC]"
              />
            </div>

            {/* Short Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1E293B] mb-2">
              Edit Description
            </label>
            <textarea
            name="description"
            defaultValue={book?.description}
              placeholder="Write a brief description of the book"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center">
              <Link
              to='/allBooks'
                type="submit"
                className="btn bg-[#637ca0e3] text-white font-medium text-lg rounded-lg hover:bg-[#9AA6B2] focus:outline-none focus:ring-4 focus:ring-[#9AA6B2] focus:ring-opacity-50"
              >
                Go Back
              </Link>
              <button
                type="submit"
                className="btn bg-[#334155] text-white font-medium text-lg rounded-lg hover:bg-[#9AA6B2] focus:outline-none "
              >
                Update Book
              </button>
            </div>
          </form>
        </div>
        }
      </div>
    </div>
  );
};
