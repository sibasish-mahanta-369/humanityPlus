import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactForm } from './ContactForm';
import { SocialCard } from './SocialCard';

export function ContactSection() {
  return (
    <section id="contact" className="pb-14 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <SectionHeader
          eyebrow="Join The Movement"
          title="Get in touch"
          description="Questions, feedback or press enquiries are all welcome."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <SocialCard />
          </div>
        </div>
      </div>
    </section>
  );
}
