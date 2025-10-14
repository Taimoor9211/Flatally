import React from 'react';
import RemoteImg from '../../assets/RemoteImg.svg';

const OTP = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div 
          className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          data-aos="flip-left" 
          data-aos-duration="800"
        >
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Right Column - Image (order changes on mobile) */}
              <div className="md:w-1/2 order-2 md:order-2 flex items-center justify-center p-8">
                <img 
                  src={RemoteImg} 
                  alt="Farm SVG" 
                  className="w-full h-auto max-w-md"
                />
              </div>
              
              {/* Left Column - OTP Form (order changes on mobile) */}
              <div className="md:w-1/2 order-1 md:order-1 flex items-center justify-center p-4 md:p-8">
                <form className="w-full max-w-md">
                  {/* Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">REGISTER</h3>
                  </div>

                  {/* OTP Input */}
                  <div className="mb-4">
                    <label 
                      htmlFor="otp" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Enter OTP
                    </label>
                    <input 
                      id="otp"
                      name="otp"
                      type="text"
                      placeholder="Enter the OTP"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    />
                    <p className="text-gray-600 text-sm mt-2">
                      An OTP is Send on: <br />
                      taimoorgoraya11@gmail.com
                    </p>
                  </div>

                  {/* Check Button */}
                  <div className="mb-4">
                    <button 
                      type="submit" 
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                      Check
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;