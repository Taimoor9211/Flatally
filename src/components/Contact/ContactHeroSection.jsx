import React from 'react'
import ContactHead from '../../assets/ContactHead.jpg';

const ContactHeroSection = () => {
  return (
        <div className="relative flex justify-center items-stretch overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-dark text-light bg-opacity-25">
            <h1 className="text-4xl text-white font-bold">Contact Flatally</h1>
            <p className="text-center text-white mt-2">For More Quires Contact our Help Service</p>
          </div>
          <img src={ContactHead} alt="ContactHead" className="img-fluid w-full h-auto object-cover" />
        </div>
      );
}

export default ContactHeroSection