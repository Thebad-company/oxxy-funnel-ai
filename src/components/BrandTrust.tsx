import React from 'react';
import { APP_DATA } from '../data/mockData';

export const BrandTrust: React.FC = () => {
    const { brandTrust } = APP_DATA as any;

    return (
        <section className="py-32 px-6 bg-surface-container-low relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            
            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <h2 className="font-headline text-4xl md:text-6xl font-black text-secondary leading-[1.1] mb-8 uppercase tracking-tight">
                        {brandTrust.title}
                    </h2>
                    <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-12 italic max-w-3xl">
                        {brandTrust.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-16 px-4">
                        {brandTrust.stats.map((stat: any, i: number) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-2">{stat.value}</span>
                                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Trust Certification Badges */}
                    <div className="flex flex-wrap justify-center gap-4 pt-12 border-t border-outline-variant/50 w-full max-w-2xl">
                        <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-outline-variant/30 shadow-sm">
                            <span className="material-symbols-outlined text-primary text-2xl font-black">verified_user</span>
                            <span className="text-xs font-black text-secondary uppercase tracking-widest">ISO 27001 Certified</span>
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-outline-variant/30 shadow-sm">
                            <span className="material-symbols-outlined text-primary text-2xl font-black">lock</span>
                            <span className="text-xs font-black text-secondary uppercase tracking-widest">HIPAA Compliant</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
