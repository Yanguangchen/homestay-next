"use client";
import React, { useEffect, useState } from "react";
import styles from "./splice.module.css";
import Link from "next/link";

function HeroSection() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.heroContainer}>
      {/* Parallax Background Elements (Dreamy Bubbles) */}
      <div 
        className={styles.parallaxBlob1}
        style={{ 
          transform: `translate(${offset.x * -1}px, ${offset.y * -1}px)` 
        }}
      ></div>
      <div 
        className={styles.parallaxBlob2}
        style={{ 
          transform: `translate(${offset.x * 1.5}px, ${offset.y * 1.5}px)` 
        }}
      ></div>
      <div 
        className={styles.parallaxBlob3}
        style={{ 
          transform: `translate(${offset.x * -0.8}px, ${offset.y * 1.2}px)` 
        }}
      ></div>
      <div 
        className={styles.parallaxBlob4}
        style={{ 
          transform: `translate(${offset.x * 1.2}px, ${offset.y * -0.5}px)` 
        }}
      ></div>

      <div className={styles.heroContent}>
        <div 
          className={styles.glassCard}
          style={{ 
            transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)` 
          }}
        >
          <h1 className={styles.heroTitle}>
            Experience <br />
            <span>Singapore</span> <br />
            Like Never Before
          </h1>
          <p className={styles.heroSubtitle}>
            Immerse yourself in culture, education, and life-long friendships through our curated homestay and study tour programs.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/StudyTours" className={styles.primaryBtn}>
              Explore Tours
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <p>Scroll to discover</p>
      </div>
    </div>
  );
}

export default HeroSection;
