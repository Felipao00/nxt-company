// components/sections/Clients.tsx
'use client'

import { motion } from 'framer-motion'
import { Star, Award, Building2, TrendingUp, Sparkles, Shield } from 'lucide-react'

const partners = [
  { 
    name: 'AWS', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    width: 70,
    height: 42,
  },
  { 
    name: 'Google Cloud', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    width: 140,
    height: 24,
  },
  { 
    name: 'Stripe', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
    width: 70,
    height: 30,
  },
  { 
    name: 'GitHub', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    width: 36,
    height: 36,
  },
]

const clientsMarquee = [
  'TechCorp', 'InnovaSolutions', 'DataFlow', 'CloudNine', 'NextGen',
  'PrimeDigital', 'SmartBiz', 'AgileTech', 'FutureLabs', 'CodeCraft',
  'WebWise', 'DigitalPro', 'TechNova', 'ByteBridge', 'SoftSolutions',
]

export default function Clients() {
  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.01] rounded-full blur-[200px]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      {/* Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-white/40" />
            <span className="text-xs text-white/40">Tecnologia que gera confiança</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Empresas que{' '}
            <span className="text-white/20">confiam</span>
            <br className="hidden sm:block" />
            na NXT Digital
          </h2>
          <p className="text-white/30 text-base md:text-lg max-w-2xl mx-auto font-light">
            +80 empresas em 8 países transformaram seus negócios com a gente
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14 md:mb-16"
        >
          {[
            { icon: Building2, value: '80+', label: 'Empresas' },
            { icon: Award, value: '150+', label: 'Projetos' },
            { icon: TrendingUp, value: '98%', label: 'Satisfação' },
            { icon: Shield, value: '8', label: 'Países' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="glass-card p-4 md:p-6 text-center group cursor-default"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 glass rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-white/60 transition-colors" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/30">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-14 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-xs text-white/20 font-medium uppercase tracking-wider whitespace-nowrap">
              Parceiros de tecnologia
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <div className="glass-card p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="flex items-center justify-center p-3"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{
                      width: partner.width,
                      height: partner.height,
                      maxWidth: '100%',
                    }}
                    className="object-contain hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Clients Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-xs text-white/20 font-medium uppercase tracking-wider whitespace-nowrap">
              Empresas que transformamos
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            {/* Marquee */}
            <div className="overflow-hidden py-2">
              <motion.div
                className="flex gap-3"
                animate={{
                  x: ['0%', '-50%'],
                }}
                transition={{
                  x: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {[...clientsMarquee, ...clientsMarquee].map((client, index) => (
                  <motion.div
                    key={`${client}-${index}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0"
                  >
                    <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl px-5 py-2.5 hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300 cursor-default group">
                      <div className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" />
                        <span className="text-white/40 group-hover:text-white/60 transition-colors font-medium text-sm whitespace-nowrap">
                          {client}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <div className="glass-card inline-block px-6 py-4">
            <p className="text-white/30 text-sm md:text-base">
              Faça como essas empresas.{' '}
              <span className="text-white/60 font-medium">
                Transforme seu negócio com a NXT Digital.
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
    </section>
  )
}