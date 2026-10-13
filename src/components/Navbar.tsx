import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { Icon } from "../lib/Icons";
import { navLinks } from "../lib/data";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-[11px] bg-brand-500 text-white shadow-[0_10px_22px_-10px_rgba(59,130,246,0.9)] transition-transform duration-300 group-hover:-rotate-6">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.5 13.6 12 21l-7.5-7.4A5 5 0 1 1 12 7c1.5-2 4-2.4 5-1.5a5.4 5.4 0 0 1 2.5 8.1Z" />
          <path d="M4 12h3.5l1.5-3 2.5 6 1.6-3h3" />
        </svg>
        <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-white text-[8px] font-bold text-brand-500 shadow">
          +
        </span>
      </span>
      <span className={cn("text-[19px] font-extrabold tracking-tight", tone === "light" ? "text-ink" : "text-white")}>
        Vital+Flow
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-all duration-300",
          scrolled ? "border-line shadow-[0_10px_30px_-24px_rgba(14,27,51,0.4)]" : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-[74px] w-full max-w-[1180px] items-center justify-between gap-6 px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.slice(1).map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors duration-200",
                    isActive ? "text-brand-600" : "text-muted hover:text-ink",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-[13.5px] font-bold text-white shadow-[0_12px_26px_-12px_rgba(59,130,246,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 sm:inline-flex"
            >
              Book a call
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand-400 lg:hidden"
            >
              <Icon name="menu" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={cn("fixed inset-0 z-[60] lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}>
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-white px-6 py-6 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink"
            >
              <Icon name="x" className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-1">
            {navLinks.map((l, i) => (
              <NavLink
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${open ? 100 + i * 50 : 0}ms` }}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-between rounded-2xl px-4 py-3.5 text-[17px] font-bold transition-all duration-500",
                    isActive ? "bg-brand-50 text-brand-600" : "text-ink hover:bg-paper",
                    open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
                  )
                }
              >
                {l.label}
                <Icon name="arrow-up-right" className="h-4 w-4 text-brand-500" />
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto space-y-4 pt-8">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-bold text-white"
            >
              Book a call
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <a
              href="tel:+18005550199"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-muted"
            >
              <Icon name="phone" className="h-4 w-4 text-brand-500" /> +1 (800) 555-0199
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
