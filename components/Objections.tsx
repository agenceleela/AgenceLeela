'use client'

import { motion } from 'framer-motion'
import { Clock, Euro, Zap } from 'lucide-react'

// NOTE DEV: 3 objections triées de la plus fréquente à la moins fréquente (tuto).
const objections = [
  {
    icon: Clock,
    question: 'Je ne veux pas d'abonnement long',
    answer: 'Sans engagement après 4 mois. Arrêtez quand vous voulez, sans frais.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Euro,
    question: 'Ça va me coûter une fortune',
    answer: '150€/mois tout inclus. Pas de frais cachés, pas de surprises.',
    color: 'from-green-500 to-emerald-400',
  },
  {
    icon: Zap,
    question: 'Je n'ai pas le temps de gérer ça',
    answer: 'Zéro effort de votre part. On gère tout : contenu, publication, capture de leads.',
    color: 'from-orange-400 to-red-500',
  },
]

export default function Objections() {
  return (
    <section className="bg-leela-dark-blue py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Vos questions, nos réponses.</h2>
          <p className="mx-auto max-w-2xl text-xl text-leela-slate-light">
            Trois réponses franches aux trois questions qu'on nous pose le plus.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {objections.map((objection, index) => (
            <motion.div
              key={objection.question}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-leela-border bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${objection.color}`}
              >
                <objection.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">« {objection.question} »</h3>
              <p className="leading-relaxed text-leela-slate-light">{objection.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}