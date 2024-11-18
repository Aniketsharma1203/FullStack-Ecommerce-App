import React, { useState } from 'react';
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Main = () => {

    const [currentState, setCurrentState] = useState("LogIn");

    return (
        <div className='relative flex border  justify-center items-center h-screen bg-[url("https://img.freepik.com/free-photo/smiley-woman-talking-phone-holding-credit-card-shopping-bags_23-2148673295.jpg?t=st=1731482418~exp=1731486018~hmac=d4bf1b6a945aff5d6f863c82f683b4441acbe9b318bbe935adb73df04aa0c792&w=1380")] bg-center bg-cover bg-no-repeat bg-fixed  bg-slate-300 '>
            <div className=' bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 ... p-20 absolute right-80 border rounded-lg'>
                <div className="flex gap-10 justify-around">
                    <p
                        onClick={() => setCurrentState("LogIn")}
                        className={`cursor-pointer pb-2 ${currentState === "LogIn" ? "border-b-2 border-blue-600  text-white" : "text-gray-200"} transition-all duration-300`}
                    >
                        Sign In
                    </p>
                    <p
                        onClick={() => setCurrentState("SignUp")}
                        className={`cursor-pointer pb-2 ${currentState === "SignUp" ? "border-b-2 border-blue-600 text-white" : "text-gray-200"} transition-all duration-300`}
                    >
                        Sign Up
                    </p>
                </div>

                <div>
                    {
                        currentState === "LogIn" ? (
                            <LogIn />
                        ) : (
                            <SignUp />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Main
