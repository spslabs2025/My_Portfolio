import { motion } from 'framer-motion';
import { Section, SectionHeading } from './Section';
import { skillGroups } from '../lib/data';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  return (
    <Section id="skills" className="border-t border-white/5">
      <SectionHeading
        eyebrow="Toolkit"
        title={
          <>
            Tools I reach for
            <br />
            <span className="gradient-text">when it's time to build.</span>
          </>
        }
        description="Not a scorecard — just the stack I'm fluent in. The right tool is whatever ships the product fastest without regretting it later."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease, delay: gi * 0.05 }}
            className="card-surface p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
                {group.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-sm text-ink-soft hover:text-ink hover:border-white/15 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
