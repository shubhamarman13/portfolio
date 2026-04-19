import { Heart } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-8 px-6 text-center"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="text-xl font-bold gradient-text no-underline cursor-pointer"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {portfolioData.name}.
        </a>

        {/* Divider */}
        <div
          className="w-16 h-px mx-auto my-5"
          style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }}
        />

        {/* Copyright */}
        <p className="text-sm flex items-center justify-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
          © {currentYear} {portfolioData.name}. Built with
          <Heart size={14} style={{ color: '#E040FB' }} fill="#E040FB" />
          and React
        </p>
      </div>
    </footer>
  )
}
