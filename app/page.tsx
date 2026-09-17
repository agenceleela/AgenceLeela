import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ThemeTransition from '../components/ThemeTransition'
import Objections from '../components/Objections'
import SocialProof from '../components/SocialProof'
import LeadForm from '../components/LeadForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-leela-white font-sans text-leela-dark-blue antialiased">
      <Navbar />
      <Hero />
      <ThemeTransition />
      <Objections />
      <SocialProof />
      <LeadForm />
      <Footer />
    </main>
  )
}