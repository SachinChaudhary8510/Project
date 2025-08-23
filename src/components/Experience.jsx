// src/components/Experience.jsx
import React from 'react';
import styles from './Experience.module.css';
import commonStyles from './Section.module.css';
import cardStyles from './Card.module.css';

const Experience = ({ data }) => {
  return (
    <section id="experience" className={commonStyles.section}>
      <h2 className={commonStyles.sectionTitle}>Experience</h2>
      <div className={styles.experienceGrid}>
        {data.map((exp, index) => (
          <div key={index} className={`${cardStyles.card} ${styles.experienceCard}`}>
            <h3 className={styles.organizationName}>{exp.organization}</h3>
            <p className={styles.role}>{exp.role}</p>
            {exp.duration && <p className={styles.duration}>{exp.duration}</p>}
            <ul className={styles.responsibilitiesList}>
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
