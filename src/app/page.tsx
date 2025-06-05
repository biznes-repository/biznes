import FAQ from "@/sections/FAQ"
import Hero from "@/sections/Hero"
import Results from "@/sections/Results"
import Services from "@/sections/Services"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Results />
      <FAQ />
    </div>
  )
}
