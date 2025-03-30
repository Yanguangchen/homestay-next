import React from "react";
import styles from "./contactInfo.module.css";

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
    </div>
  );
}

export default ContactInfo;
