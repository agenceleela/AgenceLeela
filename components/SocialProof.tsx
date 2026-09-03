'use client'

import { motion } from 'framer-motion'

const companies = [
  { name: 'TechCorp', width: 120 },
  { name: 'InnovateLab', width: 140 },
  { name: 'GrowthHub', width: 130 },
  { name: 'ScaleUp', width: 110 },
  { name: 'NextGen', width: 125 },
]

export default function SocialProof() {
  return (
    <section className="py-16 bg-leela-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-leela-slate text-sm font-medium mb-10 uppercase tracking-wider"
        >
          Ils nous font confiance
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              {/* Placeholder logo - gris discret */}
              <div 
                className="h-10 bg-leela-slate/20 rounded-lg flex items-center justify-center px-6"
                style={{ width: company.width }}
              >
                <span className="text-leela-slate/40 font-semibold text-lg">
                  {company.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
