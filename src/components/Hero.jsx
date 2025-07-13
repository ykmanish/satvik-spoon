// components/NewHeroSection.js
'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaPlay, FaPhoneAlt } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function NewHeroSection() {
  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animation code remains the same
    gsap.fromTo(
      leftContentRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.3 }
    );
    
    gsap.fromTo(
      rightImageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
    );

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.7 + index * 0.2 }
      );
    });
  }, []);

  const backgroundImage = {
    backgroundImage: 'url("/heros.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <section
      
     className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        {/* Left Content - Now takes more space */}
        <div
          ref={leftContentRef}
          className="w-full md:w-1/2 lg:w-[55%] space-y-6 text-center md:text-left"
        >
          <button className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-sm hover:bg-pink-200 transition">
            More than Faster 
          </button>

          <h2 className="text-2xl heading  lg:text-5xl font-bold tracking-wide">
            Wholesome, Pure Veg Meals. Delivered Across Pune and PCMC
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-lg max-w-[100%] md:max-w-full mx-auto md:mx-0">
            From nutritious daily thalis to refreshing salads and bulk orders for special occasions - Satvik Spoon brings you a spoonful of wellness in every meal.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition whitespace-nowrap">
              Checkout our Daily Meal Subscriptions
            </button>
            <button className="flex items-center justify-center gap-2 text-gray-700 hover:text-red-600 transition">
              <FaPlay className="bg-yellow-300 text-white p-1.5 rounded-full text-lg" />
              Watch Video
            </button>
          </div>

          {/* Customer */}
          <div className="flex items-center gap-3 pt-4 justify-center md:justify-start">
            <img
              src="https://assets.lummi.ai/assets/QmSmLce3GoQex9avngEXfhfAeziq6ay9FyVnNctoBw7Spf?auto=format&w=1500"
              alt="Happy Customer"
              className="rounded-full w-10 h-10 object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-700">Our Happy Customers</p>
              <p className="text-sm text-green-600">4.8 (12.5k Reviews)</p>
            </div>
          </div>
        </div>

        {/* Right Image - Now takes less space and closer to left */}
        <div ref={rightImageRef} className="w-full md:w-1/2 lg:w-[45%] relative mt-8 md:mt-0">
          <img
            src="/herop.svg"
            alt="Salad Dish"
            className="rounded-full w-full max-w-[500px] h-auto aspect-square object-cover shadow-xl mx-auto"
          />

          {/* Courier Info Card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="absolute -bottom-4 left-0 md:left-4 bg-white shadow-lg px-4 py-3 rounded-2xl flex items-center gap-3"
          >
            <img 
              src="https://assets.lummi.ai/assets/QmSmLce3GoQex9avngEXfhfAeziq6ay9FyVnNctoBw7Spf?auto=format&w=1500" 
              alt="Courier" 
              className="rounded-full w-10 h-10 object-cover" 
            />
            <div className="text-sm">
              <p className="font-semibold text-gray-800">Richard Watson</p>
              <p className="text-gray-500">Food Courier</p>
            </div>
            <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
              <FaPhoneAlt />
            </button>
          </div>

          {/* Price Tag */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="absolute -bottom-4 right-0 md:right-4 bg-white shadow-lg px-4 py-3 rounded-2xl flex items-center gap-3"
          >
            <img 
              src="https://assets.lummi.ai/assets/QmSmLce3GoQex9avngEXfhfAeziq6ay9FyVnNctoBw7Spf?auto=format&w=1500" 
              alt="Pizza" 
              className="rounded-full w-10 h-10 object-cover" 
            />
            <div className="text-sm">
              <p className="font-semibold text-gray-800">Italian Pizza</p>
              <p className="font-bold text-green-500">$7.49</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}