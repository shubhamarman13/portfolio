import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Orbs */}
      <div
        className="glow-orb animate-pulse-glow"
        style={{ top: '10%', left: '10%', background: 'var(--accent)' }}
      />
      <div
        className="glow-orb animate-pulse-glow"
        style={{ bottom: '10%', right: '10%', background: '#E040FB', animationDelay: '2s' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left — Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 text-sm font-medium"
              style={{
                background: 'rgba(108, 99, 255, 0.1)',
                border: '1px solid rgba(108, 99, 255, 0.3)',
                color: 'var(--accent-light)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Associate Software Engineer @ Accenture
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">{portfolioData.name}</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg sm:text-xl font-medium mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              {portfolioData.title}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-base max-w-2xl mb-10"
              style={{ color: 'var(--text-secondary)', opacity: 0.7 }}
            >
              {portfolioData.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10"
            >
              <button onClick={scrollToAbout} className="btn-primary">
                Explore My Work
                <ArrowDown size={18} />
              </button>
              <a href="#contact" className="btn-outline" onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { icon: Github, href: portfolioData.socials.github, label: 'GitHub' },
                { icon: Linkedin, href: portfolioData.socials.linkedin, label: 'LinkedIn' },
                { icon: Youtube, href: portfolioData.socials.youtube, label: 'YouTube' },
                { icon: Instagram, href: portfolioData.socials.instagram, label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
                    e.currentTarget.style.color = 'var(--accent-light)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ background: 'linear-gradient(135deg, var(--accent), #E040FB)' }}
              />
              {/* Image Container */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
                style={{
                  border: '4px solid rgba(108, 99, 255, 0.3)',
                  boxShadow: '0 0 60px rgba(108, 99, 255, 0.2)',
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/formal-profile.jpeg`}
                  alt="Shubham Arman"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative ring */}
              <div
                className="absolute -inset-3 rounded-full animate-spin"
                style={{
                  border: '2px dashed rgba(108, 99, 255, 0.15)',
                  animationDuration: '20s',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: '2px solid rgba(255,255,255,0.2)' }}
        >
          <div className="w-1.5 h-3 rounded-full" style={{ background: 'var(--accent-light)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
