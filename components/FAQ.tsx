'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// NOTE DEV: transition dynamique clair → sombre scroll-liée (pattern validé sur
// l'ancienne section Problem) : le fond ET les textes changent de couleur en
// fonction du scroll. Jonctions sans couture : #FFFFFF au départ (= fond Hero),
// #0A0F1C à l'arrivée (= fond des sections suivantes).
const faqs = [
  {
    question: "Je ne veux pas d'abonnement long",
    answer: "Sans engagement après 4 mois. Arrêtez quand vous voulez, sans frais.",
  },
  {
    question: 'Ça va me coûter une fortune',
    answer: "150€/mois tout inclus. Pas de frais cachés, pas de surprises.",
  },
  {
    question: "Je n'ai pas le temps de gérer ça",
    answer: 'Zéro effort de votre part. On gère tout : contenu, publication, capture de leads.',
  },
]

export default function FAQ() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#FFFFFF', '#0A0F1C'])
  const headingColor = useTransform(scrollYProgress, [0.2, 0.6], ['#0A0F1C', '#FFFFFF'])
  const subColor = useTransform(scrollYProgress, [0.2, 0.6], ['#334155', '#94A3B8'])

  return (
    <motion.section ref={ref} style={{ backgroundColor }} className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.h2
            style={{ color: headingColor }}
            className="mb-6 text-3xl font-bold md:text-4xl"
          >
            Questions fréquentes
          </motion.h2>
          <motion.p style={{ color: subColor }} className="mx-auto max-w-2xl text-xl">
            Trois réponses franches aux trois questions qu'on nous pose le plus.
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-leela-border bg-white/5 p-6 transition-colors duration-300 hover:bg-white/10 open:bg-white/10"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-leela-slate-light transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed text-leela-slate-light">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </motion.section>
  )
}