import React from 'react'

export const NewsLetter = () => {
  return (
    <section className="bg-blue-100 py-10">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-2xl font-bold text-gray-800">Stay Updated with Book Hub!</h2>
    <p className="text-gray-600 mt-2">
      Subscribe to our newsletter and never miss an update on new arrivals, featured books, and exclusive offers!
    </p>
    <div className="mt-5 flex justify-center">
      <input 
        type="email" 
        placeholder="Enter your email..." 
        className="w-2/3 p-3 border border-gray-300 rounded-l-lg focus:outline-none"
      />
      <button className="bg-blue-600 text-white px-5 py-3 rounded-r-lg hover:bg-blue-700">
        Subscribe
      </button>
    </div>
  </div>
</section>
  )
}



