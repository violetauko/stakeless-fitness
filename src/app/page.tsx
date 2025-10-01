"use client";
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProgramsServices from '@/components/ProgramsServices';
import TrainerProfiles from '@/components/TrainerProfiles';
import WorkoutLibrary from '@/components/WorkoutLibrary';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';

const StacklessFitness = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutUs />
      <WorkoutLibrary />
      <ProgramsServices />
      <TrainerProfiles />
      <StatsSection />
      <Gallery/>
      <Reviews />
      <Footer />
    </div>
  );
};

export default StacklessFitness;


