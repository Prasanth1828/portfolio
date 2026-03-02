import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiExternalLink } from 'react-icons/hi'

interface Project {
  name: string
  description: string
  achievements: string[]
  tech: string[]
  color: string
}

const projects: Project[] = [
  {
    name: 'Vee2Care',
    description: 'Healthcare management SaaS with role-based access control, advanced data filtering, reporting dashboards, and schema-validated forms.',
    achievements: [
      'Designed role-based access control for multiple user levels',
      'Built advanced filtering and export reporting features',
      'Implemented form validation using Zod schemas',
      'Architected scalable state management with Redux + React Query',
    ],
    tech: ['React.js', 'TypeScript', 'Redux', 'React Query', 'Zod', 'REST APIs'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'SurgTest',
    description: 'Medical assessment platform handling large datasets, complex assessment modules, and analytics dashboards for surgical training institutions.',
    achievements: [
      'Optimized rendering for large dataset tables with virtualization',
      'Built multi-type assessment modules (MCQ, case-based)',
      'Created analytics dashboards with visual progress tracking',
      'Implemented real-time score computation and reporting',
    ],
    tech: ['React.js', 'TypeScript', 'Redux', 'React Query', 'Recharts'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'ERPONE',
    description: 'Enterprise resource planning system with real-time inventory tracking powered by WebSockets, enabling live stock monitoring across multiple locations.',
    achievements: [
      'Implemented WebSocket connections for real-time inventory sync',
      'Built multi-warehouse stock tracking and transfer modules',
      'Developed procurement and supplier management features',
      'Created real-time notifications for low stock alerts',
    ],
    tech: ['Angular', 'WebSocket', 'TypeScript', 'RxJS', 'REST APIs'],
    color: 'from-red-500 to-rose-500',
  },
  {
    name: 'HRMS',
    description: 'Human Resource Management System built with Vue.js featuring comprehensive employee lifecycle management, attendance tracking, and payroll integration.',
    achievements: [
      'Built complete employee onboarding and offboarding modules',
      'Developed attendance and leave management system',
      'Integrated payroll calculation with payslip generation',
      'Created organizational chart and department management',
    ],
    tech: ['Vue.js', 'REST APIs', 'Vuex', 'Element UI'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Heavenly',
    description: 'A comprehensive platform with interactive dashboards, offering secure payment workflows and robust component architecture.',
    achievements: [
      'Developed modular dashboards',
      'Integrated secure payment gateways',
      'Built reusable UI components',
    ],
    tech: ['React.js', 'Ant Design', 'Shadcn/UI', 'Razorpay', 'Stripe'],
    color: 'from-amber-500 to-orange-500',
  },
]

const ProjectCard: React.FC<{ project: Project; index: number; isInView: boolean }> = ({
  project, index, isInView,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
    whileHover={{ y: -6 }}
    className="group flex flex-col bg-bg dark:bg-bg/5 border border-border dark:border-border
      rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40
      hover:border-indigo-500/30 transition-all duration-300"
  >
    {/* Gradient top bar */}
    <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

    <div className="p-6 flex flex-col flex-1">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-text dark:text-text group-hover:text-primary transition-colors duration-200">
          {project.name}
        </h3>
        {/* <button className="p-1.5 rounded-lg text-muted hover:text-primary transition-colors">
          <HiExternalLink size={18} />
        </button> */}
      </div>

      {/* Description */}
      <p className="text-sm text-muted dark:text-muted mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Achievements */}
      <ul className="mb-5 space-y-1.5 flex-1">
        {project.achievements.map(a => (
          <li
            key={a}
            className="flex items-start gap-2 text-xs text-muted dark:text-muted"
          >
            <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`} />
            {a}
          </li>
        ))}
      </ul>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(t => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-surface dark:bg-bg/10
              text-muted dark:text-text border border-border dark:border-border"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

const Projects: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-24 bg-surface dark:bg-bg">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary dark:text-primary font-semibold text-sm uppercase tracking-widest">
            Work
          </span>
          <h2 className="mt-2 text-4xl font-bold text-text dark:text-text">
            Featured Projects
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-cyan-400" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
