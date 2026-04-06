import React from 'react';
import { APP_DATA } from '../data/mockData';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-surface-container-low w-full py-20 border-t border-outline-variant/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16">
                    {/* Logo & Description */}
                    <div className="flex flex-col gap-6">
                        <img src={APP_DATA.navigation.logo} alt="Oxxy Logo" className="h-10 md:h-12 w-auto object-contain self-start" />
                        <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs font-medium">
                            Providing transparent, high-quality, and affordable AI-driven healthcare solutions to 1.3 billion Indians.
                        </p>
                    </div>


                    <div className="flex flex-col gap-6">
                        <h4 className="font-black text-xs text-secondary uppercase tracking-widest">Quick Navigation</h4>
                        <div className="flex flex-wrap gap-x-8 gap-y-4 font-bold text-xs uppercase tracking-widest">
                            <a href="https://www.oxxy.in/health_report/scan.php" className="text-on-surface-variant/70 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">AI Health Scan</a>
                            <a href="#faq" className="text-on-surface-variant/70 hover:text-primary transition-colors">FAQ</a>
                            <a href="https://www.oxxy.in/about-us" className="text-on-surface-variant/70 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">About Us</a>
                            <a href="https://www.oxxy.in/contact-us" className="text-on-surface-variant/70 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Contact</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant/60 text-[10px] font-bold uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} Oxxy Healthcare. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
