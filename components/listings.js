import React from "react";
import AccordionItem from "./AccordionItem";

const Listings = () => {
  const styles = {
    container: {
      fontFamily: "Montserrat, sans-serif",
      maxWidth: "1000px",
      margin: "100px auto 0 auto",
      padding: "40px",
      background: "rgba(255, 255, 255, 0.4)",
      backdropFilter: "blur(15px)",
      WebkitBackdropFilter: "blur(15px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "30px",
      marginBottom: "10%",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.05)",
    },
    header: {
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "10px",
      color: "#1e293b",
      fontFamily: "'League Spartan', sans-serif",
    },
    subHeader: {
      fontSize: "22px",
      fontWeight: "700",
      marginBottom: "15px",
      color: "#334155",
      marginTop: "20px",
    },
    date: {
      fontSize: "14px",
      color: "#64748b",
      marginBottom: "30px",
    },
    section: {
      marginBottom: "20px",
      width: "100%",
    },
    list: {
      paddingLeft: "20px",
      marginBottom: "15px",
    },
    listItem: {
      marginBottom: "10px",
      lineHeight: "1.6",
      color: "#475569",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: "0",
      marginTop: "15px",
      borderRadius: "15px",
      overflow: "hidden",
      border: "1px solid rgba(0, 0, 0, 0.05)",
    },
    th: {
      backgroundColor: "rgba(95, 6, 226, 0.05)",
      padding: "15px",
      textAlign: "left",
      fontWeight: "700",
      color: "#5f06e2",
      borderBottom: "2px solid rgba(95, 6, 226, 0.1)",
    },
    td: {
      padding: "15px",
      borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "#475569",
    },
    infoBox: {
      background: "rgba(255, 255, 255, 0.6)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      borderRadius: "20px",
      padding: "30px",
      marginBottom: "20px",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.08)",
    },
    infoHeader: {
      fontSize: "20px",
      fontWeight: "700",
      marginBottom: "15px",
      color: "#1e293b",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Study Tours</h1>
      <p style={styles.date}>(Updated: 25.08.2024)</p>

      <div style={{ display: "flex", gap: "25px", flexWrap: "wrap", width: "100%", margin: "0 auto 40px auto" }}>
        <div className="info-box" style={{ flex: "1 1 300px", minWidth: "280px" }}>
          <h2 style={styles.infoHeader}>Important Information Before Your Arrival</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Upon arrival, you must stay in a hotel for one or two nights.
            </li>
            <li style={styles.listItem}>
              You must register with a tuition center or an educational institute registered with the
              Ministry of Education.
            </li>
          </ul>
        </div>

        <div className="info-box" style={{ flex: "1 1 300px", minWidth: "280px" }}>
          <h2 style={styles.infoHeader}>Our Interaction Program</h2>
          <p style={{ color: "#475569", marginBottom: "10px" }}>Upon requesting an exchange program that involves interaction with local people:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              We will discuss your specific interests (cultural, linguistic, or otherwise) to tailor
              the experience to your preferences.
            </li>
            <li style={styles.listItem}>
              We will find a suitable host family based on your needs.
            </li>
            <li style={styles.listItem}>
              Participants will be attached to a host family, who will be informed about your
              attendance in the Study Tour workshop.
            </li>
            <li style={styles.listItem}>
              This program provides opportunities to experience local culture & tradition, engage in
              cultural diplomacy, build friendships, develop intercultural competence, and practice
              language.
            </li>
          </ul>
        </div>
      </div>

      {/* Study Tour 1 */}
      <div style={styles.section}>
        <AccordionItem title="Study Tour 1: Articulating and Presentation Skills">
          <h3 style={{ ...styles.subHeader, color: "#5f06e2", fontSize: "18px", marginTop: 0 }}>ARTICULATING and PRESENTATION SKILLS in ENGLISH</h3>
          <p style={{ color: "#64748b" }}>The study tour runs for 4 days from 9:30am to 4:30pm</p>
          <p style={{ color: "#64748b" }}>Venue: subject to approval from tuition center or school.</p>

          <h4 style={{ marginTop: "20px", color: "#334155" }}>Focus Areas:</h4>
          <div style={{ overflowX: "auto" }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>FOCUS</th>
                  <th style={styles.th}>OBJECTIVE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>Course objective, ice-breaker, Bicentennial Singapore...</td>
                  <td style={styles.td}>Get to know host country and expressing spontaneously</td>
                </tr>
                <tr>
                  <td style={styles.td}>Singaporean Dessert</td>
                  <td style={styles.td}>Verbalizing Food</td>
                </tr>
                <tr>
                  <td style={styles.td}>Critical Elements of Speech Delivery</td>
                  <td style={styles.td}>The Finer Points</td>
                </tr>
                <tr>
                  <td style={styles.td}>Games We Play</td>
                  <td style={styles.td}>Traditional Games I</td>
                </tr>
                <tr>
                  <td style={styles.td}>Fillers and WSJF</td>
                  <td style={styles.td}>English with Confidence</td>
                </tr>
                <tr>
                  <td style={styles.td}>Practice, Practice, Practice</td>
                  <td style={styles.td}>Fluency in English I</td>
                </tr>
                <tr>
                  <td style={styles.td}>Deciding Theme/ Topic for Presentation</td>
                  <td style={styles.td}></td>
                </tr>
                <tr>
                  <td style={styles.td}>My Singapore Heartland Experience</td>
                  <td style={styles.td}>Fluency in English II – sharing my experience</td>
                </tr>
                <tr>
                  <td style={styles.td}>Games We Play</td>
                  <td style={styles.td}>Traditional Games II</td>
                </tr>
                <tr>
                  <td style={styles.td}>Secrets to Effective Storytelling</td>
                  <td style={styles.td}>Elements of a Captivating Story</td>
                </tr>
                <tr>
                  <td style={styles.td}>Mental Tricks Before a Speech</td>
                  <td style={styles.td}>Calming the Nerves</td>
                </tr>
                <tr>
                  <td style={styles.td}>Vlogging for Beginners</td>
                  <td style={styles.td}>Telling My Story I</td>
                </tr>
                <tr>
                  <td style={styles.td}>Vlogging</td>
                  <td style={styles.td}>Telling My Story II</td>
                </tr>
                <tr>
                  <td style={styles.td}>Preparation for Presentation</td>
                  <td style={styles.td}></td>
                </tr>
                <tr>
                  <td style={styles.td}>English class Final discussion and preparation</td>
                  <td style={styles.td}></td>
                </tr>
                <tr>
                  <td style={styles.td}>BREAK (canteen)</td>
                  <td style={styles.td}></td>
                </tr>
                <tr>
                  <td style={styles.td}>Day 4 Presentation, Graduation & Certification Ceremony...</td>
                  <td style={styles.td}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </AccordionItem>
      </div>

      {/* Study Tour 2 */}
      <div style={styles.section}>
        <AccordionItem title="Study Tour 2: Sustainable Futures & SDGs">
          <h3 style={{ ...styles.subHeader, color: "#5f06e2", fontSize: "18px", marginTop: 0 }}>
            Imagining Our Sustainable Futures through the Lens of SDGs
          </h3>

          <h4 style={{ color: "#334155" }}>Objectives:</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Practice debate & presentation skills on Singapore's and Japan's actions on the SDGs</li>
            <li style={styles.listItem}>Communicate on social issues in accessible ways</li>
            <li style={styles.listItem}>Empower learners to address and act on the hinges/limitations</li>
            <li style={styles.listItem}>Foster youth leadership and engagement</li>
          </ul>

          <h4 style={{ color: "#334155" }}>Global goals focus:</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>SDG 2: Zero Hunger</li>
            <li style={styles.listItem}>SDG 4: Quality Education</li>
            <li style={styles.listItem}>SDG 6: Clean Water and Sanitation</li>
            <li style={styles.listItem}>SDG 7: Affordable and Clean Energy</li>
            <li style={styles.listItem}>SDG 11: Sustainable Cities and Communities</li>
            <li style={styles.listItem}>SDG 16: Peace, Justice and Strong Institutions</li>
          </ul>
        </AccordionItem>
      </div>

      {/* Study Tour 3 */}
      <div style={styles.section}>
        <AccordionItem title="Study Tour 3: SDG Camp">
          <h3 style={{ ...styles.subHeader, color: "#5f06e2", fontSize: "18px", marginTop: 0 }}>SDG Camp</h3>

          <h4 style={{ color: "#334155" }}>Objectives:</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Enhance youths' knowledge about the SDGs</li>
            <li style={styles.listItem}>Communicate SDGs in accessible ways for communities</li>
            <li style={styles.listItem}>Empower students to address inequalities</li>
            <li style={styles.listItem}>Foster youth leadership through dialogues</li>
            <li style={styles.listItem}>Learn about Singapore's and ASEAN region's actions</li>
            <li style={styles.listItem}>Zero-waste design and low environmental impact</li>
          </ul>

          <h4 style={{ color: "#334155" }}>Additional Notes:</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Encouraged to bring own water bottle or cup</li>
            <li style={styles.listItem}>Low carbon emission climate actions integrated</li>
            <li style={styles.listItem}>Food waste kept minimal and composted where possible</li>
            <li style={styles.listItem}>Reduction in printing or use of sustainable materials</li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
};

export default Listings;
