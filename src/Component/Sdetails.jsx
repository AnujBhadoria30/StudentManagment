// /* eslint-disable no-unused-vars */
// // Sdetails.js
// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// function Sdetails() {
//     const location = useLocation();
//     const navigate = useNavigate(); // Initialize the navigate function
//     const student = location.state?.student || {}; // Safely retrieve the student details

//     if (!student || Object.keys(student).length === 0) {
//         return (
//             <div className="flex justify-center items-center h-screen text-xl font-semibold">
//                 No student details available
//             </div>
//         ); // Handle case where student data is not found
//     }

//     // Function to handle logout
//     const handleLogout = () => {
//         // Perform any logout logic here (e.g., clear tokens, reset state)
//         // Navigate to the login or home page
//         navigate('/student'); // Replace '/login' with the desired route
//     };

//     return (
//         <div className="flex justify-center p-4">
//             <div className=" shadow-lg rounded-lg p-6 w-full max-w-lg ">
//                 <h2 className="text-3xl font-bold text-center mb-6">Student Details</h2>
//                 <div className="flex flex-col space-y-4 mb-6">
//                     <div className="flex justify-between">
//                         <h1 className="font-semibold">Your Name:</h1>
//                         <p className="text-lg">{student.name}</p>
//                     </div>
//                     <div className="flex justify-between">
//                         <h1 className="font-semibold">Class:</h1>
//                         <p className="text-lg">{student.class}</p>
//                     </div>
//                     <div className="flex justify-between">
//                         <h1 className="font-semibold">Gender:</h1>
//                         <p className="text-lg">{student.gender}</p>
//                     </div>
//                 </div>
//                 <button 
//                     className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300" 
//                     onClick={handleLogout} // Call the logout function
//                 >
//                     LOGOUT
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Sdetails;
