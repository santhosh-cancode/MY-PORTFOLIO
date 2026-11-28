import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconExternalLink } from './Icons';

// The 6 authentic certificate images
const certificates = [
  {
    id: 1,
    title: "Software Development & UI Design Internship (ZENO)",
    file: "/certificates/Internship Completion Certificate.png"
  },
  {
    id: 2,
    title: "Basics of Python (UniAthena & Cambridge CIQ)",
    file: "/certificates/Santhosh_CR641_certificate_digital.png"
  },
  {
    id: 3,
    title: "Prompt Engineering 101 (KodeKloud)",
    file: "/certificates/prompt_Engineering(1)_digital.png"
  },
  {
    id: 4,
    title: "AWS Basics (KodeKloud)",
    file: "/certificates/AWS_BASIC_digital.png"
  },
  {
    id: 5,
    title: "Linux for Absolute Beginners (KodeKloud)",
    file: "/certificates/Linux_for_Absolute_Beginners_digital.png"
  },
  {
    id: 6,
    title: "UI / UX for Beginners (Great Learning)",
    file: "/certificates/S_Santhosh-1_digital.png"
  },
  {
    id: 7,
    title: "Programming Basics (Great Learning)",
    file: "/certificates/S_Santhosh-2_digital.png"
  }
];

// Pure Image 3D Parallax Tilt Card
const ParallaxImageCard = ({ cert, onSelect }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth 3D tilt calculation
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.28
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      className="parallax-img-card"
      onClick={() => onSelect(cert)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      whileHover={{ scale: 1.03 }}
      tabIndex="0"
      aria-label={`View ${cert.title}`}
    >
      {/* Glare Sheen Reflection */}
      <div
        className="parallax-img-glare"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.7) 0%, transparent 60%)`,
          opacity: glarePos.opacity
        }}
      />

      {/* Pure Certificate Image */}
      <img
        src={cert.file}
        alt={cert.title}
        className="parallax-cert-img"
        loading="lazy"
      />

      {/* Minimal Hover Overlay */}
      <div className="parallax-img-overlay">
        <span className="overlay-title">{cert.title}</span>
        <span className="overlay-action">
          <span>Click to Enlarge</span>
          <IconExternalLink size={14} />
        </span>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="certificates-section" id="certificates">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Credentials</span>
          <h2>Certificates</h2>
          <div className="underline"></div>
        </motion.div>

        {/* Pure Image Parallax Grid */}
        <div className="parallax-images-grid">
          {certificates.map((cert) => (
            <ParallaxImageCard
              key={cert.id}
              cert={cert}
              onSelect={(item) => setSelectedCert(item)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="cert-lightbox-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-lightbox-header">
                <span className="cert-lightbox-title">{selectedCert.title}</span>
                <button
                  className="cert-lightbox-close"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="cert-lightbox-image-wrap">
                <img
                  src={selectedCert.file}
                  alt={selectedCert.title}
                  className="cert-lightbox-img"
                />
              </div>

              <div className="cert-lightbox-footer">
                <a
                  href={selectedCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lightbox-open"
                >
                  <span>Open Full Image</span>
                  <IconExternalLink size={15} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
