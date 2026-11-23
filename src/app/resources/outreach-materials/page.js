import Link from "next/link";
import {
  FileText,
  Mail,
  Megaphone,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Outreach Materials — Resources | NeighborConnector™",
  description:
    "Official outreach materials, flyers and templates for community leaders, neighborhoods and organizations. Final versions coming soon.",
};

export default function OutreachMaterialsPage() {
  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#1D2A29] antialiased">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#285A48]/10 text-[#285A48] border border-[#285A48]/20 tracking-wide uppercase">
                <Megaphone className="w-3.5 h-3.5" />
                Community Outreach
              </span>
              <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D2A29] tracking-tight">
                Outreach Materials &amp; Templates
              </h1>
              <p className="mt-4 text-lg text-[#4A5D5A] max-w-2xl mx-auto">
                Official flyers, email invitations and announcement toolkits to help you introduce NeighborConnector™ to your neighbors, HOA, faith group, or civic organization.
              </p>
            </div>
          </Reveal>

          {/* Placeholders for Upcoming Outreach Items */}
          <div className="grid gap-6 sm:grid-cols-2 mb-12">
            {/* 1. Neighborhood Introduction Flyer */}
            <Reveal delay={50}>
              <div className="bg-white rounded-3xl p-7 border border-[#285A48]/15 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="grid size-11 place-items-center rounded-2xl bg-[#EBF3EF] text-[#285A48]">
                      <FileText className="w-5 h-5" />
                    </span>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D97736]/15 text-[#D97736]">
                      Flyer coming soon
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1D2A29]">
                    Neighborhood Introduction Flyer
                  </h3>
                  <p className="mt-2 text-sm text-[#4A5D5A] leading-relaxed">
                    A friendly, printable 1-page door hanger and mailbox introduction explaining Circle Living™ and private pod safety.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#285A48]/10 text-xs text-[#5C6E6B] italic">
                  Printable PDF download will be enabled once design review completes.
                </div>
              </div>
            </Reveal>

            {/* 2. Family & Friends Invite Script */}
            <Reveal delay={100}>
              <div className="bg-white rounded-3xl p-7 border border-[#285A48]/15 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="grid size-11 place-items-center rounded-2xl bg-[#EBF3EF] text-[#285A48]">
                      <Mail className="w-5 h-5" />
                    </span>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D97736]/15 text-[#D97736]">
                      Script coming soon
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1D2A29]">
                    Family &amp; Close Friends Invite Script
                  </h3>
                  <p className="mt-2 text-sm text-[#4A5D5A] leading-relaxed">
                    Copy-and-paste text messages and email copy to warmly invite elderly parents, adult children, or close friends.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#285A48]/10 text-xs text-[#5C6E6B] italic">
                  Pre-written invitation copy coming soon.
                </div>
              </div>
            </Reveal>

            {/* 3. Block Association & Church Group Notice */}
            <Reveal delay={150}>
              <div className="bg-white rounded-3xl p-7 border border-[#285A48]/15 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="grid size-11 place-items-center rounded-2xl bg-[#EBF3EF] text-[#285A48]">
                      <Building className="w-5 h-5" />
                    </span>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D97736]/15 text-[#D97736]">
                      Notice template coming soon
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1D2A29]">
                    Block Association &amp; Church Group Notice
                  </h3>
                  <p className="mt-2 text-sm text-[#4A5D5A] leading-relaxed">
                    Formal blurbs formatted for HOA newsletters, bulletin inserts, community boards and civic gatherings.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#285A48]/10 text-xs text-[#5C6E6B] italic">
                  Newsletter &amp; bulletin blurbs in development.
                </div>
              </div>
            </Reveal>

            {/* 4. Best Practices for Inviting Neighbors */}
            <Reveal delay={200}>
              <div className="bg-white rounded-3xl p-7 border border-[#285A48]/15 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="grid size-11 place-items-center rounded-2xl bg-[#EBF3EF] text-[#285A48]">
                      <Users className="w-5 h-5" />
                    </span>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D97736]/15 text-[#D97736]">
                      Guide coming soon
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1D2A29]">
                    Best Practices for Inviting Neighbors
                  </h3>
                  <p className="mt-2 text-sm text-[#4A5D5A] leading-relaxed">
                    Warm, thoughtful guidance on having low-pressure conversations with neighbors over the fence or on the sidewalk.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#285A48]/10 text-xs text-[#5C6E6B] italic">
                  Community organizer tips coming soon.
                </div>
              </div>
            </Reveal>
          </div>

          {/* Quick Note on Early Copies */}
          <Reveal delay={250}>
            <div className="rounded-2xl bg-[#EBF3EF] border border-[#285A48]/15 p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-white text-[#285A48] flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#1D2A29]">
                  Need personalized flyers for your HOA, neighborhood, or organization?
                </p>
                <p className="text-xs sm:text-sm text-[#4A5D5A] mt-0.5">
                  Our team can provide custom co-branded print materials for your community pilot.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#285A48] text-white text-xs sm:text-sm font-semibold hover:bg-[#1E4336] transition-colors shrink-0"
              >
                <span>Request Early Copy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      <DownloadCta />
      <Footer />
    </div>
  );
}
