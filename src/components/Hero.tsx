import React from 'react';
import { APP_DATA } from '../data/mockData';

export const Hero: React.FC = () => {
    const { hero } = APP_DATA;

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 hero-mesh relative overflow-hidden">
            {/* Visual Accents */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/20 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] translate-x-1/2 translate-y-1/2" />

            <div className="max-w-5xl mx-auto z-10 relative">

                <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary mb-6 leading-[1.05]">
                    {hero.title}
                </h1>
                
                <p className="font-body text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
                    {hero.description}
                </p>

                <div className="mb-16">
                    <button className="theme-btn group hover:scale-105 transition-all duration-300">
                        {hero.cta}
                        <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">qr_code_scanner</span>
                    </button>
                </div>

                {/* Trust Features */}
                <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-bold text-on-surface-variant/80 uppercase tracking-[0.2em] mb-16">
                    {hero.features.map((feature, i) => (
                        <span key={i} className="flex items-center gap-1.5 px-4 py-2 bg-on-surface-variant/5 rounded-full">
                            <span className="material-symbols-outlined text-sm text-primary">{feature.icon}</span> 
                            {feature.text}
                        </span>
                    ))}
                </div>

                {/* Tech Preview Box */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white/40 backdrop-blur-xl p-4 md:p-6 rounded-[2.5rem] border border-white/30 oxxy-shadow-lg relative group">
                        <div className="w-full aspect-video rounded-[2rem] bg-secondary-container relative overflow-hidden shadow-inner">
                            <img 
                                src="/oxxy_scan.png" 
                                alt="Oxxy AI Scan Visualization" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="neural-grid" />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                            
                            {/* Animated Scanner Overlays */}
                            <div className="scan-line !h-0.5" />
                            
                            {/* Scanning Data Pill */}
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Status</div>
                                    <div className="text-sm font-bold text-white flex items-center gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                        Analyzing Health Markers...
                                    </div>
                                </div>
                                <div className="hidden md:flex gap-4">
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-white/40 uppercase">Accuracy</div>
                                        <div className="text-xs font-bold text-white">99.2%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Stats */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-4 bg-white/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-sm max-w-fit mx-auto">
                    <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-on-surface-variant/10 overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover grayscale" />
                            </div>
                        ))}
                    </div>
                    <p className="text-xs font-bold text-secondary tracking-wide uppercase leading-none">
                        {hero.stats}
                    </p>
                </div>
            </div>
        </section>
    );
};
