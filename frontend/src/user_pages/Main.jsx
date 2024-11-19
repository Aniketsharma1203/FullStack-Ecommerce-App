import React, { useEffect, useState } from 'react'
import Home from '../Home/Home';
import Vendor from './Vendor'
import Cookies from 'js-cookie';
import axios from 'axios';


const Main = () => {

    const [userInfo, setuserInfo] = useState("");

    const getUserIdFromToken = (token) => {
        try {
            const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
            return decoded.userId; // Assuming `userId` is in the payload
        } catch (error) {
            console.error("Invalid token:", error);
            return null;
        }
    };

    const fetchUserInfo = async (userId) => {
        try {
            const response = await axios.post("/loggedin/userRole", { userId });
            setuserInfo(response.data);
        } catch (error) {
            console.error("Error fetching user role:", error);
        }
    };

    useEffect(() => {
        const token = Cookies.get('token'); // Get token from cookies
        if (token) {
            const userId = getUserIdFromToken(token);
            if (userId) {
                fetchUserInfo(userId);
            }
        }
    }, []); // Dependency array is empty as it should run only once on mount


    return (
        <div>
            {
               userInfo ? (
                userInfo.role === "buyer" ? (
                    <Home userInfo={userInfo} />
                ) : (
                    <Vendor userInfo={userInfo} />
                )
            ) : (
                <p>Loading...</p>
            )
            }
        </div>
    )

}

export default Main
