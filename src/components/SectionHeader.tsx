/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  readingTime?: string;
}

export default function SectionHeader({ label, title, subtitle, readingTime }: SectionHeaderProps) {
  return (
    <div className="mb-16" id={`section-header-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4"
        >
          <div className="w-8 h-px bg-primary" />
          {label}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold text-text-main leading-tight tracking-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-text-dim mt-2 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {readingTime && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full uppercase tracking-widest font-mono text-[9px] font-bold mt-4 select-none"
          id={`section-header-${title.toLowerCase().replace(/\s+/g, '-')}-reading-time`}
        >
          <BookOpen size={10} className="stroke-[2.5px]" />
          <span>{readingTime}</span>
        </motion.div>
      )}
    </div>
  );
}
