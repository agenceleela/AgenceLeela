import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ThemeTransition from '../components/ThemeTransition'
import FAQ from '../components/FAQ'
import SocialProof from '../components/SocialProof'
import LeadForm from '../components/LeadForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-leela-white font-sans text-leela-dark-blue antialiased">
      <Navbar />
      <Hero />
      <ThemeTransition />
      <FAQ />
      <SocialProof />
      <LeadForm />
      <Footer />
    </main>
  )
}