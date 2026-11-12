import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Heart,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Acknowledgements & Partners — Resources | NeighborConnector™",
  description:
    "Honoring the contributors, nonprofit partners, volunteers, and community champions who make NeighborConnector™ possible.",
};

const ACKNOWLEDGEMENTS = [
  {
    category: "Nonprofit Leadership",
    name: "Community Care Housing Foundation",
    role: "Founding Nonprofit Sponsor",
    description:
      "Dedicated to affordable housing and stronger, more supportive communities. Community Care Housing Foundation funds and supports NeighborConnector™ as a 100% free community service.",
    icon: Building2,
    badge: "Founding Sponsor",
  },
  {
    category: "Community Champions",
    name: "Neighborhood Circle Leaders & Pilot Testers",
    role: "Early Adopters & Advisory Group",
    description:
      "Our heartfelt thanks to the dozens of pilot circles, block coordinators, HOA champions, and faith community leaders who tested early prototypes and guided our feature roadmap.",
    icon: Users2,
    badge: "Community Advisory",
  },
  {
    category: "Volunteer Caregivers",
    name: "Local Family & Senior Care Volunteers",
    role: "Mutual Aid Contributors",
    description:
      "Every neighbor who drives an elderly friend to a doctor appointment, checks in on a neighbor living alone, or shovels a snowy sidewalk embodies the true spirit of Circle Living™.",
    icon: HeartHandshake,
    badge: "Daily Heroes",
  },
  {
    category: "Accessibility & Privacy Advocacy",
    name: "Privacy & Inclusive Design Advisors",
    role: "Technology & Ethics Counsel",
    description:
      "Guidance from accessibility advocates and privacy researchers who ensured our interface is large-print friendly, ad-free, and strictly protects member data.",
    icon: ShieldCheck,
    badge: "Trust & Ethics",
  },
];

export default function AcknowledgementsPage() {
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
                  <Award className="size-3.5" aria-hidden="true" />
                  Gratitude &amp; Partnership
                </span>

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1]">
                  Acknowledgements &amp; <span className="text-gradient-brand">Community Gratitude</span>
                </h1>

                <p className="mt-4 text-lg sm:text-xl text-ink-soft leading-relaxed">
                  NeighborConnector™ is made possible through the generosity of nonprofit partners, volunteers, local community organizers, and caring neighbors everywhere.
                </p>
              </Reveal>
            </div>

            {/* Acknowledgement Cards Grid */}
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {ACKNOWLEDGEMENTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.name} delay={idx * 80}>
                    <div className="surface-card p-6 sm:p-9 border border-hairline bg-white shadow-soft rounded-3xl h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="grid size-12 place-items-center rounded-2xl bg-sprout text-leaf-deep shadow-2xs">
                            <Icon className="size-6" />
                          </span>
                          <span className="rounded-full bg-cream border border-hairline px-3 py-1 text-xs font-bold text-brand">
                            {item.badge}
                          </span>
                        </div>

                        <span className="mt-6 block text-xs font-bold uppercase tracking-wider text-brand">
                          {item.category}
                        </span>

                        <h2 className="mt-1 text-xl sm:text-2xl font-bold text-ink">
                          {item.name}
                        </h2>

                        <p className="text-xs font-semibold text-leaf-deep mt-0.5">
                          {item.role}
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between text-xs text-ink-soft">
                        <span>Thank you for making circles stronger</span>
                        <Heart className="size-4 text-leaf-deep fill-sprout" />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Non-Profit Mission Card */}
            <Reveal delay={120} className="mt-14">
              <div className="rounded-3xl border border-hairline-leaf bg-gradient-to-br from-cream via-white to-sprout/40 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-soft">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sprout px-3 py-1 text-xs font-bold text-leaf-deep border border-hairline-leaf">
                  <Sparkles className="size-3.5" />
                  Our Ongoing Promise
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-ink">
                  100% Free · Community Powered · No Ads
                </h3>
                <p className="mt-3 text-base text-ink-soft max-w-2xl mx-auto leading-relaxed">
                  We believe essential human connection and neighborhood mutual aid should never be locked behind paywalls or exploited with advertisements. NeighborConnector™ will always remain a free gift to communities.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href="https://www.communitycarehousing.org"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lift hover:bg-brand-bright transition-all"
                  >
                    <span>Visit Community Care Housing</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <a
                    href="mailto:Info@CommunityCareHousing.org"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-6 py-2.5 text-sm font-semibold text-ink-soft hover:bg-mist hover:text-brand transition-colors"
                  >
                    <span>Get in Touch</span>
                  </a>
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

