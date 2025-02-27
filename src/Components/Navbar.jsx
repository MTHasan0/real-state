import React, { useState } from 'react';
import { motion } from 'motion/react';
import logo from '../assets/logo.png'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white "
        >
            <div className="mx-auto px-4 sm:px-6 ">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-black text-2xl font-bold hover:text-gray-500 transition duration-300">
                            <img className=' w-fit' src='' /> RS
                        </a>
                    </div>

                    {/* Hamburger Menu (Mobile) */}
                    <div className="-mr-2 flex md:hidden ">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-black  hover:bg-gradient-to-br from-purple-100 to-blue-400 focus:outline-none transition duration-600"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <a
                            href="/"
                            className="text-black  px-3 py-2  text-sm font-medium transition duration-300 hover:bg-gradient-to-br from-purple-200 to-blue-400"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="text-black  px-3 py-2  text-sm font-medium transition duration-300 hover:bg-gradient-to-br from-purple-200 to-blue-400"
                        >
                            About
                        </a>
                        <a
                            href="/services"
                            className="text-black  px-3 py-2  text-sm font-medium transition duration-300 hover:bg-gradient-to-br from-purple-200 to-blue-400"
                        >
                            Services
                        </a>
                        <a
                            href="/contact"
                            className="text-black  px-3 py-2  text-sm font-medium transition duration-300 hover:bg-gradient-to-br from-purple-200 to-blue-400"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="/"
                            className="text-black block px-3 py-2  text-base font-medium hover:bg-gradient-to-br from-purple-200 to-blue-400"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="text-black block px-3 py-2  text-base font-medium hover:bg-gradient-to-br from-purple-200 to-blue-400"
                        >
                            About
                        </a>
                        <a
                            href="/services"
                            className="text-black block px-3 py-2  text-base font-medium hover:bg-gradient-to-br from-purple-200 to-blue-400"
                        >
                            Services
                        </a>
                        <a
                            href="/contact"
                            className="text-black block px-3 py-2  text-base font-medium  hover:bg-gradient-to-br from-purple-200 to-blue-400"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;