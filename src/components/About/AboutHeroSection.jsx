import React from 'react'
import AboutHead from '../../assets/AboutHead.jpg';

const AboutHeroSection = () => {
  return (
      <div className="relative flex justify-center items-stretch overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-dark text-light bg-opacity-25">
          <h1 className="text-4xl text-white font-bold">About Flatally</h1>
          <p className="text-center text-white mt-2">Connecting Roommates with Ease</p>
        </div>
        <img src={AboutHead} alt="AboutHead" className="img-fluid w-full h-auto object-cover" />
      </div>
    );
}

export default AboutHeroSection