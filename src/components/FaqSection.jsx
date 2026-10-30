"use client";

import { useId, useMemo, useState } from "react";
import { ChevronDown, HelpCircle, Mail, Phone, Search, Sparkles, X } from "lucide-react";
import clsx from "clsx";
import { Reveal } from "./Reveal";

export const FAQ_CATEGORIES = [
  {
    id: "getting-started",
    name: "Getting Started",
    items: [
      {
        id: "gs-1",
        q: "What is NeighborConnector™?",
        a: "Hi there! I'm Holly. NeighborConnector™ helps you build a small, trusted circle of neighbors, friends or family — usually 2 to 10 people — so you can stay connected, offer help and share companionship. It's your private, friendly community right where you live. You can also connect with close friends and family outside your neighborhood.",
      },
      {
        id: "gs-2",
        q: "How do I create my profile?",
        a: "Easy! Just download the app, add your name, a photo and a few details about yourself. You can also include up to 3 emergency contacts — that's totally optional. You're always in control of what you share.",
      },
      {
        id: "gs-3",
        q: "How do I create or join a group?",
        a: "Tap \"Create Group\" to start your own circle and invite trusted neighbors or friends. Or choose \"Join Group\" if someone sent you an invite code. Once approved, you'll be part of your own little community — private and secure!",
      },
      {
        id: "gs-4",
        q: "Is the app free?",
        a: "Yep, 100% free! NeighborConnector™ is powered by volunteers and supported by Community Care Housing, a nonprofit that helps build connected communities.",
      },
    ],
  },
  {
    id: "safety-privacy",
    name: "Safety & Privacy",
    items: [
      {
        id: "sp-1",
        q: "Who can see my information?",
        a: "Only people in your circle can see what you share. Circles are invite-only, so no strangers or random neighbors can peek in.",
      },
      {
        id: "sp-2",
        q: "Do I have to share my address or phone number?",
        a: "Nope! Share only what feels comfortable. Some people like adding contact info so others can reach them easily, but it's 100% your choice.",
      },
      {
        id: "sp-3",
        q: "How is my information protected?",
        a: "All chats and check-ins are secure and encrypted. Your data isn't sold or shared — ever. Your privacy matters here.",
      },
      {
        id: "sp-4",
        q: "What if someone makes me uncomfortable?",
        a: "You can report anyone right from the app. I'll walk you through it if you ever need help — you're always in control.",
      },
    ],
  },
  {
    id: "communication-features",
    name: "Communication & Features",
    items: [
      {
        id: "cf-1",
        q: "How do I message my circle?",
        a: "Either with group chat or create or respond to a post for occasional help, appointments or rideshares, home help or help plan events, gatherings or activities. Just type your message or add a photo. It's as easy as texting a friend — but your chat or post stays private within your circle.",
      },
      {
        id: "cf-2",
        q: "What are \"Optional Daily Check-Ins\"?",
        a: "Daily Check-Ins (optional) let you mark yourself \"Safe\" daily so neighbors know you're okay. It's great for peace of mind — especially for older adults or folks living alone. But remember, call 911 for real emergencies!",
      },
      {
        id: "cf-3",
        q: "Can I join more than one circle?",
        a: "Absolutely! You might have one for your street, one for family and one for friends. You can switch between them anytime.",
      },
      {
        id: "cf-4",
        q: "Can we plan events in the app?",
        a: "Yes! Use your circle to plan coffee dates, dinners or neighborhood walks. It's all about making connection easy and fun.",
      },
    ],
  },
  {
    id: "building-community",
    name: "Building Community",
    items: [
      {
        id: "bc-1",
        q: "What kinds of help can neighbors offer?",
        a: "So many things! Checking mail, watering plants, giving rides, picking up groceries or just sharing a friendly hello. It's amazing what small acts can do.",
      },
      {
        id: "bc-2",
        q: "What if I don't know many neighbors yet?",
        a: "That's okay! Start small — invite one or two people you trust. Great communities begin with just a couple of caring folks.",
      },
      {
        id: "bc-3",
        q: "I'm not very tech-savvy. Can you help me learn?",
        a: "Of course! That's what I'm here for. Ask me anything — like how to send a message, add a photo or check in. I'll guide you step by step.",
      },
    ],
  },
  {
    id: "about-the-app",
    name: "About the App",
    items: [
      {
        id: "aa-1",
        q: "Who created NeighborConnector™?",
        a: "We're part of Community Care Housing — a nonprofit that helps people build stronger, friendlier communities.",
      },
      {
        id: "aa-2",
        q: "Why was NeighborConnector™ created?",
        a: "Because loneliness is tough — and community makes it better. Or maybe you need a small favor from someone nearby. This app helps you connect naturally with people who care.",
      },
      {
        id: "aa-3",
        q: "How is this different from apps like Nextdoor or Facebook?",
        a: "Great question! NeighborConnector™ keeps things small and personal — no public feeds, no noise and no ads. Just real connection.",
      },
      {
        id: "aa-4",
        q: "Can I use it if I live in an apartment or senior community?",
        a: "Definitely! Circles work anywhere — from apartments to senior living or single-family homes. If you've got neighbors, friends or family, you can connect.",
      },
    ],
  },
  {
    id: "help-support",
    name: "Help & Support",
    items: [
      {
        id: "hs-1",
        q: "How do I reach support if I get stuck?",
        a: "You can message me here for help or email Info@CommunityCareHousing.org. If it's urgent, call (720)-693-2522. Someone from our team will gladly assist.",
      },
      {
        id: "hs-2",
        q: "Can I donate or sponsor the app?",
        a: "Yes, thank you for asking! Donations help us address a range of needs, including expanding our app's reach and supporting shared housing and residents in need. Visit the website Community Care Housing.org or email Info@CommunityCareHousing.org to learn more.",
      },
    ],
  },
];

