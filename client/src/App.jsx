import About from "./sections/About"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Parteners from "./sections/Parteners"

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Parteners />
      <About />
    </main>
  )
}

export default App