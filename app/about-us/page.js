import Socials from "../../components/socials";

export const metadata = {
  title: "About Us - sglearninghub",
  description: "Learn about sglearninghub's 20-year legacy of providing exceptional cultural and educational exchange programs in Singapore.",
};

export default function AboutUs() {
  return (
    <>
      <div className="animate-on-load-wrapper" style={{ padding: "40px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <section className="info-box" style={{ padding: "60px 40px", textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{ 
            fontFamily: "'League Spartan', sans-serif", 
            fontSize: "3rem", 
            fontWeight: "800", 
            color: "#1e293b",
            textTransform: "uppercase",
            marginBottom: "20px"
          }}>
            Our Legacy
          </h1>
          <p style={{ 
            fontSize: "1.25rem", 
            lineHeight: "1.8", 
            color: "#475569",
            maxWidth: "800px",
            margin: "0 auto"
          }}>
            For over <strong style={{ color: "#5f06e2" }}>20 years</strong>, sglearninghub has been a pioneer in bridging cultures and fostering educational excellence in Singapore.
          </p>
        </section>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginBottom: "60px" }}>
          <div className="info-box" style={{ padding: "40px" }}>
            <h3 style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "1.5rem", fontWeight: "700", color: "#1e293b", marginBottom: "15px" }}>
              Two Decades of Excellence
            </h3>
            <p style={{ color: "#475569", lineHeight: "1.6" }}>
              Established in the early 2000s, we have spent more than two decades refining our programs. Our long-standing presence in Singapore's educational landscape is a testament to our reliability and commitment.
            </p>
          </div>

          <div className="info-box" style={{ padding: "40px" }}>
            <h3 style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "1.5rem", fontWeight: "700", color: "#1e293b", marginBottom: "15px" }}>
              Trusted Partnerships
            </h3>
            <p style={{ color: "#475569", lineHeight: "1.6" }}>
              We have built enduring relationships with local schools, tuition centers, and host families. These partnerships allow us to provide safe, authentic, and high-quality experiences for every participant.
            </p>
          </div>
        </div>

        <section className="info-box" style={{ padding: "40px", marginBottom: "60px" }}>
          <h2 style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "2rem", fontWeight: "700", color: "#1e293b", marginBottom: "20px" }}>
            Why Choose Us?
          </h2>
          <ul style={{ listStyleType: "none", padding: 0, color: "#475569", lineHeight: "2" }}>
            <li>✓ <strong>Experienced:</strong> Over 20 years in the industry.</li>
            <li>✓ <strong>Licensed:</strong> Working strictly with MOE-registered institutions.</li>
            <li>✓ <strong>Authentic:</strong> Genuine cultural immersion through curated homestays.</li>
            <li>✓ <strong>Personalized:</strong> Tailored programs to meet specific educational goals.</li>
          </ul>
        </section>
      </div>
      <Socials />
    </>
  );
}
