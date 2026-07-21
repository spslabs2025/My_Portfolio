import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { Section, SectionHeading } from './Section';
import { products } from '../lib/data';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Products() {
  return (
    <Section id="products" className="border-t border-white/5">
      <SectionHeading
        eyebrow="Products"
        title={
          <>
            Four products.
            <br />
            <span className="gradient-text">All shipped, all live.</span>
          </>
        }
        description="Each one started with a real, repetitive problem. Each one is in production with real users. This is the work I'm proudest of."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {products.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease, delay: i * 0.08 }}
            className="group relative card-surface overflow-hidden"
          >
            {/* Header banner */}
            <div className={`relative h-36 bg-gradient-to-br ${p.accent} overflow-hidden`}>
              <div className="absolute inset-0 opacity-30">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-softer animate-float gpu" />
                <div className="absolute -bottom-12 -left-8 w-32 h-32 bg-white/10 rounded-full blur-softer animate-float-slow gpu" />
              </div>
              <div className="relative h-full flex items-center justify-between px-7">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center ring-1 ring-white/25">
                    <p.icon size={26} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-white drop-shadow-sm">
                      {p.name}
                    </h3>
                    <p className="text-white/90 text-sm font-medium max-w-xs leading-snug">
                      {p.tagline}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-7">
              {/* Problem / Solution */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-rose-400/80">
                      Problem
                    </span>
                  </div>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {p.problem}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400/80">
                      Solution
                    </span>
                  </div>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {p.solution}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-ink-dim">
                    Key features
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-gradient-to-br ${p.accent} flex items-center justify-center`}>
                        <Check size={10} className="text-white" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-ink-soft">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech + CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/8">
                <div className="flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-ink-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r ${p.accent} text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow`}
                >
                  Live demo
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
