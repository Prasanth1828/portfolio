import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheckCircle } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate send delay
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-bg dark:bg-bg/5 border border-border dark:border-border ' +
    'text-text dark:text-text placeholder-slate-400 dark:placeholder-slate-500 ' +
    'focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 ' +
    'transition-all duration-200 text-sm'

  return (
    <section id="contact" className="py-24 bg-surface dark:bg-bg">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary dark:text-primary font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="mt-2 text-4xl font-bold text-text dark:text-text">
            Contact Me
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-cyan-400" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-text dark:text-text mb-2">
                Let's work together!
              </h3>
              <p className="text-muted dark:text-muted text-sm leading-relaxed">
                I'm open to new opportunities, collaborations, and interesting projects.
                Drop me a message — I'd love to hear from you!
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {[
                { Icon: HiMail, label: 'Email', value: 'prasanthr1828gmail.com', href: 'mailto:prasanthr1828gmail.com' },
                { Icon: HiPhone, label: 'Phone', value: '+91 86109 35744', href: 'tel:+919876543210' },
                { Icon: HiLocationMarker, label: 'Location', value: 'Chennai, Tamil Nadu', href: null },
              ].map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-bg dark:bg-bg/5 border border-border dark:border-border shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-surface dark:bg-surface0/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted dark:text-muted font-medium">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-text dark:text-text hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-text dark:text-text">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted dark:text-muted mb-3">
                Social
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/prasanth-rama-chandran-b847b023a/', color: 'hover:bg-blue-600 dark:hover:bg-blue-600' },
                ].map(({ Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg dark:bg-bg/5 border border-border dark:border-border
                      shadow-sm ${color} hover:text-text hover:border-transparent transition-all duration-200 text-text dark:text-text text-sm font-medium`}
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-bg dark:bg-bg/5 border border-border dark:border-border shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
                    <HiCheckCircle className="text-emerald-500" size={36} />
                  </div>
                  <h4 className="text-xl font-bold text-text dark:text-text">Message Sent!</h4>
                  <p className="text-muted dark:text-muted text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-surface0 text-text text-sm font-medium hover:bg-primary transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-muted dark:text-muted mb-1.5 uppercase tracking-wide">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted dark:text-muted mb-1.5 uppercase tracking-wide">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted dark:text-muted mb-1.5 uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted dark:text-muted mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className={inputClass + ' resize-none'}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-semibold text-text text-sm
                      bg-gradient-to-r from-primary to-primary hover:from-indigo-600 hover:to-indigo-700
                      shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-200
                      disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane className="rotate-90" size={16} />
                        Send Message
                      </>
                    )}
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

export default Contact
