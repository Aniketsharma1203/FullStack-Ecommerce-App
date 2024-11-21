import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiArrowGoBackFill } from "react-icons/ri";


const VendorProducts = () => {
  const location = useLocation();
  const [userInfo] = useState(location.state.key);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const getAllProducts = useCallback(async () => {
    try {
      const response = await axios.post("/vendor/vendorproducts", {
        id: userInfo._id,
      });
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfo) {
      getAllProducts();
    }
  }, [userInfo, getAllProducts]);

  const handleDeleteClick = (product) => {
    setSelectedProduct(product); // Store the product to be deleted
    setShowModal(true); // Show the modal
  };

  const confirmDelete = async () => {
    if (!selectedProduct) return;
    try {
      await axios.post("/vendor/deleteProduct", { id: selectedProduct._id });
      setProducts(products.filter((p) => p._id !== selectedProduct._id));
      setShowModal(false);
      setSelectedProduct(null);
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <div className="min-h-screen from-white to-gray-100 p-6">
      {userInfo === null ? (
        <p className="text-center text-gray-600 text-lg">Loading...</p>
      ) : (
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Hey {userInfo.name}, Welcome!
          </h1>
          <p className="text-lg text-gray-600 mb-8">Here are your products:</p>

          <Carousel responsive={responsive}>
            {products.length > 0 ? (
              products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300 m-3"
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
                    <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
                    <p className="text-green-500 font-bold mt-4 text-lg">${product.price}</p>
                    <button
                      className="bg-orange-600 w-20 rounded-lg p-2 text-white hover:opacity-70 mt-3"
                      onClick={() => handleDeleteClick(product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No products available.</p>
            )}
          </Carousel>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
                <p>Are you sure you want to delete this product?</p>
                <div className="flex justify-end mt-6">
                  <button
                    className="bg-gray-300 px-4 py-2 rounded mr-4 hover:bg-gray-400"
                    onClick={cancelDelete}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
                    onClick={confirmDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

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

export default VendorProducts;
