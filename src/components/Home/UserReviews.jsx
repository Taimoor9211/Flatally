import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Avatar1 from "../../assets/avatar1.png";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/avatar3.png";
import Avatar4 from "../../assets/avatar4.png";

const UserReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      text: "This is an amazing product! Highly recommend it to everyone.",
      avatar: Avatar1,
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Great experience, very satisfied with the service.",
      avatar: Avatar2,
    },
    {
      id: 3,
      name: "Robert Brown",
      text: "Fantastic quality, will definitely buy again.",
      avatar: Avatar3,
    },
    {
      id: 4,
      name: "Emily Johnson",
      text: "The customer service was excellent.",
      avatar: Avatar4,
    },
  ];

  return (
    <div className="flex justify-center items-center bg-amber-50 py-12">
      <div className="w-full max-w-6xl px-4">
        {/* Header Section */}
        <div className="flex flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <p className="text-amber-600 m-0 text-sm font-medium">
              Users Reviews
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
              User Reviews on Finding Roommates Online
            </h3>
          </div>
          <div>
            <button 
              className="primaryCircleView h-30 w-30 bg-[#B58E53] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              type="button"
            >
              View All
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="py-4"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="py-3 px-1 h-full">
                  <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 h-full flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                    {/* Avatar */}
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-2 border-amber-100">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="flex-1 w-full">
                      <div className="mb-3">
                        <div className="text-lg font-semibold text-gray-900 mb-2">
                          {review.name}
                        </div>
                        <div className="text-gray-600 leading-relaxed text-sm">
                          {review.text}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-2 py-2 rounded-full shadow-md transition-all duration-200 hover:shadow-lg -ml-6 flex items-center justify-center"
            type="button"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>

          <button
            className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-2 py-2 rounded-full shadow-md transition-all duration-200 hover:shadow-lg -mr-6 flex items-center justify-center"
            type="button"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Global styles for Swiper */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #b58e53;
        }

        .swiper {
          padding: 20px 10px 40px;
        }

        .swiper-slide {
          height: auto;
        }

        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .swiper-button-disabled:hover {
          background: white;
          transform: none;
        }
      `}</style>
    </div>
  );
};

export default UserReviews;