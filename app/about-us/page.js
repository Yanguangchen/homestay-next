import Socials from "../../components/socials";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us - sglearninghub",
  alternates: {
    canonical: "/about-us",
  },
  description: "Learn about sglearninghub's 20-year legacy of providing exceptional cultural and educational exchange programs in Singapore.",
};

const reasons = [
  ["Experienced", "Over 20 years of hosting students in Singapore."],
  ["Licensed", "We work strictly with MOE-registered institutions."],
  ["Authentic", "Genuine cultural immersion through carefully matched homestays."],
  ["Personalised", "Programs tailored to each group's educational goals."],
];

export default function AboutUs() {
  return (
    <>
      <div className="animate-on-load-wrapper">
        <header className="page-head">
          <div className="wrap">
            <p className="eyebrow">About us</p>
            <h1>
              Twenty years of <em>first days</em> in Singapore.
            </h1>
            <p className="section-lede">
              Since 2006, sglearninghub has helped students trade a tourist&rsquo;s
              view of Singapore for a resident&rsquo;s. We connect visiting
              schools with local classrooms, host families and workplaces, and
              we look after everyone in between.
            </p>
          </div>
        </header>

        <section className="section">
          <div className={`wrap ${styles.story}`}>
            <div className={styles.chapter}>
              <span className={styles.year}>2006</span>
              <h2>Two decades of refinement</h2>
              <p>
                We started with a simple idea: that you understand a place
                fastest by living inside it. Twenty years on, our programs have
                been shaped by every group that has arrived at Changi, and our
                long presence in Singapore&rsquo;s education landscape is the
                best evidence of our reliability.
              </p>
            </div>
            <div className={styles.chapter}>
              <span className={styles.year}>Today</span>
              <h2>Partnerships that last</h2>
              <p>
                We have built lasting relationships with local schools, tuition
                centres and host families. Those relationships are what let us
                offer safe, authentic, high-quality experiences to every
                participant, year after year.
              </p>
            </div>
          </div>
        </section>

        <section className={`section ${styles.why}`}>
          <div className="wrap">
            <p className="eyebrow">Why choose us</p>
            <h2 className="section-title">What you can count on.</h2>
            <ol className={styles.reasons}>
              {reasons.map(([title, text], i) => (
                <li key={title}>
                  <span className={styles.num}>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
      <Socials />
    </>
  );
}
