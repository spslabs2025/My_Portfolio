import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading } from './Section';
import { products } from '../lib/data';

const ease = [0.16, 1, 0.3, 1] as const;

const responsibilities = [
  'Customer discovery & product strategy',
  'System architecture & multi-tenant backend',
  'Frontend engineering & UX',
  'Cloud, Docker & CI/CD deployment',
  'AI-assisted development workflow',
  'Full product lifecycle ownership',
];

export default function Experience() {
  return (
    <Section id="experience" className="border-t border-white/5">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Founder & Lead Engineer
            <br />
            <span className="gradient-text">at SPS Labs.</span>
          </>
        }
        description="Founded SPS Labs to build AI-first software products from scratch — owning every layer from the first user interview to the production deploy."
      />

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Role card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="lg:col-span-5 card-surface p-8 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl bg-accent/15" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-bg text-xs font-semibold font-mono">
                FOUNDER
              </span>
              <span className="text-xs font-mono text-ink-dim">Jan 2025 — Present</span>
            </div>
            <h3 className="text-2xl font-display font-semibold text-ink mb-1">
              SPS Labs
            </h3>
            <p className="text-sm text-ink-dim mb-6">Remote · AI-first software studio</p>
            <a
              href="https://spslabs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-ink transition-colors mb-8"
            >
              spslabs.vercel.app
              <ExternalLink size={13} />
            </a>

            <div className="space-y-2.5">
              {responsibilities.map((r, i) => (
                <motion.div
                  key={r}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease, delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm text-ink-soft">{r}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Products built at SPS Labs */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {products.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.06 }}
              className="group card-surface p-6 relative overflow-hidden"
            >
              <div
                className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: p.glow }}
              />
              <div className="relative flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.accent} flex items-center justify-center shadow-lg`}>
                  <p.icon size={20} className="text-white" />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-ink-dim group-hover:text-ink transition-colors"
                />
              </div>
              <h4 className="font-display font-semibold text-ink text-lg mb-1">
                {p.name}
              </h4>
              <p className="text-sm text-ink-soft leading-relaxed mb-3">
                {p.tagline}
              </p>
              <div className="flex flex-wrap gap-1">
                {p.technologies.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-ink-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
