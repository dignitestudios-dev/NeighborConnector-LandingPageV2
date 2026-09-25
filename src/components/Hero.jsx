import { ArrowRight, BellRing, HeartHandshake, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_18%_12%,var(--color-mist)_0%,transparent_60%),radial-gradient(55%_45%_at_88%_20%,var(--color-sprout)_0%,transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 -z-10 hidden size-[34rem] rounded-full border border-hairline/70 md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 -right-10 -z-10 hidden size-[24rem] rounded-full border border-hairline-leaf md:block"
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <HeartHandshake className="size-3.5" aria-hidden="true" />
            Circle Living™
          </span>

          <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.75rem]">
            Where Caring Neighbors{" "}
            <span className="text-gradient-brand">
              Make Stronger Communities
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            NeighborConnector™ helps you create small, trusted circles with neighbors, friends, and family so you can stay connected, support one another, and build meaningful relationships close to home.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-brand text-primary-foreground shadow-lift hover:-translate-y-0.5 hover:bg-brand-bright h-14 px-8 text-base"
            >
              Get Started
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed border border-hairline bg-white text-brand shadow-soft hover:-translate-y-0.5 hover:border-brand-light h-14 px-8 text-base"
            >
              See How It Works
            </a>
          </div>

          <p className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-leaf-deep" aria-hidden="true" />
              Invite-only circles
            </span>
            <span className="inline-flex items-center gap-2">
              <HeartHandshake className="size-4 text-leaf-deep" aria-hidden="true" />
              Free, volunteer-powered
            </span>
            <span className="hidden items-center gap-2 sm:inline-flex">
              <BellRing className="size-4 text-leaf-deep" aria-hidden="true" />
              No public feeds
            </span>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-10 bottom-10 -z-10 rounded-[3rem] bg-gradient-to-br from-mist via-white to-sprout"
          />
          <img
            src="/assets/hero.png"
            alt="NeighborConnector app shown on three phone screens: welcome screen, community updates, and a neighborhood post"
            width={656}
            height={704}
            className="relative w-full animate-float-slow drop-shadow-[0_40px_60px_rgba(7,81,155,0.18)]"
          />

          <div className="absolute -left-2 top-10 hidden animate-float-mid sm:block">
            <div className="surface-card flex items-center gap-3 px-4 py-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-sprout text-leaf-deep">
                <ShieldCheck className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink">Marta checked in</p>
                <p className="text-xs text-ink-soft">Safe today · Maple Street</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 bottom-8 hidden animate-float-slow sm:block">
            <div className="surface-card flex items-center gap-3 px-4 py-3">
              <img
                src="/assets/features.png"
                alt=""
                aria-hidden="true"
                width={1388}
                height={1595}
                loading="lazy"
                className="size-9 shrink-0 rounded-full object-cover object-top"
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink">Help request</p>
                <p className="text-xs text-ink-soft">3 neighbors offered a hand</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page mt-12 md:mt-16">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft">
          <span className="font-medium text-ink">Available now</span>
          <a
            href="https://apps.apple.com/us/app/neighbor-connector/id6759636423"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-hairline underline-offset-4 transition-colors hover:text-brand"
          >
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.cts.neighbour_connector"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-hairline underline-offset-4 transition-colors hover:text-brand"
          >
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
