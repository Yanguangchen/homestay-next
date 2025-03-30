import React from "react";
import styles from "./gridContainer.module.css";

function GridContainer() {
  const renderVideo = (src, isLazy = false) => (
    <div className={styles["grid-container"]}>
      <video
        src={src}
        className={styles["grid-video"]}
        alt="Placeholder Video"
        muted
        autoPlay
        playsInline
        loop
        loading={isLazy ? "lazy" : undefined}
      />
    </div>
  );

  return (
    <div className={styles["flex-wrapper"]}>
      <h1>Motto & Vision</h1>
      <div className={styles["grid-wrapper"]}>
        {renderVideo("Assets/GridAssets/Grid1.mp4")}
        {renderVideo("Assets/GridAssets/Grid2.mp4")}
      </div>
    </div>
  );
}

export default GridContainer;