import {
  CalendarDays,
  Car,
  Footprints,
  HandHeart,
  ShieldCheck,
  Smile,
} from "lucide-react";
import { Reveal } from "./Reveal";

const CARDS = [
  {
    image: "/assets/photo-help.jpg",
    imageAlt:
      "A neighbor helping an older woman carry groceries up her driveway",
    icon: HandHeart,
    title: "Need a Hand?",
    description:
      "Ask someone nearby for help with groceries, errands, mail, or chores.",
    delay: 0,
  },
  {
    icon: Footprints,
    title: "Going for a Walk?",
    description: "Invite someone from your circle to join you.",
    delay: 70,
  },
  {
    icon: ShieldCheck,
    title: "Checking In",
    description: "Let people know you're safe and doing well.",
    delay: 140,
  },
  {
    image: "/assets/photo-gathering.jpg",
    imageAlt:
      "Neighbors of different ages sharing dinner at a long table under string lights",
    icon: CalendarDays,
    title: "Planning Something?",
    description:
      "Organize dinners, gatherings, walks, and neighborhood activities.",
    delay: 210,
  },
  {
    icon: Car,
    title: "Need a Ride?",
    description: "Coordinate transportation with people you trust.",
    delay: 280,
  },
  {
    icon: Smile,
    title: "Just Saying Hello",
    description: "Sometimes connection doesn't need a reason.",
    delay: 350,
  },
];

export function UseCases() {
  return (
    <section className="border-y border-hairline bg-mist/60 py-20 md:py-28">
      <div className="container-page">
        <Reveal delay={0} className="max-w-2xl">
          <span className="eyebrow">Everyday life</span>
          <h2 className="mt-6 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Sometimes, Community Looks Like the Little Things
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Reveal
                key={card.title}
                delay={card.delay}
                className="surface-card flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    className="h-48 w-full object-cover"
                  />
                )}
                <div className="flex flex-1 flex-col p-7">
                  <span className="grid size-11 place-items-center rounded-2xl bg-sprout text-leaf-deep">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
