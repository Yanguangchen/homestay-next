"use client";
import React from "react";
import styles from "./featurecards.module.css";

const features = [
  {
    title: "Reliable",
    line: "We plan the unglamorous parts.",
    description:
      "Twenty years of arrivals at Changi taught us where trips go wrong. We walk you through hotel nights, school registration and host matching before you board, so group leaders can focus on their students.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M6 30 L42 18 M14 28 l-4 -8 h4 l6 6 M28 22 l4 -12 h4 l-2 10" />
        <path d="M4 40 H44" />
      </svg>
    ),
  },
  {
    title: "Trusted",
    line: "Every door is checked first.",
    description:
      "We work only with MOE-registered schools and tuition centres, and every host family is visited and interviewed before a student ever arrives. And our local team keeps an emergency line open around the clock.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 22 L24 8 L40 22 V40 H8 Z" />
        <path d="M19 40 V29 h10 v11 M18 21 l4 4 l8 -8" />
      </svg>
    ),
  },
  {
    title: "Enriching",
    line: "Built around ordinary days.",
    description:
      "Kaya toast before class, traditional games at the void deck, SDG debates with local students. The programme follows how people here actually live, so what students learn sticks.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 42 V20 M24 20 C 14 20 10 12 10 6 C 18 6 24 12 24 20 Z M24 26 C 32 26 38 20 38 12 C 30 12 24 18 24 26 Z" />
      </svg>
    ),
  },
];

function FeatureCards() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="wrap">
        <div className={styles.head} data-reveal>
          <p className="eyebrow">Why schools come back</p>
          <h2 className="section-title">Three promises we&rsquo;ve kept since 2006.</h2>
        </div>

        <ol className={styles.grid}>
          {features.map((f, i) => (
            <li
              key={f.title}
              className={styles.card}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.12}s` }}
            >
              <div className={styles.top}>
                <span className={styles.num}>0{i + 1}</span>
                <span className={styles.icon}>{f.icon}</span>
              </div>
              <h3 className={styles.heading}>{f.title}</h3>
              <p className={styles.line}>{f.line}</p>
              <p className={styles.description}>{f.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default FeatureCards;
