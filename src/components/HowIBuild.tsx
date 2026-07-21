import { motion } from 'framer-motion';
import { Section, SectionHeading } from './Section';
import { buildSteps } from '../lib/data';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HowIBuild() {
  return (
    <Section id="how" className="border-t border-white/5">
      <SectionHeading
        eyebrow="How I build"
        title={
          <>
            From a problem to a
            <br />
            <span className="gradient-text">product in production.</span>
          </>
        }
        description="Every product I ship follows the same loop. It's not linear — it's a cycle that repeats until the product earns its place in someone's day."
      />

      <div className="relative">
        {/* Connecting line for desktop */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {buildSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="relative"
            >
              <div className="card-surface p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-ink-dim tracking-wider">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-accent/60 shadow-[0_0_12px_var(--accent-glow)]" />
                </div>
                <h3 className="font-display font-semibold text-ink text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loop indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-3 text-ink-dim"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em]">
            Feedback feeds the next problem
          </span>
          <span className="text-accent">↻</span>
        </motion.div>
      </div>
    </Section>
  );
}
