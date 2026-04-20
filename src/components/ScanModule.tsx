import React from 'react';
import { APP_DATA } from '../data/mockData';
import { useScanSimulation } from '../hooks/useScanSimulation';

export const ScanModule: React.FC = () => {
    const { scanModule } = APP_DATA;
    const { progress, isScanning } = useScanSimulation(scanModule.initialProgress);

    return (
        <section className="py-24 px-6 bg-surface-container-low" id="scan-module">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl p-8 md:p-16 oxxy-shadow border border-outline-variant/10 text-center relative overflow-hidden">
                    
                    {/* Official Tech Badge */}
                    <div className="mb-10 inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-primary/20 shadow-lg">
                        <span className="material-symbols-outlined text-primary text-base">emergency_home</span>
                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">{scanModule.disclaimer.short}</span>
                    </div>

                    <h2 className="font-headline text-3xl md:text-5xl text-secondary mb-12 font-black uppercase tracking-tight">
                        {isScanning ? scanModule.title : "Diagnostic Snapshot Complete."}
                    </h2>

                    {/* Progress & Live Scanner Feedback */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        
                        <div className="relative aspect-square max-w-sm mx-auto rounded-full border-8 border-dashed border-primary/10 p-4 flex items-center justify-center">
                            <div className="w-full h-full rounded-full overflow-hidden bg-secondary-container relative">
                                <img 
                                    alt="Live Oxxy Scan" 
                                    className={`w-full h-full object-cover transition-opacity duration-1000 ${isScanning ? 'opacity-40 scale-110' : 'opacity-90 scale-100'}`}
                                    src={scanModule.previewImage} 
                                />
                                <div className="neural-grid" />
                                {isScanning && <div className="scan-line !h-1" />}
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
                            </div>
                            
                            {/* Live Status Pill */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-6 py-2 rounded-full shadow-xl flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${isScanning ? 'bg-primary animate-pulse' : 'bg-tertiary'}`} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">{isScanning ? 'Reading Vitals...' : 'Data Locked'}</span>
                            </div>
                        </div>

                        <div className="text-left">
                            <div className="flex justify-between items-end mb-4">
                                <div>
                                    <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-1">AI Processing Progress</h3>
                                    <p className="text-xs text-on-surface-variant italic">Mapping 10,000+ per-second bio-markers</p>
                                </div>
                                <span className="text-4xl font-headline font-black text-primary">{progress}%</span>
                            </div>
                            <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden mb-12">
                                <div className="h-full bg-primary rounded-full relative overflow-hidden transition-all duration-300 ease-out" style={{ width: `${progress}%` }}>
                                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl border border-outline-variant/10 bg-surface-container-low/50">
                                    <div className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Security</div>
                                    <div className="text-sm font-bold text-secondary flex items-center gap-2">
                                        <span className="material-symbols-outlined text-tertiary text-lg">enhanced_encryption</span>
                                        HIPAA Compliant
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-outline-variant/10 bg-surface-container-low/50">
                                    <div className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Diagnostic Mode</div>
                                    <div className="text-sm font-bold text-secondary flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">biotech</span>
                                        TOI Optical Imaging
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Report Grid - Modern High Depth */}
                    <div className={`transition-all duration-1000 delay-300 ${!isScanning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                            {scanModule.results.map((result, i) => (
                                <div key={i} className="p-6 bg-surface-container-low/30 rounded-2xl border border-outline-variant/5 text-center group hover:bg-white hover:oxxy-shadow transition-all duration-500">
                                    <span className="block text-[10px] font-black text-on-surface-variant mb-2 uppercase tracking-[0.15em]">{result.label}</span>
                                    <span className="block text-3xl font-headline font-black text-secondary group-hover:scale-110 transition-transform mb-2">
                                        {result.value}
                                    </span>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-outline-variant/10">
                                        <span className={`w-1.5 h-1.5 rounded-full ${result.color === 'tertiary' ? 'bg-tertiary' : result.color === 'primary' ? 'bg-primary' : 'bg-error'}`} />
                                        <span className="text-[10px] font-bold text-secondary uppercase leading-none">{result.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Personalized Recommendation Card */}
                        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both">
                            <div className="p-10 bg-secondary rounded-[2.5rem] relative overflow-hidden text-left mb-12 oxxy-shadow-lg">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 backdrop-blur-md rounded-full border border-primary/20 mb-6 font-bold text-[10px] text-primary uppercase tracking-widest">
                                        Clinical Suggestion
                                    </div>
                                    <p className="text-white text-xl md:text-2xl leading-relaxed mb-10 font-medium italic" dangerouslySetInnerHTML={{ __html: scanModule.recommendation.text }} />
                                    <a 
                                        className="theme-btn w-full md:w-auto text-center"
                                        href="https://www.oxxy.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {scanModule.recommendation.cta}
                                    </a>
                                </div>
                            </div>
                            
                            {/* Full Legal Disclaimer - Professional Positioning */}
                            <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-[#023350] rounded-3xl border border-primary/20 text-left shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-primary/10 transition-colors" />
                                <span className="material-symbols-outlined text-primary text-4xl shrink-0 bg-white/10 p-3 rounded-2xl">error</span>
                                <div>
                                    <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                                        Medical Disclaimer
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    </h4>
                                    <p className="text-white/80 text-[11px] md:text-xs font-medium leading-relaxed italic">
                                        {scanModule.disclaimer.full}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
