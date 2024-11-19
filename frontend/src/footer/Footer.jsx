import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col m-10 bg-[#fbedec] text-center justify-center items-center p-10'>

                <div className='flex flex-col gap-1 mt-10'>
                    <h3 className='font-bold uppercase'> Subscribe to get offers in your inbox</h3>
                    <p className='text-sm opacity-70'>Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum</p>
                </div>

                <div className='flex text-center gap-4 mt-10 text-sm opacity-70'>
                    <p className='hover:opacity-80 hover:cursor-pointer'>Buy T-Shirts</p>
                    <p className='hover:opacity-80 hover:cursor-pointer'>Women</p>
                    <p className='hover:opacity-80 hover:cursor-pointer'> Men</p>
                    <p className='hover:opacity-80 hover:cursor-pointer'> About</p>
                    <p className='hover:opacity-80 hover:cursor-pointer'>Contact</p>
                </div>

                <div className='m-10 flex gap-5'>
                    <FaFacebookF size={40} className='bg-white p-2 cursor-pointer hover:opacity-70' />
                    <FaTwitter size={40} className='bg-white p-2 cursor-pointer hover:opacity-70' />
                    <FaInstagram size={40} className='bg-white p-2 cursor-pointer hover:opacity-70' />
                </div>

            </div>

            <div className='m-10 bg-black text-white p-16 text-center'>
                Copyright © 2024 T-Shirts Store | Powered by T-Shirts Store
            </div>
        </div>
    )
}

export default Footer
