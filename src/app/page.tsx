"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Star, Users, Trophy, Heart, Dumbbell, User, ChevronRight, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

const StacklessFitness = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      id: 1,
      title: "Online Classes",
      description: "Live and on-demand fitness classes from expert trainers",
      icon: <Play className="w-6 h-6" />,
      color: "bg-gradient-to-r from-green-500 to-yellow-500",
      features: ["Live Sessions", "On-Demand Library", "Group Workouts"]
    },
    {
      id: 2,
      title: "Weight Loss Management",
      description: "Comprehensive weight management with tracking and support",
      icon: <Trophy className="w-6 h-6" />,
      color: "bg-gradient-to-r from-yellow-500 to-green-500",
      features: ["Custom Plans", "Progress Tracking", "Meal Planning"]
    },
    {
      id: 3,
      title: "Personal Training",
      description: "One-on-one sessions with certified personal trainers",
      icon: <User className="w-6 h-6" />,
      color: "bg-gradient-to-r from-green-600 to-yellow-600",
      features: ["1:1 Sessions", "Custom Workouts", "Goal Setting"]
    },
    {
      id: 4,
      title: "Nutrition & Health",
      description: "Expert nutrition guidance and meal planning services",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-gradient-to-r from-yellow-600 to-green-600",
      features: ["Meal Plans", "Nutrition Coaching", "Health Resources"]
    },
    {
      id: 5,
      title: "Rehabilitation & Training",
      description: "Specialized recovery and rehabilitation programs",
      icon: <Dumbbell className="w-6 h-6" />,
      color: "bg-gradient-to-r from-green-500 to-yellow-400",
      features: ["Recovery Programs", "Injury Prevention", "Physical Therapy"]
    }
  ];

  const trainers = [
    {
      id: 1,
      name: "Sarah Mitchell",
      specialty: "Weight Loss & Strength Training",
      rating: 4.9,
      sessions: 250,
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=300&fit=crop&crop=face",
      bio: "Certified personal trainer with 8+ years helping clients achieve their fitness goals."
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      specialty: "Bodybuilding & Nutrition",
      rating: 4.8,
      sessions: 180,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face",
      bio: "Former competitive bodybuilder specializing in muscle building and nutrition."
    },
    {
      id: 3,
      name: "Emma Thompson",
      specialty: "Yoga & Flexibility",
      rating: 5.0,
      sessions: 320,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Certified yoga instructor focusing on flexibility and mindful movement."
    }
  ];

  const workoutCategories = [
    { name: "Strength Training", count: 45, icon: "💪" },
    { name: "Cardio", count: 32, icon: "🏃‍♀️" },
    { name: "Yoga", count: 28, icon: "🧘‍♀️" },
    { name: "HIIT", count: 24, icon: "⚡" },
    { name: "Flexibility", count: 18, icon: "🤸‍♀️" },
    { name: "Recovery", count: 15, icon: "💆‍♀️" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1">
                <Image 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDIwMCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTAgMTBDNzAuNDMgMTAgODcgMjYuNTcgODcgNDdWMTEzQzg3IDEzMy40MyA3MC40MyAxNTAgNTAgMTUwQzI5LjU3IDE1MCAxMyAxMzMuNDMgMTMgMTEzVjQ3QzEzIDI2LjU3IDI5LjU3IDEwIDUwIDEwWiIgZmlsbD0iIzJENjMzQyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MCAzMEMxNTYuNjI3IDMwIDE2MiAzNS4zNzMgMTYyIDQyQzE2MiA0OC42MjcgMTU2LjYyNyA1NCAxNTAgNTRDMTQzLjM3MyA1NCAxMzggNDguNjI3IDEzOCA0MkMxMzggMzUuMzczIDE0My4zNzMgMzAgMTUwIDMwWiIgZmlsbD0iIzJENjMzQyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MCA3MkMxNzAuNDMgNzIgMTg3IDg4LjU3IDE4NyAxMDlWMTEzQzE4NyAxMzMuNDMgMTcwLjQzIDE1MCAxNTAgMTUwQzEyOS41NyAxNTAgMTEzIDEzMy40MyAxMTMgMTEzVjEwOUMxMTMgODguNTcgMTI5LjU3IDcyIDE1MCA3MloiIGZpbGw9IiMyRDYzM0MiLz4KPHN0eWxlPgo8L3N0eWxlPgo8L3N2Zz4=" 
                  alt="Stackless Fitness Logo"
                  className="w-full h-full object-contain"
                  width={48}
                  height={48}
                />
              </div>
              <div className="ml-3">
                <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                  Stackless Fitness
                </h1>
                <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                  Get Fit Today
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`hover:text-green-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Home</a>
              <a href="#programs" className={`hover:text-green-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Programs</a>
              <a href="#trainers" className={`hover:text-green-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Trainers</a>
              <a href="#workouts" className={`hover:text-green-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Workouts</a>
              <a href="#contact" className={`hover:text-green-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Contact</a>
              <div className={`flex items-center ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">+254 725 023 276</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-green-500">Home</a>
              <a href="#programs" className="block text-gray-700 hover:text-green-500">Programs</a>
              <a href="#trainers" className="block text-gray-700 hover:text-green-500">Trainers</a>
              <a href="#workouts" className="block text-gray-700 hover:text-green-500">Workouts</a>
              <a href="#contact" className="block text-gray-700 hover:text-green-500">Contact</a>
              <div className="flex items-center text-gray-700 pt-2 border-t">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">+254 725 023 276</span>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-green-900 via-green-800 to-yellow-700">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundBlendMode: "overlay"
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get Fit Today –<br />
            <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              New Online Workout Program
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Transform your body and mind with our comprehensive fitness programs, expert trainers, and personalized nutrition plans.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Join Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Book a Trainer
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center text-white">
            <Phone className="w-5 h-5 mr-3 text-green-400" />
            <span className="text-lg">Call us now: </span>
            <span className="text-xl font-bold ml-2 text-green-400">+254 725 023 276</span>
          </div>
        </div>
      </section>

      {/* Programs & Services */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs & Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of fitness programs designed to meet your unique goals and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`${program.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    {program.icon}
                    <h3 className="text-xl font-bold ml-3">{program.title}</h3>
                  </div>
                  <p className="text-white/90">{program.description}</p>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <ChevronRight className="w-4 h-4 text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-yellow-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Profiles */}
      <section id="trainers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Trainers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Work with certified professionals who are passionate about helping you achieve your fitness goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <Image 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-64 object-cover"
                    width={400}
                    height={256}
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold">{trainer.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
                  <p className="text-green-600 font-semibold mb-3">{trainer.specialty}</p>
                  <p className="text-gray-600 mb-4">{trainer.bio}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{trainer.sessions} sessions</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-yellow-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Library */}
      <section id="workouts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Workout Library</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access hundreds of workouts across different categories, from beginner to advanced levels.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {workoutCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.count} workouts</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-green-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-lg transition-all duration-300">
              Browse All Workouts
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-200">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-green-200">Workout Videos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-green-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
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

      {/* Contact & Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDIwMCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTAgMTBDNzAuNDMgMTAgODcgMjYuNTcgODcgNDdWMTEzQzg3IDEzMy40MyA3MC40MyAxNTAgNTAgMTUwQzI5LjU3IDE1MCAxMyAxMzMuNDMgMTMgMTEzVjQ3QzEzIDI2LjU3IDI5LjU3IDEwIDUwIDEwWiIgZmlsbD0iIzJENjMzQyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MCAzMEMxNTYuNjI3IDMwIDE2MiAzNS4zNzMgMTYyIDQyQzE2MiA0OC42MjcgMTU2LjYyNyA1NCAxNTAgNTRDMTQzLjM3MyA1NCAxMzggNDguNjI3IDEzOCA0MkMxMzggMzUuMzczIDE0My4zNzMgMzAgMTUwIDMwWiIgZmlsbD0iIzJENjMzQyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MCA3MkMxNzAuNDMgNzIgMTg3IDg4LjU3IDE4NyAxMDlWMTEzQzE4NyAxMzMuNDMgMTcwLjQzIDE1MCAxNTAgMTUwQzEyOS41NyAxNTAgMTEzIDEzMy40MyAxMTMgMTEzVjEwOUMxMTMgODguNTcgMTI5LjU3IDcyIDE1MCA3MloiIGZpbGw9IiMyRDYzM0MiLz4KPHN0eWxlPgo8L3N0eWxlPgo8L3N2Zz4=" 
                    alt="Stackless Fitness Logo"
                    className="w-full h-full object-contain"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-bold">Stackless Fitness</h3>
                  <p className="text-gray-400 text-sm">Get Fit Today</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Transform your life with our comprehensive fitness programs, expert trainers, and personalized approach to health and wellness.
              </p>
              
              <div className="flex space-x-4">
                <a href="https://instagram.com/stacklessfitness" className="text-gray-400 hover:text-green-400">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://facebook.com/stacklessfitness" className="text-gray-400 hover:text-green-400">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-400 mr-3" />
                  <span>+254 725 023 276</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-400 mr-3" />
                  <span>info@stacklessfitness.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                <a href="#programs" className="block text-gray-400 hover:text-white">Programs</a>
                <a href="#trainers" className="block text-gray-400 hover:text-white">Trainers</a>
                <a href="#workouts" className="block text-gray-400 hover:text-white">Workouts</a>
                <a href="#" className="block text-gray-400 hover:text-white">Pricing</a>
                <a href="#" className="block text-gray-400 hover:text-white">Login</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Stackless Fitness. All rights reserved. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StacklessFitness;