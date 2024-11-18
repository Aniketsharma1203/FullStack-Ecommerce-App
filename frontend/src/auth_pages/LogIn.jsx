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
        <div className="flex justify-center items-center h-full bg-gray-100">
            <ToastContainer />
            <form className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md" onSubmit={submitInfo}>
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Sign In</h2>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        required
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-8">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
                    <input
                        type="password"
                        required
                        name="password"
                        value={userInfo.password}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default LogIn;
