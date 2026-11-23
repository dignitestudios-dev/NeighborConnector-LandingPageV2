import { Building2, HeartHandshake, Sprout } from "lucide-react";
import { Reveal } from "./Reveal";

const PILLARS = [
  {
    icon: Building2,
    title: "Connected & Shared Housing",
    description: "Promotes Connected and Shared Housing Opportunities.",
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
    title: "The Bigger Idea",
    description: "Help to make Communities stronger, friendlier and more connected.",
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
              NeighborConnector™ was created by Community Care Housing, a 501(c)(3) nonprofit organization dedicated to connected and shared housing. This app is part of our mission to help people live more connected in stronger, more supported communities.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              This is a free app made possible through donor funding which is why it’s completely free, with no ads and no data selling.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Whether you begin with family, a few neighbors, friends or a community group, every Circle is an opportunity to make Connection more Intentional. Stronger Communities begin with Intentional Connection and Caring.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="https://www.communitycarehousing.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-brand text-primary-foreground shadow-lift hover:-translate-y-0.5 hover:bg-brand-bright h-12 px-7 text-[0.95rem] text-center"
              >
                Support Our Mission
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed border border-hairline bg-white text-brand shadow-soft hover:-translate-y-0.5 hover:border-brand-light h-12 px-7 text-[0.95rem] text-center"
              >
                Contact us
              </a>
            </div>

            {/* How to Help List */}
            <div className="mt-10 rounded-2xl bg-white border border-hairline p-6 shadow-xs">
              <h3 className="text-base font-bold text-ink mb-3">How You Can Help</h3>
              <ul className="space-y-3 text-sm text-ink-soft">
                <li className="flex items-start gap-2.5">
                  <span className="grid size-5 place-items-center rounded-full bg-sprout text-leaf-deep font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span className="font-medium text-ink">Tell/Teach Others About NeighborConnector™</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="grid size-5 place-items-center rounded-full bg-sprout text-leaf-deep font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span className="font-medium text-ink">Request a Live Presentation or Webinar for a neighborhood, HOA, senior community, church, nonprofit or other community group.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="grid size-5 place-items-center rounded-full bg-sprout text-leaf-deep font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span className="font-medium text-ink">Become a Community Connector Ambassador</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="grid size-5 place-items-center rounded-full bg-sprout text-leaf-deep font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span className="font-medium text-ink">Be a Paid Advertiser or Provide Giveaways</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="grid size-5 place-items-center rounded-full bg-sprout text-leaf-deep font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span className="font-medium text-ink">Be a Sponsor</span>
                </li>
              </ul>
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
