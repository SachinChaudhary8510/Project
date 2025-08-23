// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Using CSS Modules

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          My Portfolio
        </Link>
        <button className={styles.toggler} onClick={toggleMenu}>
          ☰
        </button>
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/skills" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Skills
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/education" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Education
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/projects" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/experience" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Experience
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/resume" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
