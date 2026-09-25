"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Create Your Profile",
    description:
      "Download the app and add your name, photo, and the details you're comfortable sharing. Emergency contacts are optional, and you can update anything later.",
  },
  {
    n: "02",
    title: "Create or Join a Circle",
    description:
      "Name your circle and invite trusted neighbors, friends, or family — or join an existing circle with an invitation code. You approve every request.",
  },
  {
    n: "03",
    title: "Start Connecting",
    description:
      "Chat, check in, ask for help, share updates, plan a walk or a get-together, and build stronger relationships over time.",
  },
];

export function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            if (!isNaN(idx)) {
              setActiveIdx(idx);
            }
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <Reveal delay={0} className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-6 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Getting Started Is Simple
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <ol className="space-y-4">
            {STEPS.map((step, idx) => (
              <li
                key={step.n}
                data-idx={idx}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                onClick={() => setActiveIdx(idx)}
                className={clsx(
                  "cursor-pointer rounded-[1.75rem] border p-6 transition-all duration-500 md:p-8",
                  activeIdx === idx
                    ? "border-brand-light/60 bg-white shadow-lift"
                    : "border-hairline bg-white/50 hover:bg-white/80"
                )}
              >
                <div className="flex items-start gap-5">
                  <span
                    className={clsx(
                      "grid size-12 shrink-0 place-items-center rounded-2xl text-base font-bold transition-colors duration-500",
                      activeIdx === idx
                        ? "bg-brand text-white"
                        : "bg-mist text-ink-soft"
                    )}
                  >
                    {step.n}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-ink sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative mx-auto max-w-sm">
              <div
                aria-hidden="true"
                className="absolute inset-x-4 top-8 bottom-8 -z-10 rounded-[3rem] bg-gradient-to-br from-mist via-white to-sprout"
              />
              <img
                src="/assets/features.png"
                alt="NeighborConnector app home screen with circle updates and check-in button"
                width={1388}
                height={1595}
                loading="lazy"
                className="w-full drop-shadow-[0_30px_50px_rgba(7,81,155,0.16)]"
              />
              <div className="mt-6 flex items-center justify-center gap-2">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to step ${i + 1}`}
                    onClick={() => setActiveIdx(i)}
                    className={clsx(
                      "h-1.5 rounded-full transition-all duration-500 cursor-pointer",
                      activeIdx === i ? "w-8 bg-brand" : "w-2.5 bg-hairline"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
