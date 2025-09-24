import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-xl text-gray-600 mb-8">
          Get the latest fitness tips, workout routines, and nutrition advice delivered to your inbox.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button className="bg-gradient-to-r from-green-500 to-yellow-500 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;


