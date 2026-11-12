import { Navbar } from "@/components/Navbar";
import { FaqSection } from "@/components/FaqSection";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Frequently Asked Questions — Resources | NeighborConnector™",
  description:
    "Find answers about NeighborConnector™: privacy, daily check-ins, creating private circles, rides, chores, and how it works.",
};

export default function ResourcesFaqPage() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased selection:bg-sprout selection:text-brand">
      <Navbar />

      <main className="pt-24 md:pt-28">
        <FaqSection />
        <DownloadCta />
      </main>

      <Footer />
    </div>
  );
}

