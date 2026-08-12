// components/sections/Process.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Descoberta',
    description: 'Imersão no seu negócio para entender objetivos, desafios e oportunidades.',
    details: 'Análise de mercado, público-alvo e concorrentes.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Definição da arquitetura, tecnologia e roadmap do projeto.',
    details: 'Planejamento técnico e definição de métricas de sucesso.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Criação da interface com foco em usabilidade e estética premium.',
    details: 'Wireframes, protótipos e design system completo.',
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    description: 'Codificação com as melhores práticas e tecnologias modernas.',
    details: 'Clean code, testes automatizados e performance otimizada.',
  },
  {
    number: '05',
    title: 'Lançamento',
    description: 'Deploy, monitoramento e suporte contínuo para garantir excelência.',
    details: 'Acompanhamento pós-lançamento e otimizações contínuas.',
  },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="process" className="py-32 md:py-40 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/[0.01] rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Processo"
          title="Como trabalhamos."
          description="Metodologia clara e transparente em cada etapa do projeto."
        />

        <div ref={containerRef} className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-6 lg:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Number Badge */}
                <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 lg:w-24 lg:h-24 glass rounded-3xl flex items-center justify-center relative group cursor-default"
                  >
                    <span className="text-2xl lg:text-3xl font-bold text-white/20 group-hover:text-white/40 transition-colors">
                      {step.number}
                    </span>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`flex-1 w-full ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 lg:p-8 glass-hover"
                  >
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/40 leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <p className="text-white/20 text-sm">
                      {step.details}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}