import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SymptomSection } from './components/SymptomSection';
import { VerticalSteps } from './components/VerticalSteps';
import { ScanModule } from './components/ScanModule';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { HealthCategories } from './components/HealthCategories';
import { BrandTrust } from './components/BrandTrust';
import { ReportPreview } from './components/ReportPreview';
import { HealthFacts } from './components/HealthFacts';
import { ComparisonSection } from './components/ComparisonSection';
import { PersonaSection } from './components/PersonaSection';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <SymptomSection />
        <HealthFacts />
        <HealthCategories />
        <ReportPreview />
        <ComparisonSection />
        <VerticalSteps />
        <PersonaSection />
        <BrandTrust />
        <ScanModule />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />

      {/* Persistent Sticky Disclaimer Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-secondary text-white py-3 px-6 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em] z-[60] border-t border-primary/20 shadow-[0_-4px_20px_rgba(3,162,151,0.2)]">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
              <span className="material-symbols-outlined text-primary text-sm animate-pulse">emergency</span>
              Disclaimer: AI results are wellness indicators only. Consult a doctor for clinical accuracy.
              <span className="material-symbols-outlined text-primary text-sm animate-pulse">emergency</span>
          </div>
      </div>
    </div>
  );
}

export default App;
