"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Award,
  ChevronDown,
  Compass,
  FileDown,
  FileSpreadsheet,
  FileText,
  HeartHandshake,
  HelpCircle,
  Home,
  LayoutGrid,
  Megaphone,
  Menu,
  Rocket,
  Smartphone,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import clsx from "clsx";

const WHY_DROPDOWN = [
  {
    title: "Explore the Possibilities",
    description: "Combines How NC Can Help, Who Comes to Mind, What It Can Do & Why It Matters",
    href: "/how-it-works/core-features",
    icon: Compass,
    subLink: {
      title: "What, Who & Why it Matters Guide",
      href: "/why-it-matters",
      icon: FileText,
    },
  },
  {
    title: "Circle Living™",
    description: "Small, private circles of 2–10 trusted people you know",
    href: "/how-it-works/circle-living",
    icon: HeartHandshake,
    subLink: {
      title: "Companion Worksheet",
      href: "/companion-worksheet",
      icon: FileSpreadsheet,
    },
  },
];

const HOW_IT_WORKS_DROPDOWN = [
  {
    title: "Your Circle(s) are Waiting",
    description: "Small circles, real relationships & mutual support",
    href: "/how-it-works/circle-living",
    icon: HeartHandshake,
  },
  {
    title: "8-Step Roadmap",
    description: "Putting NeighborConnector to work step by step",
    href: "/how-it-works/get-started",
    icon: Rocket,
  },
  {
    title: "Features",
    description: "Everything you need to stay connected and coordinate",
    href: "/#features",
    icon: LayoutGrid,
  },
];

