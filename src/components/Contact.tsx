import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '12px',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.3s',
  }

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Background Orb */}
      <div
        className="glow-orb animate-pulse-glow"
        style={{ bottom: '0', left: '30%', background: 'var(--accent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Info - Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="font-bold text-lg mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Let's connect
              </h3>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: portfolioData.email, href: `mailto:${portfolioData.email}` },
                  { icon: Phone, label: 'Phone', value: portfolioData.phone, href: `tel:${portfolioData.phone}` },
                  { icon: MapPin, label: 'Location', value: portfolioData.location, href: '#' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 no-underline group"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{ background: 'rgba(108, 99, 255, 0.1)' }}
                    >
                      <Icon size={18} style={{ color: 'var(--accent-light)' }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--text-secondary)' }}>
                        {label}
                      </p>
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links in Contact */}
            <div className="glass-card p-6">
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-secondary)' }}>
                Find me on
              </p>
              <div className="flex gap-3">
                {Object.entries(portfolioData.socials).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.4)'
                      e.currentTarget.style.color = 'var(--accent-light)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)'
                      e.currentTarget.style.color = 'var(--text-secondary)'
                    }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3"
          >
            <div className="glass-card p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle size={48} style={{ color: '#4ADE80', margin: '0 auto 16px' }} />
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        required
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(108, 99, 255, 0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        required
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(108, 99, 255, 0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="What's this about?"
                      required
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(108, 99, 255, 0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project..."
                      required
                      style={{ ...inputStyle, resize: 'vertical' as const }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(108, 99, 255, 0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
