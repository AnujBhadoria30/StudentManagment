import React from 'react';
import { useNavigate } from 'react-router-dom';

function All() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center min-h-screen pt-20"> 
            <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0"> 
                <div
                    className="border-2 border-[#0DABB3]  p-5 sm:p-10  text-[20px] rounded-3xl hover:bg-[#0DABB3] text-center cursor-pointer"
                    onClick={() => navigate('/admin')}
                >
                    Admin
                </div>
                <div
                    className="border-2 border-[#0DABB3]  p-5 sm:p-10  text-[20px] rounded-3xl hover:bg-[#0DABB3] text-center cursor-pointer"
                    onClick={() => navigate('/teacher/s')}
                >
                    Teacher
                </div>
                <div
                    className="border-2 border-[#0DABB3] p-5 sm:p-10  text-[20px] rounded-3xl hover:bg-[#0DABB3] text-center cursor-pointer"
                    onClick={() => navigate('/student')}
                >
                    Student
                </div>
            </div>
        </div>
    );
}

export default All;
