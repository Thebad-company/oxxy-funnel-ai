import React from 'react';
import { APP_DATA } from '../data/mockData';

export const PersonaSection: React.FC = () => {
    const { personas } = APP_DATA as any;

    return (
        <section className="py-24 px-6 bg-surface-container-low overflow-hidden">
            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-on-surface-variant/5 rounded-full mb-6 font-black text-xs text-on-surface-variant uppercase tracking-[0.2em]">
                        Who is Oxxy For?
                    </div>
                    <h2 className="font-headline text-4xl md:text-5xl font-black text-secondary leading-tight uppercase tracking-tight mb-4">
                        {personas.title}
                    </h2>
                </div>

                <div className="space-y-24 md:space-y-40">
                    {personas.items.map((item: any, i: number) => (
                        <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Image Part */}
                            <div className="w-full md:w-1/2">
                                <div className="relative group">
                                    <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={item.title} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    {/* Small Icon Badge */}
                                    <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-secondary font-black">{item.icon}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Text Part */}
                            <div className="w-full md:w-1/2">
                                <div className="max-w-md">
                                    <h3 className="font-headline text-3xl md:text-5xl font-black text-secondary mb-6 uppercase tracking-tighter leading-tight">{item.title}</h3>
                                    <p className="text-on-surface-variant text-xl leading-relaxed font-medium italic border-l-4 border-primary pl-8">
                                        "{item.description}"
                                    </p>
                                    <div className="mt-10">
                                        <a href={item.href || "#scan-module"} className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">
                                            {item.cta || "See Scenarios"}
                                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
