import React from 'react';

const ContactFlatally = () => {
  return (
    <div className="bg-amber-50 py-12 my-4">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-1">
              <p className="text-amber-600 m-0 text-lg">User Contact</p>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact FlatAlly</h3>
              
              <form action="#">
                <div className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input 
                      name="name" 
                      type="text" 
                      id="name" 
                      placeholder="Enter Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input 
                      name="email" 
                      type="email" 
                      id="email" 
                      placeholder="Enter Email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    />
                  </div>

                  {/* Description Textarea */}
                  <div>
                    <label htmlFor="Description" className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea 
                      name="Description" 
                      id="Description" 
                      rows="6" 
                      placeholder="Enter Description" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-vertical"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column - Social Media */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Social Media</h3>
              
              {/* Email */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-700 mb-3">Email</h5>
                <a 
                  href="mailto:HannanTahir@gmail.com" 
                  className="flex items-center text-gray-800 hover:text-amber-600 transition-colors group"
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 512 512" 
                    className="text-amber-600 mr-3 group-hover:text-amber-700 transition-colors" 
                    height="25" 
                    width="25"
                  >
                    <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
                  </svg>
                  TaimoorGoraya@gmail.com
                </a>
              </div>

              {/* Facebook */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-700 mb-3">FaceBook</h5>
                <a 
                  href="#FaceBookUrl" 
                  className="flex items-center text-gray-800 hover:text-amber-600 transition-colors group"
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 448 512" 
                    className="text-amber-600 mr-3 group-hover:text-amber-700 transition-colors" 
                    height="25" 
                    width="25"
                  >
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                  </svg>
                  FlatAlly FaceBook
                </a>
              </div>

              {/* Instagram */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-700 mb-3">Instagram</h5>
                <a 
                  href="#Instagram" 
                  className="flex items-center text-gray-800 hover:text-amber-600 transition-colors group"
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 448 512" 
                    className="text-amber-600 mr-3 group-hover:text-amber-700 transition-colors" 
                    height="25" 
                    width="25"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                  FlatAlly Instagram
                </a>
              </div>

              {/* LinkedIn */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-700 mb-3">Linkedin</h5>
                <a 
                  href="#Linkedin" 
                  className="flex items-center text-gray-800 hover:text-amber-600 transition-colors group"
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 448 512" 
                    className="text-amber-600 mr-3 group-hover:text-amber-700 transition-colors" 
                    height="25" 
                    width="25"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                  FlatAlly Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFlatally;