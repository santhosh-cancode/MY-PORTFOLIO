import React from 'react';
import { motion } from 'framer-motion';
import { IconCalendar, IconMapPin } from './Icons';

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Adaikala Matha College",
    university: "Bharathidasan University",
    duration: "2024–2026",
    status: "Completed",
    description: "Advanced study of computer applications, software engineering principles, full-stack application development, database management systems, and modern computing architectures."
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Annai Vailankanni Arts and Science College",
    university: "Bharathidasan University",
    duration: "2020–2023",
    status: "Completed",
    description: "Core foundation in computer science, software programming, web development fundamentals, relational database systems, and object-oriented paradigms."
  }
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Academics</span>
          <h2>Education</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="simple-timeline">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              className="simple-timeline-item"
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
                    <h3 className="simple-timeline-title">{item.degree}</h3>
                    <div className="simple-timeline-subtitle">
                      <IconMapPin size={15} />
                      <span>{item.institution}</span>
                      {item.university && (
                        <span className="sub-text"> • {item.university}</span>
                      )}
                    </div>
                  </div>

                  <div className="simple-timeline-meta">
                    <span className="simple-date-pill">
                      <IconCalendar size={13} />
                      <span>{item.duration}</span>
                    </span>
                    <span className="simple-status-badge">{item.status}</span>
                  </div>
                </div>

                <p className="simple-timeline-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
