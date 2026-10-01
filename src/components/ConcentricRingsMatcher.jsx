"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, RotateCcw, Sparkles, Users } from "lucide-react";
import clsx from "clsx";
import { Reveal } from "./Reveal";

const PEOPLE_OPTIONS = [
  "People living alone",
  "Family members",
  "Close friends",
  "Next-door neighbors",
  "Someone on a trip",
  "Snowbirds",
  "Church & community friends",
  "Someone grieving",
  "Haven't seen lately",
  "Needs practical help",
];

const ACTION_OPTIONS = [
  "Let trusted folks know I am okay",
  "Help with chores around the house",
  "Coordinate or offer a ride",
  "Invite someone for coffee or tea",
  "Keep plans in one shared calendar",
  "Know what others in my circle need",
];

export function ConcentricRingsMatcher() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);

  const handlePersonSelect = (person) => {
    setSelectedPerson((prev) => (prev === person ? null : person));
  };

  const handleActionSelect = (action) => {
    setSelectedAction((prev) => (prev === action ? null : action));
  };

  const handleReset = () => {
    setSelectedPerson(null);
    setSelectedAction(null);
  };

  return (
    <div className="surface-card overflow-hidden p-6 sm:p-8 md:p-10 border border-hairline-leaf bg-gradient-to-br from-white via-mist/30 to-sprout/40">
      <Reveal delay={0}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-hairline pb-5">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-sprout text-leaf-deep">
              <Users className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink">
                The Concentric Rings of Support
              </h3>
              <p className="text-sm text-ink-soft mt-0.5">
                Explore how thoughtful intention turns into everyday mutual support.
              </p>
            </div>
          </div>

          {(selectedPerson || selectedAction) && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full border border-hairline bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-soft shadow-xs hover:border-brand-light hover:text-brand transition-colors cursor-pointer"
            >
              <RotateCcw className="size-3.5" aria-hidden="true" />
              Reset Match
            </button>
          )}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Ring 1 */}
        <Reveal delay={80} className="rounded-2xl border border-hairline bg-white/90 p-5 sm:p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand">
              <span className="grid size-6 place-items-center rounded-full bg-mist text-brand text-xs font-extrabold">1</span>
              1st Ring: Who Comes to Mind?
            </span>
            <span className="text-xs text-ink-soft">Tap to pick</span>
          </div>
          <p className="mt-2 text-xs text-ink-soft">
            Think about the people in your life who might appreciate closer connection:
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {PEOPLE_OPTIONS.map((person) => {
              const isSelected = selectedPerson === person;
              return (
                <button
                  key={person}
                  type="button"
                  onClick={() => handlePersonSelect(person)}
                  className={clsx(
                    "cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                    isSelected
                      ? "bg-brand text-white shadow-lift scale-105"
                      : "bg-mist text-ink hover:bg-sprout hover:text-brand"
                  )}
                >
                  {person}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Ring 2 */}
        <Reveal delay={140} className="rounded-2xl border border-hairline bg-white/90 p-5 sm:p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-leaf-deep">
              <span className="grid size-6 place-items-center rounded-full bg-sprout text-leaf-deep text-xs font-extrabold">2</span>
              2nd Ring: What NC Does For You
            </span>
            <span className="text-xs text-ink-soft">Tap to pair</span>
          </div>
          <p className="mt-2 text-xs text-ink-soft">
            Everyday intentions made effortless through shared micro-circles:
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {ACTION_OPTIONS.map((action) => {
              const isSelected = selectedAction === action;
              return (
                <button
                  key={action}
                  type="button"
                  onClick={() => handleActionSelect(action)}
                  className={clsx(
                    "cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                    isSelected
                      ? "bg-leaf-deep text-white shadow-lift scale-105"
                      : "bg-cream text-ink border border-hairline hover:bg-sprout hover:text-leaf-deep"
                  )}
                >
                  “{action}”
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* Match result preview card */}
      <Reveal delay={200} className="mt-8">
        <div className="relative overflow-hidden rounded-2xl border border-hairline bg-white p-5 sm:p-6 shadow-lift">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <span
                className={clsx(
                  "grid size-10 shrink-0 place-items-center rounded-xl transition-colors",
                  selectedPerson && selectedAction
                    ? "bg-brand text-white shadow-soft"
                    : "bg-mist text-ink-soft"
                )}
              >
                <Sparkles className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand">
                  Interactive Circle Connection
                </p>
                <div className="mt-1 text-sm sm:text-base text-ink">
                  {selectedPerson && selectedAction ? (
                    <span className="leading-relaxed">
                      Pairing <strong className="font-bold text-brand">{selectedPerson}</strong> with{" "}
                      <strong className="font-bold text-leaf-deep">“{selectedAction}”</strong>.
                      <span className="block text-xs sm:text-sm font-medium text-leaf-deep mt-1">
                        ✨ Ready to create an intentional pod or invite them to your circle!
                      </span>
                    </span>
                  ) : selectedPerson ? (
                    <span>
                      Selected <strong className="font-semibold text-brand">{selectedPerson}</strong>. Pick a support intention from Ring 2!
                    </span>
                  ) : selectedAction ? (
                    <span>
                      Selected <strong className="font-semibold text-leaf-deep">“{selectedAction}”</strong>. Pick who comes to mind from Ring 1!
                    </span>
                  ) : (
                    <span className="text-ink-soft">
                      Tap one person from Ring 1 and one intention from Ring 2 to preview your custom circle plan.
                    </span>
                  )}
                </div>
              </div>
            </div>

            {selectedPerson && selectedAction && (
              <Link
                href="/#download"
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lift hover:bg-brand-bright transition-all hover:-translate-y-0.5"
              >
                Create This Circle
              </Link>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
