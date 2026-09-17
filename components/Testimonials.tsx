'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

// NOTE DEV: CONTENU PLACEHOLDER DE RÉDACTION. Remplacer par de vrais témoignages
// signés (clients ou retours d'appels de découverte) avant toute exposition au trafic :
// publier de faux témoignages comme réels = publicité trompeuse (DGCCRF).
// Fournir les vrais témoignages pour intégration verbatim, sans réécriture.
const testimonials = [
  {
    name: 'Claire M.',
    role: 'Gérante, institut de beauté',
    initial: 'C',
    color: 'bg-blue-500',
    text: "J'ai arrêté de poster dans l'urgence le dimanche soir. Le système tourne, et mon agenda de rendez-vous se remplit tout seul.",
  },
  {
    name: 'Julien R.',
    role: "Gérant, entreprise d'électricité",
    initial: 'J',
    color: 'bg-green-500',
    text: "Ce qui m'a convaincu : on m'a montré mon contenu avant même que je signe. Aucune agence ne fait ça.",
  },
  {
    name: 'Sophie D.',
    role: 'Fondatrice, société de nettoyage',
    initial: 'S',
    color: 'bg-purple-500',
    text: "30 articles et 30 vidéos par mois… Je n'aurais jamais pu en produire le dixième moi-même. Enfin je suis visible.",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-leela-dark-blue py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ils nous ont fait confiance
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-leela-slate-light">
            Dirigeants de TPE/PME, ils ont arrêté de subir leur marketing.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-white p-6 text-left shadow-xl"
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${testimonial.color} text-sm font-bold text-white`}
                >
                  {testimonial.initial}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <Stars />
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}