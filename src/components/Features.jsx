import { MessageCircle, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Reveal } from "./Reveal";

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 border-y border-hairline bg-cream/70 py-20 md:py-28">
      <div className="container-page">
        <Reveal delay={0} className="max-w-2xl">
          <span className="eyebrow">Features</span>
          <h2 className="mt-6 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Everything You Need to Stay Connected
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Bento Card 1: Your People. Your Circle. */}
          <Reveal delay={0} className="surface-card group overflow-hidden p-7 md:p-10 lg:col-span-7">
            <span className="grid size-11 place-items-center rounded-2xl bg-mist text-brand">
              <Users className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-2xl font-bold text-ink">
              Your People. Your Circle.
            </h3>
            <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
              Create or join verified micro-circles where trusted neighbors, friends, and family can communicate, share updates, ask for help, and plan activities. You approve every request to join.
            </p>
            <img
              src="/assets/how-it-works.png"
              alt="NeighborConnector circle home screen beside a neighborhood help request post"
              width={1412}
              height={1591}
              loading="lazy"
              className="mt-8 w-full max-w-lg transition-transform duration-500 group-hover:-translate-y-2"
            />
          </Reveal>

          {/* Right Column: Check-in and Messages */}
          <div className="grid gap-6 lg:col-span-5">
            {/* Bento Card 2a: Check-in */}
            <Reveal delay={100} className="surface-card group overflow-hidden p-7 md:p-9">
              <span className="grid size-11 place-items-center rounded-2xl bg-sprout text-leaf-deep">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-ink">
                A Little Check-In Goes a Long Way
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Mark yourself “Safe” each day so your circle knows how you’re doing. Completely optional — and always call 911 in a real emergency.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src="/assets/about.png"
                  alt="NeighborConnector daily check-in screen showing a member marked as safe"
                  width={716}
                  height={759}
                  loading="lazy"
                  className="w-32 shrink-0 transition-transform duration-500 group-hover:-translate-y-2 sm:w-40"
                />
                <p className="text-base font-semibold text-brand">
                  Peace of mind, one check-in at a time.
                </p>
              </div>
            </Reveal>

            {/* Bento Card 2b: Messages */}
            <Reveal delay={140} className="surface-card p-7 md:p-9">
              <span className="grid size-11 place-items-center rounded-2xl bg-mist text-brand">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-ink">
                Stay Connected, Without the Noise
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Message your circle privately, share photos, and keep conversations going — no public feeds, no ads, no unnecessary noise.
              </p>
              <div className="mt-6 space-y-3">
                <div className="max-w-[85%] rounded-3xl rounded-bl-md bg-mist px-4 py-3 text-sm text-ink">
                  Anyone free for a walk around 6?
                </div>
                <div className="ml-auto max-w-[85%] rounded-3xl rounded-br-md bg-brand px-4 py-3 text-sm text-white">
                  I’m in — I’ll bring the dog. 🐾
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bento Card 3: Ask Holly */}
          <Reveal
            delay={80}
            className="relative overflow-hidden rounded-[2rem] border border-hairline-leaf bg-gradient-to-br from-sprout via-white to-mist p-7 md:p-10 lg:col-span-12"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="eyebrow">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Ask Holly
                </span>
                <h3 className="mt-5 text-2xl font-bold text-ink sm:text-3xl">
                  Meet Holly, Your Personal Guide
                </h3>
                <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
                  Holly is your friendly in-app assistant. She answers questions as you learn the app, step by step, and she understands that not everyone is comfortable with technology.
                </p>
              </div>

              <div className="relative">
                <div className="surface-card space-y-4 p-6">
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
      </div>
    </section>
  );
}
