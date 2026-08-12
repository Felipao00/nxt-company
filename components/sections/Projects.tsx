// components/sections/Projects.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'
import Button from '@/components/ui/Button'

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfólio"
          title="Projetos que falam por si."
          description="Conheça alguns dos trabalhos que desenvolvemos com excelência."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-neutral-900 border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-600 text-sm">
                    Imagem do projeto
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-medium text-accent-light bg-accent/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center text-sm font-medium text-white hover:text-accent-light transition-colors group/btn">
                  Ver projeto
                  <ArrowUpRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}