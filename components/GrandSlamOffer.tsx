'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Shield, Award } from 'lucide-react'

const inclusions = [
  'Le Système Leela complet (SEO + Réseaux + Automatisation)',
  'Prix bloqué à 150€ / mois',
  'Engagement de 4 ou 12 mois',
  'Option de mensualisation via notre partenaire bancaire',
]

export default function GrandSlamOffer() {
  return (
    <section className="py-24 bg-gradient-to-b from-leela-dark-blue to-black">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🔥 Places Limitées
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            L'Offre Pilote Fondateur
          </h2>
          <p className="text-xl text-leela-slate-light max-w-3xl mx-auto">
            La valeur réelle du déploiement complet du Système Leela est de <span className="text-white font-bold">997€ / mois</span>. C'est le prix que nous facturerons dès que nos 3 premières études de cas seront validées.
          </p>
          <p className="text-lg text-leela-slate-light mt-4">
            Mais aujourd'hui, nous recherchons <span className="text-orange-400 font-bold">3 TPE/PME ambitieuses</span> en France pour devenir nos études de cas phares.
          </p>
        </motion.div>

        {/* Offer details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-leela-border rounded-3xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Voici notre proposition :</h3>
          <div className="space-y-4">
            {inclusions.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-leela-slate-light text-lg">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-green-500" />
            <h3 className="text-2xl font-bold text-white">Notre Garantie "Zéro Risque"</h3>
          </div>
          <p className="text-leela-slate-light text-lg leading-relaxed mb-4">
            Nous nous engageons à livrer un travail d'une qualité exceptionnelle. Si, après 60 jours, vous n'êtes pas satisfait du professionnalisme, de la réactivité et du contenu livré, nous arrêtons tout.
          </p>
          <p className="text-leela-slate-light text-lg leading-relaxed">
            La seule chose que nous demandons en échange de ce tarif préférentiel ? Un court témoignage vidéo de votre part si nous dépassons vos attentes. C'est un échange équitable.
          </p>
        </motion.div>
      </div>
    </section>
  )
}