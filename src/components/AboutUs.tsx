"use client";
import Image from "next/image";

export default function AboutUs() {
	return (
		<div className="bg-white">
			<section id="about" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-mt-24">
				{/* Left: stacked images */}
				<div className="relative">
					<div className="relative aspect-[4/3] w-full overflow-hidden z-0">
						<Image
							src="/images/img1.jpeg"
							alt="People training in a gym"
							fill
							className="object-cover"
							priority
						/>
					</div>
					<div className="absolute -bottom-10 -right-6 w-2/5 min-w-48 aspect-[4/3] overflow-hidden z-10">
						<Image
							src="/images/img5.jpeg"
							alt="Boxer preparing with gloves"
							fill
							className="object-cover"
						/>
					</div>
				</div>

				{/* Right: content */}
				<div className="space-y-6">
					<p className="uppercase tracking-widest text-sm text-red-600 font-semibold">About us</p>
					<h1 className="font-[var(--font-display)] text-2xl md:text-4xl leading-tight text-gray-900">
						Make yourself stronger than your best excuses
					</h1>
					<p className="text-gray-600 text-sm md:text-lg leading-relaxed">
						At Stakeless Fitness, we help everyday people build sustainable strength and
						confidence. Our coaches combine proven training methods with personalized
						guidance so you can progress at your pace. From technique to nutrition
						fundamentals, we focus on habits that last and results you can feel.
					</p>

					{/* Quote card */}
					<div className="bg-gray-50 border border-gray-200 p-4 md:p-6 sm:p-8 relative">
						<div className="md:text-5xl text-3xl text-red-600 font-bold leading-none select-none">“</div>
						<p className="mt-2 text-sm md:text-lg sm:text-xl font-semibold text-red-600">
							Push harder than yesterday if you want a different tomorrow.
						</p>
						<div className="mt-6 flex items-center gap-3">
							<Image
								src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=256&auto=format&fit=crop"
								alt="Ayush Dubey"
								width={40}
								height={40}
								className="rounded-full object-cover"
							/>
							<div>
								<p className="font-semibold text-gray-900">Shitanda</p>
								<p className="text-xs text-gray-500">Trainer - Stakeless Fitness</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
