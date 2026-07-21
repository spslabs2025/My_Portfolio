import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Loader2, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Section } from './Section';
import { supabase } from '../lib/supabase';
import { contactInfo, socials } from '../lib/data';

const ease = [0.16, 1, 0.3, 1] as const;

const roles = [
  'Founding Engineer',
  'Backend Engineering',
  'AI Engineering',
  'Technical Product',
  'Startup collaborations',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('messages').insert({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-ink placeholder:text-ink-dim focus:border-accent/50 focus:bg-white/[0.05] transition-colors text-sm';

  return (
    <Section id="contact" className="border-t border-white/5">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left: pitch */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-accent/60" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
              Contact
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold tracking-tight text-ink leading-[1.05] text-balance">
            Have an idea?
            <br />
            <span className="gradient-text">Let's build it.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed text-pretty max-w-md">
            I'm open to founding-engineer, backend, AI, and technical product
            roles — and to collaborating with startups shipping something ambitious.
          </p>

          {/* Roles */}
          <div className="mt-7 flex flex-wrap gap-2">
            {roles.map((r) => (
              <span
                key={r}
                className="px-3 py-1.5 rounded-full glass text-xs font-mono text-ink-soft"
              >
                {r}
              </span>
            ))}
          </div>

          {/* Direct contact */}
          <div className="mt-8 space-y-2.5">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 text-ink-soft hover:text-ink transition-colors group"
            >
              <Mail size={16} className="text-ink-dim group-hover:text-accent transition-colors" />
              <span className="text-sm">{contactInfo.email}</span>
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-ink-soft hover:text-ink transition-colors group"
            >
              <Phone size={16} className="text-ink-dim group-hover:text-accent transition-colors" />
              <span className="text-sm">{contactInfo.phone}</span>
            </a>
            <div className="flex items-center gap-3 text-ink-soft">
              <MapPin size={16} className="text-ink-dim" />
              <span className="text-sm">{contactInfo.location}</span>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg glass text-sm text-ink-soft hover:text-ink hover:border-white/20 transition-colors"
              >
                {s.label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="card-surface p-7 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-ink-dim mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-ink-dim mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-ink-dim mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-ink-dim mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your idea, role, or project..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Status */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm"
              >
                <CheckCircle2 size={16} />
                Message sent. I'll get back to you within 24 hours.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm"
              >
                <AlertCircle size={16} />
                {errorMsg || 'Something went wrong. Please try again.'}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ink text-bg font-medium text-sm hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <ArrowUpRight size={16} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
