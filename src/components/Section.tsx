import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-2xl ${alignment} mb-14 gpu`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-2 mb-4 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="w-8 h-px bg-accent/60" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
          <span className="w-8 h-px bg-accent/60" />
        </div>
      )}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold tracking-tight text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-ink-soft leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  );
}
