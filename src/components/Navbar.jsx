// src/components/Navbar.jsx
import React, { useState } from 'react';
// Removed Link from react-router-dom as we are using hash links
import styles from './Navbar.module.css'; // Using CSS Modules

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Changed Link to a tag for home */}
        <a href="#introduction" className={styles.brand} onClick={() => setIsOpen(false)}>
          My Portfolio
        </a>
        <button className={styles.toggler} onClick={toggleMenu}>
          ☰
        </button>
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              {/* Changed Link to a tag with hash href */}
              <a href="#introduction" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              {/* Changed Link to a tag with hash href */}
              <a href="#skills" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Skills
              </a>
            </li>
            <li className={styles.navItem}>
              {/* Changed Link to a tag with hash href */}
              <a href="#education" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Education
              </a>
            </li>
            <li className={styles.navItem}>
              {/* Changed Link to a tag with hash href */}
              <a href="#projects" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li className={styles.navItem}>
              {/* Changed Link to a tag with hash href */}
              <a href="#experience" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Experience
              </a>
            </li>
            <li className={styles.navItem}>
              {/* Changed Link to a tag with hash href */}
              <a href="#resume" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
