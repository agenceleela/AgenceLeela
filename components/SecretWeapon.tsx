'use client'

import { motion } from 'framer-motion'
import { Eye, FileText, Video, MessageCircle } from 'lucide-react'

const deliverables = [
  { icon: FileText, text: 'Articles' },
  { icon: Video, text: 'Scripts vidéos' },
  { icon: MessageCircle, text: 'Entonnoir WhatsApp' },
]

export default function SecretWeapon() {
  return (
    <section className="py-24 bg-leela-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            La Différence Leela
          </h2>
          <p className="text-2xl text-leela-slate-light max-w-3xl mx-auto">
            Nous ne vous vendons pas des promesses. Nous vous montrons le résultat.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-leela-slate-light leading-relaxed"
          >
            <p>
              La plupart des agences vous font signer un devis, puis disparaissent pendant 3 semaines pour "réfléchir à une stratégie".
            </p>
            <p className="font-semibold text-white text-xl">
              Pas nous.
            </p>
            <p>
              Lors de notre appel de découverte de 15 minutes, après avoir écouté vos objectifs, nous partageons notre écran et vous montrons un aperçu concret de votre contenu pour les 30 prochains jours.
            </p>
          </motion.div>

          {/* Deliverables preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 grid grid-cols-3 gap-6"
          >
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-leela-border rounded-2xl p-6 text-center"
              >
                <item.icon className="w-10 h-10 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">{item.text}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-lg text-leela-slate-light text-center"
          >
            Tout est déjà là, adapté à votre business. Vous savez exactement pour quoi vous payez avant même de sortir votre carte bancaire.
          </motion.p>
        </div>
      </div>
    </section>
  )
}