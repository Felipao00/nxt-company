// components/sections/Differentials.tsx
'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const differentials = [
  {
    number: '01',
    title: 'Pensado para o negócio',
    description: 'Cada projeto começa entendendo os objetivos e métricas de sucesso.',
  },
  {
    number: '02',
    title: 'Design que comunica',
    description: 'Interface visual que transmite profissionalismo e fortalece a marca.',
  },
  {
    number: '03',
    title: 'Tecnologia moderna',
    description: 'Stack atualizada com foco em performance, segurança e escalabilidade.',
  },
  {
    number: '04',
    title: 'Performance desde o início',
    description: 'Código otimizado, carregamento rápido e excelente experiência de uso.',
  },
  {
    number: '05',
    title: 'Experiência do usuário',
    description: 'Navegação intuitiva pensada para o comportamento do seu público.',
  },
  {
    number: '06',
    title: 'Soluções personalizadas',
    description: 'Nada de templates genéricos. Cada projeto é único e sob medida.',
  },
]

export default function Differentials() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Diferenciais"
          title="Por que escolher a NXT Digital."
          description="Compromisso com qualidade, prazos e resultados."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-neutral-900 border border-neutral-800/50 rounded-2xl p-8 hover:border-accent/20 transition-all duration-300"
            >
              <span className="text-4xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-300 mb-4 block">
                {item.number}
              </span>
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}