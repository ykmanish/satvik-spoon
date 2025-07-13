'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaPlay, FaStar, FaPause } from 'react-icons/fa';

// Utility function for random offset
const getRandomOffset = () => {
  const maxOffset = 20; // Maximum pixel offset for randomness
  const x = (Math.random() - 0.5) * maxOffset;
  const y = (Math.random() - 0.5) * maxOffset;
  return { x, y };
};

export default function ClientTestimonials() {
  const testimonials = [
    {
      type: 'video',
      src: 'https://www.pexels.com/download/video/3195398/',
      name: 'Ritika shares her experience',
      thumbnail: 'https://images.pexels.com/videos/3195398/preview.jpeg?auto=compress&fit=crop&w=640&h=360',
      duration: '1:45',
      rating: 5,
    },
    {
      type: 'video',
      src: 'https://www.pexels.com/download/video/2795409/',
      name: 'Aakash talks about student meals',
      thumbnail: 'https://images.pexels.com/videos/2795409/preview.jpeg?auto=compress&fit=crop&w=640&h=360',
      duration: '2:10',
      rating: 5,
    },
    {
      type: 'video',
      src: 'https://www.pexels.com/download/video/3571267/',
      name: 'Rhea on healthy eating',
      thumbnail: 'https://images.pexels.com/videos/3571267/preview.jpeg?auto=compress&fit=crop&w=640&h=360',
      duration: '1:30',
      rating: 4,
    },
    {
      type: 'video',
      src: 'https://www.pexels.com/download/video/2795731/',
      name: 'Neelam reviews family order',
      thumbnail: 'https://images.pexels.com/videos/2795731/preview.jpeg?auto=compress&fit=crop&w=640&h=360',
      duration: '2:25',
      rating: 5,
    },
    {
      type: 'text',
      quote:
        "I've tried many tiffin services, but Satvik Spoon is on a different level. The food is always fresh, never too spicy or oily, and actually feels healthy. I love the monthly menu preview - helps me plan ahead. Also, pausing meals when I'm traveling is super easy!",
      author: 'Ritika G.',
      role: 'IT Analyst, Hinjawadi',
      avatar: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5,
    },
    {
      type: 'text',
      quote:
        "Being a student staying away from home, I used to miss proper meals. Satvik Spoon's college meal plan is affordable, tasty, and super filling. And the best part? It's always on time, which makes it perfect between classes and hostel life.",
      author: 'Aakash R.',
      role: 'Student, SB Patil College, Ravet',
      avatar: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5,
    },
    {
      type: 'text',
      quote:
        "I subscribed to the salad and soup plan for my evening meals and it's been a game-changer. No repeats, no shortcuts - every day is a new flavor. It keeps me on track with my fitness goals without getting bored. Absolutely love it!",
      author: 'Rhea M.',
      role: 'Yoga Instructor, Kalyani Nagar',
      avatar: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    },
    {
      type: 'text',
      quote:
        'We had a small family function at home and I ordered paneer, dal, jeera rice, and parathas in KGs from Satvik Spoon. Not only was everything packed neatly, but the taste also reminded us of shaadi-wala khana! Will definitely order again.',
      author: 'Neelam J.',
      role: 'Homemaker, Pimple Saudagar',
      avatar: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5,
    },
  ];

  const containerRef = useRef(null);

  return (
    <section
      className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      ref={containerRef}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-green-200 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-20 w-48 h-48 rounded-full bg-amber-200 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-green-600 uppercase">
            Client Voices
          </span>
          <h2 className="mt-3 text-4xl heading text-gray-900 sm:text-5xl">
            Trusted by <span className="text-green-600">Thousands</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-green-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {testimonials.map((item, idx) => {
            const { x, y } = getRandomOffset();
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                {item.type === 'video' ? (
                  <VideoTestimonialCard item={item} />
                ) : (
                  <TextTestimonialCard item={item} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VideoTestimonialCard({ item }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="group relative h-full border border-zinc-200 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-video">
        {/* Video element acting as both player and thumbnail */}
        <video
          ref={videoRef}
          src={item.src}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loop
          onClick={togglePlay}
          // poster={item.thumbnail} // Uncomment if you want to use a specific poster image; otherwise, first frame is used
        />

        {/* Overlay with play button - shown when video is not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/40">
            <button
              onClick={togglePlay}
              className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 focus:outline-none"
              aria-label="Play video"
            >
              <FaPlay className="text-white text-lg ml-1" />
            </button>
          </div>
        )}

        {/* Show pause button when video is playing */}
        {isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute top-3 left-3 bg-black/50 text-white p-2 rounded-full focus:outline-none"
            aria-label="Pause video"
          >
            <FaPause className="text-lg" />
          </button>
        )}

        {/* Video duration */}
        <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {item.duration}
        </span>
      </div>

      <div className="bg-white p-5">
        <h3 className="font-semibold text-gray-800 line-clamp-2">{item.name}</h3>
        <div className="flex mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-4 h-4 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TextTestimonialCard({ item }) {
  return (
    <div className="h-full bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col">
      <div className="flex-grow">
        <FaQuoteLeft className="text-green-400 text-xl mb-4 opacity-80" />
        <p className="text-gray-600 mb-6">{item.quote}</p>
      </div>

      <div className="flex items-center mt-auto">
        <img
          src={item.avatar}
          alt={item.author}
          className="w-12 h-12 rounded-full object-cover border-2 border-green-100 mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{item.author}</h4>
          <p className="text-sm text-gray-500">{item.role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-3 h-3 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}