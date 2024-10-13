import React, { useContext } from 'react'; // Ensure useContext is imported
import { UserContext } from './Contex'; // Import UserContext

function AdminHome() {
  const { loggedInUser, usernameHistory, studentCount } = useContext(UserContext); // Get loggedInUser and usernameHistory from context

  return (
    <div className="bg-white p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-4 lg:gap-6 xl:gap-64 flex-wrap p-5 shadow-[0_4px_15px_rgba(13,171,179,0.5)]">
        
        {/* Total Students Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl w-full md:w-auto mb-4 md:mb-0">
          <img src="https://hasnain-school.netlify.app/img1.png" alt="Total Students" className="sm:w-20 sm:h-20 mb-4" />
          <h2 className="text-sm sm:text-lg font-semibold">Total Students: {studentCount} </h2>
        </div>

        {/* Total Classes Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl w-full md:w-auto mb-4 md:mb-0">
          <img src="https://hasnain-school.netlify.app/img2.png" alt="Total Classes" className="sm:w-20 sm:h-20 mb-4" />
          <h2 className="text-sm sm:text-lg font-semibold">Total Classes: 5</h2>
        </div>

        {/* Total Teachers Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl w-full md:w-auto">
          <img src="https://hasnain-school.netlify.app/img3.png" alt="Total Teachers" className="sm:w-20 sm:h-20 mb-4" />
          <h2 className="text-sm sm:text-lg font-semibold">Total Teachers: 0</h2>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center sm:font-semibold space-y-5 mt-5 text-sm sm:text-lg'>
        <h1>Welcome to the Dashboard <br/> Mr. {loggedInUser ? ` ${loggedInUser.username}` : "1. Guest"}</h1>
        <h3>Admin List</h3>
      </div>

      {/* Display Username History */}
      <div className='flex flex-col justify-center items-center mt-5'>
        <ul className='list-disc list-inside mt-2'>
          {usernameHistory.length > 0 ? (
            usernameHistory.map((username, index) => (
              <li key={index} className="text-sm sm:text-lg">{index + 1}. {username}</li>
            ))
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
}

export default AdminHome;
