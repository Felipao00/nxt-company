// components/ui/Button.tsx
'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'glass' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-500 focus:outline-none overflow-hidden group'

  const variants = {
    primary:
      'bg-white text-black hover:bg-white/90 active:bg-white/80',
    secondary:
      'bg-white/5 text-white hover:bg-white/10 active:bg-white/5 border border-white/10',
    glass:
      'bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 active:bg-white/5 border border-white/10',
    outline:
      'border border-white/20 text-white hover:border-white/40 hover:bg-white/5',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm rounded-xl gap-1.5',
    md: 'px-7 py-3.5 text-base rounded-2xl gap-2',
    lg: 'px-9 py-5 text-lg rounded-2xl gap-2.5',
  }

  const Component = href ? Link : 'button'

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Component
        href={href || ''}
        onClick={onClick}
        type={type}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {children}
      </Component>
    </motion.div>
  )
}