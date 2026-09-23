import React from "react";
import AccordionItem from "./AccordionItem";
import Banner from "./banner";
import styles from "./listings.module.css";

const tour1 = [
  ["Course objective, ice-breaker, Bicentennial Singapore...", "Get to know host country and expressing spontaneously"],
  ["Singaporean Dessert", "Verbalizing Food"],
  ["Critical Elements of Speech Delivery", "The Finer Points"],
  ["Games We Play", "Traditional Games I"],
  ["Fillers and WSJF", "English with Confidence"],
  ["Practice, Practice, Practice", "Fluency in English I"],
  ["Deciding Theme/ Topic for Presentation", ""],
  ["My Singapore Heartland Experience", "Fluency in English II – sharing my experience"],
  ["Games We Play", "Traditional Games II"],
  ["Secrets to Effective Storytelling", "Elements of a Captivating Story"],
  ["Mental Tricks Before a Speech", "Calming the Nerves"],
  ["Vlogging for Beginners", "Telling My Story I"],
  ["Vlogging", "Telling My Story II"],
  ["Preparation for Presentation", ""],
  ["English class Final discussion and preparation", ""],
  ["BREAK (canteen)", ""],
  ["Day 4 Presentation, Graduation & Certification Ceremony...", ""],
];

// `showNotices` repeats the two arrival notices; the homepage already shows them at the top.
const Listings = ({ showNotices = true }) => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="wrap">
        <div className={styles.head} data-reveal>
          <div>
            <p className="eyebrow">Study tours</p>
            <h2 className="section-title">Three tours, one city as the textbook.</h2>
          </div>
          <p className={styles.updated}>Updated 25.08.2024</p>
        </div>

        {showNotices && (
          <div className={styles.notices}>
            <Banner />
          </div>
        )}

        <div className={styles.tours} data-reveal>
          <AccordionItem index="01" title="Articulating & presentation skills in English">
            <div className={styles.meta}>
              <span><b>4 days</b> · 9:30am – 4:30pm</span>
              <span><b>Venue</b> · subject to approval from the tuition centre or school</span>
            </div>
            <p>
              Four days that end on a stage. Students move from ice-breakers and
              Singaporean desserts to storytelling, vlogging and a final
              presentation, graduation and certification ceremony.
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Focus</th>
                    <th>Objective</th>
                  </tr>
                </thead>
                <tbody>
                  {tour1.map(([focus, objective], i) => (
                    <tr key={i}>
                      <td>{focus}</td>
                      <td>{objective}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AccordionItem>

          <AccordionItem index="02" title="Imagining our sustainable futures through the SDGs">
            <p>
              Students compare what Singapore and Japan are doing on the
              Sustainable Development Goals, then argue it out in debates and
              presentations.
            </p>
            <div className={styles.cols}>
              <div>
                <h4>Objectives</h4>
                <ul>
                  <li>Practise debate &amp; presentation skills on Singapore&rsquo;s and Japan&rsquo;s actions on the SDGs</li>
                  <li>Communicate on social issues in accessible ways</li>
                  <li>Empower learners to address and act on the hinges/limitations</li>
                  <li>Foster youth leadership and engagement</li>
                </ul>
              </div>
              <div>
                <h4>Global goals in focus</h4>
                <ul className={styles.sdgs}>
                  <li><b>2</b> Zero Hunger</li>
                  <li><b>4</b> Quality Education</li>
                  <li><b>6</b> Clean Water and Sanitation</li>
                  <li><b>7</b> Affordable and Clean Energy</li>
                  <li><b>11</b> Sustainable Cities and Communities</li>
                  <li><b>16</b> Peace, Justice and Strong Institutions</li>
                </ul>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem index="03" title="SDG camp">
            <p>
              A camp that practises what it teaches: low-carbon, low-waste, and
              run as a dialogue between young people from across the region.
            </p>
            <div className={styles.cols}>
              <div>
                <h4>Objectives</h4>
                <ul>
                  <li>Enhance youths&rsquo; knowledge about the SDGs</li>
                  <li>Communicate SDGs in accessible ways for communities</li>
                  <li>Empower students to address inequalities</li>
                  <li>Foster youth leadership through dialogues</li>
                  <li>Learn about Singapore&rsquo;s and the ASEAN region&rsquo;s actions</li>
                  <li>Zero-waste design and low environmental impact</li>
                </ul>
              </div>
              <div>
                <h4>How the camp runs</h4>
                <ul>
                  <li>Bring your own water bottle or cup</li>
                  <li>Low-carbon climate actions built into the schedule</li>
                  <li>Food waste kept minimal and composted where possible</li>
                  <li>Less printing, and sustainable materials where we do</li>
                </ul>
              </div>
            </div>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
};

export default Listings;
