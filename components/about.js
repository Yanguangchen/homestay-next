"use client";
import React, { useState } from "react";
import styles from "./Accordion.module.css"; // <-- Import the CSS module

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
          {/* Apply `.open` class conditionally for rotation or styling */}
          <span
            className={`${styles.accordionIcon} ${isOpen ? styles.open : ""}`}
          >
            +
          </span>
        </button>

        {/* Collapsible content */}
        <div
          className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
        >
          <div className={styles.accordionInner}>{children}</div>
        </div>
      </div>
    </div>
  );
};

const EmploymentAgencySection = () => {
  return (
    <div className={styles.employmentAgencySection}>
      <div>
        <AccordionItem title="About the exchange program">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Our experience:
          </h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
              Students are to engage and seek local education instutions first,
              before our services and the exchange program commence
            </h4>
            <p>
              Participating in a program that emphasizes interaction with local
              people offers numerous benefits, such as exposure to everyday life
              in a different location. <br></br> <br></br>It provides
              opportunities to experience local culture and traditions, engage
              in cultural diplomacy, build friendships, develop intercultural
              competence, and practice foreign languages. <br></br> <br></br>
              Additionally, you can gain valuable local insights and advice.
              This program is designed to enhance participants' language skills
              and deepen their understanding of the native culture and
              traditions. Please note that there may be specific rules and
              restrictions, such as curfews or limitations on facility usage.{" "}
              <br></br>
              <br></br>Unlike hotels or motels, the accommodations provided in
              this program may not offer the same level of comfort, amenities,
              or privacy.<br></br>
              <br></br> These are important considerations when choosing an
              exchange program that involves direct interaction with the local
              community.<br></br>
              <br></br> Participants will stay at locations such as host
              families, educational institutions, or tuition centers that are
              registered with the Ministry of Education. Upon requesting an
              exchange program that involves interaction with local people, we
              will discuss your specific interests, whether cultural,
              linguistic, or otherwise, to tailor the experience to your
              preferences.
            </p>
          </ul>
        </AccordionItem>

        <AccordionItem title="School Visit">
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <p>
              This program fosters a deeper understanding of each other's
              schools and countries, promoting friendships and introducing the
              diverse disciplines, cultures, traditions, and ways of life at
              each institution. <br></br> <br></br>{" "}
              <b>Request Processing time</b> <br></br> Please note that
              requesting a school exchange program requires a waiting period of
              six months or more.
              <br></br>
              <br></br>
              This is necessary to allow time for arranging the program and
              obtaining various approvals from the respective education
              departments. Approval is subject to the availability and timing
              within the local school schedule. The names of schools that have
              previously participated in exchange programs or local interactions
              will also be considered.
            </p>
          </ul>
        </AccordionItem>

        <AccordionItem title="School List">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            2015 & 2016
          </h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>Kawaharara Specialist School</li>
            <li>Toyonaka High School</li>
            <li>Kasugai Komaki</li>
          </ul>

          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>2017</h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>Kumamoto High School</li>
            <li>Niigata Niitsu High School</li>
            <li>Kameda College of Health Sciences</li>
            <li>Toso Chiku High School</li>
            <li>Kaita High School</li>
            <li>Niigata Konan High School</li>
            <li>Coast Guard Group</li>
            <li>Hirosaki High School</li>
            <li>Kagamino High School</li>
            <li>Keikei High School</li>
            <li>Niigata Seiryo High School</li>
            <li>Yokohama Sogakkan Gakuen Koko (Sekolah Indonesia)</li>
            <li>Tomeikan High School</li>
            <li>Matsue High School</li>
            <li>Kagoshima Iryo</li>
            <li>Kamogyosei Koko</li>
          </ul>

          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>2018</h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>IAI High School</li>
            <li>Otemae High School</li>
            <li>Shokei Junior High School</li>
            <li>Kameda Medical College</li>
            <li>Naha Kokusai High School</li>
            <li>Saiyko High School</li>
            <li>Toyonaka High School</li>
          </ul>

          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>2019</h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>Otemae High School</li>
            <li>Hitachi Daiichi High School</li>
            <li>Naha Kokusai High School</li>
            <li>Junshin High School</li>
            <li>Kameda Medical College</li>
            <li>Katsuyama High School</li>
            <li>Setano Town High School</li>
            <li>Wayo Kudan Middle School</li>
            <li>Ehimekenritsu Matsuyama Nishi Junior High School</li>
            <li>Okayama High School</li>
            <li>Hirosaki High School</li>
            <li>Niigata Maki High School</li>
            <li>Aguichi High School</li>
            <li>Manno Cho High School</li>
            <li>Kagamino High School</li>
            <li>Seki High School</li>
            <li>Nishio High School</li>
            <li>Sakuragaoka High School</li>
            <li>Tokai High School</li>
            <li>Munakato High School</li>
            <li>Gunma High School</li>
            <li>Okidozen High School</li>
            <li>Sendai Nika High School</li>
            <li>Niigata Seiryo High School</li>
            <li>Murakami High School</li>
            <li>Wakasa High School</li>
            <li>Kamogyosei High School</li>
          </ul>

          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>2023</h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>Toin Gakuen High School</li>
            <li>Kakogawa High School</li>
            <li>Hirosaki High School</li>
            <li>Takefu High School</li>
            <li>Fukuoka Ken Jinzai Ikusei</li>
            <li>Miyazaki Ken High School</li>
            <li>Toyonaka High School</li>
            <li>Eishin High School</li>
            <li>Fukui Koushi High School</li>
          </ul>

          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>2024</h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>Toin Gakuen High School</li>
            <li>Suwaseiryo High School</li>
            <li>Jishukan High School</li>
            <li>Hirosaki High School</li>
            <li>Matsuyama High School</li>
            <li>Takefu High School</li>
            <li>Miyazaki Ken High School</li>
            <li>Noda Gakuen High School</li>
            <li>Saitama Heisei Junior High School</li>
            <li>Takefu Higashi High School</li>
            <li>Mito Daiichi Junior High School</li>
            <li>Haguro High School</li>
            <li>Kogakuin University High School</li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
};

export default EmploymentAgencySection;
