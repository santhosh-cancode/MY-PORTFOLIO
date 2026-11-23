import React from 'react';
import { motion } from 'framer-motion';
import {
  IconExternalLink,
  IconGitHub,
  IconReact,
  IconHTML5,
  IconCSS3,
  IconJavaScript,
  IconPython,
  IconPHP,
  IconMySQL,
  IconSQLite
} from './Icons';

const liveProjects = [
  {
    id: 'dtcp',
    title: "Trichy DTCP Plots",
    badge: "Live Website",
    url: "https://trichydtcpplots.com",
    description: "A real-estate website showcasing DTCP-approved plots, property locations and project information.",
    technologies: [
      { name: "React.js", icon: <IconReact size={16} /> },
      { name: "HTML", icon: <IconHTML5 size={16} /> },
      { name: "CSS", icon: <IconCSS3 size={16} /> },
      { name: "JavaScript", icon: <IconJavaScript size={16} /> },
    ]
  },
  {
    id: 'waffle',
    title: "Waffle Squad",
    badge: "Live Website",
    url: "https://waffle-squad.netlify.app/",
    description: "A responsive food business website featuring waffle products, branch information and online ordering links.",
    technologies: [
      { name: "React.js", icon: <IconReact size={16} /> },
      { name: "Framer Motion", icon: <IconJavaScript size={16} /> },
      { name: "React Icons", icon: <IconReact size={16} /> },
    ]
  }
];

const otherProjects = [
  {
    id: 1,
    title: "Plant Disease Prediction",
    category: "Machine Learning",
    description: "Deep learning system for classifying crop diseases from leaf images to aid timely treatment.",
    technologies: [{ name: "Python", icon: <IconPython size={15} /> }, { name: "Machine Learning" }]
  },
  {
    id: 2,
    title: "Kidney Disease Prediction",
    category: "Machine Learning",
    description: "Classification model utilizing clinical biomarkers for early-stage chronic kidney disease detection.",
    technologies: [{ name: "Python", icon: <IconPython size={15} /> }, { name: "Machine Learning" }]
  },
  {
    id: 3,
    title: "Liver Disease Prediction (LIVER GUARD)",
    category: "Machine Learning",
    description: "Predictive modeling application forecasting liver disease risk from clinical health records.",
    technologies: [{ name: "Python", icon: <IconPython size={15} /> }, { name: "Machine Learning" }],
    github: "https://github.com/santhosh-cancode/LIVER-GAURD"
  },
  {
    id: 4,
    title: "College Management System",
    category: "React.js",
    description: "Web application for administrative operations, academic schedules, and student enrollment records.",
    technologies: [{ name: "React.js", icon: <IconReact size={15} /> }, { name: "JavaScript", icon: <IconJavaScript size={15} /> }]
  },
  {
    id: 5,
    title: "College Management System",
    category: "PHP & MySQL",
    description: "Institutional portal with role-based access, attendance tracking, and database records.",
    technologies: [{ name: "PHP", icon: <IconPHP size={15} /> }, { name: "MySQL", icon: <IconMySQL size={15} /> }]
  },
  {
    id: 6,
    title: "Student Management System",
    category: "React.js",
    description: "Dashboard for student profiles, course registrations, and grade performance tracking.",
    technologies: [{ name: "React.js", icon: <IconReact size={15} /> }, { name: "JavaScript", icon: <IconJavaScript size={15} /> }]
  },
  {
    id: 7,
    title: "IoT-based Software Projects",
    category: "IoT & Systems",
    description: "Sensor telemetry software connecting microcontroller devices with real-time dashboards.",
    technologies: [{ name: "Python", icon: <IconPython size={15} /> }, { name: "SQLite", icon: <IconSQLite size={15} /> }]
  },
  {
    id: 8,
    title: "Static Website Development",
    category: "Web Engineering",
    description: "Fast, responsive promotional websites developed for local businesses and organizations.",
    technologies: [{ name: "HTML5", icon: <IconHTML5 size={15} /> }, { name: "CSS3", icon: <IconCSS3 size={15} /> }, { name: "JavaScript", icon: <IconJavaScript size={15} /> }]
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Live Projects Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Portfolio</span>
          <h2>Live Projects</h2>
          <div className="underline"></div>
          <p className="section-description">
            Commercial websites deployed on live custom domains.
          </p>
        </motion.div>

        {/* Live Projects Showcase */}
        <div className="simple-live-projects-grid">
          {liveProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="simple-live-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="live-card-top">
                <span className="simple-live-badge">● {project.badge}</span>
                <span className="live-domain-text">{project.url.replace('https://', '').replace(/\/$/, '')}</span>
              </div>

              <h3 className="simple-project-title">{project.title}</h3>
              <p className="simple-project-desc">{project.description}</p>

              <div className="simple-tech-tags">
                {project.technologies.map((t, idx) => (
                  <span key={idx} className="simple-tag">
                    {t.icon}
                    <span>{t.name}</span>
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="simple-live-link"
              >
                <span>Visit Website</span>
                <IconExternalLink size={15} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Internship & Other Projects */}
        <motion.div
          className="section-header"
          style={{ marginTop: "4.5rem", marginBottom: "2.5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Works</span>
          <h2>Internship & Other Projects</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="simple-other-projects-grid">
          {otherProjects.map((item, index) => (
            <motion.div
              key={item.id}
              className="simple-other-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="other-card-header">
                <span className="other-category-label">{item.category}</span>
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="other-github-icon-link"
                    title="View GitHub"
                    aria-label="View on GitHub"
                  >
                    <IconGitHub size={18} />
                  </a>
                )}
              </div>

              <h4 className="other-card-title">{item.title}</h4>
              <p className="other-card-desc">{item.description}</p>

              <div className="other-tech-list">
                {item.technologies.map((t, i) => (
                  <span key={i} className="other-tech-item">
                    {t.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
