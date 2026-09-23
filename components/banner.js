"use client";
import styles from "./banner.module.css";

// The two notices below are required to stay at the very top of the homepage.
function Banner() {
  return (
    <section className={`wrap ${styles.banner}`} aria-label="Before you arrive">
      <div className={styles.strip}>
        <span className={styles.dot} aria-hidden="true" />
        Read this before you book a flight
      </div>

      <div className={styles.grid}>
        <article className={styles.pass}>
          <div className={styles.stub}>
            <span className={styles.stubLabel}>Notice</span>
            <span className={styles.stubNum}>01</span>
            <span className={styles.stubCode}>SIN · ARR</span>
          </div>
          <div className={styles.body}>
            <h2 className={styles.title}>Important information before your arrival</h2>
            <ul className={styles.list}>
              <li>
                <span className={styles.tag}>Stay</span>
                Upon arrival, you must stay in a hotel for one or two nights.
              </li>
              <li>
                <span className={styles.tag}>Register</span>
                You must register with a tuition centre or an educational institute
                registered with the Ministry of Education.
              </li>
            </ul>
          </div>
        </article>

        <article className={styles.pass}>
          <div className={`${styles.stub} ${styles.stubTeal}`}>
            <span className={styles.stubLabel}>Program</span>
            <span className={styles.stubNum}>02</span>
            <span className={styles.stubCode}>HOST · SG</span>
          </div>
          <div className={styles.body}>
            <h2 className={styles.title}>Our interaction program</h2>
            <p className={styles.intro}>
              When you request an exchange that involves living and learning
              alongside local people:
            </p>
            <ol className={styles.steps}>
              <li>
                We discuss your specific interests (cultural, linguistic or
                otherwise) to tailor the experience to you.
              </li>
              <li>We find a suitable host family based on your needs.</li>
              <li>
                You are attached to that host family, who will be informed about
                your attendance in the Study Tour workshop.
              </li>
              <li>
                You experience local culture &amp; tradition, take part in
                cultural diplomacy, build friendships, develop intercultural
                competence and practise the language.
              </li>
              <li>You also gain valuable local insight and advice.</li>
              <li>
                Every program is designed to strengthen your language skills and
                deepen your understanding of the native culture and traditions.
              </li>
            </ol>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Banner;
