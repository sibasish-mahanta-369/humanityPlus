import { useState, type MouseEvent } from 'react';
import { HeroBackdrop } from '@/components/brand/HeroBackdrop';
import { ImpactCounter } from './ImpactCounter';
import { LaunchVideoCard } from './LaunchVideoCard';
import { HeroPillars } from './HeroPillars';
import { StoreButtons } from './StoreButtons';

export function HeroSection() {
  const [storeMessage, setStoreMessage] = useState('');

  const handleStoreClick = (storeName: string, url: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (!url || url === '#') {
      event.preventDefault();
      setStoreMessage(`${storeName} download is coming soon. Check back on launch day.`);
    }
  };

  return (
    <header id="top" className="relative overflow-hidden border-b border-royal/30">
      <HeroBackdrop />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 pt-8 pb-12 sm:pt-14 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-royal/20 border border-cyanGlow/40 mb-5 max-w-full shadow-[0_0_20px_rgba(44,229,245,0.14)]">
              <span className="w-2 h-2 rounded-full bg-cyanGlow shadow-[0_0_8px_#2CE5F5]" />
              <span className="font-display font-bold text-[11px] sm:text-xs uppercase tracking-[0.16em] text-cyanGlow">
                LEVEL UP HUMANITY • Volunteer. Earn. Grow.
              </span>
            </div>

            <h1 className="font-display font-black italic text-[2rem] min-[380px]:text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-ice">
              Small good deeds <span className="text-cyanGlow cyan-text-glow">add up to a lot.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-steel max-w-xl leading-relaxed">
              Log the kind things you do, earn points and watch a whole community move the number together.
            </p>

            <StoreButtons onStoreClick={handleStoreClick} message={storeMessage} />
            <ImpactCounter />
          </div>

          <div className="lg:col-span-5">
            <LaunchVideoCard />
          </div>
        </div>

        <HeroPillars />
      </div>
    </header>
  );
}
