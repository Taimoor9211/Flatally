import React from 'react';

const Footer = () => {
  return (
    <div className="darkMode text-light bg-Mix p-3 FooterBlock">
      <footer className="py-5">
        <div className="max-w-6xl mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
            
            {/* Section 1 */}
            <div className="col-span-1">
              <h5 className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-semibold mb-4">Section</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="col-span-1">
              <h5 className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-semibold mb-4">Section</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 3 - Hidden on mobile */}
            <div className="col-span-1 hidden md:block">
              <h5 className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-semibold mb-4">Section</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="col-span-2 md:col-span-3 md:col-start-4">
              <form>
                <h5 className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-semibold mb-2">Subscribe to our newsletter</h5>
                <p className="text-gray-300 text-sm mb-4">
                  Monthly digest of what's new and exciting from us.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="text" 
                    name="newsletter1" 
                    id="newsletter1" 
                    placeholder="Email address" 
                    className="flex-1 px-4 py-2 rounded border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button 
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded font-medium transition-colors duration-200 whitespace-nowrap"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t border-gray-700">
            <p className="text-gray-300 text-sm mb-4 sm:mb-0">
              © 2024 Company, Inc. All rights reserved.
            </p>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Custom CSS for dark mode */}
      <style jsx>{`
        .darkMode {
          background-color: rgb(26, 25, 25); /* --SecondaryColorV2 */
        }
        .bg-Mix {
          background: linear-gradient(135deg, rgb(26, 25, 25) 0%, rgb(23, 23, 23) 100%);
        }
        .FooterBlock {
          background-color: var(--SecondaryColorV2);
        }
      `}</style>
    </div>
  );
};

export default Footer;