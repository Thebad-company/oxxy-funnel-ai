import React from 'react';
import { APP_DATA } from '../data/mockData';

export const LabsIntegration: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-surface overflow-hidden relative">
            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-tertiary/10 rounded-full border border-tertiary/20 mb-8 font-black text-xs text-tertiary uppercase tracking-[0.2em]">
                            Revenue Focused
                        </div>
                        <h2 className="font-headline text-4xl md:text-6xl font-black text-secondary leading-tight uppercase tracking-tight mb-8">
                            Seamless Labs & <span className="text-primary italic">Diagnostic Integration.</span>
                        </h2>
                        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 italic border-l-4 border-primary pl-8">
                            Oxxy AI doesn't just scan; it connects. Instantly sync your AI scan results with 20,000+ verified laboratories across India for surgical-grade follow-ups.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-colors group">
                                <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">biotech</span>
                                <h4 className="font-bold text-secondary uppercase tracking-widest text-sm mb-2">Instant Booking</h4>
                                <p className="text-xs text-on-surface-variant leading-relaxed">Book a lab test directly from your AI scan report with exclusive Oxxy discounts.</p>
                            </div>
                            <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-colors group">
                                <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">distance</span>
                                <h4 className="font-bold text-secondary uppercase tracking-widest text-sm mb-2">Home Collection</h4>
                                <p className="text-xs text-on-surface-variant leading-relaxed">Free sample collection within 60 minutes in Delhi NCR, Mumbai, and Bangalore.</p>
                            </div>
                        </div>

                        <a href="https://www.oxxy.in/labs" target="_blank" rel="noopener noreferrer" className="theme-btn group shadow-xl">
                            Explore Partner Labs
                            <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                    </div>

                    <div className="relative">
                        <div className="bg-secondary rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-white/50 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    Live Lab Network Status
                                </div>
                                <div className="space-y-8">
                                    <div className="flex justify-between items-end border-b border-white/10 pb-6">
                                        <div>
                                            <div className="text-sm font-bold opacity-60 mb-1 uppercase tracking-widest">Active Labs</div>
                                            <div className="text-4xl font-headline font-black italic">20,482+</div>
                                        </div>
                                        <div className="text-primary font-black text-xs uppercase tracking-widest">+12% This Mo.</div>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-white/10 pb-6">
                                        <div>
                                            <div className="text-sm font-bold opacity-60 mb-1 uppercase tracking-widest">Tests Available</div>
                                            <div className="text-4xl font-headline font-black italic">3,500+</div>
                                        </div>
                                        <div className="text-tertiary font-black text-xs uppercase tracking-widest">Available Now</div>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="text-sm font-bold opacity-60 mb-1 uppercase tracking-widest">Avg. Saving</div>
                                            <div className="text-4xl font-headline font-black italic">45% OFF</div>
                                        </div>
                                        <div className="text-primary font-black text-xs uppercase tracking-widest">Exclusive</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating Lab Icon */}
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-4 animate-bounce duration-[3000ms]">
                            <img src={APP_DATA.navigation.logo} className="w-full object-contain grayscale opacity-20" alt="Oxxy" />
                            <span className="material-symbols-outlined absolute text-primary text-4xl font-black">science</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
