import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemStats } from './components/ProblemStats';
import { VerticalSteps } from './components/VerticalSteps';
import { ScienceDepth } from './components/ScienceDepth';
import { ScanModule } from './components/ScanModule';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PricingStrategy } from './components/PricingStrategy';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <ProblemStats />
        <VerticalSteps />
        <ScienceDepth />
        <PricingStrategy />
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
