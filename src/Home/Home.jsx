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
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 text-center text-white px-4">
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
                    </motion.div>
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
            <div className=' border border-slate-400 w-1/5 mt-8 mb-8 mx-auto'></div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="carousel carousel-vertical h-96 xl:h-[550px] md:h-[480px] w-full mx-auto ">
                {/* <!-- Slide 1 --> */}
                <div className="carousel-item shadow-xl relative w-[75%] border mx-auto">
                    <img className="w-fit transform transition-transform duration-300 group-hover:scale-110" src="https://i.postimg.cc/vBmkZLK2/temp-Image-Bb-VZ0-S.avif" />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Luxury Villa in Beverly Hills</h3>
                        <p className="text-sm">5 Bedrooms | 6 Bathrooms | 7,500 sq.ft.</p>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Schedule a Tour</button>
                    </div>
                </div>

                {/* <!-- Slide 2 --> */}
                <div className="carousel-item shadow-xl relative w-[75%] border mx-auto">
                    <img className="w-fit" src="https://i.postimg.cc/HLdFfC9g/temp-Image-Lq-Z2-PU.avif" />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Modern Apartment in Downtown</h3>
                        <p className="text-sm">2 Bedrooms | 2 Bathrooms | 1,200 sq.ft.</p>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
                    </div>
                </div>

                {/* <!-- Slide 3 --> */}
                <div className="carousel-item shadow-xl relative w-[75%] border mx-auto">
                    <img className="w-fit" src="https://i.postimg.cc/YSRT7ydm/temp-Imageo-X7-ZU4.avif" />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Cozy Family Home in Suburbia</h3>
                        <p className="text-sm">4 Bedrooms | 3 Bathrooms | 2,800 sq.ft.</p>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Contact Agent</button>
                    </div>
                </div>

                {/* <!-- Slide 4 --> */}
                <div className="carousel-item shadow-xl relative w-[75%] border mx-auto">
                    <img className="w-fit" src="https://i.postimg.cc/gJB5XLFz/temp-Imageui0-Ag-P.avif" />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Beachfront Property in Malibu</h3>
                        <p className="text-sm">3 Bedrooms | 3 Bathrooms | 2,500 sq.ft.</p>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Request More Info</button>
                    </div>
                </div>

                {/* <!-- Slide 5 --> */}
                <div className="carousel-item shadow-xl relative w-[75%] border mx-auto">
                    <img className="w-fit" src="https://i.postimg.cc/c1v1DQJc/temp-Imagezf-Fle4.avif" />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Rustic Cabin in the Mountains</h3>
                        <p className="text-sm">2 Bedrooms | 1 Bathroom | 1,000 sq.ft.</p>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Book a Viewing</button>
                    </div>
                </div>

                {/* <!-- Slide 6 --> */}
                <div className="carousel-item shadow-xl relative w-[75%] border mx-auto">
                    <img className="w-fit" src="https://i.postimg.cc/vBmkZLK2/temp-Image-Bb-VZ0-S.avif" />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Luxury Villa in Beverly Hills</h3>
                        <p className="text-sm">5 Bedrooms | 6 Bathrooms | 7,500 sq.ft.</p>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Schedule a Tour</button>
                    </div>
                </div>

                {/* <!-- Slide 7 --> */}
                <div className="carousel-item shadow-xl relative w-[75%] border mx-auto">
                    <img className="w-fit" src="https://i.postimg.cc/HLdFfC9g/temp-Image-Lq-Z2-PU.avif" />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Modern Apartment in Downtown</h3>
                        <p className="text-sm">2 Bedrooms | 2 Bathrooms | 1,200 sq.ft.</p>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
                    </div>
                </div>
            </motion.div>



        </div >
    );
};

export default Home;