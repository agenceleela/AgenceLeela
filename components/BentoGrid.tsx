'use client'

import { motion } from 'framer-motion'
import { Search, Video, MessageCircle } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Domination Google',
    description: "31 articles optimisés SEO/mois pour capter l'intention de recherche et positionner votre entreprise en tête des résultats.",
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Video,
    title: 'Machine à Contenu Social',
    description: "31 scripts et vidéos verticales/mois pour captiver l'attention sur TikTok, Instagram Reels, YouTube Shorts et LinkedIn.",
    color: 'from-purple-500 to-pink-400',
  },
  {
    icon: MessageCircle,
    title: 'Conversion WhatsApp',
    description: 'Lead magnet livré instantanément sur WhatsApp + automatisation de la prise de rendez-vous via Cal.com.',
    color: 'from-green-500 to-emerald-400',
  },
]

export default function BentoGrid() {
  return (
    <section id="fonctionnement" className="py-24 bg-leela-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            La solution complète
          </h2>
          <p className="text-xl text-leela-slate-light max-w-2xl mx-auto">
            Trois piliers pour transformer votre visibilité en chiffre d'affaires récurrent.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-leela-border rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon with gradient background */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-leela-slate-light leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
