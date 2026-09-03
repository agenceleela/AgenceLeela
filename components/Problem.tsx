'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// NOTE DEV: Transition dynamique liée au scroll (comportement type mercury) :
// le fond passe de #F5F7FA à #0A0F1C proportionnellement à la progression du scroll,
// et les textes s'éclaircissent en synchrone pour garantir le contraste à tout instant.
// Offset ["start end", "center center"] : la section est pleinement sombre dès qu'elle
// est centrée à l'écran, assurant la continuité avec BentoGrid (fond bleu nuit).

export default function Problem() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  // NOTE DEV: valeur de départ alignée sur le fond de fin de SocialProof (#F5F7FA)
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#F5F7FA', '#0A0F1C'])
  const headingColor = useTransform(scrollYProgress, [0.15, 0.6], ['#0A0F1C', '#FFFFFF'])
  const textColor = useTransform(scrollYProgress, [0.15, 0.6], ['#334155', '#94A3B8'])
  const emphasisColor = useTransform(scrollYProgress, [0.15, 0.6], ['#0A0F1C', '#FFFFFF'])

  return (
    <motion.section ref={ref} style={{ backgroundColor }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h2
            style={{ color: headingColor }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          >
            Vous passez vos journées à gérer votre métier, mais personne ne vous trouve.
          </motion.h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <motion.p style={{ color: textColor }}>
              Vous êtes excellent dans ce que vous faites. Mais entre les appels clients,
              la gestion de votre équipe et les opérations quotidiennes, qui a le temps
              de s'occuper du marketing ?
            </motion.p>
            <motion.p style={{ color: textColor }}>
              Résultat : votre visibilité est invisible sur Google. Vos réseaux sociaux
              sont muets. Et quand un lead arrive, il est souvent mal qualifié ou trop
              tardif.
            </motion.p>
            <motion.p style={{ color: emphasisColor }} className="font-semibold">
              Le problème n'est pas votre offre. C'est qu'elle reste dans l'ombre.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}