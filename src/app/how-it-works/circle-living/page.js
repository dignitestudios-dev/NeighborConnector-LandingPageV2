import { Navbar } from "@/components/Navbar";
import { CompanionWorksheet } from "@/components/CompanionWorksheet";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Circle Living™ — NeighborConnector™",
  description:
    "Small circles. Real relationships. Meaningful support. Use our interactive companion worksheet to plan and organize your private circle.",
};

export default function CircleLivingPage() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased selection:bg-sprout selection:text-brand overflow-x-clip w-full">
      <Navbar />

      <main className="pt-20 overflow-x-clip w-full">
        <CompanionWorksheet />
        <DownloadCta />
      </main>

      <Footer />
    </div>
  );
}
