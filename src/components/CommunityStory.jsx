import { Reveal } from "./Reveal";

export function CommunityStory() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal delay={0}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sprout via-white to-mist"
              />
              <img
                src="/assets/photo-neighbors.jpg"
                alt="An older neighbor and a younger neighbor talking over a garden fence in the evening light"
                width={1408}
                height={1008}
                loading="lazy"
                className="w-full rounded-[2rem] object-cover shadow-lift"
              />
            </div>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal delay={0}>
            <span className="eyebrow">Why we exist</span>
            <h2 className="mt-6 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Community Starts With Connection
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              We have never had more ways to communicate. Yet neighbors, friend, and family often remain unaware of the support waiting a few doors away. Loneliness and isolation have become a serious health concern, especially for older adults and neighbors who could use a hand.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              NeighborConnector™ takes a quieter path: a handful of people you already know, in one private circle, close enough to actually show up for each other. Users may belong to more than one circle for various needs.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-10">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-3">
              <li className="flex items-center gap-3">
                <span className="rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink-soft">
                  Disconnected
                </span>
                <span aria-hidden="true" className="h-px w-5 bg-hairline sm:w-7" />
              </li>
              <li className="flex items-center gap-3">
                <span className="rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink-soft">
                  Connected
                </span>
                <span aria-hidden="true" className="h-px w-5 bg-hairline sm:w-7" />
              </li>
              <li className="flex items-center gap-3">
                <span className="rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink-soft">
                  Supported
                </span>
                <span aria-hidden="true" className="h-px w-5 bg-hairline sm:w-7" />
              </li>
              <li className="flex items-center gap-3">
                <span className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-soft">
                  Community
                </span>
              </li>
            </ol>
          </Reveal>

          <Reveal delay={200} className="mt-10">
            <blockquote className="rounded-[1.75rem] border-l-4 border-leaf bg-sprout/60 px-6 py-5 text-xl font-semibold text-brand">
              Small circles. Real relationships. Meaningful support.
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
