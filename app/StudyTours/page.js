import Listings from "../../components/listings";
import Contactparent from "../../components/contactParent";
import Socials from "../../components/socials";

export const metadata = {
  title: "Study Tours - sglearninghub",
  alternates: {
    canonical: "/StudyTours",
  },
  description: "Explore our curated study tours and cultural exchange programs in Singapore.",
};

export default function ListingsPage() {
  return (
    <main className="animate-on-load-wrapper">
      <Listings />
      <Contactparent />
      <Socials />
    </main>
  );
}
