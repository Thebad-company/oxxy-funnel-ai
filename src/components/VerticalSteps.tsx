import React from 'react';

const STEPS = [
  {
    number: "1",
    title: "Instant Camera Access",
    subtitle: "Simple, browser-based permissions.",
    description: "Our secure web interface requests temporary camera access. No app download. No permanent storage. Your privacy is protected by Oxxy's end-to-end encryption protocols.",
    image: "/step_1.png",
    points: [
      "No permanent image storage",
      "End-to-end encrypted stream",
      "Works on iOS, Android, and Desktop"
    ]
  },
  {
    number: "2",
    title: "AI Neural Mapping",
    subtitle: "Analyzing 400+ facial bio-markers.",
    description: "The Oxxy AI engine performs a subficial analysis of micro-expressions, skin perfusion, and muscle tension to quantify your current vital state with clinical-grade precision.",
    image: "/step_2.png",
    points: [
      "Real-time bio-marker tracking",
      "Stress & fatigue quantification",
      "Non-invasive diagnostic technology"
    ]
  },
  {
    number: "3",
    title: "Comprehensive Report",
    subtitle: "A roadmap to your wellbeing.",
    description: "Receive your personalized Oxxy Health Score instantly. Our system correlates your biometric data with tailored health protection plans to ensure you stay ahead of lifestyle risks.",
    image: "/step_3.png",
    points: [
      "Instant PDF health snapshot",
      "Personalized plan suggestions",
      "Early risk detection alerts"
    ]
  }
];

export const VerticalSteps: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Heading */}
        <div className="mb-24 text-center max-w-2xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-black text-secondary mb-4 uppercase tracking-tight">Three Steps to Clarity</h2>
            <p className="text-on-surface-variant text-lg font-medium italic">Our process is engineered for speed, privacy, and precision.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 -translate-x-1/2 hidden md:block" />

          {STEPS.map((step, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-24 md:mb-40 last:mb-0 relative ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Step Circle (Mobile/Desktop) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-secondary text-white font-headline font-black flex items-center justify-center border-4 border-surface shadow-xl">
                    {step.number}
                </div>
              </div>

              {/* Image Column */}
              <div className="w-full md:w-1/2">
                <div className="relative group">
                    <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full aspect-[4/3] object-cover rounded-2xl shadow-[0_20px_50px_-15px_rgba(2,51,80,0.15)] group-hover:shadow-[0_40px_80px_-20px_rgba(2,51,80,0.25)] transition-all duration-700 hover:scale-[1.02]" 
                    />
                    <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-1/2 text-left">
                <div className="flex items-center gap-4 mb-4 md:hidden">
                    <div className="w-8 h-8 rounded-full bg-secondary text-white font-headline font-black flex items-center justify-center text-xs">
                        {step.number}
                    </div>
                </div>
                <h3 className="font-headline text-3xl md:text-5xl text-secondary font-black mb-2 leading-tight uppercase tracking-tight">{step.title}</h3>
                <p className="font-headline text-lg italic text-primary mb-6 font-medium">{step.subtitle}</p>
                
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed max-w-lg">
                    {step.description}
                </p>

                <ul className="space-y-3 mb-10">
                    {step.points.map((point, pi) => (
                        <li key={pi} className="flex items-center gap-3 text-on-surface font-bold text-sm">
                            <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                            {point}
                        </li>
                    ))}
                </ul>

                <a href="#scan-module" className="inline-flex items-center justify-center bg-secondary/10 hover:bg-secondary text-secondary hover:text-white px-8 py-3 rounded-lg font-black text-xs uppercase tracking-widest transition-all duration-300">
                    Learn More
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
