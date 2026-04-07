import React from 'react';
import { APP_DATA } from '../data/mockData';

export const ReportPreview: React.FC = () => {
    const { reportPreview } = APP_DATA as any;

    return (
        <section className="py-24 px-6 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[300px]">description</span>
            </div>

            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8 font-black text-xs text-primary uppercase tracking-[0.2em]">
                            The Outcome
                        </div>
                        <h2 className="font-headline text-4xl md:text-5xl font-black text-secondary leading-tight uppercase tracking-tight mb-6">
                            {reportPreview.title}
                        </h2>
                        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 italic">
                            {reportPreview.description}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                                <span className="material-symbols-outlined text-primary text-2xl font-black">picture_as_pdf</span>
                                <span className="font-bold text-secondary uppercase tracking-widest text-xs">Clinical Grade PDF Snapshot</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                                <span className="material-symbols-outlined text-primary text-2xl font-black">mail</span>
                                <span className="font-bold text-secondary uppercase tracking-widest text-xs">Direct Delivery to Inbox</span>
                            </div>
                        </div>

                        <div className="mt-12">
                             <a href="#scan-module" className="theme-btn group shadow-xl">
                                Start Free Scan
                                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                             </a>
                        </div>
                    </div>

                    <div className="relative group">
                         {/* Mock Report Component */}
                         <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(2,51,80,0.15)] border border-outline-variant/50 relative overflow-hidden group-hover:scale-[1.02] transition-all duration-700">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                            
                            <div className="flex justify-between items-center mb-12">
                                <img src={APP_DATA.navigation.logo} className="h-6 md:h-8 object-contain" alt="Oxxy Logo" />
                                <div className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest">Confidential Report</div>
                            </div>

                            <div className="flex items-center gap-4 mb-12 pb-8 border-b border-outline-variant/30">
                                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center font-black text-secondary text-2xl">A</div>
                                <div>
                                    <h4 className="font-headline font-black text-secondary uppercase tracking-wider">Aarav Sharma</h4>
                                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">ID: #OXXY-9281-AI</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {reportPreview.vitals.map((vital: any, i: number) => (
                                    <div key={i} className="p-6 bg-surface rounded-3xl border border-outline-variant/20 hover:border-primary/30 transition-colors">
                                        <div className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2 opacity-50">{vital.label}</div>
                                        <div className="text-xl md:text-2xl font-black text-secondary mb-1">{vital.value}</div>
                                        <div className={`text-[10px] font-black uppercase tracking-[0.2em] inline-flex items-center gap-1.5 ${vital.color === 'error' ? 'text-error' : vital.color === 'primary' ? 'text-primary' : 'text-tertiary'}`}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                                            {vital.status}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-6 bg-secondary rounded-[2rem] text-white">
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-white/50">Next Steps</div>
                                <p className="text-sm font-medium italic leading-relaxed">Consider the Oxxy Vitality Shield for regular clinical follow-up based on your report.</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
