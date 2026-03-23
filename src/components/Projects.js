import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const liveProjects = [
        {
            id: 1,
            title: "WaffleSquad",
            type: "Successfully Live Real-time Project",
            description: "Live business website with modern UI, animations and custom domain. Demonstrates my capability to deliver live, production-ready applications for clients.",
            link: "https://wafflesquad.in",
            tech: ["React", "CSS", "Frontend", "Live"]
        }
    ];

    const internshipProjects = [
        {
            id: 3,
            title: "Liver Disease Prediction (LIVER GUARD)",
            type: "Machine Learning Project",
            description: "A specialized project focused on predicting liver diseases using ML algorithms. Demonstrates practical application of data science and predictive modeling.",
            link: "https://github.com/santhosh-cancode/LIVER-GAURD",
            tech: ["Machine Learning", "Python", "Data Science"]
        }
    ];

    const renderProjectCard = (project, index) => (
        <motion.div
            className="project-card glass-panel"
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
        >
            <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                    {project.tech.map((tag, i) => (
                        <span key={i} className="tech-tag">{tag}</span>
                    ))}
                </div>

                {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        {project.link.includes('github.com') ? 'View on GitHub →' : 'Visit Live Project →'}
                    </a>
                )}
            </div>
        </motion.div>
    );

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                {/* Successfully Live Projects Section */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Live Projects</h2>
                    <div className="underline" style={{ marginBottom: "2rem" }}></div>
                    <p style={{ color: "var(--text-muted)", marginBottom: "3rem" }}>
                        Successfully deployed, real-time client applications.
                    </p>
                </motion.div>

                <div className="projects-grid" style={{ marginBottom: "6rem" }}>
                    {liveProjects.map((project, index) => renderProjectCard(project, index))}
                </div>

                {/* Internship Works Section */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Internship Works</h2>
                    <div className="underline" style={{ marginBottom: "2rem" }}></div>
                </motion.div>

                <div className="projects-grid">
                    {internshipProjects.map((project, index) => renderProjectCard(project, index))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
