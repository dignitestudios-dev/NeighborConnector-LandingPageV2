"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why NeighborConnector", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-hairline/80 bg-white/80 backdrop-blur-xl shadow-xs"
          : "border-b border-transparent"
      )}
    >
      <nav
        aria-label="Main"
        className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 md:py-4"
      >
        <a href="#top" className="flex min-w-0 items-center">
          <img
            src="/assets/logo-trim.png"
            alt="NeighborConnector logo"
            width="2838"
            height="1688"
            className="h-9 w-auto md:h-11"
          />
          <span className="sr-only">NeighborConnector home</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-mist hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#download"
            className="items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-brand text-primary-foreground shadow-lift hover:-translate-y-0.5 hover:bg-brand-bright h-10 px-5 py-2 ml-2 hidden sm:inline-flex"
          >
            Get Started
          </a>

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

      <div
        id="mobile-menu"
        className={clsx(
          "overflow-hidden border-t border-hairline bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <ul className="container-page flex flex-col py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-mist"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="px-3 pt-2 pb-3 sm:hidden">
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-brand text-primary-foreground shadow-lift hover:-translate-y-0.5 hover:bg-brand-bright h-12 px-7 text-[0.95rem] w-full"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
