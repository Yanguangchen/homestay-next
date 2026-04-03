import AccordionItem from "../../components/AccordionItem";
import Socials from "../../components/socials";

export const metadata = {
  title: "FAQ - sglearninghub",
  description: "Frequently asked questions about our homestay and study tour programs in Singapore.",
};

export default function FAQ() {
  return (
    <>
      <div className="animate-on-load-wrapper" style={{ padding: "40px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <section className="info-box" style={{ padding: "60px 40px", textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ 
            fontFamily: "'League Spartan', sans-serif", 
            fontSize: "3rem", 
            fontWeight: "800", 
            color: "#1e293b",
            textTransform: "uppercase",
            marginBottom: "10px"
          }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: "#64748b" }}>Everything you need to know about our programs and services.</p>
        </section>

        <div style={{ marginBottom: "60px" }}>
          <AccordionItem title="What is the minimum duration for a Study Tour?">
            <p>Our typical Study Tours range from 4 to 14 days, but we can customize the duration based on the specific needs of the educational institution or group.</p>
          </AccordionItem>

          <AccordionItem title="Are the host families vetted?">
            <p>Absolutely. Safety and comfort are our top priorities. All our host families undergo a thorough screening process, including home visits and interviews, to ensure a high standard of hospitality and security.</p>
          </AccordionItem>

          <AccordionItem title="Do I need a special visa for the exchange program?">
            <p>Visa requirements depend on your country of origin and the duration of your stay. We provide guidance and the necessary documentation from local educational institutions to support your visa application.</p>
          </AccordionItem>

          <AccordionItem title="Can individual students apply, or only groups?">
            <p>While most of our study tours are organized for school groups, we do have specific programs available for individual students during holiday seasons. Please contact us for the latest schedule.</p>
          </AccordionItem>

          <AccordionItem title="What happens if there is an emergency during the stay?">
            <p>We provide 24/7 support for all our participants. Both the students and host families have access to an emergency contact number that is managed by our experienced local team.</p>
          </AccordionItem>
        </div>
      </div>
      <Socials />
    </>
  );
}
