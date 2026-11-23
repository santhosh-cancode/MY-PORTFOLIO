import React from 'react';
import { motion } from 'framer-motion';
import { IconCalendar } from './Icons';

const experiences = [
  {
    id: 1,
    role: "Software Development Intern",
    company: "ZENO Hardware and Software Solutions",
    duration: "2025–2026",
    technologies: [
      "Python",
      "Flask",
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "SQLite",
      "MongoDB"
    ],
    description: "Practical exposure to software development, frontend development, backend integration, machine learning model integration, debugging and testing."
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "Vebbox",
    duration: "2022–2023",
    technologies: [],
    description: "Web development internship with practical exposure to frontend technologies and engineering practices."
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Experience</span>
          <h2>Professional Experience</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="simple-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              className="simple-timeline-item"
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="simple-timeline-marker">
                <span className="timeline-circle"></span>
              </div>

              <div className="simple-timeline-content">
                <div className="simple-timeline-header">
                  <div>
                    <h3 className="simple-timeline-title">{exp.role}</h3>
                    <div className="simple-timeline-company">{exp.company}</div>
                  </div>

                  <span className="simple-date-pill">
                    <IconCalendar size={13} />
                    <span>{exp.duration}</span>
                  </span>
                </div>

                <p className="simple-timeline-desc">{exp.description}</p>

                {exp.technologies.length > 0 && (
                  <div className="simple-tech-row">
                    <span className="simple-tech-label">Tech:</span>
                    <span className="simple-tech-string">
                      {exp.technologies.join(" • ")}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
