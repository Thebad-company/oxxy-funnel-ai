import React from 'react';
import { APP_DATA } from '../data/mockData';

export const SymptomSection: React.FC = () => {
    const { symptoms } = APP_DATA as any;

    return (
        <section className="py-24 px-6 bg-secondary overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none neural-grid" />
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6 font-black text-xs text-primary uppercase tracking-[0.2em]">
                        Your Silent Story
                    </div>
                    <h2 className="font-headline text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight mb-8">
                        {symptoms.title}
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-primary pl-8 text-left">
                        {symptoms.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {symptoms.items.map((item: any, i: number) => (
                        <div key={i} className="group p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all duration-700 hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 shadow-inner group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors text-3xl font-black">{item.icon}</span>
                            </div>
                            <h3 className="font-headline text-lg font-bold text-white mb-4 uppercase tracking-widest">{item.label}</h3>
                            <p className="text-white/50 text-sm font-medium leading-relaxed italic border-l-2 border-white/10 pl-4 group-hover:text-white/80 transition-colors">
                                "{item.symptom}"
                            </p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-4 text-white/40 uppercase font-black text-[10px] tracking-[0.3em]">
                        <span className="w-8 h-px bg-white/20" />
                        Detect Early. Prevents Criticality.
                        <span className="w-8 h-px bg-white/20" />
                    </div>
                </div>
            </div>
        </section>
    );
};
