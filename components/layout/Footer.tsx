// components/layout/Footer.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Shield, 
  Lock, 
  CheckCircle2,
  Star,
  Zap,
} from 'lucide-react'

const footerLinks = {
  empresa: [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Processo', href: '#process' },
    { name: 'Depoimentos', href: '#testimonials' },
  ],
  servicos: [
    { name: 'Sites Institucionais', href: '#services' },
    { name: 'E-commerce', href: '#services' },
    { name: 'Sistemas Web', href: '#services' },
    { name: 'Aplicativos', href: '#services' },
    { name: 'Consultoria', href: '#services' },
  ],
}

const securitySeals = [
  {
    name: 'Google Partner',
    logo: 'https://www.gstatic.com/partners/badge/images/2022/PartnerBadgeClickable.svg',
    width: 140,
    height: 54,
  },
  {
    name: 'AWS Certified',
    logo: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png',
    width: 65,
    height: 65,
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand Column - Logo + Nome + Selos */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="NXT Digital"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-white/80 transition-colors">
                NXT<span className="text-white/30">Digital</span>
              </span>
            </Link>
            
            <p className="text-white/30 text-sm leading-relaxed mb-8">
              Transformamos negócios através de soluções digitais premium.
            </p>

            <div className="flex items-center gap-4">
              {securitySeals.map((seal) => (
                <div
                  key={seal.name}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={seal.logo}
                    alt={seal.name}
                    style={{
                      width: seal.width,
                      height: seal.height,
                      objectFit: 'contain',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/30 hover:text-white/60 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-white/40 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Serviços
            </h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/30 hover:text-white/60 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-white/40 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Confiança */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Confiança
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-white/40">
                <Shield className="w-4 h-4 text-green-400/70" />
                <span className="text-xs">Site 100% seguro</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/40">
                <Lock className="w-4 h-4 text-blue-400/70" />
                <span className="text-xs">Dados criptografados</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400/70" />
                <span className="text-xs">Empresa verificada</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/40">
                <Star className="w-4 h-4 text-yellow-400/70" />
                <span className="text-xs">Avaliado 5 estrelas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/20 text-xs">
              © {new Date().getFullYear()} NXT Digital Technology
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="text-white/20 hover:text-white/40 transition-colors text-xs">
                Privacidade
              </a>
              <a href="#" className="text-white/20 hover:text-white/40 transition-colors text-xs">
                Termos
              </a>
              <a href="#" className="text-white/20 hover:text-white/40 transition-colors text-xs">
                LGPD
              </a>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-white/20 text-xs">by</span>
              <span className="text-white/40 text-xs font-medium">NXT Digital</span>
              <Zap className="w-3 h-3 text-white/30" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}