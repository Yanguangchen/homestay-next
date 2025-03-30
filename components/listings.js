import React from "react";

const Listings = () => {
  const styles = {
    container: {
      fontFamily: "Montserrat, sans-serif",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      marginBottom: "10%",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    subHeader: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    date: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "20px",
    },
    section: {
      marginBottom: "20px",
    },
    list: {
      paddingLeft: "20px",
      marginBottom: "15px",
    },
    listItem: {
      marginBottom: "8px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    th: {
      backgroundColor: "#f0f0f0",
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
    },
    td: {
      border: "1px solid #ddd",
      padding: "8px",
    },
    infoBox: {
      backgroundColor: "#f9f9f9",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      padding: "15px",
      marginBottom: "20px",
    },
    infoHeader: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Study Tours</h1>
      <p style={styles.date}>(Updated: 25.08.2024)</p>

      <div style={styles.infoBox}>
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

      <div style={styles.infoBox}>
        <h2 style={styles.infoHeader}>Our Interaction Program</h2>
        <p>Upon requesting an exchange program that involves interaction with local people:</p>
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
          <li style={styles.listItem}>
            Additionally, participants can gain valuable local insight and advice.
          </li>
          <li style={styles.listItem}>
            These programs are designed to enhance participants' language skills and deepen their
            understanding of the native culture and traditions.
          </li>
        </ul>
      </div>

      {/* Study Tour 1 */}
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Study Tour 1</h2>
        <h3 style={styles.subHeader}>ARTICULATING and PRESENTATION SKILLS in ENGLISH</h3>
        <p>The study tour runs for 4 days from 9:30am to 4:30pm</p>
        <p>Venue: subject to approval from tuition center or school.</p>

        <h4>Focus Areas:</h4>
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
                <td style={styles.td}>
                  Course objective, ice-breaker, Bicentennial Singapore, her people and her culture.
                </td>
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
                <td style={styles.td}>
                  Day 4 Presentation, Graduation & Certification Ceremony and Photo taking
                </td>
                <td style={styles.td}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Study Tour 2 */}
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Study Tour 2</h2>
        <h3 style={styles.subHeader}>
          Imagining Our Sustainable Futures through the Lens of SDGs
        </h3>

        <h4>Objectives:</h4>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Learn and practice debate & presentation skills to discuss Singapore's and Japan's
            actions on the SDGs through learning about social issues through the Lens of SDGs
          </li>
          <li style={styles.listItem}>
            Enable learners to communicate on social issues in accessible ways (dialogue,
            interviews, debates)
          </li>
          <li style={styles.listItem}>
            Empower learners to address and act on the hinges/limitations
          </li>
          <li style={styles.listItem}>
            Foster youth leadership and engagement through dialogues and exercises on SDG
            implementation
          </li>
        </ul>

        <h4>Global goals and targets that the camp will focus on:</h4>
        <ul style={styles.list}>
          <li style={styles.listItem}>SDG 2: Zero Hunger</li>
          <li style={styles.listItem}>SDG 4: Quality Education</li>
          <li style={styles.listItem}>SDG 6: Clean Water and Sanitation</li>
          <li style={styles.listItem}>SDG 7: Affordable and Clean Energy</li>
          <li style={styles.listItem}>SDG 11: Sustainable Cities and Communities</li>
          <li style={styles.listItem}>SDG 16: Peace, Justice and Strong Institutions</li>
        </ul>
      </div>

      {/* Study Tour 3 */}
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Study Tour 3</h2>
        <h3 style={styles.subHeader}>SDG Camp</h3>

        <h4>Objectives:</h4>
        <ul style={styles.list}>
          <li style={styles.listItem}>Enhance youths' knowledge about the SDGs</li>
          <li style={styles.listItem}>
            Enable attendees to communicate on the SDGs in accessible ways for their communities
          </li>
          <li style={styles.listItem}>
            Be empowered to address/act on the inequalities around them as an individual and as a
            group
          </li>
          <li style={styles.listItem}>
            Foster youth leadership through dialogues and exercises on SDG implementation
          </li>
          <li style={styles.listItem}>
            Learn about Singapore's and the ASEAN region's actions on the SDGs
          </li>
          <li style={styles.listItem}>
            Designed to be as zero-waste as possible and/or has low impact on the planet
          </li>
        </ul>

        <h4>Additional Notes:</h4>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            All students are encouraged to bring their own water bottle or cup
          </li>
          <li style={styles.listItem}>
            In support of Sustainable Development Goals the camp will include the following climate
            action to facilitate a low carbon emission, low impact session:
          </li>
          <li style={styles.listItem}>
            - No bottled water or packet drinks will be provided. A water dispenser will be
            available for all students to express themselves authentically
          </li>
          <li style={styles.listItem}>
            - For Art Instructions and skills, only using materials available or reusing of recycled
            trash
          </li>
          <li style={styles.listItem}>
            All lecture halls will be kept to 25 degrees Celsius in air-conditioning
          </li>
          <li style={styles.listItem}>
            Food waste to be kept minimal and composted wherever possible
          </li>
          <li style={styles.listItem}>
            Reduction in printing materials or the use of sustainable printing to be considered
            (only if printing is necessary) including booklets and certificates of participation
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Listings;