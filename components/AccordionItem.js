"use client";
import React, { useState } from "react";
import styles from "./Accordion.module.css";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.accordionItem}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.accordionButton}
          aria-expanded={isOpen}
        >
          <span className={styles.accordionTitle}>{title}</span>
          <span
            className={`${styles.accordionIcon} ${isOpen ? styles.open : ""}`}
          >
            +
          </span>
        </button>

        <div
          className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
        >
          <div className={styles.accordionInner}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
