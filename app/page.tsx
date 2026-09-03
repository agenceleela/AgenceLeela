import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SocialProof from '../components/SocialProof'
import Problem from '../components/Problem'
import BentoGrid from '../components/BentoGrid'
import HowItWorks from '../components/HowItWorks'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-leela-white text-leela-dark-blue font-sans antialiased">
      <Navbar />
      <Hero />
      <SocialProof />
      <Problem />
      <BentoGrid />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  )
}
