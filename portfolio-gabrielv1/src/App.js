import './App.css';

// import Layout from './components/Layout';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NavBar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
// import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
      <div className="App">
        <NavBar />
        <div className='mt-5'>
          <About />
          <Skills />
          <Projects />
          <Contact /> 
        </div> 
        
      </div>
  );
}

export default App;
