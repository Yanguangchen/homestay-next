import Contact from "../../components/contactinfo";
import Socials from "../../components/socials";

export const metadata = {
  title: "Contact Us - sglearninghub",
  description:
    "Contact sglearninghub for inquiries about cultural exchange programs, internships, and student services in Singapore. Reach out to us for personalized assistance.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
      <Socials />
    </main>
  );
}
