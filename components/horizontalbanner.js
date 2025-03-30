import React from "react";
// Updated import to the CSS module
import styles from "./horizontalbanner.module.css";

function HorizontalBanner() {
  return (
    <div className={styles.totalContainerClass}>
      <div className={styles.flexWrapper}>
        <div className={styles.gridContainer}>
          <div className={styles.container1}>
            <video
              className={`${styles.videoStyle} ${styles.horizontalVideo}`}
              loading="lazy"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src="./Assets/HorizontalVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.container2}>
            <p
              className={`
                ${styles.textAlignLeft2} 
                ${styles.textContent}
              `}
            >
              <b>Program request</b> <br></br>
              To request for this program, the candidate must have studied in
              the field in their respective host country We then proceed based
              on their depth of knowledge, and we would then proceed to process
              their request to the respective centers for example: only nursing
              students can have technical visits to hospitls and only business
              students can have technical visits to mega supermarkerts
            </p>
          </div>
        </div>
      </div>
      <div className={styles.flexWrapper}>
        <div className={styles.gridContainer2}>
          <div className={styles.container2}>
            <p
              className={`
                ${styles.textAlignLeft3} 
                ${styles.textContent}
              `}
            >
              <b>Technical Visit & Internships</b> <br></br>
              We hosts many groups for technical visits to hospitals,
              kindergartens, Senior Citizen Homes, mega supermarkerts, cooking
              schools and other places of interest{" "}
            </p>
          </div>

          <div className={styles.container1}>
            <video
              className={`${styles.videoStyle} ${styles.horizontalVideo}`}
              autoPlay
              muted
              loading="lazy"
              playsInline
              loop
            >
              <source src="./Assets/HorizontalVideo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalBanner;
