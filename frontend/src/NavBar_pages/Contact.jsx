import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />

            <hr className="w-screen h-1 mx-auto my-4 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>

            <div className="px-8">
                <p className="text-sm text-gray-500"><span onClick={() => navigate('/')} className="hover:opacity-70 cursor-pointer">Home</span> / Shop</p>
            </div>

            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
                {/* Contact Section */}
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl text-center">
                    {/* Title */}
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
                    {/* Divider */}
                    <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-6">
                        Hi, I'm <span className="font-semibold text-gray-800">Aniket Sharma</span>. Feel free to reach out to me for any questions, collaborations, or just to say hi!
                    </p>
                    {/* Contact Information */}
                    <div className="flex flex-col space-y-4">
                        <p className="text-gray-800 text-lg">
                            📞 <span className="font-semibold">Phone:</span>{' '}
                            <a href="tel:+1234567890" className="text-blue-500 hover:underline">+91-8580419547</a>
                        </p>
                        <p className="text-gray-800 text-lg">
                            ✉️ <span className="font-semibold">Email:</span>{' '}
                            <a href="mailto:aniket.sharma@example.com" className="text-blue-500 hover:underline">
                                nanhuaniket03@gmail.com
                            </a>
                        </p>
                        <p className="text-gray-800 text-lg">
                            📍 <span className="font-semibold">Location:</span> Mohali, India
                        </p>
                    </div>
                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mt-6">
                        <a href="https://www.linkedin.com/in/aniket-sharma201350/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                alt="LinkedIn"
                                className="w-8 h-8 hover:scale-110 transition-transform"
                            />
                        </a>
                        <a href="https://github.com/Aniketsharma1203" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                alt="GitHub"
                                className="w-8 h-8 hover:scale-110 transition-transform"
                            />
                        </a>
                        <a target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                                alt="Twitter"
                                className="w-8 h-8 hover:scale-110 transition-transform"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
