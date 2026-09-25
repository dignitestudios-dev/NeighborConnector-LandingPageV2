import { Check, Minus } from "lucide-react";
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

export function Comparison() {
  return (
    <section id="why" className="scroll-mt-24 border-y border-hairline bg-mist/60 py-20 md:py-28">
      <div className="container-page">
        <Reveal delay={0} className="max-w-2xl">
          <span className="eyebrow">The difference</span>
          <h2 className="mt-6 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            A Different Kind of Community App
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            NeighborConnector™ isn’t built around public feeds, endless notifications, advertising, or hundreds of strangers. It’s built around small, trusted groups of people you actually know.
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
      </div>
    </section>
  );
}
