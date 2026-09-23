"use client";
import React from "react";
import styles from "./contactInfo.module.css";
import dynamic from "next/dynamic";

const ElfsightWidget = dynamic(
  () => import("react-elfsight-widget").then((mod) => mod.ElfsightWidget),
  { ssr: false }
);

function ContactInfo() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="wrap">
        <div className={styles.grid}>
          <div data-reveal>
            <p className="eyebrow">Contact</p>
            <h2 className={styles.contactTitle}>
              Planning a group for next year? <em>Start the conversation now.</em>
            </h2>
            <p className="section-lede">
              School exchanges need six months or more to arrange. Tell us your
              dates, group size and what your students study, and we&rsquo;ll
              take it from there.
            </p>
          </div>

          <div className={styles.cards} data-reveal style={{ "--reveal-delay": "0.12s" }}>
            <a className={styles.card} href="tel:+6563421527">
              <span className={styles.cardLabel}>Office</span>
              <span className={styles.cardValue}>+65 6342 1527</span>
            </a>
            <a className={styles.card} href="mailto:homestay@singnet.com">
              <span className={styles.cardLabel}>Email</span>
              <span className={styles.cardValue}>homestay@singnet.com</span>
            </a>
            <div className={styles.card}>
              <span className={styles.cardLabel}>Find us</span>
              <span className={styles.address}>
                JustCo – Changi Airport Terminal 3 Coworking &amp; Office Space,
                65 Airport Blvd., #03-37 Terminal 3, Singapore 819663
              </span>
            </div>
          </div>
        </div>

        <div className={styles.widget}>
          <ElfsightWidget widgetId="0450dfe3-4235-4177-a2d0-bc862350342d" />
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
