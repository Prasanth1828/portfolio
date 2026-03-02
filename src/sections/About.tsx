import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  HiCode, HiDatabase, HiGlobe, HiViewGridAdd,
  HiRefresh, HiClipboardCheck, HiLightningBolt, HiCreditCard, HiUserGroup,
} from 'react-icons/hi'

const stats = [
  { value: '4.5+', label: 'Years Experience' },
  { value: '6+', label: 'Projects Delivered' },
  { value: '2', label: 'Companies' },
  { value: '10+', label: 'Technologies' },
]

const expertise = [
  {
    Icon: HiCode,
    title: 'Frontend Architecture',
    desc: 'Designed scalable, feature-based architecture using React.js and TypeScript, ensuring modularity and long-term maintainability.',
    color: 'text-primary',
    bg: 'bg-surface dark:bg-surface0/10',
  },
  {
    Icon: HiDatabase,
    title: 'Monorepo Management',
    desc: 'Architected and managed monorepo structures to streamline code sharing and dependency management across multiple projects.',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-500/10',
  },
  {
    Icon: HiGlobe,
    title: 'Rendering Strategies',
    desc: 'Implemented SSR for SEO optimization and CSR for high-interactivity interfaces using modern meta-frameworks.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-500/10',
  },
  {
    Icon: HiViewGridAdd,
    title: 'Reusable Components',
    desc: 'Built reusable UI components and shared utility modules to reduce code duplication and improve development efficiency.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-500/10',
  },
  {
    Icon: HiRefresh,
    title: 'Server-State Management',
    desc: 'Engineered efficient data fetching and caching strategies using React Query, including query invalidation and background refetching.',
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-500/10',
  },
  {
    Icon: HiClipboardCheck,
    title: 'Form Handling & Validation',
    desc: 'Implemented schema-driven, type-safe forms using React Hook Form with Zod, improving validation consistency across projects.',
    color: 'text-pink-500',
    bg: 'bg-pink-50 dark:bg-pink-500/10',
  },
  {
    Icon: HiLightningBolt,
    title: 'Performance Optimization',
    desc: 'Optimized rendering using memoization, controlled state updates, and selective re-render strategies to enhance responsiveness.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50 dark:bg-yellow-500/10',
  },
  {
    Icon: HiCreditCard,
    title: 'Payment Integration',
    desc: 'Integrated secure third-party payment gateways such as Razorpay and Stripe, ensuring reliable and compliant transaction workflows.',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
  },
  {
    Icon: HiUserGroup,
    title: 'Client Collaboration',
    desc: 'Worked directly with stakeholders to gather requirements, propose technical approaches, and define structured development roadmaps.',
    color: 'text-teal-500',
    bg: 'bg-teal-50 dark:bg-teal-500/10',
  },
]

const About: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="about" className="py-24 bg-surface dark:bg-bg">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary dark:text-primary font-semibold text-sm uppercase tracking-widest">
              About Me
            </span>
            <h2 className="mt-2 text-4xl font-bold text-text dark:text-text">
              Who I Am
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-cyan-400" />
          </motion.div>

          {/* Expertise grid – full width */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          >
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="group flex gap-4 p-5 rounded-2xl bg-bg dark:bg-bg/5
                  border border-border dark:border-border shadow-sm
                  hover:shadow-md hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl ${item.bg}`}>
                  <item.Icon className={item.color} size={20} />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${item.color} mb-1`}>{item.title}</h4>
                  <p className="text-xs text-muted dark:text-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                className="group p-6 rounded-2xl bg-bg dark:bg-bg/5 border border-border dark:border-border
                  shadow-sm hover:shadow-primary/10 hover:border-indigo-500/40 transition-all duration-300
                  text-center cursor-default"
              >
                <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs font-medium text-muted dark:text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Strengths tags */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-400/10 border border-indigo-500/20 dark:border-primary/30"
          >
            <h4 className="font-semibold text-text dark:text-text mb-3 text-sm uppercase tracking-wide">Core Strengths</h4>
            <div className="flex flex-wrap gap-2">
              {['Scalable Architecture', 'Performance Optimization', 'Client Collaboration', 'Payment Integration', 'Type-Safe Forms', 'SSR / CSR'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-surface0/10 dark:bg-surface0/20 text-primary dark:text-primary border border-indigo-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
