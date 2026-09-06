'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { XCircle } from 'lucide-react'

// NOTE DEV: départ en #FFFFFF (au lieu de #F5F7FA) depuis la mise en silence de
// SocialProof, pour assurer la continuité visuelle avec le Hero (fond blanc).

export default function Problem() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#FFFFFF', '#0A0F1C'])
  const headingColor = useTransform(scrollYProgress, [0.15, 0.6], ['#0A0F1C', '#FFFFFF'])
  const textColor = useTransform(scrollYProgress, [0.15, 0.6], ['#334155', '#94A3B8'])
  const emphasisColor = useTransform(scrollYProgress, [0.15, 0.6], ['#0A0F1C', '#FFFFFF'])

  const problems = [
    'Votre entreprise est invisible sur Google.',
    'Vos réseaux sociaux sont muets (ou vous les gérez dans l\'urgence).',
    'Les agences traditionnelles vous promettent la lune et vous facturent des milliers d\'euros pour des "rapports" inutiles.',
  ]

  return (
    <motion.section ref={ref} style={{ backgroundColor }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h2
            style={{ color: headingColor }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          >
            Vous êtes excellent dans votre métier. Mais votre marketing vous coûte du temps, de l'argent et des cheveux blancs.
          </motion.h2>

          <div className="space-y-6 text-lg leading-relaxed mb-8">
            <motion.p style={{ color: textColor }}>
              Entre la gestion de vos équipes, vos opérations quotidiennes et vos clients actuels, qui a le temps de poster sur les réseaux ou d'écrire des articles de blog ?
            </motion.p>
            <motion.p style={{ color: textColor }} className="font-semibold">
              Le résultat est toujours le même :
            </motion.p>
          </div>

          {/* Problems list */}
          <div className="space-y-4 mb-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <motion.p style={{ color: textColor }} className="text-lg">
                  {problem}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <motion.p style={{ color: emphasisColor }} className="text-lg font-semibold mt-8">
            Le problème n'est pas votre offre. C'est qu'elle reste dans l'ombre. Il est temps de changer la donne.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}