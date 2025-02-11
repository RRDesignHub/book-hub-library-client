import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Aaron Smith",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ47HILWuUgVTqOxL-lJ0Jdvo9tpUNIP5X5Q&s",
      rating: 5,
      review:
        "Amazing collection of books! I love how easy it is to find and borrow books.",
    },
    {
      id: 2,
      name: "Sarah Smith",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7u1ruN_lz61w67gNP-dhLBDggaxh-89M2g&s",
      rating: 4,
      review:
        "Great platform for book lovers! The UI is clean and easy to use.",
    },
    {
      id: 3,
      name: "James Brown",
      image: "https://media.istockphoto.com/id/1368068269/photo/beautiful-woman-going-back-to-school.jpg?s=612x612&w=0&k=20&c=sx6uYYlLBiJBcNR1OmBAZ9duMQ9SsWDV11g-Fl6rv4E=",
      rating: 5,
      review:
        "I found exactly what I was looking for! Highly recommend to fellow readers.",
    },
    {
      id: 4,
      name: "Emily Johnson",
      image: "https://media.gettyimages.com/id/1336832660/photo/male-teenage-student-in-yellow-background-stock-photo.jpg?s=612x612&w=gi&k=20&c=axC7-4wp2tcV2kZChENGjoenwbhzVmg3ZCV_kdzxfPw=",
      rating: 4,
      review:
        "A wonderful experience overall, would love to see more recommendations.",
    },
    {
      id: 5,
      name: "Michael Lee",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79HltNv5c6pCSVJBbseNk0bO5Mj0V-d7ZMQ&s",
      rating: 5,
      review:
        "Book Hub has completely changed the way I explore books! So user-friendly.",
    },
    {
      id: 6,
      name: "Laura White",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79HltNv5c6pCSVJBbseNk0bO5Mj0V-d7ZMQ&s",
      rating: 4,
      review:
        "An excellent app with a huge variety of books, just wish there were more reviews to help with choices.",
    },
  ];

  return (
    <section className=" bg-blue-100 mb-10 py-10">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          📖 What Our Readers Say
        </h2>
        <p className="text-gray-600 mt-2 mb-5">
          Hear from book lovers who have used Book Hub to explore their next
          favorite read.
        </p>

        <Swiper
        breakpoints={{
          // When the screen width is less than or equal to 640px, show only 1 slide
          375: {
            slidesPerView: 1,
            spaceBetween: 20, // Optional: Adjust space for smaller screens
          },
          // When the screen width is greater than 640px, show 2 slides
          641: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
          freeMode={true}
          
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <div className="w-full grid md:grid-cols-2 gap-6 my-10">
            {reviews.map((review) => (
              <SwiperSlide key={review?.id}>
                <div className="bg-white h-[150px] p-5 rounded-xl shadow-md text-left">
                  <div className="flex items-center gap-3">
                    <img
                      src={review?.image}
                      alt="User"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {review?.name}
                      </h4>
                      <p className="text-yellow-500">★★★★★</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3">"{review?.review}"</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};
