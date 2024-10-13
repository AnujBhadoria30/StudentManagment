/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleNavigate = () => {
    navigate('/all'); // Programmatically navigate to the All component
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-6 p-4">
      <div className="flex-1 mb-4 md:mb-0">
        <img
          className="w-full h-auto"
          src="https://hasnain-school.netlify.app/home.jpg"
          alt="School Management"
        />
      </div>
      <div className="flex-1 md:mt-[10px] space-y-10 pt-12">
        <h1 className="text-[18px] md:text-3xl font-bold mb-2">
          Welcome to School Management Application
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          The modern education technology provides us with a more practical and efficient set up for teaching techniques. In order to make classes more interesting and interactive, schools are now constructing a hybrid learning environment around the students.
        </p>
        <div className="flex justify-center items-center ">
          <button
            className="bg-[#0DABB3] text-white py-2 px-6 rounded-md hover:bg-green-500"
            onClick={handleNavigate} 
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
