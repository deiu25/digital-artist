import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './sections/About';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Parteners from './sections/Parteners';
import Projects from './sections/Projects';
import AllProjects from './pages/AllProjects';

const App = () => {
  return (
    <Router>
      <main className="overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Parteners />
              <About />
              <Projects />
            </>
          } />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
