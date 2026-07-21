import { motion } from 'framer-motion';
import { Section, SectionHeading } from './Section';
import { achievements } from '../lib/data';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Achievements() {
  return (
    <Section id="achievements" className="border-t border-white/5">
      <SectionHeading
        eyebrow="Milestones"
        title={
          <>
            What I've earned
            <br />
            <span className="gradient-text">the hard way.</span>
          </>
        }
        description="Not certifications — outcomes. The things that only happen when you own a product from zero to production."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease, delay: i * 0.05 }}
            className="card-surface p-6 group"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="font-mono text-xs text-ink-dim tracking-wider mt-0.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 shadow-[0_0_10px_var(--accent-glow)]" />
            </div>
            <h3 className="font-display font-semibold text-ink text-lg mb-2 leading-tight">
              {a.title}
            </h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              {a.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
