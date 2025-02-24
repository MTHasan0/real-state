import React from 'react';

import { motion } from 'motion/react';



const Home = () => {
    return (
        <div>
            <div>

                <div
                    className="relative h-screen flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
                    }}
                >
                    {/* Overlay to darken the background image */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center text-white px-4">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
                            Find Your Dream Home
                        </h1>
                        <p className="text-lg md:text-xl mb-8 animate-fade-in delay-100">
                            Explore the best properties in your desired location. We make it easy to find the perfect home for you.
                        </p>
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in delay-200"
                        >
                            Browse Properties
                        </button>
                    </div>
                </div>
                {/* <div
                    className="hero min-h-screen  "
                    style={{

                        //backgroundImage: "url(https://i.postimg.cc/ZRDQ1hJQ/temp-Image-Xvp-ZZS.avif)",
                        backgroundImage: "url(https://i.postimg.cc/htFJbzRJ/image.png)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </motion.div>
                    </div>
                </div> */}
            </div>



        </div >
    );
};

export default Home;