// components/sections/Services.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedIcon from '@/components/ui/AnimatedIcon'
import { services } from '@/data/services'

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-40 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="O que fazemos"
          title="Soluções completas."
          description="Do design à implementação, entregamos excelência em cada detalhe."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full glass-card p-8 md:p-10 glass-hover glow cursor-pointer">
                {/* Animated Icon */}
                <div className="mb-8">
                  <AnimatedIcon type={service.icon} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white/80 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-white/40 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/30">
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center text-sm font-medium text-white/30 group-hover:text-white/60 transition-all duration-300">
                  <span className="mr-2">Saiba mais</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}