import React from 'react';
import { APP_DATA } from '../data/mockData';

export const FinalCTA: React.FC = () => {
    const { footer } = APP_DATA;

    return (
        <section className="py-24 px-6 bg-surface text-center overflow-hidden relative border-t border-outline-variant/10">
            <div className="max-w-4xl mx-auto z-10 relative">
                <h2 className="font-headline text-5xl md:text-7xl text-secondary mb-8 font-black uppercase tracking-tight">
                    {footer.cta.title}
                </h2>
                <p className="text-on-surface-variant/80 text-xl mb-12 font-medium">
                    {footer.cta.description}
                </p>
                <div className="flex flex-col items-center gap-6">
                    <a className="theme-btn text-lg md:px-14 md:py-5 group" href="https://www.oxxy.in/" target="_blank" rel="noopener noreferrer">
                        {footer.cta.secondaryAction} <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>
            </div>
            {/* Decorative Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none transition-all duration-1000 animate-pulse"></div>
        </section>
    );
};
