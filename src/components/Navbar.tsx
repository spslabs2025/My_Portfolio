import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'how', label: 'How I Build' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'products', label: 'Products' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ['hero', ...navItems.map((n) => n.id)];
      const pos = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-5xl"
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-3 sm:px-4 py-2.5 transition-all duration-300 ${
            scrolled || open ? 'glass-strong shadow-2xl shadow-black/40' : 'glass'
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => handleClick(e, 'hero')}
            className="flex items-center gap-2.5 pl-1.5 pr-2 min-w-0"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center shadow-lg shadow-accent/30 flex-shrink-0">
              <span className="text-white text-xs font-bold font-display">S</span>
            </div>
            <span className="font-display font-semibold text-ink text-sm tracking-tight hidden sm:block truncate">
              Sohard Pratap Singh
            </span>
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  active === item.id
                    ? 'text-ink'
                    : 'text-ink-dim hover:text-ink-soft'
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/8 border border-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, 'contact')}
              className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-ink text-bg text-sm font-medium hover:bg-white transition-colors"
            >
              Let's talk
              <ArrowUpRight size={14} />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 -mr-1 rounded-lg text-ink-soft hover:text-ink hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown panel — attached below the bar */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mt-2 glass-strong rounded-2xl p-3 shadow-2xl shadow-black/50 origin-top"
            >
              <div className="grid grid-cols-2 gap-1.5">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active === item.id
                        ? 'bg-white/10 text-ink'
                        : 'text-ink-soft hover:bg-white/5 hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, 'contact')}
                className="mt-2 flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-ink text-bg text-sm font-semibold"
              >
                Let's talk
                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop to catch outside taps */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-bg/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
