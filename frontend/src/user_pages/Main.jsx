import React, { useEffect, useState } from 'react'
import Buyer from './Buyer'
import Vendor from './Vendor'
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';


const Main = () => {

    const [userInfo, setuserInfo] = useState("");

    const getUserIdFromToken = (token) => {
        try {
            const decoded = jwtDecode(token);
            return decoded.userId; // assuming userId is in the payload
        } catch (error) {
            console.error("Invalid token:", error);
            return null;
        }
    };

    useEffect(() => {
        const fetchuserInfo = async () => {
            const token = Cookies.get('token');
            const userId = getUserIdFromToken(token);

            if (userId) {
                try {
                    const response = await axios.post("/loggedin/userRole", { userId });
                    setuserInfo(response.data);
                } catch (error) {
                    console.error("Error fetching user role:", error);
                }
            }
        };

        fetchuserInfo();
    }, []);

    return (
        <div>
            {
               userInfo ? (
                userInfo.role === "buyer" ? (
                    <Buyer userInfo={userInfo} />
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
