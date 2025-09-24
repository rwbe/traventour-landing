import OffersCTA from '../sections/OffersCTA'
import FAQSection from '../sections/FAQSection'
import FavoriteDestination from '../sections/FavoriteDestination'
import Testimonials from '../sections/Testimonials'
import Hero from '../sections/Hero'
import AboutUs from '../sections/AboutUs'
import Countries from '../sections/Countries'
import Partners from '../sections/Partners'

function Homepage() {
  return (
    <main>
      <Hero />
      <Partners />
      <AboutUs />
      <FavoriteDestination />
      <Countries />
      <Testimonials />
      <FAQSection />
      <OffersCTA />
    </main>
  )
}

export default Homepage
