import Contact from "../../components/contactinfo";
import "../../styles/footer.css";
import Socials from "../../components/socials";


export const metadata = {
  title: "Contact Us - sg-learninghub",
  description:
    "Contact sg-learninghub for inquiries about cultural exchange programs, internships, and student services in Singapore. Reach out to us for personalized assistance.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <Contact />
        <Socials />
      </main>
      <footer>
        <div className="footerStyle">
          <div className="footerWrapper">
            <div className="footerContent">{/* Add footer content here */}</div>
          </div>
        </div>
        <div className="bottomSection">
          <a href="https://webwizardsg.com/">
            <div className="wwContainer">
              <img
                className="wwLogo"
                src="/transparent.png"
                loading="lazy"
                alt="Logo to webwizardsg.com"
              />
            </div>
          </a>
          <p className="footerContentPStyle">
            Powered using React.Js & Next.Js, hosted on Vercel and secured by
            Cloudflare CDN
          </p>
          <p className="footerContentPStyle">
            Developed by Chen Yanguang from Web Wizards
          </p>
        </div>
      </footer>
    </>
  );
}
