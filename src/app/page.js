import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { CommunityStory } from "@/components/CommunityStory";
import { HomeInteractiveExplorations } from "@/components/HomeInteractiveExplorations";
import { Comparison } from "@/components/Comparison";
import { CircleLiving } from "@/components/CircleLiving";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { PrivacyAccessibility } from "@/components/PrivacyAccessibility";
import { AskHolly } from "@/components/AskHolly";
import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased selection:bg-sprout selection:text-brand overflow-x-clip w-full">
      <Navbar />
      <main className="overflow-x-clip w-full">
        <Hero />
        <ValueProps />
        
        <CommunityStory />
            <UseCases />
        <HomeInteractiveExplorations />
     
        <CircleLiving />
        <PrivacyAccessibility />
        <Features />
        <HowItWorks />
        <Comparison />
        <AskHolly />
        <FaqSection />
        <DownloadCta />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
