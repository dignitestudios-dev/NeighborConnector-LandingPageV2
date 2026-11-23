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

/* Top 4 Pillars from Checklist Image (no description) */
const FOUR_CORE_PILLARS = [
  {
    title: "Give & Receive Help",
    bgColor: "bg-[#6A359C]", // Purple
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-9 text-white">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Coordinate Everyday Life",
    bgColor: "bg-[#0B63A8]", // Blue
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="size-9 text-white">
        <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="9" y1="14" x2="9" y2="18" />
        <line x1="15" y1="14" x2="15" y2="18" />
        <line x1="9" y1="14" x2="15" y2="14" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    ),
  },
  {
    title: "Enjoy Life Together",
    bgColor: "bg-[#F39223]", // Orange
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className="size-9 text-white">
        <circle cx="12" cy="12" r="5" />
        <path strokeWidth="2" strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: "Stay Connected",
    bgColor: "bg-[#8BC34A]", // Lime Green
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-9 text-white">
        {/* Left person */}
        <circle cx="8" cy="7.5" r="3.2" />
        <path d="M3.5 19.5c0-3.3 2.5-5.5 5.5-5.5.9 0 1.8.2 2.5.6-.4.9-.5 1.9-.3 2.9l.3 1H3.5v1z" />
        {/* Right person */}
        <circle cx="16" cy="7.5" r="3.2" />
        <path d="M20.5 19.5c0-3.3-2.5-5.5-5.5-5.5-.9 0-1.8.2-2.5.6.4.9.5 1.9.3 2.9l-.3 1h8v1z" />
        {/* Left heart */}
        <path d="M8 15.2l-.7-.6c-1.3-1.1-2.1-1.9-2.1-2.9 0-.8.6-1.4 1.4-1.4.5 0 .9.2 1.2.6.3-.4.7-.6 1.2-.6.8 0 1.4.6 1.4 1.4 0 1-.8 1.8-2.1 2.9l-.3.2z" fill="#8BC34A" />
        {/* Right heart */}
        <path d="M16 15.2l-.7-.6c-1.3-1.1-2.1-1.9-2.1-2.9 0-.8.6-1.4 1.4-1.4.5 0 .9.2 1.2.6.3-.4.7-.6 1.2-.6.8 0 1.4.6 1.4 1.4 0 1-.8 1.8-2.1 2.9l-.3.2z" fill="#8BC34A" />
      </svg>
    ),
  },
];

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
    description: "Spontaneous social touchpoints, porch visits and friendly walks.",
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
    text: "And everyone has something valuable, warm and meaningful to offer in return.",
  },
  {
    title: "Support before crisis occurs",
    text: "Build your circle when life is calm so safety nets already exist when unexpected needs arise.",
  },
  {
    title: "Relationships grow when we spend time together.",
    text: "Casual coffee visits, shared walks and regular hellos turn neighbors into trusted lifelong friends.",
  },
  {
    title: "Organization can reduce stress.",
    text: "A simple shared circle calendar and clear updates replace chaotic group text threads and missed plans.",
  },
  {
    title: "Life is easier when we help each other.",
    text: "Lending tools, watering plants, or offering a ride to the store feels natural when shared among circle members.",
  },
  {
    title: "Life is better when we do it together!",
    text: "Building a supportive neighborhood circle brings lasting peace of mind, joy and real community right where you live.",
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
              {/* <Sparkles className="size-3.5" aria-hidden="true" /> */}
              Daily  Utility
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
              What <span className="text-gradient-brand">NeighborConnector™</span> Can Do for YOU and Others
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Whether you want to keep in touch, organize activities, offer a helping hand or make it
easier to ask for one, your Circles can help you make connection part of everyday life.
            </p>
          </Reveal>

          {/* 4 Pillars with exact circular icons and titles without description */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
            {FOUR_CORE_PILLARS.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 60}>
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`grid size-20 sm:size-24 place-items-center rounded-full ${pillar.bgColor} shadow-md transition-transform duration-300 hover:scale-105`}
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-[#1D2A29] leading-snug max-w-[10rem]">
                    {pillar.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                Your Trusted Circles
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
              The Impact
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.65rem]">
              Why It Matters
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          NeighborConnector™ helps you build strong relationships, get things done and look out for one another, give help and get help – so you can live life with more confidence and connection.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_IT_MATTERS_ITEMS.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 50}>
                <div className="surface-card p-6 sm:p-7 h-full flex flex-col justify-between border border-hairline bg-gradient-to-b from-[#FAFDFB] to-white rounded-3xl shadow-xs hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
