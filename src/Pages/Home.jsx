import Header from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'
import Hero from '../Components/sections/Hero'
import HowItFeels from '../Components/sections/HowItFeels'
import Features from '../Components/sections/Features'
import Demo from '../Components/sections/Demo'
import HowItWorks from '../Components/sections/HowItWorks'
import Pricing from '../Components/sections/Pricing'
import Contact from '../Components/sections/Contact'
import FinalCTA from '../Components/sections/FinalCTA'
import ScrollToTop from '../Components/ui/ScrollToTop'
import Testimonials from '../Components/sections/Testimonials'

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <HowItFeels />
            <Features />
            <Demo />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <Contact />
            <FinalCTA />
            <ScrollToTop />
            <Footer />
        </>
    )
}