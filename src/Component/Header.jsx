/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom'; // Import Link

function Header() {
    // State to manage the visibility of the nav links
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#0DABB3] text-white relative ">
            <header className="flex flex-col md:flex-row justify-between md:items-center p-4 ">
                <div className='flex justify-between'>
                    <div className="logo-container text-sm md:text-lg ">
                        School Management App By Anuj 
                    </div>
                    <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                        {isMenuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
                    </div>
                </div>

                {/* Sidebar for mobile view, positioned on the right */}
                <div
                    className={`fixed top-0 right-0 mt-12  h-full bg-[#0DABB3] transition-transform transform z-10
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
              md:hidden rounded-lg shadow-lg p-4 
              duration-300 ease-in-out`}
                >
                    <nav className="p-4">
                        <ul className="flex flex-col gap-5">
                            <li className="nav-link hover:text-blue-300">
                                <Link to="/" onClick={toggleMenu}>Home</Link>
                            </li>
                            <li className="nav-link hover:text-blue-300">
                                <Link to="/admin" onClick={toggleMenu}>Admin</Link>
                            </li>
                            <li className="nav-link hover:text-blue-300">
                                <Link to="/teacher/s" onClick={toggleMenu}>Teacher</Link>
                            </li>
                            <li className="nav-link hover:text-blue-300">
                                <Link to="/student" onClick={toggleMenu}>Student</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Desktop navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-5">
                        <li className="nav-link hover:text-blue-300">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-link hover:text-blue-300">
                            <Link to="/admin">Admin</Link>
                        </li>
                        <li className="nav-link hover:text-blue-300">
                            <Link to="/teacher/s">Teacher</Link>
                        </li>
                        <li className="nav-link hover:text-blue-300">
                            <Link to="/student">Student</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
