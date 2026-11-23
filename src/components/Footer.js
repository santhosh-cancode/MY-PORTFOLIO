import React from 'react';
import {
  IconGitHub,
  IconLinkedIn,
  IconMail,
  IconArrowUp
} from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerSocials = [
    {
      name: "GitHub",
      url: "https://github.com/santhosh-cancode",
      icon: <IconGitHub size={18} />,
      color: "#181717"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/santhosh-s-201951278/",
      icon: <IconLinkedIn size={18} />,
      color: "#0A66C2"
    },
    {
      name: "Email",
      url: "mailto:santhoshsakthivel2705@gmail.com",
      icon: <IconMail size={18} />,
      color: "#EA4335"
    }
  ];

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-identity">
            <h3 className="footer-name">Santhosh S.</h3>
            <p className="footer-title">Web Application Developer | MCA Graduate</p>
          </div>

          {/* Official Social Brand Icons matching Contact section design */}
          <div className="footer-social-icons">
            {footerSocials.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target={item.url.startsWith('http') ? "_blank" : undefined}
                rel={item.url.startsWith('http') ? "noopener noreferrer" : undefined}
                className="footer-icon-btn"
                title={item.name}
                aria-label={item.name}
                style={{ '--social-color': item.color }}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="footer-actions">
            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              title="Back to Top"
              aria-label="Back to top"
            >
              <IconArrowUp size={18} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Santhosh S. All rights reserved.
          </p>
          <p className="footer-subtext">
            Crafted with React.js & modern web standards • MCA Graduate Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
