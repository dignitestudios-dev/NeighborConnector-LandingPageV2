import Link from "next/link";
import {
  Building2,
  Heart,
  Users2,
  ArrowRight,
  HandHeart,
  Tv,
  Presentation,
  Award,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Acknowledgements — Resources | NeighborConnector™",
  description:
    "Honoring our sponsors, donors, advertisers, and community connection ambassadors.",
};

export default function AcknowledgementsPage() {
  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#1D2A29] antialiased">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#285A48]/10 text-[#285A48] border border-[#285A48]/20 tracking-wide uppercase">
                <Heart className="w-3.5 h-3.5 fill-[#285A48]" />
                Gratitude &amp; Recognition
              </span>
              <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D2A29] tracking-tight">
                Acknowledgements
              </h1>
              <p className="mt-4 text-lg text-[#4A5D5A] max-w-2xl mx-auto">
                Celebrating the community supporters, generous donors, sponsors, and grassroots ambassadors who make NeighborConnector™ possible.
              </p>
            </div>
          </Reveal>

          {/* 4 Placeholder Sections: Sponsors, Donors, Advertisers, Community Connection Ambassadors */}
          <div className="space-y-8 mb-14">
            {/* Section 1: Sponsors */}
            <Reveal delay={50}>
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#285A48]/15 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid size-10 place-items-center rounded-xl bg-[#EBF3EF] text-[#285A48]">
                    <Building2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D2A29]">
                      Sponsors
                    </h2>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D97736]">
                      Sponsorship Registry Coming Soon
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#4A5D5A] leading-relaxed">
                  We are grateful to our foundational community partners and organizational sponsors who fund the technology, safety infrastructure, and ongoing operations of NeighborConnector™.
                </p>
              </div>
            </Reveal>

            {/* Section 2: Donors */}
            <Reveal delay={100}>
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#285A48]/15 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid size-10 place-items-center rounded-xl bg-[#EBF3EF] text-[#285A48]">
                    <HandHeart className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D2A29]">
                      Donors
                    </h2>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D97736]">
                      Donor Recognition List Coming Soon
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#4A5D5A] leading-relaxed">
                  A sincere thank you to individual donors and philanthropic supporters whose charitable gifts ensure NeighborConnector™ remains free for neighbors, seniors, and families everywhere.
                </p>
              </div>
            </Reveal>

            {/* Section 3: Advertisers */}
            <Reveal delay={150}>
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#285A48]/15 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid size-10 place-items-center rounded-xl bg-[#EBF3EF] text-[#285A48]">
                    <Tv className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D2A29]">
                      Advertisers
                    </h2>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D97736]">
                      Community Partner Directory Coming Soon
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#4A5D5A] leading-relaxed">
                  Recognizing trusted community businesses and local service providers collaborating with our mutual support ecosystem.
                </p>
              </div>
            </Reveal>

            {/* Section 4: Community Connection Ambassadors */}
            <Reveal delay={200}>
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#285A48]/15 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid size-10 place-items-center rounded-xl bg-[#EBF3EF] text-[#285A48]">
                    <Users2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D2A29]">
                      Community Connection Ambassadors
                    </h2>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D97736]">
                      Ambassador Network Coming Soon
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#4A5D5A] leading-relaxed">
                  Our grassroots leaders, neighborhood block captains, and volunteer advocates who introduce Circle Living™ to their local areas.
                </p>

                {/* Webinar / Presentation invitation callout */}
                <div className="mt-5 p-4 rounded-2xl bg-[#EBF3EF] border border-[#285A48]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Presentation className="w-5 h-5 text-[#285A48] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-[#1D2A29]">
                        Host a Webinar or Live Presentation for Your Group
                      </p>
                      <p className="text-xs text-[#4A5D5A] mt-0.5">
                        Interested in bringing NeighborConnector™ to your HOA, church group, senior community, or civic association? We invite people to host webinars or live presentations for groups.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#285A48] text-white text-xs font-semibold hover:bg-[#1E4336] transition-colors shrink-0 self-start sm:self-center"
                  >
                    <span>Request a Presentation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>

      <DownloadCta />
      <Footer />
    </div>
  );
}
