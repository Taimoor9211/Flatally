import React from "react";
import RoomImage4 from "../../assets/RoomImg4.jpg";

const WeeklyBlog6 = () => {
  return (
    <div className="flex justify-center my-12 px-18">
      <div className="w-full max-w-6xl">
        {/* Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content - left on desktop, bottom on mobile */}
          <div className="order-2 lg:order-2">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-yellow-600 m-0">Work flow</p>
                <h3 className="text-2xl lg:text-3xl font-bold mt-2">
                  How Flatally Works
                </h3>
                <p className="mt-4 text-justify text-gray-700 leading-relaxed">
                  Flatally is a revolutionary roommate matching platform
                  designed to create harmonious living experiences. Our advanced
                  algorithm meticulously analyzes user profiles, considering a
                  wide range of factors including lifestyle, personality, and
                  living habits. By delving deep into individual preferences and
                  routines, Flatally identifies compatible matches that go
                  beyond superficial similarities. This data-driven approach
                  ensures a higher probability of finding roommates who not only
                  coexist peacefully but also enrich each other's lives.
                  Flatally's matching process extends beyond basic preferences,
                  exploring the nuances of individual lifestyles. Our algorithm
                  considers factors such as daily routines, cleanliness
                  expectations, social tendencies, and long-term goals to create
                  a comprehensive profile for each user. By understanding the
                  complexities of human interaction, Flatally identifies
                  compatible matches that are more likely to lead to lasting
                  friendships and fulfilling living situations.
                </p>
              </div>
            </div>
          </div>

          {/* Image - right on desktop, top on mobile */}
          <div className="order-1 lg:order-1">
            <div className="overflow-hidden min-h-[20rem] h-[30rem] w-full">
              <img
                src={RoomImage4}
                alt="Room"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyBlog6;
