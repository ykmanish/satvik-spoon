'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaArrowRight, FaPauseCircle } from 'react-icons/fa';
import { GiRiceCooker, GiFullPizza, GiMeal } from 'react-icons/gi';
import { BiBowlRice } from 'react-icons/bi';
import { IoFastFoodOutline } from 'react-icons/io5';

const mealPlans = [
  {
    id: 1,
    title: 'Stuffed Paratha Thali',
    icon: <GiFullPizza className="text-4xl text-green-600" />,
    description: '2 freshly stuffed parathas, seasonal sabji, raita or salad, and a sweet treat - this is for the paratha lover in you.',
    bestFor: 'Comfort food with a twist',
    image: '/paratha-thali.jpg'
  },
  {
    id: 2,
    title: 'Wholesome Rice Thali',
    icon: <BiBowlRice className="text-4xl text-green-600" />,
    description: 'Steamed or flavored rice, 2 sabjis (including paneer), your choice of roti, and dessert. Balanced. Filling. Soulful.',
    bestFor: 'Office lunch or full dinner',
    image: '/rice-thali.jpg'
  },
  {
    id: 3,
    title: 'Daily Thali',
    icon: <GiMeal className="text-4xl text-green-600" />,
    description: 'Our signature "ghar ka khana" combo - dal, rice, 2 sabjis, roti, salad and dessert.',
    bestFor: 'Traditional eaters & comfort lovers',
    image: '/daily-thali.jpg'
  },
  {
    id: 4,
    title: 'Paratha Rice Thali',
    icon: <IoFastFoodOutline className="text-4xl text-green-600" />,
    description: 'A fusion of flavors with 2 parathas, one rice item, and a curry - plus sides and sweet.',
    bestFor: 'Variety seekers',
    image: '/paratha-rice.jpg'
  },
  {
    id: 5,
    title: 'Office / College Meal',
    icon: <GiRiceCooker className="text-4xl text-green-600" />,
    description: 'A travel-friendly, compact thali with dry sabji, phulkas or bhakri, and salad.',
    bestFor: 'Students and working professionals',
    image: '/office-meal.jpg'
  }
];

const sampleMenu = [
  { day: 'Monday', meal: 'Aloo Gobi, Jeera Rice, Phulkas, Raita, Ladoo' },
  { day: 'Tuesday', meal: 'Methi Paratha, Bhindi, Moong Dal, Salad, Halwa' },
  { day: 'Wednesday', meal: 'Chole, Steamed Rice, Chapatis, Kachumber, Gulab Jamun' },
  { day: 'Thursday', meal: 'Pav Bhaji, Rice, Salad, Sweet' },
  { day: 'Friday', meal: 'Dal Tadka, Jeera Rice, Roti, Salad, Jalebi' }
];

export default function DailyMealsPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-6 heading">
              Enjoy a spoonful of wellness in every meal
            </h1>
            <p className="text-sm md:text-lg text-zinc-100 max-w-5xl mx-auto leading-relaxed">
              Crafted with clean ingredients, balanced portions, and daily-changing menus. Satvik Spoon offers 5 nutritious, vegetarian thali plans to suit every appetite and schedule. Whether you prefer stuffed parathas, wholesome rice-based meals, or compact office tiffins, we've got you covered. Delivered daily across Pune & PCMC.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 ">
            <Link 
              href="https://wa.me/919999999999?text=I'd%20like%20to%20try%20a%20meal%20for%20₹199" 
              target="_blank"
              className="flex items-center gap-2 bg-green-800 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              Try a Meal for ₹199
              <FaWhatsapp className="text-xl" />
            </Link>
            
            <Link 
              href="https://wa.me/919999999999?text=Please%20share%20your%20monthly%20menu" 
              target="_blank"
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-200 transition-all"
            >
              View Monthly Menu
              <FaWhatsapp className="text-xl" />
            </Link>
            
            <Link 
              href="https://play.google.com/store/apps/details?id=com.rekart.consumer" 
              target="_blank"
              className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              Login to Subscribe
              <FaArrowRight className="text-xl" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meal Plan Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 heading">
            Our Daily Meal Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mealPlans.map((plan) => (
              <div 
                key={plan.id} 
                className="bg-white rounded-3xl overflow-hidden  hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={plan.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {plan.icon}
                    <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <p className="text-sm font-semibold text-green-600 mb-6">Best For: {plan.bestFor}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Link 
                      href={`https://wa.me/919999999999?text=I'd%20like%20to%20try%20the%20${encodeURIComponent(plan.title)}`}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 bg-orange-50 hover:bg-green-100 text-orange-600 font-medium px-4 py-2 rounded-lg text-sm transition-all"
                    >
                      Try this Meal
                      <FaWhatsapp />
                    </Link>
                    <Link 
                      href="https://play.google.com/store/apps/details?id=com.rekart.consumer"
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-all"
                    >
                      Subscribe Now
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Menu Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 heading">
            Sample Menu Preview
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Here's a sneak peek of how your meals change daily:
          </p>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto mb-12">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Day</th>
                  <th className="py-3 px-4 text-left">Sample Meal</th>
                </tr>
              </thead>
              <tbody>
                {sampleMenu.map((item, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="py-3 px-4 font-medium">{item.day}</td>
                    <td className="py-3 px-4">{item.meal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-center">
            <Link 
              href="https://wa.me/919999999999?text=Please%20share%20your%20full%20monthly%20menu" 
              target="_blank"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              View Full Monthly Menu
              <FaWhatsapp className="text-xl" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pause Flexibility Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <FaPauseCircle className="text-6xl text-white/30" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-4 heading">
                    Going Out? No Worries.
                  </h2>
                  <p className="text-md md:text-xl mb-6 lg:max-w-3xl">
                    You can pause your subscription anytime before 10 PM the day prior. Your balance gets carried forward - so nothing is wasted, and you stay in control.
                  </p>
                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.rekart.consumer"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-green-600 font-semibold px-6 py-3 rounded-full transition-all"
                  >
                    Manage Your Subscription
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}