"use client";

function Banner() {
    const styles = {
      container: {
        fontFamily: "Montserrat, sans-serif",
        width: "100%",
        padding: "20px 0",
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
        marginTop: "10px",
      },
      th: {
        backgroundColor: "#212121",
        padding: "8px",
        textAlign: "left",
        color: "white",
  
      },
      td: {
        padding: "8px",
        color: "#333",
  
      },
      infoBox: {
        background: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "15px",
        padding: "25px",
        marginBottom: "30px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        color: "#333",
      },
      infoHeader: {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom:"10px",
        color: "#333",
      },
    };
  
    return (
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", width: "80%", margin: "0 auto" }}>
        <div className="info-box" style={{ flex: "1 1 300px", minWidth: "280px" }}>
          <h2 style={styles.infoHeader}>
            Important Information Before Your Arrival
          </h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Upon arrival, you must stay in a hotel for one or two nights.
            </li>
            <li style={styles.listItem}>
              You must register with a tuition center or an educational institute
              registered with the Ministry of Education.
            </li>
          </ul>
        </div>
        <div className="info-box" style={{ flex: "1 1 300px", minWidth: "280px" }}>
          <h2 style={styles.infoHeader}>Our Interaction Program</h2>
          <p style={{ color: "#4b5563", marginBottom: "10px" }}>
            Upon requesting an exchange program that involves interaction with
            local people:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              We will discuss your specific interests (cultural, linguistic, or
              otherwise) to tailor the experience to your preferences.
            </li>
            <li style={styles.listItem}>
              We will find a suitable host family based on your needs.
            </li>
            <li style={styles.listItem}>
              Participants will be attached to a host family, who will be informed
              about your attendance in the Study Tour workshop.
            </li>
            <li style={styles.listItem}>
              This program provides opportunities to experience local culture &
              tradition, engage in cultural diplomacy, build friendships, develop
              intercultural competence, and practice language.
            </li>
            <li style={styles.listItem}>
              Additionally, participants can gain valuable local insight and
              advice.
            </li>
            <li style={styles.listItem}>
              These programs are designed to enhance participants' language skills
              and deepen their understanding of the native culture and traditions.
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Banner;