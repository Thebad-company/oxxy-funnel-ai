import React from 'react';
import { APP_DATA } from '../data/mockData';

export const PricingStrategy: React.FC = () => {
  const { pricing } = APP_DATA;

  return (
    <section className="py-24 px-6 bg-surface-container-low border-t border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-4 italic">{pricing.title}</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto italic">Positioned as getting ₹10,000 worth of health assessment value at accessible entry points.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricing.regions.map((region, i) => (
            <div key={i} className="p-10 bg-white rounded-xl shadow-sm border border-outline-variant/20 hover:border-primary transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary-container/10 px-2 py-1 rounded">
                        {region.badge}
                    </span>
                </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{region.name}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-headline italic text-on-surface">{region.cost}</span>
                <span className="text-on-surface-variant font-medium line-through decoration-primary decoration-2 decoration-opacity-30 opacity-40">{region.value} Value</span>
              </div>
              <p className="text-on-surface-variant text-sm italic">
                Get your full professional-grade AI assessment instantly.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
