// src/components/Resume.jsx
import React, { useState } from 'react';
import styles from './Resume.module.css';
import resumePDF from '../assets/resume.pdf'; // Ensure you have a PDF file in the assets folder
import commonStyles from './Section.module.css';

const Resume = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="resume" className={styles.resumeContainer}>
      <h2 className={commonStyles.sectionTitle}>My Resume</h2>
      <div className={styles.pdfViewer}>
        <iframe
          src={`${resumePDF}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
          title="Resume"
          style={{
            width: "100%",
            height: "80vh",
            border: "none",
            overflow: "hidden",
          }}
        />
      </div>
      <div className={styles.resumeActions}>
        <button onClick={toggleFullscreen} className={styles.actionButton}>
          {isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
        </button>
        <button onClick={() => window.open(resumePDF)} className={styles.actionButton}>
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Resume;
