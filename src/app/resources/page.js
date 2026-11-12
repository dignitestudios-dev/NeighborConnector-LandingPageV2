import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileDown,
  HelpCircle,
  Megaphone,
  Smartphone,
  Award,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Resources & Community Toolkits — NeighborConnector™",
  description:
    "Explore downloadable handouts, FAQs, app screenshots, outreach templates, and community acknowledgements for NeighborConnector™.",
};

const RESOURCE_SECTIONS = [
  {
    title: "Downloadable Handouts",
    description:
      "Printable guides, the What/Who/Why Guide, and the fillable Circle Living™ Companion Worksheet.",
    href: "/resources/downloadable-handouts",
    icon: FileDown,
    badge: "Print & PDF",
  },
  {
    title: "Frequently Asked Questions",
    description:
      "Answers about how circles work, member privacy, daily check-in setup, and safety guarantees.",
    href: "/resources/faqs",
    icon: HelpCircle,
    badge: "Knowledgebase",
  },
  {
    title: "App Screenshots & Walkthrough",
    description:
      "Visual walk-throughs of the circle home feed, daily reassurance check-ins, ride coordination, and chat.",
    href: "/resources/app-screenshots",
    icon: Smartphone,
    badge: "Visual Tour",
  },
  {
    title: "Community Outreach Materials",
    description:
      "Ready-to-use invitation scripts, flyer copy, and neighborhood announcement blurbs for HOAs and groups.",
    href: "/resources/outreach-materials",
    icon: Megaphone,
    badge: "Toolkits",
  },
  {
    title: "Acknowledgements & Partners",
    description:
      "Honoring Community Care Housing Foundation, pilot circle organizers, and volunteers across communities.",
    href: "/resources/acknowledgements",
    icon: Award,
    badge: "Community",
  },
];

export default function ResourcesIndexPage() {
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
                  <BookOpen className="size-3.5" aria-hidden="true" />
                  Community Hub
                </span>

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1]">
                  NeighborConnector™ <span className="text-gradient-brand">Resources</span>
                </h1>

                <p className="mt-4 text-lg sm:text-xl text-ink-soft leading-relaxed">
                  Everything you need to introduce NeighborConnector™ to neighbors, coordinate private circles, and answer everyday questions.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {RESOURCE_SECTIONS.map((res, idx) => {
                const Icon = res.icon;
                return (
                  <Reveal key={res.title} delay={idx * 60}>
                    <Link
                      href={res.href}
                      className="surface-card group flex h-full flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift border border-hairline bg-white rounded-3xl"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="grid size-12 place-items-center rounded-2xl bg-sprout text-leaf-deep transition-transform duration-300 group-hover:scale-110">
                            <Icon className="size-6" />
                          </span>
                          <span className="rounded-full bg-cream px-2.5 py-0.5 text-xs font-semibold text-brand border border-hairline">
                            {res.badge}
                          </span>
                        </div>

                        <h2 className="mt-5 text-xl font-bold text-ink group-hover:text-brand transition-colors">
                          {res.title}
                        </h2>

                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                          {res.description}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-brand pt-3 border-t border-hairline">
                        <span>Explore</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <DownloadCta />
      </main>

      <Footer />
    </div>
  );
}

