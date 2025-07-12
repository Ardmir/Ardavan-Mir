import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import LogotypeShowcase from "@/components/logotype-showcase"

export default function Home() {
  return (
    <main className="bg-charcoal text-soft-white">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <LogotypeShowcase />
      <Contact />
    </main>
  )
}
