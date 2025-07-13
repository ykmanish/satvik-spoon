import Image from 'next/image';

export default function Working() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <p className="text-green-600 font-semibold mb-2">How To Work</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        From <span className="text-green-600">Order to Doorstep</span> in 20 Minutes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative max-w-7xl mx-auto">
        {/* Dashed Curve Line for large screens */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-0">
          <svg viewBox="0 0 1000 100" className="w-full h-24">
            <path
              d="M0,60 C250,0 750,120 1000,60"
              stroke="#00C853"
              strokeDasharray="6,6"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Step 1 - Choose */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src="https://assets.lummi.ai/assets/QmQH9hvR4UVbvmrx1YdiPKiF4ncJ89tsNUWXAYJzreByWj?auto=format&w=1500" // Replace with your actual path
            alt="Choose"
            
            className="mx-auto"
          />
          <h3 className="text-lg font-bold">CHOOSE</h3>
          <p className="text-gray-600 max-w-xs">
            Explore a diverse menu curated for your tastes and dietary needs. Select your
            favorites with ease and place order
          </p>
        </div>

        {/* Step 2 - Prepare */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src="https://assets.lummi.ai/assets/QmQH9hvR4UVbvmrx1YdiPKiF4ncJ89tsNUWXAYJzreByWj?auto=format&w=1500" // Replace with your actual path
            alt="Choose"
            
            className="mx-auto"
          />
          <h3 className="text-lg font-bold">PREPARE FOOD</h3>
          <p className="text-gray-600 max-w-xs">
            Our culinary artisans spring into action, crafting each dish with meticulous care and
            the freshest ingredients
          </p>
        </div>

        {/* Step 3 - Deliver */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src="https://assets.lummi.ai/assets/QmQH9hvR4UVbvmrx1YdiPKiF4ncJ89tsNUWXAYJzreByWj?auto=format&w=1500" // Replace with your actual path
            alt="Choose"
            
            className="mx-auto"
          />
          <h3 className="text-lg font-bold">DELIVER</h3>
          <p className="text-gray-600 max-w-xs">
            Sit back and relax as our dedicated team orchestrates a seamless delivery
            experience. Ready to be savored and enjoyed!
          </p>
        </div>
      </div>
    </section>
  );
}
