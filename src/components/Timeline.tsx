import { motion } from 'framer-motion';
import { Section, SectionHeading } from './Section';
import { timeline } from '../lib/data';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Timeline() {
  return (
    <Section id="timeline" className="border-t border-white/5">
      <SectionHeading
        eyebrow="Timeline"
        title={
          <>
            One year.
            <br />
            <span className="gradient-text">Four products shipped.</span>
          </>
        }
        description="A condensed look at the build log — from founding SPS Labs to what's in progress right now."
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[19px] sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent sm:-translate-x-px" />

        <div className="space-y-8">
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.05 }}
                className={`relative flex items-center gap-6 ${
                  isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[15px] sm:left-1/2 sm:-translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 + 0.2 }}
                    className="w-3 h-3 rounded-full bg-accent ring-4 ring-bg shadow-[0_0_16px_var(--accent-glow)]"
                  />
                </div>

                {/* Spacer for desktop */}
                <div className="hidden sm:block sm:flex-1" />

                {/* Card */}
                <div className="sm:flex-1 pl-12 sm:pl-0">
                  <div className={`card-surface p-5 ${isLeft ? 'sm:mr-8' : 'sm:ml-8'}`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs text-accent tracking-wider">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-ink text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
