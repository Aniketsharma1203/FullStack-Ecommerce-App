import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const VendorProducts = () => {
  const location = useLocation();
  const [userInfo] = useState(location.state.key);
  const [products, setproducts] = useState([]);

  const getAllProducts = useCallback(async () => {
    await axios.post('/vendor/vendorproducts', { id: userInfo._id })
      .then((response) => setproducts(response.data))
      .catch((err) => console.log(err));
  }, [userInfo._id]);

  useEffect(() => {
    if (userInfo !== null) {
      getAllProducts();
    }
  }, [userInfo, getAllProducts]);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6">
      {userInfo === null ? (
        <p className="text-center text-gray-600 text-lg">Loading...</p>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Hey {userInfo.name}, Welcome!
          </h1>
          <p className="text-lg text-gray-600 mb-8">Here are your products:</p>

          <Carousel
            responsive={responsive}
          >
            {products && products.length > 0 ? (
              products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative group">
                    <img
                      src={`http://localhost:4000/${product.display_image}`}
                      alt="Display"
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <img
                      src={`http://localhost:4000/${product.image}`}
                      alt="Hover"
                      className="w-full h-64 object-cover absolute inset-0 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm">
                      {product.description}
                    </p>
                    <p className="text-green-500 font-bold mt-4 text-lg">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No products available.</p>
            )}
          </Carousel>
        </div>
      )}
    </div>



  );
};

export default VendorProducts;
