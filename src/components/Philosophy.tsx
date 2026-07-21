import { motion } from 'framer-motion';
import { Section } from './Section';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Philosophy() {
  return (
    <Section id="philosophy" className="border-t border-white/5">
      <div className="relative max-w-4xl mx-auto text-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div className="w-[60%] h-[60%] rounded-full blur-soft bg-gradient-to-br from-accent/15 to-accent-2/10 gpu" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="w-8 h-px bg-accent/60" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
            Product philosophy
          </span>
          <span className="w-8 h-px bg-accent/60" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-ink leading-tight tracking-tight text-balance"
        >
          "Every product begins with a repetitive problem.
          <span className="block mt-2 text-ink-soft">
            Technology is just the tool.
          </span>
          <span className="block mt-2 gradient-text">
            The goal is making someone's life easier."
          </span>
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 text-ink-dim font-mono text-sm"
        >
          — how I approach every build
        </motion.p>
      </div>
    </Section>
  );
}
