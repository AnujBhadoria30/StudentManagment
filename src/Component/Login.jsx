/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './Contex'; // Import the UserContext
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function Login() {
    const navigate = useNavigate();
    const { findUser } = useContext(UserContext); // Get findUser from context

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const username = e.target.username.value;
        const password = e.target.password.value;
    
        const user = findUser(username, password);
        if (user) {
            toast.success("LOGIN SUCCESSFULLY!");
            navigate('/main2/adminHome'); // Navigate to AdminHome
        } else {
            toast.error("🤦‍♂️Invalid username or password");
        }
    };
    

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} /> {/* Configure ToastContainer */}
            <div className="bg-white border border-[#0DABB3] shadow-[0_4px_15px_rgba(13,171,179,0.5)] rounded-lg p-8 max-w-md w-full">
                <div className="flex flex-col items-center mb-6">
                    <img src="https://hasnain-school.netlify.app/te.jpg" alt="Logo" className="w-20" />
                    <h2 className="text-2xl font-bold">Login</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username *</label>
                        <input
                            type="text"
                            id="username"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password *</label>
                        <input
                            type="password"
                            id="password"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#0DABB3] text-white font-bold py-2 rounded-md  hover:bg-green-500">
                        ✈️SIGN IN
                    </button>
                </form>
                <p className="mt-4 text-gray-600">
                    Don't have an account? <a href="#" className="text-blue-500 hover:underline" onClick={() => navigate('/admin')}>Sign Up</a>
                </p>
                <footer className="mt-6 text-gray-500 text-sm">
                    Copyright © Anuj-School 2024.
                </footer>
            </div>
        </div>
    );
}

export default Login;
