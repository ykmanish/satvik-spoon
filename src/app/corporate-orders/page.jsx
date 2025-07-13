'use client';
import Link from 'next/link';
import { FaWhatsapp, FaPhoneAlt, FaDownload, FaCalendarAlt, FaUtensils, FaClipboardCheck, FaUsers, FaRegHandshake } from 'react-icons/fa';
import { GiRiceCooker, GiMeal, GiOfficeChair } from 'react-icons/gi';
import { MdOutlineEventAvailable, MdHealthAndSafety } from 'react-icons/md';
import { BiSolidBusiness } from 'react-icons/bi';

const corporateOfferings = [
  {
    title: 'Recurring Meal Plans',
    description: 'Customizable lunch/dinner delivery for your team',
    icon: <FaCalendarAlt className="text-4xl text-green-600" />
  },
  {
    title: 'Wellness Combos',
    description: 'Salad + soup combos for health-conscious employees',
    icon: <FaUtensils className="text-4xl text-green-600" />
  },
  {
    title: 'Event Catering',
    description: 'Bulk meals for townhalls, celebrations & gatherings',
    icon: <MdOutlineEventAvailable className="text-4xl text-green-600" />
  },
  {
    title: 'Trial Programs',
    description: 'Tasting kits or trial days for decision-makers',
    icon: <FaClipboardCheck className="text-4xl text-green-600" />
  }
];

const benefits = [
  {
    title: 'Pure Vegetarian Quality',
    description: 'Professional kitchen with strict hygiene standards',
    icon: <GiMeal className="text-3xl text-green-600" />
  },
  {
    title: 'Reliable Delivery',
    description: 'Daily service across Pune & PCMC zones',
    icon: <FaClipboardCheck className="text-3xl text-green-600" />
  },
  {
    title: 'Flexible Plans',
    description: 'Option to pause/change quantity anytime',
    icon: <FaRegHandshake className="text-3xl text-green-600" />
  },
  {
    title: 'Dedicated Support',
    description: 'Coordination & logistics assistance',
    icon: <FaUsers className="text-3xl text-green-600" />
  },
  {
    title: 'GST Billing',
    description: 'Proper documentation for your accounts',
    icon: <BiSolidBusiness className="text-3xl text-green-600" />
  },
  {
    title: 'Scalable Solutions',
    description: 'From 10-person startups to 100+ member teams',
    icon: <GiOfficeChair className="text-3xl text-green-600" />
  }
];

const workplaceTypes = [
  {
    title: 'Startups & Tech Companies',
    icon: <BiSolidBusiness className="text-3xl text-green-600" />
  },
  {
    title: 'Educational Institutes',
    icon: <FaUsers className="text-3xl text-green-600" />
  },
  {
    title: 'Healthcare Facilities',
    icon: <MdHealthAndSafety className="text-3xl text-green-600" />
  },
  {
    title: 'Co-working Spaces',
    icon: <GiOfficeChair className="text-3xl text-green-600" />
  }
];

export default function CorporateOrdersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-6 heading">
              For Teams That Deserve Better Than Canteen Food
            </h1>
            <p className="text-sm md:text-xl text-zinc-100 max-w-4xl mx-auto leading-relaxed">
              Simple & Tasty home-style, vegetarian meals and bulk food solutions - trusted by working professionals across Pune & PCMC.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/corporate-menu.pdf" 
              download
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-200 transition-all"
            >
              Download Corporate Menu
              <FaDownload className="text-xl" />
            </Link>
            
            <Link 
              href="https://wa.me/919999999999?text=Hi!%20I'm%20interested%20in%20corporate%20meal%20solutions%20for%20our%20team." 
              target="_blank"
              className="flex items-center gap-2 bg-green-800 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              WhatsApp Corporate Team
              <FaWhatsapp className="text-xl" />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 heading">
              What We Offer to Corporates
            </h2>
            <p className="lg:text-lg text-gray-600 max-w-3xl mx-auto">
              We work with HRs, Admins, Founders, and Facility Managers to simplify team meal solutions - whether it's a one-time event or a long-term meal program.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateOfferings.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-6 hover:shadow-md transition-all">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{item.title}</h3>
                <p className="text-gray-700 text-center text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 heading">
              Why Corporates Choose Satvik Spoon
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl hover:shadow-md transition-all">
                <div className="flex flex-col  gap-4 mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-700 ">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-green-50 rounded-xl p-6 text-center border border-green-200 max-w-4xl mx-auto">
            <p className="text-lg text-gray-800">
              Whether you're a 10-person startup or 100+ member team, we adapt to your rhythm and needs.
            </p>
          </div>
        </div>
      </section>

      {/* Workplace Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 heading">
              Made for Every Kind of Workplace & Occasion
            </h2>
            <p className="lg:text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with organizations of all sizes - from startups and educational institutes to healthcare setups, event organizers, and more.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workplaceTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-3xl text-center hover:shadow-md transition-all">
                <div className="flex justify-center mb-4">
                  {type.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{type.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-gray-700">
              Whether you're hosting a one-time event or looking for a reliable daily meal partner, we'll tailor the food and the service to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 heading">
              Corporate Enquiry Form
            </h2>
            <p className="lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Want to explore meal solutions for your team or upcoming event? We'd be happy to help.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input type="text" id="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                  <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                  <input type="text" id="designation" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                  <label htmlFor="inquiry-type" className="block text-sm font-medium text-gray-700 mb-1">Type of Inquiry</label>
                  <select id="inquiry-type" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">
                    <option value="">Select</option>
                    <option value="ongoing">Ongoing Meal Program</option>
                    <option value="event">Event Catering</option>
                    <option value="one-time">One-time Delivery</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="headcount" className="block text-sm font-medium text-gray-700 mb-1">Approx. Headcount</label>
                  <input type="number" id="headcount" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                  <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Days/Time</label>
                  <input type="text" id="preferred-time" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="e.g. Mon-Fri, 12:30-1:30 PM" />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Special Request</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"></textarea>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button type="submit" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all">
                  Submit Enquiry
                </button>
                
                <Link 
                  href="https://wa.me/919999999999?text=Hi!%20I'm%20interested%20in%20corporate%20meal%20solutions%20for%20our%20team." 
                  target="_blank"
                  className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-200 transition-all"
                >
                  Chat on WhatsApp
                  <FaWhatsapp className="text-xl text-green-600" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 heading">
            Tired of cafeteria food complaints or overpriced caterers?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Switch to Satvik Spoon - Pune's trusted partner in clean, consistent, vegetarian food delivery.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="tel:+919999999999" 
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              Call Corporate Team
              <FaPhoneAlt className="text-xl" />
            </Link>
            
            <Link 
              href="/corporate-solutions" 
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-200 transition-all"
            >
              Learn About Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}