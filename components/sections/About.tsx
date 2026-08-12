// components/sections/About.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  Sparkles,
  Clock,
  CheckCircle2
} from 'lucide-react'
import Button from '@/components/ui/Button'
import { whatsappLink, whatsappMessage } from '@/lib/utils'

const stats = [
  { icon: TrendingUp, value: '150+', label: 'Projetos entregues' },
  { icon: Users, value: '80+', label: 'Clientes ativos' },
  { icon: Clock, value: '6+', label: 'Anos de experiência' },
  { icon: Award, value: '98%', label: 'Satisfação' },
]

const values = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Transformar negócios através de soluções digitais que geram resultados mensuráveis e impacto real.',
  },
  {
    icon: Eye,
    title: 'Visão',
    description: 'Ser referência em desenvolvimento de soluções digitais premium, reconhecida pela excelência técnica.',
  },
  {
    icon: Heart,
    title: 'Valores',
    description: 'Excelência, inovação, transparência e compromisso com o sucesso de cada cliente.',
  },
]

const highlights = [
  'Equipe sênior com 6+ anos de experiência',
  'Metodologia ágil e transparente',
  'Tecnologia de ponta em cada projeto',
  'Suporte dedicado pós-entrega',
  'Design premium e exclusivo',
  'Performance otimizada (90+ PageSpeed)',
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.01] rounded-full blur-[200px]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 glass rounded-full mb-6 md:mb-8">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/40" />
            <span className="text-xs md:text-sm text-white/40">Quem somos</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            Muito além de{' '}
            <span className="text-white/20">código</span>
          </h2>
          <p className="text-white/30 text-base md:text-xl max-w-3xl mx-auto font-light">
            Somos uma empresa de tecnologia focada em criar soluções digitais que 
            realmente fazem diferença nos resultados dos nossos clientes
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-20">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white/60" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Quem somos
                </h3>
              </div>
              <p className="text-white/40 leading-relaxed text-base md:text-lg">
                A NXT Digital nasceu em 2019 com um propósito claro: entregar soluções 
                digitais de alto padrão para empresas que não aceitam o básico. 
                Combinamos expertise técnica, design premium e visão estratégica 
                para criar produtos que realmente geram resultados.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white/60" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  O que nos move
                </h3>
              </div>
              <p className="text-white/40 leading-relaxed text-base md:text-lg">
                Acreditamos que tecnologia de qualidade transforma negócios. 
                Por isso, cada projeto é tratado como único, com atenção aos 
                detalhes que fazem a diferença. Não entregamos apenas código, 
                entregamos soluções que impactam positivamente os resultados 
                dos nossos clientes.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-lg glass flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-white/40" />
                  </div>
                  <span className="text-white/50 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Button
              href={`${whatsappLink}?text=${whatsappMessage}`}
              variant="primary"
              size="md"
              className="group"
            >
              Conhecer a NXT Digital
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right - Stats & Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card p-6 text-center group cursor-default relative overflow-hidden"
                >
                  {/* Background hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                      <stat.icon className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-white/30">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Values Cards */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="glass-card p-5 group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0 group-hover:border-white/20 transition-all duration-500">
                      <value.icon className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {value.title}
                      </h4>
                      <p className="text-white/30 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-white/[0.02]" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse-soft" />
                <span className="text-sm text-white/40">Disponível para novos projetos</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Pronto para transformar seu{' '}
                <span className="text-white/40">negócio?</span>
              </h3>
              
              <p className="text-white/30 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Agende uma consultoria gratuita e descubra como a NXT Digital 
                pode ajudar sua empresa a alcançar o próximo nível.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href={`${whatsappLink}?text=${whatsappMessage}`}
                  variant="primary"
                  size="md"
                >
                  Solicitar proposta
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="#services"
                  variant="glass"
                  size="md"
                >
                  Ver serviços
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
    </section>
  )
}