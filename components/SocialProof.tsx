'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  Calendar,
  CalendarCheck,
  FileText,
  Globe,
  MessageCircle,
  MessageSquare,
  Search,
  Video,
  Zap,
} from 'lucide-react'

// NOTE DEV: section porte la transition dynamique clair → sombre (scroll-liée),
// car elle est la première section sombre après le Hero.
// Plages resserrées ([0, 0.45] fond / [0.1, 0.4] textes) : la section est plus haute
// (cartes de valeur), le fond doit être sombre dès l'entrée des cartes.
// NOTE DEV: cartes de valeur reprises de l'ancien BentoGrid (preuve de valeur demandée),
// 3e carte construite autour de la ligne conservée "24h/24 capture de RDV automatisée".
const fronts = [
  {
    icon: Search,
    title: 'Front Google',
    subtitle: 'Être trouvé quand on vous cherche',
    features: [
      { icon: Globe, text: 'Site web optimisé pour la conversion (pas juste pour être "joli").' },
      { icon: FileText, text: '30 articles SEO / mois pour dominer votre niche locale.' },
      { icon: Search, text: 'Refonte et optimisation complète de votre Google Business Profile.' },
      { icon: MessageSquare, text: "Système automatisé de génération d'avis clients." },
    ],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Video,
    title: 'Front Réseaux Sociaux',
    subtitle: 'Être vu quand on ne vous cherche pas',
    features: [
      { icon: Video, text: '30 vidéos verticales (Shorts/Reels/TikTok) / mois, scriptées et montées.' },
      { icon: MessageSquare, text: 'Système de capture par mot-clé en commentaire (DM instantané).' },
      { icon: Calendar, text: 'Guide pratique exclusif livré automatiquement sur WhatsApp.' },
      { icon: Globe, text: 'Landing page dédiée pour transformer les curieux en rendez-vous.' },
    ],
    color: 'from-purple-500 to-pink-400',
  },
]

const rdvFeatures = [
  { icon: Calendar, text: 'Prise de RDV automatisée via Cal.com.' },
  { icon: MessageCircle, text: 'Lead magnet livré instantanément sur WhatsApp.' },
  { icon: Zap, text: 'Votre agenda se remplit pendant que vous travaillez.' },
]

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 0.45], ['#FFFFFF', '#0A0F1C'])
  const titleColor = useTransform(scrollYProgress, [0.1, 0.4], ['#334155', '#94A3B8'])

  return (
    <motion.section ref={ref} style={{ backgroundColor }} className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: titleColor }}
          className="mb-10 text-center text-sm font-medium uppercase tracking-wider"
        >
          Ce que le Système Leela déploie pour vous
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          {fronts.map((front, index) => (
            <motion.div
              key={front.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl border border-leela-border bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${front.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <front.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">{front.title}</h3>
              <p className="mb-6 text-sm italic text-leela-slate-light">{front.subtitle}</p>
              <ul className="space-y-4">
                {front.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <feature.icon className="mt-1 h-5 w-5 flex-shrink-0 text-white/60" />
                    <span className="text-leela-slate-light">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Carte 3 : capture de RDV (ligne conservée) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-3xl border border-leela-border bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 group-hover:scale-110 transition-transform duration-300">
              <CalendarCheck className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">Capture de RDV</h3>
            <p className="mb-6 text-sm italic text-leela-slate-light">
              Transformer l'attention en agenda
            </p>
            <div className="mb-6">
              <p className="text-4xl font-bold text-white">24h/24</p>
              <p className="mt-1 text-leela-slate-light">capture de RDV automatisée</p>
            </div>
            <ul className="space-y-4">
              {rdvFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <feature.icon className="mt-1 h-5 w-5 flex-shrink-0 text-white/60" />
                  <span className="text-leela-slate-light">{feature.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ color: titleColor }}
          className="mt-10 text-center text-sm"
        >
          3 places d'études de cas fondatrices ouvertes ce mois-ci.
        </motion.p>
      </div>
    </motion.section>
  )
}