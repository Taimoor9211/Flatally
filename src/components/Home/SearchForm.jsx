import React from 'react';

const SearchForm = () => {
  return (
    <div className="bg-dark bg-opacity-25 backdrop-blur-2xl rounded-lg shadow-2xl mb-6 min-h-[10rem] -mt-60">
      <form action="#" className="text-white">
        <div className="flex w-full h-full flex-col md:flex-row justify-center items-center md:items-stretch">
          <h4 className="hidden">Search Your Desired Location</h4>
          
          {/* Location Search */}
          <div className="py-8 px-6 flex-1">
            <label htmlFor="location" className="block mb-3 text-sm font-medium">
              Search Your Desired Location
            </label>
            <div className="flex">
              <span className="bg-transparent text-white border-0 px-3 py-2 flex items-center justify-center">
                <svg 
                  stroke="currentColor" 
                  fill="currentColor" 
                  strokeWidth="0" 
                  viewBox="0 0 512 512" 
                  className="w-5 h-5"
                >
                  <path 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="32" 
                    d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                  />
                  <circle 
                    cx="256" 
                    cy="192" 
                    r="48" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="32"
                  />
                </svg>
              </span>
              <input 
                name="location" 
                type="text" 
                id="location" 
                placeholder="Location" 
                className="flex-1 bg-transparent border border-white/30 text-white placeholder-white/70 px-3 py-2 rounded-r focus:outline-none focus:border-white/50"
                defaultValue=""
              />
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-white/30 mx-4 hidden md:block"></div>

          {/* Gender Selection */}
          <div className="py-8 px-6 flex-1">
            <div className="flex justify-between items-center mb-3">
              <label htmlFor="Gender" className="block text-sm font-medium">
                Select Gender
              </label>
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 16 16" 
                className="w-4 h-4"
              >
                <path 
                  fillRule="evenodd" 
                  d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
                />
              </svg>
            </div>
            <select 
              name="Gender" 
              id="Gender" 
              className="w-full bg-transparent border border-white/30 text-white px-18 py-2 rounded focus:outline-none focus:border-white/50"
              defaultValue="Male"
            >
              <option value="Male" className="text-gray-800">Male</option>
              <option value="female" className="text-gray-800">Female</option>
            </select>
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-white/30 mx-4 hidden md:block"></div>

          {/* Submit Button */}
          <div className="py-6 px-6">
            <button 
              className="bg-[#b58e53] hover:bg-[#916242] text-white font-medium w-[250px] min-h-[4rem] h-[7.2rem] transition-colors duration-200 border-none"
              type="submit" 
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;