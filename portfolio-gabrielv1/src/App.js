import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import NavBar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
// import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <main>
      <div className="App">
        <NavBar /> 
        <About />
        <Skills />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </main>
  );
}

export default App;
