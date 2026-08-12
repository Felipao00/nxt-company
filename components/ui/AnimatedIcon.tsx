// components/ui/AnimatedIcon.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  Globe, Code2, ShoppingCart, Smartphone, Lightbulb, Headphones,
  Palette, Settings, Zap, Layout
} from 'lucide-react'

interface AnimatedIconProps {
  type: string
  className?: string
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Globe,
  Code2,
  ShoppingCart,
  Smartphone,
  Lightbulb,
  Headphones,
  Palette,
  Settings,
  Zap,
  Layout,
}

const animations = {
  pulse: {
    scale: [1, 1.1, 1],
    opacity: [0.4, 0.6, 0.4],
  },
  rotate: {
    rotate: [0, 360],
  },
  float: {
    y: [0, -10, 0],
  },
  shake: {
    x: [0, -2, 2, -2, 2, 0],
  },
}

export default function AnimatedIcon({ type, className = '' }: AnimatedIconProps) {
  const IconComponent = iconMap[type]
  
  if (!IconComponent) return null

  const animationType = type === 'Globe' ? 'pulse' 
    : type === 'Code2' ? 'rotate'
    : type === 'ShoppingCart' ? 'shake'
    : type === 'Lightbulb' ? 'float'
    : 'pulse'

  return (
    <motion.div
      animate={animations[animationType]}
      transition={{
        duration: type === 'rotate' ? 8 : 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`w-14 h-14 rounded-2xl glass flex items-center justify-center ${className}`}
    >
      <IconComponent className="w-7 h-7 text-white/60" />
    </motion.div>
  )
}