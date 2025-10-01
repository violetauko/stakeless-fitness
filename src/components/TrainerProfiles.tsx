import Image from 'next/image';
import React from 'react';

const TrainerProfiles = () => {
  const trainers = [
    {
      id: 1,
      name: "Shitanda",
      image: "/images/img1.jpeg",
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
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50" id='trainers'>
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-4">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="flex-1 h-0.5 bg-red-500 max-w-16 sm:max-w-24 md:max-w-32"></div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mx-2 sm:mx-4 whitespace-nowrap">OUR TRAINERS</h2>
            <div className="flex-1 h-0.5 bg-red-500 max-w-16 sm:max-w-24 md:max-w-32"></div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Meet our certified fitness professionals who are dedicated to helping you reach your goals. 
            Each trainer brings unique expertise and a personalized approach to guide your fitness journey 
            with proven methods and unwavering support.
          </p>
        </div>

        {/* Mobile Layout - Stacked Cards */}
        <div className="block md:hidden space-y-4">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-48 sm:h-56">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {trainer.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {trainer.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - Alternating Grid */}
        <div className="hidden md:block bg-white shadow-lg">
          {/* First trainer - Image left, content right */}
          <div className="grid grid-cols-2">
            <div className="h-64 lg:h-80">
              <Image
                src={trainers[0].image}
                alt={trainers[0].name}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                {trainers[0].name}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                {trainers[0].bio}
              </p>
            </div>
          </div>

          {/* Second trainer - Content left, image right */}
          <div className="grid grid-cols-2">
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                {trainers[1].name}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                {trainers[1].bio}
              </p>
            </div>
            <div className="h-64 lg:h-80">
              <Image
                src={trainers[1].image}
                alt={trainers[1].name}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Third trainer - Image left, content right */}
          <div className="grid grid-cols-2">
            <div className="h-64 lg:h-80">
              <Image
                src={trainers[2].image}
                alt={trainers[2].name}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                {trainers[2].name}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                {trainers[2].bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerProfiles;