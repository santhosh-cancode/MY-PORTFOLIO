import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Freelance Software Developer",
      company: "Self-Employed",
      duration: "Present",
      description: "Currently actively working on freelance software projects. Developing custom web solutions and delivering high-quality live projects for various clients."
    },
    {
      id: 2,
      role: "Software Intern",
      company: "Zeno Hardware and Software Solution",
      location: "Thanjavur",
      duration: "2025 - 2026",
      description: "Worked as a Software Intern actively contributing to various company projects. Gained hands-on practical skills building real-world React JS and Machine Learning (ML) projects. Handled the creation of technical documents and learned how to effectively leverage AI in software development."
    },
    {
      id: 3,
      role: "Software Intern",
      company: "Vebbox Software Solution",
      location: "Thanjavur",
      duration: "2022 - 2023",
      description: "Started my journey in web development. Built a strong foundation in software practices, teamwork, and coding standards, while learning the core concepts of building web applications."
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Experience</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              className="timeline-item"
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-date">{exp.duration}</span>
                </div>
                <h4 className="company">{exp.company} {exp.location ? `- ${exp.location}` : ""}</h4>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
