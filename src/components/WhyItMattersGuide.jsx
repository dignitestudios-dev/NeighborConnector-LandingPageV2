"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  Heart,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import { Reveal } from "./Reveal";

const WHO_IS_IT_FOR = [
  {
    title: "Older Adults & Living Alone",
    desc: "Quiet peace of mind through daily 'Safe' check-ins, quick reassurance, and knowing someone local cares.",
    icon: Heart,
    bg: "bg-sprout",
    color: "text-leaf-deep",
  },
  {
    title: "Street & Block Neighbors",
    desc: "Coordinate package watching, tool borrowing, lawn mowing, snow shoveling, and local awareness.",
    icon: Users,
    bg: "bg-mist",
    color: "text-brand",
  },
  {
    title: "Families & Close Friends",
    desc: "Keep kids, parents, and grandparents aligned across towns with private messaging, rides, and schedules.",
    icon: HeartHandshake,
    bg: "bg-sprout",
    color: "text-leaf-deep",
  },
  {
    title: "Caregivers & Supporters",
    desc: "Share daily caregiving tasks without burning out, knowing backup help is organized in a trusted group.",
    icon: UserCheck,
    bg: "bg-mist",
    color: "text-brand",
  },
];

const WHY_IT_MATTERS_POINTS = [
  {
    num: "01",
    title: "A simple “I’m okay”",
    text: "Can bring deep comfort and quiet reassurance to family and neighbors each and every day.",
  },
  {
    num: "02",
    title: "Small needs are easier",
    text: "When you already have a trusted micro-circle, you never have to hesitate or feel awkward asking.",
  },
  {
    num: "03",
    title: "Transportation & chores are smoother",
    text: "When neighbors see who is already headed that way for rides, grocery trips, or doctor visits.",
  },
  {
    num: "04",
    title: "Everyone needs help sometimes",
    text: "And everyone has something valuable to offer in return — mutual dignity, no charity stigma.",
  },
  {
    num: "05",
    title: "Support before crisis occurs",
    text: "Build your circle when life is calm so safety nets already exist when real emergencies arise.",
  },
];

export function WhyItMattersGuide() {
  return (
    <section id="why-it-matters" className="scroll-mt-28 py-16 md:py-24">
      <div className="container-page max-w-5xl">
        <Reveal delay={0}>
          <div className="max-w-3xl">
            <span className="eyebrow">
              <FileText className="size-3.5 text-leaf-deep" />
              Foundational Guide
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl tracking-tight">
              What, Who &amp; <span className="text-gradient-brand">Why It Matters</span> Guide
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
              NeighborConnector™ was founded on a simple truth: communities flourish when small, private groups of trusted people stay intentionally connected. Here is what we do, who we serve, and why it matters.
            </p>
          </div>
        </Reveal>

        {/* 3 Foundation Pillars Grid */}
        <div className="mt-12 space-y-12">
          {/* Pillar 1: WHAT */}
          <Reveal delay={50}>
            <div className="surface-card p-6 sm:p-10 border border-hairline bg-white shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-brand text-white font-bold text-sm">
                  1
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">The Platform</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink">
                    WHAT is NeighborConnector™?
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-ink-soft leading-relaxed">
                NeighborConnector™ is a free, nonprofit mobile platform that lets you form small, invite-only circles (typically 2 to 10 people) with neighbors, friends, and family. It is built strictly around private circles — with no public feeds, no stranger noise, no advertising, and zero data selling.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-mist/50 p-4 border border-hairline">
                  <span className="font-bold text-xs text-brand block mb-1">Micro-Circles (2–10)</span>
                  <p className="text-xs text-ink-soft">Small groups where members actually know and trust one another.</p>
                </div>
                <div className="rounded-2xl bg-mist/50 p-4 border border-hairline">
                  <span className="font-bold text-xs text-brand block mb-1">Practical Mutual Aid</span>
                  <p className="text-xs text-ink-soft">Daily check-ins, occasional rides, tool lending, and chore coordination.</p>
                </div>
                <div className="rounded-2xl bg-mist/50 p-4 border border-hairline">
                  <span className="font-bold text-xs text-brand block mb-1">Total Privacy</span>
                  <p className="text-xs text-ink-soft">No public profiles, no stranger browsing, and every member is approved by you.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Pillar 2: WHO */}
          <Reveal delay={100}>
            <div className="surface-card p-6 sm:p-10 border border-hairline bg-white shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-leaf-deep text-white font-bold text-sm">
                  2
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-leaf-deep">The Community</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink">
                    WHO is NeighborConnector™ for?
                  </h3>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {WHO_IS_IT_FOR.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3.5 p-4 rounded-2xl bg-mist/30 border border-hairline hover:bg-mist/60 transition-colors"
                    >
                      <span className={`grid size-9 shrink-0 place-items-center rounded-xl ${item.bg} ${item.color}`}>
                        <Icon className="size-4.5" />
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-ink">{item.title}</h4>
                        <p className="text-xs text-ink-soft mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Pillar 3: WHY IT MATTERS */}
          <Reveal delay={150}>
            <div className="surface-card p-6 sm:p-10 border border-hairline bg-gradient-to-br from-white via-cream/20 to-sprout/20 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-brand text-white font-bold text-sm">
                  3
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">The Impact</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink">
                    WHY It Matters
                  </h3>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {WHY_IT_MATTERS_POINTS.map((pt) => (
                  <div
                    key={pt.num}
                    className="p-5 rounded-2xl bg-white border border-hairline shadow-2xs hover:-translate-y-1 transition-transform"
                  >
                    <span className="text-xs font-black text-leaf-deep tracking-wider block mb-1">
                      {pt.num}
                    </span>
                    <h4 className="text-sm font-bold text-ink">{pt.title}</h4>
                    <p className="text-xs text-ink-soft mt-1.5 leading-relaxed">{pt.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-hairline pt-6">
                <span className="text-xs font-semibold text-ink-soft">
                  Ready to map out your private circle?
                </span>
                <Link
                  href="/companion-worksheet"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-white shadow-lift hover:bg-brand-bright transition-all"
                >
                  <FileSpreadsheet className="size-3.5" />
                  <span>Open Companion Worksheet</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

