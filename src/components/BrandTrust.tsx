import React from 'react';
import { APP_DATA } from '../data/mockData';

export const BrandTrust: React.FC = () => {
    const { brandTrust } = APP_DATA as any;

    return (
        <section className="py-32 px-6 bg-surface-container-low relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            
            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-on-surface-variant/5 rounded-full mb-8 font-black text-[10px] text-on-surface-variant uppercase tracking-[0.2em] border border-outline-variant/30">
                            Established 2012
                        </div>
                        <h2 className="font-headline text-4xl md:text-6xl font-black text-secondary leading-[1.1] mb-8 uppercase tracking-tight">
                            {brandTrust.title}
                        </h2>
                        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-12 italic border-l-4 border-primary pl-8">
                            {brandTrust.description}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                            {brandTrust.stats.map((stat: any, i: number) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-4xl md:text-5xl font-black text-primary tracking-tighter">{stat.value}</span>
                                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-2">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Trust Certification Badges */}
                        <div className="flex flex-wrap gap-4 pt-12 border-t border-outline-variant/50">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-outline-variant/30 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-xl font-black">verified_user</span>
                                <span className="text-[10px] font-black text-secondary uppercase tracking-widest">ISO 27001 Certified</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-outline-variant/30 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-xl font-black">lock</span>
                                <span className="text-[10px] font-black text-secondary uppercase tracking-widest">HIPAA Compliant</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Grid with better Unsplash links */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-4 md:space-y-6">
                            <div className="aspect-square rounded-[2rem] bg-primary/10 overflow-hidden relative group shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Oxxy Partner Clinic" />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="aspect-[3/4] rounded-[2rem] bg-secondary/5 overflow-hidden shadow-xl">
                                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Health Diagnostics" />
                            </div>
                        </div>
                        <div className="space-y-4 md:space-y-6 pt-12">
                            <div className="aspect-[3/4] rounded-[2rem] bg-secondary/10 overflow-hidden shadow-xl">
                                <img src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Modern Hospital" />
                            </div>
                            <div className="aspect-square rounded-[2rem] bg-primary/5 overflow-hidden relative group shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Advanced Health Tech" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
