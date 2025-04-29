import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative h-screen w-full text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
            src="/hero.jpg"
            alt="Hero Image"
            fill
            priority
            className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>


      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Book Your Luxury Room
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Get Special Offer Just For You Today
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 font-bold bg-orange-500 hover:bg-orange-600 text-white rounded shadow transition duration-300">
            Book Now
          </button>
          <button className="px-6 py-3 font-bold bg-transparent border-amber-600 border-2 hover:bg-orange-600 text-white rounded shadow transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
