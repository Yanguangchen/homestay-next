import Listings from "../../components/listings";
import Contactparent from "../../components/contactParent";
import Socials from "../../components/socials";

export const metadata = {
  title: "Study Tours - sglearninghub",
  description: "Explore our curated study tours and cultural exchange programs in Singapore.",
};

export default function ListingsPage() {
  return (
    <main>
      <Listings />
      <Contactparent />
      <Socials />
    </main>
  );
}
