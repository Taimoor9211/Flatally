import React, { useState } from 'react';
import RemoteImg from '../../assets/RemoteImg.svg';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
              
              {/* Left Column - Register Form (order changes on mobile) */}
              <div className="md:w-1/2 order-1 md:order-1 flex items-center justify-center p-4 md:p-8">
                <form className="w-full max-w-md">
                  {/* Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">REGISTER</h3>
                  </div>

                  {/* Name Input */}
                  <div className="mb-4">
                    <label 
                      htmlFor="userName" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input 
                      autoComplete="off" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      type="text" 
                      id="userName" 
                      placeholder="Enter your name" 
                      name="userName" 
                    />
                  </div>

                  {/* Email Input */}
                  <div className="mb-4">
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
                      placeholder="example@gmail.com" 
                      name="email" 
                    />
                  </div>

                  {/* Password Input with Toggle */}
                  <div className="mb-4">
                    <label 
                      htmlFor="password" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Password
                    </label>
                    <div className="flex">
                      <input 
                        placeholder="Password" 
                        name="password" 
                        type={showPassword ? "text" : "password"} 
                        id="password" 
                        className="w-full px-3 py-2 border border-gray-300 border-r-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="bg-white border border-l-0 border-gray-300 rounded-r-md px-3 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <svg 
                          stroke="currentColor" 
                          fill="none" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          height="1em" 
                          width="1em" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {showPassword ? (
                            <>
                              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                              <line x1="1" y1="1" x2="23" y2="23"></line>
                            </>
                          ) : (
                            <>
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </>
                          )}
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Input with Toggle */}
                  <div className="mb-6">
                    <label 
                      htmlFor="CPassword" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Confirm Password
                    </label>
                    <div className="flex">
                      <input 
                        placeholder="Confirm Password" 
                        name="CPassword" 
                        type={showConfirmPassword ? "text" : "password"} 
                        id="CPassword" 
                        className="w-full px-3 py-2 border border-gray-300 border-r-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="bg-white border border-l-0 border-gray-300 rounded-r-md px-3 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <svg 
                          stroke="currentColor" 
                          fill="none" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          height="1em" 
                          width="1em" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {showConfirmPassword ? (
                            <>
                              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                              <line x1="1" y1="1" x2="23" y2="23"></line>
                            </>
                          ) : (
                            <>
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </>
                          )}
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Login Link */}
                  <div className="mb-4 text-center">
                    <p className="text-gray-600 text-sm">
                      I already have an Account{' '}
                      <Link 
                        className="text-amber-600 hover:text-amber-700 transition-colors font-medium"
                        href="/signin"
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>

                  {/* Sign Up Button */}
                  <div className="mb-4">
                    <button 
                      type="submit" 
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                      Sign Up
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

export default Register;