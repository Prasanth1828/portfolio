import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-bg dark:bg-bg border-t border-border dark:border-border py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <span className="text-2xl font-extrabold gradient-text">PR</span>
            <p className="text-xs text-muted dark:text-muted mt-1">Frontend Developer · Chennai, India</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {['#about', '#skills', '#projects', '#experience', '#contact'].map(href => (
              <a
                key={href}
                href={href}
                onClick={e => { e.preventDefault(); scrollTo(href) }}
                className="text-sm text-muted dark:text-muted hover:text-primary dark:hover:text-indigo-400 transition-colors capitalize"
              >
                {href.replace('#', '')}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/prasanth-rama-chandran-b847b023a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-muted hover:text-primary transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted dark:text-muted">
          <p>© {new Date().getFullYear()} Prasanth R. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <HiHeart className="text-red-400 mx-0.5" size={12} /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
