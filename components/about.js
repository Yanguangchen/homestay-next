"use client";
import React from "react";
import styles from "./Accordion.module.css";
import AccordionItem from "./AccordionItem";

const EmploymentAgencySection = () => {
  return (
    <div className={styles.employmentAgencySection}>
      <AccordionItem title="About the exchange program">
        <h4 style={{ fontWeight: "700", marginBottom: "1rem", color: "#1e293b" }}>
          Students are to engage and seek local education institutions first,
          before our services and the exchange program commence.
        </h4>
        <p>
          Participating in a program that emphasizes interaction with local
          people offers numerous benefits, such as exposure to everyday life
          in a different location.
        </p>
        <p>
          It provides opportunities to experience local culture and traditions, 
          engage in cultural diplomacy, build friendships, develop intercultural
          competence, and practice foreign languages.
        </p>
        <p>
          Additionally, you can gain valuable local insights and advice.
          This program is designed to enhance participants' language skills
          and deepen their understanding of the native culture and
          traditions.
        </p>
        <p style={{ fontStyle: "italic", fontSize: "0.9rem" }}>
          Note: Rules and restrictions, such as curfews or limitations on facility 
          usage, may apply. Accommodations may offer different levels of comfort 
          compared to hotels.
        </p>
      </AccordionItem>

      <AccordionItem title="School Visit">
        <p>
          This program fosters a deeper understanding of each other's
          schools and countries, promoting friendships and introducing the
          diverse disciplines, cultures, traditions, and ways of life at
          each institution.
        </p>
        <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(95, 6, 226, 0.05)", borderRadius: "10px" }}>
          <h4 style={{ fontWeight: "700", marginBottom: "0.5rem", color: "#5f06e2" }}>
            Request Processing Time
          </h4>
          <p style={{ margin: 0 }}>
            Please note that requesting a school exchange program requires a waiting period of
            six months or more. This allows time for arranging the program and
            obtaining necessary approvals.
          </p>
        </div>
      </AccordionItem>

      <AccordionItem title="School List">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          <div>
            <h4 style={{ fontWeight: "700", color: "#1e293b" }}>2024</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
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
          </div>
          <div>
            <h4 style={{ fontWeight: "700", color: "#1e293b" }}>2023</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
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
          </div>
          <div>
            <h4 style={{ fontWeight: "700", color: "#1e293b" }}>Archive</h4>
            <p style={{ fontSize: "0.9rem" }}>Over 50+ schools since 2015, including Kumamoto High School, Otemae High School, and many more.</p>
          </div>
        </div>
      </AccordionItem>
    </div>
  );
};

export default EmploymentAgencySection;
