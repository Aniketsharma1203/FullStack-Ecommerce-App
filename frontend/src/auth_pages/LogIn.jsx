import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const submitInfo = async (e) => {
        e.preventDefault();
        await axios.post('/userslogin', userInfo)
            .then((response) => {

                toast.success(response.data.message || "Logged in successfully", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                });
                Cookies.set('token', response.data.token, { expires: 1 });
                navigate('/loggedInUser');
            })
            .catch((err) => {
                toast.error(err.response?.data?.message || "Login failed", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                });
            });
    };


    return (
        <div className="flex justify-center items-center h-auto bg-gradient-to-br from-gray-100 to-gray-300">
            <ToastContainer />
            <div className="flex flex-col items-center bg-white shadow-2xl rounded-lg p-10 w-full max-w-md">
                {/* Welcome Section */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-extrabold text-gray-800">
                        Welcome Back
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Sign in to access your account
                    </p>
                </div>

                {/* Form */}
                <form className="w-full" onSubmit={submitInfo}>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            name="password"
                            value={userInfo.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 shadow-lg transition duration-300"
                    >
                        Sign In
                    </button>
                </form>

                {/* Additional Info */}
                <div className="mt-8 text-center">
                    <p className="mt-4 text-gray-400 text-sm">
                        Welcome to our ecommerce app. Experience the best shopping journey.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default LogIn;
