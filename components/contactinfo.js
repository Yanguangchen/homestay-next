"use client";
import React from "react";
import styles from "./contactInfo.module.css";
import { ElfsightWidget } from "react-elfsight-widget";

function ContactInfo() {
  return (
    <div className={`${styles.containerWrapper} ${styles.contact}`}>
      <h1 className={styles.contactTitle}>Contact Information</h1>

      <div className={`${styles.bodyStyle} ${styles.contactBody}`}>
        {/* Left Column: Contact Details */}
        <div className={styles.subContent}>
          <p className={styles.pStyle}>
            <strong>Office Number:</strong> <br></br>
            +65 63421527
            <br></br>
            homestay@singnet.com
          </p>
        </div>

        {/* Right Column: Service Hours */}
        <div className={styles.subContent}>
          <p className={styles.openingTime}>
            JustCo – Changi Airport Terminal 3 Coworking & Office Space 65
            Airport Blvd., #03-37 Terminal 3, Singapore 819663
          </p>
        </div>
      </div>
      
      <div style={{ marginTop: "40px", width: "100%" }}>
        <ElfsightWidget widgetId="0450dfe3-4235-4177-a2d0-bc862350342d" />
      </div>
    </div>
  );
}

export default ContactInfo;
