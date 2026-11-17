import Link from "next/link";
import {
  CalendarDays,
  Car,
  CheckCircle2,
  Coffee,
  Heart,
  HeartHandshake,
  Home,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal } from "./Reveal";

/* Part 3 list: Who Comes to Mind? */
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

/* Part 4 list: What NeighborConnector Can Do for YOU and Others */
const WHAT_NC_CAN_DO_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Let trusted folks know I am okay",
    description: "Quiet morning check-ins and reassurance without constant phone tag.",
  },
  {
    icon: Home,
    title: "Help with chores around the house",
    description: "Lending tools, small repairs, snow shoveling, or garden care.",
  },
  {
    icon: Car,
    title: "Coordinate or offer a ride",
    description: "Doctor appointments, errands, church, or trips to the store.",
  },
  {
    icon: Coffee,
    title: "Invite someone for coffee or tea",
    description: "Spontaneous social touchpoints, porch visits, and friendly walks.",
  },
  {
    icon: CalendarDays,
    title: "Keep plans in one shared calendar",
    description: "Simple coordinated outings and circle events with no calendar confusion.",
  },
  {
    icon: HeartHandshake,
    title: "Know what others in my circle need",
    description: "Discreet visibility into how and when to lend a supportive hand.",
  },
];

/* Part 5: Why It Matters cards */
const WHY_IT_MATTERS_ITEMS = [
  {
    title: "A simple “I’m okay”",
    text: "Can bring deep comfort and quiet reassurance to family and neighbors every single day.",
  },
  {
    title: "Small needs are easier",
    text: "When you already have a trusted micro-circle, you always know who to turn to without feeling like a burden.",
  },
  {
    title: "Transportation is smoother",
    text: "When neighbors see who is already headed that way for rides, groceries, or local appointments.",
  },
  {
    title: "Everyone needs help sometimes",
    text: "And everyone has something valuable, warm, and meaningful to offer in return.",
  },
  {
    title: "Support before crisis occurs",
    text: "Build your circle when life is calm so safety nets already exist when unexpected needs arise.",
  },
];

export function HomeInteractiveExplorations() {
  return (
    <>
      {/* SECTION 1: WHAT NEIGHBORCONNECTOR™ CAN DO FOR YOU AND OTHERS */}
      <section className="py-20 md:py-28 bg-white border-b border-hairline">
        <div className="container-page">
          <Reveal delay={0} className="max-w-3xl">
            <span className="eyebrow">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Daily Practical Utility
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
              What <span className="text-gradient-brand">NeighborConnector™</span> Can Do for YOU and Others
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Small acts of kindness and everyday coordination made natural, private, and effortless.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_NC_CAN_DO_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={idx * 60}>
                  <div className="surface-card flex h-full flex-col justify-between p-6 sm:p-7 border border-hairline hover:border-brand/30 transition-all hover:-translate-y-1">
                    <div>
                      <div className="grid size-12 place-items-center rounded-2xl bg-sprout text-leaf-deep mb-5">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-ink mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO COMES TO MIND? */}
      <section className="py-20 md:py-28 bg-[#FBFBF9] border-b border-hairline">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal delay={0}>
              <span className="eyebrow mx-auto">
                <Users className="size-3.5" aria-hidden="true" />
                Your Trusted Circle
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.65rem]">
                Who Comes to Mind?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                Think of the people in your daily life. A private circle isn’t a massive social network — it’s a small, intentional ring of support.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {WHO_COMES_TO_MIND_LIST.map((person, idx) => (
                <Reveal key={person} delay={idx * 40}>
                  <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#285A48]/15 text-[#1D2A29] font-medium text-sm sm:text-base shadow-xs hover:border-[#285A48]/40 hover:bg-[#EBF3EF]/60 transition-all cursor-default">
                    <CheckCircle2 className="size-4 text-[#285A48] shrink-0" />
                    {person}
                  </span>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300} className="mt-10 text-center">
              <Link
                href="/how-it-works/circle-living"
                className="inline-flex items-center gap-2 rounded-full bg-[#285A48] px-7 py-3 text-sm font-semibold text-white shadow-lift hover:bg-[#1E4336] transition-all hover:-translate-y-0.5"
              >
                <span>Use the Circle Living™ Companion Worksheet</span>
                &rarr;
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY IT MATTERS */}
      <section className="py-20 md:py-28 bg-white border-b border-hairline">
        <div className="container-page">
          <Reveal delay={0} className="max-w-3xl">
            <span className="eyebrow">
              <Heart className="size-3.5" aria-hidden="true" />
              The Foundation
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.65rem]">
              Why It Matters
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              When neighborly care becomes part of daily rhythms, lives are transformed and communities flourish.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_IT_MATTERS_ITEMS.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 70}>
                <div className="surface-card p-6 sm:p-7 h-full flex flex-col justify-between border border-hairline bg-gradient-to-b from-[#FAFDFB] to-white">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#285A48]/10 text-[#285A48] mb-4">
                      Principle 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-ink mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Quote Card */}
            <Reveal delay={WHY_IT_MATTERS_ITEMS.length * 70}>
              <div className="surface-card p-6 sm:p-7 h-full flex flex-col justify-center bg-brand text-white rounded-3xl">
                <Quote className="size-8 text-sprout mb-4" />
                <p className="font-serif italic text-lg sm:text-xl leading-relaxed text-white">
                  “The best safety net is the one you know by name and see over the fence.”
                </p>
                <p className="mt-4 text-xs font-semibold text-sprout uppercase tracking-wider">
                  — Community Care Housing Foundation
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
