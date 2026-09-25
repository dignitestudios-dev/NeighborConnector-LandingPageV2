import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-white">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src="/assets/logo-trim.png"
              alt="NeighborConnector"
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
              NeighborConnector™ is a free app by Community Care Housing Foundation, a nonprofit dedicated to affordable housing and stronger, more supportive communities.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold text-ink">Explore</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-sm text-ink-soft transition-colors hover:text-brand"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-ink-soft transition-colors hover:text-brand"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#why"
                  className="text-sm text-ink-soft transition-colors hover:text-brand"
                >
                  Why NeighborConnector
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-ink-soft transition-colors hover:text-brand"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-ink-soft transition-colors hover:text-brand"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-sm text-ink-soft transition-colors hover:text-brand"
                >
                  Download
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-ink">Get in touch</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:Info@CommunityCareHousing.org"
                  className="flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-brand"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  <span className="break-all">Info@CommunityCareHousing.org</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+17206932522"
                  className="flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-brand"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  (720) 693-2522
                </a>
              </li>
              <li>
                <a
                  href="https://www.communitycarehousing.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-ink-soft transition-colors hover:text-brand"
                >
                  Community Care Housing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-hairline pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-soft">
            © 2026 Community Care Housing Foundation. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://www.neighborconnector.org/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-ink-soft transition-colors hover:text-brand"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.neighborconnector.org/terms-of-service"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-ink-soft transition-colors hover:text-brand"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
