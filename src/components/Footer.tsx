import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { socials, contactInfo } from '../lib/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-bg-soft">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12"
        >
          <p className="text-2xl sm:text-3xl font-display font-medium text-ink leading-snug text-balance">
            I enjoy building products that solve real problems.
          </p>
          <p className="mt-3 text-lg text-ink-soft text-pretty">
            If you're building something ambitious, I'd love to hear about it.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          {/* Brand + socials */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold font-display">S</span>
              </div>
              <span className="font-display font-semibold text-ink text-sm tracking-tight">
                Sohard Pratap Singh
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg glass text-xs font-mono text-ink-soft hover:text-ink hover:border-white/20 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-block mt-4 text-sm text-ink-dim hover:text-ink-soft transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>

          {/* Right: back to top */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-ink-dim">
              © {new Date().getFullYear()}
            </span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm text-ink-soft hover:text-ink hover:border-white/20 transition-colors"
              aria-label="Back to top"
            >
              Back to top
              <motion.span
                whileHover={{ y: -2 }}
                className="text-accent"
              >
                <ArrowUp size={15} />
              </motion.span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
