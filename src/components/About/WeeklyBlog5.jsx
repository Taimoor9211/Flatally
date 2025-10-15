import React from 'react'
import RoomImage3 from '../../assets/RoomImg3.jpg';

const WeeklyBlog5 = () => {
  return (
      <div className="flex justify-center my-12 px-18">
        <div className="w-full max-w-6xl">
          {/* Grid container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text content - left on desktop, bottom on mobile */}
            <div className="order-2 lg:order-2">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-yellow-600 m-0">User Satisfaction at the Core of Flatally</p>
                  <h3 className="text-2xl lg:text-3xl font-bold mt-2">Building a Community of Happy Roommates</h3>
                  <p className="mt-4 text-justify text-gray-700 leading-relaxed">
                    Flatally's ultimate goal is to create a community of satisfied users who have found their ideal living situation. By prioritizing user experience and providing a seamless platform, Flatally has garnered positive feedback from countless individuals who have successfully found compatible roommates. The platform's commitment to fostering a supportive community is evident in its user-centric approach, with features designed to facilitate communication and problem-solving.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Image - right on desktop, top on mobile */}
            <div className="order-1 lg:order-1">
              <div className="overflow-hidden min-h-[20rem] h-[30rem] w-full">
                <img 
                  src={RoomImage3} 
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

export default WeeklyBlog5