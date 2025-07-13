'use client';
import { FaHome, FaUserGraduate, FaHeartbeat, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import { GiMeal, GiSpoon } from 'react-icons/gi';

const coverageAreas = [
  'Kothrud', 'Hinjawadi', 'Baner', 'Wakad', 'Aundh', 
  'Kharadi', 'Viman Nagar', 'Pimpri', 'Chinchwad'
];

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6 heading">
            About Satvik Spoon
          </h1>
          <p className="text-sm md:text-xl text-zinc-100 max-w-4xl mx-auto ">
            Your go-to companion for nutritious, thoughtful food - crafted fresh and delivered with care
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://assets.lummi.ai/assets/QmZdc671cMToTyfKYxssY7hm5YYsRfmQUcKqUV6JV7sgGf?auto=format&w=1500" 
                alt="Satvik Spoon Kitchen" 
                className="rounded-3xl shadow-lg object-cover w-full h-96"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 heading">
                Who We Are
              </h2>
              <p className="lg:text-lg text-gray-600 mb-4">
                Satvik Spoon is a Pune-based pure vegetarian cloud kitchen delivering balanced, home-style meals across Pune and PCMC.
              </p>
              <p className="lg:text-lg text-gray-600 mb-4">
                We specialise in three core offerings: daily meal subscriptions, salad & soup plans, and freshly prepared food in bulk for parties and gatherings.
              </p>
              <p className="lg:text-lg text-gray-600">
                Every dish we prepare is rooted in hygiene, simplicity, and nourishment, with menus that rotate daily and meal plans that adapt to your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <GiSpoon className="text-5xl text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 heading">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 ">
            "To bring clean, wholesome, and affordable vegetarian food to people who value taste, nutrition, and convenience - one spoonful at a time."
          </p>
        </div>
      </section>

      {/* Satvik Meaning Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://assets.lummi.ai/assets/QmZdc671cMToTyfKYxssY7hm5YYsRfmQUcKqUV6JV7sgGf?auto=format&w=1500" 
                alt="Satvik Food" 
               className="rounded-3xl shadow-lg object-cover w-full h-96"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 heading">
                What 'Satvik' Means to Us
              </h2>
              <p className="lg:text-lg text-gray-600 mb-4">
                In our name, 'Satvik' reflects the purity, balance, and intentionality behind the food we make.
              </p>
              <p className="lg:text-lg text-gray-600 mb-4">
                While we strive to follow a no-onion, no-garlic approach in most of our dishes, there may be occasional exceptions based on menu requirements and traditional recipes.
              </p>
              <p className="lg:text-lg text-gray-600">
                That said, every meal we serve carries the satvik spirit - clean, balanced, and freshly prepared, just like home-cooked food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 text-center heading">
            Who We Serve
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
              <FaHome className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Working Professionals</h3>
              <p className="text-gray-600">Quality meals without the mess</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
              <FaUserGraduate className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Students</h3>
              <p className="text-gray-600">Affordable, fresh food away from home</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
              <FaHeartbeat className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Health-Conscious</h3>
              <p className="text-gray-600">Exploring lighter eating (salads/soups)</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
              <FaUsers className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Families & Hosts</h3>
              <p className="text-gray-600">Planning small gatherings or poojas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Coverage Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://assets.lummi.ai/assets/QmZdc671cMToTyfKYxssY7hm5YYsRfmQUcKqUV6JV7sgGf?auto=format&w=1500" 
                alt="Delivery Coverage Areas" 
               className="rounded-3xl shadow-lg object-cover w-full h-96"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 heading">
                Delivery Coverage
              </h2>
              <p className="lg:text-lg text-gray-600 mb-6">
                We deliver to homes, hostels, apartments, and offices across Pune & PCMC including:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <FaMapMarkerAlt className="text-green-500 mr-2" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <GiMeal className="text-5xl text-white mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-bold mb-6 heading">
            A Spoonful of Wellness in Every Meal
          </h2>
          <p className="lg:text-xl text-sm mb-6">
            Satvik Spoon isn't just a meal service. It's your go-to companion for nutritious, thoughtful food - crafted fresh and delivered with care.
          </p>
        </div>
      </section>
    </div>
  );
}