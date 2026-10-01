import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { RoadmapStepper } from "@/components/RoadmapStepper";
import { Reveal } from "@/components/Reveal";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Get Started — NeighborConnector™",
  description:
    "Putting NeighborConnector to work with our simple 8-step roadmap and quick start guide.",
};

const WHY_IT_MATTERS = [
  {
    title: "A simple “I’m okay”",
    text: "Can bring deep comfort and quiet reassurance to family and neighbors.",
  },
  {
    title: "Small needs are easier",
    text: "When you already have a trusted micro-circle, you always know who to ask.",
  },
  {
    title: "Transportation is smoother",
    text: "When neighbors see who is already headed that way for rides or errands.",
  },
  {
    title: "Everyone needs help sometimes",
    text: "And everyone has something valuable to offer in return.",
  },
  {
    title: "Support before crisis occurs",
    text: "Build your circle when life is calm so safety nets already exist when needs arise.",
  },
];

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased selection:bg-sprout selection:text-brand">
      <Navbar />

      <main className="pt-24 md:pt-28">

        {/* Hero Section */}
        <section className="relative py-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[radial-gradient(55%_45%_at_50%_0%,var(--color-sprout)_0%,transparent_65%)]"
          />

          <div className="container-page">
            <div className="max-w-3xl">
              <Reveal delay={0}>
                <span className="eyebrow">
                  <Rocket className="size-3.5" aria-hidden="true" />
                  Step-by-Step Roadmap
                </span>

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1]">
                  Putting <span className="text-gradient-brand">NeighborConnector™</span> to Work
                </h1>

                <p className="mt-5 text-lg sm:text-xl text-ink-soft leading-relaxed">
                  NeighborConnector™ helps you build strong relationships, get things done, and look out for one another — give help, get help — so you can live life with more confidence and connection.
                </p>
              </Reveal>
            </div>

            {/* Why It Matters Section */}
            <div className="mt-14">
              <Reveal delay={40}>
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-xl bg-sprout text-leaf-deep">
                    <Lightbulb className="size-5" />
                  </span>
                  <h2 className="text-2xl font-bold text-ink">
                    Why It Matters
                  </h2>
                </div>
              </Reveal>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {WHY_IT_MATTERS.map((item, idx) => (
                  <Reveal
                    key={item.title}
                    delay={idx * 60}
                    className="surface-card p-5 sm:p-6 transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 shrink-0 text-leaf-deep mt-0.5" />
                      <div>
                        <h3 className="text-base font-bold text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Quote Card */}
            <Reveal delay={100} className="mt-12">
              <div className="relative overflow-hidden rounded-3xl border border-hairline-leaf bg-gradient-to-br from-cream via-white to-sprout/40 p-7 sm:p-10 shadow-soft">
                <Quote className="size-10 text-leaf-deep/40 mb-3" />
                <blockquote className="text-lg sm:text-xl font-medium text-ink italic leading-relaxed">
                  “You may already have meaningful relationships. NeighborConnector™ gives you a shared place to coordinate everyday life, help one another, communicate, and stay further connected. Make a difference together.”
                </blockquote>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                  <span>Community Care Housing Foundation</span>
                </div>
              </div>
            </Reveal>

            {/* 8-STEP INTERACTIVE ROADMAP */}
            <div className="mt-16">
              <RoadmapStepper />
            </div>

            {/* Closing Punchline Banner */}
            <Reveal delay={120} className="mt-14">
              <div className="rounded-3xl bg-gradient-to-r from-brand to-brand-bright p-8 text-center text-white shadow-lift">
                <h3 className="text-2xl sm:text-3xl font-extrabold">
                  Build your Circle(s) before you need them.
                </h3>
                <p className="mt-2 text-base sm:text-lg text-white/85">
                  Stronger Together. Small steps. Big impact.
                </p>
                <div className="mt-6 flex justify-center">
                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-brand shadow-lift hover:bg-sprout transition-all hover:-translate-y-0.5"
                  >
                    Get the App Free
                    <ArrowRight className="size-4" />
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
