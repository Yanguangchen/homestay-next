"use client";
import React from "react";
import Link from "next/link";
import styles from "./socials.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerLogo}>sglearninghub</h3>
          <p className={styles.footerDesc}>
            Empowering students through immersive cultural and educational experiences in Singapore.
          </p>
          <div className={styles.wwBadge}>
            <a href="https://webwizardsg.com/" target="_blank" rel="noopener noreferrer">
              <img src="/transparent.png" alt="Web Wizards" className={styles.wwLogo} />
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerHeader}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/StudyTours">Study Tours</Link></li>
            <li><Link href="/Blogs">Blogs</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerHeader}>Contact Us</h4>
          <p className={styles.footerContact}>
            65 Airport Blvd., #03-37 Terminal 3<br />
            Singapore 819663
          </p>
          <p className={styles.footerContact}>
            <strong>Office:</strong> +65 63421527<br />
            <strong>Email:</strong> homestay@singnet.com
          </p>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>Developed by Chen Yanguang from Web Wizards</p>
        <p className={styles.techStack}>Powered by React & Next.js • Hosted on Vercel</p>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} sglearninghub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
