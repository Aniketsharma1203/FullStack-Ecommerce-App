import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { IoClose } from "react-icons/io5";
import CartItems from '../cart/CartItems';

const Navbar = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);
    const [cartOpen, isCart] = useState(false);

    const getUserIdFromToken = (token) => {
        try {
            const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
            return decoded.userId;
        } catch (error) {
            console.error("Invalid token:", error);
            return null;
        }
    };

    const fetchUserInfo = async (userId) => {
        try {
            const response = await axios.post("/loggedin/userRole", { userId });
            setUserInfo(response.data);
        } catch (error) {
            console.error("Error fetching user role:", error);
        }
    };

    useEffect(() => {
        const token = Cookies.get('token');

        if (token) {
            const userId = getUserIdFromToken(token);
            if (userId) {
                fetchUserInfo(userId);
            }
        }
    }, []);

    useEffect(() => {

    }, [cartOpen]);



    return (
        <div className="flex items-center justify-between px-8 h-20 bg-gray-50 shadow-lg">
            {/* Navigation Links */}
            <div className="flex items-center gap-6 text-sm uppercase text-gray-700 font-medium">
                <div className="hover:cursor-pointer hover:opacity-80 hover:underline transition" onClick={() => navigate('/tshirts')}>Buy T-Shirts</div>
                <div className="hover:cursor-pointer hover:opacity-80 hover:underline transition" onClick={() => navigate('/women')}>Women</div>
                <div className="hover:cursor-pointer hover:opacity-80 hover:underline transition" onClick={() => navigate('/men')}>Men</div>
                <div className="hover:cursor-pointer hover:opacity-80 hover:underline transition" onClick={() => navigate('/about')}>About</div>
                <div className="hover:cursor-pointer hover:opacity-80 hover:underline transition" onClick={() => navigate('/contact')}>Contact</div>
            </div>

            {/* Logo */}
            <div className="flex justify-center">
                <img
                    src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/logo-regular.png"
                    alt="logo"
                    className="w-24"
                />
            </div>

            {/* Search, Cart, and Authentication */}
            <div className="flex items-center gap-6 text-gray-700">
                {/* Search Icon */}
                <IoIosSearch size={24} className="hover:opacity-70 cursor-pointer transition" />

                {/* Cart Section */}
                <div className="flex items-center gap-4">
                    <p className="font-semibold text-gray-800">$0.00</p>
                    <div onClick={() => isCart(!cartOpen)} className="hover:scale-110 cursor-pointer transition">
                        <PiShoppingCartSimpleFill size={24} />
                    </div>
                </div>

                {/* Auth Section */}
                <div className="flex items-center gap-4 p-2 border border-gray-300 rounded-lg bg-white shadow-sm">
                    {userInfo === null ? (
                        <>
                            <p
                                className="text-sm font-medium hover:opacity-80 cursor-pointer transition"
                                onClick={() => navigate('/authmain')}
                            >
                                Sign Up
                            </p>
                            <p
                                className="text-sm font-medium hover:opacity-80 cursor-pointer transition"
                                onClick={() => navigate('/authmain')}
                            >
                                Log In
                            </p>
                        </>
                    ) : (
                        <div className="flex items-center gap-2">
                            <p className="font-bold">{userInfo.name}</p>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                                onClick={() => {
                                    window.location.reload(false);
                                    Cookies.remove('token');
                                }}
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Shopping Cart Drawer */}
            {cartOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => isCart(false)}
                    ></div>

                    {/* Cart Drawer */}
                    <div className="fixed top-0 right-0 h-screen w-[30%] bg-gray-100 shadow-lg z-50">
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-4">
                                <IoClose
                                    onClick={() => isCart(false)}
                                    size={24}
                                    className="hover:scale-110 cursor-pointer transition"
                                />
                                <p className="text-lg font-semibold">Shopping Cart</p>
                            </div>
                            <hr className="border-gray-300" />
                            <CartItems />
                        </div>
                    </div>
                </>
            )}

        </div>

    );
};

export default Navbar;
