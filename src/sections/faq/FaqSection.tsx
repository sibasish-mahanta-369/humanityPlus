import { useState } from 'react';
import { FAQS } from '@/data/faqs';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="pb-12 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <SectionHeader
          eyebrow="Knowledge Base"
          title="Frequently asked questions"
          description="Can’t find your answer? Send us a message below."
        />

        <div className="max-w-3xl space-y-3">
          {FAQS.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={question}
                className={`faq-item rpg-card rounded-2xl px-4 sm:px-5 transition-colors ${isOpen ? 'border-cyanGlow/60 shadow-[0_0_24px_rgba(44,229,245,0.1)]' : ''}`}
                data-open={isOpen}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full py-4 sm:py-5 min-h-[56px] flex items-center justify-between gap-3 sm:gap-4 text-left font-display font-bold text-base sm:text-lg text-ice cursor-pointer"
                >
                  <span>{question}</span>
                  <span aria-hidden="true" className="faq-plus grid place-items-center w-8 h-8 rounded-lg bg-cyanGlow/10 border border-cyanGlow/35 text-cyanGlow text-xl leading-none shrink-0 transition-transform duration-200">+</span>
                </button>
                <div id={answerId} className="faq-ans" aria-hidden={!isOpen}>
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm sm:text-base text-steel leading-relaxed">{answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