function formatAnswer(text) {
  // Replace links, emails, and phone numbers with clickable interactive elements
  const parts = [];
  let remaining = text;

  // Pattern matches emails, phone numbers, and website mentions
  const pattern = /(Info@CommunityCareHousing\.org|\(720\)-693-2522|Community Care Housing\.org)/gi;
  let match;
  let lastIdx = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(text.substring(lastIdx, match.index));
    }
    const token = match[0];
    if (token.toLowerCase().includes("info@communitycarehousing.org")) {
      parts.push(
        <a
          key={match.index}
          href="mailto:Info@CommunityCareHousing.org"
          className="font-semibold text-brand underline decoration-brand/30 underline-offset-2 transition-colors hover:text-brand-bright hover:decoration-brand"
        >
          {token}
        </a>
      );
    } else if (token.includes("720")) {
      parts.push(
        <a
          key={match.index}
          href="tel:7206932522"
          className="font-semibold text-brand underline decoration-brand/30 underline-offset-2 transition-colors hover:text-brand-bright hover:decoration-brand"
        >
          {token}
        </a>
      );
    } else if (token.toLowerCase().includes("community care housing.org")) {
      parts.push(
        <a
          key={match.index}
          href="https://www.communitycarehousing.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand underline decoration-brand/30 underline-offset-2 transition-colors hover:text-brand-bright hover:decoration-brand"
        >
          {token}
        </a>
      );
    }
    lastIdx = pattern.lastIndex;
  }

  if (lastIdx < text.length) {
    parts.push(text.substring(lastIdx));
  }

  return parts;
}

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIds, setOpenIds] = useState(new Set(["gs-1"]));
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputId = useId();

  const totalCount = useMemo(() => {
    return FAQ_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  const toggleItem = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    const all = new Set();
    filteredCategories.forEach((cat) => {
      cat.items.forEach((item) => all.add(item.id));
    });
    setOpenIds(all);
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  const query = searchQuery.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    return FAQ_CATEGORIES.map((cat) => {
      if (activeCategory !== "all" && cat.id !== activeCategory) {
        return null;
      }
      if (!query) {
        return cat;
      }
      const matchedItems = cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(query) ||
          item.a.toLowerCase().includes(query)
      );
      if (matchedItems.length === 0) return null;
      return {
        ...cat,
        items: matchedItems,
      };
    }).filter(Boolean);
  }, [activeCategory, query]);

  const totalFilteredItems = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  return (
    <section id="faq" className="scroll-mt-24 py-20 md:py-28 bg-[#fafbfe]/70 border-t border-hairline/80">
      <div className="container-page">
        {/* Section Header */}
        {/* Section Header */}
        <div className="max-w-3xl mx-auto w-full text-center">
          <Reveal delay={0}>
            <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl tracking-tight text-center">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-base text-ink-soft leading-relaxed text-center md:text-lg max-w-2xl mx-auto">
              Holly can help you find answers to some common questions about
              NeighborConnector™ and how to get started building your circle today.
            </p>
          </Reveal>
        </div>

        {/* Main Grid: Left Holly Card & Navigation, Right Accordions */}
        <div className="mt-12 grid gap-10">
          {/* Left Column: Holly Assistant Card & Category Pills */}


          {/* Right Column: Search + Mobile Tabs + Accordions */}
          <div className="space-y-6">
            <Reveal delay={150}>
              {/* Search & Actions Bar */}


              {/* Mobile Category Horizontal Scroll Bar */}
              <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none">
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className={clsx(
                    "whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer",
                    activeCategory === "all"
                      ? "bg-brand text-white shadow-xs"
                      : "bg-white border border-hairline text-ink-soft hover:text-ink"
                  )}
                >
                  All ({totalCount})
                </button>
                {FAQ_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={clsx(
                        "whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer",
                        isActive
                          ? "bg-brand text-white shadow-xs"
                          : "bg-white border border-hairline text-ink-soft hover:text-ink"
                      )}
                    >
                      {cat.name} ({cat.items.length})
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* Results indicator if searching */}
            {query && (
              <p className="text-xs font-medium text-ink-soft">
                Showing {totalFilteredItems} result{totalFilteredItems === 1 ? "" : "s"} for &quot;
                <span className="text-ink font-semibold">{searchQuery}</span>&quot;
              </p>
            )}

            {/* Empty State */}
            {filteredCategories.length === 0 && (
              <div className="surface-card p-10 text-center bg-white">
                <HelpCircle className="size-10 text-ink-soft/40 mx-auto mb-3" />
                <h4 className="text-base font-bold text-ink">No questions matched your search</h4>
                <p className="text-xs text-ink-soft mt-1 max-w-sm mx-auto">
                  Try another keyword, or browse all categories to find the topic you need.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-mist text-brand hover:bg-brand hover:text-white transition-colors cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            )}

            {/* Accordion List Grouped by Category */}
            <div className="space-y-8">
              {filteredCategories.map((cat) => (
                <div key={cat.id} className="space-y-3">
                  {/* Category Header (shown when 'all' is selected or during search) */}
                  {(activeCategory === "all" || query) && (
                    <div className="flex items-center gap-3 pt-2">
                      <span className="h-2 w-2 rounded-full bg-leaf"></span>
                      <h3 className="text-base sm:text-lg font-bold text-ink">
                        {cat.name}
                      </h3>
                      <span className="text-xs font-semibold text-ink-soft/70">
                        ({cat.items.length})
                      </span>
                      <div className="flex-1 h-px bg-hairline"></div>
                    </div>
                  )}

                  {cat.items.map((item) => {
                    const isOpen = openIds.has(item.id);
                    return (
                      <div
                        key={item.id}
                        className={clsx(
                          "overflow-hidden rounded-2xl border transition-all duration-300 bg-white",
                          isOpen
                            ? "border-brand/30 shadow-md ring-1 ring-brand/10"
                            : "border-hairline shadow-soft hover:border-hairline-leaf hover:shadow-md"
                        )}
                      >
                        <h4>
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() => toggleItem(item.id)}
                            className="flex w-full items-center justify-between cursor-pointer px-5 py-4 sm:px-6 sm:py-4.5 text-left text-sm sm:text-base font-semibold text-ink group"
                          >
                            <span className="group-hover:text-brand transition-colors pr-4">
                              {item.q}
                            </span>
                            <span
                              className={clsx(
                                "size-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                                isOpen
                                  ? "bg-brand text-white rotate-180"
                                  : "bg-mist text-ink-soft group-hover:bg-sprout group-hover:text-brand"
                              )}
                            >
                              <ChevronDown className="size-4" aria-hidden="true" />
                            </span>
                          </button>
                        </h4>
                        <div
                          className={clsx(
                            "grid transition-all duration-300 ease-in-out",
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          )}
                        >
                          <div className="overflow-hidden">
                            <div className="px-5 pb-5 sm:px-6 sm:pb-5 pt-1 text-ink-soft border-t border-hairline/60 bg-gradient-to-b from-mist/20 to-transparent">
                              {/* Holly Answer Pill */}
                              <div className="flex items-start gap-3 mt-3">

                                <div className="text-sm leading-relaxed text-ink/90 flex-1">

                                  {formatAnswer(
                                    item.a.startsWith("Holly: ")
                                      ? item.a.replace(/^Holly:\s*/, "")
                                      : item.a
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
