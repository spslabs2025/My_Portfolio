import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Download } from 'lucide-react';
import { products, contactInfo } from '../lib/data';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full blur-[120px] bg-gradient-to-br from-accent/20 via-accent-2/15 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.3 }}
          className="absolute bottom-0 right-[-10%] w-[50%] h-[40%] rounded-full blur-[120px] bg-gradient-to-tl from-accent-2/15 to-transparent"
        />
      </div>

      <div className="max-w-8xl mx-auto w-full px-4 sm:px-6 lg:px-10">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="inline-flex items-center gap-2 glass rounded-full pl-2 pr-3.5 py-1.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-mono text-ink-soft tracking-wide">
            Available for founding & engineering roles
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight leading-[0.95] text-balance max-w-5xl"
        >
          I build software
          <br />
          <span className="gradient-text">people actually use.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-7 max-w-xl text-lg sm:text-xl text-ink-soft leading-relaxed text-pretty"
        >
          Founder of <span className="text-ink font-medium">SPS Labs</span>. I take products
          from idea to production — discovery, architecture, backend, frontend, deploy, iterate.
          Currently building AI-native software.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.42 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ink text-bg font-medium text-sm hover:bg-white transition-colors"
          >
            View products
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={contactInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass text-ink font-medium text-sm hover:border-white/20 transition-colors"
          >
            <Download size={15} />
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-ink-soft hover:text-ink font-medium text-sm transition-colors"
          >
            Let's talk
          </a>
        </motion.div>

        {/* Featured products */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-ink-dim">
              Featured products
            </span>
            <span className="flex-1 h-px bg-white/8" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {products.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.7 + i * 0.08 }}
                className="group relative card-surface p-5 overflow-hidden"
              >
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: p.glow }}
                />
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.accent} flex items-center justify-center mb-4 shadow-lg`}>
                  <p.icon size={18} className="text-white" />
                </div>
                <div className="font-display font-semibold text-ink text-base mb-1">
                  {p.name}
                </div>
                <div className="text-xs text-ink-dim leading-relaxed line-clamp-2">
                  {p.tagline}
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs text-ink-soft opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit
                  <ArrowUpRight size={12} />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-dim hover:text-ink-soft transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
}
