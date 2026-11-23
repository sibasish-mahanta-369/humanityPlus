import { SectionHeader } from '@/components/ui/SectionHeader';
import { StepHexBadge } from '@/components/brand/StepHexBadge';
import { STEPS } from '@/data/howItWorks';

export function HowItWorksSection() {
  return (
    <section id="how" className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <SectionHeader
          eyebrow="Core Quest Loop"
          title="Register for a quest. Complete it. Repeat."
          description="Find quests near you. Complete the quest to gain XP and level-up"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <article key={step.num} className="rpg-card rpg-card-hover relative rounded-3xl p-6 overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${step.bar}`} />
              <div className="flex items-center justify-between gap-3 mb-5 pt-1">
                <StepHexBadge num={step.num} fill={step.hexFill} stroke={step.hexStroke} textCls={step.textCls} />
                <span className="text-[11px] font-display font-bold uppercase tracking-[0.16em] text-steel">{step.tag}</span>
              </div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ice mb-2.5">{step.title}</h3>
              <p className="text-sm sm:text-base text-steel leading-relaxed">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
