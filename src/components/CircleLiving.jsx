"use client";

import { useEffect, useRef, useState } from "react";
import { Heart, House, MapPin, Users } from "lucide-react";
import clsx from "clsx";
import { Reveal } from "./Reveal";

const MEMBERS = ["Marta", "James", "Ana", "Ben", "Ruth", "Léo", "Sofia"];

const CIRCLE_TYPES = [
  {
    icon: MapPin,
    title: "Your Street",
    body: "Neighbors nearby.",
  },
  {
    icon: Heart,
    title: "Your Family",
    body: "People you care about.",
  },
  {
    icon: Users,
    title: "Your Friends",
    body: "People you trust.",
  },
  {
    icon: House,
    title: "Your Community",
    body: "People you want to stay connected with.",
  },
];

function CircleDiagram() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[26rem]">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-hairline bg-gradient-to-br from-white to-mist"
      />
      <div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full border border-hairline-leaf"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full overflow-visible"
      >
        {MEMBERS.map((_, n) => {
          const r = (n / MEMBERS.length) * Math.PI * 2 - Math.PI / 2;
          const x2 = 50 + Math.cos(r) * 42;
          const y2 = 50 + Math.sin(r) * 42;
          return (
            <line
              key={n}
              x1="50"
              y1="50"
              x2={x2}
              y2={y2}
              stroke="var(--color-leaf)"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeDasharray="60"
              strokeDashoffset={shown ? 0 : 60}
              opacity={shown ? 0.85 : 0}
              style={{
                transition: `stroke-dashoffset 700ms ease-out ${
                  200 + n * 110
                }ms, opacity 500ms ease-out ${200 + n * 110}ms`,
              }}
            />
          );
        })}
      </svg>
      <div className="absolute top-1/2 left-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-center shadow-lift">
        <span className="px-2 text-xs leading-tight font-semibold text-white">
          You
        </span>
      </div>
      {MEMBERS.map((name, n) => {
        const r = (n / MEMBERS.length) * Math.PI * 2 - Math.PI / 2;
        const left = 50 + Math.cos(r) * 42;
        const top = 50 + Math.sin(r) * 42;
        return (
          <div
            key={name}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              transitionDelay: `${260 + n * 110}ms`,
            }}
            className={clsx(
              "absolute grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-hairline bg-white text-xs font-semibold text-brand shadow-soft transition-all duration-500 sm:size-16",
              shown ? "scale-100 opacity-100" : "scale-75 opacity-0"
            )}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
}

export function CircleLiving() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_50%_0%,var(--color-sprout)_0%,transparent_65%)]"
      />
      <div className="container-page">
        <Reveal delay={0} className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Circle Living™</span>
          <h2 className="mt-6 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Welcome to Circle Living™
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            NeighborConnector™ is built around small, trusted “micro-circles” of neighbors, friends, and family — the few people you want close, not the hundreds you don’t.
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <CircleDiagram />

          <div className="grid gap-4 sm:grid-cols-2">
            {CIRCLE_TYPES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={idx * 90}
                  className="surface-card p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="grid size-11 place-items-center rounded-2xl bg-sprout text-leaf-deep">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
