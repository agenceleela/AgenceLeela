import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SocialProof from '../components/SocialProof'
import FounderSlots from '../components/FounderSlots'
import LeadForm from '../components/LeadForm'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-leela-white font-sans text-leela-dark-blue antialiased">
      <Navbar />
      <Hero />
      <SocialProof />
      <FounderSlots />
      <LeadForm />
      <FAQ />
      <Footer />
    </main>
  )
}