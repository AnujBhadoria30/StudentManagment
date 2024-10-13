/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { Outlet } from "react-router-dom";

function Main2() {
    const navigate = useNavigate(); // Create navigate function

    const handleLogout = () => {
        // Perform any logout logic here (like clearing tokens or user data)
        navigate("/"); // Navigate to Home component
    };

    return (
        <div className='flex h-screen bg-white'>
            <div className="bg-white border shadow-xl border-[#0DABB3] sm:w-64 pt-10 p-3 rounded-lg" style={{ boxShadow: '0px 4px 10px #0DABB3' }}>
                <h1 className="text-[11px] md:text-xl font-bold text-center mb-6 text-gray-800">Admin Dashboard</h1>
                <ul className='space-y-4 text-[11px] md:text-xl'>
    <li className='leading-tight'>
        <Link 
            to="adminhome" 
            className="flex sm:flex-row items-center text-gray-700 hover:bg-[#0DABB3] hover:text-white transition duration-300 p-3 rounded-lg shadow hover:shadow-lg border-2 border-[#0DABB3]"
        >
            🏡<span className="ml-2">AdminHome</span>
        </Link>
    </li>
    <li>
        <Link 
            to="teachers" 
            className="flex sm:flex-row items-center text-gray-700 hover:bg-[#0DABB3] hover:text-white transition duration-300 p-3 rounded-lg shadow hover:shadow-lg border-2 border-[#0DABB3]"
        >
            🧑‍🏫<span className="ml-2">Teachers</span>
        </Link>
    </li>
    <li>
        <Link 
            to="students" 
            className="flex sm:flex-row items-center text-gray-700 hover:bg-[#0DABB3] hover:text-white transition duration-300 p-3 rounded-lg shadow hover:shadow-lg border-2 border-[#0DABB3]"
        >
            🧑‍🎓<span className="ml-2">Students</span>
        </Link>
    </li>
    <li>
        <Link 
            to="notices" 
            className="flex sm:flex-row items-center text-gray-700 hover:bg-[#0DABB3] hover:text-white transition duration-300 p-3 rounded-lg shadow hover:shadow-lg border-2 border-[#0DABB3]"
        >
            📝<span className="ml-2">Notices</span>
        </Link>
    </li>
    <li>
        <button
            onClick={handleLogout}
            className="flex sm:flex-row items-center w-full text-gray-700 hover:bg-red-500 hover:text-white transition duration-300 p-3 rounded-lg shadow hover:shadow-lg border-2 border-red-300"
        >
            🙄<span className="ml-2">Log Out</span>
        </button>
    </li>
</ul>

            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}

export default Main2;
