import React from 'react';
import { APP_DATA } from '../data/mockData';

export const ScienceDepth: React.FC = () => {
  const { depth } = APP_DATA;

  return (
    <section className="py-32 px-6 bg-secondary relative overflow-hidden text-center md:text-left">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-1/2 w-[700px] h-[700px] bg-primary/20 blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative group p-4 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                    src="/oxxy_scan.png" 
                    alt="Transdermal Optical Imaging Visualization" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-60" 
                />
                <div className="absolute inset-0 neural-grid opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                
                {/* Data Pointers */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                        <div className="absolute top-1/4 left-1/3 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                            <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#03A297]" />
                            <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded border border-white/20 text-[10px] text-white font-black uppercase tracking-widest">Temporal flow</div>
                        </div>
                        <div className="absolute top-2/3 right-1/4 flex items-center gap-2 group-hover:-translate-x-2 transition-transform">
                            <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded border border-white/20 text-[10px] text-white font-black uppercase tracking-widest text-right">O2 Saturation Map</div>
                            <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#03A297]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8 font-black text-xs text-primary uppercase tracking-[0.2em]">
                Diagnostic Heritage
            </div>
            <h2 className="font-headline text-4xl md:text-6xl text-white mb-6 font-black uppercase tracking-tight">{depth.title}</h2>
            <p className="text-white/70 text-lg md:text-xl font-medium mb-12 italic border-l-4 border-primary pl-8 max-w-xl">{depth.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {depth.features.map((feature, i) => (
                    <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
                        <h4 className="font-headline text-lg font-black text-white uppercase tracking-widest mb-3 group-hover:text-primary transition-colors">{feature.title}</h4>
                        <p className="text-white/50 text-sm font-medium leading-relaxed italic">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};
