import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 dark:bg-bg/85 backdrop-blur-lg shadow-lg shadow-black/10 dark:shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); handleNavClick('#hero') }}
          className="text-xl font-bold gradient-text"
        >
          PR
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm font-medium text-muted dark:text-text hover:text-primary dark:hover:text-indigo-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl bg-surface dark:bg-bg/10 text-muted dark:text-text hover:bg-surface dark:hover:bg-surface0/20 hover:text-primary dark:hover:text-indigo-400 transition-all duration-200"
          >
            {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-xl bg-surface dark:bg-bg/10 text-muted dark:text-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={18} /> : <HiMenuAlt3 size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-bg/95 dark:bg-bg/95 backdrop-blur-xl border-t border-border/50 dark:border-border"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                    className="block text-base font-medium text-text dark:text-text hover:text-primary dark:hover:text-indigo-400 transition-colors py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
