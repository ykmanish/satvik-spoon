'use client';
import Link from 'next/link';
import { FaWhatsapp, FaPhoneAlt, FaDownload, FaCalendarAlt, FaBirthdayCake, FaHome, FaBuilding } from 'react-icons/fa';
import { GiRiceCooker, GiMeal, GiPartyPopper } from 'react-icons/gi';
import { BiSolidParty } from 'react-icons/bi';

const bulkCategories = [
  {
    title: 'Dry & Gravy Sabjis',
    items: ['Paneer Butter Masala', 'Aloo Gobi', 'Bhindi Masala', 'Methi Malai Mutter'],
    icon: <GiMeal className="text-4xl text-green-600" />
  },
  {
    title: 'Dal / Kadhi / Khichdi',
    items: ['Dal Tadka', 'Dal Fry', 'Punjabi Kadhi', 'Moong Khichdi'],
    icon: <GiRiceCooker className="text-4xl text-green-600" />
  },
  {
    title: 'Jeera Rice / Biryani / Pulav',
    items: ['Jeera Rice', 'Vegetable Biryani', 'Kashmiri Pulav', 'Lemon Rice'],
    icon: <GiRiceCooker className="text-4xl text-green-600" />
  },
  {
    title: 'Phulkas / Parathas / Bhakris',
    items: ['Phulkas (per piece)', 'Aloo Paratha', 'Methi Paratha', 'Jowar Bhakri'],
    icon: <GiMeal className="text-4xl text-green-600" />
  },
  {
    title: 'Sweets',
    items: ['Besan Ladoo', 'Gajar Halwa', 'Sheera', 'Gulab Jamun'],
    icon: <GiMeal className="text-4xl text-green-600" />
  },
  {
    title: 'Salads, Raita, Pickles',
    items: ['Kachumber Salad', 'Boondi Raita', 'Mix Veg Salad', 'Mango Pickle'],
    icon: <GiMeal className="text-4xl text-green-600" />
  }
];

const useCases = [
  {
    title: 'Home poojas & family dinners',
    icon: <FaHome className="text-3xl text-green-600" />
  },
  {
    title: 'Birthday or housewarming parties',
    icon: <FaBirthdayCake className="text-3xl text-green-600" />
  },
  {
    title: 'Office lunches & team events',
    icon: <FaBuilding className="text-3xl text-green-600" />
  },
  {
    title: 'Society group meals or kitty parties',
    icon: <BiSolidParty className="text-3xl text-green-600" />
  }
];

export default function BulkOrdersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-6 heading">
              Freshly Cooked Food in Bulk Quantities
            </h1>
            <p className="text-sm md:text-xl text-zinc-100 max-w-4xl mx-auto leading-relaxed">
              Hosting a small gathering or planning an office lunch? Get freshly cooked, hygienic vegetarian food delivered to your doorstep - in quantities that suit your guest list.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 ">
            <Link 
              href="/bulk-menu.pdf" 
              download
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-200 transition-all"
            >
              Download Bulk Menu PDF
              <FaDownload className="text-xl" />
            </Link>
            
            <Link 
              href="https://wa.me/919999999999?text=Hi!%20I'd%20like%20to%20see%20your%20bulk%20food%20menu%20and%20prices." 
              target="_blank"
              className="flex items-center gap-2 bg-green-800 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              WhatsApp for Menu & Prices
              <FaWhatsapp className="text-xl" />
            </Link>
          </div>
        </div>
      </section>

      {/* What You Can Order Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 heading">
              What You Can Order in Bulk
            </h2>
            <p className="lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Everything is made fresh in our kitchen, packed hot, and delivered across Pune & PCMC
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bulkCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-6 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-2 pl-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="https://wa.me/919999999999?text=Hi!%20I'd%20like%20to%20see%20your%20bulk%20food%20menu%20and%20prices." 
              target="_blank"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              View Full Bulk Menu + Pricing
              <FaWhatsapp className="text-xl" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who Orders From Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 heading">
              Who Orders From Us
            </h2>
            <p className="lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Our bulk orders are perfect for all your special occasions
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl text-center hover:shadow-md transition-all">
                <div className="flex justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{useCase.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      {/* How to Order Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 heading">
        How to Order
      </h2>
      <p className="lg:text-lg text-gray-600  max-w-3xl mx-auto">
        Simple steps to get delicious food for your event
      </p>
    </div>
    
    <div className="relative">
      {/* Timeline connector */}
      <div className="hidden md:block absolute left-1/2 h-full w-1 bg-green-100 -translate-x-1/2 top-0"></div>
      
      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {[
          {
            step: "1",
            title: "Send Your Request",
            description: "WhatsApp us your menu choices and guest count",
            icon: <FaWhatsapp className="text-2xl" />
          },
          {
            step: "2",
            title: "Confirmation",
            description: "We confirm availability & delivery timeline",
            icon: <FaCalendarAlt className="text-2xl" />
          },
          {
            step: "3",
            title: "Fresh Preparation",
            description: "We cook everything fresh on your event day",
            icon: <GiRiceCooker className="text-2xl" />
          },
          {
            step: "4",
            title: "Hot Delivery",
            description: "Food arrives at your doorstep, ready to serve",
            icon: <GiMeal className="text-2xl" />
          }
        ].map((item, index) => (
          <div 
            key={index}
            className="relative group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex flex-col items-center text-center h-full">
              {/* Step indicator */}
              <div className="w-16 h-16 mb-4 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold relative z-10 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                {item.icon}
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-gray-900 font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              
              {/* Content */}
              <div className="bg-gray-50 p-6 flex flex-col justify-center items-center rounded-3xl  group-hover:shadow-md transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="mt-16 max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-3xl p-8 text-center  border-green-200 " data-aos="fade-up">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <FaPhoneAlt className="text-2xl text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Need Help Ordering?</h3>
        <p className="text-gray-700 mb-4">
          Our team is happy to guide you through menu selection and quantities based on your event type.
        </p>
        <Link 
          href="tel:+919999999999" 
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition-all"
        >
          Call Our Order Specialist
          <FaPhoneAlt className="text-lg" />
        </Link>
      </div>
      
      <div className="mt-6 bg-green-50 rounded-xl p-4 text-center border border-green-200 flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span className="text-sm text-green-800">
          Free delivery on orders ₹2,499+ | Minimum 24 hours advance notice required
        </span>
      </div>
    </div>
  </div>
</section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 heading">
            Tell us what you need. We'll make it delicious.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="https://wa.me/919999999999?text=Hi!%20I'd%20like%20to%20get%20a%20quote%20for%20a%20bulk%20order." 
              target="_blank"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              Request Menu & Quote
              <FaWhatsapp className="text-xl" />
            </Link>
            
            <Link 
              href="tel:+919999999999" 
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-200 transition-all"
            >
              Call Now for Bulk Booking
              <FaPhoneAlt className="text-xl" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}