// src/components/Introduction.jsx
import React from 'react';
import styles from './Introduction.module.css';
import commonStyles from './Section.module.css'; // For general section layout

const Introduction = ({ data }) => {
  return (
    <section id="introduction" className={`${commonStyles.section} ${styles.introSection}`}>
      <div className={styles.introContent}>
        <div className={styles.imageContainer}>
          <img src={data.image} alt={data.name} className={styles.personImage} />
        </div>
        <div className={styles.summaryContainer}>
          <h1 className={styles.name}>{data.name}</h1>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.summary}>{data.summary}</p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
