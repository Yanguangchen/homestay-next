import React from "react";
import styles from "./splice.module.css";

function SpliceElement() {
  return (
    <div>
      <div className={styles.containerWrapper}>
        <div className={styles.splineContainer}>
          <div className={styles.darkmodeContainer}>
            {/* Dark mode logic or content if needed */}
          </div>

          <spline-viewer
            hint
            loading-anim-type="spinner-big-dark"
            url="https://prod.spline.design/y06Rst19u5PV2s1N/scene.splinecode"
          ></spline-viewer>
        </div>
      </div>
    </div>
  );
}
export default SpliceElement;
