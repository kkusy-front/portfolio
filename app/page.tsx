import About from "./compontens/sections/About";
import Contact from "./compontens/sections/Contact";
import Hero from "./compontens/sections/Hero";
import Projects from "./compontens/sections/Projects";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
