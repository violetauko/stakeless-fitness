import React from 'react';
import { Facebook, Twitter, Instagram, Globe, Linkedin } from 'lucide-react';

const TrainerProfiles = () => {
  const trainers = [
    {
      id: 1,
      name: "Shitanda",
      image: "https://images.unsplash.com/photo-1603503363848-6952525df449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBwZXJzb25hbCUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D",
      bio: "Certified personal trainer with 8+ years of experience specializing in strength training and weight management. Passionate about helping clients achieve sustainable fitness goals."
    },
    {
      id: 2,
      name: "Jane Doe", 
      image: "https://media.istockphoto.com/id/1144036339/photo/trainer-and-female-client-talking-in-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=T_lOjdL4wjCeIV0clFx3Mqd1z-lFiuwKSjZ_wp4bkko=",
      bio: "Former competitive bodybuilder turned fitness coach. Expert in muscle building, nutrition planning, and sports performance enhancement for athletes of all levels."
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      image: "https://media.istockphoto.com/id/475430856/photo/personal-trainer-training-man-with-kettle-bell.webp?a=1&b=1&s=612x612&w=0&k=20&c=DwzAeQ4MYStqjlAazgqFtUTwvNpHdgsi-maZxHNg3xQ=",
      bio: "Certified yoga instructor and flexibility specialist. Focuses on mindful movement, injury prevention, and holistic wellness approaches to fitness and health."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-0.5 bg-red-500 max-w-32"></div>
            <h2 className="text-2xl font-bold text-gray-900 mx-4">OUR TRAINERS</h2>
            <div className="flex-1 h-0.5 bg-red-500 max-w-32"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our certified fitness professionals who are dedicated to helping you reach your goals. 
            Each trainer brings unique expertise and a personalized approach to guide your fitness journey 
            with proven methods and unwavering support.
          </p>
        </div>

        {/* Trainers Grid - 3x2 with no gaps */}
        <div className="grid grid-cols-3 bg-white shadow-lg">
          {/* First trainer - Image card (top-left) */}
          <div className="bg-white h-80">
            <img
              src={trainers[0].image}
              alt={trainers[0].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* First trainer - Content card (top-center) */}
          <div className="bg-white p-8 flex flex-col justify-center h-80">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {trainers[0].name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {trainers[0].bio}
            </p>
          </div>

          {/* Second trainer - Image card (top-right) */}
          <div className="bg-white h-80">
            <img
              src={trainers[1].image}
              alt={trainers[1].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second trainer - Content card (bottom-left) */}
          <div className="bg-white p-8 flex flex-col justify-center h-80">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {trainers[1].name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {trainers[1].bio}
            </p>
            {/* Social Icons */}
           
          </div>

          {/* Third trainer - Image card (bottom-center) */}
          <div className="bg-white h-80">
            <img
              src={trainers[2].image}
              alt={trainers[2].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third trainer - Content card (bottom-right) */}
          <div className="bg-white p-8 flex flex-col justify-center h-80">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {trainers[2].name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {trainers[2].bio}
            </p>
            {/* Social Icons */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerProfiles;