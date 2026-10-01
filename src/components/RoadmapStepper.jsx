"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import clsx from "clsx";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    step: "01",
    title: "Note How NeighborConnector™ Can Help",
    description: "Identify what you or someone you know might need assistance with — whether it's yard chores, check-ins, or rides.",
    detail: "Take a quiet moment to consider everyday tasks that are easier together. Recognize that asking for help is a sign of community connection, not weakness.",
  },
  {
    step: "02",
    title: "Think of Who Comes to Mind",
    description: "Consider neighbors on your street, close family pods, church friends, or local community members.",
    detail: "Small is better! A circle of 3 to 8 trusted individuals creates an intimate, safe space where everyone feels heard and cared for.",
  },
  {
    step: "03",
    title: "Start a Conversation",
    description: "Reach out with warmth: “I found this safe, private tool for our block where we can stay connected without ads.”",
    detail: "Share the link or QR code. Because NeighborConnector™ is a nonprofit platform without public feeds or data monetization, people feel comfortable joining.",
  },
  {
    step: "04",
    title: "Offer Help or Ask for Help",
    description: "Share a small request or offer: loan a ladder, water plants while away, or coordinate grocery pickups.",
    detail: "Starting with simple, low-stakes requests builds mutual trust naturally and breaks the ice for everyone in your circle.",
  },
  {
    step: "05",
    title: "Make a Plan",
    description: "Set a time, date, and expectations with clear in-app updates and calendar sync.",
    detail: "Avoid endless group chat confusion. Keep requests organized with clear volunteers, dates, and automatic status updates.",
  },
  {
    step: "06",
    title: "Create or Join a Circle",
    description: "Users may belong to more than one circle (e.g. family pod, neighborhood block, hobby club).",
    detail: "Each circle has its own private space. You approve all members before they can view messages or post updates.",
  },
  {
    step: "07",
    title: "Carry Out Your Plan",
    description: "Use private notifications and check-ins to coordinate smoothly and confirm tasks are completed.",
    detail: "Keep loved ones reassured and neighbors supported with instant reassurance pings and photo updates.",
  },
  {
    step: "08",
    title: "Stay Connected & Enjoy Life Together",
    description: "Celebrate shared moments, post friendly updates, and strengthen neighborhood bonds over time.",
    detail: "From coffee mornings to spontaneous block potlucks, turn simple daily interactions into lifelong supportive friendships.",
  },
];

export function RoadmapStepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="surface-card p-6 sm:p-8 md:p-10 border border-hairline relative">
      <Reveal delay={0}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-hairline pb-5">
          <div>
            <span className="eyebrow">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Interactive Roadmap
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink">
              It’s Simple: 8 Quick Steps
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              Click any step to inspect the roadmap and practical tips.
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-sprout px-3.5 py-1.5 text-xs font-semibold text-leaf-deep self-start sm:self-auto">
            <CheckCircle2 className="size-4" />
            Easy Setup in Minutes
          </span>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start relative">
        {/* Steps List (Left Side - Scrolls through 8 steps) */}
        <div className="space-y-4">
          {STEPS.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={item.step}
                data-step-idx={idx}
                onClick={() => setActiveStep(idx)}
                className={clsx(
                  "w-full text-left rounded-2xl p-4 sm:p-5 transition-all duration-300 border flex items-start gap-4 cursor-pointer",
                  isActive
                    ? "border-brand bg-mist/70 shadow-lift translate-x-1"
                    : "border-hairline bg-white/70 hover:bg-cream/50"
                )}
              >
                <span
                  className={clsx(
                    "grid size-9 sm:size-10 shrink-0 place-items-center rounded-xl text-xs sm:text-sm font-extrabold transition-colors duration-300",
                    isActive
                      ? "bg-brand text-white shadow-soft"
                      : "bg-mist text-ink-soft"
                  )}
                >
                  {item.step}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4
                      className={clsx(
                        "text-sm sm:text-base font-bold",
                        isActive ? "text-brand" : "text-ink"
                      )}
                    >
                      {item.title}
                    </h4>
                    <ChevronRight
                      className={clsx(
                        "size-4 shrink-0 transition-transform duration-300",
                        isActive ? "text-brand rotate-90" : "text-ink-soft"
                      )}
                    />
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-ink-soft leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Feature Card (Right Side - STICKY ONLY FOR THIS SECTION) */}
        <div className="lg:sticky lg:top-28 lg:self-start transition-all duration-300">
          <div className="rounded-3xl border border-hairline-leaf bg-gradient-to-br from-white via-cream to-sprout/40 p-6 sm:p-8 shadow-lift backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-hairline-leaf/60 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-leaf-deep">
                Step {STEPS[activeStep].step} of 08
              </span>
              <span className="text-xs font-semibold text-ink-soft">
                Interactive Guide
              </span>
            </div>

            <div className="mt-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand text-white font-extrabold text-lg shadow-lift">
                {STEPS[activeStep].step}
              </span>

              <h4 className="mt-5 text-xl sm:text-2xl font-extrabold text-ink leading-snug">
                {STEPS[activeStep].title}
              </h4>

              <p className="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed">
                {STEPS[activeStep].description}
              </p>

              <div className="mt-6 rounded-2xl border border-hairline bg-white/95 p-4 sm:p-5 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  💡 Practical Pro-Tip
                </p>
                <p className="mt-1.5 text-xs sm:text-sm text-ink-soft leading-relaxed">
                  {STEPS[activeStep].detail}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="rounded-full border border-hairline bg-white px-4 py-2 text-xs font-semibold text-ink disabled:opacity-40 disabled:cursor-not-allowed hover:bg-mist transition-colors cursor-pointer"
                >
                  Previous Step
                </button>

                <button
                  type="button"
                  disabled={activeStep === STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(STEPS.length - 1, prev + 1))}
                  className="rounded-full bg-brand px-5 py-2 text-xs font-semibold text-white shadow-soft hover:bg-brand-bright transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
