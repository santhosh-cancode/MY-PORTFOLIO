import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Top Navbar (Logo + Desktop Links) */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Santhosh<span>.S</span></div>
          <ul className="nav-links desktop-only">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Modern Mobile Bottom Dock */}
      <div className="mobile-bottom-nav">
        <div className="nav-dock glass-panel">
          <a href="#hero" className="dock-item">
            <span className="dock-icon">🏠</span>
            <span className="dock-label">Home</span>
          </a>
          <a href="#about" className="dock-item">
            <span className="dock-icon">👤</span>
            <span className="dock-label">About</span>
          </a>
          <a href="#experience" className="dock-item">
            <span className="dock-icon">💼</span>
            <span className="dock-label">Exp.</span>
          </a>
          <a href="#projects" className="dock-item">
            <span className="dock-icon">💻</span>
            <span className="dock-label">Work</span>
          </a>
          <a href="#contact" className="dock-item">
            <span className="dock-icon">📞</span>
            <span className="dock-label">Get In</span>
          </a>
        </div>
      </div>

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
