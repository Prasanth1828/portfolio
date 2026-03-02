import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiReact, SiTypescript, SiJavascript,
  SiRedux, SiTailwindcss, SiAngular, SiVuedotjs,
  SiGit, SiFirebase, SiPostman,
  SiAntdesign, SiShadcnui, SiRazorpay,
} from 'react-icons/si'
import { TbWebhook } from 'react-icons/tb'
import { BsStripe } from 'react-icons/bs'
import { GiBearFace } from 'react-icons/gi'
import { RiBarChartFill } from 'react-icons/ri'

interface Skill {
  name: string
  Icon: React.ElementType
  color: string
}

const frontendSkills: Skill[] = [
  { name: 'React.js', Icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
  { name: 'React Query', Icon: RiBarChartFill, color: '#FF4154' },
  { name: 'Zustand', Icon: GiBearFace, color: '#8B4513' },
  { name: 'Shadcn/UI', Icon: SiShadcnui, color: 'var(--theme-text)' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Ant Design', Icon: SiAntdesign, color: '#1677FF' },
  { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
  { name: 'Vue.js', Icon: SiVuedotjs, color: '#42B883' },
]

const toolSkills: Skill[] = [
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
  { name: 'Razorpay', Icon: SiRazorpay, color: '#3395FF' },
  { name: 'Stripe', Icon: BsStripe, color: '#635BFF' },
  { name: 'Webhook', Icon: TbWebhook, color: '#22d3ee' },
]

const SkillCard: React.FC<{ skill: Skill; index: number; isInView: boolean }> = ({ skill, index, isInView }) => {
  const { Icon, name, color } = skill
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-bg dark:bg-bg/5
        border border-border dark:border-border shadow-sm
        hover:shadow-lg hover:border-indigo-500/40 transition-all duration-300 cursor-default"
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300"
        style={{ color }}
      >
        <Icon size={32} />
      </div>
      <span className="text-xs font-semibold text-muted dark:text-muted group-hover:text-text dark:group-hover:text-text transition-colors text-center">
        {name}
      </span>
    </motion.div>
  )
}

const SkillGroup: React.FC<{ title: string; skills: Skill[]; isInView: boolean; baseDelay?: number }> = ({
  title, skills, isInView, baseDelay = 0,
}) => (
  <div>
    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted dark:text-muted mb-4 flex items-center gap-2">
      <span className="w-6 h-0.5 bg-surface0 rounded-full" />
      {title}
    </h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3">
      {skills.map((skill, i) => (
        <SkillCard key={skill.name} skill={skill} index={i + baseDelay} isInView={isInView} />
      ))}
    </div>
  </div>
)

const Skills: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="skills" className="py-24 bg-bg dark:bg-bg">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary dark:text-primary font-semibold text-sm uppercase tracking-widest">
            Skills & Expertise
          </span>
          <h2 className="mt-2 text-4xl font-bold text-text dark:text-text">
            My Tech Stack
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-cyan-400" />
        </motion.div>

        <div className="space-y-10">
          <SkillGroup title="Frontend" skills={frontendSkills} isInView={isInView} baseDelay={0} />
          <SkillGroup title="Tools & Services" skills={toolSkills} isInView={isInView} baseDelay={11} />
        </div>
      </div>
    </section>
  )
}

export default Skills
