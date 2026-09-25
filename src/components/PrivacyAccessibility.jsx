import {
  Accessibility,
  BellOff,
  Contrast,
  EyeOff,
  Lock,
  Type,
  UserCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

const PRIVACY_POINTS = [
  {
    icon: UserCheck,
    text: "You control who joins your circle.",
  },
  {
    icon: EyeOff,
    text: "No public profiles or public feeds.",
  },
  {
    icon: BellOff,
    text: "No ads and no selling of your data.",
  },
  {
    icon: Lock,
    text: "Your information stays inside your circle.",
  },
];

const ACCESSIBILITY_POINTS = [
  {
    icon: Type,
    text: "Large, readable text and clear labels",
  },
  {
    icon: Contrast,
    text: "High-contrast, easy-to-see colors",
  },
  {
    icon: Accessibility,
    text: "Simple navigation and generous tap targets",
  },
];

export function PrivacyAccessibility() {
  return (
    <section id="privacy" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page grid gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Privacy Card */}
        <Reveal
          delay={0}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-bright p-8 shadow-float md:p-10 lg:col-span-7"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-16 size-64 rounded-full bg-white/10"
          />
          <span className="grid size-12 place-items-center rounded-2xl bg-white/15 text-white">
            <Lock className="size-6" aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
            Private by Design
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-white/80">
            NeighborConnector™ was built with privacy at its core. Circles are invitation only, so the people in your circle are the only people who see what you share.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {PRIVACY_POINTS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.text} className="flex items-start gap-3 text-white">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-leaf text-white">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed font-medium">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Accessibility Card */}
        <Reveal
          delay={120}
          className="grid gap-6 lg:col-span-5"
        >
          <div className="surface-card overflow-hidden">
            <img
              src="/assets/photo-generations.jpg"
              alt="Three generations of a family smiling together while looking at a phone"
              loading="lazy"
              className="h-52 w-full object-cover"
            />
            <div className="p-7">
              <span className="eyebrow">Accessibility</span>
              <h3 className="mt-4 text-2xl font-bold text-ink">
                Designed for Every Generation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Built to be easy for everyone — including older adults and anyone who prefers a simpler experience.
              </p>
              <ul className="mt-5 space-y-3">
                {ACCESSIBILITY_POINTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.text}
                      className="flex items-start gap-3 text-sm text-ink-soft"
                    >
                      <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-mist text-brand">
                        <Icon className="size-3.5" aria-hidden="true" />
                      </span>
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
