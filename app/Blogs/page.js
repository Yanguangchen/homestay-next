import TodaysArticle from "../todays-article/page";
import Socials from "../../components/socials";

export const metadata = {
  title: "Blogs - sglearninghub",
  alternates: {
    canonical: "/Blogs",
  },
  description: "Stay updated with the latest news and articles about cultural exchange and study tours in Singapore.",
};

export default function VJetArticlePage() {
  return (
    <div className="animate-on-load-wrapper">
      <TodaysArticle />
      <Socials />
    </div>
  );
}
