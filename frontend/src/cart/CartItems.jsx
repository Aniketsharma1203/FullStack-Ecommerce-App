import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CartItems = () => {
    const [cartProducts, setCartProducts] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const token = Cookies.get('token');
        const savedCart = localStorage.getItem(token);
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart)) {
                    setCartProducts(parsedCart);
                } else {
                    console.error('Cart data is not an array');
                }
            } catch (error) {
                console.error('Error parsing cart data:', error);
            }
        }
    }, []);

    // Synchronize localStorage with state
    useEffect(() => {
        const token = Cookies.get('token');
        if (cartProducts.length > 0) {
            localStorage.setItem(token, JSON.stringify(cartProducts));
        } else {
            localStorage.removeItem(token); // Remove if cart is empty
        }
    }, [cartProducts]);

    const addToCart = (product) => {
        setCartProducts((prevCart) => {
            const updatedCart = [...prevCart];
            const existingProductIndex = updatedCart.findIndex(
                (item) => item.id === product.id
            );
            if (existingProductIndex > -1) {
                // Update quantity if product exists
                updatedCart[existingProductIndex].quantity += 1;
            } else {
                // Add new product
                updatedCart.push({ ...product, quantity: 1 });
            }
            return updatedCart;
        });
    };

    console.log(cartProducts, 'items in cart');

    return (
        <div className="p-4 bg-white w-full max-w-lg mx-auto">
            <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
            {cartProducts.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    <p>No Items Added In Cart</p>
                </div>
            ) : (
                <div>
                    {/* Cart Items */}
                    <div className="divide-y divide-gray-200">
                        {cartProducts.map((product, index) => (
                            <div key={index} className="flex items-center justify-between py-4">
                                {/* Product Image */}
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={`http://localhost:4000/${product.display_image || "default-image.jpg"}`}
                                        alt={product.name || "Product"}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800">{product.name || "Unknown Product"}</p>
                                        <p className="text-sm text-gray-500">Size: {product.size || "N/A"}</p>
                                    </div>
                                </div>

                                {/* Quantity Controls and Price */}
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center border border-gray-300 rounded">
                                        <button
                                            onClick={() =>
                                                setCartProducts((prevCart) => {
                                                    const updatedCart = [...prevCart];
                                                    if (updatedCart[index].quantity > 1) {
                                                        updatedCart[index].quantity -= 1;
                                                    } else {
                                                        updatedCart.splice(index, 1);
                                                    }
                                                    return updatedCart;
                                                })
                                            }
                                            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                        >
                                            -
                                        </button>
                                        <span className="px-3">{product.quantity || 1}</span>
                                        <button
                                            onClick={() =>
                                                setCartProducts((prevCart) => {
                                                    const updatedCart = [...prevCart];
                                                    updatedCart[index].quantity += 1;
                                                    return updatedCart;
                                                })
                                            }
                                            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="font-semibold text-gray-800">${product.price || 0}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Subtotal and Buttons */}
                    <div className="mt-6 border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-gray-600">Subtotal:</p>
                            <p className="font-bold text-gray-800">
                                ${cartProducts.reduce((acc, product) => acc + (product.price || 0) * (product.quantity || 1), 0).toFixed(2)}
                            </p>
                        </div>
                        <button className="block w-full bg-black text-white py-2 rounded mb-2 hover:bg-gray-800">
                            View Cart
                        </button>
                        <button className="block w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartItems;
