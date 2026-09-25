import { Accessibility, Gift, Lock, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const VALUE_PROPS = [
  {
    icon: Lock,
    title: "Private by Design",
    description: "Invite-only circles keep your conversations personal.",
    delay: 0,
  },
  {
    icon: Users,
    title: "Real Connections",
    description: "Build relationships with people you actually know and trust.",
    delay: 70,
  },
  {
    icon: Accessibility,
    title: "Simple & Accessible",
    description: "Easy to use, regardless of your comfort with technology.",
    delay: 140,
  },
  {
    icon: Gift,
    title: "100% Free",
    description: "Powered by donors and Community Care Housing.",
    delay: 210,
  },
];

export function ValueProps() {
  return (
    <section className="border-y border-hairline bg-cream/70 py-12 md:py-16">
      <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {VALUE_PROPS.map((item) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={item.delay} className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
