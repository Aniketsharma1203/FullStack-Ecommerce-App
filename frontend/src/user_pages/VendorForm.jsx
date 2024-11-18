import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { RiArrowGoBackFill } from "react-icons/ri";

const VendorForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [productinfo, setProductInfo] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    special_category: '',
    description: '',
    image: null,
    display_image: null,
    vendor_id: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProductInfo((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleProductInfo = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append non-file fields
    formData.append("name", productinfo.name);
    formData.append("category", productinfo.category);
    formData.append("price", productinfo.price);
    formData.append("quantity", productinfo.quantity);
    formData.append("special_category", productinfo.special_category);
    formData.append("description", productinfo.description);
    formData.append("vendor_id", productinfo.vendor_id);

    // Append file fields
    if (productinfo.image) {
      formData.append("image", productinfo.image);
    }
    if (productinfo.display_image) {
      formData.append("display_image", productinfo.display_image);
    }

    try {
      const response = await axios.post('/vendor/productinfo', formData);
      console.log(response.data);
      toast.success(response.data.message || "Product added successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      setProductInfo(
        {
          name: '',
          category: '',
          price: '',
          quantity: '',
          special_category: '',
          description: '',
          image: '',
          display_image: '',
          vendor_id: location.state.key._id,
        }
      )
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Product Addition failed", {
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


  useEffect(() => {
    setProductInfo({ vendor_id: location.state.key._id });
  }, [location]);


  return (
    <div className="w-screen h-screen bg-[#f3f3fd] flex justify-center items-center p-6 my-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-10">
        <ToastContainer />
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Order Form</h2>
          <p className="text-gray-600">
            Please fill in the required fields to complete your product submission.
          </p>
        </div>

        <form className="space-y-6" encType='multipart/form-data' onSubmit={handleProductInfo}>
          <div>
            <label className="text-gray-700 font-medium mb-1 flex">
              Full Name <FaStar color='red' size={6} />
            </label>
            <input
              required
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Product name"
              value={productinfo.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium mb-1 flex">
              Category<FaStar color='red' size={6} />
            </label>
            <select
              required
              name="category"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={productinfo.category}
              onChange={handleChange}
            >
              <option value="" disabled>Select a category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="children">Children</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex text-gray-700 font-medium mb-1">
                Price <FaStar color='red' size={6} />
              </label>
              <input
                required
                type="number"
                name="price"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter price"
                value={productinfo.price}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="flex text-gray-700 font-medium mb-1">
                Quantity <FaStar color='red' size={6} />
              </label>
              <input
                required
                type="number"
                name="quantity"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter quantity"
                value={productinfo.quantity}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Special Category</label>
            <select
              name="special_category"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={productinfo.special_category}
              onChange={handleChange}
            >
              <option value="" disabled selected>Select a special category (if any)</option>
              <option value="summer" >Summer</option>
              <option value="winter">Winter</option>
            </select>
          </div>

          <div>
            <label className="flex text-gray-700 font-medium mb-1">
              Description <FaStar color='red' size={6} />
            </label>
            <textarea
              required
              name="description"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Product description"
              rows="4"
              value={productinfo.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="flex text-gray-700 font-medium mb-1">
              Image <FaStar color='red' size={6} />
            </label>
            <input
              required
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="flex text-gray-700 font-medium mb-1">
              Display Image <FaStar color='red' size={6} />
            </label>
            <input
              required
              type="file"
              name="display_image"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit Form
          </button>
        </form>
      </div>

      <div className="m-10">
        <button
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 rounded-xl flex items-center gap-3 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl active:scale-95"
          onClick={() => navigate('/loggedInUser')}
        >
          <RiArrowGoBackFill size={24} />
          <span className="text-lg font-semibold">Go Back</span>
        </button>
      </div>


    </div>
  );
};

export default VendorForm;
