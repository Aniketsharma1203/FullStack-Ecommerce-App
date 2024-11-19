import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import AddToCart from "../cart/AddToCart";
import { useNavigate } from "react-router-dom";

const Tshirts = () => {
    const [tshirts, setTshirts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("/buyer/t-shirts")
            .then((response) => setTshirts(response.data))
            .catch((err) => console.log(err));
    }, []);

    console.log(tshirts, "tshirts");

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Divider */}
            <hr className="w-screen h-1 mx-auto my-4 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>

            {/* Page Heading */}
            <div className="px-8">
                <p className="text-sm text-gray-500"><span onClick={() => navigate('/')} className="hover:opacity-70 cursor-pointer">Home</span> / Shop</p>
                <h1 className="text-6xl font-bold mt-4 text-gray-800">Shop</h1>
            </div>

            {/* Product Grid */}
            <div className="px-8 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tshirts.length > 0 ? (
                    tshirts.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative group">
                                {/* Primary Image */}
                                <img
                                    src={`http://localhost:4000/${product.display_image}`}
                                    alt="Display"
                                    className="w-full h-64 object-cover rounded-t-lg"
                                />
                                {/* Hover Image */}
                                <img
                                    src={`http://localhost:4000/${product.image}`}
                                    alt="Hover"
                                    className="w-full h-64 object-cover absolute inset-0 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            <div className="p-4">
                                {/* Product Title */}
                                <h2 className="text-lg font-semibold text-gray-800 truncate">
                                    {product.name}
                                </h2>
                                {/* Product Description */}
                                <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                                    {product.description}
                                </p>
                                {/* Product Price */}
                                <div className="flex justify-between">
                                    <p className="text-green-500 font-bold mt-4 text-lg">
                                        ${product.price}
                                    </p>
                                    <AddToCart props={product}/>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-600">
                        No products available.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Tshirts;
