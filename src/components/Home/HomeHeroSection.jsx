import React from 'react';
import HatWomen from '../../assets/HatWomen.jpg'; // Adjust the path as necessary
import SearchForm from './SearchForm';

const HomeHeroSection = () => {
  return (
    <div className="relative flex justify-center items-stretch overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-dark text-light bg-opacity-25">
        <h1 className="text-4xl text-white font-bold">Welcome To Flatally</h1>
        <p className="text-center text-white mt-2">Online Portal where you can find your Perfect Room Partner</p>
        <div className='absolute bottom-1 hidden lg:block'>
          <SearchForm/>
        </div>
      </div>
      <img src={HatWomen} alt="Travel Image" className="img-fluid w-full h-auto object-cover" />
    </div>
  );
};

export default HomeHeroSection;