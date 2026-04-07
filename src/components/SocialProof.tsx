import React from 'react';
import { APP_DATA } from '../data/mockData';

export const SocialProof: React.FC = () => {
    const { socialProof } = APP_DATA;

    return (
        <section className="py-32 px-6 bg-surface-container-low relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6 font-black text-xs text-primary uppercase tracking-[0.2em]">
                        Community Trust
                    </div>
                    <h2 className="font-headline text-4xl md:text-6xl font-black text-secondary leading-tight uppercase tracking-tight">{socialProof.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {socialProof.testimonials.map((testimonial, i) => (
                        <div 
                            key={i} 
                            className="group relative bg-white p-10 rounded-[2.5rem] border border-outline-variant/30 shadow-[0_4px_24px_-4px_rgba(2,51,80,0.06)] hover:shadow-[0_32px_64px_-16px_rgba(2,51,80,0.12)] transition-all duration-700 hover:-translate-y-3 flex flex-col"
                        >
                            {/* Quote Icon */}
                            <span className="material-symbols-outlined absolute top-8 right-10 text-primary/10 text-6xl group-hover:text-primary/20 transition-colors pointer-events-none">format_quote</span>

                            <div className="flex items-center gap-1 mb-8 text-[#FFB800]">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <span key={j} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                ))}
                            </div>

                            <p className="font-body text-on-surface-variant text-lg md:text-xl italic mb-10 leading-relaxed font-medium relative z-10">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center font-black text-primary text-xl shadow-inner uppercase">
                                    {testimonial.name.slice(0, 1)}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-headline font-black text-secondary uppercase tracking-wider">{testimonial.name}</span>
                                    <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-[0.1em]">{testimonial.location}</span>
                                </div>
                            </div>

                            {/* Verification Badge */}
                            <div className="absolute -bottom-4 right-10 px-4 py-1.5 bg-tertiary/10 rounded-full border border-tertiary/20 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                <span className="material-symbols-outlined text-xs text-tertiary font-black">verified</span>
                                <span className="text-[10px] font-black text-tertiary uppercase tracking-widest">Verified User</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Partners Slider Simulation */}
                <div className="mt-40">
                    <p className="text-center text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.3em] mb-12">Authorized Digital Health Partners</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        {socialProof.partners.map((partnerUrl, i) => (
                            <img 
                                key={i} 
                                alt={`Partner ${i + 1}`} 
                                className="h-6 md:h-8 max-w-[140px] object-contain transition-transform hover:scale-110" 
                                src={partnerUrl} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
