"use client";

import { useEffect, type ReactNode } from "react";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='#']");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href) as HTMLElement | null;
      if (!target) return;

      e.preventDefault();
      smoothScrollTo(target, 900);

      // Update URL without jump
      history.pushState(null, "", href);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return <>{children}</>;
}
