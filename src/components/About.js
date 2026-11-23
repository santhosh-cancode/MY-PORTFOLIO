import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Profile</span>
          <h2>About Me</h2>
          <div className="underline"></div>
        </motion.div>
        
        <motion.div 
          className="about-simple-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="about-bio-text">
            <p className="lead-text">
              I am an <strong>MCA graduate</strong> with practical experience in <strong>React.js and Python development</strong>.
            </p>
            <p>
              I have practical software development experience building and deploying responsive web applications and live client websites. I enjoy solving real-world challenges through clean code, frontend engineering, backend integrations, and machine learning models.
            </p>
            <p>
              I am deeply interested in exploring modern technologies, modern web standards, and developer platforms. I am currently continuously improving my technical depth and communication skills to contribute effectively to software engineering teams.
            </p>
          </div>

          <div className="about-simple-highlights">
            <div className="simple-highlight-row">
              <span className="highlight-dot"></span>
              <div>
                <h4>Master of Computer Applications (MCA)</h4>
                <p>Advanced foundation in full-stack web architectures and software engineering.</p>
              </div>
            </div>
            <div className="simple-highlight-row">
              <span className="highlight-dot"></span>
              <div>
                <h4>Live Web Application Experience</h4>
                <p>Delivered production client websites with responsive design and custom domains.</p>
              </div>
            </div>
            <div className="simple-highlight-row">
              <span className="highlight-dot"></span>
              <div>
                <h4>React.js & Python Specialist</h4>
                <p>Practical integration of dynamic user interfaces with Python backends and databases.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
