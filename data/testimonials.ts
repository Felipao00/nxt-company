// data/testimonials.ts
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  project: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ricardo Almeida',
    role: 'CEO',
    company: 'TechCorp Brasil',
    content: 'A NXT Digital transformou completamente nossa presença digital. O site que desenvolveram não é apenas bonito, é uma máquina de gerar leads. Profissionalismo e qualidade excepcionais.',
    rating: 5,
    project: 'Portal Corporativo',
  },
  {
    id: '2',
    name: 'Marina Santos',
    role: 'Diretora de Marketing',
    company: 'InnovaSolutions',
    content: 'Trabalhar com a NXT foi uma experiência incrível. Entenderam exatamente o que precisávamos e entregaram além das expectativas. Nossa taxa de conversão aumentou 340%.',
    rating: 5,
    project: 'E-commerce B2B',
  },
  {
    id: '3',
    name: 'Carlos Eduardo',
    role: 'CTO',
    company: 'DataFlow Systems',
    content: 'Contratamos para desenvolver um sistema complexo e o resultado foi impecável. Código limpo, arquitetura sólida e performance excepcional. Recomendo sem hesitar.',
    rating: 5,
    project: 'Sistema de Gestão',
  },
  {
    id: '4',
    name: 'Ana Beatriz',
    role: 'Fundadora',
    company: 'PrimeDigital',
    content: 'Desde o primeiro contato, a NXT demonstrou um nível de profissionalismo raro no mercado. O processo foi transparente e o resultado superou todas as expectativas.',
    rating: 5,
    project: 'Landing Page Premium',
  },
  {
    id: '5',
    name: 'Pedro Henrique',
    role: 'Diretor de TI',
    company: 'CloudNine Tech',
    content: 'A qualidade técnica da equipe NXT é impressionante. Entregaram um sistema complexo no prazo, com qualidade de código excepcional e documentação completa.',
    rating: 5,
    project: 'Plataforma SaaS',
  },
]