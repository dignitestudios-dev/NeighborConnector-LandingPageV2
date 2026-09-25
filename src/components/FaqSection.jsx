"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { Reveal } from "./Reveal";

const FAQ_ITEMS = [
  {
    q: "What is NeighborConnector™?",
    a: "NeighborConnector™ is a free app that helps you build small, private circles of neighbors, friends, and family so you can check in on each other, ask for help, chat, and plan things together.",
  },
  {
    q: "Is the app really free?",
    a: "Yes. NeighborConnector™ is completely free. It's built by Community Care Housing Foundation, a nonprofit, and there are no ads and no selling of your data.",
  },
  {
    q: "What is a circle, and how big should it be?",
    a: "A circle is a private, invitation-only group — usually 2 to 10 people. It might be your street, your family, or a few close friends. Small circles work best because everyone actually knows each other.",
  },
  {
    q: "Who can see what I share?",
    a: "Only the members of your circle. There are no public profiles and no public feeds, and you approve every request to join.",
  },
  {
    q: "How do daily check-ins work?",
    a: "You can mark yourself “Safe” each day so your circle knows you're doing well. It's completely optional. In a real emergency, always call 911.",
  },
  {
    q: "Who is Holly?",
    a: "Holly is your friendly in-app guide. She answers questions while you learn the app and walks you through things step by step — because not everyone is comfortable with technology, and that's perfectly okay.",
  },
  {
    q: "Is it easy to use if I'm not comfortable with technology?",
    a: "That's exactly who we designed it for. Large readable text, high-contrast colors, simple navigation, and Holly on hand whenever you have a question.",
  },
  {
    q: "How do I get started?",
    a: "Download the app from the App Store or Google Play, create your profile, then create a circle or join one with an invitation code.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal delay={0}>
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-6 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Questions? Ask Holly.
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Holly answers the things people ask most. If something isn’t here, she’s always available inside the app.
          </p>
          <img
            src="/assets/holly.png"
            alt="Holly, the friendly NeighborConnector in-app guide"
            loading="lazy"
            className="animate-float-mid mt-8 w-40 sm:w-48"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-[1.5rem] border border-hairline bg-white px-6 shadow-soft transition-all duration-300"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleItem(idx)}
                      className="flex w-full items-center justify-between cursor-pointer py-5 text-left text-base font-semibold text-ink sm:text-lg"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={clsx(
                          "size-5 shrink-0 text-ink-soft transition-transform duration-300 ml-4",
                          isOpen && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    className={clsx(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-5"
                        : "grid-rows-[0fr] opacity-0 pb-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-ink-soft">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
