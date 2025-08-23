// src/components/Education.jsx
import React from 'react';
import styles from './Education.module.css';
import commonStyles from './Section.module.css';
import cardStyles from './Card.module.css';

const Education = ({ data }) => {
  return (
    <section id="education" className={commonStyles.section}>
      <h2 className={commonStyles.sectionTitle}>Education</h2>
      <div className={styles.educationGrid}>
        {data.map((edu, index) => (
          <div key={index} className={`${cardStyles.card} ${styles.educationCard}`}>
            <div className={styles.eduLeft}>
              {edu.logo && <img src={edu.logo} alt={`${edu.institution} Logo`} className={styles.institutionLogo} />}
              <h3 className={styles.institutionName}>{edu.institution}</h3>
              <p className={styles.courseName}>{edu.course}</p>
              <p className={styles.specialization}>{edu.specialization}</p>
              <p className={styles.grade}>{edu.cgpa || edu.percentage}</p>
            </div>
            <div className={styles.eduRight}>
              <p className={styles.location}>{edu.location}</p>
              <p className={styles.year}>{edu.passout}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
