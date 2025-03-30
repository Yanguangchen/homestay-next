"use client";

function Banner() {
    const styles = {
      container: {
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
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
        color: "white",
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
        color: "white",
  
      },
      infoBox: {
        backgroundColor: "#212121",
        padding: "15px",
        color: "white",
      },
      infoHeader: {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom:"10px",
        color: "white",
      },
    };
  
    return (
      <div>
        <div style={styles.infoBox}>
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
        <div style={styles.infoBox}>
          <h2 style={styles.infoHeader}>Our Interaction Program</h2>
          <p>
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