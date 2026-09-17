'use client'

import { motion } from 'framer-motion'

// NOTE DEV: pré-clients, aucun témoignage réel n'existe encore : cette section fait
// office de social proof honnête (rareté + projection). Interdit d'y publier de faux
// témoignages (publicité trompeuse). Dès 2-3 vrais témoignages signés, remplacer les
// slots par des cartes témoignages (structure prête).
// NOTE DEV: passer le statut à "Réservée" dès qu'une place fondatrice est signée.
const slots = [
  { place: 'Place 1', status: 'Disponible' },
  { place: 'Place 2', status: 'Disponible' },
  { place: 'Place 3', status: 'Disponible' },
]

export default function FounderSlots() {
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
            3 places fondatrices. Et c'est tout.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-leela-slate-light">
            Nous ne déployons que 3 systèmes ce mois-ci, pour garantir la qualité de chaque déploiement.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {slots.map((slot, index) => (
            <motion.div
              key={slot.place}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border-2 border-dashed border-leela-border bg-white/5 p-8 text-center"
            >
              <p className="text-sm font-medium uppercase tracking-wider text-leela-slate-light">
                {slot.place}
              </p>
              <p className="mt-4 text-xl font-semibold text-white">Votre entreprise ici</p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-semibold text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                {slot.status}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-leela-slate-light"
        >
          Fondateurs = tarif bloqué à 150€/mois à vie, déploiement prioritaire et garantie 60 jours.
        </motion.p>
      </div>
    </section>
  )
}