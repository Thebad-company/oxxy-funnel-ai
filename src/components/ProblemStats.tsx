import React from 'react';
import { APP_DATA } from '../data/mockData';

export const ProblemStats: React.FC = () => {
  const { problem } = APP_DATA;

  return (
    <section className="py-32 px-6 bg-surface-container-low relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="mb-20 text-center md:text-left">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-secondary mb-6 font-extrabold">{problem.title}</h2>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">{problem.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problem.stats.map((stat, i) => (
            <div key={i} className="group p-10 bg-white rounded-2xl border border-outline-variant/10 shadow-[0_4px_20px_-4px_rgba(2,51,80,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(2,51,80,0.1)] transition-all duration-500 overflow-hidden relative">
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 to-primary/40 group-hover:from-primary transition-all duration-700" />
                
                <div className="relative z-10">
                    <div className="font-headline text-5xl font-black mb-4 text-primary tracking-tighter transition-transform duration-500 group-hover:scale-110 origin-left">
                        {stat.value}
                    </div>
                    <p className="text-on-surface-variant font-body font-medium leading-relaxed italic group-hover:text-on-surface transition-colors">
                        {stat.description}
                    </p>
                </div>
                
                {/* Secondary Pulse */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
