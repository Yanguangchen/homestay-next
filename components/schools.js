"use client";
import React from "react";
import styles from "./schools.module.css";

const years = [
  {
    year: "2024",
    schools: [
      "Toin Gakuen High School",
      "Suwaseiryo High School",
      "Jishukan High School",
      "Hirosaki High School",
      "Matsuyama High School",
      "Takefu High School",
      "Miyazaki Ken High School",
      "Noda Gakuen High School",
      "Saitama Heisei Junior High School",
      "Takefu Higashi High School",
      "Mito Daiichi Junior High School",
      "Haguro High School",
      "Kogakuin University High School",
    ],
  },
  {
    year: "2023",
    schools: [
      "Toin Gakuen High School",
      "Kakogawa High School",
      "Hirosaki High School",
      "Takefu High School",
      "Fukuoka Ken Jinzai Ikusei",
      "Miyazaki Ken High School",
      "Toyonaka High School",
      "Eishin High School",
      "Fukui Koushi High School",
    ],
  },
];

function SchoolRoster() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="wrap">
        <div className={styles.head} data-reveal>
          <p className="eyebrow">Who has made the trip</p>
          <h2 className="section-title">More than 50 schools since 2015.</h2>
          <p className="section-lede">
            Most come from Japan, and many come back. Toin Gakuen, Hirosaki,
            Takefu and Miyazaki Ken returned in both 2023 and 2024.
          </p>
        </div>

        <div className={styles.years}>
          {years.map((y, i) => (
            <div
              key={y.year}
              className={styles.year}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.12}s` }}
            >
              <div className={styles.yearHead}>
                <span className={styles.yearNum}>{y.year}</span>
                <span className={styles.count}>{y.schools.length} schools</span>
              </div>
              <ul>
                {y.schools.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className={`${styles.year} ${styles.archive}`} data-reveal style={{ "--reveal-delay": "0.24s" }}>
            <div className={styles.yearHead}>
              <span className={styles.yearNum}>2015–22</span>
            </div>
            <p>
              Over 50 schools since 2015, including Kumamoto High School,
              Otemae High School and many more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SchoolRoster;
