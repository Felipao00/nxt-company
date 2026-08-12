// components/sections/FAQ.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const faqs = [
  {
    question: 'Quanto tempo leva para desenvolver um site?',
    answer: 'O prazo varia conforme a complexidade do projeto. Um site institucional premium leva em média 4-6 semanas. Sistemas mais complexos podem levar de 8-12 semanas. Trabalhamos com metodologia ágil para entregas rápidas e de qualidade.',
  },
  {
    question: 'Vocês oferecem manutenção após a entrega?',
    answer: 'Sim! Oferecemos planos de manutenção e suporte contínuo. Nossos planos incluem monitoramento 24/7, atualizações de segurança, backups e melhorias constantes. Acreditamos em parcerias de longo prazo.',
  },
  {
    question: 'Qual é o investimento médio de um projeto?',
    answer: 'Cada projeto é único e o investimento varia de acordo com as necessidades específicas. Trabalhamos com projetos a partir de R$ 8.000. Entre em contato para uma avaliação personalizada e gratuita.',
  },
  {
    question: 'Como funciona o processo de desenvolvimento?',
    answer: 'Seguimos uma metodologia em 5 etapas: Descoberta (entendemos seu negócio), Estratégia (definimos a solução), Design (criamos a interface), Desenvolvimento (codificamos com excelência) e Entrega (testamos e publicamos).',
  },
  {
    question: 'Vocês trabalham com SEO?',
    answer: 'Sim! Todos os nossos projetos já incluem otimizações SEO essenciais. Para estratégias mais avançadas, oferecemos serviços adicionais de SEO com foco em resultados mensuráveis.',
  },
  {
    question: 'Posso acompanhar o desenvolvimento do projeto?',
    answer: 'Total transparência! Você terá acesso a um dashboard exclusivo para acompanhar o progresso em tempo real. Além disso, fazemos reuniões semanais para alinhamento e feedback.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-surface-elevated relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-500/3 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Perguntas frequentes."
          description="Tudo que você precisa saber sobre nossos serviços."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-neutral-700/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-accent-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-neutral-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-neutral-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}