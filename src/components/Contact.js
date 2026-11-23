import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IconGitHub,
  IconLinkedIn,
  IconMail,
  IconGlobe,
  IconPhone,
  IconMapPin
} from './Icons';

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/santhosh-cancode",
    icon: <IconGitHub size={22} />,
    color: "#181717",
    label: "github.com/santhosh-cancode",
    isExternal: true
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/santhosh-s-201951278/",
    icon: <IconLinkedIn size={22} />,
    color: "#0A66C2",
    label: "linkedin.com/in/santhosh-s",
    isExternal: true
  },
  {
    name: "Email",
    url: "mailto:santhoshsakthivel2705@gmail.com",
    icon: <IconMail size={22} />,
    color: "#EA4335",
    label: "santhoshsakthivel2705@gmail.com",
    isExternal: false
  },
  {
    name: "Portfolio",
    url: "https://santhoshinfo.netlify.app/",
    icon: <IconGlobe size={22} />,
    color: "#2563EB",
    label: "santhoshinfo.netlify.app",
    isExternal: true
  },
  {
    name: "Phone",
    url: "tel:+919345706321",
    icon: <IconPhone size={22} />,
    color: "#16A34A",
    label: "+91 9345706321",
    isExternal: false
  }
];

const Contact = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2>Contact</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="simple-contact-layout">
          {/* Direct Contact Info */}
          <div className="simple-contact-info">
            <div className="contact-info-row">
              <span className="contact-info-icon"><IconMail size={20} /></span>
              <div>
                <span className="contact-info-label">Email</span>
                <a href="mailto:santhoshsakthivel2705@gmail.com" className="contact-info-value">
                  santhoshsakthivel2705@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-row">
              <span className="contact-info-icon"><IconPhone size={20} /></span>
              <div>
                <span className="contact-info-label">Phone</span>
                <div className="contact-phone-links">
                  <a href="tel:+919345706321" className="contact-info-value">+91 9345706321</a>
                  <span className="sep">•</span>
                  <a href="tel:+916381636361" className="contact-info-value">+91 6381636361</a>
                </div>
              </div>
            </div>

            <div className="contact-info-row">
              <span className="contact-info-icon"><IconMapPin size={20} /></span>
              <div>
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">Thanjavur, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Social Brand Icon Buttons */}
          <div className="simple-social-col">
            <span className="social-col-label">Social & Links</span>
            <div className="simple-social-buttons">
              {socialLinks.map((item) => {
                const isHovered = activeTooltip === item.name;
                return (
                  <div
                    key={item.name}
                    className="social-btn-container"
                    onMouseEnter={() => setActiveTooltip(item.name)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <a
                      href={item.url}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="simple-icon-btn"
                      aria-label={item.name}
                      style={{ '--brand-color': item.color }}
                    >
                      {item.icon}
                    </a>
                    <span className="simple-btn-title">{item.name}</span>

                    {/* Tooltip on hover */}
                    {isHovered && (
                      <div className="social-tooltip" role="tooltip">
                        <span className="tooltip-action">{item.name}</span>
                        <span className="tooltip-url">{item.label}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
