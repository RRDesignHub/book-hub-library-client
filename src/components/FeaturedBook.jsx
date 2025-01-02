import axios from "axios";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export const FeaturedBook = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  useEffect(() => {
    handleAllBooks();
  }, []);

  const handleAllBooks = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/featuredBooks`
    );
    setFeaturedBooks(data);
  };
  return (
    <div className="bg-[#F8FAFC] py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#334155] mb-6 text-center">
          Featured Books
        </h2>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="grid grid-cols-1 ">
            {featuredBooks &&
              featuredBooks.map((book) => (
                <SwiperSlide key={book._id}>
                  <div className="container mx-auto">
                    <div className="bg-[#D9EAFD] h-[950px] md:h-[500px] rounded-lg shadow-lg p-6 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Book Image */}
                      <div className="flex justify-center">
                        <img
                          src={book?.coverURL}
                          alt={book?.bookTitle}
                          className="w-64 h-fit rounded-md shadow-2xl"
                        />
                      </div>

                      {/* Book Details */}
                      <div>
                        <h1 className="text-2xl md:text-4xl font-bold text-[#334155] mb-4">
                          {book?.bookTitle}
                        </h1>
                        <p className="text-[#374151] mb-2">
                          <strong>Author:</strong> {book?.authorName}
                        </p>
                        <p className="text-[#374151] mb-2">
                          <strong>Category:</strong> {book?.bookCategory}
                        </p>
                        <p className="text-[#374151] mb-4">
                          <strong>Quantity:</strong> {book?.bookQuantity}
                        </p>

                        <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                          Rating:
                          {book && (
                            <ReactStars
                              count={5}
                              value={book?.rating || 0}
                              size={24}
                              edit={false}
                              activeColor="#ffd700"
                            />
                          )}
                        </div>

                        <p className="text-[#6B7280] text-justify mb-6">
                          {book?.description.slice(0,150)}...
                        </p>

                        <Link to={`/book/${book?._id}`}>
                          <button className="w-full py-2 px-4 bg-[#9AA6B2] hover:bg-[#BCCCDC] text-white font-medium rounded-md transition">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
