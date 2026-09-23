"use client";
import React from "react";
import Link from "next/link";
import styles from "./socials.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={`wrap ${styles.cta}`}>
        <p className={styles.ctaLine}>
          Learning through <em>experience.</em>
        </p>
        <Link href="/contact" className={styles.ctaBtn}>
          Start planning <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className={`wrap ${styles.footerContent}`}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerLogo}>sglearninghub</h3>
          <p className={styles.footerDesc}>
            Homestays, study tours and school exchanges in Singapore since 2006.
            Run from an office at Changi Airport Terminal 3.
          </p>
          <div className={styles.wwBadge}>
            <a href="https://webwizardsg.com/" target="_blank" rel="noopener noreferrer">
              <img src="/transparent.png" alt="Web Wizards" className={styles.wwLogo} />
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerHeader}>Explore</h4>
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
          <h4 className={styles.footerHeader}>Contact</h4>
          <p className={styles.footerContact}>
            65 Airport Blvd., #03-37 Terminal 3<br />
            Singapore 819663
          </p>
          <p className={styles.footerContact}>
            <a href="tel:+6563421527">+65 6342 1527</a>
            <br />
            <a href="mailto:homestay@singnet.com">homestay@singnet.com</a>
          </p>
        </div>
      </div>

      <div className={`wrap ${styles.footerBottom}`}>
        <p>Developed by Chen Yanguang from Web Wizards</p>
        <p className={styles.techStack}>Powered by React &amp; Next.js • Hosted on Vercel</p>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} sglearninghub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
