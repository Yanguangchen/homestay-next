import Listings from "../../components/listings";
import "../../styles/footer.css";
import Contactparent from "../../components/contactParent";
import Socials from "../../components/socials";

export const metadata = {
  title: "Study Tours",
  description: "Explore our study tours and exchange programs.",
};

export default function ListingsPage() {
  return (
    <>
      <main>
        <Listings />
        <Contactparent />
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
