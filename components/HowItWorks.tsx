'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'On définit votre offre irrésistible',
    description: "Analyse de votre marché, identification de votre avatar client et création d'une offre qui convertit.",
  },
  {
    number: '02',
    title: 'On déploie le contenu massivement',
    description: '31 articles SEO + 31 vidéos sociales par mois. Votre marque devient omniprésente.',
  },
  {
    number: '03',
    title: 'Vous recevez les RDV dans votre agenda',
    description: 'Les prospects qualifiés prennent rendez-vous automatiquement via Cal.com. Zero effort.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-leela-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comment ça marche
          </h2>
          <p className="text-xl text-leela-slate-light max-w-2xl mx-auto">
            Trois étapes simples pour transformer votre visibilité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step number */}
              <div className="text-6xl font-bold text-white/10 mb-4">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-leela-slate-light leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-0 w-full h-px bg-gradient-to-r from-white/20 to-transparent transform translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
