import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Zap, Target, TrendingUp } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const iconMap = [User, Zap, Target, TrendingUp]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">Get to know the person behind the code</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Main large image - working on laptop */}
            <div
              className="col-span-2 rounded-2xl overflow-hidden"
              style={{
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
              }}
            >
              <img
                src="/images/outdoor-night.jpeg"
                alt="Shubham Arman - casual"
                className="w-full h-64 object-cover object-top"
                style={{ filter: 'brightness(0.9)' }}
              />
            </div>

            {/* Smaller images */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
              }}
            >
              <img
                src="/images/office-desk.jpeg"
                alt="Shubham at Accenture office"
                className="w-full h-48 object-cover object-center"
                style={{ filter: 'brightness(0.9)' }}
              />
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
              }}
            >
              <img
                src="/images/working-laptop.jpeg"
                alt="Shubham working on laptop"
                className="w-full h-48 object-cover object-top"
                style={{ filter: 'brightness(0.9)' }}
              />
            </div>
          </motion.div>

          {/* Right - Description + Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
            >
              {portfolioData.about.description}
            </p>

            {/* Soft Skill Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['Problem Solver', 'Team Leader', 'Content Creator', 'Fast Learner', 'Mentor'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: 'rgba(108, 99, 255, 0.1)',
                    border: '1px solid rgba(108, 99, 255, 0.2)',
                    color: 'var(--accent-light)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.about.highlights.map((highlight, i) => {
                const Icon = iconMap[i % iconMap.length]
                return (
                  <div key={i} className="glass-card p-5 text-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{ background: 'rgba(108, 99, 255, 0.15)' }}
                    >
                      <Icon size={22} style={{ color: 'var(--accent-light)' }} />
                    </div>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                      {highlight}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
