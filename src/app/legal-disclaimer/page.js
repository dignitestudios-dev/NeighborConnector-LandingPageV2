import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Legal Disclaimer — NeighborConnector™",
  description: "Legal disclaimer, terms of use scope, and emergency notice for NeighborConnector™.",
};

export default function LegalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#1D2A29] antialiased">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-[#4A5D5A] hover:text-[#285A48] transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#285A48]/10 text-[#285A48] uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5" />
                Legal Information
              </span>
              <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-[#1D2A29]">
                Legal Disclaimer
              </h1>
              <p className="mt-2 text-sm text-[#5C6E6B]">
                Last updated: October 2026
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#285A48]/15 shadow-sm space-y-6 text-[#4A5D5A] text-base leading-relaxed">
              <div className="p-4 rounded-2xl bg-[#D97736]/10 border border-[#D97736]/25 text-[#1D2A29]">
                <strong className="block text-sm font-bold text-[#D97736] uppercase tracking-wider mb-1">
                  Important Notice — Not an Emergency Dispatch Service
                </strong>
                <p className="text-sm">
                  NeighborConnector™ is a mutual aid and community coordination platform. It is <strong>NOT</strong> an emergency dispatch service, 911 replacement, or professional medical alert system. In any life-threatening situation or medical emergency, always dial <strong>911</strong> immediately.
                </p>
              </div>

              <h2 className="text-xl font-bold text-[#1D2A29] pt-2">1. General Information Only</h2>
              <p>
                NeighborConnector™ is sponsored and made available by Community Care Housing Foundation as a free digital tool designed to facilitate communication, mutual support, and neighborhood cooperation among private circles of consenting individuals.
              </p>

              <h2 className="text-xl font-bold text-[#1D2A29] pt-2">2. No Guarantee of Response or Service</h2>
              <p>
                Requests for assistance, rides, chores, and check-ins made via NeighborConnector™ rely entirely on voluntary responses from independent members of your personal circles. Neither NeighborConnector™ nor Community Care Housing Foundation guarantees that any request will be fulfilled, answered, or responded to in a timely manner.
              </p>

              <h2 className="text-xl font-bold text-[#1D2A29] pt-2">3. User Responsibility &amp; Safety</h2>
              <p>
                Users are solely responsible for vetting who they invite into their private circles. NeighborConnector™ encourages members to only invite neighbors, friends, and family members they already know and trust in the physical world.
              </p>

              <h2 className="text-xl font-bold text-[#1D2A29] pt-2">4. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, Community Care Housing Foundation, its officers, directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the platform.
              </p>

              <div className="pt-6 border-t border-[#285A48]/10 text-sm text-[#5C6E6B]">
                For questions regarding this disclaimer, please contact us at{" "}
                <a href="mailto:Info@CommunityCareHousing.org" className="text-[#285A48] underline">
                  Info@CommunityCareHousing.org
                </a>.
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
