'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaClock,
  FaSmile,
  FaLeaf,
  FaShieldAlt,
  FaBoxOpen,
  FaCalendarAlt,
  FaPauseCircle,
  FaTruck,
} from 'react-icons/fa';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const stats = [
  { id: 1, value: '5+', desc: 'Years of Trusted Service', icon: FaClock },
  { id: 2, value: '8000+', desc: 'Happy Customers', icon: FaSmile },
  { id: 3, value: '100%', desc: 'Pure Vegetarian Kitchen', icon: FaLeaf },
  { id: 4, value: '90%+', desc: 'Customers Who Reorder', icon: FaShieldAlt },
  { id: 5, value: 'Hygienic', desc: 'Prepared Fresh. Packed Safe', icon: FaBoxOpen },
  { id: 6, value: 'Monthly', desc: 'Pre-Planned Menu', icon: FaCalendarAlt },
  { id: 7, value: 'Flexible', desc: 'Option to Pause Subscription', icon: FaPauseCircle },
  { id: 8, value: 'On-Time', desc: 'Daily Deliveries', icon: FaTruck },
];

export default function SatvikStats() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const counterRefs = useRef([]);

  useEffect(() => {
    // Animate cards on load with stagger
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Counter animation for numerical stats
    counterRefs.current.forEach((el, index) => {
      const value = parseInt(stats[index].value.replace(/[^0-9]/g, ''));
      if (!isNaN(value)) {
        gsap.fromTo(
          el,
          { text: 0 },
          {
            text: value,
            duration: 2,
            ease: 'power2.out',
            snap: { text: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  const backgroundImage = {
    backgroundImage: 'url("/lvbg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <section
      ref={sectionRef}
      // style={backgroundImage}
      className="relative bg-gradient-to-b from-[#008A2F] to-[#000000] text-white py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase text-sm font-semibold text-zinc-300 mb-2">Why Choose Us</p>
          <h2 className="text-2xl md:text-5xl heading  text-white mb-4">
            What Makes Satvik Spoon a Preferred<br className='hidden lg:block'/> Choice Across Pune and PCMC?
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className=" bg-black/40  backdrop-blur-3xl p-6 rounded-3xl text-center  transition-all duration-300 hover:scale-105   border-zinc-700"
              aria-label={stat.desc}
            >
              <div className="w-12 flex  justify-center items-center h-12 mx-auto mb-4 text-3xl sm:text-4xl text-green-400">
                <stat.icon />
              </div>
              <h3
                ref={(el) => (counterRefs.current[index] = el)}
                className="text-xl sm:text-3xl gsans font-bold text-white mb-2"
              >
                {stat.value}
              </h3>
              <p className="text-sm sm:text-base text-zinc-100 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}