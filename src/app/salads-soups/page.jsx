'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaArrowRight, FaPauseCircle, FaLeaf, FaUtensils } from 'react-icons/fa';
import { GiBowlOfRice } from 'react-icons/gi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const weeklyMenu = [
  { day: 'Monday', salad: 'Corn Millet Salad', soup: 'Carrot Pumpkin Soup' },
  { day: 'Tuesday', salad: 'Herb Paneer Salad', soup: 'Barley Soup' },
  { day: 'Wednesday', salad: 'Mexican Beans Salad', soup: 'Zucchini Soup' },
  { day: 'Thursday', salad: 'Sprout Chaat Salad', soup: 'Moringa Soup' },
  { day: 'Friday', salad: 'Falafel Salad', soup: 'Mixed Veg Soup' },
];

const benefits = [
  {
    title: 'Ideal for light dinners or lunch sides',
    icon: <FaUtensils className="text-3xl text-green-600" />,
  },
  {
    title: 'Daily freshness, zero repeat boredom',
    icon: <FaLeaf className="text-3xl text-green-600" />,
  },
  {
    title: 'Pause or resume anytime',
    icon: <FaPauseCircle className="text-3xl text-green-600" />,
  },
  {
    title: 'Doorstep delivery, hygienically packed',
    icon: <GiBowlOfRice className="text-3xl text-green-600" />,
  },
  {
    title: 'Full menu shared in advance each month',
    icon: <FaLeaf className="text-3xl text-green-600" />,
  },
];

export default function SaladsAndSoupsPage() {
  const heroRef = useRef(null);
  const includedRef = useRef(null);
  const menuRef = useRef(null);
  const pauseRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: heroRef.current, start: 'top 80%' },
      }
    );

    // What's Included Section Animation
    gsap.fromTo(
      includedRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: includedRef.current, start: 'top 80%' },
      }
    );

    // Sample Menu Animation
    gsap.fromTo(
      menuRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: menuRef.current, start: 'top 80%' },
      }
    );

    // Pause Flexibility Animation
    gsap.fromTo(
      pauseRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: pauseRef.current, start: 'top 80%' },
      }
    );

    // Benefits Section Animation
    gsap.fromTo(
      benefitsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: benefitsRef.current, start: 'top 80%' },
      }
    );

    // Final CTA Animation
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' },
      }
    );

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-green-600"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-6 heading">
            Fresh, Light and Packed with Nutrition
          </h1>
          <p className="text-sm md:text-lg text-zinc-100 max-w-5xl mx-auto leading-relaxed mb-10">
            Our salad and soup combos are perfect for those who want to eat clean, stay fit, or simply enjoy a lighter dinner without compromise. With new combinations every day and monthly pre-planned menus.
          </p>

          <div className="flex flex-wrap justify-center gap-4 ">
            <Link
              href="https://wa.me/919999999999?text=I'd%20like%20to%20try%20a%20salad%20%26%20soup%20combo%20for%20₹199"
              target="_blank"
              className="flex items-center gap-2 bg-green-800 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all group"
            >
              Try a Trial Combo – ₹199
              <FaWhatsapp className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="https://wa.me/919999999999?text=Hi%20I%20want%20to%20check%20the%20Salad%20%26%20Soup%20Menu"
              target="_blank"
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-200 transition-all group"
            >
              Ask for Monthly Menu
              <FaWhatsapp className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="https://play.google.com/store/apps/details?id=com.rekart.consumer"
              target="_blank"
              className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-all group"
            >
              Subscribe Now
              <FaArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section ref={includedRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 heading">
              What's Included?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each daily meal includes a fresh salad and soup combination
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-green-50 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <FaLeaf className="text-4xl text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Fresh Salad</h3>
              </div>
              <p className="text-gray-600 mb-4">Could be protein-rich, millet-based, leafy, or seasonal - always fresh and crisp</p>
              <ul className="space-y-2 ">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Protein options: Paneer, sprouts, beans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Grain options: Quinoa, millet, barley</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Seasonal fresh vegetables</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <GiBowlOfRice className="text-4xl text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">Hearty Soup</h3>
              </div>
              <p className="text-gray-600 mb-4">Hot, freshly made, ranging from classic Indian to global flavors</p>
              <ul className="space-y-2 ">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Comforting Indian: Tomato shorba, lentil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>International: Minestrone, cream of mushroom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Seasonal specials</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <li className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold">All vegetarian</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold">Rotational menu</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold">Packed fresh</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold">Pune & PCMC delivery</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sample Menu Section */}
      <section ref={menuRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 heading">
              Sample Weekly Snapshot
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here's an example of how our salads and soups rotate through the week
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto mb-12">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Day</th>
                  <th className="py-3 px-4 text-left">Salad</th>
                  <th className="py-3 px-4 text-left">Soup</th>
                </tr>
              </thead>
              <tbody>
                {weeklyMenu.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="py-3 px-4 font-medium">{item.day}</td>
                    <td className="py-3 px-4">{item.salad}</td>
                    <td className="py-3 px-4">{item.soup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <Link
              href="https://wa.me/919999999999?text=Hi%20I%20want%20to%20check%20the%20Salad%20%26%20Soup%20Menu"
              target="_blank"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all group"
            >
              View Full Monthly Menu
              <FaWhatsapp className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pause Flexibility Section */}
      <section ref={pauseRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
                    Going out or on a break?
                  </h2>
                  <p className="text-md md:text-xl mb-6 max-w-3xl">
                    Just like our meal subscriptions, you can pause your salad + soup plan any time by notifying us before 10 PM the previous day. No wastage. No stress.
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

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 heading">
              Why Choose This Plan?
            </h2>
            <p className=" lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Clean, simple, and satisfying - the perfect addition to your healthy lifestyle
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl  hover:shadow-md transition-all border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <h3 className="lg:text-lg font-bold text-gray-900">{benefit.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 heading">
            Get started with our salad & soup subscription
          </h2>
          <p className="lg:text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Clean, simple, and satisfying - delivered fresh to your doorstep daily
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://wa.me/919999999999?text=I'd%20like%20to%20try%20a%20salad%20%26%20soup%20combo%20for%20₹199"
              target="_blank"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all group"
            >
              Try a Trial – ₹199
              <FaWhatsapp className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="https://wa.me/919999999999?text=Hi%20I%20want%20to%20check%20the%20Salad%20%26%20Soup%20Menu"
              target="_blank"
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-200 transition-all group"
            >
              Ask for Menu
              <FaWhatsapp className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="https://play.google.com/store/apps/details?id=com.rekart.consumer"
              target="_blank"
              className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-all group"
            >
              Subscribe Now
              <FaArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}