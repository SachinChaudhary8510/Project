// src/components/Projects.jsx
import React from 'react';
import styles from './Projects.module.css';
import commonStyles from './Section.module.css';
import cardStyles from './Card.module.css';

const Projects = ({ data }) => {
  return (
    <section id="projects" className={commonStyles.section}>
      <h2 className={commonStyles.sectionTitle}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {data.map((project, index) => (
          <div key={index} className={`${cardStyles.card} ${styles.projectCard}`}>
            {project.screenshot && (
              <img src={project.screenshot} alt={`${project.name} Screenshot`} className={styles.projectScreenshot} />
            )}
            <h3 className={styles.projectName}>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
