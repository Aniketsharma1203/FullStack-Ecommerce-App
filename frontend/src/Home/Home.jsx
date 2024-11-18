import React from 'react';
import Navbar from '../Navbar/Navbar';
import SummerCollecion from './SummerCollecion';
import model from '../images/model.png'
import OnSale from './OnSale';
import { IoMdStar } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Home = () => {
  return (
    <div>
      <Navbar />

      <div className='bg-[#fbedec] flex justify-evenly mx-10 items-center h-[700px] '>

        <div className='flex flex-col gap-10'>
          <p className='text-sm opacity-80'>Women</p>
          <div className='text-5xl tracking-widest font-bold'>
            Slick. Modern. Awesome.
          </div>
          <div>
            <button className='bg-black text-white p-5 text-xl hover:text-neutral-400'>SHOP COLLECTION</button>
          </div>
        </div>

        <div>
          <img className='h-[700px]' src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/hero.png" alt="model" />
        </div>

      </div>

      <SummerCollecion />

      <div className='flex justify-center gap-6 mt-6'>

        <div className='flex flex-col justify-center items-center gap-6'>
          <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-02.jpg" alt="model" />
          <p className='opacity-80'>Men</p>
          <h2 className='text-4xl font-semibold flex flex-col items-center'>The base collection  - Ideal <br /> <span>every day.</span></h2>
          <button className='bg-black p-2 text-white '>Shop Now</button>
        </div>

        <div className='m-10'>
          <img src={model} alt="model" />
        </div>

      </div>

      <div className='bg-[url("https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/bg-01.jpg")] bg-no-repeat bg-blend-darken bg-cover bg-center bg-fixed h-[800px] mx-10 flex flex-col items-center justify-center text-center gap-6 text-gray-50'>
        <p className='opacity-80'>New Collection</p>
        <h2 className='text-4xl font-semibold'>Be different in your own way!</h2>
        <h4 className='text-xl font-semibold'>Find your unique style.</h4>
        <button className='bg-black w-40 p-4 '>Shop Collection</button>
      </div>

      <div className='relative mt-20 flex h-[750px]'>
        <div className='mx-10'>
          <div className='absolute top-0 left-44 z-10'>
            <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-03.jpg" alt="model" />
          </div>
          <div className='bg-[#fbedec] absolute top-10 z-0 h-[700px] w-1/2'>

          </div>

        </div>
        <div className='mx-auto z-[11] absolute left-[45%] top-40 justify-center flex flex-col gap-8'>
          <p className='opacity-80 text-sm'>Women</p>
          <h3 className='text-4xl font-bold'>Spring Summer Collection</h3>
          <p className='opacity-80 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo <br />at, lobortis orci.
            Aliquam venenatis dui lectus, eu convallis turpis convallis et. <br /> Pellentesque.</p>
          <button className='bg-black text-white w-52 p-3'>See Whole Collection</button>
        </div>
      </div>

      <OnSale />

      <div className='mt-10 flex flex-col justify-center items-center gap-5'>

        <h2 className='font-bold text-4xl tracking-wide'>Reviews</h2>
        <p className='font-semibold text-lg text-center '>“ Very good quality T-shirts and lorem ipsum dolor sit amet, <br />consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua quis ipsum! ”</p>
        <div className='flex flex-col gap-2'>
          <div className='flex'>
            <IoMdStar className='text-yellow-300' size={25} />
            <IoMdStar className='text-yellow-300' size={25} />
            <IoMdStar className='text-yellow-300' size={25} />
            <IoMdStar className='text-yellow-300' size={25} />
            <IoMdStar className='text-yellow-300' size={25} />
          </div>
          <div>
            <p className='opacity-70'>Aniket Sharma</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center gap-4 mt-20 '>

        <div className='relative'>
          <div>
            <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/cat-men-300x300.jpg" alt="model" className='h-[600px]' />
          </div>
          <p className='absolute bottom-0 text-center opacity-60  bg-slate-100 w-full'>MEN</p>
        </div>

        <div className='relative'>
          <div>
            <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/cat-women-300x300.jpg" alt="model" className='h-[600px]' />
          </div>
          <p className='absolute bottom-0 text-center opacity-60 bg-slate-100 w-full'>WOMEN</p>
        </div>


      </div>

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

export default Home;
