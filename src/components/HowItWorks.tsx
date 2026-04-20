import React from 'react';
import { APP_DATA } from '../data/mockData';

export const HowItWorks: React.FC = () => {
  const { howItWorks } = APP_DATA;

  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="font-headline text-4xl md:text-6xl text-on-surface italic">{howItWorks.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative mb-12">
          {howItWorks.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl">{step.icon}</span>
              </div>
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-on-surface-variant font-body">{step.description}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-on-surface-variant/40 font-medium uppercase tracking-widest max-w-xl mx-auto italic">
            * Oxxy AI is a wellness monitoring tool. For clinical accuracy and diagnosis, always consult a licensed medical professional.
        </p>
      </div>
    </section>
  );
};
