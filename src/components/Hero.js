import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconDownload, IconFolder, IconMail } from './Icons';

const Hero = () => {
  const [showToast, setShowToast] = useState(false);

  const handleResumeClick = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  return (
    <section className="hero-section" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="greeting-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="status-indicator"></span>
          <span>Hello, I'm</span>
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Santhosh S.
        </motion.h1>

        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Web Application Developer <span className="title-divider">|</span> MCA Graduate
        </motion.h2>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          I am an MCA graduate interested in web application development and modern technologies. I have practical experience with React.js, Python and web technologies. I enjoy building responsive web applications and continuously improving my technical skills.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <a href="#projects" className="btn btn-primary">
            <IconFolder size={18} className="btn-icon" />
            <span>View Projects</span>
          </a>

          <button
            onClick={handleResumeClick}
            className="btn btn-secondary btn-resume"
            title="Download Resume (Updated PDF upload coming soon)"
            aria-label="Download Resume"
          >
            <IconDownload size={18} className="btn-icon" />
            <span>Download Resume</span>
          </button>

          <a href="#contact" className="btn btn-outline">
            <IconMail size={18} className="btn-icon" />
            <span>Contact Me</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Resume Placeholder Toast / Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="toast-notification glass-panel"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="toast-icon">📄</div>
            <div className="toast-content">
              <strong>Resume Update In Progress</strong>
              <p>My updated resume is being finalized and will be uploaded shortly. In the meantime, please feel free to reach out via Contact Me!</p>
            </div>
            <button className="toast-close" onClick={() => setShowToast(false)}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative background glow orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-grid-overlay"></div>
    </section>
  );
};

export default Hero;
