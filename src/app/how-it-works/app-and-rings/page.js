import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Calendar,
  Car,
  CheckCircle2,
  Coffee,
  Heart,
  Home,
  Layers,
  Mail,
  MessageSquare,
  Package,
  PawPrint,
  Plane,
  Plus,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
  Wrench,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AppPodShowcase } from "@/components/AppPodShowcase";
import { ConcentricRingsMatcher } from "@/components/ConcentricRingsMatcher";
import { Reveal } from "@/components/Reveal";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Core Features — NeighborConnector™",
  description:
    "Explore how NeighborConnector works: daily check-ins, home help, rides, private chat, and the Concentric Rings of Support.",
};

const HOME_HELP_TAGS = [
  "Mowing & raking",
  "Snow removal",
  "Minor repairs",
  "Borrowing tools",
  "Trusted referrals",
  "Odd jobs",
];

const OCCASIONAL_HELP = [
  { icon: Mail, label: "Check mail & packages" },
  { icon: PawPrint, label: "Pet feeding & walking" },
  { icon: Package, label: "Pick up groceries" },
  { icon: Sprout, label: "Water indoor plants" },
];

const RIDESHARE_TAGS = [
  "Airport Drop-off",
  "Doctor Appointments",
  "Auto Repair Pickups",
  "Local Community Events",
];

const SOCIAL_TAGS = [
  "Coffee & tea dates",
  "Friendly company",
  "Outings & movies",
  "Happy hours & dinners",
  "Potlucks & walks",
  "Game nights & workshops",
];

export default function AppAndRingsPage() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased selection:bg-sprout selection:text-brand">
      <Navbar />

      <main className="pt-24 md:pt-28">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_50%_0%,var(--color-mist)_0%,transparent_65%)]"
          />

          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal delay={0}>
                <span className="eyebrow">
                  <Layers className="size-3.5" aria-hidden="true" />
                  Interactive Circle Platform
                </span>

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1]">
                  How <span className="text-gradient-brand">NeighborConnector™</span> Can Help
                </h1>

                <p className="mt-4 text-lg sm:text-xl text-ink-soft leading-relaxed">
                  Practical daily utility combined with quiet human reassurance.
                </p>
              </Reveal>
            </div>

            {/* Interactive App Pod Showcase Card */}
            <div className="mt-10">
              <AppPodShowcase />
            </div>

            {/* SECTION A: Help One Another & Stay Connected */}
            <div className="mt-20">
              <Reveal delay={0}>
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-brand" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
                    Help One Another & Stay Connected
                  </h2>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {/* 1. Daily Check-In */}
                <Reveal delay={0} className="surface-card p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-2xl bg-sprout text-leaf-deep">
                        <Heart className="size-5" />
                      </span>
                      <span className="rounded-full bg-mist px-2.5 py-0.5 text-xs font-semibold text-brand">
                        Reassurance
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-ink">
                      Daily Check-In <span className="text-xs font-normal text-ink-soft">(Optional)</span>
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      Helps your Circle know you’re safe and staying well. Not an emergency response service, but quiet human comfort.
                    </p>
                  </div>

                  <div className="mt-6 rounded-2xl bg-cream/70 p-3.5 border border-hairline">
                    <p className="text-xs font-bold text-brand uppercase tracking-wider">
                      Especially helpful when:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {["Living alone", "Traveling", "Not feeling well", "Peace of mind"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white px-2 py-0.5 text-xs text-ink shadow-2xs border border-hairline/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* 2. Home Help */}
                <Reveal delay={80} className="surface-card p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-2xl bg-mist text-brand">
                        <Wrench className="size-5" />
                      </span>
                      <span className="rounded-full bg-sprout px-2.5 py-0.5 text-xs font-semibold text-leaf-deep">
                        Location & Calendar
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-ink">Home Help</h3>

                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      Ask for or offer help with everyday chores around the home, yard, and neighborhood:
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {HOME_HELP_TAGS.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-mist/60 px-2.5 py-1 text-xs font-medium text-ink"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>

                {/* 3. Occasional Requests */}
                <Reveal delay={140} className="surface-card p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-2xl bg-sprout text-leaf-deep">
                        <Plane className="size-5" />
                      </span>
                      <span className="rounded-full bg-mist px-2.5 py-0.5 text-xs font-semibold text-brand">
                        While Away
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-ink">
                      Occasional Help Requests
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      Leaving town or temporarily tied up? Simple favors are covered effortlessly:
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {OCCASIONAL_HELP.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-2 rounded-xl bg-mist/50 p-2 text-xs text-ink font-medium"
                        >
                          <Icon className="size-3.5 shrink-0 text-brand" />
                          <span className="line-clamp-1">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </Reveal>
              </div>
            </div>

            {/* SECTION B: Coordinate Everyday Life & Social Joy */}
            <div className="mt-20">
              <Reveal delay={0}>
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-leaf-deep" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
                    Coordinate Everyday Life & Social Joy
                  </h2>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {/* 1. Appointments & Rideshare */}
                <Reveal delay={0} className="surface-card p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <span className="grid size-11 place-items-center rounded-2xl bg-sprout text-leaf-deep">
                      <Car className="size-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink">
                      Appointments & Rideshare
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      Coordinate reliable rides with people you know rather than strangers:
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {RIDESHARE_TAGS.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-mist/60 px-3 py-1 text-xs font-medium text-ink"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>

                {/* 2. Plan Events & Activities */}
                <Reveal delay={80} className="surface-card p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <span className="grid size-11 place-items-center rounded-2xl bg-cream text-brand border border-hairline">
                      <Coffee className="size-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink">
                      Plan Events & Activities
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      Simple coordination that keeps loneliness away and brings lively warmth back to weekly routines:
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {SOCIAL_TAGS.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-sprout/60 px-2.5 py-1 text-xs font-medium text-leaf-deep"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>

                {/* 3. Private Circle Chat */}
                <Reveal delay={140} className="surface-card p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <span className="grid size-11 place-items-center rounded-2xl bg-mist text-brand">
                      <MessageSquare className="size-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink">
                      Private Circle Chat & Photo Sharing
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      No tracking algorithms. Just meaningful photo memories, recipes, and updates shared strictly within your trusted pod.
                    </p>
                  </div>

                  <div className="mt-6 rounded-2xl bg-mist/60 p-4 border border-hairline text-xs text-ink-soft">
                    <p className="font-semibold text-brand">🔒 100% Encrypted & Private</p>
                    <p className="mt-1">
                      No advertisers, no suggested posts, and no public profile lookups.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* INTERACTIVE CONCENTRIC RINGS EXERCISE */}
            <div className="mt-20">
              <ConcentricRingsMatcher />
            </div>

            {/* Next Step Banner */}
            <Reveal delay={100} className="mt-14 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 surface-card p-4 sm:px-8 sm:py-5 border border-hairline">
                <span className="text-sm sm:text-base font-semibold text-ink">
                  Ready to see how to put NeighborConnector™ to work?
                </span>
                <Link
                  href="/how-it-works/get-started"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lift hover:bg-brand-bright transition-all hover:-translate-y-0.5"
                >
                  Next: 8-Step Roadmap
                  <ArrowRight className="size-4" />
                </Link>
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
