'use client'

import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

const UP: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

const LEFT: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

const RIGHT: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

const SCALE: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const variantMap = { up: UP, left: LEFT, right: RIGHT, scale: SCALE }

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
}

export function Reveal({ children, className, delay = 0, direction = 'up' }: RevealProps) {
  const variants = variantMap[direction]
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export function Stagger({ children, className, stagger = 0.1, delay = 0 }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChild({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 35, scale: 0.97 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
