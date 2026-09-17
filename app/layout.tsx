import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Agence Leela — On remplit votre agenda',
  description:
    "De la création de contenu (SEO + Réseaux Sociaux) jusqu'à la prise de RDV pour votre TPE/PME. Réservez votre appel de 15 min et découvrez votre contenu pré-généré.",
  keywords: ['marketing', 'SEO', 'réseaux sociaux', 'TPE', 'PME', 'leads', 'prospects'],
  authors: [{ name: 'Agence Leela' }],
  openGraph: {
    title: 'Agence Leela — On remplit votre agenda',
    description:
      "De la création de contenu (SEO + Réseaux Sociaux) jusqu'à la prise de RDV pour votre TPE/PME. Réservez votre appel de 15 min et découvrez votre contenu pré-généré.",
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}