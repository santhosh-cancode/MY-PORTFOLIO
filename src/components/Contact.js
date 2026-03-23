import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Contact Information</h3>
            <p>I'm currently available for freelance work and full-time opportunities. Reach out using any of the platforms below!</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon">📞</div>
                <div>
                  <h4>Call Me</h4>
                  <a href="tel:+919345706321">+91 9345706321</a><br/>
                  <a href="tel:+916381636361">+91 6381636361</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:santhoshsakthivel2705@gmail.com">santhoshsakthivel2705@gmail.com</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Thanjavur, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="social-links glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Connect Online</h3>
            
            <a href="https://www.linkedin.com/in/santhosh-s-201951278" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
              <div className="social-icon">in</div>
              <div className="social-text">
                <h4>LinkedIn</h4>
                <span>Let's connect professionally</span>
              </div>
            </a>
            
            <a href="https://github.com/santhosh-cancode" target="_blank" rel="noopener noreferrer" className="social-card github">
              <div className="social-icon">⌨</div>
              <div className="social-text">
                <h4>GitHub</h4>
                <span>Check out my code repositories</span>
              </div>
            </a>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
