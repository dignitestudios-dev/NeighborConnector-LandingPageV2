import { Building2, HeartHandshake, Sprout } from "lucide-react";
import { Reveal } from "./Reveal";

const PILLARS = [
  {
    icon: Building2,
    title: "Affordable Housing",
    description: "Creating homes people can actually afford.",
    delay: 0,
  },
  {
    icon: HeartHandshake,
    title: "Supportive Community",
    description: "Connecting residents to care and each other.",
    delay: 90,
  },
  {
    icon: Sprout,
    title: "Long-Term Impact",
    description: "Building neighborhoods that last generations.",
    delay: 180,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-hairline bg-cream/70 py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0}>
            <span className="eyebrow">About</span>
            <h2 className="mt-6 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Built by Community Care Housing
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              NeighborConnector™ was created by Community Care Housing Foundation, a nonprofit organization dedicated to affordable housing and stronger, more supportive communities.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              This app is part of our mission to help people live more connected, supported lives — which is why it’s completely free, with no ads and no data selling.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.communitycarehousing.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-brand text-primary-foreground shadow-lift hover:-translate-y-0.5 hover:bg-brand-bright h-12 px-7 text-[0.95rem]"
              >
                Learn about our mission
              </a>
              <a
                href="mailto:Info@CommunityCareHousing.org"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed border border-hairline bg-white text-brand shadow-soft hover:-translate-y-0.5 hover:border-brand-light h-12 px-7 text-[0.95rem]"
              >
                Contact us
              </a>
            </div>
          </Reveal>

          <div className="grid gap-5 self-center">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Reveal
                  key={pillar.title}
                  delay={pillar.delay}
                  className="surface-card flex items-start gap-5 p-6"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-mist text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
