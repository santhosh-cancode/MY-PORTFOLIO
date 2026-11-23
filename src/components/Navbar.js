import React, { useState, useEffect } from 'react';
import {
  IconHome,
  IconUser,
  IconCode,
  IconGraduationCap,
  IconBriefcase,
  IconFolder,
  IconMail
} from './Icons';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero', icon: <IconHome size={18} /> },
    { name: 'About', href: '#about', id: 'about', icon: <IconUser size={18} /> },
    { name: 'Skills', href: '#skills', id: 'skills', icon: <IconCode size={18} /> },
    { name: 'Education', href: '#education', id: 'education', icon: <IconGraduationCap size={18} /> },
    { name: 'Experience', href: '#experience', id: 'experience', icon: <IconBriefcase size={18} /> },
    { name: 'Projects', href: '#projects', id: 'projects', icon: <IconFolder size={18} /> },
    { name: 'Contact', href: '#contact', id: 'contact', icon: <IconMail size={18} /> },
  ];

  return (
    <>
      {/* Top Desktop Navigation Bar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#hero" className="logo">
            Santhosh<span>.S</span>
          </a>
          <ul className="nav-links desktop-only">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={activeSection === link.id ? 'active' : ''}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Modern Mobile Bottom Dock */}
      <div className="mobile-bottom-nav">
        <div className="nav-dock glass-panel">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`dock-item ${activeSection === link.id ? 'active' : ''}`}
              title={link.name}
              aria-label={link.name}
            >
              <span className="dock-icon">{link.icon}</span>
              <span className="dock-label">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
