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
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text-card glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Education & Journey</h3>
            <p>
              I am a passionate software developer with a strong foundation in computer applications. 
              Having successfully <strong>completed my BCA</strong>, I am currently <strong>pursuing my MCA</strong> to 
              deepen my technical expertise and problem-solving skills.
            </p>
            <p>
              My journey involves working on real-time projects and expanding my knowledge through valuable 
              internships. I specialize in web development, creating impactful solutions and taking 
              on freelance projects. I have successfully built and delivered both static and dynamic 
              websites for local businesses and shops, helping them establish a strong online presence.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">MCA</span>
                <span className="stat-label">Pursuing</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">BCA</span>
                <span className="stat-label">Graduated</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">1+</span>
                <span className="stat-label">Years Exp.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
