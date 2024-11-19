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
        <div className='flex items-center text-center justify-between px-8 h-20'>
            <div className='flex items-center gap-4 text-sm uppercase '>
                <div className='hover:cursor-pointer hover:opacity-70 hover:underline' onClick={() => navigate('/tshirts')}>Buy T-Shirts</div>
                <div className='hover:cursor-pointer hover:opacity-70 hover:underline' onClick={() => navigate('/women')}>WOMEN</div>
                <div className='hover:cursor-pointer hover:opacity-70 hover:underline' onClick={() => navigate('/men')}>MEN</div>
                <div className='hover:cursor-pointer hover:opacity-70 hover:underline' onClick={() => navigate('/about')}>ABOUT</div>
                <div className='hover:cursor-pointer hover:opacity-70 hover:underline' onClick={() => navigate('/contact')}>CONTACT</div>
            </div>

            <div className=' flex-col justify-center '>
                <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/logo-regular.png" alt="logo" />
            </div>

            <div className='flex gap-20 items-center text-center'>

                <IoIosSearch size={20} />
                <div className='flex gap-4 items-center text-center'>
                    <p className='font-semibold'>$0.00</p>
                    <div onClick={() => isCart(!cartOpen)} className='hover:scale-110 cursor-pointer'>
                        <PiShoppingCartSimpleFill size={20} />
                    </div>

                </div>

                <div className='flex  gap-6 border p-4 border-slate-400 rounded-md text-center justify-center items-center'>
                    {
                        userInfo === null ? (
                            <>
                                <p className='text-base hover:cursor-pointer hover:opacity-70' onClick={() => navigate('/authmain')}>Sign Up</p>
                                <p className='text-base hover:cursor-pointer hover:opacity-70' onClick={() => navigate('/authmain')}>Log In</p>
                            </>
                        ) : (
                            <div>
                                <div>
                                    <p className='font-bold'> {userInfo.name}</p>
                                    <button className='bg-red-500 text-white rounded-lg p-2' onClick={() => {
                                        window.location.reload(false);
                                        Cookies.remove('token')
                                    }}>Sign Out</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            {/* My Cart Goes here */}

            {
                cartOpen === true && (
                    <div className='fixed top-0 right-0 h-screen w-[30%] bg-gray-200 '>
                        <div>
                            <div className='m-4 flex justify-between items-center h-[64px]'>
                                <IoClose onClick={() => isCart(false)} size={20} className='hover:scale-110 cursor-pointer' />
                                <p className='text-sm font-medium'>Shopping Cart</p>
                            </div>
                            <hr class="h-1 bg-gray-500 border-0 dark:bg-gray-500"></hr>
                            <CartItems />
                        </div>
                    </div>
                )
            }


        </div>
    );
};

export default Navbar;
