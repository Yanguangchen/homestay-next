"use client";
import React, { useState } from "react";
import styles from "./Accordion.module.css";

const AccordionItem = ({ title, index, defaultOpen = false, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.accordionContainer}>
      <div className={`${styles.accordionItem} ${isOpen ? styles.itemOpen : ""}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.accordionButton}
          aria-expanded={isOpen}
        >
          {index && <span className={styles.accordionIndex}>{index}</span>}
          <span className={styles.accordionTitle}>{title}</span>
          <span
            className={`${styles.accordionIcon} ${isOpen ? styles.open : ""}`}
            aria-hidden="true"
          />
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
