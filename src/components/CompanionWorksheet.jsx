"use client";

import { useState } from "react";
import {
  Check,
  FileSpreadsheet,
  Heart,
  HeartHandshake,
  Lightbulb,
  Plus,
  Printer,
  ShieldCheck,
  Sparkles,
  Trash2,
  Users,
} from "lucide-react";
import clsx from "clsx";
import { Reveal } from "./Reveal";

const DEFAULT_MEMBERS = [
  { id: 1, name: "Maria S.", relation: "Next-door Neighbor", help: "Plant watering & packages", checkIn: true },
  { id: 2, name: "David K.", relation: "Friend / 2 blocks away", help: "Rides to clinic & errands", checkIn: true },
  { id: 3, name: "Sarah L.", relation: "Daughter / Family", help: "Emergency contact & weekly call", checkIn: false },
];

const SUPPORT_CATEGORIES = [
  { id: "checkin", label: "Daily Safe Check-Ins", desc: "One-tap reassurance each morning so everyone knows you are doing well." },
  { id: "rides", label: "Rides & Appointments", desc: "Doctor appointments, airport rides, grocery runs, or errands." },
  { id: "chores", label: "Home Chores & Tool Lending", desc: "Yard work, snow shoveling, changing lightbulbs, borrowing a ladder." },
  { id: "pets-plants", label: "Pet Care & Plant Watering", desc: "Feeding pets or watering indoor plants while someone is away." },
  { id: "social", label: "Companionship & Gatherings", desc: "Coffee dates, neighborhood walks, potlucks, and friendly conversations." },
  { id: "emergency", label: "Emergency Contact Backup", desc: "Trusted local neighbors who can check on you in an urgent situation." },
];

