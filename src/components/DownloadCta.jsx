import { Reveal } from "./Reveal";

export function DownloadCta() {
  return (
    <section id="download" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <Reveal
          delay={0}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand via-brand to-brand-bright px-7 py-14 shadow-float md:px-14 md:py-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-leaf/25 blur-2xl"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl lg:leading-[1.05]">
                Your Circle Is Waiting
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
                Download NeighborConnector™ free and start building the kind of neighborhood where people actually look out for each other.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/neighbor-connector/id6759636423"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <img
                    src="/assets/apple.png"
                    alt="Download NeighborConnector on the App Store"
                    className="h-12 w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.cts.neighbour_connector"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <img
                    src="/assets/google.png"
                    alt="Get NeighborConnector on Google Play"
                    className="h-12 w-auto"
                  />
                </a>
                <div className="flex items-center gap-3 rounded-3xl bg-white/10 p-3 pr-5">
                  <img
                    src="/assets/qrcode.png"
                    alt="QR code linking to the NeighborConnector app download"
                    className="size-16 rounded-xl bg-white p-1"
                  />
                  <span className="text-sm font-medium text-white/80">
                    Scan to
                    <br />
                    download
                  </span>
                </div>
              </div>

              <p className="mt-8 text-sm text-white/70">
                Free forever · No ads · No data selling · A nonprofit project
              </p>
            </div>

            <img
              src="/assets/hero.png"
              alt="NeighborConnector app shown on two phones"
              loading="lazy"
              className="animate-float-slow mx-auto w-full max-w-sm drop-shadow-[0_30px_60px_rgba(0,0,0,0.28)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
