// app/page.tsx
import Hero from '@/components/sections/Hero'
import Clients from '@/components/sections/Clients'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Differentials from '@/components/sections/Differentials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Differentials />
      <FAQ />
      <CTA />
    </main>
  )
}