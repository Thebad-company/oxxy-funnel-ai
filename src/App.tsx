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
    </div>
  );
}

export default App;
