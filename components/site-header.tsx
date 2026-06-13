"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certificates" },
  { href: "#socials", label: "Socials" },
] as const;

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, visible: false });
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Update indicator position when active section changes (scroll only, not hover)
  useEffect(() => {
    const idx = NAV_LINKS.findIndex((l) => l.href.slice(1) === activeSection);
    if (idx === -1) {
      // No active section (at hero) — keep position but fade out
      setIndicatorStyle((prev) => ({ ...prev, visible: false }));
      return;
    }

    const navEl = navRef.current;
    const linkEl = linkRefs.current[idx];
    if (!navEl || !linkEl) return;

    const navRect = navEl.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();

    setIndicatorStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      visible: true,
    });
  }, [activeSection]);

  // Scroll spy
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    function onScroll() {
      let current = "";
      for (const el of els) {
        if (window.scrollY >= el.offsetTop - 120) {
          current = el.id;
        }
      }
      setActiveSection(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "bg-[rgba(10,10,14,0.70)] backdrop-blur-[40px] saturate-[200%]",
        "border-b border-[rgba(255,255,255,0.06)]",
        "shadow-[0_1px_32px_rgba(0,0,0,0.35)]",
      )}
    >
      <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-lg font-extrabold tracking-[-0.02em] text-[#EBE8F0] hover:text-white transition-colors"
        >
          DC 洋洋<span className="text-[#E05862]" />
        </a>

        {/* Desktop nav — liquid glass trough */}
        <nav
          ref={navRef}
          className="hidden md:flex items-center relative rounded-full p-0.5
            bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)]
            backdrop-blur-xl
            shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          aria-label="Main navigation"
        >
          {/* Liquid glass indicator — fills the trough, moves only on selection */}
          <div
            className="absolute top-0.5 bottom-0.5 rounded-full
              bg-[rgba(255,255,255,0.10)] border border-[rgba(255,255,255,0.14)]
              backdrop-blur-sm
              shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_1px_4px_rgba(0,0,0,0.15)]
              transition-[left,width,opacity] duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1.2)]"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.visible ? 1 : 0,
            }}
          />

          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.href}
              ref={(el) => { linkRefs.current[idx] = el; }}
              href={link.href}
              className={cn(
                "relative z-10 px-3.5 py-2 text-[0.8125rem] font-medium rounded-full",
                "transition-colors duration-300",
                activeSection === link.href.slice(1)
                  ? "text-[#EBE8F0]"
                  : "text-[#8B8598] hover:text-[#C4BFD0]",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            "md:hidden flex items-center justify-center w-10 h-10 rounded-[0.625rem]",
            "border border-[rgba(255,255,255,0.08)]",
            "bg-[rgba(255,255,255,0.04)] backdrop-blur-md",
            "text-[#C4BFD0] hover:text-[#EBE8F0] hover:border-[rgba(255,255,255,0.14)]",
            "transition-all duration-200",
          )}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className={cn(
            "md:hidden border-t border-[rgba(255,255,255,0.06)]",
            "bg-[rgba(10,10,14,0.70)] backdrop-blur-[40px] saturate-[200%]",
            "px-6 py-4",
          )}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="block py-3 text-sm font-medium text-[#C4BFD0] border-b border-[rgba(255,255,255,0.06)] last:border-b-0 hover:text-[#EBE8F0] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
