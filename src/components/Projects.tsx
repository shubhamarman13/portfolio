import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Star } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Things I've built that I'm proud of</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card p-7 flex flex-col relative overflow-hidden group"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div
                  className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(108, 99, 255, 0.15)',
                    color: 'var(--accent-light)',
                    border: '1px solid rgba(108, 99, 255, 0.3)',
                  }}
                >
                  <Star size={12} />
                  Featured
                </div>
              )}

              {/* Project Number */}
              <div
                className="text-7xl font-black absolute -top-2 -left-1 opacity-5 select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mb-5 leading-relaxed"
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}
                >
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 relative z-10">
                {project.githubLink && project.githubLink !== '#' && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.liveLink && project.liveLink !== '#' && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Hover Gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 120%, rgba(108, 99, 255, 0.08), transparent 70%)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
