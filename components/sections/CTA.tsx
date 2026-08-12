// components/sections/CTA.tsx
'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { whatsappLink, whatsappMessage } from '@/lib/utils'

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Seu próximo projeto
            <span className="text-accent-light block mt-2">
              começa aqui.
            </span>
          </h2>

          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Conte para a NXT Digital sobre seu projeto. Vamos transformar sua
            ideia em uma solução digital que gera resultados reais.
          </p>

          <Button
            href={`${whatsappLink}?text=${whatsappMessage}`}
            variant="primary"
            size="lg"
            className="text-lg px-10 py-4"
          >
            Falar com a NXT
          </Button>
        </motion.div>
      </div>
    </section>
  )
}