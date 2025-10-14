import React from 'react'

const BestUsersSection = () => {
  return (
    <div className="flex justify-center my-12">
      <div className="w-full max-w-6xl px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-yellow-500 m-0 text-sm font-medium">Best Users</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
              The Best Profiles we Currently Have
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
      </div>
    </div>
  )
}

export default BestUsersSection