export function CompanionWorksheet() {
  const [circleName, setCircleName] = useState("Our Street & Family Circle");
  const [circleType, setCircleType] = useState("Neighbors & Friends");
  const [members, setMembers] = useState(DEFAULT_MEMBERS);
  const [selectedSupports, setSelectedSupports] = useState(
    new Set(["checkin", "rides", "chores", "pets-plants", "social"])
  );
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberRelation, setNewMemberRelation] = useState("");
  const [newMemberHelp, setNewMemberHelp] = useState("");

  const toggleSupport = (id) => {
    setSelectedSupports((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const addMember = (e) => {
    e.preventDefault();
    if (!newMemberName.trim()) return;
    setMembers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newMemberName.trim(),
        relation: newMemberRelation.trim() || "Neighbor",
        help: newMemberHelp.trim() || "Mutual support",
        checkIn: true,
      },
    ]);
    setNewMemberName("");
    setNewMemberRelation("");
    setNewMemberHelp("");
  };

  const removeMember = (id) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section id="companion-worksheet" className="scroll-mt-28 py-16 md:py-24">
      <div className="container-page max-w-4xl">
        <Reveal delay={0}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-hairline pb-6">
            <div>
              <span className="eyebrow">
                <FileSpreadsheet className="size-3.5 text-leaf-deep" />
                Planning Tool
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl tracking-tight">
                Circle Living™ <span className="text-gradient-brand">Companion Worksheet</span>
              </h2>
              <p className="mt-2 text-base text-ink-soft max-w-2xl">
                Use this practical planning worksheet to organize your private circle (2 to 10 people), decide what support you will exchange, and establish your trusted safety net.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start sm:self-auto shrink-0 print:hidden">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lift hover:bg-brand-bright transition-all cursor-pointer"
              >
                <Printer className="size-4" />
                <span>Download the Companion Worksheet (FREE)</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Worksheet Form Sheet */}
        <div className="mt-8 space-y-8 bg-white border border-hairline rounded-3xl p-6 sm:p-10 shadow-soft">
          {/* Section 1: Circle Basics */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="grid size-7 place-items-center rounded-lg bg-sprout text-leaf-deep font-bold text-xs">
                1
              </span>
              <h3 className="text-lg font-bold text-ink">Name &amp; Type Your Circle</h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                  Circle Name
                </label>
                <input
                  type="text"
                  value={circleName}
                  onChange={(e) => setCircleName(e.target.value)}
                  placeholder="e.g. Maple Avenue Circle, The Miller Family"
                  className="w-full rounded-xl border border-hairline bg-mist/40 px-3.5 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                  Circle Category
                </label>
                <input
                  type="text"
                  value={circleType}
                  onChange={(e) => setCircleType(e.target.value)}
                  placeholder="e.g. Street Neighbors, Family, Walking Club"
                  className="w-full rounded-xl border border-hairline bg-mist/40 px-3.5 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Circle Members Roster */}
          <div className="pt-6 border-t border-hairline">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="grid size-7 place-items-center rounded-lg bg-sprout text-leaf-deep font-bold text-xs">
                  2
                </span>
                <h3 className="text-lg font-bold text-ink">
                  Circle Roster ({members.length} / 10 Trusted People)
                </h3>
              </div>
              <span className="text-xs text-ink-soft">Recommended: 2 to 10 members</span>
            </div>

            <div className="space-y-2.5">
              {members.map((member, idx) => (
                <div
                  key={member.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-mist/30 border border-hairline/80 hover:bg-mist/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-full bg-white text-brand font-bold text-xs border border-hairline shadow-2xs">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-ink">{member.name}</p>
                      <p className="text-xs text-ink-soft">{member.relation}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 pl-11 sm:pl-0">
                    <span className="text-xs text-ink-soft bg-white px-2.5 py-1 rounded-full border border-hairline">
                      {member.help}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeMember(member.id)}
                      className="print:hidden p-1.5 text-ink-soft hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                      title="Remove member"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Member Form */}
            {members.length < 10 && (
              <form onSubmit={addMember} className="print:hidden mt-4 p-4 rounded-2xl border border-dashed border-hairline-leaf bg-sprout/20">
                <p className="text-xs font-bold text-brand uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Plus className="size-3.5" /> Add Circle Member
                </p>
                <div className="grid gap-2 sm:grid-cols-3">
                  <input
                    type="text"
                    value={newMemberName}
                    onChange={(e) => setNewMemberName(e.target.value)}
                    placeholder="Member Name"
                    className="rounded-xl border border-hairline bg-white px-3 py-2 text-xs text-ink focus:border-brand focus:outline-none"
                  />
                  <input
                    type="text"
                    value={newMemberRelation}
                    onChange={(e) => setNewMemberRelation(e.target.value)}
                    placeholder="Relationship / Street"
                    className="rounded-xl border border-hairline bg-white px-3 py-2 text-xs text-ink focus:border-brand focus:outline-none"
                  />
                  <input
                    type="text"
                    value={newMemberHelp}
                    onChange={(e) => setNewMemberHelp(e.target.value)}
                    placeholder="Ways they can assist or role"
                    className="rounded-xl border border-hairline bg-white px-3 py-2 text-xs text-ink focus:border-brand focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!newMemberName.trim()}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-leaf-deep px-3.5 py-1.5 text-xs font-semibold text-white shadow-soft hover:bg-leaf transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Plus className="size-3" />
                  <span>Add to Worksheet</span>
                </button>
              </form>
            )}
          </div>

          {/* Section 3: Mutual Support Exchange */}
          <div className="pt-6 border-t border-hairline">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="grid size-7 place-items-center rounded-lg bg-sprout text-leaf-deep font-bold text-xs">
                3
              </span>
              <h3 className="text-lg font-bold text-ink">Support &amp; Connection Focus</h3>
            </div>

            <p className="text-xs text-ink-soft mb-3">
              Check off the types of everyday support and communication your circle intends to share:
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {SUPPORT_CATEGORIES.map((cat) => {
                const checked = selectedSupports.has(cat.id);
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => toggleSupport(cat.id)}
                    className={clsx(
                      "flex items-start gap-3 p-3.5 rounded-2xl border text-left transition-all cursor-pointer",
                      checked
                        ? "border-brand/40 bg-sprout/30 shadow-2xs"
                        : "border-hairline bg-white hover:bg-mist/40"
                    )}
                  >
                    <span
                      className={clsx(
                        "grid size-5 place-items-center rounded-md border shrink-0 mt-0.5 transition-colors",
                        checked
                          ? "bg-brand border-brand text-white"
                          : "border-hairline bg-white"
                      )}
                    >
                      {checked && <Check className="size-3.5" />}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-ink">{cat.label}</p>
                      <p className="text-[11px] text-ink-soft leading-tight mt-0.5">{cat.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 4: Privacy & Holly's Advice */}
          <div className="pt-6 border-t border-hairline">
            <div className="rounded-2xl bg-cream/70 p-5 border border-hairline flex flex-col sm:flex-row items-start gap-4">
              <img
                src="/assets/holly.png"
                alt="Holly"
                className="size-12 rounded-xl object-contain bg-white border border-hairline p-1 shrink-0"
              />
              <div className="text-xs leading-relaxed text-ink/80">
                <span className="font-bold text-brand block mb-1">Holly's Circle Living™ Tip:</span>
                "Start with just 2 or 3 people you already know and trust. Once you create your private circle in NeighborConnector™, you can send them your invite code. You control every member approval, and everything shared stays 100% private!"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

