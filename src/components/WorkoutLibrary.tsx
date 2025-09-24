import React, { useState } from 'react';
import Image from 'next/image';

const WorkoutLibrary = () => {
  interface FeaturedItem {
    name: string;
    count: number;
    image: string;
    overlayFrom: string;
    overlayTo: string;
    description: string;
    details: string[];
  }

  const workoutCategories = [
    { name: "Strength Training", count: 45 },
    { name: "Cardio", count: 32 },
    { name: "Yoga", count: 28 },
    { name: "HIIT", count: 24 },
    { name: "Flexibility", count: 18 },
    { name: "Recovery", count: 15 }
  ];

  // Visuals for each category (six panels)
  const featured: FeaturedItem[] = [
    {
      ...workoutCategories[2], // Yoga
      image:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1974&auto=format&fit=crop',
      overlayFrom: 'from-rose-500/50',
      overlayTo: 'to-rose-700/50',
      description:
        'Yoga is a mindful practice to improve mobility, flexibility, breath control, and mental clarity. Sessions range from slow restorative flows to strong, heat-building sequences.',
      details: [
        'Vinyasa, Hatha, Power, and Restorative tracks',
        'Guided breathing, balance, and mobility drills',
        'Beginner-to-advanced progressions and pose libraries'
      ],
    },
    {
      ...workoutCategories[0], // Strength Training
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1974&auto=format&fit=crop',
      overlayFrom: 'from-blue-800/45',
      overlayTo: 'to-blue-900/45',
      description:
        'Evidence-based programs focused on compound lifts, accessory work, and structured periodization to get stronger while avoiding plateaus.',
      details: [
        'Barbell, dumbbell, and kettlebell cycles',
        'Hypertrophy, strength, and power templates',
        'Form cues, deloads, and progressive overload'
      ],
    },
    {
      ...workoutCategories[1], // Cardio
      image:
        'https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=1974&auto=format&fit=crop',
      overlayFrom: 'from-teal-500/45',
      overlayTo: 'to-teal-700/45',
      description:
        'Build aerobic capacity and stamina with structured intervals, steady-state work, and mixed-modal endurance sessions.',
      details: [
        'Run, row, ride, and ski-erg options',
        'VO₂ max intervals and tempo sessions',
        'Heart-rate zones and pacing guidance'
      ],
    },
    {
      ...workoutCategories[3], // HIIT
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1974&auto=format&fit=crop',
      overlayFrom: 'from-slate-900/40',
      overlayTo: 'to-gray-900/40',
      description:
        'High-intensity intervals that spike heart rate and torch calories using short work bouts and precise rest windows.',
      details: [
        'EMOM, Tabata, and sprint protocols',
        'Bodyweight and minimal-equipment options',
        'Warm-ups and cool-downs built in'
      ],
    },
    {
      ...workoutCategories[4], // Flexibility
      image:
        'https://images.unsplash.com/photo-1557512724-931547195611?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmxleGliaWxpdHklMjB3b3Jrb3V0fGVufDB8fDB8fHww',
      overlayFrom: 'from-purple-500/45',
      overlayTo: 'to-indigo-700/45',
      description:
        'Dedicated mobility and stretching sessions that open tight areas, improve posture and joint health, and keep you moving freely.',
      details: [
        'Guided hip/shoulder/ankle routines',
        'PNF and active mobility techniques',
        'Desk reset and end-of-day unwind flows'
      ],
    },
    {
      ...workoutCategories[5], // Recovery
      image:
        'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1974&auto=format&fit=crop',
      overlayFrom: 'from-emerald-500/45',
      overlayTo: 'to-emerald-700/45',
      description:
        'Gentle sessions blending breathwork, tissue care, and low-intensity movement so you bounce back ready for more.',
      details: [
        'Guided breathwork and relaxation',
        'Foam rolling and soft-tissue care',
        'Active recovery walks and mobility resets'
      ],
    },
  ];

  const [openItem, setOpenItem] = useState<FeaturedItem | null>(null);

  return (
    <section id="workouts" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-0.5 bg-red-400 max-w-32"></div>
            <h2 className="text-2xl font-bold text-gray-900 mx-4">WORKOUT LIBRARY</h2>
            <div className="flex-1 h-0.5 bg-red-400 max-w-32"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Access hundreds of workouts across different categories, from beginner to advanced levels.
          </p>
        </div>

        {/* Featured six-panel grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-0">
          {featured.map((item, index) => (
            <div key={index} className="group relative h-[380px] sm:h-[420px] lg:h-[480px] overflow-hidden border-b border-white/10 xl:border-b-0 xl:border-r">
              <Image
                src={item.image}
                alt={item.name}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${item.overlayFrom} ${item.overlayTo} mix-blend-multiply`} />
              <div className="absolute inset-0 bg-black/15" />

              <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-white text-2xl lg:text-xl font-extrabold tracking-wide mb-4 drop-shadow">
                  {item.name.toUpperCase()}
                </h3>
                <p className="text-white/90 max-w-xs mb-6">
                  {item.name} collection • {item.count} workouts curated for all levels.
                </p>
                <button onClick={() => setOpenItem(item)} className="inline-flex items-center gap-2 rounded-full border border-white/90 px-5 py-2 text-white font-semibold tracking-wide backdrop-blur-sm transition-colors duration-300 group-hover:bg-white group-hover:text-gray-900">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {openItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60" onClick={() => setOpenItem(null)} />
            <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="relative h-56">
                <Image src={openItem.image} alt={openItem.name} fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />
                <h3 className="absolute bottom-4 left-6 text-white text-3xl font-extrabold drop-shadow">{openItem.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{openItem.description}</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  {openItem.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mb-6">Includes {openItem.count} workouts with progressions, scaling options, and suggested weekly structure.</p>
                <div className="flex items-center justify-end gap-3">
                  <button onClick={() => setOpenItem(null)} className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-50">Close</button>
                  
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkoutLibrary;


