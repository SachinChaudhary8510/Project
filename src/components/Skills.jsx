// src/components/Skills.jsx
import React from "react";
import styles from "./Skills.module.css";
import commonStyles from "./Section.module.css";
import cardStyles from "./Card.module.css";

const Skills = ({ data }) => {
  return (
    <div>
      <h2 className={commonStyles.sectionTitle}>My Skills</h2>
      <section id="skills" className={commonStyles.section}>
        <div className={styles.skillsGrid}>
          {data.map((skill, index) => (
            <div
              key={index}
              className={`${cardStyles.card} ${styles.skillCard}`}
            >
              <div className={styles.imageWrapper}>
                <img src={skill.image} alt={skill.name} className={styles.skillImage} />
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
