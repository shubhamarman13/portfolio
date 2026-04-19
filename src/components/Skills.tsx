import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { portfolioData } from '../data/portfolioData'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = portfolioData.skillCategories

  const filteredSkills =
    activeCategory === 'all'
      ? portfolioData.skills
      : portfolioData.skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border-none cursor-pointer"
              style={{
                background:
                  activeCategory === cat.key
                    ? 'linear-gradient(135deg, var(--accent), var(--accent-dark))'
                    : 'rgba(255,255,255,0.05)',
                color: activeCategory === cat.key ? 'white' : 'var(--text-secondary)',
                border: `1px solid ${activeCategory === cat.key ? 'transparent' : 'var(--border-subtle)'}`,
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                  {skill.name}
                </h3>
                <span className="text-sm font-bold" style={{ color: 'var(--accent-light)' }}>
                  {skill.level}%
                </span>
              </div>
              {/* Progress Bar */}
              <div
                className="w-full h-2 rounded-full overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, var(--accent), #E040FB)',
                  }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
