import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileDown,
  HeartHandshake,
  MessageSquare,
  PlusCircle,
  QrCode,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";
import { RoadmapStepper } from "@/components/RoadmapStepper";

export const metadata = {
  title: "Getting Started Guide — How It Works | NeighborConnector™",
  description:
    "Your step-by-step guide to downloading NeighborConnector™, creating your profile, setting up private circles, posting updates and discovering what makes Circle Living different.",
};

const SCREENSHOTS = [
  {
    title: "Circle Home & Daily Check-In",
    desc: "One-tap reassurance for family and neighbors each morning.",
    webp: "/assets/hero.webp",
    fallback: "/assets/hero.png",
  },
  {
    title: "Coordinate Life & Outings",
    desc: "Discreet requests for rides, chores and everyday mutual aid.",
    webp: "/assets/how-it-works.webp",
    fallback: "/assets/how-it-works.png",
  },
  {
    title: "Private Circle Feed",
    desc: "Quiet, ad-free updates shared only with people you approve.",
    webp: "/assets/features.webp",
    fallback: "/assets/features.png",
  },
];

export default function GettingStartedGuidePage() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased selection:bg-sprout selection:text-brand overflow-x-clip w-full">
      <Navbar />

      <main className="pt-24 md:pt-28 overflow-x-clip w-full">
        {/* ============================================================== */}
        {/* HERO & DOWNLOAD GUIDE CTA                                      */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden py-14 md:py-20 border-b border-hairline bg-gradient-to-b from-mist/40 via-cream/30 to-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-sprout)_0%,transparent_70%)]"
          />

          <div className="container-page">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal delay={0}>
                <span className="eyebrow mx-auto">
                  <Rocket className="size-3.5" aria-hidden="true" />
                  Quick-Start Handbook
                </span>

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1]">
                  Getting Started <span className="text-gradient-brand">Guide</span>
                </h1>

                <p className="mt-5 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl mx-auto">
                  Welcome to NeighborConnector™. Follow these easy steps to get set up, invite your inner ring of neighbors or family and start experiencing Circle Living™.
                </p>

                {/* PDF Download Button */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="/assets/getting-started-guide.pdf"
                    download="NeighborConnector-Getting-Started-Guide.pdf"
                    className="inline-flex items-center gap-2.5 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lift hover:bg-brand-bright transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <FileDown className="size-4" />
                    <span>Download the Getting Started Guide (PDF)</span>
                  </a>

                  <a
                    href="#roadmap-section"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-6 py-3.5 text-sm font-semibold text-brand shadow-soft hover:bg-mist/40 transition-all hover:-translate-y-0.5"
                  >
                    <span>Jump to 8-Step Roadmap</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PART 1: DOWNLOADING THE APP                                    */}
        {/* ============================================================== */}
        <section className="py-16 md:py-24 border-b border-hairline bg-white">
          <div className="container-page">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <Reveal delay={0}>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="grid size-8 place-items-center rounded-xl bg-sprout text-leaf-deep font-bold text-sm">
                      1
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-leaf-deep">
                      Step One
                    </span>
                  </div>

                  <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
                    Downloading the App
                  </h2>

                  <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
                    NeighborConnector™ is available 100% free with zero advertisements on iOS and Android. Search for <strong>“NeighborConnector”</strong> in your app store or use the direct links below.
                  </p>

                  <ul className="mt-6 space-y-3 text-sm sm:text-base text-ink-soft">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-leaf-deep shrink-0 mt-0.5" />
                      <span><strong>iOS App Store:</strong> Compatible with iPhone and iPad running iOS 14.0 or later.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-leaf-deep shrink-0 mt-0.5" />
                      <span><strong>Google Play Store:</strong> Compatible with all modern Android smartphones and tablets.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-leaf-deep shrink-0 mt-0.5" />
                      <span><strong>100% Free:</strong> No in-app purchases, no premium paywalls, no subscriptions.</span>
                    </li>
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="https://apps.apple.com/us/app/neighbor-connector/id6759636423"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <picture>
                        <source srcSet="/assets/apple.webp" type="image/webp" />
                        <img
                          src="/assets/apple.png"
                          alt="Download on the App Store"
                          width={360}
                          height={120}
                          className="h-11 w-auto"
                        />
                      </picture>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.cts.neighbour_connector"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <picture>
                        <source srcSet="/assets/google.webp" type="image/webp" />
                        <img
                          src="/assets/google.png"
                          alt="Get it on Google Play"
                          width={360}
                          height={120}
                          className="h-11 w-auto"
                        />
                      </picture>
                    </a>
                  </div>
                </Reveal>
              </div>

              <div>
                <Reveal delay={100}>
                  <div className="surface-card p-8 rounded-3xl border border-hairline bg-gradient-to-br from-mist/50 to-sprout/30 shadow-soft text-center">
                    <div className="grid size-14 place-items-center rounded-2xl bg-white text-brand mx-auto mb-5 shadow-xs">
                      <Smartphone className="size-7" />
                    </div>
                    <h3 className="text-xl font-bold text-ink">Scan QR Code on Your Phone</h3>
                    <p className="mt-2 text-sm text-ink-soft max-w-sm mx-auto">
                      Scan this code with your mobile camera to immediately open the download page.
                    </p>
                    <div className="mt-6 inline-block p-4 rounded-2xl bg-white border border-hairline shadow-2xs">
                      <picture>
                        <source srcSet="/assets/qrcode.webp" type="image/webp" />
                        <img
                          src="/assets/qrcode.png"
                          alt="NeighborConnector App QR Download Code"
                          width={180}
                          height={180}
                          className="size-36 mx-auto object-contain"
                        />
                      </picture>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PART 2: CREATING A PROFILE                                     */}
        {/* ============================================================== */}
        <section className="py-16 md:py-24 border-b border-hairline bg-[#FBFBF9]">
          <div className="container-page">
            <div className="max-w-3xl">
              <Reveal delay={0}>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="grid size-8 place-items-center rounded-xl bg-sprout text-leaf-deep font-bold text-sm">
                    2
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-leaf-deep">
                    Step Two
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
                  Creating Your Profile
                </h2>

                <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
                  Setting up takes less than two minutes. You decide how much or how little information you wish to share with your trusted circle members.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <Reveal delay={50}>
                <div className="surface-card p-6 rounded-2xl border border-hairline bg-white h-full flex flex-col justify-between">
                  <div>
                    <span className="grid size-10 place-items-center rounded-xl bg-mist text-brand mb-4">
                      <UserCheck className="size-5" />
                    </span>
                    <h3 className="text-lg font-bold text-ink">Basic Details</h3>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                      Enter your first name and a clear friendly photo so your neighbors and family instantly recognize you.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-hairline text-xs font-semibold text-leaf-deep">
                    ✓ Always under your control
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="surface-card p-6 rounded-2xl border border-hairline bg-white h-full flex flex-col justify-between">
                  <div>
                    <span className="grid size-10 place-items-center rounded-xl bg-sprout text-leaf-deep mb-4">
                      <ShieldCheck className="size-5" />
                    </span>
                    <h3 className="text-lg font-bold text-ink">Emergency Contacts</h3>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                      Optionally list up to 3 emergency contacts (e.g. an adult child or local doctor) for quiet peace of mind.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-hairline text-xs font-semibold text-leaf-deep">
                    ✓ 100% Optional
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="surface-card p-6 rounded-2xl border border-hairline bg-white h-full flex flex-col justify-between">
                  <div>
                    <span className="grid size-10 place-items-center rounded-xl bg-cream text-brand border border-hairline mb-4">
                      <Sparkles className="size-5" />
                    </span>
                    <h3 className="text-lg font-bold text-ink">Support Preferences</h3>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                      Indicate practical ways you like to help (rides, tool lending, plant care) and how you prefer to check in.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-hairline text-xs font-semibold text-leaf-deep">
                    ✓ Easy to update anytime
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PART 3: CREATING OR JOINING A CIRCLE                          */}
        {/* ============================================================== */}
        <section className="py-16 md:py-24 border-b border-hairline bg-white">
          <div className="container-page">
            <div className="max-w-3xl">
              <Reveal delay={0}>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="grid size-8 place-items-center rounded-xl bg-sprout text-leaf-deep font-bold text-sm">
                    3
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-leaf-deep">
                    Step Three
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
                  Creating or Joining a Circle
                </h2>

                <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
                  NeighborConnector™ is organized around micro-circles (typically 2 to 10 people). You can belong to multiple circles for different areas of life.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Reveal delay={50}>
                <div className="surface-card p-8 rounded-3xl border border-hairline bg-gradient-to-br from-white to-mist/40 shadow-soft">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand text-white mb-4">
                    Option A
                  </span>
                  <h3 className="text-2xl font-bold text-ink">Create a New Circle</h3>
                  <p className="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed">
                    Tap <strong>“Create Circle”</strong> and choose a friendly name (e.g. <em>“Oak Maple Neighbors”</em> or <em>“Johnson Family Care”</em>). The app generates a unique private invite code you can text or hand directly to people you know.
                  </p>
                  <div className="mt-6 rounded-2xl bg-white border border-hairline p-4 text-xs text-ink-soft space-y-2">
                    <p className="font-semibold text-brand">Admin Privileges:</p>
                    <p>• You review and approve every member before they gain access.</p>
                    <p>• No stranger can search for or view your circle.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="surface-card p-8 rounded-3xl border border-hairline bg-gradient-to-br from-white to-sprout/30 shadow-soft">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-leaf-deep text-white mb-4">
                    Option B
                  </span>
                  <h3 className="text-2xl font-bold text-ink">Join an Existing Circle</h3>
                  <p className="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed">
                    Did a neighbor or family member send you an invitation? Tap <strong>“Join Circle”</strong> and enter their 6-digit access code. Once the circle coordinator approves, you are in!
                  </p>
                  <div className="mt-6 rounded-2xl bg-white border border-hairline p-4 text-xs text-ink-soft space-y-2">
                    <p className="font-semibold text-leaf-deep">Safety First:</p>
                    <p>• Fast one-tap entry without lengthy background forms.</p>
                    <p>• Instant access to morning check-ins and shared group calendar.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PART 4: HOW TO POST                                           */}
        {/* ============================================================== */}
        <section className="py-16 md:py-24 border-b border-hairline bg-[#FBFBF9]">
          <div className="container-page">
            <div className="max-w-3xl">
              <Reveal delay={0}>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="grid size-8 place-items-center rounded-xl bg-sprout text-leaf-deep font-bold text-sm">
                    4
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-leaf-deep">
                    Step Four
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
                  How to Post &amp; Coordinate
                </h2>

                <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
                  Posting in NeighborConnector™ is simple and low-stress. Choose what you need with one tap:
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal delay={0}>
                <div className="surface-card p-6 rounded-2xl border border-hairline bg-white h-full flex flex-col justify-between">
                  <div>
                    <span className="grid size-11 place-items-center rounded-xl bg-sprout text-leaf-deep mb-4">
                      <ShieldCheck className="size-6" />
                    </span>
                    <h3 className="text-lg font-bold text-ink">Morning Check-In</h3>
                    <p className="mt-2 text-xs sm:text-sm text-ink-soft leading-relaxed">
                      Tap “I’m Safe &amp; Well”. A quiet notification reassures your circle that your day has begun smoothly.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={60}>
                <div className="surface-card p-6 rounded-2xl border border-hairline bg-white h-full flex flex-col justify-between">
                  <div>
                    <span className="grid size-11 place-items-center rounded-xl bg-mist text-brand mb-4">
                      <HeartHandshake className="size-6" />
                    </span>
                    <h3 className="text-lg font-bold text-ink">Ask a Favor</h3>
                    <p className="mt-2 text-xs sm:text-sm text-ink-soft leading-relaxed">
                      Need a ladder, someone to shovel snow, or a quick errand? Post a simple favor without feeling awkward.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="surface-card p-6 rounded-2xl border border-hairline bg-white h-full flex flex-col justify-between">
                  <div>
                    <span className="grid size-11 place-items-center rounded-xl bg-cream text-brand border border-hairline mb-4">
                      <Rocket className="size-6" />
                    </span>
                    <h3 className="text-lg font-bold text-ink">Offer a Ride</h3>
                    <p className="mt-2 text-xs sm:text-sm text-ink-soft leading-relaxed">
                      Headed to the pharmacy or grocery store? Let your circle know in case someone wants to ride along.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="surface-card p-6 rounded-2xl border border-hairline bg-white h-full flex flex-col justify-between">
                  <div>
                    <span className="grid size-11 place-items-center rounded-xl bg-mist text-brand mb-4">
                      <MessageSquare className="size-6" />
                    </span>
                    <h3 className="text-lg font-bold text-ink">Circle Chat</h3>
                    <p className="mt-2 text-xs sm:text-sm text-ink-soft leading-relaxed">
                      Private group conversation, photo sharing and event planning free from political debates or spam.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PART 5: WHAT MAKES THE APP DIFFERENT                          */}
        {/* ============================================================== */}
        <section className="py-16 md:py-24 border-b border-hairline bg-white">
          <div className="container-page">
            <div className="max-w-3xl">
              <Reveal delay={0}>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="grid size-8 place-items-center rounded-xl bg-sprout text-leaf-deep font-bold text-sm">
                    5
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-leaf-deep">
                    Step Five
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
                  What Makes NeighborConnector™ Different
                </h2>

                <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
                  Traditional social apps thrive on outrage, massive anonymous feeds and ad impressions. NeighborConnector™ was designed with an opposite philosophy:
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Reveal delay={50}>
                <div className="surface-card p-7 rounded-3xl border border-hairline bg-cream/40">
                  <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2 text-red-700">
                    ✕ Traditional Social Platforms
                  </h3>
                  <ul className="space-y-3 text-sm text-ink-soft">
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Huge feeds of strangers that breed anxiety and arguments.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Intrusive sponsored ads and monetization of your personal data.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Broadcast shouting instead of local, personal mutual care.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="surface-card p-7 rounded-3xl border border-hairline-leaf bg-gradient-to-br from-white to-sprout/40 shadow-soft">
                  <h3 className="text-lg font-bold text-leaf-deep mb-4 flex items-center gap-2">
                    ✓ NeighborConnector™ Circle Living
                  </h3>
                  <ul className="space-y-3 text-sm text-ink font-medium">
                    <li className="flex items-start gap-2.5">
                      <span className="text-leaf-deep font-bold">✓</span>
                      <span><strong>Private invite-only circles:</strong> Only people you personally approve.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-leaf-deep font-bold">✓</span>
                      <span><strong>Zero advertisements &amp; no data selling:</strong> Funded by a nonprofit.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-leaf-deep font-bold">✓</span>
                      <span><strong>Everyday mutual support:</strong> Daily check-ins, rides and chores.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PART 6: SCREENSHOTS                                           */}
        {/* ============================================================== */}
        <section className="py-16 md:py-24 border-b border-hairline bg-[#FBFBF9]">
          <div className="container-page">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal delay={0}>
                <div className="flex items-center justify-center gap-2.5 mb-3">
                  <span className="grid size-8 place-items-center rounded-xl bg-sprout text-leaf-deep font-bold text-sm">
                    6
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-leaf-deep">
                    Step Six
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
                  App Screenshots &amp; Visual Tour
                </h2>

                <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto">
                  A preview of how simple, uncluttered and large-print friendly the app is for every generation.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {SCREENSHOTS.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 80}>
                  <div className="surface-card p-6 rounded-3xl border border-hairline bg-white shadow-soft flex flex-col justify-between h-full">
                    <div className="relative mx-auto w-full max-w-xs mb-6">
                      <picture>
                        <source srcSet={item.webp} type="image/webp" />
                        <img
                          src={item.fallback}
                          alt={item.title}
                          width={656}
                          height={704}
                          loading="lazy"
                          className="w-full h-auto object-contain rounded-2xl drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                        />
                      </picture>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                      <p className="mt-1 text-xs sm:text-sm text-ink-soft leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PART 7: 8-STEP ROADMAP SECTION                                 */}
        {/* ============================================================== */}
        <section id="roadmap-section" className="py-16 md:py-24 bg-white border-b border-hairline">
          <div className="container-page">
            <div className="max-w-3xl">
              <Reveal delay={0}>
                <span className="eyebrow">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Roadmap
                </span>

                <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.75rem]">
                  The 8-Step Roadmap
                </h2>

                <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
                  Put NeighborConnector™ to work step by step. Expand each milestone below to discover helpful tips for building your circle.
                </p>
              </Reveal>
            </div>

            <div className="mt-12">
              <RoadmapStepper />
            </div>

            <Reveal delay={100} className="mt-12 text-center">
              <Link
                href="/how-it-works/get-started"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-cream/50 px-6 py-3 text-sm font-semibold text-brand hover:bg-mist transition-all"
              >
                <span>View Dedicated 8-Step Roadmap Page</span>
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        <DownloadCta />
      </main>

      <Footer />
    </div>
  );
}
