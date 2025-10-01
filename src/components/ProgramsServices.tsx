import React, { useState } from 'react';
import { Play, Trophy, User, Heart, Dumbbell, ChevronRight, X, Clock, Users, Award } from 'lucide-react';

interface ProgramDetails {
  overview: string;
  duration: string;
  difficulty: string;
  equipment: string;
  benefits: string[];
  pricing: string;
}

interface Program {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  features: string[];
  detailedInfo: ProgramDetails;
}

const ProgramsServices = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const programs: Program[] = [
    {
      id: 1,
      title: "Online Classes",
      description: "Live and on-demand fitness classes from expert trainers",
      icon: <Play className="w-6 h-6" />,
      features: ["Live Sessions", "On-Demand Library", "Group Workouts"],
      detailedInfo: {
        overview: "Join thousands of members in our comprehensive online fitness program. Stream live classes or access our extensive on-demand library featuring workouts for all fitness levels.",
        duration: "30-60 minutes per session",
        difficulty: "Beginner to Advanced",
        equipment: "Minimal equipment required",
        benefits: [
          "Access to 500+ workout videos",
          "Live interactive sessions with trainers",
          "Community support and challenges",
          "Flexible scheduling to fit your lifestyle",
          "Progress tracking and analytics"
        ],
        pricing: "Starting at ksh1000/month"
      }
    },
    {
      id: 2,
      title: "Weight Loss Management",
      description: "Comprehensive weight management with tracking and support",
      icon: <Trophy className="w-6 h-6" />,
      features: ["Custom Plans", "Progress Tracking", "Meal Planning"],
      detailedInfo: {
        overview: "Achieve your weight loss goals with our science-based approach combining personalized nutrition plans, workout routines, and ongoing support from certified professionals.",
        duration: "12-week program cycles",
        difficulty: "All levels welcome",
        equipment: "Basic home gym setup",
        benefits: [
          "Personalized meal plans and recipes",
          "Weekly check-ins with nutritionists",
          "Body composition tracking",
          "Sustainable lifestyle coaching",
          "24/7 support community"
        ],
        pricing: "Starting at ksh1490/month"
      }
    },
    {
      id: 3,
      title: "Personal Training",
      description: "One-on-one sessions with certified personal trainers",
      icon: <User className="w-6 h-6" />,
      features: ["1:1 Sessions", "Custom Workouts", "Goal Setting"],
      detailedInfo: {
        overview: "Work directly with certified personal trainers who will create customized workout plans, provide form correction, and keep you motivated throughout your fitness journey.",
        duration: "45-60 minute sessions",
        difficulty: "Customized to your level",
        equipment: "Full gym access included",
        benefits: [
          "Personalized workout programming",
          "Form correction and injury prevention",
          "Flexible scheduling options",
          "Goal-specific training plans",
          "Nutritional guidance included"
        ],
        pricing: "Starting at ksh7500/session"
      }
    },
    {
      id: 4,
      title: "Nutrition & Health",
      description: "Expert nutrition guidance and meal planning services",
      icon: <Heart className="w-6 h-6" />,
      features: ["Meal Plans", "Nutrition Coaching", "Health Resources"],
      detailedInfo: {
        overview: "Transform your relationship with food through our comprehensive nutrition program. Work with registered dietitians to develop sustainable eating habits that support your health goals.",
        duration: "Ongoing support",
        difficulty: "Suitable for all dietary needs",
        equipment: "Kitchen basics",
        benefits: [
          "Custom meal plans for your lifestyle",
          "Weekly coaching sessions",
          "Recipe database and shopping lists",
          "Supplement recommendations",
          "Health condition management support"
        ],
        pricing: "Starting at ksh8900/month"
      }
    },
    {
      id: 5,
      title: "Rehabilitation & Training",
      description: "Specialized recovery and rehabilitation programs",
      icon: <Dumbbell className="w-6 h-6" />,
      features: ["Recovery Programs", "Injury Prevention", "Physical Therapy"],
      detailedInfo: {
        overview: "Recover from injury and prevent future issues with our specialized rehabilitation programs led by licensed physical therapists and corrective exercise specialists.",
        duration: "6-12 week programs",
        difficulty: "Therapeutic to performance level",
        equipment: "Specialized rehab equipment provided",
        benefits: [
          "Assessment and treatment planning",
          "Pain reduction and mobility improvement",
          "Strength and stability training",
          "Movement pattern correction",
          "Return-to-activity protocols"
        ],
        pricing: "Starting at ksh1200/session"
      }
    }
  ];

  return (
    <section id="programs" className="py-20 scroll-mt-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-0.5 bg-red-500 max-w-32"></div>
            <h2 className="text-lg md:text-2xl font-bold text-white mx-4">OUR PROGRAMS & SERVICES</h2>
            <div className="flex-1 h-0.5 bg-red-500 max-w-32"></div>
          </div>
          <p className="text-white max-w-2xl mx-auto text-sm md:text-lg">
          Choose from our comprehensive range of fitness programs designed to meet your unique goals and lifestyle.
          </p>
        </div>

        {/* Staggered grid: 3 compact tiles on top, 2 wide tiles below */}
        <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-6">
          {programs.map((program, index) => {
            const isWide = index >= 3; // last two items span wider
            const colSpanClasses = isWide
              ? "md:col-span-4 lg:col-span-3"
              : "md:col-span-2 lg:col-span-2";
            return (
              <div
                key={program.id}
                className={`group ${colSpanClasses} rounded-2xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-orange-500/10`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="grid h-8 w-8 md:h-12 md:w-12 place-items-center rounded-xl bg-gradient-to-br from-orange-600/20 to-red-600/20 text-orange-400 border border-orange-600/30">
                      {program.icon}
                    </div>
                    <h3 className="text-sm md:text:lg font-bold text-white">{program.title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-400 mb-4 leading-relaxed">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zinc-300 text-xs md:text-sm">
                        <ChevronRight className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center">
                  <button 
                    onClick={() => setSelectedProgram(program)}
                    className="text-red-500 font-semibold hover:text-red-400 transition-colors text-xs md:text-sm tracking-wide cursor-pointer"
                  >
                    Learn More
                  </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProgram(null)}
            ></div>
            <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700 shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-8 md:h-8 md:w-14 place-items-center rounded-xl bg-gradient-to-br from-orange-600/20 to-red-600/20 text-red-400 border border-red-600/30">
                      {selectedProgram.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-white">{selectedProgram.title}</h3>
                      <p className="text-red-400 font-semibold text-sm md:text-lg">{selectedProgram.detailedInfo.pricing}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="p-2 rounded-lg bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Overview */}
                <div className="mb-6">
                  <p className="text-zinc-300 leading-relaxed text-sm md:text-lg">{selectedProgram.detailedInfo.overview}</p>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-red-400" />
                      <span className="text-zinc-400 text-sm font-medium">Duration</span>
                    </div>
                    <p className="text-white text-xs md:text-sm">{selectedProgram.detailedInfo.duration}</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-red-400" />
                      <span className="text-zinc-400 text-sm font-medium">Difficulty</span>
                    </div>
                    <p className="text-white text-xs md:text-sm">{selectedProgram.detailedInfo.difficulty}</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-red-400" />
                      <span className="text-zinc-400 text-xs md:text-sm font-medium">Equipment</span>
                    </div>
                    <p className="text-white text-xs md:text-sm">{selectedProgram.detailedInfo.equipment}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm md:text-lg font-semibold text-white mb-4">What&apos;s Included</h4>
                  <ul className="space-y-3">
                    {selectedProgram.detailedInfo.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight className="w-2 h-2 md:w-4 md:h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300 text-xs md:text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="flex justify-center pt-2 md:pt-4 border-t border-zinc-700/50">
                  <a 
                    href="https://wa.me/254725023276"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 md:px-8 md:py-3 text-xs md:text-sm border border-zinc-600 hover:border-red-500 hover:bg-orange-500/10 text-zinc-300 hover:text-red-400 rounded-lg transition-all duration-200 font-medium"
                  >
                    Contact Us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramsServices;