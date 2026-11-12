import Link from "next/link";
import {
  FileDown,
  FileSpreadsheet,
  FileText,
  Printer,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Downloadable Handouts — Resources | NeighborConnector™",
  description:
    "Free printable and downloadable guides, worksheets, and handouts for building and organizing your trusted circle.",
};

const HANDOUTS = [
  {
    title: "What, Who & Why It Matters Guide",
    badge: "FREE PDF Guide",
    description:
      "A complete foundational overview explaining what NeighborConnector is, who it serves, and the 5 key reasons why private micro-circles matter.",
    pages: "Interactive & Printable Guide",
    format: "PDF / Print",
    primaryAction: {
      label: "Download Guide (FREE)",
      href: "/why-it-matters",
      isPrint: false,
    },
    viewAction: {
      label: "View Guide Online",
      href: "/why-it-matters",
    },
    icon: FileText,
    accent: "sprout",
    accentColor: "text-leaf-deep",
  },
  {
    title: "Circle Living™ Companion Worksheet",
    badge: "FREE Interactive Worksheet",
    description:
      "A fillable and printable tool to name your circle, map out members, choose daily check-in preferences, and assign support tasks.",
    pages: "Printable Template & Worksheet",
    format: "PDF / Printable Sheet",
    primaryAction: {
      label: "Download Worksheet (FREE)",
      href: "/companion-worksheet",
      isPrint: false,
    },
    viewAction: {
      label: "Open Interactive Worksheet",
      href: "/companion-worksheet",
    },
    icon: FileSpreadsheet,
    accent: "mist",
    accentColor: "text-brand",
  },
  {
    title: "8-Step Roadmap Quick Reference",
    badge: "FREE Checklist",
    description:
      "A concise step-by-step checklist to guide you and your neighbors from downloading the app to running your first circle favor request.",
    pages: "Step-by-Step Overview",
    format: "Digital & Printable",
    primaryAction: {
      label: "View 8-Step Roadmap",
      href: "/how-it-works/get-started",
      isPrint: false,
    },
    viewAction: {
      label: "Interactive Stepper",
      href: "/how-it-works/get-started",
    },
    icon: FileDown,
    accent: "sprout",
    accentColor: "text-leaf-deep",
  },
];

export default function DownloadableHandoutsPage() {
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
                  <FileDown className="size-3.5" aria-hidden="true" />
                  Resources &amp; Toolkits
                </span>

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1]">
                  Downloadable <span className="text-gradient-brand">Handouts &amp; Guides</span>
                </h1>

                <p className="mt-4 text-lg sm:text-xl text-ink-soft leading-relaxed">
                  Free, easy-to-use printable worksheets, roadmaps, and foundational guides to help you introduce NeighborConnector™ to neighbors, friends, and family.
                </p>
              </Reveal>
            </div>

            {/* Handout Cards Grid */}
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {HANDOUTS.map((handout, idx) => {
                const Icon = handout.icon;
                return (
                  <Reveal
                    key={handout.title}
                    delay={idx * 80}
                    className="surface-card flex flex-col justify-between p-6 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-lift border border-hairline bg-white rounded-3xl"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`grid size-12 place-items-center rounded-2xl ${
                            handout.accent === "sprout"
                              ? "bg-sprout text-leaf-deep"
                              : "bg-mist text-brand"
                          }`}
                        >
                          <Icon className="size-6" />
                        </span>
                        <span className="rounded-full bg-cream border border-hairline px-3 py-1 text-xs font-bold text-brand">
                          {handout.badge}
                        </span>
                      </div>

                      <h2 className="mt-6 text-xl font-bold text-ink">
                        {handout.title}
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                        {handout.description}
                      </p>

                      <div className="mt-5 flex items-center gap-3 text-xs text-ink-soft pt-3 border-t border-hairline">
                        <span className="font-semibold text-brand">Format:</span>
                        <span>{handout.format}</span>
                        <span>•</span>
                        <span>{handout.pages}</span>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-2.5">
                      <Link
                        href={handout.primaryAction.href}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lift hover:bg-brand-bright transition-all"
                      >
                        <FileDown className="size-4" />
                        <span>{handout.primaryAction.label}</span>
                      </Link>

                      <Link
                        href={handout.viewAction.href}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-hairline bg-white px-5 py-2 text-xs font-semibold text-ink-soft hover:bg-mist hover:text-brand transition-colors"
                      >
                        <span>{handout.viewAction.label}</span>
                        <ExternalLink className="size-3" />
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Print & Share Tips Banner */}
            <Reveal delay={120} className="mt-14">
              <div className="rounded-3xl border border-hairline-leaf bg-gradient-to-br from-cream via-white to-sprout/40 p-7 sm:p-10 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-sprout text-leaf-deep">
                    <Printer className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-ink">
                      Printing &amp; Sharing With Neighbors
                    </h3>
                    <p className="text-sm text-ink-soft mt-0.5">
                      Every guide is printer-friendly with high-contrast formatting.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  Take these printouts to your next neighborhood block party, HOA gathering, church circle, or coffee meet. They make it simple to explain Circle Living™ and invite trusted folks to join your private pod.
                </p>
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

