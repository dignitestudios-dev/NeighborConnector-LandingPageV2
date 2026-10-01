"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartHandshake, LayoutGrid, Rocket } from "lucide-react";
import clsx from "clsx";

export const HOW_IT_WORKS_TABS = [
  {
    id: "circle-living",
    label: "Circle Living™",
    description: "Small circles & real relationships",
    href: "/how-it-works/circle-living",
    icon: HeartHandshake,
  },
  {
    id: "core-features",
    label: "Core Features",
    description: "Features & support rings",
    href: "/how-it-works/core-features",
    icon: LayoutGrid,
  },
  {
    id: "get-started",
    label: "Get Started",
    description: "8-step roadmap & setup",
    href: "/how-it-works/get-started",
    icon: Rocket,
  },
];

export function HowItWorksTabs({ activeTab }) {
  const pathname = usePathname();

  return (
    <div className="sticky top-18 z-40 w-full border-b border-hairline bg-white/90 backdrop-blur-xl py-3">
      <div className="container-page">
        <nav
          aria-label="How It Works Navigation"
          className="mx-auto flex max-w-2xl items-center justify-center rounded-full border border-hairline bg-mist/60 p-1.5 shadow-soft"
        >
          {HOW_IT_WORKS_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive =
              activeTab === tab.id ||
              pathname === tab.href ||
              pathname === `/${tab.id}`;

            return (
              <Link
                key={tab.id}
                href={tab.href}
                className={clsx(
                  "flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 px-3 text-xs sm:text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "bg-brand text-white shadow-lift"
                    : "text-ink-soft hover:bg-white hover:text-brand"
                )}
              >
                <Icon className={clsx("size-4 shrink-0", isActive ? "text-white" : "text-brand")} aria-hidden="true" />
                <span className="truncate">{tab.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
