/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function Student() {
    // State to store form values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
    
        // Basic validation
        if (username === '' || password === '') {
            toast.error('All fields are required'); // Show toast for validation error
            return;
        }
    
        // Add your login logic here (e.g., API call to validate user)
        const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
        const student = storedStudents.find(s => s.name === username && s.password === password);
    
        if (student) {
            // Navigate to Sdetails with the student data
            navigate('/shownotics', { state: { student } });
        } else {
            toast.error('Invalid username or password'); // Show toast for invalid credentials
        }
    
        // Clear the form
        setUsername('');
        setPassword('');
    };
    
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <div className="flex flex-col items-center mb-6">
                    <img src="https://hasnain-school.netlify.app/st.jpg" alt="Logo" className="w-44" />
                    <h2 className="text-2xl font-bold mt-4 text-center">Student Login</h2>
                    <p className="text-gray-600 text-center">Enter your login credentials below</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username *</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password *</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-[#0DABB3] text-white font-bold py-2 rounded-md hover:bg-green-500 transition duration-300">
                        Login
                    </button>
                </form>

                <p className="mt-4 text-gray-700 text-center">
                    Don't have an account? <br/>
                    <span className="text-blue-600">Contact your teacher</span>
                </p>
            </div>

            <ToastContainer /> {/* Add ToastContainer to your component */}
        </div>
    );
}

export default Student;
