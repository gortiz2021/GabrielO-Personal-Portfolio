import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
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
        <About />
        <Skills />
        <Projects />
        <Contact /> 
      </div>
  );
}

export default App;
