import About from "./sections/About"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Parteners from "./sections/Parteners"
import Projects from "./sections/Projects"

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Parteners />
      <About />
      <Projects />
    </main>
  )
}

export default App