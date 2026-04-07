import React from 'react';
import { APP_DATA } from '../data/mockData';

export const ComparisonSection: React.FC = () => {
    const { comparison } = APP_DATA as any;

    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto z-10 relative">
                <div className="text-center mb-20">
                    <h2 className="font-headline text-4xl md:text-5xl font-black text-secondary leading-tight uppercase tracking-tight mb-8">
                        {comparison.title}
                    </h2>
                    <p className="text-on-surface-variant text-lg max-w-2xl mx-auto italic border-l-4 border-primary/20 pl-8">
                        {comparison.description}
                    </p>
                </div>

                <div className="bg-surface-container-low rounded-[3rem] p-4 md:p-12 border border-outline-variant/30 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                     
                     <div className="grid grid-cols-4 gap-4 mb-12 hidden md:grid">
                        <div className="col-span-1"></div>
                        <div className="text-center">
                            <span className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.3em]">Traditional Path</span>
                        </div>
                        <div className="text-center">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Oxxy AI Path</span>
                        </div>
                        <div className="col-span-1"></div>
                     </div>

                     <div className="space-y-4 md:space-y-6">
                        {comparison.items.map((item: any, i: number) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 md:gap-6 group">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-on-surface-variant/30 text-xl font-black">{item.icon}</span>
                                    <span className="text-xs font-black text-secondary uppercase tracking-widest">{item.label}</span>
                                </div>
                                <div className="p-6 bg-white/50 rounded-2xl border border-outline-variant/10 text-center text-on-surface-variant text-sm font-bold md:col-span-1">
                                    {item.traditional}
                                </div>
                                <div className="p-6 bg-primary text-white rounded-2xl shadow-xl shadow-primary/20 text-center text-sm font-black md:scale-110 group-hover:scale-115 transition-transform duration-500">
                                    {item.oxxy}
                                </div>
                                <div className="hidden md:flex justify-center">
                                    <span className="material-symbols-outlined text-primary text-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity">verified</span>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
            </div>
        </section>
    );
};
