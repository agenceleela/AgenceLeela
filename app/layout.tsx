import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Agence Leela - Votre collaborateur marketing tout-en-un',
  description: 'Domination Google et Réseaux Sociaux automatisée. De la création de contenu à la prise de rendez-vous, sans effort de votre part.',
  keywords: ['marketing', 'SEO', 'réseaux sociaux', 'TPE', 'PME', 'leads', 'prospects'],
  authors: [{ name: 'Agence Leela' }],
  openGraph: {
    title: 'Agence Leela - Votre collaborateur marketing tout-en-un',
    description: 'Domination Google et Réseaux Sociaux automatisée. De la création de contenu à la prise de rendez-vous, sans effort de votre part.',
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
