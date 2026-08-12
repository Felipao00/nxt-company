// components/sections/Testimonials.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Sparkles, Play, Pause } from 'lucide-react'

const testimonials = [
  {
    id: '1',
    name: 'Ricardo Almeida',
    role: 'CEO & Fundador',
    company: 'TechCorp Brasil',
    initials: 'RA',
    content: 'A NXT Digital não apenas entregou um site excepcional, mas transformou completamente nossa presença digital. O profissionalismo da equipe e a qualidade técnica são impressionantes. Nossa taxa de conversão aumentou 340% após o lançamento.',
    rating: 5,
    project: 'Portal Corporativo Premium',
    result: '+340% em conversão',
    duration: '3 meses de projeto',
  },
  {
    id: '2',
    name: 'Marina Santos',
    role: 'Diretora de Marketing',
    company: 'InnovaSolutions',
    initials: 'MS',
    content: 'Trabalhar com a NXT foi uma experiência transformadora. Eles entenderam exatamente o que precisávamos e entregaram além das expectativas. O design sofisticado e a performance impecável do nosso e-commerce superaram todos os concorrentes.',
    rating: 5,
    project: 'E-commerce B2B',
    result: '+200% em vendas online',
    duration: '4 meses de projeto',
  },
  {
    id: '3',
    name: 'Carlos Eduardo',
    role: 'CTO',
    company: 'DataFlow Systems',
    initials: 'CE',
    content: 'Contratamos a NXT para desenvolver um sistema complexo de gestão e o resultado foi impecável. Código limpo, arquitetura sólida e performance excepcional. O que mais me impressionou foi a atenção aos detalhes técnicos e a documentação completa.',
    rating: 5,
    project: 'Sistema de Gestão Enterprise',
    result: '-60% custos operacionais',
    duration: '6 meses de projeto',
  },
  {
    id: '4',
    name: 'Ana Beatriz',
    role: 'Fundadora',
    company: 'PrimeDigital',
    initials: 'AB',
    content: 'Desde o primeiro contato, a NXT demonstrou um nível de profissionalismo raro no mercado. O processo foi transparente, os prazos foram cumpridos e o resultado superou todas as expectativas. Recomendo sem hesitar.',
    rating: 5,
    project: 'Landing Page Premium',
    result: '+500% em leads',
    duration: '2 meses de projeto',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === testimonials.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1
    })
  }, [])

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      paginate(1)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, paginate])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative py-20 md:py-32 lg:py-40 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[200px]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 glass rounded-full mb-6 md:mb-8">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/40" />
            <span className="text-xs md:text-sm text-white/40">O que dizem sobre nós</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            Histórias de{' '}
            <span className="text-white/20">sucesso</span>
          </h2>
          <p className="text-white/30 text-base md:text-xl max-w-2xl mx-auto font-light px-4">
            A satisfação dos nossos clientes é o nosso maior patrimônio
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Quote decorativa */}
          <div className="absolute -top-8 md:-top-12 -left-2 md:-left-8 text-[100px] md:text-[200px] text-white/[0.02] select-none leading-none hidden md:block">
            "
          </div>

          <div className="relative px-0 md:px-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
              >
                <div className="glass-card p-6 md:p-10 lg:p-16 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />

                  <div className="relative">
                    {/* Stars */}
                    <div className="flex justify-center gap-1.5 md:gap-2 mb-6 md:mb-8">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-4 h-4 md:w-6 md:h-6 text-white/80 fill-white/80" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-base md:text-2xl lg:text-3xl text-white/70 font-light leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
                      "{currentTestimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl glass border-white/10 flex items-center justify-center mb-3 md:mb-4">
                        <span className="text-xl md:text-2xl font-bold text-white/40">
                          {currentTestimonial.initials}
                        </span>
                      </div>

                      <div className="text-lg md:text-xl font-semibold text-white mb-1">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-white/30 text-xs md:text-sm mb-3 md:mb-4">
                        {currentTestimonial.role} — {currentTestimonial.company}
                      </div>

                      {/* Project Info */}
                      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm">
                        <span className="glass px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/40">
                          {currentTestimonial.project}
                        </span>
                        <span className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-white/30 text-xs md:text-sm">
                          {currentTestimonial.duration}
                        </span>
                        <span className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-white font-medium text-sm md:text-base">
                          {currentTestimonial.result}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation - Mobile: Abaixo | Desktop: Laterais */}
          {/* Desktop Arrows */}
          <div className="hidden md:block">
            <button
              onClick={() => {
                paginate(-1)
                setIsAutoPlaying(false)
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 w-12 lg:w-14 h-12 lg:h-14 glass rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 group z-10"
            >
              <ChevronLeft className="w-5 lg:w-6 h-5 lg:h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => {
                paginate(1)
                setIsAutoPlaying(false)
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 w-12 lg:w-14 h-12 lg:h-14 glass rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 group z-10"
            >
              <ChevronRight className="w-5 lg:w-6 h-5 lg:h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Navigation + Indicators */}
          <div className="mt-6 md:mt-10">
            <div className="flex items-center justify-center gap-4">
              {/* Mobile Arrows */}
              <button
                onClick={() => {
                  paginate(-1)
                  setIsAutoPlaying(false)
                }}
                className="md:hidden w-10 h-10 glass rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-6 md:w-8 h-2 bg-white'
                        : 'w-2 h-2 bg-white/10 hover:bg-white/20'
                    }`}
                  />
                ))}
              </div>

              {/* Mobile Arrows */}
              <button
                onClick={() => {
                  paginate(1)
                  setIsAutoPlaying(false)
                }}
                className="md:hidden w-10 h-10 glass rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Auto-play toggle */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="w-8 h-8 glass rounded-xl flex items-center justify-center text-white/30 hover:text-white/60 transition-all duration-300 ml-2"
              >
                {isAutoPlaying ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-16 md:mt-20"
        >
          {[
            { value: '100%', label: 'Clientes satisfeitos' },
            { value: 'NPS 96', label: 'Net Promoter Score' },
            { value: '80%', label: 'Clientes recorrentes' },
            { value: '24h', label: 'Tempo de resposta' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="glass-card p-4 md:p-6 text-center group"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/30">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
    </section>
  )
}