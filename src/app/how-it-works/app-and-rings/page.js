import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Heart,
  HandHeart,
  CalendarDays,
  PartyPopper,
  MessageCircle,
  FileText,
  Lightbulb,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  Plane,
  Car,
  Coffee,
  MessageSquare,
  Lock,
  Mail,
  PawPrint,
  Package,
  Sprout,
  Compass,
  FileDown,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ConcentricRingsMatcher } from "@/components/ConcentricRingsMatcher";
import { Reveal } from "@/components/Reveal";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Explore the Possibilities — NeighborConnector™",
  description:
    "Explore the Possibilities combines How NeighborConnector™ Can Help, Who Comes to Mind, What NeighborConnector™ Can Do for YOU and Others and Why It Matters.",
};

/* --- PART 2 DATA --- */
const WHAT_NC_CAN_DO_PILLARS = [
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

/* --- PART 3 DATA: WHO COMES TO MIND? --- */
const WHO_COMES_TO_MIND_LIST = [
  "People living alone",
  "Family members",
  "Close friends",
  "Next-door neighbors",
  "Someone on a trip",
  "Snowbirds",
  "Church & community friends",
  "Someone grieving",
  "Haven't seen lately",
  "Needs practical help",
];

/* --- PART 4 DATA: WHAT NEIGHBORCONNECTOR CAN DO FOR YOU AND OTHERS? --- */
const WHAT_NC_CAN_DO_LIST = [
  "Let trusted folks know I am okay",
  "Help with chores around the house",
  "Coordinate or offer a ride",
  "Invite someone for coffee or tea",
  "Keep plans in one shared calendar",
  "Know what others in my circle need",
];

/* --- PART 5 DATA: WHY IT MATTERS GUIDE BLOCK --- */
const WHY_IT_MATTERS_POINTS = [
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

export default function ExploreThePossibilitiesPage() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased selection:bg-sprout selection:text-brand">
      <Navbar />

      <main className="pt-24 md:pt-28">
        {/* ============================================================== */}
        {/* PART 1 – INTRO                                                 */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden py-12 md:py-20 border-b border-hairline bg-gradient-to-b from-mist/30 via-cream/20 to-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_50%_0%,var(--color-sprout)_0%,transparent_65%)]"
          />

          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal delay={0}>
                <span className="eyebrow">
                  <Compass className="size-3.5" aria-hidden="true" />
                  Comprehensive Guide
                </span>

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1]">
                  Explore the <span className="text-gradient-brand">Possibilities</span>
                </h1>

                <p className="mt-5 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl mx-auto">
                  Explore the Possibilities combines How NeighborConnector™ Can Help, Who Comes to Mind, What NeighborConnector™ Can Do for YOU and Others and Why It Matters.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/why-it-matters"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lift hover:bg-brand-bright transition-all hover:-translate-y-0.5"
                  >
                    <FileDown className="size-4" />
                    <span>Download the What, Who &amp; Why It Matters Guide (FREE)</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PART 2 – HOW NEIGHBORCONNECTOR™ CAN HELP?                     */}
        {/* ============================================================== */}
        <section className="py-16 md:py-24 border-b border-hairline">
          <div className="container-page">
            <div className="max-w-3xl">
              <Reveal delay={0}>
                <span className="eyebrow">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Purpose &amp; Connection
                </span>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  How <span className="text-gradient-brand">NeighborConnector™</span> Can Help?
                </h2>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft">
                  NeighborConnector™ gives the people you know and trust a shared, private place to stay connected, help one another, make plans, and enjoy life together.
                </p>
              </Reveal>
            </div>

            {/* The 4 Cards from "What can NC Do for YOU and Others?" */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHAT_NC_CAN_DO_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <Reveal
                    key={pillar.title}
                    delay={idx * 60}
                    className="surface-card group p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift border border-hairline bg-white rounded-3xl"
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

            {/* Detailed Cards from "How NC Can Help": Quiet Human Reassurance, Everyday Practical Help, Intentionally Private, Help One Another & Stay Connected, Coordinate Everyday Life & Social Joy */}
            <div className="mt-16 space-y-14">
              {/* 3 Core Benefit Cards */}
              <div className="grid gap-6 md:grid-cols-3">
                {/* 1. Quiet Human Reassurance */}
                <Reveal delay={0} className="surface-card p-6 sm:p-7 flex flex-col justify-between border border-hairline bg-white rounded-3xl shadow-soft">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-sprout text-leaf-deep">
                        <Heart className="size-6" />
                      </span>
                      <span className="rounded-full bg-mist px-2.5 py-0.5 text-xs font-semibold text-brand">
                        Reassurance
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-ink">
                      Quiet Human Reassurance
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      Daily optional check-ins that let close family and trusted neighbors know you’re safe without invasive tracking.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5 pt-3 border-t border-hairline">
                    <span className="rounded-md bg-mist px-2.5 py-1 text-xs font-semibold text-brand">Living alone</span>
                    <span className="rounded-md bg-mist px-2.5 py-1 text-xs font-semibold text-brand">Traveling</span>
                    <span className="rounded-md bg-mist px-2.5 py-1 text-xs font-semibold text-brand">Peace of mind</span>
                  </div>
                </Reveal>

                {/* 2. Everyday Practical Help */}
                <Reveal delay={60} className="surface-card p-6 sm:p-7 flex flex-col justify-between border border-hairline bg-white rounded-3xl shadow-soft">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-mist text-brand">
                        <Wrench className="size-6" />
                      </span>
                      <span className="rounded-full bg-sprout px-2.5 py-0.5 text-xs font-semibold text-leaf-deep">
                        Practical Help
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-ink">
                      Everyday Practical Help
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      Borrow tools, coordinate errands, or get a hand with snow shoveling and lawn care from folks right on your street.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5 pt-3 border-t border-hairline">
                    <span className="rounded-md bg-sprout px-2.5 py-1 text-xs font-semibold text-leaf-deep">Tool lending</span>
                    <span className="rounded-md bg-sprout px-2.5 py-1 text-xs font-semibold text-leaf-deep">Yard care</span>
                    <span className="rounded-md bg-sprout px-2.5 py-1 text-xs font-semibold text-leaf-deep">Shared rides</span>
                  </div>
                </Reveal>

                {/* 3. Intentionally Private */}
                <Reveal delay={120} className="rounded-3xl border border-hairline-leaf bg-gradient-to-br from-sprout/60 via-white to-cream p-6 sm:p-7 shadow-soft flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-2xl bg-leaf-deep text-white shadow-soft">
                        <Lock className="size-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-ink">Intentionally Private</h3>
                        <p className="text-xs text-ink-soft">Zero ads · Zero public feeds</p>
                      </div>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-ink-soft">
                      Your circle is strictly invite-only. You approve every member who joins, keeping neighborhood conversations genuine and protected.
                    </p>
                  </div>

                  <div className="mt-6 rounded-2xl bg-white/80 p-3 text-xs font-semibold text-leaf-deep border border-hairline-leaf/60">
                    🛡️ Verified micro-circles of 2–10 trusted people
                  </div>
                </Reveal>
              </div>

              {/* SECTION: Help One Another & Stay Connected */}
              <div className="rounded-3xl border border-hairline bg-cream/30 p-6 sm:p-9 shadow-soft">
                <Reveal delay={0}>
                  <div className="flex items-center gap-2.5">
                    <span className="size-3 rounded-full bg-brand" />
                    <h3 className="text-2xl font-bold text-ink">
                      Help One Another &amp; Stay Connected
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-ink-soft">
                    Practical tools built for real neighbors: morning check-ins, home help, and occasional favor requests.
                  </p>
                </Reveal>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {/* Daily Check-In Subcard */}
                  <div className="surface-card p-5 sm:p-6 rounded-2xl border border-hairline bg-white">
                    <span className="grid size-10 place-items-center rounded-xl bg-sprout text-leaf-deep">
                      <Heart className="size-5" />
                    </span>
                    <h4 className="mt-4 text-base font-bold text-ink">Daily Check-In (Optional)</h4>
                    <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                      Helps your circle know you’re safe and well. Quiet human reassurance, not an emergency monitoring service.
                    </p>
                  </div>

                  {/* Home Help Subcard */}
                  <div className="surface-card p-5 sm:p-6 rounded-2xl border border-hairline bg-white">
                    <span className="grid size-10 place-items-center rounded-xl bg-mist text-brand">
                      <Wrench className="size-5" />
                    </span>
                    <h4 className="mt-4 text-base font-bold text-ink">Home &amp; Yard Chores</h4>
                    <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                      Ask for or offer help with snow removal, raking, changing hard-to-reach lightbulbs, or tool lending.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {HOME_HELP_TAGS.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded-md bg-mist/60 px-2 py-0.5 text-[11px] font-medium text-ink">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Occasional Requests Subcard */}
                  <div className="surface-card p-5 sm:p-6 rounded-2xl border border-hairline bg-white">
                    <span className="grid size-10 place-items-center rounded-xl bg-sprout text-leaf-deep">
                      <Plane className="size-5" />
                    </span>
                    <h4 className="mt-4 text-base font-bold text-ink">Occasional Favors</h4>
                    <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                      Mail checking, pet feeding, and plant watering while you are traveling or tied up.
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-1.5">
                      {OCCASIONAL_HELP.slice(0, 2).map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.label} className="flex items-center gap-1.5 rounded-lg bg-mist/50 p-1.5 text-[11px] text-ink font-medium">
                            <Icon className="size-3 shrink-0 text-brand" />
                            <span className="truncate">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Coordinate Everyday Life & Social Joy */}
              <div className="rounded-3xl border border-hairline bg-mist/30 p-6 sm:p-9 shadow-soft">
                <Reveal delay={0}>
                  <div className="flex items-center gap-2.5">
                    <span className="size-3 rounded-full bg-leaf-deep" />
                    <h3 className="text-2xl font-bold text-ink">
                      Coordinate Everyday Life &amp; Social Joy
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-ink-soft">
                    Keep loneliness away and bring warm, intentional companionship back into weekly life.
                  </p>
                </Reveal>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {/* Appointments & Rideshare */}
                  <div className="surface-card p-5 sm:p-6 rounded-2xl border border-hairline bg-white">
                    <span className="grid size-10 place-items-center rounded-xl bg-sprout text-leaf-deep">
                      <Car className="size-5" />
                    </span>
                    <h4 className="mt-4 text-base font-bold text-ink">Appointments &amp; Rides</h4>
                    <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                      Coordinate clinic visits, grocery errands, or airport drops with people you actually know.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {RIDESHARE_TAGS.slice(0, 2).map((tag) => (
                        <span key={tag} className="rounded-full bg-mist/60 px-2.5 py-0.5 text-[11px] font-medium text-ink">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Plan Events & Activities */}
                  <div className="surface-card p-5 sm:p-6 rounded-2xl border border-hairline bg-white">
                    <span className="grid size-10 place-items-center rounded-xl bg-cream text-brand border border-hairline">
                      <Coffee className="size-5" />
                    </span>
                    <h4 className="mt-4 text-base font-bold text-ink">Plan Events &amp; Social Joy</h4>
                    <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                      Afternoon walks, coffee dates, backyard potlucks, and shared hobby outings.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {SOCIAL_TAGS.slice(0, 2).map((tag) => (
                        <span key={tag} className="rounded-lg bg-sprout/60 px-2 py-0.5 text-[11px] font-medium text-leaf-deep">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Private Circle Chat */}
                  <div className="surface-card p-5 sm:p-6 rounded-2xl border border-hairline bg-white">
                    <span className="grid size-10 place-items-center rounded-xl bg-mist text-brand">
                      <MessageSquare className="size-5" />
                    </span>
                    <h4 className="mt-4 text-base font-bold text-ink">Private Pod Chat</h4>
                    <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                      Safe group chat and photo sharing with no algorithmic feeds or stranger comments.
                    </p>
                    <div className="mt-3 rounded-xl bg-mist/50 p-2 text-[11px] text-ink-soft">
                      🔒 100% private to your circle
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PART 3 – WHO COMES TO MIND?                                    */}
        {/* ============================================================== */}
        <section className="py-16 md:py-20 border-b border-hairline bg-cream/40">
          <div className="container-page">
            <div className="max-w-3xl">
              <Reveal delay={0}>
                <span className="eyebrow">
                  <Users className="size-3.5" aria-hidden="true" />
                  Ring 1
                </span>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Who Comes to Mind?
                </h2>

                <p className="mt-3 text-base sm:text-lg text-ink-soft leading-relaxed">
                  Think about the people in your life who might appreciate closer connection, peace of mind, or a friendly helping hand:
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {WHO_COMES_TO_MIND_LIST.map((item, idx) => (
                <Reveal key={item} delay={idx * 40}>
                  <div className="surface-card p-4 rounded-2xl border border-hairline bg-white shadow-xs hover:border-brand-light transition-all flex items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-sprout text-leaf-deep font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-ink leading-snug">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PART 4 – WHAT NEIGHBORCONNECTOR™ CAN DO FOR YOU AND OTHERS?    */}
        {/* ============================================================== */}
        <section className="py-16 md:py-20 border-b border-hairline bg-white">
          <div className="container-page">
            <div className="max-w-3xl">
              <Reveal delay={0}>
                <span className="eyebrow">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Ring 2
                </span>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  What <span className="text-gradient-brand">NeighborConnector™</span> Can Do for YOU and Others?
                </h2>

                <p className="mt-3 text-base sm:text-lg text-ink-soft leading-relaxed">
                  Simple everyday intentions made effortless through shared private circles:
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_NC_CAN_DO_LIST.map((item, idx) => (
                <Reveal key={item} delay={idx * 50}>
                  <div className="surface-card p-5 rounded-2xl border border-hairline bg-mist/20 shadow-xs hover:shadow-soft transition-all flex items-start gap-3.5">
                    <CheckCircle2 className="size-5 shrink-0 text-leaf-deep mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-ink leading-snug">
                        {item}
                      </h3>
                      <p className="text-xs text-ink-soft mt-1">
                        Coordinated effortlessly within your private pod.
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PART 5 – WHY IT MATTERS?                                       */}
        {/* ============================================================== */}
        <section className="py-16 md:py-24 border-b border-hairline bg-cream/30">
          <div className="container-page">
            <Reveal delay={0}>
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-xl bg-sprout text-leaf-deep">
                  <Lightbulb className="size-5" />
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-ink">
                  What, Who &amp; Why It Matters Guide
                </h2>
              </div>
              <p className="mt-3 text-base text-ink-soft max-w-2xl">
                Five core principles that guide why private micro-circles create lasting security and companionship.
              </p>
            </Reveal>

            {/* 5 Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_IT_MATTERS_POINTS.map((item, idx) => (
                <Reveal
                  key={item.title}
                  delay={idx * 60}
                  className="surface-card p-5 sm:p-6 rounded-2xl border border-hairline bg-white shadow-xs transition-transform hover:-translate-y-1"
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
          </div>
        </section>

        {/* ============================================================== */}
        {/* PART 6 & 7 – INTERACTIVE CIRCLE TOOL & PULLING EVERYTHING TOGETHER */}
        {/* ============================================================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal delay={0}>
                <span className="eyebrow">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Interactive Circle Tool
                </span>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                  Pulling Everything Together
                </h2>
              </Reveal>
            </div>

            {/* Step 1: Concentric Rings of Support exactly as it is */}
            <div className="mt-12">
              <ConcentricRingsMatcher />
            </div>

            {/* Step 2: Under rings -> Quick Circle Actions (Ask Favor, Plan Outing, Circle Chat) */}
            <div className="mt-14 max-w-2xl mx-auto">
              <Reveal delay={40}>
                <div className="surface-card p-6 rounded-3xl border border-hairline bg-mist/30 shadow-soft">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand text-center mb-4">
                    Quick Circle Actions
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-hairline bg-white p-3.5 flex flex-col items-center gap-1.5 shadow-2xs">
                      <span className="grid size-9 place-items-center rounded-xl bg-mist text-brand">
                        <Wrench className="size-4" />
                      </span>
                      <span className="text-xs font-bold text-ink">Ask Favor</span>
                    </div>

                    <div className="rounded-2xl border border-hairline bg-white p-3.5 flex flex-col items-center gap-1.5 shadow-2xs">
                      <span className="grid size-9 place-items-center rounded-xl bg-sprout text-leaf-deep">
                        <Calendar className="size-4" />
                      </span>
                      <span className="text-xs font-bold text-ink">Plan Outing</span>
                    </div>

                    <div className="rounded-2xl border border-hairline bg-white p-3.5 flex flex-col items-center gap-1.5 shadow-2xs">
                      <span className="grid size-9 place-items-center rounded-xl bg-cream text-brand border border-hairline">
                        <MessageCircle className="size-4" />
                      </span>
                      <span className="text-xs font-bold text-ink">Circle Chat</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Step 3: Under that -> Oak Maple Circle Example */}
            <div className="mt-14 max-w-3xl mx-auto">
              <Reveal delay={80}>
                <div className="surface-card p-6 sm:p-8 rounded-3xl border border-hairline bg-white shadow-soft">
                  <div className="flex items-center justify-between border-b border-hairline pb-4">
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-2xl bg-brand text-white font-extrabold text-sm shadow-soft">
                        NC
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-ink">Oak Maple Circle</h3>
                          <span className="inline-flex items-center gap-1 rounded-full bg-sprout px-2.5 py-0.5 text-xs font-bold text-leaf-deep border border-hairline-leaf">
                            Active Pod
                          </span>
                        </div>
                        <p className="text-xs text-ink-soft">
                          6 trusted neighbors · Private invite-only space
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Oak Maple Circle live feed snippets */}
                  <div className="mt-5 space-y-3">
                    <div className="rounded-2xl border border-hairline bg-mist/30 p-4">
                      <div className="flex items-center justify-between text-xs text-ink-soft">
                        <span className="font-bold text-brand flex items-center gap-1">
                          <Heart className="size-3.5 fill-brand/20 text-brand" />
                          Daily Safe Check-in
                        </span>
                        <span>8:15 AM</span>
                      </div>
                      <p className="mt-1.5 text-sm font-semibold text-ink">
                        Eleanor V. marked safe &amp; well: “Morning walk with Bella in the garden!”
                      </p>
                    </div>

                    <div className="rounded-2xl border border-hairline bg-sprout/20 p-4">
                      <div className="flex items-center justify-between text-xs text-ink-soft">
                        <span className="font-bold text-leaf-deep flex items-center gap-1">
                          <Car className="size-3.5 text-leaf-deep" />
                          Coordinated Ride Request
                        </span>
                        <span className="font-bold text-leaf-deep">Thursday 2:00 PM</span>
                      </div>
                      <p className="mt-1.5 text-sm font-semibold text-ink">
                        Clinic Ride: David K. volunteered to drive Eleanor.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* PART 7 – BUTTON TO CIRCLE LIVING™ */}
            <Reveal delay={100} className="mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 surface-card p-5 sm:px-8 sm:py-5 border border-hairline rounded-3xl shadow-lift max-w-xl mx-auto">
                <span className="text-sm sm:text-base font-semibold text-ink">
                  Ready for Circle Living™?
                </span>
                <Link
                  href="/how-it-works/circle-living"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lift hover:bg-brand-bright transition-all hover:-translate-y-0.5 shrink-0"
                >
                  Next: Circle Living™
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
