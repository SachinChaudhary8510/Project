import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";

const Footer = ({ data }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Left Side - Contact Info */}
        <div className={styles.contactSection}>
          <h3 className={styles.contactTitle}>Get in Touch</h3>
          <p>
            <a href={`tel:${data.phone}`}>{data.phone}</a>
          </p>
          <p>
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </p>
        </div>

        {/* Right Side - Social Icons */}
        <div className={styles.socialSection}>
          <h3 className={styles.contactTitle}>Connect With Me</h3>
          <div className={styles.socialIcons}>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={`mailto:${data.email}`}
              aria-label="Gmail"
            >
              <SiGmail />
            </a>
            {data.leetcode && (
              <a
                href={data.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>
            )}
            {data.instagram && (
              <a
                href={data.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>
          &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