const RESOURCES_DROPDOWN = [
  {
    title: "Downloadable Handouts",
    description: "Printable guides, the What/Who/Why Guide & Companion Worksheet",
    href: "/resources/downloadable-handouts",
    icon: FileDown,
  },
  {
    title: "FAQs",
    description: "Answers about privacy, daily check-in setup & mutual aid",
    href: "/resources/faqs",
    icon: HelpCircle,
  },
  {
    title: "App Screenshots",
    description: "Visual walkthrough of the circle feed, daily check-in & requests",
    href: "/resources/app-screenshots",
    icon: Smartphone,
  },
  {
    title: "Outreach Materials",
    description: "Invitation flyers, neighbor scripts & community announcement blurbs",
    href: "/resources/outreach-materials",
    icon: Megaphone,
  },
  {
    title: "Acknowledgements",
    description: "Honoring our founding nonprofit partners, advisors & volunteer champions",
    href: "/resources/acknowledgements",
    icon: Award,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop dropdown states
  const [whyDropdownOpen, setWhyDropdownOpen] = useState(false);
  const [howDropdownOpen, setHowDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  // Mobile submenu accordion states
  const [mobileWhyOpen, setMobileWhyOpen] = useState(false);
  const [mobileHowOpen, setMobileHowOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const whyTimerRef = useRef(null);
  const howTimerRef = useRef(null);
  const resourcesTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route changes
  useEffect(() => {
    setWhyDropdownOpen(false);
    setHowDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const handleWhyMouseEnter = () => {
    if (whyTimerRef.current) clearTimeout(whyTimerRef.current);
    if (howTimerRef.current) clearTimeout(howTimerRef.current);
    if (resourcesTimerRef.current) clearTimeout(resourcesTimerRef.current);
    setHowDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setWhyDropdownOpen(true);
  };

  const handleWhyMouseLeave = () => {
    whyTimerRef.current = setTimeout(() => {
      setWhyDropdownOpen(false);
    }, 150);
  };

  const handleHowMouseEnter = () => {
    if (howTimerRef.current) clearTimeout(howTimerRef.current);
    if (whyTimerRef.current) clearTimeout(whyTimerRef.current);
    if (resourcesTimerRef.current) clearTimeout(resourcesTimerRef.current);
    setWhyDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setHowDropdownOpen(true);
  };

  const handleHowMouseLeave = () => {
    howTimerRef.current = setTimeout(() => {
      setHowDropdownOpen(false);
    }, 150);
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesTimerRef.current) clearTimeout(resourcesTimerRef.current);
    if (whyTimerRef.current) clearTimeout(whyTimerRef.current);
    if (howTimerRef.current) clearTimeout(howTimerRef.current);
    setWhyDropdownOpen(false);
    setHowDropdownOpen(false);
    setResourcesDropdownOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimerRef.current = setTimeout(() => {
      setResourcesDropdownOpen(false);
    }, 150);
  };

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
        {/* Logo / Brand - Bigger logo */}
        <Link href="/" className="flex min-w-0 items-center">
          <picture>
            <source srcSet="/assets/logo-trim.webp" type="image/webp" />
            <img
              src="/assets/logo-trim.png"
              alt="NeighborConnector logo"
              width="2838"
              height="1688"
              fetchPriority="high"
              decoding="async"
              className="h-11 w-auto sm:h-12 md:h-14 transition-all"
            />
          </picture>
          <span className="sr-only">NeighborConnector home</span>
        </Link>

        {/* Desktop Navigation Links: Home, Why NeighborConnector ▾, How It Works ▾, Resources ▾, About, Contact, Get Started */}
        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 lg:flex">
            {/* 1. Home */}
            <li>
              <Link
                href="/"
                className={clsx(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors text-ink-soft hover:bg-mist hover:text-brand"
                )}
              >
                <Home className="size-3.5" aria-hidden="true" />
                <span>Home</span>
              </Link>
            </li>

            {/* 2. Why NeighborConnector with Dropdown */}
            <li
              className="relative"
              onMouseEnter={handleWhyMouseEnter}
              onMouseLeave={handleWhyMouseLeave}
            >
              <button
                type="button"
                onClick={() => setWhyDropdownOpen((prev) => !prev)}
                className={clsx(
                  "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
                  whyDropdownOpen
                    ? "bg-mist text-brand font-semibold"
                    : "text-ink-soft hover:bg-mist hover:text-brand"
                )}
                aria-expanded={whyDropdownOpen}
                aria-haspopup="true"
              >
                <span>Why NeighborConnector</span>
                <ChevronDown
                  className={clsx(
                    "size-4 transition-transform duration-200",
                    whyDropdownOpen && "rotate-180 text-brand"
                  )}
                  aria-hidden="true"
                />
              </button>

              {/* Why Dropdown Menu */}
              <div
                className={clsx(
                  "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200 w-96 z-50",
                  whyDropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="surface-card p-3 shadow-lift border border-hairline/80 bg-white/95 backdrop-blur-2xl rounded-2xl">
                  <div className="px-3 py-2 border-b border-hairline mb-2 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                      Why NeighborConnector
                    </span>
                    <span className="text-[11px] font-medium text-ink-soft">
                      Purpose &amp; Guides
                    </span>
                  </div>

                  <div className="space-y-2">
                    {WHY_DROPDOWN.map((item) => {
                      const Icon = item.icon;
                      const SubIcon = item.subLink.icon;
                      return (
                        <div
                          key={item.title}
                          className="rounded-xl p-2.5 hover:bg-mist/80 transition-all border border-transparent hover:border-hairline group"
                        >
                          <Link
                            href={item.href}
                            onClick={() => setWhyDropdownOpen(false)}
                            className="flex items-start gap-3"
                          >
                            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-sprout text-leaf-deep shadow-2xs mt-0.5 group-hover:scale-105 transition-transform">
                              <Icon className="size-4.5" aria-hidden="true" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-bold text-ink group-hover:text-brand transition-colors flex items-center justify-between">
                                <span>{item.title}</span>
                                <ArrowRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand shrink-0" />
                              </p>
                              <p className="text-xs text-ink-soft mt-0.5 leading-snug">
                                {item.description}
                              </p>
                            </div>
                          </Link>

                          {/* Embedded direct sublink to Guide / Companion Worksheet */}
                          <div className="mt-2 pt-2 border-t border-hairline/70 pl-12">
                            <Link
                              href={item.subLink.href}
                              onClick={() => setWhyDropdownOpen(false)}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-bright hover:underline group/sub"
                            >
                              <SubIcon className="size-3 text-leaf-deep shrink-0" />
                              <span>{item.subLink.title}</span>
                              <span className="text-[10px] text-leaf-deep ml-0.5">→</span>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>

            {/* 3. How It Works with Dropdown: Your Circle(s) are Waiting, 8-Step Roadmap, Features */}
            <li
              className="relative"
              onMouseEnter={handleHowMouseEnter}
              onMouseLeave={handleHowMouseLeave}
            >
              <button
                type="button"
                onClick={() => setHowDropdownOpen((prev) => !prev)}
                className={clsx(
                  "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
                  howDropdownOpen
                    ? "bg-mist text-brand font-semibold"
                    : "text-ink-soft hover:bg-mist hover:text-brand"
                )}
                aria-expanded={howDropdownOpen}
                aria-haspopup="true"
              >
                <span>How It Works</span>
                <ChevronDown
                  className={clsx(
                    "size-4 transition-transform duration-200",
                    howDropdownOpen && "rotate-180 text-brand"
                  )}
                  aria-hidden="true"
                />
              </button>

              {/* How It Works Dropdown Menu */}
              <div
                className={clsx(
                  "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200 w-84 z-50",
                  howDropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="surface-card p-2.5 shadow-lift border border-hairline/80 bg-white/95 backdrop-blur-2xl rounded-2xl">
                  <div className="px-3 py-2 border-b border-hairline mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                      How It Works Guide
                    </span>
                  </div>

                  <div className="space-y-1">
                    {HOW_IT_WORKS_DROPDOWN.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setHowDropdownOpen(false)}
                          className="flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-mist text-ink hover:text-brand"
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

            {/* 4. Resources with Dropdown: Downloadable Handouts, FAQs, App Screenshots, Outreach Materials, Acknowledgements */}
            <li
              className="relative"
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
              <button
                type="button"
                onClick={() => setResourcesDropdownOpen((prev) => !prev)}
                className={clsx(
                  "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
                  resourcesDropdownOpen
                    ? "bg-mist text-brand font-semibold"
                    : "text-ink-soft hover:bg-mist hover:text-brand"
                )}
                aria-expanded={resourcesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Resources</span>
                <ChevronDown
                  className={clsx(
                    "size-4 transition-transform duration-200",
                    resourcesDropdownOpen && "rotate-180 text-brand"
                  )}
                  aria-hidden="true"
                />
              </button>

              {/* Resources Dropdown Menu */}
              <div
                className={clsx(
                  "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200 w-88 z-50",
                  resourcesDropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="surface-card p-2.5 shadow-lift border border-hairline/80 bg-white/95 backdrop-blur-2xl rounded-2xl">
                  <div className="px-3 py-2 border-b border-hairline mb-1 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                      Resources &amp; Toolkits
                    </span>
                    <Link
                      href="/resources"
                      onClick={() => setResourcesDropdownOpen(false)}
                      className="text-[11px] font-semibold text-brand hover:underline"
                    >
                      View All
                    </Link>
                  </div>

                  <div className="space-y-1">
                    {RESOURCES_DROPDOWN.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setResourcesDropdownOpen(false)}
                          className="flex items-start gap-3 rounded-xl p-2.5 transition-all group hover:bg-mist text-ink hover:text-brand"
                        >
                          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-sprout/60 text-leaf-deep shadow-2xs mt-0.5 group-hover:scale-105 transition-transform">
                            <Icon className="size-4" aria-hidden="true" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-bold leading-tight flex items-center justify-between">
                              <span>{item.title}</span>
                              <ArrowRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand shrink-0 ml-1" />
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

            {/* 5. About */}
            <li>
              <Link
                href="/#about"
                className="rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-mist hover:text-brand"
              >
                About
              </Link>
            </li>

            {/* 6. Contact */}
            <li>
              <a
                href="mailto:Info@CommunityCareHousing.org"
                className="rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-mist hover:text-brand"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* 7. Get Started Top CTA Button */}
          <Link
            href="/#download"
            className="items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-brand text-primary-foreground shadow-lift hover:-translate-y-0.5 hover:bg-brand-bright h-10 px-5 py-2 ml-2 hidden sm:inline-flex"
          >
            Get Started
          </Link>

          {/* Mobile Hamburger Toggle */}
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
          mobileOpen ? "max-h-[88vh] overflow-y-auto opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <ul className="container-page flex flex-col py-3 space-y-1.5">
          {/* Mobile Home */}
          <li>
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5 rounded-2xl px-3 py-2.5 text-base font-semibold text-ink transition-colors hover:bg-mist"
            >
              <Home className="size-4 text-brand" />
              <span>Home</span>
            </Link>
          </li>

          {/* Mobile Why NeighborConnector Submenu */}
          <li className="rounded-2xl border border-hairline/80 bg-cream/40 p-2.5">
            <div className="flex items-center justify-between">
              <span className="block px-2 py-1 text-base font-bold text-brand">
                Why NeighborConnector
              </span>
              <button
                type="button"
                aria-label="Toggle Why NeighborConnector submenu"
                onClick={() => setMobileWhyOpen((prev) => !prev)}
                className="p-1.5 text-brand rounded-lg hover:bg-white cursor-pointer"
              >
                <ChevronDown
                  className={clsx(
                    "size-4 transition-transform duration-200",
                    mobileWhyOpen && "rotate-180"
                  )}
                />
              </button>
            </div>

            {mobileWhyOpen && (
              <div className="mt-2 space-y-2 pt-2 border-t border-hairline">
                {WHY_DROPDOWN.map((item) => {
                  const Icon = item.icon;
                  const SubIcon = item.subLink.icon;
                  return (
                    <div key={item.title} className="rounded-xl bg-white p-2.5 border border-hairline">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-start gap-2.5 text-sm font-semibold text-ink"
                      >
                        <span className="grid size-7 place-items-center rounded-lg bg-sprout text-leaf-deep shrink-0 mt-0.5">
                          <Icon className="size-3.5" />
                        </span>
                        <div>
                          <p className="text-sm font-bold leading-tight">{item.title}</p>
                          <p className="text-xs text-ink-soft mt-0.5">{item.description}</p>
                        </div>
                      </Link>

                      <div className="mt-2 pt-2 border-t border-hairline pl-9">
                        <Link
                          href={item.subLink.href}
                          onClick={() => setMobileOpen(false)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand"
                        >
                          <SubIcon className="size-3 text-leaf-deep" />
                          <span>{item.subLink.title}</span>
                          <span className="text-[10px]">→</span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </li>

          {/* Mobile How It Works Submenu */}
          <li className="rounded-2xl border border-hairline/80 bg-mist/40 p-2.5">
            <div className="flex items-center justify-between">
              <span className="block px-2 py-1 text-base font-bold text-brand">
                How It Works
              </span>
              <button
                type="button"
                aria-label="Toggle How It Works submenu"
                onClick={() => setMobileHowOpen((prev) => !prev)}
                className="p-1.5 text-brand rounded-lg hover:bg-white cursor-pointer"
              >
                <ChevronDown
                  className={clsx(
                    "size-4 transition-transform duration-200",
                    mobileHowOpen && "rotate-180"
                  )}
                />
              </button>
            </div>

            {mobileHowOpen && (
              <div className="mt-2 space-y-1 pt-1 border-t border-hairline">
                {HOW_IT_WORKS_DROPDOWN.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm font-medium text-ink hover:bg-white transition-colors"
                    >
                      <span className="grid size-7 place-items-center rounded-lg bg-sprout text-leaf-deep shrink-0">
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

          {/* Mobile Resources Submenu */}
          <li className="rounded-2xl border border-hairline/80 bg-sprout/30 p-2.5">
            <div className="flex items-center justify-between">
              <span className="block px-2 py-1 text-base font-bold text-brand">
                Resources
              </span>
              <button
                type="button"
                aria-label="Toggle Resources submenu"
                onClick={() => setMobileResourcesOpen((prev) => !prev)}
                className="p-1.5 text-brand rounded-lg hover:bg-white cursor-pointer"
              >
                <ChevronDown
                  className={clsx(
                    "size-4 transition-transform duration-200",
                    mobileResourcesOpen && "rotate-180"
                  )}
                />
              </button>
            </div>

            {mobileResourcesOpen && (
              <div className="mt-2 space-y-1 pt-1 border-t border-hairline">
                {RESOURCES_DROPDOWN.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm font-medium text-ink hover:bg-white transition-colors"
                    >
                      <span className="grid size-7 place-items-center rounded-lg bg-white text-leaf-deep shrink-0 border border-hairline">
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

          {/* Mobile About */}
          <li>
            <Link
              href="/#about"
              onClick={() => setMobileOpen(false)}
              className="block rounded-2xl px-3 py-2 text-base font-medium text-ink transition-colors hover:bg-mist"
            >
              About
            </Link>
          </li>

          {/* Mobile Contact */}
          <li>
            <a
              href="mailto:Info@CommunityCareHousing.org"
              onClick={() => setMobileOpen(false)}
              className="block rounded-2xl px-3 py-2 text-base font-medium text-ink transition-colors hover:bg-mist"
            >
              Contact
            </a>
          </li>

          {/* Mobile CTA */}
          <li className="px-2 pt-2 pb-3 sm:hidden">
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
