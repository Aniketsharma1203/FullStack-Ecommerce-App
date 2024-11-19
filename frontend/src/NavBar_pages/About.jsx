import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import Navbar from '../Navbar/Navbar';


const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <hr className="w-screen h-1 mx-auto my-4 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>

            <div className="px-8">
                <p className="text-sm text-gray-500"><span onClick={() => navigate('/')} className="hover:opacity-70 cursor-pointer">Home</span> / Shop</p>
            </div>
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">




                {/* Container */}
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl text-center">
                    {/* Title */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
                    {/* Divider */}
                    <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Hey there! Welcome to our <span className="font-semibold">E-Commerce Shopping App</span>. This platform is designed to provide you with a seamless shopping experience, featuring a wide range of products to meet your needs.
                    </p>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        Built with ❤️ by <span className="font-semibold text-gray-800">Aniket Sharma</span> using the latest web technologies to ensure speed, security, and scalability.
                    </p>
                    {/* Image */}
                    <img
                        src="https://avatars.githubusercontent.com/u/122670703?v=4"
                        alt="Aniket Sharma"
                        className="w-32 h-32 object-cover rounded-full mx-auto mt-6 border-4 border-gray-200"
                    />
                    {/* Contact */}
                    <div className="mt-6">
                        <p className="text-gray-500 text-sm">Get in touch:</p>
                        <p className="text-gray-800 font-semibold">
                            <a href="mailto:aniket.sharma@example.com" className="text-blue-500 hover:underline">
                                nanhuaniket03@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className="m-10">
                    <button
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 rounded-xl flex items-center gap-3 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl active:scale-95"
                        onClick={() => navigate('/')}
                    >
                        <RiArrowGoBackFill size={24} />
                        <span className="text-lg font-semibold">Go Back</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default About;
