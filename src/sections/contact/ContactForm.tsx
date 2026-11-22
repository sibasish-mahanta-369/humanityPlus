import { useState, type FormEvent } from 'react';

interface ContactFields {
  name: string;
  email: string;
  message: string;
}

type ContactErrors = Partial<Record<keyof ContactFields, string>>;

const EMPTY_FORM: ContactFields = { name: '', email: '', message: '' };

export function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);

  const setField = (key: keyof ContactFields) => (value: string) => {
    setFields((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => previous[key] ? { ...previous, [key]: undefined } : previous);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = fields.name.trim();
    const email = fields.email.trim();
    const message = fields.message.trim();
    const nextErrors: ContactErrors = {};

    if (!name) nextErrors.name = 'Enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Enter a valid email address.';
    if (message.length < 10) nextErrors.message = 'Write at least 10 characters.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setFields({ name, email, message });
      setSent(true);
    }
  };

  const resetForm = () => {
    setFields(EMPTY_FORM);
    setErrors({});
    setSent(false);
  };

  if (sent) {
    const firstName = fields.name.split(/\s+/)[0];

    return (
      <div className="rpg-card rounded-2xl p-6 border-emeraldXp/60 bg-emeraldXp/10" role="status">
        <div className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-emeraldXp mb-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
          Transmission Verified
        </div>
        <h3 className="font-display font-extrabold text-2xl text-ice mb-2">Thanks, {firstName}.</h3>
        <p className="text-steel">We’ve got your message and will reply to <span className="text-cyanGlow font-medium">{fields.email}</span> within two business days.</p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-5 btn-glass-cta inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider cursor-pointer"
        >
          Send another message
        </button>
        <p className="mt-4 text-xs text-steel/80">Demo form: this confirmation is local only. Connect a form endpoint before collecting real submissions.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rpg-card rounded-3xl p-4 min-[400px]:p-6 sm:p-7 space-y-4">
      <label className="block">
        <span className="block text-sm font-display font-bold uppercase tracking-wider text-ice mb-1.5">Name</span>
        <input
          value={fields.name}
          onChange={(event) => setField('name')(event.target.value)}
          autoComplete="name"
          placeholder="Arjun Mehta"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'err-name' : undefined}
          className="w-full px-4 py-3 rounded-xl bg-abyss/80 border border-royal/45 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyanGlow focus:ring-2 focus:ring-cyanGlow/30 transition"
        />
        {errors.name && <span id="err-name" role="alert" className="block mt-1.5 text-xs font-semibold text-rose-400">{errors.name}</span>}
      </label>

      <label className="block">
        <span className="block text-sm font-display font-bold uppercase tracking-wider text-ice mb-1.5">Email</span>
        <input
          type="email"
          value={fields.email}
          onChange={(event) => setField('email')(event.target.value)}
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'err-email' : undefined}
          className="w-full px-4 py-3 rounded-xl bg-abyss/80 border border-royal/45 text-ice placeholder:text-steel/50 focus:outline-none focus:border-cyanGlow focus:ring-2 focus:ring-cyanGlow/30 transition"
        />
        {errors.email && <span id="err-email" role="alert" className="block mt-1.5 text-xs font-semibold text-rose-400">{errors.email}</span>}
      </label>

      <label className="block">
        <span className="block text-sm font-display font-bold uppercase tracking-wider text-ice mb-1.5">Message</span>
        <textarea
          value={fields.message}
          onChange={(event) => setField('message')(event.target.value)}
          placeholder="Tell us what's on your mind..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'err-message' : undefined}
          className="w-full min-h-[124px] px-4 py-3 rounded-xl bg-abyss/80 border border-royal/45 text-ice placeholder:text-steel/50 resize-y focus:outline-none focus:border-cyanGlow focus:ring-2 focus:ring-cyanGlow/30 transition"
        />
        {errors.message && <span id="err-message" role="alert" className="block mt-1.5 text-xs font-semibold text-rose-400">{errors.message}</span>}
      </label>

      <button type="submit" className="btn-cyan-glow w-full sm:w-auto justify-center inline-flex items-center gap-2 font-display font-extrabold uppercase tracking-wider text-sm px-6 py-3.5 rounded-xl cursor-pointer">
        Send message
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
      </button>
    </form>
  );
}
