import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Heart,
  Layers,
  Lock,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { AppPodShowcase } from "@/components/AppPodShowcase";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "App Screenshots & Walkthrough — Resources | NeighborConnector™",
  description:
    "Preview the NeighborConnector™ interface: private circle feed, daily reassurance check-ins, ride coordination, chores, and group chat.",
};

const SCREENSHOT_FEATURES = [
  {
    title: "Private Circle Home & Feed",
    badge: "Home Hub",
    description:
      "A distraction-free central space showing only your verified circle members. No public posts, no algorithmic feeds, and no sponsor ads.",
    image: "/assets/how-it-works.png",
    caption: "Circle feed with daily updates and active neighbor requests",
    highlights: ["Verified members only", "Real-time updates", "Instant reassurance"],
  },
  {
    title: "Daily 'Safe' Check-In Flow",
    badge: "Reassurance",
    description:
      "One tap each morning lets everyone in your circle know you are okay. Especially comforting for older adults, people living alone, or travelers.",
    image: "/assets/features.png",
    caption: "Daily reassurance check-in and peace-of-mind confirmation",
    highlights: ["Optional daily check-in", "Quiet human comfort", "No GPS tracking"],
  },
  {
    title: "Neighborhood Chores & Ride Requests",
    badge: "Mutual Aid",
    description:
      "Simple favor requests for tool lending, clinic rides, snow shoveling, or grocery pickups. Circle members can volunteer in seconds.",
    image: "/assets/hero.png",
    caption: "Practical chore coordination with neighbors you actually know",
    highlights: ["Tool lending & home help", "Shared rides to clinics", "Calendar coordination"],
  },
];

export default function AppScreenshotsPage() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased selection:bg-sprout selection:text-brand">
      <Navbar />

      <main className="pt-24 md:pt-28">
        <section className="relative overflow-hidden py-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_50%_0%,var(--color-mist)_0%,transparent_65%)]"
          />

          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal delay={0}>
                <span className="eyebrow">
                  <Smartphone className="size-3.5" aria-hidden="true" />
                  Visual Tour
                </span>

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1]">
                  App <span className="text-gradient-brand">Screenshots &amp; Interface</span>
                </h1>

                <p className="mt-4 text-lg sm:text-xl text-ink-soft leading-relaxed">
                  Take a visual walk through NeighborConnector™. Clean, accessible, large-print friendly, and designed for genuine human connection.
                </p>
              </Reveal>
            </div>

            {/* Interactive Showcase */}
            <div className="mt-14">
              <Reveal delay={40}>
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand">
                      Interactive Preview
                    </span>
                    <h2 className="text-2xl font-bold text-ink">
                      Oak Maple Circle Simulation
                    </h2>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full bg-sprout px-3 py-1 text-xs font-bold text-leaf-deep border border-hairline-leaf">
                    Live Pod Demo
                  </span>
                </div>
              </Reveal>
              <AppPodShowcase />
            </div>

            {/* Detailed Screenshot Breakdown */}
            <div className="mt-20 space-y-16">
              {SCREENSHOT_FEATURES.map((item, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <Reveal key={item.title} delay={idx * 60}>
                    <div
                      className={`grid items-center gap-10 lg:grid-cols-12 ${
                        isEven ? "lg:grid-flow-dense" : ""
                      }`}
                    >
                      {/* Image Preview */}
                      <div
                        className={`surface-card overflow-hidden rounded-3xl border border-hairline p-4 sm:p-6 bg-cream/40 shadow-soft lg:col-span-6 ${
                          isEven ? "lg:col-start-7" : ""
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.caption}
                          className="w-full rounded-2xl object-cover shadow-2xs hover:scale-[1.02] transition-transform duration-500"
                        />
                        <p className="mt-3 text-center text-xs text-ink-soft italic">
                          {item.caption}
                        </p>
                      </div>

                      {/* Content Description */}
                      <div
                        className={`lg:col-span-6 ${
                          isEven ? "lg:col-start-1" : ""
                        }`}
                      >
                        <span className="rounded-full bg-sprout px-3 py-1 text-xs font-bold text-leaf-deep border border-hairline-leaf">
                          {item.badge}
                        </span>
                        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-ink">
                          {item.title}
                        </h2>
                        <p className="mt-3 text-base leading-relaxed text-ink-soft">
                          {item.description}
                        </p>

                        <div className="mt-6 space-y-2">
                          {item.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                              <CheckCircle2 className="size-4 text-leaf-deep shrink-0" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <Reveal delay={100} className="mt-16 text-center">
              <div className="surface-card p-8 rounded-3xl border border-hairline bg-gradient-to-r from-cream via-white to-mist max-w-3xl mx-auto shadow-soft">
                <h3 className="text-xl sm:text-2xl font-bold text-ink">
                  Ready to experience it yourself?
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  NeighborConnector™ is completely free on iOS and Android with no ads.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lift hover:bg-brand-bright transition-all"
                  >
                    <span>Get the Free App</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <Link
                    href="/how-it-works/get-started"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-6 py-2.5 text-sm font-semibold text-brand hover:bg-mist transition-colors"
                  >
                    <span>8-Step Roadmap</span>
                  </Link>
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

