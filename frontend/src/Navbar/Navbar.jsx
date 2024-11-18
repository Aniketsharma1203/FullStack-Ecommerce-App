import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center text-center justify-between px-8 h-20'>
            <div className='flex items-center gap-4 text-sm uppercase '>
                <div className='hover:cursor-pointer hover:opacity-70 hover:underline'>Buy T-Shirts</div>
                <div className='hover:cursor-pointer hover:opacity-70 hover:underline'>WOMEN</div>
                <div className='hover:cursor-pointer hover:opacity-70 hover:underline'>MEN</div>
                <div className='hover:cursor-pointer hover:opacity-70 hover:underline'>ABOUT</div>
                <div className='hover:cursor-pointer hover:opacity-70 hover:underline'>CONTACT</div>
            </div>

            <div className=' flex-col justify-center '>
                <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/logo-regular.png" alt="logo" />
            </div>

            <div className='flex gap-20 items-center text-center'>
                <IoIosSearch size={20} />
                <div className='flex gap-4 items-center text-center'>
                    <p className='font-semibold'>$0.00</p>
                    <PiShoppingCartSimpleFill size={20} />
                </div>
                <div className='flex  gap-6 border p-4 border-slate-400 rounded-md text-center justify-center items-center'>
                    <p className='text-base hover:cursor-pointer hover:opacity-70' onClick={() => navigate('/authmain')}>Sign Up</p>
                    <p className='text-base hover:cursor-pointer hover:opacity-70' onClick={() => navigate('/authmain')}>Log In</p>
                </div>
            </div>

        </div>
    )
}

export default Navbar
