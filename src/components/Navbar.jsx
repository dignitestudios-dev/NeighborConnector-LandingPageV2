"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, HeartHandshake, LayoutGrid, Menu, Rocket, X } from "lucide-react";
import clsx from "clsx";

const HOW_IT_WORKS_DROPDOWN = [
  {
    title: "Circle Living™",
    description: "Small circles, real relationships & mutual support",
    href: "/how-it-works/circle-living",
    icon: HeartHandshake,
  },
  {
    title: "Core Features",
    description: "Daily check-ins, chores, rides & support rings",
    href: "/how-it-works/core-features",
    icon: LayoutGrid,
  },
  {
    title: "Get Started",
    description: "8-step roadmap to put NeighborConnector to work",
    href: "/how-it-works/get-started",
    icon: Rocket,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(true);
  const dropdownTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const isHowItWorksActive =
    pathname.startsWith("/how-it-works") ||
    pathname === "/circle-living" ||
    pathname === "/core-features" ||
    pathname === "/app-and-rings" ||
    pathname === "/get-started";

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "border-b border-hairline/80 bg-white/90 backdrop-blur-xl shadow-xs"
          : "border-b border-transparent bg-white/60 backdrop-blur-md"
      )}
    >
      <nav
        aria-label="Main"
        className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 md:py-4"
      >
        <Link href="/" className="flex min-w-0 items-center">
          <img
            src="/assets/logo-trim.png"
            alt="NeighborConnector logo"
            width="2838"
            height="1688"
            className="h-9 w-auto md:h-11"
          />
          <span className="sr-only">NeighborConnector home</span>
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 lg:flex">
            <li>
              <Link
                href="/#features"
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-mist hover:text-brand"
              >
                Features
              </Link>
            </li>

            {/* How It Works with Dropdown */}
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/#how-it-works"
                onClick={() => setDropdownOpen(false)}
                className={clsx(
                  "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer",
                  isHowItWorksActive || dropdownOpen
                    ? "bg-mist text-brand font-semibold"
                    : "text-ink-soft hover:bg-mist hover:text-brand"
                )}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>How It Works</span>
                <ChevronDown
                  className={clsx(
                    "size-4 transition-transform duration-200",
                    dropdownOpen && "rotate-180 text-brand"
                  )}
                  aria-hidden="true"
                />
              </Link>

              {/* Dropdown Menu */}
              <div
                className={clsx(
                  "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200 w-80",
                  dropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="surface-card p-2.5 shadow-lift border border-hairline/80 bg-white/95 backdrop-blur-2xl">
                  <div className="px-3 py-2 border-b border-hairline mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                      How It Works Guide
                    </span>
                  </div>

                  <div className="space-y-1">
                    {HOW_IT_WORKS_DROPDOWN.map((item) => {
                      const Icon = item.icon;
                      const isItemActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className={clsx(
                            "flex items-start gap-3 rounded-xl p-2.5 transition-all",
                            isItemActive
                              ? "bg-sprout/60 text-brand"
                              : "hover:bg-mist text-ink hover:text-brand"
                          )}
                        >
                          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white border border-hairline text-brand shadow-2xs mt-0.5">
                            <Icon className="size-4" aria-hidden="true" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-bold leading-tight">
                              {item.title}
                            </p>
                            <p className="text-xs text-ink-soft line-clamp-1 mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/#why"
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-mist hover:text-brand"
              >
                Why NeighborConnector
              </Link>
            </li>

            <li>
              <Link
                href="/#faq"
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-mist hover:text-brand"
              >
                FAQ
              </Link>
            </li>

            <li>
              <Link
                href="/#about"
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-mist hover:text-brand"
              >
                About
              </Link>
            </li>
          </ul>

          <Link
            href="/#download"
            className="items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-brand text-primary-foreground shadow-lift hover:-translate-y-0.5 hover:bg-brand-bright h-10 px-5 py-2 ml-2 hidden sm:inline-flex"
          >
            Get Started
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="ml-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline bg-white text-brand shadow-soft lg:hidden cursor-pointer"
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={clsx(
          "overflow-hidden border-t border-hairline bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          mobileOpen ? "max-h-[85vh] overflow-y-auto opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <ul className="container-page flex flex-col py-3 space-y-1">
          <li>
            <Link
              href="/#features"
              onClick={() => setMobileOpen(false)}
              className="block rounded-2xl px-3 py-2.5 text-base font-medium text-ink transition-colors hover:bg-mist"
            >
              Features
            </Link>
          </li>

          {/* Mobile How It Works Submenu */}
          <li className="rounded-2xl border border-hairline/60 bg-cream/40 p-2">
            <div className="flex items-center justify-between">
              <Link
                href="/#how-it-works"
                onClick={() => setMobileOpen(false)}
                className="block px-2 py-1 text-base font-semibold text-brand hover:underline"
              >
                How It Works
              </Link>
              <button
                type="button"
                aria-label="Toggle How It Works submenu"
                onClick={() => setMobileDropdownOpen((prev) => !prev)}
                className="p-1 text-brand cursor-pointer"
              >
                <ChevronDown
                  className={clsx(
                    "size-4 transition-transform",
                    mobileDropdownOpen && "rotate-180"
                  )}
                />
              </button>
            </div>

            {mobileDropdownOpen && (
              <div className="mt-2 space-y-1 pt-1 border-t border-hairline">
                {HOW_IT_WORKS_DROPDOWN.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm font-medium text-ink hover:bg-mist transition-colors"
                    >
                      <span className="grid size-7 place-items-center rounded-lg bg-sprout text-leaf-deep">
                        <Icon className="size-3.5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs text-ink-soft line-clamp-1">{item.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </li>

          <li>
            <Link
              href="/#why"
              onClick={() => setMobileOpen(false)}
              className="block rounded-2xl px-3 py-2.5 text-base font-medium text-ink transition-colors hover:bg-mist"
            >
              Why NeighborConnector
            </Link>
          </li>

          <li>
            <Link
              href="/#faq"
              onClick={() => setMobileOpen(false)}
              className="block rounded-2xl px-3 py-2.5 text-base font-medium text-ink transition-colors hover:bg-mist"
            >
              FAQ
            </Link>
          </li>

          <li>
            <Link
              href="/#about"
              onClick={() => setMobileOpen(false)}
              className="block rounded-2xl px-3 py-2.5 text-base font-medium text-ink transition-colors hover:bg-mist"
            >
              About
            </Link>
          </li>

          <li className="px-3 pt-2 pb-3 sm:hidden">
            <Link
              href="/#download"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-brand text-primary-foreground shadow-lift hover:-translate-y-0.5 hover:bg-brand-bright h-12 px-7 text-[0.95rem] w-full"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
