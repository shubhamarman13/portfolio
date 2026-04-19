import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Calendar, Star } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">My academic background and continuous learning path</p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(108, 99, 255, 0.15)' }}
            >
              <GraduationCap size={20} style={{ color: 'var(--accent-light)' }} />
            </div>
            <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              Education
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass-card p-6"
              >
                <h4 className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                  {edu.degree}
                </h4>
                <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent-light)' }}>
                  {edu.institution}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={13} style={{ color: 'var(--text-secondary)' }} />
                  <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {edu.duration}
                  </span>
                </div>
                {edu.grade && (
                  <div className="flex items-center gap-2 mb-3">
                    <Star size={13} style={{ color: '#F59E0B' }} />
                    <span className="text-xs font-semibold" style={{ color: '#F59E0B' }}>
                      {edu.grade}
                    </span>
                  </div>
                )}
                <p className="text-xs" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(224, 64, 251, 0.15)' }}
            >
              <Award size={20} style={{ color: '#E040FB' }} />
            </div>
            <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              Certifications & Licenses
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="glass-card p-5 flex items-start gap-4"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(108, 99, 255, 0.1)' }}
                >
                  <span className="text-xs font-bold" style={{ color: 'var(--accent-light)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {cert.name}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Honors & Awards */}
        {portfolioData.honors && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(245, 158, 11, 0.15)' }}
              >
                <Star size={20} style={{ color: '#F59E0B' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                Honors & Awards
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {portfolioData.honors.map((honor, i) => (
                <div key={i} className="glass-card p-5 flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#F59E0B' }} />
                  <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                    {honor}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
