import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3'
          : 'py-5'
      }`}
      style={{
        background: isScrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="text-2xl font-bold gradient-text cursor-pointer"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {portfolioData.name}.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium transition-colors duration-200 cursor-pointer bg-transparent border-none"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </button>
          ))}
          <a href={portfolioData.resumeLink} download="Shubham_Arman_Resume.docx" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.875rem' }}>
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer"
          style={{ color: 'var(--text-primary)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 py-6 px-6 flex flex-col gap-4"
          style={{
            background: 'rgba(10, 10, 15, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-left text-base font-medium py-2 bg-transparent border-none cursor-pointer"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </button>
          ))}
          <a href={portfolioData.resumeLink} download="Shubham_Arman_Resume.docx" className="btn-primary text-center" style={{ fontSize: '0.875rem' }}>
            Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
