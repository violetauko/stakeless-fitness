import React from 'react';
import { Star, User, Heart, Trophy, Zap, Target } from 'lucide-react';
import Image from 'next/image';

const ReviewsPage = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing transformation journey with personalized guidance",
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Professional trainers who truly care about your progress",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      name: "Emma Davis",
      rating: 5,
      text: "Innovative workouts that keep me motivated every session",
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Alex Rodriguez",
      rating: 5,
      text: "Results-focused approach with sustainable lifestyle changes",
      icon: <Target className="w-6 h-6" />
    },
    {
      name: "Lisa Thompson",
      rating: 5,
      text: "Supportive community atmosphere that feels like family",
      icon: <User className="w-6 h-6" />
    },
    {
      name: "David Wilson",
      rating: 5,
      text: "Flexible scheduling that fits perfectly into my busy lifestyle",
      icon: <Heart className="w-6 h-6" />
    },

    {
      name: "Alex Rodriguez",
      rating: 5,
      text: "Results-focused approach with sustainable lifestyle changes",
      icon: <Target className="w-6 h-6" />
    },
    {
      name: "Lisa Thompson",
      rating: 5,
      text: "Supportive community atmosphere that feels like family",
      icon: <User className="w-6 h-6" />
    }
  ];

  const leftReviews = reviews.slice(0, 4);
  const rightReviews = reviews.slice(4, 8);

  return (
    <div id='reviews' className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-0.5 bg-red-500 max-w-32"></div>
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mx-4">WHAT OUR MEMBERS SAY</h2>
            <div className="flex-1 h-0.5 bg-red-500 max-w-32"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm test-lg">
           Real stories from real people who transformed their lives with Stackless Fitness
          </p>
        </div>

        {/* Main Content */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Left Side Reviews - Curved Positioning */}
          <div className="hidden lg:block absolute">
            {leftReviews.map((review, index) => {
              const angle = 135 + (index * 30); // 135°, 165°, 195° (only left side)
              const radius = 380; // Distance from center (increased from 320)
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <div 
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-500 hover:scale-110 hover:z-20"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <div className="flex items-center space-x-3 w-64 bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white border border-white/30">
                    <div className="text-right flex-1 pr-2">
                      <h3 className="font-semibold text-gray-800 text-xs md:text-sm mb-1 group-hover:text-red-700 transition-colors leading-tight">
                        {review.name}
                      </h3>
                      <p className="text-gray-600 text-[10px] md:text-xs mb-2 group-hover:text-gray-700 transition-colors leading-snug">
                        {review.text}
                      </p>
                      <div className="flex justify-end space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform" />
                        ))}
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-500 flex-shrink-0">
                      <div className="w-4 h-4">
                        {review.icon}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side Reviews - Curved Positioning */}
          <div className="hidden lg:block absolute">
            {rightReviews.map((review, index) => {
              const angle = 45 - (index * 30); // 45°, 15°, -15° (only right side)
              const radius = 380; // Distance from center (increased from 320)
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <div 
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-500 hover:scale-110 hover:z-20"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <div className="flex items-center space-x-3 w-64 bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white border border-white/30">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-500 flex-shrink-0">
                      <div className="w-4 h-4">
                        {review.icon}
                      </div>
                    </div>
                    <div className="flex-1 pl-2">
                      <h3 className="font-semibold text-gray-800 md:text-sm text-xs mb-1 group-hover:text-red-700 transition-colors leading-tight">
                        {review.name}
                      </h3>
                      <p className="text-gray-600 md:text-sm text-xs mb-2 group-hover:text-gray-700 transition-colors leading-snug">
                        {review.text}
                      </p>
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Image */}
          <div className="relative z-10">
            <div className="w-60 h-60 md:w-96 md:h-96 relative group">
              <Image
                src="https://thumbs.dreamstime.com/b/congratulations-phrase-well-done-encouragement-motivation-message-successful-accomplishment-well-done-congratulations-phrase-118073231.jpg?w=768"
                alt="Fitness Success"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent rounded-full"></div>
              
              {/* Floating particles effect */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-400 rounded-full opacity-60 animate-ping"></div>
              <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-pink-400 rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute top-1/4 -right-8 w-4 h-4 bg-yellow-400 rounded-full opacity-50 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Mobile Reviews Grid */}
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-4 h-4 md:w-8 md:h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {review.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-red-700 transition-colors md:text-sm text-xs">{review.name}</h3>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors md:text-sm text-xs">{review.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-1xl md:text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto md:text-sm text-xs">
            Join the many of satisfied members who have transformed their lives with our personalized fitness programs.
          </p>
              <button><a
                href="https://wa.me/254725023276?text=Hi%20Trainer!%20I%E2%80%99d%20like%20to%20book%20a%20training%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white md:px-8 md:py-4 px-4 py-2 md:text-sm text-xs rounded-full font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book a Session
              </a></button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;