import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Santhosh<span>.S</span></div>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="footer border-t border-white/10 mt-20 p-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Santhosh S.</p>
        <p className="mt-2 text-sm text-gray-500">MCA Pursuing | Web Developer | Thanjavur</p>
      </footer>
    </div>
  );
}

export default App;
