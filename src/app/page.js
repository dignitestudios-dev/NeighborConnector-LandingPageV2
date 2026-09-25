import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { CommunityStory } from "@/components/CommunityStory";
import { Comparison } from "@/components/Comparison";
import { CircleLiving } from "@/components/CircleLiving";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { PrivacyAccessibility } from "@/components/PrivacyAccessibility";
import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased selection:bg-sprout selection:text-brand">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <CommunityStory />
        <Comparison />
        <CircleLiving />
        <Features />
        <HowItWorks />
        <UseCases />
        <PrivacyAccessibility />
        <AboutSection />
        <FaqSection />
        <DownloadCta />
      </main>
      <Footer />
    </div>
  );
}
