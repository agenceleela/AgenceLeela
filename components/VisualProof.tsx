'use client'

import { motion } from 'framer-motion'
import {
  Bookmark,
  Heart,
  Home,
  MessageCircle,
  Play,
  Plus,
  Search,
  Send,
} from 'lucide-react'

// NOTE DEV: mockups 100% CSS/SVG (aucune image lourde) pour un chargement rapide (exigence tuto).
export default function VisualProof() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      <div className="relative h-[380px] md:h-[420px]">
        {/* Mockup site web */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7 }}
          className="absolute left-0 top-4 w-[85%] -rotate-2 rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="ml-3 flex-1 rounded-full bg-slate-100 px-3 py-1 text-[10px] text-slate-400">
              votre-entreprise.fr
            </span>
          </div>
          <div className="space-y-3 p-5">
            <div className="h-3 w-3/4 rounded-full bg-slate-200" />
            <div className="h-3 w-1/2 rounded-full bg-slate-200" />
            <div className="h-8 w-32 rounded-xl bg-leela-dark-blue" />
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="h-12 rounded-lg bg-slate-100" />
              <div className="h-12 rounded-lg bg-slate-100" />
              <div className="h-12 rounded-lg bg-slate-100" />
            </div>
          </div>
        </motion.div>

        {/* Mockup article SEO */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7 }}
          className="absolute right-0 top-44 w-[55%] rotate-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
              Article SEO · 12/30
            </span>
            <Search className="h-3 w-3 text-blue-500" />
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-2.5 w-full rounded-full bg-slate-200" />
            <div className="h-2.5 w-5/6 rounded-full bg-slate-200" />
            <div className="h-2.5 w-4/6 rounded-full bg-slate-200" />
          </div>
        </motion.div>

        {/* Mockup téléphone : interface Instagram iOS */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-0 left-4 w-32 -rotate-3 rounded-[1.75rem] border border-slate-700 bg-leela-dark-blue p-1.5 shadow-2xl md:w-36"
        >
          <div className="flex h-56 flex-col overflow-hidden rounded-[1.4rem] bg-white md:h-60">
            {/* Barre de statut iOS */}
            <div className="flex items-center justify-between px-2.5 pt-1.5">
              <span className="text-[6px] font-semibold text-slate-900">9:32</span>
              <div className="flex items-center gap-0.5">
                <span className="h-1 w-1 rounded-full bg-slate-900" />
                <span className="h-1 w-1.5 rounded-full bg-slate-900" />
                <span className="h-1 w-2.5 rounded-sm bg-slate-900" />
              </div>
            </div>

            {/* Header Instagram */}
            <div className="flex items-center justify-between px-2.5 py-1">
              <span className="h-2.5 w-2.5 rounded border border-slate-900" />
              <span className="text-[8px] font-semibold italic text-slate-900">Instagram</span>
              <Send className="h-2.5 w-2.5 text-slate-900" />
            </div>

            {/* Stories */}
            <div className="flex gap-1 px-2.5 pb-1.5">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="rounded-full bg-gradient-to-br from-pink-500 to-orange-400 p-[1.5px]">
                  <span className="block h-3.5 w-3.5 rounded-full bg-slate-200" />
                </span>
              ))}
            </div>

            {/* Header du post */}
            <div className="flex items-center gap-1 px-2.5 py-1">
              <span className="h-3 w-3 rounded-full bg-gradient-to-br from-pink-400 to-orange-400" />
              <span className="h-1.5 w-12 rounded-full bg-slate-300" />
            </div>

            {/* Média : vidéo verticale + badge CTA (remplace la photo du post) */}
            <div className="flex flex-1 flex-col items-center justify-center gap-1.5 bg-gradient-to-b from-leela-slate to-leela-dark-blue">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                <Play className="h-3 w-3 text-white" />
              </span>
              <span className="rounded-full bg-orange-400 px-2 py-0.5 text-[6px] font-bold text-white">
                Commentez « INFO »
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5 px-2.5 py-1">
              <Heart className="h-2.5 w-2.5 text-slate-900" />
              <MessageCircle className="h-2.5 w-2.5 text-slate-900" />
              <Send className="h-2.5 w-2.5 text-slate-900" />
              <Bookmark className="ml-auto h-2.5 w-2.5 text-slate-900" />
            </div>
            <p className="px-2.5 text-[6px] font-semibold text-slate-900">1 254 j'aime</p>
            <div className="space-y-0.5 px-2.5 py-1">
              <div className="h-1 w-full rounded-full bg-slate-200" />
              <div className="h-1 w-2/3 rounded-full bg-slate-200" />
            </div>

            {/* Barre de navigation */}
            <div className="mt-auto flex items-center justify-between border-t border-slate-100 px-2.5 py-1">
              <Home className="h-2.5 w-2.5 text-slate-900" />
              <Search className="h-2.5 w-2.5 text-slate-900" />
              <Plus className="h-2.5 w-2.5 text-slate-900" />
              <Heart className="h-2.5 w-2.5 text-slate-900" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            </div>
          </div>
        </motion.div>
      </div>

      <p className="mt-6 text-center text-sm text-leela-slate">
        Voici ce qu'on a déjà préparé pour vous. Votre propre version sera révélée lors de l'appel.
      </p>
    </motion.div>
  )
}