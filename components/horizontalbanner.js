import React from "react";
import styles from "./horizontalbanner.module.css";

const rows = [
  {
    video: "/Assets/HorizontalVideo.mp4",
    label: "Program request",
    title: "Visits follow what you study.",
    body: "To request this program, a candidate must already have studied the field in their home country. We look at the depth of that knowledge first, then take the request to the right centre. So nursing students visit hospitals, and business students go behind the scenes at mega-supermarkets.",
  },
  {
    video: "/Assets/HorizontalVideo2.mp4",
    label: "Technical visits & internships",
    title: "See where Singapore works.",
    body: "We host groups on technical visits to hospitals, kindergartens, senior citizens' homes, mega-supermarkets, cooking schools and other places of interest, so students meet the people doing the job, not just the brochure.",
  },
];

function HorizontalBanner() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="wrap">
        <div className={styles.head} data-reveal>
          <p className="eyebrow">Beyond the classroom</p>
          <h2 className="section-title">Wards, kitchens and kindergartens.</h2>
        </div>

        {rows.map((row, i) => (
          <article
            key={row.label}
            className={`${styles.row} ${i % 2 ? styles.flip : ""}`}
            data-reveal
          >
            <div className={styles.media}>
              <video
                className={styles.video}
                autoPlay
                muted
                playsInline
                loop
                preload="metadata"
              >
                <source src={row.video} type="video/mp4" />
              </video>
              <span className={styles.badge}>0{i + 1}</span>
            </div>
            <div className={styles.text}>
              <p className={styles.label}>{row.label}</p>
              <h3 className={styles.title}>{row.title}</h3>
              <p className={styles.body}>{row.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HorizontalBanner;
