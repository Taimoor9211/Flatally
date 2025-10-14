import React from 'react';
import RoomImage2 from '../../assets/RoomImg2.jpg'; // Update the path as necessary

const WeeklyBlog2 = () => {
  return (
    <div className="flex justify-center my-12 px-18">
      <div className="w-full max-w-6xl">
        {/* Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content - left on desktop, bottom on mobile */}
          <div className="order-2 lg:order-2">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-yellow-600 m-0">Weekly Blog</p>
                <h3 className="text-2xl lg:text-3xl font-bold mt-2">Revolutionizing Roommate Searches</h3>
                <p className="mt-4 text-justify text-gray-700 leading-relaxed">
                  The idea for FlatAlly emerged from a simple yet powerful need: the desire for a reliable, efficient way to find compatible roommates. In 2023, our founders recognized the challenges many individuals faced when searching for room partners—be it the frustration of endless searching, incompatible living habits, or the lack of a trustworthy platform. Determined to create a solution, they embarked on a mission to revolutionize the roommate search process.FlatAlly was born out of this vision, combining advanced technology with user-friendly features to create a seamless experience. The platform offers detailed profiles, virtual tours, and secure communication options, ensuring that users can find their ideal roommates with confidence and ease. Our journey has been marked by continuous innovation and a commitment to meeting the evolving needs of our users.
                </p>
              </div>
            </div>
          </div>

          {/* Image - right on desktop, top on mobile */}
          <div className="order-1 lg:order-1">
            <div className="overflow-hidden min-h-[20rem] h-[30rem] w-full">
              <img 
                src={RoomImage2} 
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

export default WeeklyBlog2;