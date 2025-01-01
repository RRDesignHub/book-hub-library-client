import React from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export const AddBook = () => {
  const navigate = useNavigate();
  const handleAddBook = async(e) =>{
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
    const bookData ={coverURL, bookTitle, bookQuantity, authorName, bookCategory, description, rating};

    try{
      const {data} =await axios.post(`${import.meta.env.VITE_API_URL}/addBook`, bookData)
      
      if(data.insertedId){
        toast.success(`${bookTitle} added successfylly!!`)
        form.reset();
        navigate('/allBooks')
      }
    }catch(err){
      toast.error(err.message);
    }

    
  }
  return (
    <>
    <Helmet>
        <title>BH - Add Book</title>
      </Helmet>
    <div className=" max-sm:w-11/12 mx-auto min-h-screen py-10">
      <div className="container mx-auto max-w-4xl bg-[#D9EAFD] p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-[#334155] mb-6">
          Add a New Book
        </h1>
        <form onSubmit={handleAddBook}>
          {/* Book Cover Image */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1E293B] mb-2">
              Book Cover Image
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Book cover image url"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Book Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1E293B] mb-2">
              Book Title
            </label>
            <input
              type="text"
              name="bookTitle"
              placeholder="Enter the book title"
              className="input input-bordered w-full"
              required
            />
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
              placeholder="Enter the quantity"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Author Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1E293B] mb-2">
              Author Name
            </label>
            <input
              type="text"
              name="authorName"
              placeholder="Enter the author's name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1E293B] mb-2">
              Category
            </label>
            <select className="select select-bordered w-full" name="bookCategory" required>
              <option value="" disabled>Select a category</option>
              <option value="Fiction">Fiction</option>
              <option value="Science">Science</option>
              <option value="Biography">Biography</option>
              <option value="Parenting">Parenting</option>
            </select>
          </div>

          {/* Short Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1E293B] mb-2">
              Short Description
            </label>
            <textarea
            name="description"
              placeholder="Write a brief description of the book"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#1E293B] mb-2">
              Rating
            </label>
            <input
              type="text"
              name="rating"
              
              placeholder="Rate the book (1-5)"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn bg-[#334155] hover:bg-[#334155] text-white font-medium py-2 px-6 rounded-md"
            >
              Add Book
            </button>
          </div>
        </form>

        {/* Static Text */}
        <div className="mt-10 bg-[#BCCCDC] p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-[#334155] mb-2">
            More Information
          </h3>
          <p className="text-sm text-[#334155]">
            Adding a book helps to enrich our collection and provide users with
            better options. Make sure to double-check the book details before
            submitting.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};
