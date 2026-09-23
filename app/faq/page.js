import AccordionItem from "../../components/AccordionItem";
import Socials from "../../components/socials";

export const metadata = {
  title: "FAQ - sglearninghub",
  alternates: {
    canonical: "/faq",
  },
  description: "Frequently asked questions about our homestay and study tour programs in Singapore.",
};

export default function FAQ() {
  return (
    <>
      <div className="animate-on-load-wrapper">
        <header className="page-head">
          <div className="wrap">
            <p className="eyebrow">FAQ</p>
            <h1>
              Questions parents <em>and</em> teachers ask us.
            </h1>
            <p className="section-lede">
              Everything you need to know about our programs and services. If
              your question isn&rsquo;t here, ask us directly.
            </p>
          </div>
        </header>

        <section className="section">
          <div className="wrap" style={{ maxWidth: 900 }}>
            <AccordionItem index="01" title="What is the minimum duration for a Study Tour?">
              <p>Our typical Study Tours range from 4 to 14 days, but we can customise the duration based on the specific needs of the educational institution or group.</p>
            </AccordionItem>

            <AccordionItem index="02" title="Are the host families vetted?">
              <p>Absolutely. Safety and comfort are our top priorities. All our host families undergo a thorough screening process, including home visits and interviews, to ensure a high standard of hospitality and security.</p>
            </AccordionItem>

            <AccordionItem index="03" title="Do I need a special visa for the exchange program?">
              <p>Visa requirements depend on your country of origin and the duration of your stay. We provide guidance and the necessary documentation from local educational institutions to support your visa application.</p>
            </AccordionItem>

            <AccordionItem index="04" title="Can individual students apply, or only groups?">
              <p>While most of our study tours are organised for school groups, we do have specific programs available for individual students during holiday seasons. Please contact us for the latest schedule.</p>
            </AccordionItem>

            <AccordionItem index="05" title="What happens if there is an emergency during the stay?">
              <p>We provide 24/7 support for all our participants. Both the students and host families have access to an emergency contact number that is managed by our experienced local team.</p>
            </AccordionItem>
          </div>
        </section>
      </div>
      <Socials />
    </>
  );
}
