import React from 'react';
import RoomImage from '../../assets/RoomImg.jpg'; // Update the path as necessary

const WeeklyBlog1 = () => {
  return (
    <div className="flex justify-center my-12 px-18">
      <div className="w-full max-w-6xl">
        {/* Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content - left on desktop, bottom on mobile */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-yellow-600 m-0">Weekly Blog</p>
                <h3 className="text-2xl lg:text-3xl font-bold mt-2">The Ultimate Guide to Sharing Space</h3>
                <p className="mt-4 text-justify text-gray-700 leading-relaxed">
                  In today's digital age, finding a suitable roommate has never been easier. Whether you're a student, a young professional, or someone looking to share living expenses, online platforms have revolutionized the way we search for and connect with potential room partners. These platforms provide a streamlined, efficient way to find individuals whose living habits, preferences, and schedules align with yours, ensuring a harmonious living situation. From detailed profiles to virtual tours and video calls, the process is designed to give you peace of mind and confidence in your choice. In this guide, we'll explore the best practices for finding your ideal roommate online, tips for creating an attractive profile, and how to navigate the entire process seamlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Image - right on desktop, top on mobile */}
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden min-h-[20rem] h-[30rem] w-full">
              <img 
                src={RoomImage} 
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

export default WeeklyBlog1;