import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import DualPositioning from '@/components/sections/DualPositioning'
import ProcessSection from '@/components/sections/ProcessSection'
import EventsSection from '@/components/sections/EventsSection'
import BrandCollabs from '@/components/sections/BrandCollabs'
import StatsBar from '@/components/sections/StatsBar'
import FounderSection from '@/components/sections/FounderSection'
import JoinCTA from '@/components/sections/JoinCTA'

export default function HomePage() {
  return (
    <main className="relative bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <DualPositioning />
      <StatsBar />
      <ProcessSection />
      <EventsSection />
      <BrandCollabs />
      <FounderSection />
      <JoinCTA />
      <Footer />
    </main>
  )
}
