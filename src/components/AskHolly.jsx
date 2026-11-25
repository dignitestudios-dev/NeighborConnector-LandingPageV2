import { Reveal } from "./Reveal";

export function AskHolly() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-page">
        <Reveal
          delay={0}
          className="rounded-[2.5rem] border border-hairline bg-mist/60 p-8 md:p-12 lg:p-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">
                Ask Holly
              </span>
              <h2 className="mt-5 text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
                Meet Holly, Your Personal Guide
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
                Don’t worry if technology isn’t your favorite thing. NeighborConnector™ is designed with large, readable text, clear labels, high-contrast colors, simple navigation and generous tap areas.
              </p>
              <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                <strong>Need Help? Ask Holly.</strong> Holly is your friendly in-app assistant. Click where you see her and she answers questions as you learn the app, step by step and she understands that not everyone is comfortable with technology.
              </p>
            </div>

            <div className="relative">
              <div className="surface-card space-y-4 p-6 sm:p-8">
                <div className="ml-auto max-w-[80%] rounded-3xl rounded-br-md bg-brand px-4 py-3 text-sm text-white">
                  How do I create a circle?
                </div>
                <div className="flex max-w-[92%] items-start gap-3">
                  <img
                    src="/assets/holly2.png"
                    alt="Holly, the NeighborConnector in-app guide"
                    width={294}
                    height={295}
                    loading="lazy"
                    className="size-10 shrink-0 rounded-full bg-white object-contain"
                  />
                  <div className="rounded-3xl rounded-bl-md bg-sprout px-4 py-3 text-sm text-ink">
                    I can help! Tap{" "}
                    <span className="font-semibold">Create Circle</span> and
                    I’ll walk you through it.
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pl-13">
                  <span className="size-2 animate-bounce rounded-full bg-leaf [animation-delay:0ms]" />
                  <span className="size-2 animate-bounce rounded-full bg-leaf [animation-delay:150ms]" />
                  <span className="size-2 animate-bounce rounded-full bg-leaf [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
