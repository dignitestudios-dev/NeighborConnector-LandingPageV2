import { Navbar } from "@/components/Navbar";
import { CompanionWorksheet } from "@/components/CompanionWorksheet";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Companion Worksheet — Circle Living™ | NeighborConnector™",
  description:
    "Interactive and printable companion worksheet to plan and organize your private circle with neighbors, friends, and family.",
};

export default function CompanionWorksheetPage() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased selection:bg-sprout selection:text-brand">
      <Navbar />
      <main className="pt-20">
        <CompanionWorksheet />
        <DownloadCta />
      </main>
      <Footer />
    </div>
  );
}

