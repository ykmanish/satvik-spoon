'use client';
import Image from 'next/image';

export default function CtaCard() {
  return (
    <div className=" flex items-center justify-center bg-[#ffffff] px-2 py-24">
      <div className="flex flex-col md:flex-row max-w-7xl py-10 bg-[#008A2F]/30 w-full rounded-[35px] shadow-md overflow-hidden">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center p-4 lg:p-8 space-y-6">
          <p className="text-green-700 font-semibold">DOWNLOAD APP</p>
          <h1 className="lg:text-5xl text-3xl heading text-gray-800">
            Get Started With <span className="text-green-600">Fresh Feast</span> Today!
          </h1>
          <p className="text-gray-600 text-md lg:text-xl">
            Discover food wherever and whenever and get your food delivered quickly.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold w-fit hover:bg-green-700">
            Get The App
          </button>

          {/* Delivery Status */}
          <div className="bg-white px-4 py-2 rounded-xl flex items-center gap-4 shadow-md w-fit">
            <div className="bg-green-600 text-white text-sm px-3 py-1 rounded-lg">
              Your Food Has Arrived
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <div>
                <p className="text-sm font-medium">Richard Watson</p>
                <p className="text-xs text-gray-500">Food Courier</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Rounded Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 lg:p-8">
          <img
            src="https://assets.lummi.ai/assets/QmQH9hvR4UVbvmrx1YdiPKiF4ncJ89tsNUWXAYJzreByWj?auto=format&w=1500" // Replace with your actual image path
            alt="Fresh Feast App Preview"
           
            className="rounded-full shadow-xl lg:h-96 lg:w-96 object-cover" // Added object-cover for better image fit
            priority // Optional: for faster loading if image is above the fold
          />
        </div>
      </div>
    </div>
  );
}