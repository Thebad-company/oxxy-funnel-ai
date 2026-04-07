import React from 'react';
import { APP_DATA } from '../data/mockData';

export const HealthCategories: React.FC = () => {
    const { healthCategories } = APP_DATA as any;

    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="text-center mb-20">
                    <h2 className="font-headline text-4xl md:text-5xl font-black text-secondary uppercase tracking-tight mb-4">{healthCategories.title}</h2>
                    <p className="text-on-surface-variant text-lg max-w-2xl mx-auto italic">Your medical grade vitals, estimated in real-time through the lens.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {healthCategories.categories.map((cat: any, i: number) => (
                        <div key={i} className="group p-8 rounded-3xl bg-surface-container-low border border-outline-variant/50 hover:bg-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-primary text-2xl">{cat.icon}</span>
                            </div>
                            <h3 className="font-headline text-lg font-bold text-secondary mb-2 group-hover:text-white transition-colors">{cat.name}</h3>
                            <p className="text-on-surface-variant text-sm font-medium leading-relaxed group-hover:text-white/80 transition-colors uppercase tracking-widest">{cat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
