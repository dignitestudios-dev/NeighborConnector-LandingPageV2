import { Navbar } from "@/components/Navbar";
import { WhyItMattersGuide } from "@/components/WhyItMattersGuide";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "What, Who & Why It Matters Guide — NeighborConnector™",
  description:
    "Discover what NeighborConnector is, who it is built for, and why private micro-circles matter for stronger, more supportive communities.",
};

export default function WhyItMattersPage() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased selection:bg-sprout selection:text-brand">
      <Navbar />
      <main className="pt-20">
        <WhyItMattersGuide />
        <DownloadCta />
      </main>
      <Footer />
    </div>
  );
}

