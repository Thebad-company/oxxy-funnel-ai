import React from 'react';
import { APP_DATA } from '../data/mockData';

export const HealthFacts: React.FC = () => {
    const { curiosityFacts } = APP_DATA as any;

    return (
        <section className="py-24 px-6 bg-surface-container-low overflow-hidden">
            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-on-surface-variant/5 rounded-full mb-6 font-black text-xs text-on-surface-variant uppercase tracking-[0.2em]">
                        Deep Insights
                    </div>
                    <h2 className="font-headline text-4xl md:text-5xl font-black text-secondary uppercase tracking-tight mb-4">
                        {curiosityFacts.title}
                    </h2>
                    <p className="text-on-surface-variant text-lg max-w-2xl mx-auto italic border-l-4 border-primary/20 pl-8">
                        The human face is a window into the body's vital systems. Our AI captures what's hidden.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {curiosityFacts.facts.map((fact: any, i: number) => (
                        <div key={i} className="group p-10 bg-white rounded-[2.5rem] border border-outline-variant/30 hover:border-primary/50 transition-all duration-500 shadow-[0_10px_30px_-5px_rgba(2,51,80,0.04)] hover:shadow-[0_20px_50px_-10px_rgba(2,51,80,0.08)]">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary transition-all duration-500 flex items-center justify-center mb-8 shadow-inner">
                                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors text-3xl font-black">{fact.icon}</span>
                            </div>
                            <h3 className="font-headline text-xl font-bold text-secondary mb-6 group-hover:text-primary transition-colors uppercase tracking-tight">{fact.title}</h3>
                            <p className="text-on-surface-variant text-base leading-relaxed font-medium italic group-hover:text-secondary transition-colors">
                                "{fact.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
