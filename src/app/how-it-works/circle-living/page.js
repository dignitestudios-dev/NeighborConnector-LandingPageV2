import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  HandHeart,
  Heart,
  HeartHandshake,
  Lock,
  MessageCircle,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Circle Living™ — NeighborConnector™",
  description:
    "Small circles. Real relationships. Meaningful support. Discover what NeighborConnector can do for you and your community.",
};

const PILLARS = [
  {
    icon: HandHeart,
    title: "Give & Receive Help",
    description: "Practical chores, yard care, home repairs, and trusted tool lending.",
    bg: "bg-sprout",
    color: "text-leaf-deep",
  },
  {
    icon: CalendarDays,
    title: "Coordinate Life",
    description: "Shared rides, doctor runs, calendar synchronization, and friendly check-ins.",
    bg: "bg-mist",
    color: "text-brand",
  },
  {
    icon: PartyPopper,
    title: "Enjoy Life Together",
    description: "Coffee walks, backyard potlucks, game nights, outings, and local hobbies.",
    bg: "bg-sprout",
    color: "text-leaf-deep",
  },
  {
    icon: MessageCircle,
    title: "Stay Connected",
    description: "Private micro-circle updates, safe group chats, and gentle reassurance pings.",
    bg: "bg-mist",
    color: "text-brand",
  },
];

const GUARANTEES = [
  "No public feeds",
  "No advertising",
  "No data selling",
  "Just small, trusted circles",
];

export default function CircleLivingPage() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased selection:bg-sprout selection:text-brand">
      <Navbar />

      <main className="pt-24 md:pt-28">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_50%_0%,var(--color-sprout)_0%,transparent_65%)]"
          />

          <div className="container-page">
            {/* Visual Hero Banner Card */}
            <Reveal delay={0}>
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift border border-hairline bg-surface-card">
                <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                  <img
                    src="/assets/photo-gathering.jpg"
                    alt="Multigenerational neighbors smiling together in a vibrant community garden"
                    className="h-full w-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent flex flex-col justify-end p-6 sm:p-10 md:p-12">
                    <span className="eyebrow bg-white/90 text-brand self-start shadow-soft">
                      <HeartHandshake className="size-3.5" aria-hidden="true" />
                      Circle Living™
                    </span>
                    <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                      Small circles. Real relationships. Meaningful support.
                    </h2>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Core Value Pitch */}
            <div className="mt-14 max-w-3xl">
              <Reveal delay={50}>
                <span className="eyebrow">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Purpose & Connection
                </span>

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1]">
                  What can <span className="text-gradient-brand">NeighborConnector™</span> Do for YOU and Others?
                </h1>

                <p className="mt-5 text-lg sm:text-xl leading-relaxed text-ink-soft">
                  NeighborConnector™ gives the people you know and trust a shared, private place to stay connected, help one another, make plans, and enjoy life together.
                </p>

                <div className="mt-4 flex items-center gap-2 text-base font-semibold text-leaf-deep">
                  <Heart className="size-5 shrink-0 fill-leaf-deep/20 text-leaf-deep" />
                  <span>More than messaging. A better way to stay intentionally connected.</span>
                </div>
              </Reveal>
            </div>

            {/* 4 Feature Pillars Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <Reveal
                    key={pillar.title}
                    delay={idx * 80}
                    className="surface-card group p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                  >
                    <span
                      className={`grid size-12 place-items-center rounded-2xl ${pillar.bg} ${pillar.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="size-6" aria-hidden="true" />
                    </span>

                    <h3 className="mt-5 text-xl font-bold text-ink">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {pillar.description}
                    </p>
                  </Reveal>
                );
              })}
            </div>

            {/* Mission Statement Banner */}
            <Reveal delay={120} className="mt-12">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand via-brand-bright to-leaf-deep p-6 sm:p-8 text-white shadow-lift flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/15 text-white shadow-soft backdrop-blur-md">
                    <Sparkles className="size-7" />
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      Build meaningful relationships. Support one another.
                    </h3>
                    <p className="text-sm text-white/85 mt-0.5">
                      Strengthen your neighborhood and family circle every day.
                    </p>
                  </div>
                </div>

                <Link
                  href="/how-it-works/core-features"
                  className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand shadow-lift hover:bg-sprout transition-all hover:-translate-y-0.5"
                >
                  Explore Core Features
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>

            {/* Trust & Privacy Guarantee */}
            <Reveal delay={160} className="mt-12">
              <div className="surface-card p-7 sm:p-10 border border-hairline">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-sprout text-leaf-deep">
                    <ShieldCheck className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-ink">
                      Our Trust & Privacy Guarantee
                    </h3>
                    <p className="text-sm text-ink-soft">
                      NeighborConnector™ is intentionally private. We do not monetize your relationships.
                    </p>
                  </div>
                </div>

                {/* 4 Trust Badges */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {GUARANTEES.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl bg-sprout/60 p-3 text-xs sm:text-sm font-semibold text-leaf-deep border border-hairline-leaf/60"
                    >
                      <CheckCircle2 className="size-4 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Clarification Box */}
                <div className="mt-6 rounded-2xl bg-mist/60 p-5 border border-hairline">
                  <p className="text-sm font-bold text-ink">
                    <span className="text-brand">Private. Secure. Trusted.</span> Your Circle(s)* or Circle Living™ is your safe space.
                  </p>
                  <p className="mt-1 text-xs text-ink-soft italic">
                    *A Circle is a small, private group of people you know and trust – family, friends, neighbors, or others you personally approve.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-hairline pt-6">
                  <span className="text-sm font-semibold text-leaf-deep">
                    Let’s make Circle Living™ an everyday part of life…
                  </span>

                  <Link
                    href="/how-it-works/core-features"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lift hover:bg-brand-bright transition-all hover:-translate-y-0.5"
                  >
                    Next: Core Features
                    <ArrowRight className="size-4" />
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
