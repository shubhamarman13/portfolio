import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">My professional journey so far</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
          />

          {portfolioData.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 * i }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div
                className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-8 z-10"
                style={{
                  background: 'var(--accent)',
                  boxShadow: '0 0 20px rgba(108, 99, 255, 0.5)',
                }}
              />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content Card */}
              <div className="ml-14 md:ml-0 md:w-1/2">
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(108, 99, 255, 0.15)' }}
                    >
                      <Briefcase size={18} style={{ color: 'var(--accent-light)' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: 'var(--accent-light)' }}>
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={14} style={{ color: 'var(--text-secondary)' }} />
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm flex items-start gap-2"
                        style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
