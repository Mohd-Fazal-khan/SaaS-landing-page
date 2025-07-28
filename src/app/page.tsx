

import Hero from "@/components/hero"
import Features from "@/components/features"
import Demo from "@/components/demo"
import PricingCalculator from "@/components/pricing-calculator"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Hero />
      <Features />
      <Demo />
      <PricingCalculator />
      <Pricing />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
