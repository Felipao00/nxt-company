// data/projects.ts
export interface Project {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
}

export const projects: Project[] = [
  {
    id: 'techcorp',
    title: 'TechCorp Platform',
    category: 'Sistema Web',
    description: 'Plataforma de gestão empresarial com dashboard analítico e automação de processos.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    image: '/images/projects/project-1.jpg',
  },
  {
    id: 'modashop',
    title: 'ModaShop',
    category: 'E-commerce',
    description: 'Loja virtual de moda com experiência de compra personalizada e integração com ERPs.',
    technologies: ['Next.js', 'Stripe', 'TailwindCSS', 'Redis'],
    image: '/images/projects/project-2.jpg',
  },
  {
    id: 'fintech-app',
    title: 'FinCheck',
    category: 'Aplicação Web',
    description: 'Aplicativo financeiro para controle de investimentos com gráficos em tempo real.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
    image: '/images/projects/project-3.jpg',
  },
]