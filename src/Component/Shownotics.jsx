import React, { useContext } from 'react';
import { UserContext } from './Contex';
import { useLocation, useNavigate } from 'react-router-dom';
function ShowNotices() {
    const { notices } = useContext(UserContext); // Notices ko context se access karna

    console.log('Notices:', notices); // Check notices array in console
    const location = useLocation();
    const navigate = useNavigate(); // Initialize the navigate function
    const student = location.state?.student || {}; // Safely retrieve the student details

    if (!student || Object.keys(student).length === 0) {
        return (
            <div className="flex justify-center items-center h-screen font-semibold text-sm sm:text-xl">
                No student details available
            </div>
        ); // Handle case where student data is not found
    }

    // Function to handle logout
    const handleLogout = () => {
        // Perform any logout logic here (e.g., clear tokens, reset state)
        // Navigate to the login or home page
        navigate('/student'); // Replace '/login' with the desired route
    };


    return (
        <div>
            <div className="flex justify-center p-4">
                <div className=" rounded-lg p-6 w-full max-w-lg  border border-[#0DABB3] shadow-[0_4px_15px_rgba(13,171,179,0.5)]">
                    <h2 className=" font-bold text-center mb-6 text-sm sm:text-2xl">Student Details</h2>
                    <div className="flex flex-col space-y-4 mb-6">
                        <div className="flex justify-between">
                            <h1 className="sm:font-semibold">Your Name:</h1>
                            <p className="sm:text-lg">{student.name}</p>
                        </div>
                        <div className="flex justify-between">
                            <h1 className="sm:font-semibold">Class:</h1>
                            <p className="sm:text-lg">{student.class}</p>
                        </div>
                        <div className="flex justify-between">
                            <h1 className="sm:font-semibold">Gender:</h1>
                            <p className="sm:text-lg">{student.gender}</p>
                        </div>
                    </div>
                    <button
                        className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
                        onClick={handleLogout} // Call the logout function
                    >
                        LOGOUT
                    </button>
                </div>
            </div>
            <div className="p-11 flex flex-wrap justify-center">
            <div className="p-4 bg-white rounded-lg flex-grow border border-[#0DABB3] shadow-[0_4px_15px_rgba(13,171,179,0.5)] max-w-full sm:max-w-md mx-auto">
    <h2 className="text-sm font-bold mb-4 text-center sm:text-2xl">Notice Board</h2>
    {notices.length > 0 ? (
        <ul className="space-y-4">
            {notices.map((notice, index) => (
                <li key={index} className="border border-[#0DABB3] shadow-[0_4px_15px_rgba(13,171,179,0.5)] p-2 flex flex-col items-start justify-between rounded-lg bg-gray-50">
                    <div className="text-gray-800 w-full">
                        <span className="">
                            <h1 className="sm:font-bold">Topic:</h1>
                            <span className=" break-words">{notice.topic}</span>
                        </span>
                        <br />
                        <span className="">
                            <h1 className="sm:font-bold">Discription:</h1>
                            <span className="block break-words">{notice.description}</span>
                        </span>
                            
                      
                        <div>
                                <button className='text-sm p-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300 mt-2'onClick={handleLogout}>
                                    LOGOUT
                                </button>
                            </div>
                    </div>
                </li>
            ))}
        </ul>
    ) : (
        <p className="text-gray-600 text-center">No notices available.</p>
    )}
</div>

            </div>




        </div>
    );
}

export default ShowNotices;
