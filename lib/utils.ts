// lib/utils.ts
export const whatsappLink = 'https://wa.me/5588993678250'
export const whatsappMessage = encodeURIComponent(
  'Olá! Conheci a NXT Digital pelo site e gostaria de conversar sobre um projeto.'
)

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export const siteConfig = {
  name: 'NXT Digital',
  description: 'Construindo experiências digitais que geram resultados.',
  email: 'contato@nxtdigital.com.br',
}