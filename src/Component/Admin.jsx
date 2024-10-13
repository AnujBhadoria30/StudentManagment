/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./Contex"; // Import the UserContext
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

const Admin = () => {
    const navigate = useNavigate();
    const { addUser } = useContext(UserContext); // Get addUser from context

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        const confirmPassword = e.target['confirm-password'].value;

        if (password === confirmPassword) {
            addUser({ username, password }); // Add user to context
            toast.success("🥳Registered successfully!"); // Show success toast
            setTimeout(() => navigate('/login'), 2000); // Navigate to Login component after 2 seconds
        } else {
            alert("Passwords do not match!");
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white  rounded-lg p-8 max-w-md w-full border border-[#0DABB3] shadow-[0_4px_15px_rgba(13,171,179,0.5)]">
                <div className="flex flex-col items-center mb-6">
                    <img src="https://hasnain-school.netlify.app/te.jpg" alt="Logo" className="w-20" />
                    <h2 className="text-2xl font-bold">Sign Up</h2>
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
                    <div className="mb-4">
                        <label htmlFor="confirm-password" className="block text-gray-700">Confirm Password *</label>
                        <input
                            type="password"
                            id="confirm-password"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#0DABB3] text-white font-bold py-2 rounded-md hover:bg-green-500">
                       🙄 SIGN UP
                    </button>
                </form>
                <p className="mt-4 text-gray-600">
                    Already have an account? <a href="#" className="text-blue-500 hover:underline" onClick={() => navigate('/login')}>Login</a>
                </p>
                <footer className="mt-6 text-gray-500 text-sm">
                    Copyright © Anuj-School 2024.
                </footer>
            </div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} /> {/* Add ToastContainer to your component */}
        </div>
    );
};

export default Admin;
