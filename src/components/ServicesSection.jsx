'use client';
import { useState } from 'react';
import Link from 'next/link';

const tabData = [
  {
    title: 'Daily Meal Subscriptions',
    content: `Nutritious, comforting thalis crafted for your everyday needs - balanced meals with variety, convenience, and a home-cooked touch.`,
    subpoints: [
      'Wholesome Rice Thali',
      'Paratha and Rice Thali',
      'Office or College Meal',
      'Paratha and Curry Thali',
      'Daily Thali',
    ],
    ctas: [
      { label: 'Explore All 5 Rotating Meal Plans', href: '/daily-meals' },
      { label: 'Subscribe', href: 'https://play.google.com/store/apps/details?id=com.rekart.consumer' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    )
  },
  {
    title: 'Salad & Soup Subscription',
    content: 'Light, refreshing, and nourishing combos - perfect for detox, dinners, or clean eating goals. A new combo every day.',
    ctas: [{ label: 'Explore Salad & Soup Plans', href: 'https://satvik.in/salads' }],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    )
  },
  {
    title: 'Bulk Orders for Parties & Events',
    content: 'Hosting guests? Order sabjis, dals, rice, or sweets in KGs - freshly prepared.',
    ctas: [{ label: 'Know More', href: '/bulk-orders' }],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
];

export default function HowWeWorkWithTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoverTab, setHoverTab] = useState(null);

  const backgroundImage = {
    backgroundImage: 'url("/servbg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <section 
      // style={backgroundImage}
    
    className="relative bg-gradient-to-b from-[#008A2F] to-[#000000] text-white overflow-hidden mt-10 py-14">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-white mix-blend-overlay blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-white mix-blend-overlay blur-xl"></div>
      </div>
      
      <div className=" relative px-2 z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl  heading tracking-wide mb-4">Our Meal Services</h2>
          <p className="text-md md:text-xl  text-white/90 max-w-3xl mx-auto">
            Discover the perfect meal solution tailored to your lifestyle
          </p>
        </div>

        {/* Tabbed Info Card */}
        <div className="w-full max-w-7xl  mx-auto bg-white text-black rounded-[35px] p-6 sm:p-8 md:p-10 lg:p-12 border-8 border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500">
          <div className="flex flex-wrap gap-3 mb-8">
            {tabData.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                onMouseEnter={() => setHoverTab(i)}
                onMouseLeave={() => setHoverTab(null)}
                aria-label={`Switch to ${tab.title} tab`}
                className={`flex items-center gap-2 text-sm sm:text-base font-semibold px-5 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-zinc-50 text-green-600 border border-green-600 shadow-lg'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                } ${hoverTab === i && activeTab !== i ? 'scale-105' : ''}`}
              >
                {tab.icon}
                {tab.title}
              </button>
            ))}
          </div>

          <div className="transition-all duration-500 ease-in-out">
            <div className="flex items-center gap-3 mb-6">
              {tabData[activeTab].icon}
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {tabData[activeTab].title}
              </h3>
            </div>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-7xl">
              {tabData[activeTab].content}
            </p>

            {tabData[activeTab].subpoints && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8 pl-5 text-base text-gray-700">
                {tabData[activeTab].subpoints.map((point, i) => (
                  <li key={i} className="flex items-center ">
                    <span className="bg-green-500  w-2 h-2 rounded-full mr-2 "></span>
                    <span className='text-md text-black'>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-3 mt-10">
              {tabData[activeTab].ctas.map((cta, i) => (
                <Link 
                  key={i} 
                  href={cta.href} 
                  target={cta.href.startsWith('http') ? '_blank' : '_self'}
                  className="group"
                >
                  <span className={`inline-flex items-center justify-center text-sm sm:text-base font-medium px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg ${
                    i === 0 
                      ? 'bg-green-600 text-white hover:from-[#d81a36] hover:to-[#ef2b48]'
                      : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-[#ef2b48] hover:text-[#ef2b48]'
                  }`}>
                    {cta.label}
                    {cta.href.startsWith('http') && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}