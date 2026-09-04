'use client'

import { motion } from 'framer-motion'
import { Rocket, Zap, CalendarCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Rocket,
    title: 'On déploie votre Système Leela',
    description: 'Google et Réseaux Sociaux. Deux fronts de déploiement qui travaillent pour vous 24h/24.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Le contenu convertit en continu',
    description: 'Chaque article SEO et chaque vidéo verticale capturent des contacts qualifiés automatiquement.',
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Votre agenda se remplit',
    description: "Les prospects bookent des appels ou demandent des infos. Vous n'avez plus qu'à honorer les RDV.",
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
            De la visibilité au rendez-vous booké, en trois étapes.
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

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7 text-white" />
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