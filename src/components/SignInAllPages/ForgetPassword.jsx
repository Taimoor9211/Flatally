import React from 'react';
import ForgotpasswordImg from '../../assets/ForgotpasswordImg.svg';

const ForgetPassword = () => {
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
              {/* Left Column - Image */}
              <div className="md:w-1/2 flex items-center justify-center p-8">
                <img 
                  src={ForgotpasswordImg} 
                  alt="Forgot Password" 
                  className="w-full h-auto max-w-md"
                />
              </div>
              
              {/* Right Column - Forgot Password Form */}
              <div className="md:w-1/2 flex items-center justify-center p-4 md:p-8">
                <form className="w-full max-w-md">
                  {/* Title */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800">Forget Password</h3>
                  </div>

                  {/* Email Input */}
                  <div className="mb-6">
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input 
                      autoComplete="off" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      type="email" 
                      id="email" 
                      placeholder="someone@example.com" 
                      name="email" 
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mb-4">
                    <button 
                      type="submit" 
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                      Reset Password
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

export default ForgetPassword;