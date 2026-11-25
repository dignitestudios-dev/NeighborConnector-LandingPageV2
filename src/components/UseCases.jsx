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
    webpImage: "/assets/photo-help.webp",
    imageAlt:
      "A neighbor helping an older woman carry groceries up her driveway",
    imagePosition: "object-[center_20%]",
    icon: HandHeart,
    title: "Need a Hand?",
    description:
      "Ask someone nearby for help with groceries, errands, mail, or chores.",
    delay: 0,
  },
  {
    image: "/assets/photo-walk.jpg",
    imageAlt:
      "Two friends and neighbors smiling warmly while taking an outdoor walk together",
    imagePosition: "object-[center_30%]",
    icon: Footprints,
    title: "Going for a Walk?",
    description: "Invite someone from your circle to join you.",
    delay: 70,
  },
  {
    image: "/assets/photo-checkin.jpg",
    imageAlt:
      "A friendly neighbor checking her phone and smiling with peace of mind",
    imagePosition: "object-[center_20%]",
    icon: ShieldCheck,
    title: "Checking In",
    description: "Let people know you're safe and doing well.",
    delay: 140,
  },
  {
    image: "/assets/photo-gathering.jpg",
    webpImage: "/assets/photo-gathering.webp",
    imageAlt:
      "Neighbors of different ages sharing dinner at a long table under string lights",
    imagePosition: "object-center",
    icon: CalendarDays,
    title: "Planning Something?",
    description:
      "Organize dinners, gatherings, walks and neighborhood activities.",
    delay: 210,
  },
  {
    image: "/assets/photo-ride.jpg",
    imageAlt:
      "A car ride being coordinated between trusted companions",
    imagePosition: "object-center",
    icon: Car,
    title: "Need a Ride?",
    description: "Coordinate transportation with people you trust.",
    delay: 280,
  },
  {
    image: "/assets/photo-hello.jpg",
    imageAlt:
      "Friends and neighbors laughing and greeting each other warmly",
    imagePosition: "object-center",
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
        <Reveal delay={0} className="w-full">
          <div className="max-w-2xl">
            <span className="eyebrow">Everyday life</span>
            <h2 className="mt-6 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Sometimes, Community Looks Like the Little Things
            </h2>
          </div>
          <p className="mt-6 w-full text-base sm:text-lg leading-relaxed text-ink-soft">
            Small actions can make everyday life easier and more connected. When you’re away from home – Ask trusted people in your Circles about watering plants, checking the mail or helping with another small task. When you need a ride – Coordinate transportation to an appointment, event or errand with people in your Circles. When you’d like to get together – Invite your Circles to coffee, a walk, dinner, a game night or another shared activity. When you want to stay in touch – Share a message, photo, update or quick hello in your private Circles. When a check-in brings peace of mind – Use the optional Daily Check-in to let your Circles know you’re safe. It is not an emergency monitoring service.
          </p>
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
                  <picture>
                    {card.webpImage && (
                      <source srcSet={card.webpImage} type="image/webp" />
                    )}
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      width={800}
                      height={533}
                      loading="lazy"
                      decoding="async"
                      className={`h-52 w-full object-cover ${card.imagePosition || "object-center"}`}
                    />
                  </picture>
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

        <Reveal delay={120} className="mt-12 text-center">
          <p className="text-lg sm:text-xl font-bold tracking-tight text-brand">
            Intentional Connection. Intentional Community. Intentional Caring
          </p>
        </Reveal>
      </div>
    </section>
  );
}
