'use client';
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const writtenTestimonials = [
  {
    id: 1,
    quote: "Fresh Feast has truly revolutionized my approach to eating healthy! Their diverse menu options make it easy to find something delicious and nutritious every time",
    author: "Selena Gomz",
    age: "22 Years",
    avatar: "/avatars/avatar1.jpg"
  },
  {
    id: 2,
    quote: "I can't thank Fresh Feast enough for simplifying my busy lifestyle. With their meals, I no longer have to sacrifice health for convenience. Highly recommend!",
    author: "David Ken",
    age: "24 Years",
    avatar: "/avatars/avatar2.jpg"
  },
  {
    id: 3,
    quote: "Fresh Feast has been my go-to solution for nutritious meals without hassle. As someone with dietary restrictions, I appreciate the variety and clarity of their menus.",
    author: "Jennifer Singh",
    age: "21 Years",
    avatar: "/avatars/avatar3.jpg"
  },
  {
    id: 4,
    quote: "Every bite tastes like it's made with love and care. I love the eco-friendly packaging and the prompt service. Kudos to the entire team!",
    author: "Ravi Patel",
    age: "29 Years",
    avatar: "/avatars/avatar4.jpg"
  },
  {
    id: 5,
    quote: "Great taste, great service! The subscription plans are flexible and perfect for someone with a busy schedule like mine.",
    author: "Meera N.",
    age: "26 Years",
    avatar: "/avatars/avatar5.jpg"
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(writtenTestimonials.length / testimonialsPerPage);
  const currentPage = Math.floor(currentIndex / testimonialsPerPage) + 1;

  const next = () => {
    if (currentIndex + testimonialsPerPage < writtenTestimonials.length) {
      setCurrentIndex(prev => prev + testimonialsPerPage);
    }
  };

  const prev = () => {
    if (currentIndex - testimonialsPerPage >= 0) {
      setCurrentIndex(prev => prev - testimonialsPerPage);
    }
  };

  const visibleTestimonials = writtenTestimonials.slice(currentIndex, currentIndex + testimonialsPerPage);
  
  // Check if buttons should be disabled
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + testimonialsPerPage >= writtenTestimonials.length;

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, [currentIndex]);

  return (
    <section className="bg-gradient-to-br from-green-600 to-green-400 text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        {/* Left Text & Navigation */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            What Are People <span className="text-yellow-300">Saying About Us</span>
          </h2>
          <p className="text-sm leading-relaxed text-white/90">
            We are very happy if you are satisfied with our service and products,
            let's read pure reviews from customers
          </p>

          <div className="flex items-center gap-4 mt-4">
            <span className="text-3xl font-bold">
              {String(currentPage).padStart(2, '0')}
            </span>
            <span className="text-white/70">/ {String(totalPages).padStart(2, '0')}</span>
          </div>

          <div className="flex gap-3 mt-2">
            <button 
              onClick={prev} 
              disabled={isPrevDisabled}
              className={`w-10 h-10 flex items-center justify-center rounded-full shadow transition-colors ${
                isPrevDisabled 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-white text-green-600 hover:bg-green-50'
              }`}
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={next} 
              disabled={isNextDisabled}
              className={`w-10 h-10 flex items-center justify-center rounded-full shadow transition-colors ${
                isNextDisabled 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-white text-green-600 hover:bg-green-50'
              }`}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Right Testimonial Cards */}
        <div
          ref={containerRef}
          className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {visibleTestimonials.map((t, index) => (
            <div
              key={t.id}
              className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{t.author}</h4>
                  <p className="text-xs text-gray-500">{t.age}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">"{t.quote}"</p>
              <div className="mt-4 flex justify-end">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}