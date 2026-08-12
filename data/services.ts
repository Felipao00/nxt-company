// data/services.ts
export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  icon: string
  color: string
}

export const services: Service[] = [
  {
    id: 'websites',
    title: 'Sites & Portais',
    subtitle: 'Presença digital que converte',
    description: 'Desenvolvemos sites institucionais e portais corporativos com design estratégico focado em resultados de negócio.',
    features: [
      'Design responsivo premium',
      'Otimização SEO avançada',
      'Performance máxima (90+ PageSpeed)',
      'Painel administrativo intuitivo',
      'Integração com ferramentas de marketing',
    ],
    icon: 'Globe',
    color: '#6366f1',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    subtitle: 'Lojas virtuais de alta performance',
    description: 'Plataformas de comércio eletrônico completas, escaláveis e otimizadas para conversão.',
    features: [
      'Experiência de compra fluida',
      'Integração com meios de pagamento',
      'Gestão de estoque inteligente',
      'Relatórios detalhados de vendas',
      'Otimização para mobile',
    ],
    icon: 'ShoppingCart',
    color: '#f59e0b',
  },
  {
    id: 'systems',
    title: 'Sistemas Web',
    subtitle: 'Soluções personalizadas',
    description: 'Desenvolvemos sistemas web sob medida para automatizar processos e aumentar a eficiência operacional.',
    features: [
      'Arquitetura escalável',
      'Segurança avançada',
      'Integração com APIs',
      'Dashboard analítico',
      'Automação de processos',
    ],
    icon: 'Code2',
    color: '#10b981',
  },
  {
    id: 'mobile',
    title: 'Aplicativos',
    subtitle: 'Mobile-first excellence',
    description: 'Aplicativos nativos e híbridos com experiência de usuário excepcional e performance otimizada.',
    features: [
      'UI/UX design premium',
      'Performance nativa',
      'Integração com hardware',
      'Atualizações em tempo real',
      'Publicação nas lojas',
    ],
    icon: 'Smartphone',
    color: '#8b5cf6',
  },
  {
    id: 'consulting',
    title: 'Consultoria',
    subtitle: 'Estratégia digital orientada a dados',
    description: 'Consultoria especializada para transformar desafios de negócio em soluções tecnológicas eficientes.',
    features: [
      'Análise de requisitos',
      'Arquitetura de solução',
      'Escolha de tecnologias',
      'Estimativas precisas',
      'Roadmap estratégico',
    ],
    icon: 'Lightbulb',
    color: '#ec4899',
  },
  {
    id: 'support',
    title: 'Suporte & Evolução',
    subtitle: 'Parceria contínua',
    description: 'Manutenção, monitoramento e evolução constante das soluções para garantir performance e disponibilidade.',
    features: [
      'Monitoramento 24/7',
      'Suporte prioritário',
      'Atualizações de segurança',
      'Melhorias contínuas',
      'Relatórios mensais',
    ],
    icon: 'Headphones',
    color: '#06b6d4',
  },
]