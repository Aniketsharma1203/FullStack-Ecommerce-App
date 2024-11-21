import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const submitInfo = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/usersignup', userInfo);
      toast.success("Signed Up Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      setUserInfo({
        name: '',
        email: '',
        password: '',
        role: ''
      });
    } catch (err) {
      console.log(err);
      toast.error(`Error: ${err.response.data.error}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };


  console.log(userInfo.role);

  return (
    <div className="flex justify-center items-center w-[450px] h-full bg-gray-100">
      <ToastContainer />
      <form className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md" onSubmit={submitInfo}>
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Sign Up</h2>

        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            required
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>

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

        <div className="mb-8">
          <label htmlFor="role" className="block text-gray-700 font-medium mb-1">Role :</label>

          <div className='flex justify-around'>

            <div>
              <label htmlFor="role" className="text-gray-700 font-medium ">Seller</label>
              <input
                type="radio"
                required
                name="role"
                checked={userInfo.role === 'seller'}
                value={"seller"}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label htmlFor="role" className="text-gray-700 font-medium">Buyer</label>
              <input
                type="radio"
                required
                name="role"
                checked={userInfo.role === 'buyer'}
                value={"buyer"}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

          </div>

        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>

      </form>
    </div>
  );
}

export default SignUp;
