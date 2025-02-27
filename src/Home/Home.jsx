import React from 'react';

import { motion } from 'motion/react';
import properties from '../assets/Data/Property.json'



const Home = () => {
    return (
        <div>
            <div>


                <div
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
                            className="max-w-md ">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>

                            <button className="mt-2 px-4 py-2 text-black bg-gradient-to-br from-purple-100 to-blue-400">Get Started</button>

                        </motion.div>
                    </div>
                </div>
            </div>
            <div className=' border border-slate-400 w-1/5 mt-8 mb-8 mx-auto'></div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="carousel carousel-vertical  w-full mx-auto h-screen"
            //h-96 xl:h-[550px] md:h-[480px]
            >
                {/* <!-- Slide 1 --> */}
                <div className="carousel-item shadow-xl relative w-full border mx-auto">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.postimg.cc/vBmkZLK2/temp-Image-Bb-VZ0-S.avif"
                        alt="Luxury Villa"
                    />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Luxury Villa in Beverly Hills</h3>
                        <p className="text-sm">5 Bedrooms | 6 Bathrooms | 7,500 sq.ft.</p>
                        <button className="mt-2 bg-gradient-to-br from-blue-200 to-blue-500 text-white px-4 py-2  hover:bg-blue-600">Schedule a Tour</button>
                    </div>
                </div>

                {/* <!-- Slide 2 --> */}
                <div className="carousel-item shadow-xl relative w-full border mx-auto">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.postimg.cc/HLdFfC9g/temp-Image-Lq-Z2-PU.avif"
                        alt="Modern Apartment"
                    />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Modern Apartment in Downtown</h3>
                        <p className="text-sm">2 Bedrooms | 2 Bathrooms | 1,200 sq.ft.</p>
                        <button className="mt-2 bg-gradient-to-br from-blue-200 to-blue-500 text-white px-4 py-2  hover:bg-blue-600">View Details</button>
                    </div>
                </div>

                {/* <!-- Slide 3 --> */}
                <div className="carousel-item shadow-xl relative w-full border mx-auto">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.postimg.cc/YSRT7ydm/temp-Imageo-X7-ZU4.avif"
                        alt="Cozy Family Home"
                    />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Cozy Family Home in Suburbia</h3>
                        <p className="text-sm">4 Bedrooms | 3 Bathrooms | 2,800 sq.ft.</p>
                        <button className="mt-2 bg-gradient-to-br from-blue-200 to-blue-500 text-white px-4 py-2  hover:bg-blue-600">Contact Agent</button>
                    </div>
                </div>

                {/* <!-- Slide 4 --> */}
                <div className="carousel-item shadow-xl relative w-full border mx-auto">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.postimg.cc/gJB5XLFz/temp-Imageui0-Ag-P.avif"
                        alt="Beachfront Property"
                    />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Beachfront Property in Malibu</h3>
                        <p className="text-sm">3 Bedrooms | 3 Bathrooms | 2,500 sq.ft.</p>
                        <button className="mt-2 bg-gradient-to-br from-blue-200 to-blue-500 text-white px-4 py-2  hover:bg-blue-600">Request More Info</button>
                    </div>
                </div>

                {/* <!-- Slide 5 --> */}
                <div className="carousel-item shadow-xl relative w-full border mx-auto">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.postimg.cc/c1v1DQJc/temp-Imagezf-Fle4.avif"
                        alt="Rustic Cabin"
                    />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Rustic Cabin in the Mountains</h3>
                        <p className="text-sm">2 Bedrooms | 1 Bathroom | 1,000 sq.ft.</p>
                        <button className="mt-2 bg-gradient-to-br from-blue-200 to-blue-500 text-white px-4 py-2  hover:bg-blue-600">Book a Viewing</button>
                    </div>
                </div>

                {/* <!-- Slide 6 --> */}
                <div className="carousel-item shadow-xl relative w-full border mx-auto">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.postimg.cc/vBmkZLK2/temp-Image-Bb-VZ0-S.avif"
                        alt="Luxury Villa"
                    />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Luxury Villa in Beverly Hills</h3>
                        <p className="text-sm">5 Bedrooms | 6 Bathrooms | 7,500 sq.ft.</p>
                        <button className="mt-2 bg-gradient-to-br from-blue-200 to-blue-500 text-white px-4 py-2  hover:bg-blue-600">Schedule a Tour</button>
                    </div>
                </div>

                {/* <!-- Slide 7 --> */}
                <div className="carousel-item shadow-xl relative w-full border mx-auto">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.postimg.cc/HLdFfC9g/temp-Image-Lq-Z2-PU.avif"
                        alt="Modern Apartment"
                    />
                    <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-bold">Modern Apartment in Downtown</h3>
                        <p className="text-sm">2 Bedrooms | 2 Bathrooms | 1,200 sq.ft.</p>
                        <button className="mt-2 bg-gradient-to-br from-blue-200 to-blue-500 text-white px-4 py-2  hover:bg-blue-600">View Details</button>
                    </div>
                </div>
            </motion.div>



            <div className="container mx-auto px-4 py-16">


                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="">
                    <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>
                </motion.div>
                <div className=' border border-slate-400 w-1/5 mt-8 mb-8 mx-auto'></div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Property 1 --> */}
                        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="https://i.postimg.cc/HLdFfC9g/temp-Image-Lq-Z2-PU.avif"
                                alt="Modern Apartment"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Modern Apartment in Downtown</h3>
                                <p className="text-gray-600 mb-4">2 Bedrooms | 2 Bathrooms | 1,200 sq.ft.</p>
                                <p className="text-gray-800 mb-4">$1,200,000</p>
                                <button className="bg-gradient-to-br from-purple-200 to-blue-400 text-black px-6 py-2 roblack-lg hover:bg-blue-700">View Details</button>
                            </div>
                        </div>

                        {/* <!-- Property 2 --> */}
                        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="https://i.postimg.cc/YSRT7ydm/temp-Imageo-X7-ZU4.avif"
                                alt="Cozy Family Home"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Cozy Family Home in Suburbia</h3>
                                <p className="text-gray-600 mb-4">4 Bedrooms | 3 Bathrooms | 2,800 sq.ft.</p>
                                <p className="text-gray-800 mb-4">$950,000</p>
                                <button className="bg-gradient-to-br from-purple-200 to-blue-400 text-black px-6 py-2 roblack-lg hover:bg-blue-700">View Details</button>
                            </div>
                        </div>

                        {/* <!-- Property 3 --> */}
                        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="https://i.postimg.cc/gJB5XLFz/temp-Imageui0-Ag-P.avif"
                                alt="Beachfront Property"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Beachfront Property in Malibu</h3>
                                <p className="text-gray-600 mb-4">3 Bedrooms | 3 Bathrooms | 2,500 sq.ft.</p>
                                <p className="text-gray-800 mb-4">$2,500,000</p>
                                <button className="bg-gradient-to-br from-purple-200 to-blue-400 text-black px-6 py-2 roblack-lg hover:bg-blue-700">View Details</button>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* <!-- Feature 1 --> */}
                        <div className="text-center">
                            <div className="text-4xl mb-4">🏡</div>
                            <h3 className="text-xl font-bold mb-2">Wide Range of Properties</h3>
                            <p className="text-gray-600">From luxury villas to cozy apartments, we have something for everyone.</p>
                        </div>

                        {/* <!-- Feature 2 --> */}
                        <div className="text-center">
                            <div className="text-4xl mb-4">💼</div>
                            <h3 className="text-xl font-bold mb-2">Expert Agents</h3>
                            <p className="text-gray-600">Our experienced agents are here to guide you every step of the way.</p>
                        </div>

                        {/* <!-- Feature 3 --> */}
                        <div className="text-center">
                            <div className="text-4xl mb-4">🔑</div>
                            <h3 className="text-xl font-bold mb-2">Easy Process</h3>
                            <p className="text-gray-600">We make buying, selling, and renting properties simple and stress-free.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* <!-- Testimonial 1 --> */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-600 mb-4">"The team helped me find the perfect home for my family. Highly recommended!"</p>
                        <p className="font-bold">- John Doe</p>
                    </div>

                    {/* <!-- Testimonial 2 --> */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-600 mb-4">"Professional and reliable service. They made the entire process so easy!"</p>
                        <p className="font-bold">- Jane Smith</p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center text-black">
                    <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
                    <p className="mb-8">Contact us today to get started on your real estate journey.</p>
                    <button className="bg-gradient-to-br from-purple-100 to-blue-400 text-black px-8 py-3  hover:bg-gray-100">Contact an Agent</button>
                </div>
            </div>

        </div >
    );
};

export default Home;