import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-10 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-1xl md:text-3xl lg:text-4xl font-bold mb-2">500+</div>
            <div className="text-red-400 text-sm md:text-2xl lg:text-2xl">Happy Clients</div>
          </div>
          <div>
            <div className="text-1xl md:text-3xl lg:text-4xl font-bold mb-2">10+</div>
            <div className="text-red-400 text-sm md:text-2xl lg:text-2xl">Years of Experience</div>
          </div>
          <div>
            <div className="text-1xl md:text-3xl lg:text-4xl font-bold mb-2">50+</div>
            <div className="text-red-400 text-sm md:text-2xl lg:text-2xl">Workouts</div>
          </div>
          <div>
            <div className="text-1xl md:text-3xl lg:text-4xl font-bold mb-2">98%</div>
            <div className="text-red-400 text-sm md:text-2xl lg:text-2xl">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;


