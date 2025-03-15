import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/Data/data.json';
import { motion } from 'motion/react';

const PropertyDetails = () => {
    const { featuredProperties } = data;
    const { id } = useParams();

    const property = featuredProperties.find((property) => property.id === parseInt(id))

    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >

            <a href="" className=" group relative block overflow-hidden w-[90%] md:w-[80%] xl:w-[50%] mx-auto">
                <button
                    className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                >
                    <span className="sr-only">Wishlist</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </button>

                <img
                    src={property.image}
                    alt=""
                    className=" w-fit  object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative border border-gray-100 bg-white p-6">
                    <p className="text-gray-700">
                        {property.price}
                        <span className=" pl-2 text-gray-600 line-through">{property.oldPrice}</span>
                    </p>

                    <h3 className="mt-1.5 text-lg font-medium text-gray-900">{property.title}</h3>

                    <p className="mt-1.5 line-clamp-3 text-gray-700">
                        {property.description}
                    </p>

                    <form className="mt-4 flex gap-4">
                        <button
                            className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
                        >
                            Add to Cart
                        </button>

                        <button
                            type="button"
                            className="block w-full bg-gradient-to-br from-purple-100 to-blue-400 text-black px-8 py-3 hover:bg-gray-100"
                        >
                            Buy Now
                        </button>
                    </form>
                </div>
            </a>
        </motion.div>
    );
};

export default PropertyDetails;