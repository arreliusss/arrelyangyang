"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger index for delayed reveal (0-based) */
  stagger?: number;
  /** Whether to apply blur→clear transition */
  withBlur?: boolean;
}

export default function ScrollReveal({ children, className, stagger = 0, withBlur = true }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "section-observe",
        withBlur && "section-observe-blur",
        className,
      )}
      style={{ transitionDelay: `${stagger * 60}ms` }}
    >
      {children}
    </div>
  );
}
