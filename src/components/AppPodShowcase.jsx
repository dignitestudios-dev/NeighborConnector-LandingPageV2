"use client";

import { useState } from "react";
import {
  Calendar,
  Car,
  CheckCircle2,
  Heart,
  Lock,
  MessageCircle,
  Plus,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import clsx from "clsx";
import { Reveal } from "./Reveal";

export function AppPodShowcase() {
  const [activeTab, setActiveTab] = useState("feed");
  const [rideVolunteered, setRideVolunteered] = useState(true);
  const [toast, setToast] = useState(null);

  const triggerToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Toast popup */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="surface-card flex items-center gap-2 border-brand bg-brand px-5 py-3 text-sm font-semibold text-white shadow-float">
            <CheckCircle2 className="size-4 text-leaf" />
            <span>{toast}</span>
          </div>
        </div>
      )}

      {/* Modern Bento Dashboard Grid (No Mobile Mockup) */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left Bento Feature Card (7 Columns) */}
        <Reveal delay={0} className="surface-card overflow-hidden p-6 sm:p-8 md:p-10 lg:col-span-7 flex flex-col justify-between border border-hairline bg-gradient-to-br from-white via-cream/40 to-mist/40">
          <div>
            {/* Pod Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline pb-5">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand text-sm font-extrabold text-white shadow-soft">
                  NC
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-ink">Oak Maple Circle</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-sprout px-2.5 py-0.5 text-xs font-bold text-leaf-deep border border-hairline-leaf">
                      <span className="size-1.5 rounded-full bg-leaf-deep animate-ping" />
                      Active Pod
                    </span>
                  </div>
                  <p className="text-xs text-ink-soft mt-0.5">
                    6 trusted neighbors · Private invite-only space
                  </p>
                </div>
              </div>

              {/* View Switcher */}
              <div className="flex rounded-full bg-mist p-1 border border-hairline">
                <button
                  type="button"
                  onClick={() => setActiveTab("feed")}
                  className={clsx(
                    "rounded-full px-3 py-1 text-xs font-bold transition-colors cursor-pointer",
                    activeTab === "feed" ? "bg-white text-brand shadow-2xs" : "text-ink-soft hover:text-brand"
                  )}
                >
                  Live Feed
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("chat")}
                  className={clsx(
                    "rounded-full px-3 py-1 text-xs font-bold transition-colors cursor-pointer",
                    activeTab === "chat" ? "bg-white text-brand shadow-2xs" : "text-ink-soft hover:text-brand"
                  )}
                >
                  Private Chat
                </button>
              </div>
            </div>

            {/* TAB CONTENT: LIVE FEED */}
            {activeTab === "feed" ? (
              <div className="mt-6 space-y-4">
                {/* 1. Daily Check-in Card */}
                <div className="rounded-2xl border border-hairline bg-white p-5 shadow-soft transition-all hover:shadow-lift">
                  <div className="flex items-center justify-between text-xs text-ink-soft">
                    <span className="font-bold uppercase tracking-wider text-brand flex items-center gap-1.5">
                      <Heart className="size-3.5 fill-brand/20 text-brand" />
                      Today’s Daily Check-in
                    </span>
                    <span>Updated 8:15 AM</span>
                  </div>

                  <div className="mt-3 flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-sprout text-leaf-deep shadow-2xs">
                      <ShieldCheck className="size-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-base font-bold text-ink">
                          Eleanor V. is safe & well
                        </p>
                        <span className="rounded-full bg-sprout px-2.5 py-0.5 text-xs font-semibold text-leaf-deep border border-hairline-leaf">
                          Safe Today
                        </span>
                      </div>
                      <p className="text-sm text-ink-soft mt-1">
                        “Taking a morning walk with Bella in the garden!”
                      </p>
                      <div className="mt-3 flex items-center gap-3 text-xs text-ink-soft pt-1 border-t border-hairline/60">
                        <span className="text-brand font-semibold">❤️ 3 neighbors cheered</span>
                        <span>· Maple St Pod</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Coordinated Favor / Ride Card */}
                <div className="rounded-2xl border border-hairline bg-white p-5 shadow-soft transition-all hover:shadow-lift">
                  <div className="flex items-center justify-between text-xs text-ink-soft">
                    <span className="font-bold uppercase tracking-wider text-leaf-deep">
                      Coordinated Neighbor Request
                    </span>
                    <span className="rounded-md bg-mist px-2 py-0.5 font-bold text-brand">
                      This Thursday
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-soft">
                        <Car className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm sm:text-base font-bold text-ink">
                          Clinic Ride • 2:00 PM
                        </p>
                        <p className="text-xs text-ink-soft mt-0.5">
                          David K. volunteered to drive Eleanor
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setRideVolunteered(!rideVolunteered);
                        triggerToast(rideVolunteered ? "Volunteered ride updated." : "You volunteered to assist!");
                      }}
                      className={clsx(
                        "rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer shadow-soft hover:-translate-y-0.5",
                        rideVolunteered
                          ? "bg-sprout text-leaf-deep border border-hairline-leaf"
                          : "bg-brand text-white hover:bg-brand-bright"
                      )}
                    >
                      {rideVolunteered ? "Joined ✓" : "Volunteer"}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* TAB CONTENT: PRIVATE CHAT */
              <div className="mt-6 space-y-3">
                <div className="max-w-[85%] rounded-3xl rounded-bl-md bg-mist p-4 text-sm text-ink shadow-2xs">
                  <p className="text-xs font-bold text-brand mb-1">Marta S. (1st Floor)</p>
                  Anyone free for a quick coffee walk around 4 PM? ☕
                </div>

                <div className="ml-auto max-w-[85%] rounded-3xl rounded-br-md bg-brand p-4 text-sm text-white shadow-soft">
                  I’m in! I’ll bring the homemade cookies. 🍪
                </div>

                <div className="rounded-2xl bg-sprout/60 p-3 text-xs text-leaf-deep flex items-center gap-2 border border-hairline-leaf">
                  <Lock className="size-4 shrink-0" />
                  <span>Private pod conversation · Encrypted & visible only to Oak Maple Circle.</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Action Toolbar */}
          <div className="mt-8 border-t border-hairline pt-5">
            <p className="text-xs font-bold uppercase tracking-wider text-ink-soft mb-3">
              Quick Circle Actions
            </p>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => triggerToast("Favor request shared with circle! 🚀")}
                className="group rounded-2xl border border-hairline bg-white p-3.5 flex flex-col items-center gap-1.5 hover:border-brand-light hover:shadow-soft transition-all cursor-pointer"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-mist text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  <Plus className="size-4" />
                </span>
                <span className="text-xs font-bold text-ink">Ask Favor</span>
              </button>

              <button
                type="button"
                onClick={() => triggerToast("Calendar sync active! 📅")}
                className="group rounded-2xl border border-hairline bg-white p-3.5 flex flex-col items-center gap-1.5 hover:border-brand-light hover:shadow-soft transition-all cursor-pointer"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-sprout text-leaf-deep group-hover:bg-leaf-deep group-hover:text-white transition-colors">
                  <Calendar className="size-4" />
                </span>
                <span className="text-xs font-bold text-ink">Plan Outing</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("chat");
                  triggerToast("Circle Chat opened! 💬");
                }}
                className="group rounded-2xl border border-hairline bg-white p-3.5 flex flex-col items-center gap-1.5 hover:border-brand-light hover:shadow-soft transition-all cursor-pointer"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-cream text-brand border border-hairline group-hover:bg-brand group-hover:text-white transition-colors">
                  <MessageCircle className="size-4" />
                </span>
                <span className="text-xs font-bold text-ink">Circle Chat</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Right Bento Column: 3 Feature Highlight Cards (5 Columns) */}
        <div className="grid gap-6 lg:col-span-5">
          {/* Card 1: Reassurance */}
          <Reveal delay={80} className="surface-card p-6 sm:p-7 flex flex-col justify-between border border-hairline">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sprout text-leaf-deep">
                <Heart className="size-6" />
              </span>
              <div>
                <h4 className="text-lg font-bold text-ink">Quiet Human Reassurance</h4>
                <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                  Daily optional check-ins that let close family and trusted neighbors know you’re safe without invasive tracking.
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-hairline">
              <span className="rounded-md bg-mist px-2.5 py-1 text-xs font-semibold text-brand">Living alone</span>
              <span className="rounded-md bg-mist px-2.5 py-1 text-xs font-semibold text-brand">Traveling</span>
              <span className="rounded-md bg-mist px-2.5 py-1 text-xs font-semibold text-brand">Peace of mind</span>
            </div>
          </Reveal>

          {/* Card 2: Trusted Lending & Chores */}
          <Reveal delay={120} className="surface-card p-6 sm:p-7 flex flex-col justify-between border border-hairline">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-mist text-brand">
                <Wrench className="size-6" />
              </span>
              <div>
                <h4 className="text-lg font-bold text-ink">Everyday Practical Help</h4>
                <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                  Borrow tools, coordinate errands, or get a hand with snow shoveling and lawn care from folks right on your street.
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-hairline">
              <span className="rounded-md bg-sprout px-2.5 py-1 text-xs font-semibold text-leaf-deep">Tool lending</span>
              <span className="rounded-md bg-sprout px-2.5 py-1 text-xs font-semibold text-leaf-deep">Yard care</span>
              <span className="rounded-md bg-sprout px-2.5 py-1 text-xs font-semibold text-leaf-deep">Shared rides</span>
            </div>
          </Reveal>

          {/* Card 3: 100% Private Guarantee */}
          <Reveal delay={160} className="rounded-3xl border border-hairline-leaf bg-gradient-to-br from-sprout/60 via-white to-cream p-6 sm:p-7 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-leaf-deep text-white shadow-soft">
                <Lock className="size-5" />
              </span>
              <div>
                <h4 className="text-base font-bold text-ink">Intentionally Private</h4>
                <p className="text-xs text-ink-soft">Zero ads · Zero public feeds</p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink-soft">
              Your circle is strictly invite-only. You approve every member who joins, keeping neighborhood conversations genuine and protected.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
