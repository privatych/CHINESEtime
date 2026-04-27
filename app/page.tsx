import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import HowWeWork from '@/components/HowWeWork'
import Team from '@/components/Team'
import DeliveryMethods from '@/components/DeliveryMethods'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'
import ScrollProgress from '@/components/ScrollProgress'
import CookieBanner from '@/components/CookieBanner'
import Brands from '@/components/Brands'
import JsonLd from '@/components/JsonLd'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <CookieBanner />
      <JsonLd />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Brands />
        <HowWeWork />
        <Team />
        <DeliveryMethods />
        <Contacts />
        <Footer />
      </main>
    </>
  )
}
