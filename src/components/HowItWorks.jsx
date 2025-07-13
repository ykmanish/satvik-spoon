import { FaDownload, FaUserPlus, FaUtensils, FaPauseCircle, FaTruck } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Download Satvik Spoon App',
    desc: 'Powered by Rekart, available on iOS and Android.',
    icon: <FaDownload size={35} />,
  },
  {
    id: 2,
    title: 'Create Your Account',
    desc: 'Sign up quickly to start exploring meal plans.',
    icon: <FaUserPlus size={35} />,
  },
  {
    id: 3,
    title: 'Choose Plan & Subscribe',
    desc: 'Daily meals, salad combos, or both.',
    icon: <FaUtensils size={35} />,
  },
  {
    id: 4,
    title: 'Pause If Needed',
    desc: 'Skip a day or carry forward unused meals.',
    icon: <FaPauseCircle size={35} />,
  },
  {
    id: 5,
    title: 'Receive Fresh Meals Daily',
    desc: 'Delivered across Pune & PCMC with care.',
    icon: <FaTruck size={35} />,
  },
];

export default function HowWeWork() {
  const backgroundImage = {
    backgroundImage: 'url("/servbg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section 
      style={backgroundImage}
      className="bg-[#ED274B]  py-24 text-white"
    >
      <div className="text-center">
        <h3 className="text-sm tracking-wide uppercase font-bold mb-2">Simple Process in 5 Steps</h3>
        <h2 className="lg:text-5xl text-3xl heading mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 gap-6  px-4">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="flex bg-white rounded-3xl border border-zinc-300 flex-col  w-full  h-64  items-center  text-black p-6 hover:scale-105  transition-transform duration-300"
              style={{
                transform: `translateY(${index % 2 === 0 ? '0' : '0px'})`, // Alternates vertical offset
              }}
            >
              <div className="border border-zinc-300 text-black w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold mb-4">
                {step.id}
              </div>
              <div className="mb-4 text-[#05DF72]">{step.icon}</div>
              <h4 className="text-xl  font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-center">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}