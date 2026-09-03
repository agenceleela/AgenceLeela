'use client'

import { motion } from 'framer-motion'

export default function Problem() {
  return (
    <section className="py-24 bg-gradient-to-b from-leela-light-gray to-leela-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-leela-dark-blue mb-8 leading-tight">
            Vous passez vos journées à gérer votre métier, mais personne ne vous trouve.
          </h2>
          
          <div className="space-y-6 text-lg text-leela-slate leading-relaxed">
            <p>
              Vous êtes excellent dans ce que vous faites. Mais entre les appels clients, 
              la gestion de votre équipe et les opérations quotidiennes, qui a le temps 
              de s'occuper du marketing ?
            </p>
            <p>
              Résultat : votre visibilité est invisible sur Google. Vos réseaux sociaux 
              sont muets. Et quand un lead arrive, il est souvent mal qualifié ou trop 
              tardif.
            </p>
            <p className="font-semibold text-leela-dark-blue">
              Le problème n'est pas votre offre. C'est qu'elle reste dans l'ombre.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
