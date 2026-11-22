import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/sections/hero/HeroSection';
import { HowItWorksSection } from '@/sections/how-it-works/HowItWorksSection';
import { LeaderboardSection } from '@/sections/leaderboard/LeaderboardSection';
import { FaqSection } from '@/sections/faq/FaqSection';
import { ContactSection } from '@/sections/contact/ContactSection';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <main className="flex-1">
        <HowItWorksSection />
        <LeaderboardSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
