import Link from "next/link";
import "../../styles/footer.css";
import TodaysArticle from "../todays-article/page"; // adjust the relative path if needed

export const metadata = {
  title: "sg-learninghub - Cultural and School Exchange Programs in Singapore",
  description:
    "Explore cultural exchange programs in Singapore with sg-learninghub. Offering personalized homestay experiences and school exchange programs that foster cultural understanding and global friendships.",
};

export default function VJetArticlePage() {
  return (
    <>
      <TodaysArticle />

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
