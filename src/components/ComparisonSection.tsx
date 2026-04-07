import React from 'react';
import { APP_DATA } from '../data/mockData';

export const ComparisonSection: React.FC = () => {
    const { comparison } = APP_DATA as any;

    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto z-10 relative">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-black text-secondary leading-tight uppercase tracking-tight mb-6">
                        {comparison.title}
                    </h2>
                    <p className="text-on-surface-variant text-lg max-w-2xl mx-auto italic border-l-4 border-primary/20 pl-8">
                        {comparison.description}
                    </p>
                </div>

                <div className="bg-white rounded-[3rem] p-6 md:p-10 border border-outline-variant/30 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                    
                    {/* Table Headers (Desktop) */}
                    <div className="hidden md:grid grid-cols-3 gap-6 mb-6 items-center relative z-10">
                        <div></div>
                        <div className="text-center bg-surface-container-highest/30 py-3 rounded-2xl border border-outline-variant/20">
                            <span className="text-[10px] font-black text-on-surface-variant/50 uppercase tracking-[0.3em]">Traditional Path</span>
                        </div>
                        <div className="text-center bg-primary py-3 rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-white text-sm">verified</span>
                            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Oxxy AI Path</span>
                        </div>
                    </div>

                    {/* Table Rows */}
                    <div className="space-y-3 relative z-10">
                        {comparison.items.map((item: any, i: number) => (
                            <div key={i} className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 items-center p-5 md:p-3 rounded-[2rem] bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/40 hover:shadow-md transition-all duration-300 group">
                                
                                {/* Label */}
                                <div className="flex items-center justify-center md:justify-start gap-3 w-full mb-2 md:mb-0 md:pl-4">
                                    <span className="material-symbols-outlined text-primary/60 text-2xl group-hover:text-primary transition-colors">{item.icon}</span>
                                    <span className="text-[11px] md:text-xs font-black text-secondary uppercase tracking-widest">{item.label}</span>
                                </div>

                                {/* Data Columns Wrapper for Mobile */}
                                <div className="w-full grid grid-cols-2 md:contents gap-4">
                                    {/* Traditional Box */}
                                    <div className="flex flex-col md:block text-center w-full">
                                        <span className="md:hidden text-[9px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-2 block">Traditional</span>
                                        <div className="flex items-center justify-center h-full min-h-[3rem] font-bold text-on-surface-variant text-xs md:text-sm px-4 py-2 rounded-xl bg-surface-container-highest/20 border border-outline-variant/20">
                                            {item.traditional}
                                        </div>
                                    </div>

                                    {/* Oxxy Box */}
                                    <div className="flex flex-col md:block text-center w-full">
                                        <span className="md:hidden text-[9px] font-black text-primary uppercase tracking-widest mb-2 block">Oxxy AI</span>
                                        <div className="flex items-center justify-center h-full min-h-[3rem] font-black text-primary text-xs md:text-sm px-4 py-2 rounded-xl bg-primary/5 border border-primary/20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300 shadow-sm group-hover:shadow-lg">
                                            {item.oxxy}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
