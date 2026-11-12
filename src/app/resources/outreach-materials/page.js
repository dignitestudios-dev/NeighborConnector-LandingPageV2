import Link from "next/link";
import {
  FileText,
  HeartHandshake,
  Mail,
  Megaphone,
  MessageSquare,
  Printer,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Outreach Materials & Templates — Resources | NeighborConnector™",
  description:
    "Templates, flyers, email scripts, and printable messages to help you invite neighbors and organize a private circle.",
};

const TEMPLATES = [
  {
    category: "Flyers & Door Hangers",
    title: "Neighborhood Introduction Flyer",
    description:
      "A friendly, clear 1-page printable flyer you can put in mailboxes or hand to neighbors to introduce the concept of private circles.",
    badge: "Printable Flyer",
    sampleText:
      "“Hi Neighbor! A few of us on our street are using NeighborConnector™ — a free, private app with zero ads where we can check in, borrow tools, and coordinate rides. We'd love for you to join our circle!”",
    ctaLabel: "Download Flyer Template (FREE)",
    ctaHref: "/resources/downloadable-handouts",
  },
  {
    category: "Email & Text Invites",
    title: "Family & Close Friends Invite Script",
    description:
      "A warm text or email message you can copy and send to family members, adult children, or elderly parents.",
    badge: "Copyable Script",
    sampleText:
      "“Hey! I set up a private circle on NeighborConnector™ for us. It lets us do quick morning check-ins so we know everyone is doing well, without cluttering group texts. It's totally private and free — here's our invite code!”",
    ctaLabel: "Open Circle Living™ Guide",
    ctaHref: "/how-it-works/circle-living",
  },
  {
    category: "Community & HOA Outreach",
    title: "Block Association & Church Group Notice",
    description:
      "Formal announcement text suitable for HOA newsletters, church bulletins, senior center boards, or community centers.",
    badge: "Newsletter Blurb",
    sampleText:
      "“Community Care Housing Foundation has introduced NeighborConnector™ — a free, privacy-first mobile tool that helps residents form small micro-circles (2–10 people) for mutual support, snow removal, ride assistance, and daily peace of mind.”",
    ctaLabel: "Learn About Our Mission",
    ctaHref: "/#about",
  },
];

export default function OutreachMaterialsPage() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased selection:bg-sprout selection:text-brand">
      <Navbar />

      <main className="pt-24 md:pt-28">
        <section className="relative overflow-hidden py-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_50%_0%,var(--color-sprout)_0%,transparent_65%)]"
          />

          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal delay={0}>
                <span className="eyebrow">
                  <Megaphone className="size-3.5" aria-hidden="true" />
                  Community Toolkits
                </span>

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1]">
                  Community <span className="text-gradient-brand">Outreach Materials</span>
                </h1>

                <p className="mt-4 text-lg sm:text-xl text-ink-soft leading-relaxed">
                  Ready-to-use invitation scripts, flyer copy, and neighborhood announcement blurbs to make starting your trusted circle easy and welcoming.
                </p>
              </Reveal>
            </div>

            {/* Template Cards */}
            <div className="mt-14 space-y-8">
              {TEMPLATES.map((tmpl, idx) => (
                <Reveal key={tmpl.title} delay={idx * 70}>
                  <div className="surface-card p-6 sm:p-9 border border-hairline bg-white shadow-soft rounded-3xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline pb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand">
                          {tmpl.category}
                        </span>
                        <h2 className="mt-1 text-xl sm:text-2xl font-bold text-ink">
                          {tmpl.title}
                        </h2>
                      </div>
                      <span className="rounded-full bg-sprout px-3 py-1 text-xs font-bold text-leaf-deep border border-hairline-leaf">
                        {tmpl.badge}
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                      {tmpl.description}
                    </p>

                    {/* Sample Message Box */}
                    <div className="mt-5 rounded-2xl bg-cream/70 border border-hairline p-4 sm:p-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-ink-soft block mb-2">
                        Suggested Wording:
                      </span>
                      <p className="text-sm italic text-ink leading-relaxed">
                        {tmpl.sampleText}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-hairline">
                      <span className="text-xs text-ink-soft">
                        Free to customize and share in your local neighborhood.
                      </span>
                      <Link
                        href={tmpl.ctaHref}
                        className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-xs font-semibold text-white shadow-lift hover:bg-brand-bright transition-all"
                      >
                        <span>{tmpl.ctaLabel}</span>
                        <Share2 className="size-3" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Tips Banner */}
            <Reveal delay={120} className="mt-14">
              <div className="rounded-3xl border border-hairline bg-gradient-to-r from-mist/80 via-white to-sprout/40 p-7 sm:p-10 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-brand text-white">
                    <Users className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-ink">
                      Best Practices for Inviting Neighbors
                    </h3>
                    <p className="text-sm text-ink-soft mt-0.5">
                      Start small: 2 or 3 trusted neighbors are all you need to begin.
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs leading-relaxed text-ink-soft">
                  <div className="rounded-2xl bg-white p-4 border border-hairline">
                    <strong className="text-ink block mb-1">1. Keep it Local</strong>
                    Begin with the neighbor directly next door or across the hall who shares your driveway or entrance.
                  </div>
                  <div className="rounded-2xl bg-white p-4 border border-hairline">
                    <strong className="text-ink block mb-1">2. Emphasize Privacy</strong>
                    Reassure them that there are zero ads, zero public posts, and that only approved members can see the pod.
                  </div>
                  <div className="rounded-2xl bg-white p-4 border border-hairline">
                    <strong className="text-ink block mb-1">3. Start With Reassurance</strong>
                    Point out the simple morning check-in feature as an effortless way to keep peace of mind.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <DownloadCta />
      </main>

      <Footer />
    </div>
  );
}

