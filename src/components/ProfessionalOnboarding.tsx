import React, { useState } from 'react';

export const ProfessionalOnboarding: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        specialty: '',
        registrationNumber: '',
        city: '',
        state: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section className="py-24 px-6 bg-surface text-center" id="professional-onboarding">
                <div className="max-w-3xl mx-auto p-12 bg-white rounded-[3rem] shadow-2xl border border-primary/10">
                    <span className="material-symbols-outlined text-primary text-7xl mb-6">task_alt</span>
                    <h2 className="font-headline text-4xl font-black text-secondary uppercase tracking-tight mb-4">Application Received</h2>
                    <p className="text-on-surface-variant text-lg font-medium italic mb-8">
                        Thank you, Dr. {formData.name.split(' ')[0]}. Our medical board will review your credentials and get back to you within 48 hours.
                    </p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="text-primary font-black uppercase text-xs tracking-widest hover:gap-4 transition-all flex items-center justify-center gap-2 mx-auto"
                    >
                        Back to top <span className="material-symbols-outlined">arrow_upward</span>
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 px-6 bg-secondary relative overflow-hidden" id="professional-onboarding">
            <div className="absolute inset-0 opacity-5 neural-grid pointer-events-none" />
            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-8 font-black text-xs text-primary uppercase tracking-[0.2em]">
                            Grow with Oxxy
                        </div>
                        <h2 className="font-headline text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tight mb-8">
                            Partner as a <span className="text-primary italic">Medical Professional.</span>
                        </h2>
                        <p className="text-white/70 text-xl leading-relaxed mb-12 italic border-l-4 border-primary pl-8">
                            Join India's largest AI-driven health network. Access real-time patient vitals, expand your clinical reach, and provide data-backed consultations to millions.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-white">
                                <span className="material-symbols-outlined text-primary">analytics</span>
                                <span className="font-bold text-sm uppercase tracking-widest">Real-time Vitals Dashboard</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <span className="material-symbols-outlined text-primary">groups</span>
                                <span className="font-bold text-sm uppercase tracking-widest">2 Million+ Active Patients</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <span className="material-symbols-outlined text-primary">payments</span>
                                <span className="font-bold text-sm uppercase tracking-widest">Streamlined Revenue Cycles</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative">
                        <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary rounded-2xl shadow-xl flex items-center justify-center -rotate-12">
                            <span className="material-symbols-outlined text-white text-4xl">medical_services</span>
                        </div>
                        
                        <h3 className="font-headline text-2xl font-black text-secondary mb-8 uppercase tracking-tighter">Registration Form</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Full Name</label>
                                    <input 
                                        required
                                        type="text" 
                                        className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                                        placeholder="Dr. John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Email Address</label>
                                    <input 
                                        required
                                        type="email" 
                                        className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                                        placeholder="doctor@clinic.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Specialty</label>
                                    <input 
                                        required
                                        type="text" 
                                        className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                                        placeholder="Cardiology"
                                        value={formData.specialty}
                                        onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Reg. Number (MCI)</label>
                                    <input 
                                        required
                                        type="text" 
                                        className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                                        placeholder="MCI-12345"
                                        value={formData.registrationNumber}
                                        onChange={(e) => setFormData({...formData, registrationNumber: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">City</label>
                                    <input 
                                        required
                                        type="text" 
                                        className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                                        placeholder="New Delhi"
                                        value={formData.city}
                                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">State</label>
                                    <input 
                                        required
                                        type="text" 
                                        className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                                        placeholder="Delhi"
                                        value={formData.state}
                                        onChange={(e) => setFormData({...formData, state: e.target.value})}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="theme-btn w-full text-center mt-4">
                                Submit Credentials
                            </button>
                            
                            <p className="text-[10px] text-on-surface-variant text-center opacity-60">
                                By submitting, you agree to Oxxy's Professional Terms of Service and Data Privacy protocols.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
