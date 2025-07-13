'use client';
import Image from 'next/image';

export default function WeAreSatvik() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Chef Image and Reviewers */}
        <div className="relative w-full lg:w-1/2">
          {/* Background Box */}
          <div className="relative rounded-full bg-green-50 p-4 lg:p-8">
            <img
              src="/burger.svg"
              alt="Chef"
             
              className="mx-auto relative z-10"
            />

            {/* Floating food items (absolute positioned decor) */}
            {/* <img src="/onion.svg" alt="Onion"  className="absolute top-0 -left-12" />
            <img src="/onion.svg" alt="Leaf"  className="absolute top-2 -right-8" />
            <img src="/onion.svg" alt="Popcorn"  className="absolute -left-12 bottom-2" /> */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-white blur-lg opacity-20 rounded-t-full" />
          </div>

          {/* Reviewers box */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-xl px-4 py-3 flex items-center space-x-3 z-20">
            <p className="text-sm font-medium">Our Reviewers</p>
            <div className="flex -space-x-2">
              <img src="https://assets.lummi.ai/assets/QmSmLce3GoQex9avngEXfhfAeziq6ay9FyVnNctoBw7Spf?auto=format&w=1500" alt="User 1"  className="rounded-full w-8 h-8 border-2 border-white" />
              <img src="https://assets.lummi.ai/assets/QmSmLce3GoQex9avngEXfhfAeziq6ay9FyVnNctoBw7Spf?auto=format&w=1500" alt="User 2"  className="rounded-full w-8 h-8 border-2 border-white" />
              <img src="https://assets.lummi.ai/assets/QmSmLce3GoQex9avngEXfhfAeziq6ay9FyVnNctoBw7Spf?auto=format&w=1500" alt="User 3"  className="rounded-full w-8 h-8 border-2 border-white" />
            </div>
            <span className="bg-green-600 text-white px-2 py-1 text-xs rounded-full ml-2">12k+</span>
          </div>
        </div>

        {/* Right Side: We are Satvik Content */}
        <div className="w-full lg:w-1/2">
          <p className="uppercase text-sm text-[#ef2b48] font-semibold mb-2">About Us</p>
          <h2 className="text-3xl md:text-5xl tracking- heading font- text-gray-900 mb-6">We are Satvik</h2>
          <p className="text-gray-600 text-md lg:text-lg  mb-4">
            Satvik Spoon is a home-style cloud kitchen offering nutritious, pure vegetarian meals crafted with quality, hygiene, and balance in every bite. Whether it’s your daily tiffin, a light detox salad, or party food in KGs - we deliver freshness with convenience, right to your doorstep.
          </p>
          <p className="text-gray-600 text-md lg:text-lg">
            Our mission? To serve wholesome food that feels as comforting as home, without compromising on health, hygiene, or flavour.
          </p>
        </div>
      </div>
    </section>
  );
}