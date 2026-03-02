import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg dark:bg-bg"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-surface0/10 dark:bg-surface0/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-400/10 dark:bg-cyan-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-surface dark:bg-surface0/10 text-primary dark:text-primary border border-primary/30 dark:border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-text dark:text-text mb-4 leading-tight tracking-tight"
          >
            Prasanth{' '}
            <span className="gradient-text">R</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-semibold text-primary dark:text-primary mb-6"
          >
            Frontend Developer
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted dark:text-muted max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Building scalable, high-performance web applications using modern frontend technologies.
          </motion.p>

          {/* Contact Details */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 text-sm text-muted dark:text-muted"
          >
            <span className="flex items-center gap-1.5">
              <HiLocationMarker className="text-primary" size={16} />
              Chennai, TN
            </span>
            <a
              href="mailto:prasanthr1828gmail.com"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <HiMail className="text-primary" size={16} />
              prasanthr1828gmail.com
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <HiPhone className="text-primary" size={16} />
              +91 86109 35744
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <button
              onClick={() => scrollTo('#projects')}
              className="px-8 py-3.5 rounded-2xl font-semibold text-text bg-gradient-to-r from-primary to-primary hover:from-indigo-600 hover:to-indigo-700 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-base w-full sm:w-auto"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-8 py-3.5 rounded-2xl font-semibold text-primary dark:text-primary bg-surface dark:bg-surface0/10 border border-primary/30 dark:border-primary/30 hover:bg-surface dark:hover:bg-surface0/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-base w-full sm:w-auto"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/prasanth-rama-chandran-b847b023a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-surface dark:bg-bg/5 text-muted dark:text-muted hover:bg-surface dark:hover:bg-surface0/20 hover:text-primary dark:hover:text-indigo-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FaLinkedin size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-9 rounded-full border-2 border-slate-300 dark:border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2.5 bg-surface0 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
