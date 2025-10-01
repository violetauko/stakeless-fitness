import React from 'react';
import Image from 'next/image';
import { Dumbbell, Medal, ShieldCheck, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative scroll-mt-24">
      <div className="relative min-h-[50vh] md:min-h-[80vh] flex items-center pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/img2.jpeg"
            alt="Athlete training at the gym"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-red-600 text-white text-[10px] md:text-xs tracking-widest font-semibold px-4 py-1 rounded-sm">
              SHAPE OF YOU
            </span>
            <h1 className="mt-5 text-white text-2xl md:text-6xl font-extrabold leading-[0.9] tracking-tight [font-family:var(--font-display),_sans-serif]" 
            >
              GET FIT DON&apos;T
              <br />
              QUIT
            </h1>
            <p className="mt-4 text-gray-200 max-w-xl text-xs md:text-lg">
              Today I will do what others won&apos;t, so tomorrow I can accomplish what others can’t.
              We are what we repeatedly do. Excellence, then, is not an act but a habit.
            </p>
            <div className="mt-8 mb-4 flex items-center gap-4">
              <a
                href="https://wa.me/254725023276?text=Hi%20Trainer!%20I%E2%80%99d%20like%20to%20book%20a%20training%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/70 text-white hover:bg-white hover:text-black font-semibold px-3 py-2 md:px-6 md:py-3 rounded-sm text-xs md:text-lg transition-colors duration-300"
              >
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12">
            <div className="bg-red-600 rounded-sm px-6 py-6 md:px-10 md:py-8 shadow-xl">
              <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap6 text-white text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-white text-red-600 flex items-center justify-center">
                    <Dumbbell className="w-4 h-4 md:w-7 md:h-7" />
                  </div>
                  <p className="text-[8px] md:text-xs uppercase tracking-wider font-semibold">Dedicated Services</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-white text-red-600 flex items-center justify-center">
                    <Users className="w-4 h-4 md:w-7 md:h-7" />
                  </div>
                  <p className="text-[8px] md:text-xs uppercase tracking-wider font-semibold">Qualified Instructor</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 md:w-14 md:h-14  rounded-full bg-white text-red-600 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 md:w-7 md:h-7" />
                  </div>
                  <p className="text-[8px] md:text-xs uppercase tracking-wider font-semibold">Organic Proteins</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 md:w-14 md:h-14  rounded-full bg-white text-red-600 flex items-center justify-center">
                    <Medal className="w-4 h-4 md:w-7 md:h-7" />
                  </div>
                  <p className="text-[8px] md:text-xs uppercase tracking-wider font-semibold">Personalized Plans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

