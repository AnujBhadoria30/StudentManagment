/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Teacher() {
  return (
    <div>
        <div className='h-screen border flex'>
            <div className="bg-white border shadow-xl border-[#0DABB3] sm:w-64 pt-10 p-3 rounded-lg" style={{ boxShadow: '0px 4px 10px #0DABB3' }}>
                <ul className='space-y-4 mt-44'>
                    <li>
                        <Link 
                            to="s" 
                            className="flex sm:flex-row items-center text-gray-700 hover:bg-[#0DABB3] hover:text-white transition duration-300 p-3 rounded-lg shadow hover:shadow-lg border-2 border-[#0DABB3]"
                        >
                            🧑‍🎓<span className="ml-2">Students</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="n" 
                            className="flex sm:flex-row items-center text-gray-700 hover:bg-[#0DABB3] hover:text-white transition duration-300 p-3 rounded-lg shadow hover:shadow-lg border-2 border-[#0DABB3]"
                        >
                            📝<span className="ml-2">Notices</span>
                        </Link>
                    </li>
                </ul>       
            </div>

            <div className='flex-1'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Teacher
