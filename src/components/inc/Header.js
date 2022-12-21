/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import Idalogo from '../images/Idalogo1.jpg'


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative bg-white">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-20">
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img src={Idalogo} className="block w-60" alt="..."/>
                </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:justify-center lg:gap-x-5 lg:ml-60">
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
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                
                <img src={Idalogo} className="block w-60 mt-4" alt="..."/>
            
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                  <Link to="/"
                className="text-blue-800 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page">Home</Link>
                  <Link to="/services"
                className="text-blue-800 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">IT
                Services</Link>
              <div className="dropdown">
                <button
                    className="dropbtn text-blue-800 hover:text-blue-700 px-[200px] py-2 rounded-md text-base font-medium inline-flex items-center">Programs
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


            <Link to="/projects" className="text-blue-800 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
            
            <Link to="/contact"
                className="text-blue-800 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">Contact
                US</Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
