import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Vendor = (props) => {
  const [useInfo] = useState(props.userInfo);
  const navigate = useNavigate();

  console.log(useInfo, "info");

  return (
    <div className='relative h-screen flex items-center justify-center bg-gray-900 text-white'>


      <div className="absolute inset-0 overflow-hidden">
        <video
          src="https://videos.pexels.com/video-files/5889074/5889074-uhd_2560_1440_25fps.mp4"
          autoPlay loop muted
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4 sm:px-0">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-fadeInUp tracking-wider">
          Hello {useInfo.name}, Welcome to the Market.
        </h1>

        <p className="text-lg sm:text-2xl max-w-xl mx-auto bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent animate-fadeInUp animation-delay-200">
          We are pleased to welcome you. To register your product, please fill out the form below.
        </p>

        <div className='flex gap-4 justify-center'>

        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold hover:from-teal-600 hover:to-purple-600 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-2xl"
        onClick={() => navigate('/vendorform',{state:{key: useInfo}})}>
          Add Product
        </button>

        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold hover:from-teal-600 hover:to-purple-600 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-2xl"
        onClick={() => navigate('/vendorproducts',{state:{key: useInfo}})}>
          View Products
        </button>

        </div>

      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </div>
  );
};

export default Vendor;
