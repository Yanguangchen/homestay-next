import MainPage from "../components/homepage"; // Import the HomePage component
import "../styles/footer.css";

export const metadata = {
  title: "sg-learninghub - Cultural and School Exchange Programs in Singapore",
  description:
    "Explore cultural exchange programs in Singapore with sg-learninghub. Offering personalized homestay experiences and school exchange programs that foster cultural understanding and global friendships.",
};

export default function HomePage() {
  return (
    <main>
      <script
        async
        src="https://cdn.botpress.cloud/webchat/v2.3/inject.js"
      ></script>
      <script
        async
        src="https://files.bpcontent.cloud/2025/04/09/07/20250409072725-7JS2HUV7.js"
      ></script>

      {/* Use the imported HomePage component (which includes the footer in socials.js) */}
      <MainPage />
    </main>
  );
}
