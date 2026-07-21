import { motion } from 'framer-motion';
import { Section } from './Section';
import { contactInfo } from '../lib/data';

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: '4+', label: 'Years building' },
  { value: '4', label: 'Products shipped' },
  { value: '1', label: 'Studio founded' },
  { value: '∞', label: 'Ideas in queue' },
];

export default function About() {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-accent/60" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
              Who I am
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold tracking-tight text-ink text-balance leading-[1.05]">
            A founder who
            <br />
            <span className="gradient-text">builds.</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-full glass text-xs font-mono text-ink-soft">
              Dehradun, India
            </span>
            <span className="px-3 py-1.5 rounded-full glass text-xs font-mono text-ink-soft">
              CS, 2023 — 2027
            </span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="px-3 py-1.5 rounded-full glass text-xs font-mono text-ink-soft hover:text-ink transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
        </motion.div>

        {/* Right: story */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          <p className="text-xl sm:text-2xl text-ink font-display font-medium leading-snug text-pretty">
            I don't start with a tech stack. I start with a problem someone
            repeats often enough that it's worth solving.
          </p>
          <p className="text-lg text-ink-soft leading-relaxed text-pretty">
            I'm a founder and engineer. I built SPS Labs to ship AI-native
            software end-to-end — from the first user conversation to the
            production deploy. That means I own discovery, strategy,
            architecture, the backend, the frontend, the cloud, and the
            iteration loop that follows.
          </p>
          <p className="text-lg text-ink-soft leading-relaxed text-pretty">
            Every product I've shipped started the same way: a real, repetitive
            friction in someone's day. Then research. Then the thinnest version
            that could prove the idea. Then a real, multi-tenant system behind
            it. Technology is just the tool — the goal is always making
            someone's life easier.
          </p>
          <p className="text-lg text-ink-soft leading-relaxed text-pretty">
            I think like a founder first and an engineer second. I'd rather
            ship something imperfect that real people use than polish something
            nobody asked for. I use AI across the entire workflow — prototyping,
            research, code, debugging, docs — because it lets one person
            operate like a small team.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.06 }}
                className="card-surface p-5"
              >
                <div className="text-3xl font-display font-semibold text-ink mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-ink-dim font-mono uppercase tracking-wider">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
