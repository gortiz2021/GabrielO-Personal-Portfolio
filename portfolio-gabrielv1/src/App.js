import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NavBar from './components/navbar/NavBar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <main>
      <div className="App">
        <About />
        <Contact />
        <NavBar />
        <Projects />
        <Skills />
        <Testimonials />
      </div>
    </main>
  );
}

export default App;
