import React from 'react';
import { motion } from 'framer-motion';
import data from '../assets/Data/data.json';
import { Link } from 'react-router-dom';

const Home = () => {
    const { hero, carousel, featuredProperties, whyChooseUs, testimonials, cta } = data;

    return (
        <div>
            {/* Hero Section */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero.backgroundImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-md"
                    >
                        <h1 className="mb-5 text-5xl font-bold">{hero.title}</h1>
                        <p className="mb-5">{hero.description}</p>
                        <button className="mt-2 px-4 py-2 text-black bg-gradient-to-br from-purple-100 to-blue-400">
                            {hero.buttonText}
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Divider */}
            <div className="border border-slate-400 w-1/5 mt-8 mb-8 mx-auto"></div>

            {/* Carousel Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="carousel carousel-vertical w-full mx-auto h-screen"
            >
                {carousel.map((slide, index) => (
                    <div key={index} className="carousel-item shadow-xl relative w-full border mx-auto">
                        <img className="w-full h-full object-cover" src={slide.image} alt={slide.title} />
                        <div className="absolute top-1/2 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                            <h3 className="text-xl font-bold">{slide.title}</h3>
                            <p className="text-sm pb-4">{slide.description}</p>
                            <Link to={`/propertyDetails/${slide.id}`} className=" bg-gradient-to-br from-blue-200 to-blue-500 text-white px-4 py-2 hover:bg-blue-600">
                                {slide.buttonText}
                            </Link>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Featured Properties Section */}
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>
                </motion.div>
                <div className="border border-slate-400 w-1/5 mt-8 mb-8 mx-auto"></div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProperties.map((property, index) => (
                            <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                                    <p className="text-gray-600 mb-4">{property.description}</p>
                                    <p className="text-gray-800 mb-4">{property.price}</p>
                                    <Link to={`/propertyDetails/${property.id}`} className="bg-gradient-to-br from-purple-200 to-blue-400 text-black px-6 py-2  hover:bg-blue-700">
                                        {property.buttonText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyChooseUs.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-gray-600 mb-4">{testimonial.text}</p>
                            <p className="font-bold">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center text-black">
                    <h2 className="text-3xl font-bold mb-4">{cta.title}</h2>
                    <p className="mb-8">{cta.description}</p>
                    <button className="bg-gradient-to-br from-purple-100 to-blue-400 text-black px-8 py-3 hover:bg-gray-100">
                        {cta.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;