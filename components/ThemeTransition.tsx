'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// NOTE DEV: zone vide volontaire (respiration visuelle) qui porte la transition
// clair → sombre au scroll. Range [0, 0.7] : le fond est pleinement sombre
// avant que la section Objections n'entre dans le viewport.
export default function ThemeTransition() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 0.7], ['#FFFFFF', '#0A0F1C'])

  return <motion.div ref={ref} aria-hidden="true" style={{ backgroundColor }} className="h-[30vh] md:h-[40vh]" />
}