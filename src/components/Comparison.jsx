import { Check, Minus, MessageSquareText, ShieldCheck, Users, CalendarCheck2 } from "lucide-react";
import { Reveal } from "./Reveal";

const TRADITIONAL_POINTS = [
  "Large public feeds",
  "Too much noise",
  "Unknown people",
  "Endless scrolling",
  "Broadcast-style communication",
];

const NEIGHBOR_POINTS = [
  "Private circles",
  "Trusted people",
  "Meaningful conversations",
  "Local support",
  "Real relationships",
];

// const TEXT_MESSAGING_COMPARISONS = [
//   {
//     icon: ShieldCheck,
//     text: "Users Create or are Invited to Join upon request approval – can’t randomly add someone.",
//   },
//   {
//     icon: Users,
//     text: "Easy to Distinguish Circles with Identifiable Members",
//   },
//   {
//     icon: CalendarCheck2,
//     text: "Posts are Pre-Formatted to include Location, Calendar & Appointment Reminders for you and other Members of your Circles.",
//   },
// ];

const TEXT_MESSAGING_COMPARISONS = [
  {
    icon: ShieldCheck,
    text: "Users Create or are Invited to Join upon request approval – can’t randomly add someone.",
  },
  {
    icon: Users,
    text: "Easy to Distinguish Circles with Identifiable Members",
  },
  {
    icon: CalendarCheck2,
    text: "Posts are Pre-Formatted to include Location, Calendar & Appointment Reminders for you and other Members of your Circles.",
  },
];

export function Comparison() {
  return (
    <section id="why" className="scroll-mt-24 border-y border-hairline bg-mist/60 py-20 md:py-28">
      <div className="container-page">
        <Reveal delay={0} className="max-w-2xl">
          <span className="eyebrow">The difference</span>
          <h2 className="mt-6 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            A Different Kind of Community App
          </h2>
          <p className="mt-3 text-lg sm:text-xl font-bold text-brand">
            Less Noise. More Intentional Connection.
          </p>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-ink-soft">
            Many digital platforms are designed around public feeds, advertising, broad audiences and constant streams of content. NeighborConnector™ is designed around smaller Circles of people who choose to connect with one another.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
          <Reveal delay={0} className="rounded-[2rem] border border-hairline bg-white/70 p-7 md:p-9">
            <h3 className="text-sm font-semibold tracking-[0.08em] text-ink-soft uppercase">
              Traditional community platforms
            </h3>
            <ul className="mt-6 space-y-4">
              {TRADITIONAL_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-base text-ink-soft">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-hairline text-ink-soft">
                    <Minus className="size-3.5" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={120}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-brand to-brand-bright p-7 shadow-float md:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full bg-white/10"
            />
            <h3 className="text-sm font-semibold tracking-[0.08em] text-white/70 uppercase">
              NeighborConnector™
            </h3>
            <ul className="mt-6 space-y-4">
              {NEIGHBOR_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-lg font-medium text-white">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-leaf text-white">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/80">
              A circle is usually just 2 to 10 people — your street, your family, your friends. Invitation only, so everything stays between the people who belong there.
            </p>
          </Reveal>
        </div>

        {/* Rather than Text Messaging Section */}
        <Reveal delay={180} className="mt-8 rounded-[2rem] border border-hairline bg-white p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
              <MessageSquareText className="size-6" aria-hidden="true" />
            </span>
            <div>
              {/* <span className="text-xs font-bold uppercase tracking-wider text-brand">New</span> */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-ink mt-0.5">
                Rather than Text Messaging
              </h3>
            </div>
          </div>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft">
            NeighborConnector™ is designed to give your Circles a more organized, shared place for ongoing conversation.
          </p>

          <ul className="mt-6 space-y-4">
            {TEXT_MESSAGING_COMPARISONS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.text} className="flex items-start gap-3.5 text-ink-soft">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sprout/40 text-brand">
                    <Check className="size-3.5 stroke-[2.5]" aria-hidden="true" />
                  </span>
                  <span className="text-base sm:text-lg text-ink font-medium leading-relaxed">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 pt-6 border-t border-hairline/80">
            <p className="text-lg sm:text-xl font-bold text-brand">
              Your Circles. Your Relationships. Your Way of Connecting.
            </p>
          </div>
        </Reveal>

        {/* Rather than Text Messaging Section */}
        {/* <Reveal delay={180} className="mt-8 rounded-[2rem] border border-hairline bg-white p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
              <MessageSquareText className="size-6" aria-hidden="true" />
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand">New</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-ink mt-0.5">
                Rather than Text Messaging
              </h3>
            </div>
          </div>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft">
            NeighborConnector™ is designed to give your Circles a more organized, shared place for ongoing conversation.
          </p>

          <ul className="mt-6 space-y-4">
            {TEXT_MESSAGING_COMPARISONS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.text} className="flex items-start gap-3.5 text-ink-soft">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sprout/40 text-brand">
                    <Check className="size-3.5 stroke-[2.5]" aria-hidden="true" />
                  </span>
                  <span className="text-base sm:text-lg text-ink font-medium leading-relaxed">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 pt-6 border-t border-hairline/80">
            <p className="text-lg sm:text-xl font-bold text-brand">
              Your Circles. Your Relationships. Your Way of Connecting.
            </p>
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}
