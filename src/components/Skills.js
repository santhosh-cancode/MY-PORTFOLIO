import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IconHTML5,
  IconCSS3,
  IconJavaScript,
  IconReact,
  IconPython,
  IconPHP,
  IconSQLite,
  IconMongoDB,
  IconMySQL,
  IconAWS,
  IconLinux,
  IconGit,
  IconGitHub,
  IconVSCode,
  IconAntigravity
} from './Icons';

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <IconHTML5 size={38} />, color: "#E34F26", level: "Semantic Markup & Standards" },
      { name: "CSS3", icon: <IconCSS3 size={38} />, color: "#1572B6", level: "Responsive Layouts & Flexbox/Grid" },
      { name: "JavaScript", icon: <IconJavaScript size={38} />, color: "#F7DF1E", level: "Modern ES6+ & Async Programming" },
      { name: "React.js", icon: <IconReact size={38} />, color: "#087EA4", level: "Components, Hooks & SPA Architecture" },
    ]
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: <IconPython size={38} />, color: "#3776AB", level: "Backend Services & ML Integration" },
      { name: "PHP", icon: <IconPHP size={38} />, color: "#777BB4", level: "Server-side Web Development" },
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "SQLite", icon: <IconSQLite size={38} />, color: "#00A3E0", level: "Relational Embedded Storage" },
      { name: "MongoDB", icon: <IconMongoDB size={38} />, color: "#13AA52", level: "NoSQL Document Storage" },
      { name: "MySQL", icon: <IconMySQL size={38} />, color: "#4479A1", level: "Relational Queries & Tables" },
    ]
  },
  {
    category: "Cloud and Operating Systems",
    skills: [
      { name: "AWS", icon: <IconAWS size={38} />, color: "#FF9900", level: "Cloud Hosting & Deployment" },
      { name: "Linux", icon: <IconLinux size={38} />, color: "#222222", level: "System Administration & CLI" },
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <IconGit size={38} />, color: "#F05032", level: "Version Control & Branching" },
      { name: "GitHub", icon: <IconGitHub size={38} />, color: "#181717", level: "Repositories & Collaboration" },
      { name: "VS Code", icon: <IconVSCode size={38} />, color: "#007ACC", level: "Code Editor & Extensions" },
      { name: "Antigravity", icon: <IconAntigravity size={38} />, color: "#4285F4", level: "Agentic AI Developer Platform" },
    ]
  }
];

const Skills = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Competencies</span>
          <h2>Technical Skills</h2>
          <div className="underline"></div>
          <p className="section-description">
            Technologies, programming languages, databases, cloud tools, and platforms I work with.
          </p>
        </motion.div>

        <div className="skills-simple-list">
          {skillCategories.map((group) => (
            <div key={group.category} className="skill-simple-group">
              <h3 className="simple-group-title">{group.category}</h3>
              <div className="skills-flat-grid">
                {group.skills.map((skill) => {
                  const isHovered = activeTooltip === skill.name;
                  return (
                    <div
                      key={skill.name}
                      className="skill-flat-item"
                      onMouseEnter={() => setActiveTooltip(skill.name)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      tabIndex="0"
                      aria-label={skill.name}
                    >
                      <div className="skill-flat-icon">
                        {skill.icon}
                      </div>
                      <span className="skill-flat-name">{skill.name}</span>

                      {/* Tooltip on hover */}
                      {isHovered && (
                        <div className="skill-tooltip" role="tooltip">
                          <div className="tooltip-title">{skill.name}</div>
                          <div className="tooltip-info">{skill.level}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
