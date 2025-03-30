// src/components/FeatureCards.jsx
"use client";
import React from "react";
import styles from "./featurecards.module.css"; // Make sure file is named feature.module.css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faShieldAlt, faBolt } from "@fortawesome/free-solid-svg-icons";

function FeatureCards() {
  const features = [
    {
      icon: faThumbsUp,
      title: "Reliable",
      description: "Count on us to provide for you the best experience and support throughout your journey.",
    },
    {
      icon: faShieldAlt,
      title: "Trusted",
      description: "Our reputation is built on trust and integrity, we have earned the confidence of our clients over decades of our unwavering commitment to excellence.",
    },
    {
      icon: faBolt,
      title: "Enriching",
      description: "Our enriching programs are designed to provide you with the best experience and support throughout your journey.",
    },
  ];

  return (
    <div className={styles['feature-cards-container']}>
      <div className={styles['feature-grid']}>
        {features.map((feature, index) => (
          <div className={styles['feature-card']} key={index}>
            <FontAwesomeIcon
              icon={feature.icon}
              className={styles['card-icon']}
              aria-label={feature.title}
            />
            <h2 className={styles['card-heading']}>{feature.title}</h2>
            <p className={styles['card-description']}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCards;