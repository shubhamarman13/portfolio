import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Splash Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: 'var(--bg-dark)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-6xl font-bold gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
                S
              </div>
              <motion.div
                className="mt-4 h-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, var(--accent), #E040FB)' }}
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App */}
      {!isLoading && (
        <div className="bg-grid min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
