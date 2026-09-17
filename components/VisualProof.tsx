'use client'

import { motion } from 'framer-motion'
import { Play, Search } from 'lucide-react'

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

        {/* Mockup vidéo verticale */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-0 left-6 w-28 -rotate-3 rounded-[1.5rem] border border-slate-700 bg-leela-dark-blue p-2 shadow-2xl md:w-32"
        >
          <div className="flex h-44 flex-col items-center justify-center gap-3 rounded-[1.25rem] bg-gradient-to-b from-leela-slate to-leela-dark-blue md:h-48">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <Play className="h-4 w-4 text-white" />
            </span>
            <span className="rounded-full bg-orange-400 px-2 py-0.5 text-[9px] font-bold text-white">
              Commentez « INFO »
            </span>
            <div className="w-16 space-y-1">
              <div className="h-1.5 rounded-full bg-white/30" />
              <div className="mx-auto h-1.5 w-2/3 rounded-full bg-white/30" />
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