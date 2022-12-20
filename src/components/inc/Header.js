import React from "react";
import Idalogo from '../images/Idalogo1.jpg'
import { Link } from "react-router-dom";

const Header = () => {

    return(
        <div className="bg-white">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-20">
        <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button id="dropdownDefault" data-dropdown-toggle="navbar-dropdown" type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-blue-800 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mt-5"
                    aria-controls="navbar-dropdown" aria-expanded="true">
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <img src={Idalogo} className="block w-60 mt-4" alt="..."/>
                </div>

                <div className="hidden sm:ml-auto sm:block mt-7">
                    <div className="flex space-x-4">
                        <Link to="/" className="text-blue-800 hover:text-blue-700 py-2 font-medium"
                            aria-current="page">Home</Link>

                        <Link to="/services" className="text-blue-800 hover:text-blue-700 py-2 font-medium">IT
                            Services</Link>

                        {/* <Link to="#"
                            className=" text-blue-800 hover:text-blue-700 py-2 font-medium inline-flex">Programs</Link>
                        */}

                        
                        <div className="dropdown">
                            <button
                                className="dropbtn text-blue-800 hover:text-blue-700 py-2 font-medium inline-flex items-center">Programs
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </button>
                            <div className="dropdown-content bg-white ">
                                <Link to="/girls"
                                    className="text-blue-800 hover:text-blue-700 font-medium hover:bg-indigo-50">Girls In
                                    Code</Link>
                                <Link to="/juniors"
                                    className="text-blue-800 hover:text-blue-700 font-medium hover:bg-indigo-50">Junior
                                    Programmers</Link>
                                <Link to="#"
                                    className="text-blue-800 hover:text-blue-700 font-medium hover:bg-indigo-50">AIPE</Link>
                                <Link to="#"
                                    className="text-blue-800 hover:text-blue-700 font-medium hover:bg-indigo-50">SCPIOT</Link>
                            </div>
                        </div>

                        <Link to="/projects" className="text-blue-800 hover:text-blue-700 py-2 font-medium">Projects</Link>

                        <Link to="/contact"
                            className="text-blue-800 hover:text-blue-700 pr-8 py-2 font-medium">Contact Us</Link>
                    </div>
                </div>
            </div>

        </div>
    </div>

    {/* Mobile menu, show/hide based on menu state. */}
    <div className="hidden" id="navbar-dropdown">
        <div className="space-y-1 px-2 pt-2 pb-3" aria-labelledby="dropdownDefault">
            <Link to="/"
                className="text-blue-800 hover:text-blue-700 text-center block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page">Home</Link>

            <Link to="/services"
                className="text-blue-800 hover:text-blue-700 text-center block px-3 py-2 rounded-md text-base font-medium">IT
                Services</Link>

           {/* <Link to="#"
                className="text-blue-800 hover:text-blue-700 text-center block px-3 py-2 rounded-md text-base font-medium">Programs</Link>
            */}

            <div className="dropdown">
                <button
                    className="dropbtn text-blue-800 hover:text-blue-700 text-center  px-[200px] py-2 rounded-md text-base font-medium inline-flex items-center">Programs
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </button>
                <div className="dropdown-content bg-white ml-[150px] ">
                    <Link to="/girls"
                        className="text-blue-800 hover:text-blue-700 font-medium hover:bg-indigo-50">Girls In Code</Link>
                    <Link to="/juniors"
                        className="text-blue-800 hover:text-blue-700 font-medium hover:bg-indigo-50">Junior Programmers</Link>
                    <Link to="#" className="text-blue-800 hover:text-blue-700 font-medium hover:bg-indigo-50">AIPE</Link>
                    <Link to="#" className="text-blue-800 hover:text-blue-700 font-medium hover:bg-indigo-50">SCPIOT</Link>
                </div>
            </div>

            <Link to="/projects" className="text-blue-800 hover:text-blue-700 text-center block px-3 py-2 rounded-md text-base font-medium">Projects</Link>

            <Link to="/contact"
                className="text-blue-800 hover:text-blue-700 text-center block px-3 py-2 rounded-md text-base font-medium">Contact
                US</Link>
        </div>
    </div>
</div>
    );
};

export default Header;