import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const categories = [
  { label: 'Burger', icon: '🍔' },
  { label: 'Pizza', icon: '🍕' },
  { label: 'Cupcake', icon: '🧁' },
  { label: 'Ramen', icon: '🍜' },
  { label: 'Ice Cream', icon: '🍦' },
  { label: 'Daily Meal Subscriptions', icon: '🥗' },
  { label: 'Salad & Soup Subscription', icon: '🥣' },
  { label: 'Bulk Orders for Parties & Events', icon: '🎉' },
];

const sampleCards = [
  { title: 'Meal 1', price: '₹99', image: '/meal1.jpg' },
  { title: 'Meal 2', price: '₹119', image: '/meal2.jpg' },
  { title: 'Meal 3', price: '₹139', image: '/meal3.jpg' },
  { title: 'Meal 4', price: '₹159', image: '/meal4.jpg' },
  { title: 'Meal 5', price: '₹179', image: '/meal5.jpg' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Pizza');
  const cardContainerRef = useRef();

  useEffect(() => {
    if (cardContainerRef.current) {
      gsap.fromTo(
        cardContainerRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeCategory]);

  const renderCards = () => {
    if (
      activeCategory === 'Daily Meal Subscriptions' ||
      activeCategory === 'Salad & Soup Subscription'
    ) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sampleCards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl overflow-hidden p-4"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-red-500 font-bold">{card.price}</p>
              <button className="mt-2 text-sm text-blue-600">Order Now →</button>
            </div>
          ))}
        </div>
      );
    }

    if (activeCategory === 'Bulk Orders for Parties & Events') {
      return (
        <div className="flex items-center justify-center h-64">
          <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-red-700">
            Contact Us
          </button>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg p-4">
          <img
            src="/burger.jpg"
            alt="Italian Pizza"
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h2 className="text-lg font-semibold">Italian Pizza</h2>
          <p className="text-yellow-500 font-bold">$7.49</p>
          <button className="mt-2 text-sm text-blue-600">Order Now →</button>
        </div>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg p-4">
          <img
            src="/pasta.jpg"
            alt="Sausage Pizza"
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h2 className="text-lg font-semibold">Sausage Pizza</h2>
          <p className="text-yellow-500 font-bold">$6.59</p>
          <button className="mt-2 text-sm text-blue-600">Order Now →</button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex bg-gray-50 p-6">
      <aside className="w-64 pr-6 border-r border-gray-200">
        <h3 className="text-sm text-red-600 uppercase font-bold mb-2">Our Menu</h3>
        <h1 className="text-2xl font-extrabold text-gray-900 leading-tight mb-6">
          Menu That Always<br />
          Makes You Fall In Love
        </h1>
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category.label}>
              <button
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-full text-left transition-all duration-200 ${
                  activeCategory === category.label
                    ? 'bg-red-500 text-white shadow-md'
                    : 'hover:bg-gray-100 text-black'
                }`}
                onClick={() => setActiveCategory(category.label)}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 pl-6">
        <div ref={cardContainerRef}>{renderCards()}</div>
      </main>
    </div>
  );
}
