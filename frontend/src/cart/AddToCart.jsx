import React, { useState, useEffect, useRef } from 'react'
import Cookies from 'js-cookie';

const AddToCart = (props) => {

    const [product, setProduct] = useState(props.props);
    const [render, setrender] = useState(0);
    console.log(product, "cart");

    const storelocal = () => {
        const cookie = Cookies.get('token');
        const savedData = localStorage.getItem(cookie);

        let items = savedData ? JSON.parse(savedData) : [];
        const found = items.find((element) => element._id === product._id);
        if (!found) items.push(product);

        localStorage.setItem(cookie, JSON.stringify(items));
    };

    useEffect(() => {

    },[render])

    return (
        <div>
            <button className="bg-black text-white font-semibold rounded-lg p-3 hover:scale-110 hover:transition" onClick={() => {
                storelocal()
                setrender((render) => render + 1);
            }}>ADD TO CART</button>
        </div>
    )
}

export default AddToCart
