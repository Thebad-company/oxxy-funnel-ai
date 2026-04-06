import React from 'react';
import { APP_DATA } from '../data/mockData';

export const SocialProof: React.FC = () => {
    const { socialProof } = APP_DATA;

    return (
        <section className="py-24 px-6 bg-surface-container-low overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="font-headline text-4xl font-bold text-secondary">{socialProof.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {socialProof.testimonials.map((testimonial, i) => (
                        <div 
                            key={i} 
                            className={`bg-white p-10 rounded-xl oxxy-shadow transition-all duration-700 hover:-translate-y-2
                                ${i === 1 ? 'mt-0 md:mt-8' : i === 2 ? 'mt-0 md:mt-16' : ''}`}
                        >
                            <div className="flex items-center gap-1 mb-6 text-[#FFB800]">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <span key={j} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                ))}
                            </div>
                            <p className="text-on-surface-variant italic mb-8 leading-relaxed">
                                {testimonial.quote}
                            </p>
                            <div className="font-bold">
                                {testimonial.name}
                                <span className="font-normal text-on-surface-variant/60 ml-2">{testimonial.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Partners Slider Simulation */}
                <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    {socialProof.partners.map((partnerUrl, i) => (
                        <img 
                            key={i} 
                            alt={`Partner ${i + 1}`} 
                            className="h-8 max-w-[140px] object-contain transition-transform hover:scale-110" 
                            src={partnerUrl} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
