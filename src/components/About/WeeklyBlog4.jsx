import React from 'react'
import RoomImage from '../../assets/RoomImg.jpg';

const WeeklyBlog4 = () => {
  return (
      <div className="flex justify-center my-12 px-18">
        <div className="w-full max-w-6xl">
          {/* Grid container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text content - left on desktop, bottom on mobile */}
            <div className="order-2 lg:order-1">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-yellow-600 m-0">Matching Made Easys</p>
                  <h3 className="text-2xl lg:text-3xl font-bold mt-2">How Flatally Works</h3>
                  <p className="mt-4 text-justify text-gray-700 leading-relaxed">
                    Flatally employs a sophisticated algorithm to match users based on various factors including lifestyle preferences, personality traits, and living habits. Users create detailed profiles outlining their ideal roommate, and the platform's intelligent system suggests compatible matches. Once a connection is established, users can engage in direct communication, schedule viewings, and ultimately find their perfect roommate. The platform's focus on compatibility ensures a higher likelihood of successful roommate pairings, fostering long-lasting friendships and harmonious living environments.
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
}

export default WeeklyBlog4