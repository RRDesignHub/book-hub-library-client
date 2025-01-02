import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const BookCategoryCard = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("BookCategory.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto bg-[#F8FAFC] py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-[#334155] mb-6 text-center">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category Card */}
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-[#D9EAFD] rounded-lg shadow-lg p-5 hover:shadow-xl transition"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-[#475569]">{category.description}</p>
              <Link to={`/category/${category.name}`}>
                <button
                  
                  className="mt-4 bg-[#1E293B] hover:bg-[#334155] text-white font-medium py-2 px-4 rounded-md"
                >
                  Explore Books
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
