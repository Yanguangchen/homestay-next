"use client";
import React from "react";
import styles from "./Accordion.module.css";
import AccordionItem from "./AccordionItem";

const ProgramsSection = () => {
  return (
    <section className={`section ${styles.programs}`}>
      <div className={`wrap ${styles.split}`}>
        <div className={styles.aside} data-reveal>
          <p className="eyebrow">The programmes</p>
          <h2 className="section-title">How an exchange actually works.</h2>
          <p className="section-lede">
            Every exchange starts with a local school, not with us. Once your
            place is confirmed, we build the living and learning around it.
          </p>
        </div>

        <div className={styles.list} data-reveal style={{ "--reveal-delay": "0.1s" }}>
          <AccordionItem index="01" title="About the exchange program" defaultOpen>
            <p className={styles.callout}>
              Students must first engage and secure a place with a local
              education institution. Our services and the exchange program begin
              after that.
            </p>
            <p>
              A program built on interaction with local people gives you
              something a hotel can&rsquo;t: everyday life in a different place.
              You experience local culture and traditions, take part in cultural
              diplomacy, build friendships, develop intercultural competence and
              practise a foreign language every day.
            </p>
            <p>
              You also pick up the local insight and advice that only residents
              have. The program is designed to strengthen your language skills
              and deepen your understanding of Singapore&rsquo;s cultures and
              traditions.
            </p>
            <p className={styles.note}>
              Please note: house rules such as curfews or limits on using
              certain facilities may apply, and a family home offers a different
              level of comfort from a hotel.
            </p>
          </AccordionItem>

          <AccordionItem index="02" title="School visit">
            <p>
              Two schools, two countries, one shared timetable. School visits
              help students understand each other&rsquo;s schools and countries,
              make friends, and discover the subjects, cultures, traditions and
              ways of life at each institution.
            </p>
            <div className={styles.timeBox}>
              <span className={styles.timeFigure}>6+ months</span>
              <p>
                A school exchange needs a lead time of six months or more. This
                gives us time to arrange the program and obtain the necessary
                approvals.
              </p>
            </div>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
