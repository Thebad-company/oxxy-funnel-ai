import React from 'react';
import { APP_DATA } from '../data/mockData';

interface HeaderProps {
    readonly logo?: string;
}

export const Header: React.FC<HeaderProps> = ({ logo = APP_DATA.navigation.logo }) => {
  return (
    <header className="fixed top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center w-full py-4 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Oxxy Logo" className="h-10 md:h-12 w-auto object-contain" />
        </div>
        <div className="flex items-center">
          <a 
            href="https://www.oxxy.in/health_report/scan.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white font-black text-[10px] md:text-xs uppercase tracking-widest px-6 py-2.5 rounded-full shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="material-symbols-outlined text-lg">qr_code_scanner</span>
            START OXXY SCAN
          </a>
        </div>
      </div>
    </header>
  );
};
