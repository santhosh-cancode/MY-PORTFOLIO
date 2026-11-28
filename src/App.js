import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
