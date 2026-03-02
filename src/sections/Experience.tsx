import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCalendar, HiBriefcase, HiCheckCircle } from 'react-icons/hi'

interface Role {
  title: string
  period: string
  achievements: string[]
}

interface Job {
  company: string
  period: string
  location: string
  type: string
  color: string
  roles: Role[]
}

const jobs: Job[] = [
  {
    company: 'Vish Gyana Technology Solutions',
    period: 'Jun 2022 – Present',
    location: 'Chennai, India',
    type: 'Full-time',
    color: 'from-indigo-500 to-blue-500',
    roles: [
      {
        title: 'Senior Frontend Developer',
        period: 'Jan 2024 – Present',
        achievements: [
          'Led the frontend architecture for Homeyhuts — a full-stack property rental platform with Next.js (SSR/CSR), React Native mobile app published on both stores',
          'Architected Vee2Care healthcare SaaS with complex role-based access control, advanced filtering, and Zod-validated forms',
          'Championed code review practices, reducing production bugs by 40%',
          'Mentored junior developers on TypeScript best practices and React patterns',
        ],
      },
      {
        title: 'Frontend Developer',
        period: 'Jun 2022 – Dec 2023',
        achievements: [
          'Built SurgTest medical assessment platform with large dataset handling and analytics dashboards',
          'Developed Heavenly church management app integrating Razorpay and Stripe payment gateways',
          'Implemented WebSocket-powered real-time inventory tracking in ERPONE ERP system',
          'Contributed to scalable state management architecture using Redux Toolkit and React Query',
        ],
      },
    ],
  },
  {
    company: 'Whitefield Communication Pvt Ltd',
    period: 'Mar 2021 – May 2022',
    location: 'Chennai, India',
    type: 'Full-time',
    color: 'from-emerald-500 to-teal-500',
    roles: [
      {
        title: 'Junior Frontend Developer',
        period: 'Mar 2021 – May 2022',
        achievements: [
          'Built HRMS employee management system using Vue.js with REST API integration',
          'Developed responsive admin dashboards and employee self-service portals',
          'Implemented attendance tracking, leave management, and payroll modules',
          'Gained strong foundation in frontend architecture, cross-browser compatibility, and UI/UX principles',
        ],
      },
    ],
  },
]

const Experience: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="py-24 bg-bg dark:bg-bg">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary dark:text-primary font-semibold text-sm uppercase tracking-widest">
            Career
          </span>
          <h2 className="mt-2 text-4xl font-bold text-text dark:text-text">
            Work Experience
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-cyan-400" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-bg/10 hidden sm:block" />

          <div className="space-y-10">
            {jobs.map((job, ji) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: ji * 0.2 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`hidden sm:flex absolute left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-br ${job.color}
                    items-center justify-center shadow-lg -translate-x-1/2`}
                >
                  <HiBriefcase className="text-text" size={16} />
                </div>

                {/* Company card */}
                <div className="rounded-2xl bg-surface dark:bg-bg/5 border border-border dark:border-border overflow-hidden shadow-sm">
                  {/* Company header */}
                  <div className="p-6 bg-bg dark:bg-surface/30 border-b border-border">
                    <div className="pb-2">
                      <h3 className="text-xl font-bold text-text mb-2">
                        {job.company}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-1">
                        <span className="flex items-center gap-1.5 text-xs text-muted">
                          <HiCalendar size={13} /> {job.period}
                        </span>
                        <span className="text-xs text-muted">📍 {job.location}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${job.color} text-white`}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Roles */}
                  <div className="p-6 space-y-6">
                    {job.roles.map((role, ri) => (
                      <div key={role.title} className={ri > 0 ? 'pt-6 border-t border-border dark:border-border' : ''}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                          <h4 className="text-base font-semibold text-text dark:text-text">
                            {role.title}
                          </h4>
                          <span className="text-xs text-primary dark:text-primary font-medium bg-surface dark:bg-surface0/10 px-3 py-1 rounded-full whitespace-nowrap">
                            {role.period}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {role.achievements.map(a => (
                            <li key={a} className="flex items-start gap-2.5 text-sm text-muted dark:text-muted">
                              <HiCheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
