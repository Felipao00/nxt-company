// components/ui/SectionHeading.tsx
'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} mb-16`}
    >
      {label && (
        <span className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-4 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-neutral-400 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}